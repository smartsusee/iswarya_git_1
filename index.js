function data() {
  let a = 10;
  return function () {
    console.log(a);
    return function () {
      console.log(a);
    };
  };
}

let find = data();

let data_1 = find();

data_1();
