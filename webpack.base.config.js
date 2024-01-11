const path = require('path')
const { ProvidePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const rules = [
  { test: /\.(scss|sass|css)$/i, use: ['style-loader', 'css-loader'] },
  {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    generator: {
      filename: './assets/images/[hash][ext][query]',
    },
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: './assets/fonts/[hash][ext][query]',
    },
  },
  { test: /\.(mts|ts|tsx)$/, use: 'ts-loader' },
]

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './public/index.html'),
    filename: 'index.html',
    inject: 'body',
    minify: true,
  }),
  new ProvidePlugin({ React: 'react' }),
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, './public'),
        to: path.resolve(__dirname, './dist'),
        noErrorOnMissing: true,
        filter: async (resourcePath) => {
          const resourcePathChange = resourcePath.substr(resourcePath.indexOf('public'))
          return !resourcePathChange.match(/(index\.html)$/gi)
        },
      },
    ],
  }),
  new Dotenv({
    path: `./.env.${process.env.NODE_ENV === 'production' ? 'production' : 'development'}`,
    systemvars: true,
  }),
]

const devServer = {
  compress: true,
  hot: true,
  open: true,
  port: process.env.PORT || 3000,
  proxy: {
    '/api': {
      target: 'http://openlibrary.org/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
  client: {
    overlay: false,
  },
}

const config = {
  entry: './src/index.tsx',
  target: ['web'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    assetModuleFilename: 'assets/[hash][ext][query]',
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx'],
    extensionAlias: {
      '.mjs': ['.mjs', '.mts'],
    },
  },
  module: {
    rules,
  },
  plugins,
  devServer,
}

module.exports = {
  baseConfig: config,
  webpackBaseRules: rules,
  webpackBasePlugins: plugins,
  webpackDevServerSettings: devServer,
}
