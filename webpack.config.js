const path = require('path')

const webpack = require('webpack') // 启用热更新的第三步

// html-webpack-dev 可以把html导入到内存中
const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

// 这个webpack配置文件，就是一个JS文件，通过node中的模块操作，向外暴露一个配置对象
module.exports = {
	// 入口
	entry: path.join(__dirname, './src/main.js'),
	// 出口
	output:{
		path: path.join(__dirname, './dist'),
		filename:'bundle.js'
	},
	devServer:{
		// 这是配饰 dev-server命令参数的第二种形式
		// --open --port 3000 --contentBase src --hot
		open: true, // 自动打开游览器
		port: 3000, // 切换端口
		contentBase: 'src', // 指定托管的根目录
		hot: true, // 启用热更新的第一步
	},
	plugins:[
		// 配置插件的节点
		new webpack.HotModuleReplacementPlugin(), // 启用热更新的第三步
		new htmlWebpackPlugin({
			// 创建一个在内存中的html插件
			template: path.join(__dirname, './src/index.html'), // 指定模板文件
			filename: 'index.html', // 指定生成的文件名称
		}),
		// 最新版的vue-loader必须同时使用伴生插件vue-loader-plugin
		new VueLoaderPlugin() 
	],
	module: {
		// 这个节点，用于配置所有的第三方模块加载器
		rules: [
			// 所有第三方匹配规则
			
			// test 指定需要匹配的文件类型， use指定匹配所用的loader
			// use数组里的调用规则是从右到左
			{test: /\.css$/, use: ['style-loader', 'css-loader']}, // css文件匹配规则
			{test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
			{test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
			{test: /\.(jpg|png|gif|bmp|jpeg)$/, use: ['url-loader?name=[hash:8]-[name].[ext]', ]},// 处理图片的loader
			{test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'}, // 处理字体文件的loader
			/* url-loader有一个limit的参数。如果limit的数值比传入的图片小，那么图片会转化为base64的字符串；
			如果大于等于，则不会这样。 */
			/* 第二个参数 name，可以规定图片在网页上的名字。代码里的写法可以让图片保持原有的名字和后缀名。
			url-loader会给每一个图片名转化成哈希值，这样可以避免图片重命名。 
			[hash:8] 截取该图片的前八位*/
			{test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}, // babel转化高级语法
			{test: /\.vue$/, use: ['vue-loader']}
		],
	},
}

/* 创建完webpack的配置文件后，直接在终端输入webpack，就可以更新bundle.JS
	 流程：1. webpack发现没有在命令后面加上人口和出口文件路径 
			  2. wepack会在项目根目录里寻找一个webpack.config.js的配置文件
				3. 当找到配置文件后，webpack会去解析这个配置文件
				4. 根据配置文件里的设置，打包静态文件*/