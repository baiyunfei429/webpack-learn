//main.js 
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import './main.css';//使用require导入css文件
import _ from 'lodash';
import { add } from 'lodash/fp';

const addOne = add(1);
console.log(_.map([1, 2, 3], addOne));
console.log(_.chunk([1, 2, 3, 3, 3, 3], 5));
// import "babel-polyfill";
//const greeter = require('./Greeter.js');

// document.querySelector("#root").appendChild(greeter());
render(<Greeter />, document.getElementById('root'));
const sleep = (timeout)=>{
  return new Promise( (resolve, reject)=>{
      setTimeout(resolve, timeout)
  })
}

(async ()=>{
  console.log("async-bai");
  console.time("async");
  await sleep(3000);
  console.timeEnd("async");
  console.log("async-end");
})()