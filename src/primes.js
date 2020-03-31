function isNaturalNumber(number) {
  return Math.round(number) === number;
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  if (!isNaturalNumber(number)) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function getPrimeNumbersBetween(start, end) {
  const primes = [];

  for (let i = start; i < end; i++) {
    if (!isPrime(i)) {
      continue;
    }

    primes.push(i);
  }

  return primes;
}

module.exports =  {
  getPrimeNumbersBetween
};
