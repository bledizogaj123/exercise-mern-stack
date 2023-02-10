import { useState } from "react";
import Form from 'react-bootstrap/Form';

const WorkoutForm = () => {

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = { title, load, reps }

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            console.log('New workout added ', json)
        }
    }
    return (
        <Form>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title: </Form.Label>
                <Form.Control type="text" />
                <Form.Text className="text-muted"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}>
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Reps: </Form.Label>
                <Form.Control type="number" />
                <Form.Text className="text-muted"
                    onChange={(e) => setReps(e.target.value)}
                    value={reps}>
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Load: </Form.Label>
                <Form.Control type="text" />
                <Form.Text className="text-muted"
                    onChange={(e) => setLoad(e.target.value)}
                    value={load}>
                </Form.Text>
            </Form.Group>
        </Form>

    )
}
export default WorkoutForm;