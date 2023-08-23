import { Button } from "react-bootstrap";

export default function NewReviewForm({ user, handleAddReview, winery, reviews, setReviews }) {

    const handleSubmit = (evt) => {
        evt.preventDefault()

        const rating = evt.target.rating.value;
        const comments = evt.target.comments.value;

        const newReview = {
            rating: rating,
            comments: comments,
            author: user._id,
            winery: winery._id
        };
        
        handleAddReview(newReview);
    }


    return (
        <div>
            <h2>NewReviewForm</h2>
            <p>This component will render on winery detail page</p>
            <p>And allow users to create reviews for this specific winery</p>
            <form onSubmit={handleSubmit}>
                <label>Rating</label>
                <input
                    type="number"
                    id="rating"
                    name="rating"
                    min={1}
                    max={5}
                    required
                />
                <label>Comments:</label>
                <textarea
                    id="comments"
                    name="comments"
                    required
                />
                <Button type="submit">Add Review</Button>
            </form>
            <br></br>
        </div>
    )
}
