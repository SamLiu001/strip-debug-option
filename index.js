'use strict';
const rocambole = require('rocambole');
const stripDebugger = require('rocambole-strip-debugger');
const stripConsole = require('rocambole-strip-console');
const stripAlert = require('rocambole-strip-alert');
const espree = require('espree');

rocambole.parseFn = espree.parse;
rocambole.parseContext = espree;
rocambole.parseOptions = {
	range: true,
	tokens: true,
	comment: true,
	ecmaVersion: 2019,
	ecmaFeatures: {
		jsx: true,
		globalReturn: false,
		impliedStrict: false
	}
};

module.exports = (source,option={}) => rocambole.moonwalk(source, node => {
	if(!option.skipDebugger){
		stripDebugger(node);
	}
	if(!option.skipConsole){
		stripConsole(node);
	}
	if(!option.skipAlert){
		stripAlert(node);	
	}
});
