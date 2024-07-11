const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js|jsx|ts|tsx$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(txt|md|csv)$/i, // 텍스트 파일 확장자 추가
        use: "raw-loader", // raw-loader를 사용하여 파일을 문자열로 가져옴
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx", "css"],
  },
};
