const {
    series,
    src,
    dest,
    watch
} = require('gulp');
const sass = require('gulp-sass');
const imagemin =require('gulp-imagemin');

//funcion que compila SASS

function css() {
    return src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('./build/css'))
}

function minificarcss() {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css'))
}
function imagenes(){
    return src('src/img/**/*')
    .pipe(imagemin())
    .pipe(dest('./build/img'))
}

function watchArchivos() {
    watch('src/scss/**/*.scss',css); // * la carpeta actual ** = todos los archivos con esa extension
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos=  watchArchivos;