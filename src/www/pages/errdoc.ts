export = function(req, res, next) {
    switch(res.locals.errorCode) {
        case 500:
            next(undefined, {
                title: "Server Error",
                message: "An unhandled error occured within our server"
            });
            break;
        case 404:
            next(undefined, {
                title: "No Content",
                message: "There is no content at this URL to display"
            });
            break;
        case 403:
            next(undefined, {
                title: "Permission Denied",
                message: "You do not have permission to access or manipulate this content"
            });
            break;
        default:
            next(undefined, {
                title: "Error " + res.locals.errorCode,
                message: "An error occured with your request"
            });
    }
        
}