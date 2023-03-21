var events = require("events");
var em = new events.EventEmitter();

function greetme(name){
    console.log("welcome " + name);
}

function invite(name){
    console.log( name + ", You are invited Seminar.");
}
// em.setMaxListeners(2);
em.on("joined",greetme);
em.on("joined",invite);

// em.addListener("welcome ", greetme);

// em.emit("joined","abhi");
// em.emit("joined","gayatri");
// em.emit("joined","ab");
// em.emit("joined","gay");
// em.emit("joined","abh");
 // em.removeAllListeners("joined");
console.log(em.listeners("joined"));
// em.removeListener("joined",greetme);
// em.emit("joined","jaydeep");