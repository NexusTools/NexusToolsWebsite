import { CompileScripts } from "nexusframework";
import path = require("path");

CompileScripts(path.resolve(__dirname, "src/sources/js"), path.resolve(__dirname, "src/static/js"), function(err) {
    if (err)
        throw err;
    process.exit(0);
});
