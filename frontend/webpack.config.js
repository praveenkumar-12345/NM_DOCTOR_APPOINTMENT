const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!mdb-react-ui-kit)/, // Include mdb-react-ui-kit in transpilation
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                { targets: "> 0.25%, not dead", bugfixes: true },
              ],
            ],
          },
        },
      },
    ],
  },
  // Add any other configuration options you need here
};
