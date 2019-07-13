var path=require('path');
var webpack=require('webpack');

module.exports={
	context:path.resolve(__dirname,'./src'),//找到src目录
	entry:{
		app:'./app.js'//入口文件
	},
	output:{
		path:path.resolve(__dirname,'./dist'),//输出目录
		filename:'bundle.js',//出口文件
	}
}
