import { Button, Form } from "react-bootstrap";

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
            <br></br>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>Rating: </Form.Label>
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
                    <Form.Label>Comments: </Form.Label>
                    <Form.Control
                        as="textarea"
                        id="comments"
                        name="comments"
                        required
                    />
                    <br></br>
                    <Button type="submit">ADD REVIEW</Button>
                </Form>
            <br></br>
        </div>
    )
}
