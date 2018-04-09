import axios from 'axios'
const urlServer = 'http://localhost:2000/'

const Request = {
    post: function (url,data){ 
        console.log('data en axios ',data)
        return axios.post(urlServer + url,data).then(data => data) 
    }
}

export default Request