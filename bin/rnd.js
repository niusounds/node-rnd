#!/usr/bin/env node
var program = require('commander'), fs = require('fs');
program.version('0.0.1')
		.usage('[options]')
		.option('-o, --out [output]', 'Output to file (default is print to console)')
		.option('-l, --len [length]', 'Length of each strings (default is 8)')
		.option('-c, --count [count]', 'Count of generated strings (default is 1)')
		.option('-m, --mode [mode]', 'Generation mode. Must be each of one in [alphas, alphasS, alphasL, numAlphas, nums]. (default is numAlphas)')
		.parse(process.argv);

var rnd = require('../lib/rnd');
var mode = program.mode || 'numAlphas';
if (!( mode in rnd)) {
	program.help();
	return;
}

var len = Number(program.len) || 8;
var count = Number(program.count) || 1;

var keys = rnd[mode](len, count);
var output = keys.join('\r\n');

if (program.out) {
	fs.writeFileSync(program.out, output);
} else {
	console.log(output);
}
