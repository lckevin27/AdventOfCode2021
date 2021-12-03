const fs = require("fs");
var data = fs.readFileSync("d3p2.txt", "utf8");
arr = data.split("\n");

const processor = (arr, target, index = 0) => {
    if (arr.length === 1) return parseInt(arr[0], 2);

    const [arr1, arr2] = [[], []];

    for (let i = 0; i < arr.length; i++) {
        arr[i][index] === "1" ? arr1.push(arr[i]) : arr2.push(arr[i]);
    }

    if (target === "O2") {
        if (arr1.length >= arr2.length) {
            return processor(arr1, target, index + 1);
        } else {
            return processor(arr2, target, index + 1)
        }
    } else {
        if (arr2.length <= arr1.length) {
            return processor(arr2, target, index + 1);
        } else {
            return processor(arr1, target, index + 1);
        }
    }
}

console.log(processor(arr, "O2") * processor(arr, "CO2"));