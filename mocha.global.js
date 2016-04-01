import app from './';
import mongoose from 'mongoose';

after(function(done) {
  app.angularFullstack.on('close', () => done());
  app.angularFullstack.close();
  //mongoose.connection.close();
});
