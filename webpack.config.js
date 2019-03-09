module.exports = {
  entry: "./src/app.tsx",
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
      { test: /\.tsx?$/, loader: "awesome-typescript-loader"}
    ]
  },

  target: "web"
}
