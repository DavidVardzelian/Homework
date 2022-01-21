const obj = {
  name: "Jhon",
  fullName: null,
  country: {
    name: "Armenia",
    code: 374,
  },
};

// Recursive functiona
function reversObj(obj) {
  let res = {};

  for (let key in obj) {
    const value = obj[key];

    // Checking value for existing for null case
    if (value && typeof value === "object")
      res = { ...res, [key]: reversObj(value) };
    else res[value] = key;
  }

  return res;
}

console.log(reversObj(obj));
