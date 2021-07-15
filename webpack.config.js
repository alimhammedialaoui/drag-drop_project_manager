const path = require("path")

module.exports = {
    entry: "./src/app.ts",
    output: {
        filename: 'bundle.js',
        path : path.resolve(__dirname,"dist"),
        publicPath : "/dist/"
    },
    devtool: "inline-source-map",
    mode: "development",
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
    }
}