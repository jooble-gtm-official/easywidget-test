const paths = require('./paths');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const RESOURCE_URL_PATH_PREFIX = '/';

module.exports = {
  name: 'client',
  target: 'node',
  mode: 'production',
  entry: [paths.rootCss, paths.components],
  output: {
    filename: 'index.js',
    path: paths.appDist,
    libraryTarget: 'commonjs2',
    publicPath: RESOURCE_URL_PATH_PREFIX,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
  },
  externals: [nodeExternals()],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: { output: { comments: false } },
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
              },
            },
          ],
        },
      }),
    ],
  },
  module: {
    rules: [
      /* JSX */
      {
        test: /\.(js|jsx|tsx|ts)$/,
        include: paths.componentsDir,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            [
              '@babel/env',
              {
                useBuiltIns: 'entry',
                modules: 'commonjs',
                corejs: 3,
              },
            ],
          ],
        },
      },
      /* STYLES */
      {
        oneOf: [
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  // minimize: true,
                  modules: false,
                },
              },
            ],
          },
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: 'easy_widget_[hash:base64:5]',
                  },
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [require('autoprefixer')],
                },
              },
              { loader: 'resolve-url-loader' },
              {
                loader: 'sass-loader',
                options: { sourceMap: true },
              },
            ],
          },
        ],
      },
      /* FONTS */
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: /fonts/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
  ],
  performance: { hints: false },
};
