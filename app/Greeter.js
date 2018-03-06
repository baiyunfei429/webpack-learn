// Greeter.js
import React, {Component} from 'react';
import styles from './Greeter.css';//导入
var config = require('./config.json');

// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = "take me to your heart";
//   greet.textContent = config.greetText;
//   greet.style = "color: blue;background: red;";
//   return greet;
// };
class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
        {config.greetText}
        <div className={styles.flexdiv}>白云飞</div>
      </div>
    );
  }
}

export default Greeter