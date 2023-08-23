import sendRequest from './send-request';

const BASE_URL = '/api/reviews';

export function add(reviewData) {
    return sendRequest(BASE_URL, 'POST', reviewData);
}

export function getAll() {
    return sendRequest(BASE_URL);
}