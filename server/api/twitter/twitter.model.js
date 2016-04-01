'use strict';

import mongoose from 'mongoose';

var TwitterSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Twitter', TwitterSchema);
