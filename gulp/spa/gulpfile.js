const gulp = require('gulp')
const { series, parallel } = require('gulp')

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTaks/app')
const { depsCSS, depsFonts } = require('./gulpTaks/deps')
const {  MonitorarArquivo, Servidor } = require('./gulpTaks/servidor')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    Servidor,
    MonitorarArquivo
)