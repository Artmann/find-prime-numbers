const { getPrimeNumbersBetween } = require('./primes');

describe('Primes', () => {

  describe('getPrimeNumbersBetween', () => {

    it('returns the prime numbers between 1 and 42', () => {

      const primes = getPrimeNumbersBetween(1, 42);

      expect(primes).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41]);

    });

    it('return the prime number between 100 and 200', () => {
      const primes = getPrimeNumbersBetween(100, 200);

      expect(primes).toEqual([101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]);
    })
  });

});
