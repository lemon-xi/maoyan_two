import axios from "axios";

class Http {
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:8082/mmdb',
            timeout: 6000,
        });
    }

    get({url, params = {}}) {
        return new Promise((resolve, reject) => {
            this.instance.get(url, {params:params})
             .then(value => {
                resolve(value.data)
            }).catch(err=>{
                reject(err)
            })
        })
    }
}


export default Http
