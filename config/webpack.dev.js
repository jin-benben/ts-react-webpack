const merge=require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common=require('./webpack.common');
const path=require('path')

module.exports=merge(common,{
  mode:'development',
  devtool:"cheap-eval-source-map",
  devServer:{
    contentBase:path.join(__dirname,'dist'),
    disableHostCheck:true,
    port: 9000,
    compress: true,
    hot:true,
    open:true
  },
  plugins: [
    // new BundleAnalyzerPlugin()
  ]
})