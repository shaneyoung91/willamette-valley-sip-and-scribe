import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import './Review.css';
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
    }, [setReviews]);
    
    async function handleAddReview(reviewData) {
        const review = await reviewsAPI.add(reviewData);
        setReviews([...reviews, review]);
    };

    async function handleDelete(reviewId) {
        try {
            await reviewsAPI.deleteReview(reviewId);
            const availReviews = reviews.filter(review => review._id !== reviewId)
            setReviews(availReviews);
        } catch (error) {
            console.log('Error deleting review on front-end:', error);
        }
    };

    return (
        <div>
            <NewReviewForm user={user} handleAddReview={handleAddReview} winery={winery} reviews={reviews} setReviews={setReviews}/>
            <h4><u>Reviews</u></h4>
            <br></br>
            {reviews.map((review) => (
                <div key={review._id} className='review-container'>
                    <p><b>Rating:</b> ⭐️ {review.rating} / 5 ⭐️</p>
                    <p><b>Comments:</b> {review.comments}</p>
                    <p><b>Reviewed By:</b> {review.author.name} on {new Date(review.createdAt).toLocaleDateString()}</p>
                    {/* // Need to figure out how to render user name when adding review vs. full page refresh */}
                    {user && user._id === review.author._id && (
                        <>
                            <Button type="submit">EDIT</Button>
                            &nbsp; &nbsp;
                            <Button type="submit" onClick={() => handleDelete(review._id)}>DELETE</Button>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}
