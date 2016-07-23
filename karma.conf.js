module.exports = function(config) {
  config.set({
     basePath: '',
     files: [
       'bower_components/jquery/jquery.js',
       'bower_components/angular/angular.js',
       'bower_components/angular-mocks/angular-mocks.js',
       'bower_components/angular-ui-router/release/angular-ui-router.js',
       'bower_components/angular-bootstrap/ui-bootstrap.js',
       'node_modules/chart.js/dist/Chart.min.js',
       'public/build/js/app.js',
       'tests/*.js'
     ],
     browsers: ['Chrome'],
     frameworks: ['jasmine'],
     plugins: ['karma-jasmine', 'karma-chrome-launcher']
  })
}
