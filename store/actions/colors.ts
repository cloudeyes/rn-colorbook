export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = (id: number) => {
  return { type: TOGGLE_FAVORITE, colorId: id };
};
