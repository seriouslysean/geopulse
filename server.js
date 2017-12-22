const dotenv = process.env.NODE_ENV === 'development' ? require('dotenv') : false;

if (process.env.NODE_ENV === 'development') {
  dotenv.config({
    path: '.env',
  });
}

require('./server/build/bundle');
