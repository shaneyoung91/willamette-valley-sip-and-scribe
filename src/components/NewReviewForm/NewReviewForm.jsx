import { Button, Form, FloatingLabel } from "react-bootstrap";

export default function NewReviewForm({ user, handleAddReview, winery }) {

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
        evt.target.reset();
    }

    return (
        <div>
            <h4><u>Add a Review</u></h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>Rating (out of 5): </Form.Label>
                    &nbsp; &nbsp;
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        min={1}
                        max={5}
                        required
                    />
                    <br></br>
                    <FloatingLabel label="Leave a comment here">
                        <Form.Control
                            as="textarea"
                            id="comments"
                            name="comments"
                            placeholder="Leave a comment here"
                            style={{width: '50%', height: '100px'}}
                            required
                        />
                    </FloatingLabel>
                    <br></br>
                    <Button type="submit" variant='danger'>ADD REVIEW</Button>
                </Form>
            <br></br>
        </div>
    )
}
