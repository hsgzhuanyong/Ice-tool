/**
 * 作用:    ie版本检测
 * 返回:    版本号|null
 * 说明:    如果监测到ie9|ie8|ie7|ie6则返回版本号，否则返回null
 */
var ie_v = function () {
    var v = null;
    var browser = navigator.appName
    var b_version = navigator.appVersion
    var version = b_version.split(";");
    var trim_Version = version[1].replace(/[ ]/g, "");
    if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0") {
        v = 6;
    } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0") {
        v = 7;
    } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0") {
        v = 8;
    } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE9.0") {
        v = 9;
    }
    return v;
}

