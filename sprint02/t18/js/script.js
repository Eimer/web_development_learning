function sortEvenOdd(arr) {
    let buff;
    let len = arr.length;
    let oddNums = 0;

    for (let i = 0; i < len; i++) {
        if (arr[i] % 2 != 0) {
            for (let j = len - 1; j > i; j--) {
                if (arr[j] % 2 == 0) {
                    buff = arr[i];
                    arr[i] = arr[j];
                    arr[j] = buff;
                    break;
                }
            }
        }
    }
    for (let i = 0; i < len; i++)
        if (arr[i] % 2 == 0)
            oddNums++;
        console.log(oddNums);
    for (let i = 0; i < oddNums; i++) {
        for (let j = 0; j < oddNums; j++) {
            if (arr[i] < arr[j]) {
                buff = arr[i];
                arr[i] = arr[j];
                arr[j] = buff;
            }
        }
    }
    for (let i = oddNums; i < len; i++) {
        for(let j = oddNums; j < len; j++) {
            if (arr[i] < arr[j]) {
                buff = arr[i];
                arr[i] = arr[j];
                arr[j] = buff;
            }
        }
    }
}
