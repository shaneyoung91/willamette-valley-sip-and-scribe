import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

export default function UpdateReviewForm({ review, handleUpdate }) {
    const [updateRating, setUpdateRating] = useState(review.rating);
    const [updateComments, setUpdateComments] = useState(review.comments);
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        const updatedReview = {
            ...review,
            rating: updateRating,
            comments: updateComments
        };

        handleUpdate(updatedReview);
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                    <Form.Label>Rating (out of 5)</Form.Label>
                    <Form.Control
                        type="number"
                        value={updateRating}
                        onChange={(evt) => setUpdateRating(evt.target.value)}
                        min={1}
                        max={5}
                        required
                    />
                    <br />
                    <Form.Label>Comments</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={updateComments}
                        onChange={(evt) => setUpdateComments(evt.target.value)}
                        required
                    />
                    <br />
                    <Button type="submit">UPDATE</Button>
            </Form>
                </Card.Body>
            </Card>
        </>
    );
}
