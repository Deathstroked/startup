'use strict';

var _Actor = require('Actor');

var _Actor2 = _interopRequireDefault(_Actor);

var _Logger = require('Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _Movie = require('Movie');

var _Movie2 = _interopRequireDefault(_Movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var terminator = new _Movie2.default('Terminator I', 1985, 60); /*https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes*/
/*https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import*/

var arnold = new _Actor2.default('Arnold Schwarzenegger', 50);
var actors = [new _Actor2.default('Paul Winfield', 50), new _Actor2.default('Michael Biehn', 50), new _Actor2.default('Linda Hamilton', 50)];

var social = {
    share: function share(friendName) {
        console.log(friendName + " shares " + this.title);
    },
    like: function like(friendName) {
        console.log(friendName + " likes " + this.title);
    }
};

Object.assign(_Movie2.default.prototype, social);

var logger = new _Logger2.default();

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