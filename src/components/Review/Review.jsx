import { useEffect } from 'react';
import NewReviewForm from '../../components/NewReviewForm/NewReviewForm';
import * as reviewsAPI from '../../utilities/reviews-api';

export default function Review({ user, reviews, setReviews, winery }) {
    
    useEffect(function() {
        async function getReviews() {
            const reviews = await reviewsAPI.getAll();
            const wineryReviews = reviews.filter(review => review.winery === winery._id);
            setReviews(reviews);
        }
        getReviews();
    }, [winery])
    
    async function handleAddReview(reviewData) {
        const review = await reviewsAPI.add(reviewData);
        setReviews([...reviews, review]);
    }
    
    return (
        <div>
            <NewReviewForm user={user} handleAddReview={handleAddReview} winery={winery} reviews={reviews} setReviews={setReviews}/>
            <h2>Reviews</h2>
            <br></br>
            {reviews.map((review) => (
                <div>
                    <p><strong>User: {review.author.name}</strong></p>
                    <ul>
                        <li key={review._id}>
                            <p><strong>Rating:</strong> {review.rating}</p>
                            <p><strong>Comments:</strong> {review.comments}</p>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}
