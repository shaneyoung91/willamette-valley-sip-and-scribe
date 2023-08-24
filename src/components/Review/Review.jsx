import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './Review.css';
import NewReviewForm from '../../components/NewReviewForm/NewReviewForm';
import UpdateReviewForm from '../UpdateReviewForm/UpdateReviewForm';
import * as reviewsAPI from '../../utilities/reviews-api';

export default function Review({ user, reviews, setReviews, winery }) {
    const [editReviewId, setEditReviewId] = useState(null);

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

    async function handleUpdate(editReview) {
        try {
            await reviewsAPI.updateReview(editReview._id, editReview);
            const editReviews = reviews.map(review => review._id === 
                editReview._id ? editReview : review);
            setReviews(editReviews);
            setEditReviewId(null);
        } catch (error) {
            console.log('Error updating review on front-end:', error);
        }
    }

    const sortedReviews = reviews.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return (
        <div>
            <h4><u>Reviews</u></h4>
            <br></br>
            {sortedReviews.map((review) => (
                <div key={review._id} className='review-container'>
                    {editReviewId === review._id ? (
                        <UpdateReviewForm
                            review={review}
                            handleUpdate={handleUpdate}
                        />
                    ) : (
                        <div>
                            <p><b>Rating:</b> ⭐️ {review.rating} / 5 ⭐️</p>
                            <p><b>Comments:</b> {review.comments}</p>
                            <p><b>Reviewed By:</b> {review.author.name} on {new Date(review.createdAt).toLocaleDateString()}</p>
                            {/* // Need to figure out how to render user name when adding review vs. full page refresh */}
                            {user && user._id === review.author._id && (
                                <>
                                    <Button type="submit" onClick={() => setEditReviewId(review._id)}>EDIT</Button>
                                    &nbsp; &nbsp;
                                    <Button type="submit" onClick={() => handleDelete(review._id)}>DELETE</Button>
                                </>
                            )}
                        </div>
                    )}
                </div>
            ))}
            {user ? <NewReviewForm user={user} handleAddReview={handleAddReview} winery={winery} reviews={reviews} setReviews={setReviews} />
            : 
            <div className='non-user-message'>
                <b>PLEASE LOGIN / SIGN UP TO ADD A REVIEW</b>
            </div>
            }
        </div>
    )
}
