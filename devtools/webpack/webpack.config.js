const fs = require('fs')

const pages = fs.readdirSync('./src/app/pages');

const pluginsConfig = require('./configs/plugins')(pages)
const rulesConfig = require('./configs/rules')

const { setupPageEntryPoints } = require('./configs/entry')

module.exports = {
    devtool: "inline-source-map",
    watch: true,
    entry: {
        ...setupPageEntryPoints(pages)
    },
    output: {
        filename: 'js/[name]/bundle.js'
    },
    plugins: pluginsConfig,
    module: {
        rules: rulesConfig,
    },
};











