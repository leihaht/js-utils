/*
 * get array of numbers of range
 * from: starting
 * to: ending
 * step: steps between, default: 1
 *
 */

// '~~' is Alternative for Math.floor()
const range = (from, to, step = 1) => {
  	if (step === 0) {
        throw TypeError("Step cannot be zero.")
    }
	if( to === undefined ) [to, from] = [from, 0]
	return [...Array(~~((to - from) / step) + 1)].map(
  		(v, k) => from + k * step
	)
}

// default step is 1
const testing = range(2, 12)
//=> [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// with step
const testing = range(2, 18, 3)
//=> [2, 5, 8, 11, 14, 17]

// from is also able to emit
const testing = range(12)
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
