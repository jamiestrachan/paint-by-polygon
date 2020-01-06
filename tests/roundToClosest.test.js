import {roundToClosest} from '../scripts/helpers.js';

test('expect roundToClosest to be defined', () => {
    expect(roundToClosest).toBeDefined();
});

test('expect roundToClosest to return false in error cases', () => {
    expect(roundToClosest()).toBe(false);
    expect(roundToClosest([0])).toBe(false);
});

test('expect roundToClosest to round everything to the only option', () => {
    expect(roundToClosest(1,[0])).toBe(0);
    expect(roundToClosest(100,[0])).toBe(0);
    expect(roundToClosest(999999,[0])).toBe(0);
    expect(roundToClosest(1,[100])).toBe(100);
    expect(roundToClosest(50,[50])).toBe(50);
    expect(roundToClosest(1987,[43])).toBe(43);
    expect(roundToClosest(122,[12])).toBe(12);
    expect(roundToClosest(199,[901])).toBe(901);
});

test('expect roundToClosest to select properly between 2 options', () => {
    expect(roundToClosest(1, [0, 10])).toBe(0);
    expect(roundToClosest(9, [0, 10])).toBe(10);
    expect(roundToClosest(17, [0, 100])).toBe(0);
    expect(roundToClosest(77, [0, 100])).toBe(100);
});

test('expect roundToClosest to select properly between 3 options', () => {
    expect(roundToClosest(1, [0, 50, 100])).toBe(0);
    expect(roundToClosest(49, [0, 50, 100])).toBe(50);
    expect(roundToClosest(99, [0, 50, 100])).toBe(100);
    expect(roundToClosest(9, [1, 5, 10])).toBe(10);
    expect(roundToClosest(17, [9, 5, 2])).toBe(9);
    expect(roundToClosest(77, [50, 50, -4])).toBe(50);
    expect(roundToClosest(10, [50, 50, -4])).toBe(-4);
    expect(roundToClosest(50, [50, 50, -4])).toBe(50);
});

test('expect roundToClosest to round down by default', () => {
    expect(roundToClosest(50, [0, 100])).toBe(0);
    expect(roundToClosest(50, [100, 0])).toBe(0);
    expect(roundToClosest(5, [10, 0])).toBe(0);
    expect(roundToClosest(5, [0, 10])).toBe(0);
    expect(roundToClosest(25, [100, 50, 0])).toBe(0);
    expect(roundToClosest(25, [0, 100, 50])).toBe(0);
});

test('expect roundToClosest to round down if argument is provided', () => {
    expect(roundToClosest(50, [0, 100], true)).toBe(0);
    expect(roundToClosest(50, [100, 0], true)).toBe(0);
    expect(roundToClosest(5, [10, 0], true)).toBe(0);
    expect(roundToClosest(5, [0, 10], true)).toBe(0);
    expect(roundToClosest(25, [100, 50, 0], true)).toBe(0);
    expect(roundToClosest(25, [0, 100, 50], true)).toBe(0);
});

test('expect roundToClosest to round up if argument is provided', () => {
    expect(roundToClosest(50, [0, 100], false)).toBe(100);
    expect(roundToClosest(50, [100, 0], false)).toBe(100);
    expect(roundToClosest(5, [10, 0], false)).toBe(10);
    expect(roundToClosest(5, [0, 10], false)).toBe(10);
    expect(roundToClosest(25, [100, 50, 0], false)).toBe(50);
    expect(roundToClosest(25, [0, 100, 50], false)).toBe(50);
});

test('expect default options to be 0 and 100', () => {
    expect(roundToClosest(-10)).toBe(0);
    expect(roundToClosest(1)).toBe(0);
    expect(roundToClosest(9)).toBe(0);
    expect(roundToClosest(17)).toBe(0);
    expect(roundToClosest(50)).toBe(0);
    expect(roundToClosest(77)).toBe(100);
    expect(roundToClosest(800)).toBe(100);
    expect(roundToClosest(7900892207)).toBe(100);
});
