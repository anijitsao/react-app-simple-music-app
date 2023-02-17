const path = require("path");
const copyWebpack = require("copy-webpack-plugin");

console.log("Path in webpack config file", __dirname);

module.exports = {
  // Context is most important when running webpack from package.json outside ./public
  context: path.resolve(__dirname, "./src"),

  // either path.join(__dirname, "./src/index.tsx") or below field,
  entry: "./index.tsx",
  output: {
    path: path.join(__dirname, "./dist"),
    // clean: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".tsx"],
  },

  plugins: [
    new copyWebpack({
      patterns: [
        {
          from: "./icons/*.ico",
          to: "images/icons/[name].ico",
        },
        { from: "./index.html", to: "" },
      ],
    }),
  ],
};
