/**
 * Twitter model events
 */

'use strict';

import {EventEmitter} from 'events';
import Twitter from './twitter.model';
var TwitterEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TwitterEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Twitter.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    TwitterEvents.emit(event + ':' + doc._id, doc);
    TwitterEvents.emit(event, doc);
  }
}

export default TwitterEvents;
