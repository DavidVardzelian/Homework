//Map realization

const map = function (array, cb) {
 
    let newArray = [];
 
    array.forEach(function (element) {
       newArray.push(cb(element)); 
    });
 
    return newArray;
 
};
 
//slice realization

function slice(array, from, to = array.length) {

    from = Math.max(from, 0);
    to = Math.min(to, array.length);
    const result = [];
    for(let index = from; index < to; index++) {
    }
    return result;
  }



 