/*!
 * supreme-stylus
 * Copyright (c) 2013 Serge Droganov (serge@droganov.ru)
 * MIT Licensed
 */

var stylus			= require('stylus');

exports				= module.exports = plugin;
exports.version		= "0.0.1";
exports.path		= __dirname;

function supremeStylus(style) {
	console.log(__dirname);
	style.include(__dirname);
}

function plugin() {
	return supremeStylus;
}