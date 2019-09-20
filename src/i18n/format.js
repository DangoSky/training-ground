import text from './text.json';

const data = {};
const keyArr = [];

(function format() {
  text.forEach((item, index) => {
    if (index === 0) {
      item.values.forEach(val => {
        keyArr.push(val.formattedValue)
      })
    } else {
      const itemObj = {};
      item.values.forEach((val, index) => {
        const key = keyArr[index];
        if (key === 'key') {
          data[val.formattedValue] = itemObj;
        } else {
          itemObj[key] = val.formattedValue;
        }
      })
    }
  })
  console.log(keyArr);
  console.log(data);
})();

function getLocale() {
  return 'zh-cn'
};

const curLocale = getLocale();

export function intl(key) {
  return data[key][curLocale];
}


