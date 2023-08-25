import sendRequest from './send-request';

const BASE_URL = '/api/reviews';

export function getAll() {
    return sendRequest(BASE_URL);
}

// export function getAllMyReviews(userId) {
//     return sendRequest(`${BASE_URL}/myreviews/${userId}`);
// }

export function add(reviewData) {
    return sendRequest(BASE_URL, 'POST', reviewData);
}

export function deleteReview(reviewId) {
    return sendRequest(`${BASE_URL}/${reviewId}`, 'DELETE')
}

export function updateReview(reviewId, updatedReviewData){
    return sendRequest(`${BASE_URL}/${reviewId}`, 'PUT', updatedReviewData)
}