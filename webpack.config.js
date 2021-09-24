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
      // we apply css-loader & style-loader to all css files
      /*
        ABOUT CSS LOADER
        css-loader takes css
        AND
        turns it into commonJS code - valid javascript code
        AND
        adds that code to the bundled .js file
      */
      /*
        ABOUT STYLE LOADER
        style-loader takes the commonJS css code from the bundled .js file and injects it into DOM by placing a <style> tag in the HEAD section of the HTML page and adding all the styles in that <style> tag
        NOTE: thus for each css file that webpack encounters, style-loader will place a separate <style> tag in the HEAD section of the HTML page
      */
      {
        test: /\.css$/,
        // NOTE: order is important here
        use: ["style-loader", "css-loader"],
      },
      // we apply sass-loader, css-loader & style-loader to all scss files
      /*
        ABOUT SASS LOADER
        sass-loader converts sass into css
      */
      {
        test: /\.scss$/,
        // NOTE: order is important here
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
