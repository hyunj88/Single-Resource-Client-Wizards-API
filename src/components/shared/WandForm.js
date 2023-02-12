
import { Form, Button, Container } from 'react-bootstrap'

const WandForm = (props) => {
    const { toy, handleChange, handleSubmit, heading } = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="m-2">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control 
                        placeholder="What is the name of the Wand?"
                        name="name"
                        id="name"
                        value={ wand.name }
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Label>Wood:</Form.Label>
                    <Form.Control 
                        placeholder="What kind of wood is the wand?"
                        name="wood"
                        id="wood"
                        value={ wand.wood }
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Label>Manufacturer:</Form.Label>
                    <Form.Control 
                        placeholder="Who made the wand?"
                        name="manufacturer"
                        id="manufacturer"
                        value={ wand.manufacturer }
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Select
                        aria-label="wand condition"
                        name="condition"
                        defaultValue={wand.condition}
                        onChange={handleChange}
                    >
                        <option>Open this select menu</option>
                        <option value="new">new</option>
                        <option value="used">used</option>
                        <option value="broken">broken</option>
                    </Form.Select>
                </Form.Group>
                <Button className="m-2" type="submit">Submit</Button>
            </Form>

        </Container>
    )
}

export default WandForm