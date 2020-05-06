import { Platform } from 'react-native';
import { WEB_COLORS, ColorItem } from '../../data/colors';
import { TOGGLE_FAVORITE } from '../actions/colors';
import * as SQLite from 'expo-sqlite';

let db: SQLite.WebSQLDatabase;
const initDb = () => {
  if (Platform.OS !== 'web' && !db) {
    db = SQLite.openDatabase('data.db');
    console.log('initialize db');
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS favorites (
            id INTEGER PRIMARY KEY NOT NULL
          )`,
        undefined
      );
    });
  }
};

export const dbExecute = (
  query: string,
  params: any,
  callback: any = undefined
) => {
  if (!db) initDb();
  console.log('db execute:', query, params);
  db &&
    db.transaction(
      (tx) => {
        tx.executeSql(query, params, callback, (trans, err) => {
          console.log('error occurred', err);
        });
      },
      (_, err) => {
        console.log('transaction error:', err);
      }
    );
};

dbExecute('select * from favorites', [], (_, result: any) => {
  const { rows } = result;
  const { _array } = rows;
  initialState.favoriteColors = new Set(_array.map((it: any) => it.id));
});

export interface IColorsState {
  colors: ColorItem[];
  filteredColors: ColorItem[];
  favoriteColors: Set<number>;
}

const initialState = {
  colors: WEB_COLORS,
  filteredColors: WEB_COLORS,
  favoriteColors: new Set<number>(),
} as IColorsState;

const colorsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const favoriteColors = new Set(state.favoriteColors);
      if (favoriteColors.has(action.colorId)) {
        dbExecute('delete from favorites where id = ?', [action.colorId]);
        favoriteColors.delete(action.colorId);
      } else {
        dbExecute('insert into favorites(id) values (?)', [action.colorId]);
        favoriteColors.add(action.colorId);
      }
      return { ...state, favoriteColors };
    default:
      return state;
  }
};

export default colorsReducer;
