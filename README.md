# 练兵场

## flow

> 国际化实验

### 实现思路：

- 使用 [Google sheet api](https://developers.google.com/sheets/api/) 获取 Google sheet 的数据，并写入到本地文件中。 

- 通过 `npm run i18n` 运行脚本，完成数据拉取和写入的工作。之后若 Google sheet 有更新的话，只需要再g `npm run i18n` 即可。

- 将 sheet 数据解析成一个以 key 为键，值为一个对象（语言为键，文案为值）的对象。

- 先通过 `path` 获取当前所使用的语言，导出一个 `intl` 函数，通过 `curLocale` 和 key 来返回解析好的对象中相应的数据。

> 该实验无法通过 clone 运行起来，因为涉及到 Google sheet api 使用所需要的密钥。若要进行实验的话，可以在 `src/i18n` 目录下新建一个 `const.js`, 导出 Google sheet 的 ID 和 使用 API 的密钥（密钥需要在[控制台](https://console.developers.google.com/apis/dashboard)设置获取, 详情可见[文档](https://developers.google.com/sheets/api/guides/authorizing)）。

```js
// src/i18n/const.js

exports.SHEETID = 'Google sheet ID';
exports.KEY = '密钥';
```