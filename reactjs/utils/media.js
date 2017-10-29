var path = "../static/";

if (document.location.origin == "http://localhost:8080") {
    path = "../public/static/";
}

function get_media_path(resource) {
    var fp = path+resource;
    return fp
}
var media = {
    mediaPath: function(resource) {
        return get_media_path(resource)
    }
};

module.exports = media