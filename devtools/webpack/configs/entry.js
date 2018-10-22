function setupPageEntryPoints(pages) {
    return pages.reduce((acc, page) => {
        acc[page] = [
            `./src/app/pages/${page}/index.js`,
            `./src/app/pages/${page}/index.scss`,
        ]
        return acc
    }, {})
}

module.exports = {
    setupPageEntryPoints: setupPageEntryPoints
}