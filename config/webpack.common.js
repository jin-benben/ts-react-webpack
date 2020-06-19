const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports={
  entry:'./src/index.tsx',
  output:{
    filename:'[name].bundle.js',
    chunkFilename:'[name].bundle.js',
    path:path.resolve(__dirname,'../dist')
  },
  resolve:{
    extensions:['.js','.json','.tsx','.ts'],
    alias:{
      "@": path.resolve(__dirname, "./src"),
    }
  },
  module:{
    rules:[
      {
        test:/\.(ts|tsx)$/,
        exclude:/node_modules/,
        use:[
          {
            loader:'babel-loader',
            options:{
              plugins:[],
              presets:["@babel/preset-env",'@babel/preset-react'],
              plugins:[
                "@babel/plugin-syntax-dynamic-import",
                //  ["import",{libraryName: "antd",libraryDirectory: "es",style: 'css'}],
              ]
            }
          },
          {loader:'ts-loader'}
        ]
      },
      {
        test:/\.less$/,
        exclude:'/node_modules/',
        use:[
          {loader:MiniCssExtractPlugin.loader},
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              },
            }
          }
        ]
      },
    
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:"template/index.html",
      inject:'body',
      minify:true
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename:'[name].css',
      chunkFilename:'[name].css',
    })
  ],
  optimization:{
    splitChunks:{
      chunks:'all'
    }
  } 
}