// To build the dist folder run the webpack command

module.exports = {
  // Telling Webpack that our application lives in the app directory
  context: __dirname + '/src',
  // Setting the entry point to our application
  entry: {
    javascript: './app.js',
    html: './index.html',
  },

  output: {
  // The name of bundled file
    filename: 'app.js',
  // The directory it will be written to
    path: __dirname + '/dist',
  },

  devServer: {
    inline: true,
    port: 3333,
  },

  // Adding loaders to transpile ES6 and JSX
  module: {
    loaders: [
      {
      // Tells Webpack to apply this loader to all .js files
        test: /\.js$/,
      // But to exclude anything in the /node_modules directory
        exclude: /node_modules/,
        loaders: ['react-hot','babel?presets[]=es2015,presets[]=react'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },
};
