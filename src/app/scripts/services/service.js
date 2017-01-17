(function () {
    'use strict';

    angular.module('fs-angular-browser',[])
    .factory('fsBrowser', function() {

		var uagent = navigator.userAgent.toLowerCase(),
		    match = '',
		    self = this;

		self.browser = {
			chrome: /webkit/.test(uagent)  && /chrome/.test(uagent) && !/edge/.test(uagent),
			firefox: /mozilla/.test(uagent) && /firefox/.test(uagent),
			ie: /msie/.test(uagent) || /trident/.test(uagent) || /edge/.test(uagent),
			safari: /safari/.test(uagent)  && /applewebkit/.test(uagent) && !/chrome/.test(uagent),
			opera: /mozilla/.test(uagent) && /applewebkit/.test(uagent) &&  /chrome/.test(uagent) && /safari/.test(uagent) && /opr/.test(uagent)
		}

		var service = {	is: is,
						chrome: chrome,
						firefox: firefox,
						ie: ie,
						safari: safari,
						opera: opera };

        return service;

        function is(browser) {
        	return !!self.browser[browser.toLowerCase()];
        }

        function chrome() {
        	return is('chrome');
        }

        function firefox() {
        	return is('firefox');
        }

        function ie() {
        	return is('ie');
        }

        function safari() {
        	return is('safari');
        }

        function opera() {
        	return is('opera');
        }
    });
})();