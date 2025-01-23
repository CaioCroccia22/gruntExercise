
module.exports = function(grunt) {
    // Carregar as tarefas do Grunt
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify')

    // Configuração do Grunt
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), // Certifique-se de que o nome do arquivo está correto
        less: {
            production: {
                files: {
                    'production/styles/main.css': 'src/styles/main.less'
                }
            }
        },
        uglify: {
            target:{
                files:{
                    'production/script/main.min.js': ['src/script/main.js']
                }
            }
        }
    });

    // Registrar a tarefa padrão
    grunt.registerTask('default', ['less', 'uglify']);
};