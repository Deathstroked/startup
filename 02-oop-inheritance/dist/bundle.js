export default class Actor {

  constructor(nombre, edad) {
    this.name = nombre;
    this.age = edad;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  changeName(newname) {
    this.name = newname;
  }

  changeAge(newage) {
    this.age = newage;
  }
}
export default class eventEmitter {

    constructor() {
        this.listeners = new Map();
    }
    on(eventName, callback) {
        this.listeners.has(eventName) || this.listeners.set(eventName, []);
        this.listeners.get(eventName).push(callback);
    }

    off(eventName, callback) {
        let listeners = this.listeners.get(eventName),
            index;

        if (listeners && listeners.length) {
            index = listeners.reduce((i, listener, index) => {
                return isFunction(listener) && listener === callback ? i = index : i;
            }, -1);

            if (index > -1) {
                listeners.splice(index, 1);
                this.listeners.set(eventName, listeners);
                return true;
            }
        }
        return false;
    }
    emit(eventName, ...args) {
        let listeners = this.listeners.get(eventName);

        if (listeners && listeners.length) {
            listeners.forEach(listener => {
                listener(...args);
            });
            return true;
        }
        return false;
    }
}
"use strict";

export default class Logger {
  constructor(id, subject) {
    //Subject param in this case will correspond to "playbutton"'s id
    this.id = id;
    this.subject = subject;
  }

  log(info) {
    console.log(this.subject + " has been pushed!");
  }
}
"use strict";

import EventEmitter from 'eventEmitter';

export default class Movie extends EventEmitter {
  constructor(title, year, duracion) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duracion;
    this.actors = [];
  }

  addCast(actorslist) {
    for (let i = 0; i < actorslist.length; i++) {
      this.actors.push(actorslist[i]);
    }
  }

  getCast() {
    return this.actors;
  }

  getTitle() {
    return this.title;
  }

  getYear() {
    return this.year;
  }

  getDuration() {
    return this.duration;
  }

  play() {
    console.log("Play Movie");
  }

  pause() {
    console.log("Pause Movie");
  }

  resume() {
    console.log("Resume Movie");
  }

}
/*https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes*/
/*https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import*/

import Actor from 'Actor';
import Logger from 'Logger';
import Movie from 'Movie';

let terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [new Actor('Paul Winfield', 50), new Actor('Michael Biehn', 50), new Actor('Linda Hamilton', 50)];

let social = {

    share(friendName) {
        console.log(friendName + " shares " + this.title);
    },

    like(friendName) {
        console.log(friendName + " likes " + this.title);
    }
};

Object.assign(Movie.prototype, social);

const logger = new Logger();

terminator.addCast(arnold);
terminator.addCast(actors);

terminator.on("play", logger.log);
terminator.on("pause", logger.log);
terminator.on("resume", logger.log);

terminator.play();
terminator.pause();
terminator.resume();

terminator.like("Martin Martinez");
terminator.share("Gonzalo Gonzalez");
