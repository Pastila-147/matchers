import sortHeroes from "../heroesinfo";

test('test sort array', () => {
    const example = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ]

    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ]

    const received = sortHeroes(example);
    expect(received).toEqual(expected);
})

