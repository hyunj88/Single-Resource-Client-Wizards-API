import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import WandForm  from '../shared/WandForm'
import { createToy } from '../../api/toys'
import messages from '../shared/AutoDismissAlert/messages'

const NewWandModal = (props) => {
    const { wizard, show, handleClose, msgAlert, triggerRefresh } = props

    const [wand, setWand ] = useState({})

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
        createToy(wizard.id, wand)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: messages.createWandSuccess,
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'Oh No!',
                    message: messages.createWandFailure,
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
                    heading={`Give ${wizard.name} a wand!`}
                />
            </Modal.Body>
        </Modal>
    )
}

export default NewWandModal