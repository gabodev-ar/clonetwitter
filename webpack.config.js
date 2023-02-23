const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  //Punto de entrada, punto de salida
  entry: './src/app/app.js',
  output: {
    path: path.resolve(__dirname, 'deploy'),
    filename: 'app.js'
  },
  mode: "production",
  //Plugins
  plugins: [
    new HtmlWebpackPlugin({
      //configuraciones html-webpack-plugin
      inject: true,
      template: './src/public/index.html',
      filename: 'index.html'
    }),

    new MiniCssExtractPlugin({
      filename: "style.css"
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/img"),
          to: "assets/img"
        }
      ]
    })
  ],

  //Configuración de plugins
  optimization: {
    minimize: true
  },

  //Loaders para css, sass
  module: {
    rules: [
      {
        test: /\.s[c]ss$/i, //expresión regular para testear extensiones de archivos.
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: path.resolve(__dirname, "dist")
          },
        },
          "css-loader",
          "sass-loader"
        ]
      },
    ],
  },
}
