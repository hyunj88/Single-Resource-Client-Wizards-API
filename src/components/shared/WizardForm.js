import { Form, Button, Container } from 'react-bootstrap'

const WizardForm = (props) => {
    const { wizard, handleChange, handleSubmit, heading } = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="m-2">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control 
                        placeholder="What is the name of your Wizard"
                        name="name"
                        id="name"
                        value={ wizard.name }
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Label>House:</Form.Label>
                    <Form.Control 
                        placeholder="What house does your wizard belong to?"
                        name="house"
                        id="house"
                        value={ wizard.house }
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Label>Age:</Form.Label>
                    <Form.Control 
                        type="number"
                        placeholder="How old is your wizard?"
                        name="age"
                        id="age"
                        value={ wizard.age }
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Check 
                        label="Is your wizard alive?"
                        name="alive"
                        defaultChecked={ wizard.alive }
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Button className="m-2" type="submit">Submit</Button>
            </Form>

        </Container>
    )
}

export default WizardForm