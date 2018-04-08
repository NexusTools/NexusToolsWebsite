import { NexusFramework } from "nexusframework/src/nexusframework";
const connectMongodbSession = require("connect-mongodb-session");
import { User as _User } from "nexusframework/types";
import expressSession = require("express-session");
import { Application, Router } from "express";
import crypto = require("crypto");

import passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const connectSession = connectMongodbSession(expressSession);

const googleAuth = require("../auth/google.json");

class User implements _User {
  isAdmin = true;
  isEditor = true;
  isModerator = true;
  isDeveloper = true;
  isOwner = true;
  level = 100;

  name: string;
  id: string | number;
  displayName: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = this.displayName = name;
    this.id = this.email = email;
  }
}

export = function(framework: NexusFramework) {
  const app = framework.app;

  // used to serialize the user for the session
  passport.serializeUser(function(user: any, done) {
    done(null, user.email);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id: string, done) {
    const name = googleAuth.users[id];
    if (name)
      done(undefined, new User(name, id));
    else
      done(new Error("Unknown ID: " + id));
  });

  passport.use(new GoogleStrategy({
          clientID: googleAuth.id,
          clientSecret: googleAuth.secret,
          callbackURL: googleAuth.callback
      },
      function (accessToken, refreshToken, profile, cb) {
          const email = profile.emails[0] && profile.emails[0].value;
          if (!email)
            cb(new Error("Email is required"));
          else {
            const user = googleAuth.users[email];
            if(user)
              cb(undefined, new User(user, email));
            else
              cb(new Error("You are not a registered administrator for this website"));
          }
      }
  ));

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
}
