'use strict'
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  output: {
    publicPath: "http://localhost:8087/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8087,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "tscandidates",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
         "./ContainerCandidates": "./src/components/containerCandidates/ContainerCandidates",
         "./Description": "./src/components/description/Description",
         "./SignIn": "./src/components/signIn/SignIn",
         "./Inscription": "./src/components/inscription/Inscription",
         "./MySpace":"./src/components/mySpace/MySpace",
         "./Routes": "./src/router/routes",
         './ProtectedRoutes': "./src/router/protectedRoutes",
         './ProtectedRouteService': "./src/services/protectedRoute",
         './UserSessionManager': "./src/services/userSessionManager",
         './UseCandidatesState': './src/context/useCandidatesState',
         './BottomSignOut': './src/components/navigation/BottomSignOut'
      },
      shared: require("./package.json").dependencies,
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
    new Dotenv({
      path: './.env'
    })
  ],
};
