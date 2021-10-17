import axios from "axios";

axios.defaults.baseURL = 'http://localhost:9993/weka/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('token');  
