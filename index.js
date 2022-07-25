//import { add, minus } from './app.js';
//import {add1,minus1} from './app.js'
//import * as APP from './app.js'
console.clear();
/*-----------------------------------*/
//Spread Operator
//Expanding String
let a = 'Hello';
let chars = [...a];
//console.log(chars);

//Expanding Array
let exArr = ['Hello', 'World'];
//console.log(...exArr);

//Combing Array
let comArr = ['Welcome'];
let comArr1 = ['Javascript', 'Training'];
let comArr3 = [...comArr, ...comArr1];
//console.log(comArr3);

/*-----------------------------------*/
//Arrow functions
function regular(a, b) {
  let sum = a + b;
  console.log('Regular ---' + sum);
}
//regular(10, 5);

arrow = (a, b) => {
  let sum = a + b;
  console.log('Arrow ---' + sum);
};
//arrow(10, 5);

/*-----------------------------------*/
//Promise
function promiseabc() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done'), 5000;
    });
  });

  promise.then((result) => {
    console.log('result++' + result);
  });
  console.log('Last line');
}
//promiseabc();
/*-----------------------------------*/
//async-await
async function asyncabc() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done'), 5000;
    });
  });

  console.log('promise++' + JSON.stringify(promise));
  let result = await promise;
  console.log('result++' + result);
  console.log('Last line');
}
//asyncabc();
/*Array helper-----------------------------------*/
//forEach
funforEach = () => {
  let arr = ['Blue', 'Red', 'Black', 'Orange', 'Yellow'];
  let arr1 = [];
  arr.forEach((a, index) => {
    console.log(a + '--' + index);
    arr1 = [...arr1, a];
  });
  console.log(arr1);
};
//funforEach();
/*########*/
//map()
funMap = () => {
  let arr = [
    { id: 1, name: 'Walter White BB' },
    { id: 2, name: 'Saul Goodman BB' },
    { id: 3, name: 'Jesse Pinkman' },
  ];
  let arr1 = [];
  arr1 = arr.map((a) => {
    return a.id;
  });
  console.log(arr1);
};
//funMap()
/*########*/
//filter()
funFilter = () => {
  let arr = [
    { id: 1, name: 'Walter White BB' },
    { id: 2, name: 'Saul Goodman BB' },
    { id: 3, name: 'Jesse Pinkman' },
  ];
  let arr1 = [];
  //Can also return the value and set to a new variable
  //arr1 = arr.filter(a => a.id > 1);
  arr.filter((a) => {
    if (a.id > 1) {
      arr1 = [...arr1, a];
    }
  });

  console.log(arr1);
};
//funFilter()
/*########*/
//find()
funFind = () => {
  let arr = [
    { id: 1, name: 'Walter White BB' },
    { id: 2, name: 'Saul Goodman BB' },
    { id: 3, name: 'Jesse Pinkman' },
  ];
  let obj = {};
  //Can also return the value and set to a new variable
  //Retuns only the first find in the array.
  obj = arr.find((a) => a.name.includes('BB'));
  console.log(obj);
};
//funFind()
/*########*/
//Some()
funSome = () => {
  let arr = [
    { id: 1, name: 'Walter White BB' },
    { id: 2, name: 'Saul Goodman BB' },
    { id: 3, name: 'Jesse Pinkman' },
  ];
  let returnVal;
  returnVal = arr.some((a) => a.name.includes('BB'));
  console.log(returnVal);
};
//funSome();
/*########*/
//Every()
funEvery = () => {
  let arr = [
    { id: 1, name: 'Walter White BB' },
    { id: 2, name: 'Saul Goodman BB' },
    { id: 3, name: 'Jesse Pinkman' },
  ];
  let returnVal;
  returnVal = arr.every((a) => a.name.includes('BB'));
  console.log(returnVal);
};
//funEvery();
/*########*/
//Reduce()
funReduce = () => {
  const array1 = [1, 2, 3, 4];
  // 0 + 1 + 2 + 3 + 4
  const initialValue = 0;
  const sumWithInitial = array1.reduce(
    (previousValue, currentValue, index, arr) => {
      /*console.log('previousValue++'+previousValue);
      console.log('currentValue++'+currentValue);
      console.log('index++'+index);
      console.log('arr++'+arr);
      console.log('-------------------');*/
      return previousValue + currentValue;
    },
    initialValue
  );

  console.log(sumWithInitial);
  // expected output: 10
};
//funReduce();
