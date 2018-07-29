import { SPACE, ACCEPT, SYMBOLS, BACKSPACE, SHIFT } from "./constants";

export const chde = [
	['q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p', '\u00FC'],
	['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '\u00F6', '\u00E4'],
	[SHIFT, 'y', 'x', 'c', 'v', 'b', 'n', 'm', BACKSPACE],
	[SYMBOLS, ',', SPACE, '.', ACCEPT]
];

export const symbols = [
	['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
	['@', '#', '$', '_', '&', '-', '+', '(', ')', '/'],
  ['*', '"', '\'', ':', ';', '!', '?', BACKSPACE],
  [SYMBOLS, ',', SPACE, '.', ACCEPT]
];
