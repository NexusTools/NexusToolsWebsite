"use strict";
exports.__esModule = true;
var nexusframework_1 = require("nexusframework");
var path = require("path");
nexusframework_1.CompileScripts(path.resolve(__dirname, "src/sources/js"), path.resolve(__dirname, "src/static/js"), function (err) {
    if (err)
        throw err;
    process.exit(0);
});
//# sourceMappingURL=compileScripts.js.map