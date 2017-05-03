'use strict';


angular.module('app')
  .controller('DemoCtrl', function ($scope, fsBrowser) {


    $scope.text = '';
    $scope.agent = navigator.userAgent.toLowerCase();
    $scope.results = { chrome: fsBrowser.chrome(),
    					safari: fsBrowser.is('safari'),
    					firefox: fsBrowser.is('firefox'),
    					ie: fsBrowser.is('ie'),
    					opera: fsBrowser.is('opera'),
    					version: fsBrowser.version(),
    					validate: fsBrowser.validate({ chrome: 57, ie: 11, safari: 9 }) };
});
