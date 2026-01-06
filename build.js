"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var indexJSFilePath = path_1.default.join("src", "index.js");
if (!fs_1.default.existsSync(indexJSFilePath)) {
    console.error("index.js doesn't exist");
    process.exit(1);
}
var content = fs_1.default.readFileSync(indexJSFilePath, "utf-8");
var lines = content.split("\n");
var output = "";
lines.forEach(function (line) {
    if (line.trim().startsWith("// @include")) {
        var statements = line.split(" ");
        var fileName = statements[2]; // Assigning variable for statements[2] for readability
        var utilFilePath = path_1.default.join("src", "utils", fileName);
        if (!fs_1.default.existsSync(utilFilePath)) {
            console.error(utilFilePath + " isn't a valid path");
            process.exit(1);
        }
        var utilFileContent = fs_1.default.readFileSync(utilFilePath, "utf-8");
        output += "// ==== ".concat(fileName, " ====\n");
        output += utilFileContent + "\n\n";
        console.log("Including " + fileName);
    }
    else {
        output += line + "\n";
    }
});
fs_1.default.writeFileSync("./output.js", output);
console.log("Build complete");
