import axios from 'axios';

export function test() {
  axios({
    method: 'get',

  }).then(function (response) {
    console.log(response.data.sheets[0].data[0].rowData);
  });
}
