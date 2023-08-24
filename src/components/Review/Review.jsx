import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import NewReviewForm from '../../components/NewReviewForm/NewReviewForm';
import * as reviewsAPI from '../../utilities/reviews-api';

export default function Review({ user, reviews, setReviews, winery }) {
    
    useEffect(function() {
        async function getReviews() {
            const reviews = await reviewsAPI.getAll();
            const wineryReviews = reviews.filter(review => review.winery === winery._id);
            setReviews(wineryReviews);
        }
        getReviews();
    }, [winery])
    
    async function handleAddReview(reviewData) {
        const review = await reviewsAPI.add(reviewData);
        setReviews([...reviews, review]);
    }

    async function handleDelete(reviewId) {
        const review = await reviewsAPI.deleteReview(reviewId);
        // reviewId is the id passed
        // filter method
        setReviews([...reviews, review])
    }

    return (
        <div>
            <NewReviewForm user={user} handleAddReview={handleAddReview} winery={winery} reviews={reviews} setReviews={setReviews}/>
            <br></br>
            <h2><u>Reviews</u></h2>
            {reviews.map((review) => (
                <div>
                    <ul key={review._id}>
                        <li><strong>Rating:</strong> {review.rating} ⭐️</li>
                        <li><strong>Comments:</strong> {review.comments}</li>
                    </ul>
                    <p><strong>Reviewed By: {review.author.name} on {new Date(review.createdAt).toLocaleDateString()}</strong></p>
                    <Button type="submit">EDIT</Button>
                    &nbsp; &nbsp;
                    <Button type="submit" onClick={() => handleDelete(review._id)}>DELETE</Button>
                </div>
            ))}
        </div>
    )
}
