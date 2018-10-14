import gulp from 'gulp'
import browserSync from 'browser-sync' /* servidor  */
import plumber from 'gulp-plumber' /* evita que se crasehe el proseso de node */
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps' /* mapas de origen guardan registos de linea en codigo original */
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream' /* mejor optimizacion */
import buffer from 'vinyl-buffer' /* mejor manejo lo paquetes que gulp recibe */
import jsmin from 'gulp-jsmin'
import imagemin from 'gulp-imagemin'
import wpPot from 'gulp-wp-pot' /* genera plantilla .pot para manejar traducciones Poedit */
import sort from 'gulp-sort' /* permite ordenar archivos php a  gulp-wp-pot*/


