import axios from 'axios'


axios.defaults.headers['Content-Type']='application/json;charset=utf-8'

const service= axios.create({
    baseURL:import.meta.env.vite,
    timeout:10000

})
service.interceptors.request.use(config=>{

})
service.interceptors.response.use(res=>{

})


export default service