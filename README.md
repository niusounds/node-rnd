node-rnd
========

Node.js random string generation tool & library.

## Install

### Command

	npm install node-rnd -g

	  Usage: rnd.js [options]

	  Options:

	    -h, --help           output usage information
	    -V, --version        output the version number
	    -o, --out [output]   Output to file (default is print to console)
	    -l, --len [length]   Length of each strings (default is 8)
	    -c, --count [count]  Count of generated strings (default is 1)
	    -m, --mode [mode]    Generation mode. Must be each of one in [alphas, alphasS, alphasL, numAlphas, nums]. (default is numAlphas)

#### Examples

	$ rnd
	9T84kqGU

	$ rnd -c 10
	ejuZSnv6
	vVq4zLKo
	5SzQhL4o
	LnNg22Vt
	tbvuIR90
	3WOeyA0R
	beRi2Gf8
	cvBqw1Mq
	WKB4qJKP
	nZDpydkY

	$ rnd -l 20
	gHDjkoJ7v3UZLZdVLp0V

	$ rnd -m nums -l 5 -c 9
	12248
	20279
	31869
	50797
	53287
	80500
	87220
	04728
	07562

	$ rnd -m nums -o output.txt # Output strings will be written to file

### Library


	npm install node-rnd

```JavaScript
var generated = rnd.alphas(10, 1);
console.log(generated);

var generated = rnd.alphasL(10, 10);
console.log(generated);

var generated = rnd.numAlphas(5, 5);
console.log(generated);

var generated = rnd.nums(5, 5);
console.log(generated);
```