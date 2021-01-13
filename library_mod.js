'use strict';
const arr = [1, 2, 3, 'Hello'];
const obj = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },
	  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};
const cl = arg => console.log(arg);
const cd = arg => console.dir(arg);
const al = arg => alert(arg);

export {arr, obj};