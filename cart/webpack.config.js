const HtmlWebpackPlugin = require("html-webpack-plugin");
const MouleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    new MouleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartIndex": "./src/bootstrap",
      },
      shared: {
        faker: {
          singleton: true,
        },
      },
      //   shared: ["faker"],
    }),
  ],
};
