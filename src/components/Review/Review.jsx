import { Button, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './Review.css';
import NewReviewForm from '../../components/NewReviewForm/NewReviewForm';
import UpdateReviewForm from '../UpdateReviewForm/UpdateReviewForm';
import * as reviewsAPI from '../../utilities/reviews-api';

export default function Review({ user, winery }) {
    const [editReviewId, setEditReviewId] = useState(null);
    const [reviews, setReviews] = useState([]);

    useEffect(function() {
        async function getReviews() {
            const reviews = await reviewsAPI.getAll();
            const wineryReviews = reviews.filter(review => review.winery === winery._id);
            setReviews(wineryReviews);
        }
        getReviews();
    }, [winery._id, setReviews]);


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
        <>
            <div className="review-body">
                <Card>
                    <Card.Header className='review-title'><u>Reviews</u></Card.Header>
                </Card>
                {sortedReviews.length === 0 ? (
                    <Card>
                        <Card.Body>No Reviews Yet 🙁</Card.Body>
                    </Card>
                ) : (
                    sortedReviews.map((review) => (
                        <div key={review._id} className='review-container'>
                            {editReviewId === review._id ? (
                                <UpdateReviewForm review={review} handleUpdate={handleUpdate}/>
                            ) : (
                                <Card>
                                    <Card.Body>
                                        <Card.Text><b>Reviewed By:</b> {review.author.name} on {new Date(review.createdAt).toLocaleDateString()}</Card.Text>
                                        <Card.Text><b>Rating:</b> ⭐️ {review.rating} / 5 ⭐️</Card.Text>
                                        <Card.Text><b>Comments:</b> {review.comments}</Card.Text>
                                        {user && user._id === review.author._id && (
                                            <div>
                                                <Button onClick={() => setEditReviewId(review._id)}>EDIT</Button>
                                                &nbsp; &nbsp;
                                                <Button onClick={() => handleDelete(review._id)}>DELETE</Button>
                                            </div>
                                        )}
                                    </Card.Body>
                                </Card>
                            )}
                        </div>
                    ))
                )}
                <br />
                {user ? <NewReviewForm user={user} handleAddReview={handleAddReview} winery={winery} />
                : 
                <div className='non-user-message'>
                    <b>PLEASE LOGIN / SIGN UP TO ADD A REVIEW</b>
                </div>
                }
            </div>
        </>
    )
}
