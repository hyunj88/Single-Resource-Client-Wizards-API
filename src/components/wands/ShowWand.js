import { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { deleteWand } from '../../api/wands'
import EditWandModal from './EditWandModal'

const ShowWand = (props) => {
    const { wand, user, wizard, msgAlert, triggerRefresh } = props

    const [editModalShow, setEditModalShow] = useState(false)
    
    const setBgCondition = (cond) => {
        if (cond === 'new') {
            return({width: '18rem', backgroundColor: '#b5ead7'})
        } else if (cond === 'used') {
            return({width: '18rem', backgroundColor: '#ffdac1'})
        } else {
            return({width: '18rem', backgroundColor: '#ff9aa2'})
        }
    }

    const destroyWand = () => {
       
        deleteWand(user, wizard.id, wand._id)
            .then(() => {
                msgAlert({
                    heading: 'Wand Broken',
                    message: 'Wand is no more!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'Oh No!',
                    message: 'Something went wrong!',
                    variant: 'danger'
                })
            })
    }

    return (
        <>
            <Card className="m-2" style={setBgCondition(wand.condition)}>
                <Card.Header>{wand.name}</Card.Header>
                <Card.Body>
                    <small>{wand.wood}</small>
                    <small>{wand.manufacturer}</small>
                </Card.Body>
                <Card.Footer>
                    <small>Condition: {wand.condition}</small><br/>
                    {
                        user && wizard.owner && user._id === wizard.owner._id
                        ?
                        <>
                            <Button
                                onClick={() => setEditModalShow(true)}
                                variant="warning"
                                className="m-2"
                            >
                                Edit Wand
                            </Button>
                            <Button 
                                onClick={() => destroyWand()} 
                                variant="danger"
                                className="m-2"
                            >
                                Delete Wand
                            </Button>
                        </>
                        :
                        null
                    }
                </Card.Footer>
            </Card>
            <EditWandModal
                user={user}
                wizard={wizard}
                wand={wand}
                show={editModalShow}
                handleClose={() => setEditModalShow(false)}
                msgAlert={msgAlert}
                triggerRefresh={triggerRefresh}
            />
        </>
    )
}

export default ShowWand