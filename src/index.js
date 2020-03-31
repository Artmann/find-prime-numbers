const { getPrimeNumbersBetween } = require('./primes');

function printPrimesUpTo(n) {
  const primes = getPrimeNumbersBetween(1, n);

  console.log(primes.join(', '));
}

(function() {
  printPrimesUpTo(552);
})();
