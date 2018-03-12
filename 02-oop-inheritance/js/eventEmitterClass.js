export default class eventEmitter{
	constructor(){

		this.events = new Array();

	}

	on(eventName,callback){
		if (typeof this.events[eventName] !== 'object') {
			this.events[eventName] = [];

		this.events[eventName].push(callback);
		}
	}

	emit(eventName){
		if (this.events[eventName]) {
			this.events[eventName].forEach(function(callback){
				callback(eventName);
			});
		}
	}

	off(eventName,callback){
		if (typeof this.events[eventName] === 'object') {
			let idx = indexOf(this.events[eventName],callback);
			if (idx > -1) {
				this.events[event].splice(index,1);
			}
		}
	}
}
