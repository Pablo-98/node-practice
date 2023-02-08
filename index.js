import { EventEmitter } from 'events'; // built in to node;
 

//create a variable that utilizes the eventemitter

const eventEmitter = new EventEmitter();

// on is a global
// node has built in globals

/*
events: 
in most cases we will listen to events
before the node process finishes it emits an event named 'exit'
we can listen to this event using on and register a callback argument on the  
when the exit event occurs, node.js will call this function, hence the term CALL BACK

process.on('exit', function() {


}
this event is built in so we will create our own


*/
eventEmitter.on