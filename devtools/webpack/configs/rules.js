const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sassImporter = require("node-sass-importer")

module.exports = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
    },
    {
        test: /\.(css|scss)/,
        use: ExtractTextPlugin.extract({
            use: [
                {
                    loader: 'css-loader?-minimize',
                    options: { sourceMap: true }
                },
                {
                    loader: 'sass-loader',
                    options: { sourceMap: true,  }
                }
            ]
        }),
    }
]
