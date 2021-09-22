const path = require("path");

// must export an object - with a couple of properties
module.exports = {
  entry: "./src/index.js", // default for entry is index.js
  output: {
    // default for output is dist/main.js
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
