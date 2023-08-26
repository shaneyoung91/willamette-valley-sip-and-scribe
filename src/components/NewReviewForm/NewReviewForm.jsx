import { Button, Form, Card } from "react-bootstrap";

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
        <Card>
            <Card.Header as="h5">ADD A REVIEW</Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>Rating (out of 5)</Form.Label>
                    <Form.Control
                        type="number"
                        id="rating"
                        name="rating"
                        min={1}
                        max={5}
                        style={{width: '25%'}}
                        required
                    />
                    <br></br>
                    <Form.Label>Comments</Form.Label>
                        <Form.Control
                            as="textarea"
                            id="comments"
                            name="comments"
                            placeholder="Leave a comment here"
                            style={{width: '65%'}}
                            required
                        />
                    <br></br>
                    <Button type="submit">ADD REVIEW</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}
