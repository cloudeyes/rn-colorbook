/**
 * https://www.w3schools.com/colors/colors_groups.asp
 */

export interface ColorItem {
  id: number;
  group: string;
  name: string;
  hex: string;
  isFavorite?: boolean;
  tags: { [key: string]: boolean };
}

export const WEB_COLORS: ColorItem[] = [
  {
    id: 1,
    group: 'Pink',
    name: 'Pink ',
    hex: '#FFC0CB',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 2,
    group: 'Pink',
    name: 'LightPink ',
    hex: '#FFB6C1',
    tags: { Dark: false, Light: true, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 3,
    group: 'Pink',
    name: 'HotPink ',
    hex: '#FF69B4',
    tags: { Dark: false, Light: false, Deep: false, Hot: true, Aqua: false },
  },
  {
    id: 4,
    group: 'Pink',
    name: 'DeepPink ',
    hex: '#FF1493',
    tags: { Dark: false, Light: false, Deep: true, Hot: false, Aqua: false },
  },
  {
    id: 5,
    group: 'Pink',
    name: 'PaleVioletRed ',
    hex: '#DB7093',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 6,
    group: 'Pink',
    name: 'MediumVioletRed ',
    hex: '#C71585',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 7,
    group: 'Purple',
    name: 'Lavender ',
    hex: '#E6E6FA',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 8,
    group: 'Purple',
    name: 'Thistle ',
    hex: '#D8BFD8',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 9,
    group: 'Purple',
    name: 'Plum ',
    hex: '#DDA0DD',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 10,
    group: 'Purple',
    name: 'Orchid ',
    hex: '#DA70D6',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 11,
    group: 'Purple',
    name: 'Violet ',
    hex: '#EE82EE',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 12,
    group: 'Purple',
    name: 'Fuchsia ',
    hex: '#FF00FF',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 13,
    group: 'Purple',
    name: 'Magenta ',
    hex: '#FF00FF',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 14,
    group: 'Purple',
    name: 'MediumOrchid ',
    hex: '#BA55D3',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 15,
    group: 'Purple',
    name: 'DarkOrchid ',
    hex: '#9932CC',
    tags: { Dark: true, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 16,
    group: 'Purple',
    name: 'DarkViolet ',
    hex: '#9400D3',
    tags: { Dark: true, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 17,
    group: 'Purple',
    name: 'BlueViolet ',
    hex: '#8A2BE2',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 18,
    group: 'Purple',
    name: 'DarkMagenta ',
    hex: '#8B008B',
    tags: { Dark: true, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 19,
    group: 'Purple',
    name: 'Purple ',
    hex: '#800080',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 20,
    group: 'Purple',
    name: 'MediumPurple ',
    hex: '#9370DB',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 21,
    group: 'Purple',
    name: 'MediumSlateBlue ',
    hex: '#7B68EE',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 22,
    group: 'Purple',
    name: 'SlateBlue ',
    hex: '#6A5ACD',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 23,
    group: 'Purple',
    name: 'DarkSlateBlue ',
    hex: '#483D8B',
    tags: { Dark: true, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 24,
    group: 'Purple',
    name: 'RebeccaPurple ',
    hex: '#663399',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 25,
    group: 'Purple',
    name: 'Indigo  ',
    hex: '#4B0082',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 26,
    group: 'Red',
    name: 'LightSalmon ',
    hex: '#FFA07A',
    tags: { Dark: false, Light: true, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 27,
    group: 'Red',
    name: 'Salmon ',
    hex: '#FA8072',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 28,
    group: 'Red',
    name: 'DarkSalmon ',
    hex: '#E9967A',
    tags: { Dark: true, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 29,
    group: 'Red',
    name: 'LightCoral ',
    hex: '#F08080',
    tags: { Dark: false, Light: true, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 30,
    group: 'Red',
    name: 'IndianRed  ',
    hex: '#CD5C5C',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 31,
    group: 'Red',
    name: 'Crimson ',
    hex: '#DC143C',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 32,
    group: 'Red',
    name: 'Red ',
    hex: '#FF0000',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 33,
    group: 'Red',
    name: 'FireBrick ',
    hex: '#B22222',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 34,
    group: 'Red',
    name: 'DarkRed ',
    hex: '#8B0000',
    tags: { Dark: true, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 35,
    group: 'Orange',
    name: 'Orange ',
    hex: '#FFA500',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 36,
    group: 'Orange',
    name: 'DarkOrange ',
    hex: '#FF8C00',
    tags: { Dark: true, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 37,
    group: 'Orange',
    name: 'Coral ',
    hex: '#FF7F50',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 38,
    group: 'Orange',
    name: 'Tomato ',
    hex: '#FF6347',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 39,
    group: 'Orange',
    name: 'OrangeRed ',
    hex: '#FF4500',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 40,
    group: 'Yellow',
    name: 'Gold ',
    hex: '#FFD700',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 41,
    group: 'Yellow',
    name: 'Yellow ',
    hex: '#FFFF00',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 42,
    group: 'Yellow',
    name: 'LightYellow ',
    hex: '#FFFFE0',
    tags: { Dark: false, Light: true, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 43,
    group: 'Yellow',
    name: 'LemonChiffon ',
    hex: '#FFFACD',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 44,
    group: 'Yellow',
    name: 'LightGoldenRodYellow ',
    hex: '#FAFAD2',
    tags: { Dark: false, Light: true, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 45,
    group: 'Yellow',
    name: 'PapayaWhip ',
    hex: '#FFEFD5',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 46,
    group: 'Yellow',
    name: 'Moccasin ',
    hex: '#FFE4B5',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 47,
    group: 'Yellow',
    name: 'PeachPuff ',
    hex: '#FFDAB9',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 48,
    group: 'Yellow',
    name: 'PaleGoldenRod ',
    hex: '#EEE8AA',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 49,
    group: 'Yellow',
    name: 'Khaki ',
    hex: '#F0E68C',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 50,
    group: 'Yellow',
    name: 'DarkKhaki ',
    hex: '#BDB76B',
    tags: { Dark: true, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 51,
    group: 'Green',
    name: 'GreenYellow ',
    hex: '#ADFF2F',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 52,
    group: 'Green',
    name: 'Chartreuse ',
    hex: '#7FFF00',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 53,
    group: 'Green',
    name: 'LawnGreen ',
    hex: '#7CFC00',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 54,
    group: 'Green',
    name: 'Lime ',
    hex: '#00FF00',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 55,
    group: 'Green',
    name: 'LimeGreen ',
    hex: '#32CD32',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 56,
    group: 'Green',
    name: 'PaleGreen ',
    hex: '#98FB98',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 57,
    group: 'Green',
    name: 'LightGreen ',
    hex: '#90EE90',
    tags: { Dark: false, Light: true, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 58,
    group: 'Green',
    name: 'MediumSpringGreen ',
    hex: '#00FA9A',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 59,
    group: 'Green',
    name: 'SpringGreen ',
    hex: '#00FF7F',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 60,
    group: 'Green',
    name: 'MediumSeaGreen ',
    hex: '#3CB371',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: true },
  },
  {
    id: 61,
    group: 'Green',
    name: 'SeaGreen ',
    hex: '#2E8B57',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: true },
  },
  {
    id: 62,
    group: 'Green',
    name: 'ForestGreen ',
    hex: '#228B22',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 63,
    group: 'Green',
    name: 'Green ',
    hex: '#008000',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 64,
    group: 'Green',
    name: 'DarkGreen ',
    hex: '#006400',
    tags: { Dark: true, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 65,
    group: 'Green',
    name: 'YellowGreen ',
    hex: '#9ACD32',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 66,
    group: 'Green',
    name: 'OliveDrab ',
    hex: '#6B8E23',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 67,
    group: 'Green',
    name: 'DarkOliveGreen ',
    hex: '#556B2F',
    tags: { Dark: true, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 68,
    group: 'Green',
    name: 'MediumAquaMarine ',
    hex: '#66CDAA',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: true },
  },
  {
    id: 69,
    group: 'Green',
    name: 'DarkSeaGreen ',
    hex: '#8FBC8F',
    tags: { Dark: true, Light: false, Deep: false, Hot: false, Aqua: true },
  },
  {
    id: 70,
    group: 'Green',
    name: 'LightSeaGreen ',
    hex: '#20B2AA',
    tags: { Dark: false, Light: true, Deep: false, Hot: false, Aqua: true },
  },
  {
    id: 71,
    group: 'Green',
    name: 'DarkCyan ',
    hex: '#008B8B',
    tags: { Dark: true, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 72,
    group: 'Green',
    name: 'Teal ',
    hex: '#008080',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 73,
    group: 'Cyan',
    name: 'Aqua ',
    hex: '#00FFFF',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: true },
  },
  {
    id: 74,
    group: 'Cyan',
    name: 'Cyan ',
    hex: '#00FFFF',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 75,
    group: 'Cyan',
    name: 'LightCyan ',
    hex: '#E0FFFF',
    tags: { Dark: false, Light: true, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 76,
    group: 'Cyan',
    name: 'PaleTurquoise ',
    hex: '#AFEEEE',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 77,
    group: 'Cyan',
    name: 'Aquamarine ',
    hex: '#7FFFD4',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: true },
  },
  {
    id: 78,
    group: 'Cyan',
    name: 'Turquoise ',
    hex: '#40E0D0',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 79,
    group: 'Cyan',
    name: 'MediumTurquoise ',
    hex: '#48D1CC',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 80,
    group: 'Cyan',
    name: 'DarkTurquoise ',
    hex: '#00CED1',
    tags: { Dark: true, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 81,
    group: 'Blue',
    name: 'CadetBlue ',
    hex: '#5F9EA0',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 82,
    group: 'Blue',
    name: 'SteelBlue ',
    hex: '#4682B4',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 83,
    group: 'Blue',
    name: 'LightSteelBlue ',
    hex: '#B0C4DE',
    tags: { Dark: false, Light: true, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 84,
    group: 'Blue',
    name: 'LightBlue ',
    hex: '#ADD8E6',
    tags: { Dark: false, Light: true, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 85,
    group: 'Blue',
    name: 'PowderBlue ',
    hex: '#B0E0E6',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 86,
    group: 'Blue',
    name: 'LightSkyBlue ',
    hex: '#87CEFA',
    tags: { Dark: false, Light: true, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 87,
    group: 'Blue',
    name: 'SkyBlue ',
    hex: '#87CEEB',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 88,
    group: 'Blue',
    name: 'CornflowerBlue ',
    hex: '#6495ED',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 89,
    group: 'Blue',
    name: 'DeepSkyBlue ',
    hex: '#00BFFF',
    tags: { Dark: false, Light: false, Deep: true, Hot: false, Aqua: false },
  },
  {
    id: 90,
    group: 'Blue',
    name: 'DodgerBlue ',
    hex: '#1E90FF',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 91,
    group: 'Blue',
    name: 'RoyalBlue ',
    hex: '#4169E1',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 92,
    group: 'Blue',
    name: 'Blue ',
    hex: '#0000FF',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 93,
    group: 'Blue',
    name: 'MediumBlue ',
    hex: '#0000CD',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 94,
    group: 'Blue',
    name: 'DarkBlue ',
    hex: '#00008B',
    tags: { Dark: true, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 95,
    group: 'Blue',
    name: 'Navy ',
    hex: '#000080',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 96,
    group: 'Blue',
    name: 'MidnightBlue ',
    hex: '#191970',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 97,
    group: 'Brown',
    name: 'Cornsilk ',
    hex: '#FFF8DC',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 98,
    group: 'Brown',
    name: 'BlanchedAlmond ',
    hex: '#FFEBCD',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 99,
    group: 'Brown',
    name: 'Bisque ',
    hex: '#FFE4C4',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 100,
    group: 'Brown',
    name: 'NavajoWhite ',
    hex: '#FFDEAD',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 101,
    group: 'Brown',
    name: 'Wheat ',
    hex: '#F5DEB3',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 102,
    group: 'Brown',
    name: 'BurlyWood ',
    hex: '#DEB887',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 103,
    group: 'Brown',
    name: 'Tan ',
    hex: '#D2B48C',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 104,
    group: 'Brown',
    name: 'RosyBrown ',
    hex: '#BC8F8F',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 105,
    group: 'Brown',
    name: 'SandyBrown ',
    hex: '#F4A460',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 106,
    group: 'Brown',
    name: 'GoldenRod ',
    hex: '#DAA520',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 107,
    group: 'Brown',
    name: 'DarkGoldenRod ',
    hex: '#B8860B',
    tags: { Dark: true, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 108,
    group: 'Brown',
    name: 'Peru ',
    hex: '#CD853F',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 109,
    group: 'Brown',
    name: 'Chocolate ',
    hex: '#D2691E',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 110,
    group: 'Brown',
    name: 'Olive ',
    hex: '#808000',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 111,
    group: 'Brown',
    name: 'SaddleBrown ',
    hex: '#8B4513',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 112,
    group: 'Brown',
    name: 'Sienna ',
    hex: '#A0522D',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 113,
    group: 'Brown',
    name: 'Brown ',
    hex: '#A52A2A',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 114,
    group: 'Brown',
    name: 'Maroon ',
    hex: '#800000',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 115,
    group: 'White',
    name: 'White ',
    hex: '#FFFFFF',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 116,
    group: 'White',
    name: 'Snow ',
    hex: '#FFFAFA',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 117,
    group: 'White',
    name: 'HoneyDew ',
    hex: '#F0FFF0',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 118,
    group: 'White',
    name: 'MintCream ',
    hex: '#F5FFFA',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 119,
    group: 'White',
    name: 'Azure ',
    hex: '#F0FFFF',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: true },
  },
  {
    id: 120,
    group: 'White',
    name: 'AliceBlue ',
    hex: '#F0F8FF',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 121,
    group: 'White',
    name: 'GhostWhite ',
    hex: '#F8F8FF',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 122,
    group: 'White',
    name: 'WhiteSmoke ',
    hex: '#F5F5F5',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 123,
    group: 'White',
    name: 'SeaShell ',
    hex: '#FFF5EE',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: true },
  },
  {
    id: 124,
    group: 'White',
    name: 'Beige ',
    hex: '#F5F5DC',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 125,
    group: 'White',
    name: 'OldLace ',
    hex: '#FDF5E6',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 126,
    group: 'White',
    name: 'FloralWhite ',
    hex: '#FFFAF0',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 127,
    group: 'White',
    name: 'Ivory ',
    hex: '#FFFFF0',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 128,
    group: 'White',
    name: 'AntiqueWhite ',
    hex: '#FAEBD7',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 129,
    group: 'White',
    name: 'Linen ',
    hex: '#FAF0E6',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 130,
    group: 'White',
    name: 'LavenderBlush ',
    hex: '#FFF0F5',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 131,
    group: 'White',
    name: 'MistyRose ',
    hex: '#FFE4E1',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 132,
    group: 'Grey',
    name: 'Gainsboro ',
    hex: '#DCDCDC',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 133,
    group: 'Grey',
    name: 'LightGray ',
    hex: '#D3D3D3',
    tags: { Dark: false, Light: true, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 134,
    group: 'Grey',
    name: 'Silver ',
    hex: '#C0C0C0',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 135,
    group: 'Grey',
    name: 'DarkGray ',
    hex: '#A9A9A9',
    tags: { Dark: true, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 136,
    group: 'Grey',
    name: 'DimGray ',
    hex: '#696969',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 137,
    group: 'Grey',
    name: 'Gray ',
    hex: '#808080',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 138,
    group: 'Grey',
    name: 'LightSlateGray ',
    hex: '#778899',
    tags: { Dark: false, Light: true, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 139,
    group: 'Grey',
    name: 'SlateGray ',
    hex: '#708090',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 140,
    group: 'Grey',
    name: 'DarkSlateGray ',
    hex: '#2F4F4F',
    tags: { Dark: true, Light: false, Deep: false, Hot: false, Aqua: false },
  },
  {
    id: 141,
    group: 'Grey',
    name: 'Black ',
    hex: '#000000',
    tags: { Dark: false, Light: false, Deep: false, Hot: false, Aqua: false },
  },
];

export const COLOR_GROUPS = {} as { [key: string]: ColorItem[] };

for (const item of WEB_COLORS) {
  let group = COLOR_GROUPS[item.group];
  if (!COLOR_GROUPS.hasOwnProperty(item.group)) {
    COLOR_GROUPS[item.group] = group = [];
  }
  group.push(item);
}
