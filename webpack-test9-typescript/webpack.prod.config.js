var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: __dirname + "/src/index.tsx",
  },
  output: {
    path: __dirname + "/build",
    filename: "[name]-[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, { loader: "css-loader" }],
      },
      {
        test: /\.module\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, { loader: "css-loader", options: { modules: true } }],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx", ".css"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "직원 정보 조회",
      template: __dirname + "/public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash].css",
    }),
  ],
};
