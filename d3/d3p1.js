const fs = require("fs");
const arr = fs.readFileSync("d3p2.txt", "utf8").split("\n");

const biLen = arr[0].length;

const grArr = new Array(biLen).fill(0);

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < biLen; j++) {
        arr[i][j] === "0" ? grArr[j]++ : grArr[j]--;
        if (i === arr.length - 1) {
            grArr[j] = grArr[j] > 0 ? 1 : 0;
        }
    }
}

const gr = parseInt(grArr.join(""), 2);

const xor = parseInt((new Array(biLen).fill(1)).join(""), 2);
const er = gr ^ xor;

console.log(gr * er);