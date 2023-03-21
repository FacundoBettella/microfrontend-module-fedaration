const HtmlWebpackPlugin = require("html-webpack-plugin");
const MouleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    new MouleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      // filename: Set the name of the manifest file. Leave it as "remoteEntry.js" unless you have got a good reason to change it.
      exposes: {
        "./ProductsIndex": "./src/bootstrap",
        // "productIndex" => Alias filenames
      },
      shared: {
        faker: {
          singleton: true,
          // Singleton true means that we only want to load up one single copy of faker no matter what, only one copy.
        },
        // shared: ["faker"], // This gonna works when we load the same module in several ocassions.
        // shared => Is util when the container app has to implement a dependency repeated in their "sons" modules.
      },
    }),
  ],
};
