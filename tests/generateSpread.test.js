import {generateSpread} from '../scripts/helpers.js';

test('expect generateSpread to be defined', () => {
    expect(generateSpread).toBeDefined();
});

test('expect generateSpread with 0 steps to be [start, end]', () => {
    expect(generateSpread(0, 0, 0)).toStrictEqual([0, 0]);
    expect(generateSpread(0, 10, 0)).toStrictEqual([0, 10]);
    expect(generateSpread(10, 0, 0)).toStrictEqual([10, 0]);
    expect(generateSpread(50, 100, 0)).toStrictEqual([50, 100]);
});

test('expect generateSpread with 1 step to be [start, mid, end]', () => {
    expect(generateSpread(0, 0, 1)).toStrictEqual([0, 0, 0]);
    expect(generateSpread(0, 10, 1)).toStrictEqual([0, 5, 10]);
    expect(generateSpread(10, 0, 1)).toStrictEqual([10, 5, 0]);
    expect(generateSpread(50, 100, 1)).toStrictEqual([50, 75, 100]);
    expect(generateSpread(9, 7, 1)).toStrictEqual([9, 8, 7]);
    expect(generateSpread(1, 4, 1)).toStrictEqual([1, 3, 4]);
});

test('different spreads', () => {
    expect(generateSpread(0, 0, 5)).toStrictEqual([0, 0, 0, 0, 0, 0, 0]);
    expect(generateSpread(0, 10, 2)).toStrictEqual([0, 3, 7, 10]);
    expect(generateSpread(10, 0, 3)).toStrictEqual([10, 8, 5, 3, 0]);
    expect(generateSpread(0, 255, 10)).toStrictEqual([0, 23, 46, 70, 93, 116, 139, 162, 185, 209, 232, 255]);
    expect(generateSpread(9, 7, 1)).toStrictEqual([9, 8, 7]);
    expect(generateSpread(1, 3, 10)).toStrictEqual([1, 1, 1, 2, 2, 2,2, 2, 2, 3, 3, 3]);
});
