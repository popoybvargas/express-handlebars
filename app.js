const express = require('express');
const hbs = require('express-handlebars');

const app = express();
const port = 3000;

app.set('view engine', 'hbs');
app.engine('hbs', hbs(
{
  layoutsDir: `${__dirname}/views/layouts`,
  extname: 'hbs',
  defaultLayout: 'index',
  // partialsDir: `${__dirname}/views/partials`
}));

app.use(express.static('public'));

const proPlayer = 'Bjergsen';
const suggestedPros = () =>
{
  return [
    {
      name: 'Katarina',
      lane: 'midlaner'
    },
    {
      name: 'Jayce',
      lane: 'toplaner'
    },
    {
      name: 'Heimerdinger',
      lane: 'toplaner'
    },
    {
      name: 'Zed',
      lane: 'midlaner'
    },
    {
      name: 'Azir',
      lane: 'midlaner'
    },
  ];
};

const listExists = false;

// app.get('/', (req, res) => res.render('main', { layout: 'planB' }));
app.get('/', (req, res) => res.render('main', { proPlayer, suggestedPros: suggestedPros(), listExists }));

app.listen(port, () => console.log(`App listening on port ${port}...`));