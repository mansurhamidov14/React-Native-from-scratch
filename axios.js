/**
 * Created by user on 17.03.2019.
 */
import axios from 'axios';
import {baseUrl} from './endpoints';

const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        'X-Auth-Token': '836f95a991374025bd61e5956c25cc42'
    }
});

export default instance;

