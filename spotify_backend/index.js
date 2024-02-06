const express = require("express");
const mongoose = require("mongoose");
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const User = require("./models/User");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song")
const plylistRoutes = require("./routes/playlist")
const app = express();
require("dotenv").config();
const cors = require('cors');
const port = 8000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://KartikeySharma:" +
      process.env.MONGO_PASSWORD +
      "@cluster0.ldptiit.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((x) => {
    console.log("Connected to Mongo!");
  })
  .catch((err) => {
    console.log("Error connecting to Mongo");
  });
app.get("/", (req, res) => {
  res.send("Hello World");
});

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisKeyIsSupposedToBeSceret";
passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.identifier }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);

app.use("/auth" , authRoutes)
app.use("/song" , songRoutes)
app.use("/playlist" , plylistRoutes);


app.listen(port, () => {
  console.log("App is running on port " + port);
});
