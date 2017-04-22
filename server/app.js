process.env.NODE_ENV = process.env.NODE_ENV || 'local';
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const webpack = require('webpack');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* view engine setup */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* Make assets in /public/8 accessible publicly */
app.use('/assets', express.static(path.resolve(__dirname,'../public')));
/* This is where WebPack will put the compiled bundle */
app.use('/assets', express.static(path.resolve(__dirname,'../build')));

/* Routes */
app.get('/api/user', (req, res) => {
  res.send({ first_name: 'John', last_name: 'Doe' });
});

app.use('/', (req, res) => {
  res.render('index')
});

/* Webpack bundling stuff */
const compiler = webpack({
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname,'../'),
    filename: '/build/bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
});

let isServerRunning = false, buildCounter = 0;
compiler.watch({
  poll: true // use polling instead of native watchers
}, function(err) {
  if(err){
    console.error('There was an error building the package : ', err);
    return;
  }
  console.log('WEBPACK Build Completed ',buildCounter);
  buildCounter++;
  if(!isServerRunning){
    startServer();
  }
});

function startServer(){
  app.listen(3000, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    isServerRunning = true;
    console.log('App is running on port 3000');
  });
}