import path from 'path';
import fs from 'fs';
import lessToJs from 'less-vars-to-js';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const themeVariables = lessToJs(fs.readFileSync(path.join(
  __dirname,
  './css/antd-default-vars.less'
), 'utf8'));
const src = path.resolve(__dirname, 'src');
const dst = path.resolve(__dirname, 'docs', 'dst');

export default {

  entry: {
    default: path.resolve(src, 'default.jsx'),
  },

  output: {
    path: dst,
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                [
                  'import',
                  {
                    libraryName: 'antd',
                    style: true,
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: [
            {loader: 'css-loader'},
            {
              loader: 'less-loader',
              options: {
                modifyVars: themeVariables,
                root: path.resolve(__dirname, './'),
              },
            },
          ],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(jpg|gif|png|eot|wof|woff|ttf|svg)$/,
        loader: 'url-loader',
      },
    ],
  },

  resolve: {
    alias: {
      hljs: 'highlight.js/lib',
    },
  },

  plugins: [new ExtractTextPlugin('[name].bundle.css')],
};
