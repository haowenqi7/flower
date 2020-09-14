import axios from 'axios'

export let get=(url,params)=>{
return axios.get(url,{params})
}

export let post=(url,params)=>{
return axios.post(url,params)
}