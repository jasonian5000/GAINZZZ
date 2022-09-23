const findBuildings = (arr) => {
    let count = 1
    let currentMax = arr[0]
    for (let i = 1; i < arr.length; i++)
    {
        if (arr[i] > currentMax || arr[i] == currentMax) {
            count++;
            currentMax = arr[i]
        }
    }
    return count
}

let arr = [7, 4, 8, 2, 9]



