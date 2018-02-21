import axios from 'axios';

export function getProducts() {
    return axios.get('https://practiceapi.devmountain.com/products').then(res => {
        console.log(res.data)
        return res.data
    })
}

