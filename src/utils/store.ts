/*
 * @Author: flwfdd
 * @Date: 2022-05-28 09:18:09
 * @LastEditTime: 2022-08-17 23:02:53
 * @Description: 全局状态管理
 * _(:з」∠)_
 */
import { reactive, watch } from 'vue'
import package_json from '../../package.json'

let s = window.localStorage.getItem('store');
let x:any={};
if(s)x=JSON.parse(s);
else x={};

const store = reactive({
  version: package_json.version,
  api_url: "https://bit101.flwfdd.xyz:5555",
  // api_url: "http://127.0.0.1:5000",
  img_suffix:"!low",
  fake_cookie: x.fake_cookie||"Here's fake_cookie",
})

watch(store, () => {
  window.localStorage.setItem('store', JSON.stringify(store));
})

// console.log(store);

export default store