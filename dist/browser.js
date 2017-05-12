(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name fs.fsBrowser
     */

    angular.module('fs-angular-browser',['fs-angular-util'])
    .factory('fsBrowser', function(fsUtil) {

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
						opera: opera,
						version: version,
						validate: validate,
						name: name };

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

        /**
         * @ngdoc method
         * @name version
         * @methodOf fs.fsBrowser
         * @description Gets the current version of the browser
         */
        function version(options) {
        	options = options || { major: true };
        	var version;
        	if(chrome()) {
        		version = fsUtil.value(uagent.match(/chrome\/([\d\.]+)/),1);
        	}

        	if(safari()) {
        		version = fsUtil.value(uagent.match(/safari\/([\d\.]+)/),1);
        	}

        	if(firefox()) {
        		version = fsUtil.value(uagent.match(/firefox\/([\d\.]+)/),1);
        	}

        	if(ie()) {
        		version = fsUtil.value(uagent.match(/(?:msie:?\s+|rv:|edge\/)([\d\.]+)/),1);
        	}

        	if(opera()) {
        		version = fsUtil.value(uagent.match(/opera\/?([\d\.]+)/),1);
        	}

        	if(options.major) {
        		version = fsUtil.int(fsUtil.value(fsUtil.string(version).match(/^(\d+)/),1));
        	}

        	return version;
        }

        function validate(versions) {
        	versions = versions || {};
        	var current = version();
        	var minimum = 0;

        	if(versions.chrome && chrome()) {
        		minimum = versions.chrome;
        	}

        	if(versions.safari && safari()) {
        		minimum = versions.safari;
        	}

        	if(versions.firefox && firefox()) {
        		minimum = versions.firefox;
        	}

        	if(versions.ie && ie()) {
        		minimum = versions.ie;
        	}

        	if(versions.opera && opera()) {
        		minimum = versions.opera;
        	}

        	if(minimum>current) {
        		return false;
        	}

        	return true;
        }

        /**
         * @ngdoc method
         * @name name
         * @methodOf fs.fsBrowser
         * @description Gets the current browser name
         */
        function name() {
        	if(chrome()) {
        		return 'Chrome';
        	}

        	if(safari()) {
        		return 'Safari';
        	}

        	if(firefox()) {
        		return 'Firefox';
        	}

        	if(ie()) {

        		if(version()>=12)
        			return 'Microsoft Edge';

        		return 'Internet Explorer';
        	}

        	if(opera()) {
        		return 'Opera';
        	}

        	return '';
        }
    });
})();

