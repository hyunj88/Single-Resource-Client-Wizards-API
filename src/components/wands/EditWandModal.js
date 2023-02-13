import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import WandForm from '../shared/WandForm'
import { updateWand } from '../../api/wands'
// import messages from '../shared/AutoDismissAlert/messages'

const EditWandModal = (props) => {
    const { user, wizard, show, handleClose, msgAlert, triggerRefresh } = props

    const [wand, setWand] = useState(props.wand)

    const onChange = (e) => {
        e.persist()
        
        setWand(prevWand => {
            const updatedName = e.target.name
            let updatedValue = e.target.value
            
            const updatedWand = {
                [updatedName] : updatedValue
            }
            
            console.log('the wand', updatedWand)
            console.log('the wand (state)', wand)

            return {
                ...prevWand, ...updatedWand
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        updateWand(user, wizard.id, wand)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: 'Wand updated!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            // if there is an error, tell the user about it
            .catch(() => {
                msgAlert({
                    heading: 'Oh No!',
                    message: 'Something went wrong, please try again',
                    variant: 'danger'
                })
            })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <WandForm 
                    wand={wand}
                    handleChange={onChange}
                    handleSubmit={onSubmit}
                    heading="Update Wand"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditWandModal