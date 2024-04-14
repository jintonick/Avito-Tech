import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('tailwindcss'), require('autoprefixer')],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // Убедитесь, что .ts и .tsx добавлены, если вы используете TypeScript
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Убедитесь, что путь к вашему шаблону index.html корректен
    }),
    new webpack.DefinePlugin({
      'process.env.TOKEN': JSON.stringify(process.env.TOKEN),
    }),
  ],
  devServer: {
    port: 7070, // Порт, который вы хотите использовать
    open: true,
    historyApiFallback: true,
  },
};

export default config;
