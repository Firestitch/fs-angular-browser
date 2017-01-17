'use strict';


angular.module('app')
  .controller('DemoCtrl', function ($scope, fsBrowser) {


    $scope.text = '';

    $scope.results = { chrome: fsBrowser.chrome(),
    					safari: fsBrowser.is('safari'),
    					firefox: fsBrowser.is('firefox'),
    					ie: fsBrowser.is('ie'),
    					opera: fsBrowser.is('opera') };
});
