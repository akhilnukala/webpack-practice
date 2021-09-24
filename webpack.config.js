const path = require("path");

// must export an object - with a couple of properties
module.exports = {
  mode: "development", // default for mode is production
  // NOTE: webpack does not minify code in development mode
  entry: "./src/index.js", // default for entry is index.js
  output: {
    // default for output is dist/main.js
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  /*
  ABOUT LOADERS
  webpack can bundle different types of files other than javascript
  webpack uses loaders which dictate how files other than javascript should be pre-processed when they are imported or loaded into a javascript file
  */
  module: {
    // in module property, we specify different rules for different types of files
    rules: [
      {
        // we apply css-loader & style-loader to all css files
        /*
        ABOUT CSS LOADER
        css-loader takes css
        AND
        turns it into valid javascript code (i.e., into a string)
        AND
        adds that code to the bundled .js file
        */
        /*
        ABOUT STYLE LOADER
        style-loader takes the css code that is converted to javascript from the bundled .js file and injects it into DOM using the <style> tag
        */
        test: /\.css$/,
        // NOTE: order is important here
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
