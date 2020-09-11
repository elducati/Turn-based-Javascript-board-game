function pickRandomNumber(rowNum, colNum) {
    let arr = [];
    for (let i = 1; i < rowNum, colNum; i++) {
        arr.push(i);
    }
    console.log(arr);
    shuffle(arr);
    return Array.slice(0, 10);
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    const nums = pickRandomNumber(8, 11);
    console.log(nums);
}