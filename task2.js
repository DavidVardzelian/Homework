const array = [1,[2,3,[4]],[[5,6],7]];

function flatten(array) {
    let simpledArr = [];

    (function flat(array) {
      array.forEach(function(elem) {
        if (Array.isArray(elem)) flat(elem);
        else simpledArr.push(elem);
      });
    })(array);
    
    console.log(simpledArr);
  }

  flatten(array);

