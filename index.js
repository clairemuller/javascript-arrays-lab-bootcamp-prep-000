var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
var destructivelyAppendKitten = (array) => {
  kittens.push("Ralph");
};

var destructivelyPrependKitten = () => {
  kittens.unshift("Bob");
};

var destructivelyRemoveLastKitten = () => {
  kittens.pop();
};

var destructivelyRemoveFirstKitten = () => {
  kittens.shift();
};

var appendKitten = () => {
  var kittens2 = [...kittens, "Broom"];
  return kittens2;
};

var prependKitten = () => {
  var kittens2 = ["Arnold", ...kittens];
  return kittens2;
};

var removeLastKitten = () => {
  var kittens2 = kittens.slice(0, kittens.length - 1);
  return kittens2;
};

var removeFirstKitten = () => {
  var kittens2 = kittens.slice();
  return kittens2;
};

/*
  describe('removeLastKitten()', function() {
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(removeLastKitten()).toEqual(["Milo", "Otis"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })
})
*/




