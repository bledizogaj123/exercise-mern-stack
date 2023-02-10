import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

const WorkoutDetails = ({ workout }) => {
    return (
        <>
                {[
                    'Success',
                ].map((variant) => (
                    <Card
                        bg={variant.toLowerCase()}
                        key={variant}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="m-2"
                    >
                        <Card.Body>
                            <Card.Title>{workout.title}</Card.Title>
                            <Card.Text>
                                Reps: {workout.reps}<br />
                                Load: {workout.load}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="">{workout.createdAt}</small>
                        </Card.Footer>
                    </Card>
                ))}
        </>
    )
}

export default WorkoutDetails;