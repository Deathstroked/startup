export default class Actor {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}
export default class eventEmitter {
	constructor() {

		this.events = new Array();
	}

	on(eventName, callback) {
		if (typeof this.events[eventName] !== 'object') {
			this.events[eventName] = [];

			this.events[eventName].push(callback);
		}
	}

	emit(eventName) {
		if (this.events[eventName]) {
			this.events[eventName].forEach(function (callback) {
				callback(eventName);
			});
		}
	}

	off(eventName, callback) {
		if (typeof this.events[eventName] === 'object') {
			let idx = indexOf(this.events[eventName], callback);
			if (idx > -1) {
				this.events[event].splice(index, 1);
			}
		}
	}
}
export default class Logger {

	constructor() {}

	log(info) {
		console.log("The '" + info + "' event has been emitted.");
	}
}
import eventEmitter from './eventEmitterClass.js';

export default class Movie extends eventEmitter {
	constructor(name, year, duration) {

		super();
		this.name = name;
		this.year = year;
		this.duration = duration;
		this.actors = Array();
	}

	play() {
		this.emit("Play");
	}

	pause() {
		this.emit("Pause");
	}

	resumen() {
		this.emit("Resume");
	}

	addCast(cast) {
		if (Array.isArray(cast)) {
			for (var i = 0; i < cast.length; i++) {
				this.actors.push(cast[i]);
			}
		} else this.actors.push(cast);
	}
}
/*https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes*/
/*https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import*/
import eventEmitter from './eventEmitterClass.js';
import Actor from './actorClass.js';
import Movie from './movieClass.js';
import Logger from './loggerClass.js';

function createMovies() {

	movies = new Array(3);

	movies[0] = new Movie("The Godfather I", 1972, 178);
	movies[1] = new Movie("The Godfather II", 1974, 202);
	movies[2] = new Movie("The Godfather III", 1990, 170);

	var list = "<ul>";
	for (var i in movies) {
		list = list + "<li>" + "Movie: " + movies[i].name + "</li>";
	}
	list = list + "</ul>";
	document.getElementById("movielist").innerHTML = list;

	var logger = new Logger();

	movies.forEach(function (movie) {
		movie.on("Play", logger.log);
		movie.on("Pause", logger.log);
		movie.on("Resume", logger.log);
	});
}

function eventeg() {

	if (typeof events == 'undefined') var events = new eventEmitter();

	events.on("Salute", function () {
		console.log("Hi!");
	});

	events.emit("Salute");
}

function playMovies() {

	if (typeof movies != 'undefined') {
		movies.forEach(function (movie) {
			movie.emit("Play");
		});
	} else {
		console.log("The movies were not created.");
	}
}

function addActor() {

	if (typeof movies != 'undefined') {
		movies[0].addCast(new Actor("Al Pacino", 77));
		const actors = [new Actor('Andy García', 61), new Actor('Sofia Coppola', 46), new Actor('Robert De Niro', 74)];
		movies[0].addCast(actors);
		console.log(movies[0].actors);
	} else {
		console.log("The movies were not created.");
	}
}

function mixin() {

	var social = {
		share(friendName) {
			console.log(friendName + " shares " + this.name);
		},
		like(friendName) {
			console.log(friendName + " likes " + this.name);
		}
	};

	movie = new Movie("The Godfather I", 1972, 178);

	Object.assign(Movie.prototype, social);

	movie.like("Martin Martinez");
	movie.share("Gonzalo Gonzalez");
}
