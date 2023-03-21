const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    new ModuleFederationPlugin({
      // name => Not used, added for clarity. Only needed for Remotes.
      name: "container",
      // remotes =>  List of projects that the container can search to get additional code
      remotes: {
        productsApp: "products@http://localhost:8081/remoteEntry.js",
        // productsApp => Load the file listed URL if anything in Container has an import like "import abc from 'productsApp';"
        // "products" => Realated to the 'name' property  in the Products webpack config file-.
        // "@http..." => URL for the remoteEntry file.

        cartApp: "cart@http://localhost:8082/remoteEntry.js"
      },
    }),
  ],
};
