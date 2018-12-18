import units from '../tool/units'
import axios from  'axios'
let url='http://192.168.33.112:1002/static/json/';
//登录页提交接口
export function loginSubmit(data){
  return axios.get(url+'login.json',data);
}

//首页提交接口
export function indexSubmit(params){
  return axios.get(url+'index.json',params);
}

//获取可预约时间接口
export function getTime(params){
  return axios.get(url+'dateList.json',params);
}
