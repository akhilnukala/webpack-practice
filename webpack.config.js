const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

// must export an object - with a couple of properties
module.exports = {
  // default for mode is production
  mode: "development", // NOTE: webpack does not minify code in development mode
  // default for entry is index.js
  entry: "./src/index.js",
  // default for output is dist/main.js
  output: {
    /*
    ABOUT CONTENT-HASH
    browsers usually cache/save files based on their names
    PROBLEM:
    if we made some changes to our main.js bundle file and give it to the browser, the browser might ignore the updated main.js and use the stale main.js from its cache - since the names match
    SOLUTION:
    to prevent this content-hash is used
    using content-hash webpack creates the name of output bundle file based on the its content, so if the content changes, name of the outut bundle file also changes, thus preventing the browser from using the stale ouput bundle file
    */
    filename: "main-[contenthash].js",
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
  plugins: [
    /*
    ABOUT HTML-WEBPACK-PLUGIN
    WHY USE?
    since we cannot add a content-hashed main.js bundle file to our static HTML file, we need to use html-webpack-plugin to create a HTML file and inject the content-hashed main.js bundle file in that HTML file
    USAGE:
    1. without passing any argument i.e., new HtmlWebpackPlugin() -
        this plugin create a small HTML file in the output folder and will place a <script> tag at the end with "src" attribute pointing to the content-hashed main.js bundle file
    1. by passing a custom HTML file as the template -
        this plugin will take the passed HTML file as the template and create a new HTML file in the output folder and will place a <script> tag at the end with "src" attribute pointing to the content-hashed main.js bundle file
    */
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};
