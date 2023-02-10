import { useState, useEffect } from 'react'

// useParams from react-router-dom allows us to see our route parameters
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import { getOneWizard, removeWizard, updateWizard } from '../../api/wizards'
import messages from '../shared/AutoDismissAlert/messages'
import LoadingScreen from '../shared/LoadingScreen'
import EditWizardModal from './EditWizardModal'

// we need to get the wizard's id from the route parameters
// then we need to make a request to the api
// when we retrieve a wizard from the api, we'll render the data on the screen

const ShowWizard = (props) => {
    const [wizard, setWizard] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    const { user, msgAlert } = props

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
    }, [updated])

    const deleteWizard = () => {
        removeWizard(user, wizard.id)
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.removeWizardSuccess,
                    variant: 'success'
                })
            })
            .then(() => {navigate('/')})
            .catch(err => {
                msgAlert({
                    heading: 'Error',
                    message: messages.removeWizardFailure,
                    variant: 'danger'
                })
            })
    }

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
                    <Card.Footer>
                        {
                           wizard.owner && user && wizard.owner._id === user._id
                           ?
                            <>
                                <Button 
                                    className="m-2" variant="warning"
                                    onClick={() => setEditModalShow(true)}
                                >
                                    Edit {wizard.name}
                                </Button>
                                <Button 
                                    className="m-2" variant="danger"
                                    onClick={() => deleteWizard()}
                                >
                                    Delete {wizard.name}
                                </Button> 
                            </>
                            :
                            null
                        }
                    </Card.Footer>
                </Card>
            </Container>
            <EditWizardModal 
                user={user}
                show={editModalShow}
                handleClose={() => setEditModalShow(false)}
                updateWizard={updateWizard}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                wizard={wizard}
            />
        </>
    )
}

export default ShowWizard