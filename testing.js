const Icons = require("react-icons/fa")
const fs = require("fs");

fs.appendFileSync("icons.txt", "" + Object.keys(Icons) + "\n");