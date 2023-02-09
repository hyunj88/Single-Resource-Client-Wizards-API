import { useState, useEffect } from 'react'

// useParams from react-router-dom allows us to see our route parameters
import { useParams } from 'react-router-dom'

import { Container, Card, Button } from 'react-bootstrap'

import { getOneWizard } from '../../api/wizards'

import messages from '../shared/AutoDismissAlert/messages'

import LoadingScreen from '../shared/LoadingScreen'

// we need to get the wizard's id from the route parameters
// then we need to make a request to the api
// when we retrieve a wizard from the api, we'll render the data on the screen

const ShowWizard = (props) => {
    const [wizard, setWizard] = useState(null)

    const { id } = useParams()

    const { user, msgAlert } = props
    console.log('user in ShowWizard props', user)
    console.log('msgAlert in ShowWizard props', msgAlert)

    useEffect(() => {
        getOneWizard(id)
            .then(res => setWizard(res.data.wizard))
            .catch(err => {
                msgAlert({
                    heading: 'Error getting wizards',
                    message: messages.getWizardsFailure,
                    variant: 'danger'
                })
            })
    }, [])

    if(!wizard) {
        return <LoadingScreen />
    }

    return (
        <>
            <Container>
                <Card>
                    <Card.Header>{ wizard.fullTitle }</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <div><small>House: { wizard.house }</small></div>
                            <div><small>Age: { wizard.age }</small></div>
                            <div>
                                <small>Alive: { wizard.alive ? 'yes' : 'no' }</small>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default ShowWizard