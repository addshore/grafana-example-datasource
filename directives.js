define([
  'angular',
],
function (angular) {
  'use strict';

  var module = angular.module('grafana.directives');

  module.directive('metricQueryEditorExample', function() {
    return {controller: 'ExampleQueryCtrl', templateUrl: 'app/plugins/datasource/example/partials/query.editor.html'};
  });

   module.directive('metricQueryOptionsExample', function() {
     return {templateUrl: 'app/plugins/datasource/example/partials/query.options.html'};
   });

    module.directive('annotationsQueryEditorExample', function() {
        return {templateUrl: 'app/plugins/datasource/example/partials/annotations.editor.html'};
    });

});
