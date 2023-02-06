//Adding in packages
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const mysql = require('mysql2');
const fs = require('fs');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 60 * 60 * 1000, // expires after 1 hour
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
}; // cookies and/or doggy biscuits :)

app.use(session(sess));

// const seedConnect = fs.readFileSync("./seeds/index.js", {encoding: "utf-8"});

// connection.query(seedConnect, err => {
//   if (err) { throw err }
// },

// console.log("SEEDED"),
// connection.end() );






const hbs = exphbs.create({ helpers });
// Express.js using the template engine ie. handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
//console logging port is ready
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App started in Port ${PORT}`));
});