import { domain } from './api_config';

import axios from 'axios';

axios.defaults.baseURL = domain;
axios.defaults.withCredentials = true;

export default axios;