const path = require('path');

module.exports = {
  entry: './src/index.js',  // Входная точка для React
  output: {
    path: path.resolve(__dirname, '../backend/static/js'),  // Папка, куда будут собраны файлы
    filename: 'bundle.js',  // Имя скомпилированного файла
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // Для всех файлов .js и .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Использование Babel для транспиляции
          options: {
            presets: [
              '@babel/preset-env',   // Для поддержки последних версий JavaScript
              '@babel/preset-react', // Для поддержки JSX
            ],
          },
        },
      },
      {
        test: /\.css$/,  // Для всех файлов .css
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Поддержка расширений .js и .jsx
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,  // Локальный сервер для разработки
    open: true,  // Открыть браузер при запуске
  },
};
