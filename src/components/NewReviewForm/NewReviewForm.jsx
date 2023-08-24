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
            <h2><u>New Review Form</u></h2>
                <p><strong>This component will render on winery detail page</strong></p>
                <p><strong>And allow users to create reviews for this specific winery</strong></p>
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
