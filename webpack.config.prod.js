const path = require("path")
const CleanPlugin = require("clean-webpack-plugin")

module.exports = {
    entry: "./src/app.ts",
    output: {
        filename: 'bundle.js',
        path : path.resolve(__dirname,"dist"),
    },
    //devtool: "none",
    mode: "production",
    module: {
        rules :[
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /nodes_modules/,  
            }
        ]
    },
    resolve: {
        extensions: [".ts",".js"]
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
}