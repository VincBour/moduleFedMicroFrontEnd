'use strict'
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  output: {
    publicPath: "http://localhost:8086/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8086,
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
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "tsvacancy",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./ContainerVacancy": "./src/components/containerVacancy/VacancyContainer",
        "./HomeVacancy": "./src/components/home/HomeVacancy",
        "./Vacancies": "./src/components/vacancies/Vacancies",
        "./Application": "./src/components/application/Application",
        "./Vacancy": "./src/components/vacancy/Vacancy",
        "./Routes": "./src/route/routes"
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
