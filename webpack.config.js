'use strict';

const path = require('path');

module.exports = {
  content: __dirname,
  entry: {
    'login': './app/loginPage/LoginMain.jsx',
    'signup': './app/signupPage/SignupMain.jsx',
    'home': './app/homePage/HomeMain.jsx'
  },
  output: {
    path: path.join(__dirname, './js/dist'),
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};