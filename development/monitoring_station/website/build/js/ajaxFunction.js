function ajaxRequest() {
    try {   // Non-IE Browsers
        var request = new XMLHttpRequest();
    } catch (e1) {
        try {   // IE 6+
            request = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e2) {
            try {   // IE 5
                request = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e3) {   // No AJAX support
                request = false;
            }
        }
    }
    
    return request;
}