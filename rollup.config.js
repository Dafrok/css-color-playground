import path from 'path'
import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'

export default {
    entry: path.resolve('./.src/js/index.js'),
    dest: 'all.min.js',
    format: 'iife',
    moduleName: 'cssColorPlayground',
    plugins: [
        babel({presets: ['es2015-rollup']}),
        nodeResolve({
            jsnext: true,
            main: true,
            extensions: [ '.js', '.json' ]
        }),
        commonjs({
            include: 'node_modules/**'
        }),
        replace({
            'process.env.NODE_ENV': "'production'"
        }),
        uglify()
    ]
}
