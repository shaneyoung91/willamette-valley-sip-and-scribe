// import { useEffect } from 'react';
// import * as reviewsAPI from '../../utilities/reviews-api';

// export default function MyReviewsPage({user, reviews, setReviews}) {
    
//     useEffect(function() {
//         async function getMyReviews() {
//             const reviews = await reviewsAPI.getAllMyReviews();
//             const userReviews = reviews.filter(review => review.author._id === user._id);
//             setReviews(userReviews);
//         } 
//         getMyReviews();
//     }, [user._id, setReviews]);
    
//     return (
//         <div>
//             <h2>MyReviewsPage</h2>
//             <p>This page will let users view, edit, and delete their reviews.</p>
//             {reviews.map((review, index) => (
//                 <div key={index}>
//                     <p>Winery: {review.winery.name}</p>
//                     <p>Rating: {review.rating}</p>
//                     <p>Comments: {review.comments}</p>
//                     <p>Created on: {new Date(review.createdAt).toLocaleDateString()}.</p>
//                 </div>
//             ))}
//         </div>
//     )
// }