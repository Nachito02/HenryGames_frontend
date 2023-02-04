import axios from 'axios'
require('dotenv').config()

const BACK = process.env.REACT_APP_BACKEND_URL

const clienteAxios = axios.create({
    baseURL:  BACK
})


console.log()

export default clienteAxios