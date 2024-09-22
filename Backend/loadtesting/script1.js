import http from 'k6/http';
import { check, sleep } from 'k6';
import {Rate } from 'k6/metrics';

export let errorRate = new Rate('errors');

export let options = {
    vus: 1000, // 10 user looping
    duration: '1m',
    thresholds: {
        errors: ['rate<0.1'],
    },
}

export default function () {

    let response = http.get('https://reportcard-c5yn.onrender.com');
    let sucess = response.status === 304;

    errorRate.add(!sucess);
    sleep(1/100);

}