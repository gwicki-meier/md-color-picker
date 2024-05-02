// rollup.config.mjs

import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import html from 'rollup-plugin-html';
import postcss from 'rollup-plugin-postcss';
import license from 'rollup-plugin-license';



var bannerText = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');


export default {
    input: 'src/js/mdColorPicker.js',
    external: ['tinycolor2', 'angular'],
    output: {
        dir: 'dist',
        format: 'umd',
        name: 'mdColorPicker',
        globals: {
            'tinycolor2': 'tinycolor',
            'angular': 'angular'
        }
    },
    plugins: [
        html(
            {include: "**/*tpl.html",}
        ),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            exclude: [
                'node_modules/**',
                '**/*.html'
            ]
        }),
        postcss({
            extract: true,
            modules: {},
        }),
        license({
            banner: bannerText
        })
    ]
};