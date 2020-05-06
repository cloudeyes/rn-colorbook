import { WEB_COLORS, ColorItem } from '../../data/colors';
import { TOGGLE_FAVORITE } from '../actions/colors';

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
        favoriteColors.delete(action.colorId);
      } else {
        favoriteColors.add(action.colorId);
      }
      console.log('favoriteColors:', favoriteColors);
      return { ...state, favoriteColors };
    default:
      return state;
  }
};

export default colorsReducer;
