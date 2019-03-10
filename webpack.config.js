module.exports = {
  entry: "./src/app.tsx",
  devtool: "inline-source-maps",
  output: {
    filename: "app.js",
    path: __dirname + "/site"
  },

  mode: "development", 

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },

  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: "awesome-typescript-loader"
      },
      { 
        test: /\.scss?$/, 
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}
