function romanConverter(x) {
    let symbols = [
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ];

    let result = "";

    for (let i = 0; i < symbols.length; i++) {
        while (x >= symbols[i][1]) {
            result += symbols[i][0];
            x -= symbols[i][1];
        }
    }

    return result;
}