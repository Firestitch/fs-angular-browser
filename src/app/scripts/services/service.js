(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name fs.fsBrowser
     */

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


        /**
         * @ngdoc method
         * @name is
         * @methodOf fs.fsBrowser
         * @description Tests strings such as chrome, safari, ie, firefox and opera against the current user agent. Returns true if there is a match.
         * @param {string} browser The name of the browser
         */
        function is(browser) {
        	return !!self.browser[browser.toLowerCase()];
        }

        /**
         * @ngdoc method
         * @name chrome
         * @methodOf fs.fsBrowser
         * @description Tests if the browser is chrome
         */
        function chrome() {
        	return is('chrome');
        }

        /**
         * @ngdoc method
         * @name firefox
         * @methodOf fs.fsBrowser
         * @description Tests if the browser is firefox
         */
        function firefox() {
        	return is('firefox');
        }

        /**
         * @ngdoc method
         * @name ie
         * @methodOf fs.fsBrowser
         * @description Tests if the browser is ie
         */
        function ie() {
        	return is('ie');
        }

        /**
         * @ngdoc method
         * @name safari
         * @methodOf fs.fsBrowser
         * @description Tests if the browser is safari
         */
        function safari() {
        	return is('safari');
        }

        /**
         * @ngdoc method
         * @name opera
         * @methodOf fs.fsBrowser
         * @description Tests if the browser is opera
         */
        function opera() {
        	return is('opera');
        }
    });
})();
