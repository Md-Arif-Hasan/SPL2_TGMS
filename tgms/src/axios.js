import axios from 'axios'


axios.defaults.baseURL = 'http://localhost/php_test/';

axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');