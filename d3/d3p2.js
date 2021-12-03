const fs = require("fs");
const arr = fs.readFileSync("d3p2.txt", "utf8").split("\n");

const processor = (arr, target, index = 0) => {
    if (arr.length === 1) return parseInt(arr[0], 2);

    const [arr1, arr2] = [[], []];

    arr.forEach(item => {
        item[index] === "1" ? arr1.push(item) : arr2.push(item);
    });

    if (target === "O2") {
        return arr1.length >= arr2.length ? processor(arr1, target, index + 1) : processor(arr2, target, index + 1);
    } else {
        return arr2.length <= arr1.length ? processor(arr2, target, index + 1) : processor(arr1, target, index + 1);
    }
}

console.log(processor(arr, "O2") * processor(arr, "CO2"));