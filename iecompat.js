(function() {
	var ie8Compat = function() {
        var agentStr = navigator.userAgent;
        if ( agentStr.indexOf('MSIE') === -1 ) return false;
        if ( agentStr.indexOf('Trident/4.0') > -1 ) {
            if ( agentStr.indexOf('MSIE 7.0') > -1 ) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    },

    ie9Compat = function() {
        var agentStr = navigator.userAgent;
        if ( agentStr.indexOf('MSIE') === -1 ) return false;
        if ( agentStr.indexOf('Trident/5.0') > -1 ) {
            if ( agentStr.indexOf('MSIE 7.0') > -1 ) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };

    Modernizr.addTest('ie8compat', ie8Compat);
    Modernizr.addTest('ie9compat', ie9Compat);
}());

