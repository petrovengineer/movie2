import axios from 'axios';

const link = 'https://www.omdbapi.com/?'
const apikey = '7ff6a245'

type paramsType = {[key: string]: string}

function paramsToQuery(params: paramsType){
  let query = ''
  Object.assign(params, {apikey})
  Object.keys(params).map((key:string)=>{
    query += (key+'='+params[key]+'&')
  })
  return query;
}

export async function fetchAPI(params: paramsType){
  let res = await axios.get(link+paramsToQuery(params));
  if(res.data.Error){throw new Error(res.data.Error)};
  return res;
}