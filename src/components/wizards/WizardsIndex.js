import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'

// api function from our api file
import { getAllWizards } from '../../api/wizards'

// need our messages from our autodismissalert directory
import messages from '../shared/AutoDismissAlert/messages'

// this is a styling object. they're a quick easy way add focused css properties to our react components
const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

// PetsIndex will make a request to the API for all wizards
// once it receives a response, display a card for each wizard
const WizardsIndex = (props) => {
    const [wizards, setWizards] = useState(null)
    const [error, setError] = useState(false)

    // pull the message alert (msgAlert) from props
    const { msgAlert } = props

    // get our wizards from the api when the component mounts
    useEffect(() => {
        getAllWizards()
            .then(res => setWizards(res.data.wizards))
            .catch(err => {
                msgAlert({
                    heading: 'Error getting wizards',
                    message: messages.getWizardsFailure,
                    variant: 'danger'
                })
                setError(true)
            })
    }, [])

    // if error, display an error
    if (error) {
        return <p>Error!</p>
    }

    if (!wizards) {
        // if no wizards loaded yet, display 'loading'
        return <LoadingScreen />
    } else if (wizards.length === 0) {
        // otherwise if there ARE no wizards, display that message
        return <p>No wizards yet, go add some!</p>
    }

    // once we have an array of wizards, loop over them
    // produce one card for every wizard
    const wizardCards = wizards.map(wizard => (
        <Card key={ wizard.id } style={{ width: '30%', margin: 5 }}>
            <Card.Header>{ wizard.fullTitle }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={`/wizards/${wizard.id}`} className="btn btn-info">View { wizard.name }</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    // return some jsx, a container with all the wizardcards
    return (
        <div className="container-md" style={ cardContainerStyle }>
            { wizardCards }
        </div>
    )
}

// export our component
export default WizardsIndex