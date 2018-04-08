"use strict";
var connectMongodbSession = require("connect-mongodb-session");
var expressSession = require("express-session");
var passport = require("passport");
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var connectSession = connectMongodbSession(expressSession);
var googleAuth = require("../auth/google.json");
var User = /** @class */ (function () {
    function User(name, email) {
        this.isAdmin = true;
        this.isEditor = true;
        this.isModerator = true;
        this.isDeveloper = true;
        this.isOwner = true;
        this.level = 100;
        this.name = this.displayName = name;
        this.id = this.email = email;
    }
    return User;
}());
module.exports = function (framework) {
    var app = framework.app;
    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.email);
    });
    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        var name = googleAuth.users[id];
        if (name)
            done(undefined, new User(name, id));
        else
            done(new Error("Unknown ID: " + id));
    });
    passport.use(new GoogleStrategy({
        clientID: googleAuth.id,
        clientSecret: googleAuth.secret,
        callbackURL: googleAuth.callback
    }, function (accessToken, refreshToken, profile, cb) {
        var email = profile.emails[0] && profile.emails[0].value;
        if (!email)
            cb(new Error("Email is required"));
        else {
            var user = googleAuth.users[email];
            if (user)
                cb(undefined, new User(user, email));
            else
                cb(new Error("You are not a registered administrator for this website"));
        }
    }));
    framework.pushMiddleware(expressSession({
        secret: googleAuth.secret,
        store: new connectSession({
            uri: 'mongodb://localhost/nexustools',
            collection: 'sessions'
        }),
        saveUninitialized: false,
        resave: false
    }), true);
    framework.pushMiddleware(passport.initialize(), true);
    framework.pushMiddleware(passport.session(), true);
};
//# sourceMappingURL=user.js.map