import eventEmitter from './eventEmitterClass.js';

export default class Movie extends eventEmitter{
	constructor(name,year,duration){

		super();
		this.name = name;
		this.year = year;
		this.duration = duration;
		this.actors = Array();
	}

	play(){
		this.emit("Play");
	}

	pause(){
		this.emit("Pause");
	}

	resumen(){
		this.emit("Resume");
	}

	addCast(cast){
		if (Array.isArray(cast)){
			for (var i = 0; i < cast.length;i++){
				this.actors.push(cast[i]);
			}
		}else
			this.actors.push(cast);
	}
}
