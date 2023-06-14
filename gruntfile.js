module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css' : 'src/styles/main.less'
                    // 'Pasta de destino' : 'pasta de origem'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles//main.min.css' : 'src/styles/main.less'
                    // 'Pasta de destino' : 'pasta de origem'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js' : 'src/scripts/main.js'
                    // 'Pasta de destino' : 'pasta de origem'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
}

