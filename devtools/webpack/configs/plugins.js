const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

function HtmlWebpackPluginConfigs(files) {
    return files.map((file) => {
        const filename = file === 'home'
            ? `./index.html`
            : `${file}/index.html`

        return new HtmlWebpackPlugin({
            inject: false,
            template: `./src/app/pages/${file}/index.html`,
            filename: filename,
            inject: 'body',
            chunks: [file]
        })
    })
}

module.exports = (pages) => [
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['./dist'] }
    }),
    new CleanWebpackPlugin([
        'dist'
    ]),
    new ExtractTextPlugin({
        filename: '[name].min.css'
    }),
    new DashboardPlugin({ port: 3010 }),
    ...HtmlWebpackPluginConfigs(pages)
]
