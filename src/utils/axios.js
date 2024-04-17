import axios from "axios";

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
window.axios = axios;
window.axios.defaults.headers.common['Access-Control-Allow-Origin'] = import.meta.env.VITE_ACCESS_ORIGIN;
window.axios.defaults.headers.post['Access-Control-Allow-Origin'] = import.meta.env.VITE_ACCESS_ORIGIN;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
if (localStorage.getItem('token')) {
    window.axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem('token')}`}
    window.axios.defaults.headers.post = {'Authorization': `Bearer ${localStorage.getItem('token')}`}
}

// Dynamically set the baseURL
const local_url = import.meta.env.VITE_BACKEND_URL_LOCAL;
const local_url_2 = import.meta.env.VITE_BACKEND_URL_LOCAL_2;
const staging_url = import.meta.env.VITE_BACKEND_URL_STAGING;
const production_url = import.meta.env.VITE_BACKEND_URL_PRODUCTION;
const {protocol, hostname} = window.location;
let baseURL = '';

if (hostname === local_url) {
    baseURL = `${protocol}//${hostname}:8000`;
} else if (hostname === local_url_2) {
    baseURL = `${protocol}//${hostname}:8000`;
} else if (hostname === staging_url) {
    baseURL = `${protocol}//${hostname}`;
} else if (hostname === production_url) {
    baseURL = `${protocol}//${hostname}`;
}
console.log('baseURL', baseURL);
console.log('hostname', hostname);

window.axios.defaults.baseURL = baseURL;
window.axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
window.axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8';
window.axios.defaults.headers.common['Accept'] = 'application/json';
window.axios.defaults.headers.post['Accept'] = 'application/json';

export default axios;
