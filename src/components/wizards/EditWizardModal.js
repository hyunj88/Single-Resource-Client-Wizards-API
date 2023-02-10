import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import WizardForm from '../shared/WizardForm'
import messages from '../shared/AutoDismissAlert/messages'

const EditWizardModal = (props) => {
    // destructure our props
    const { user, show, handleClose, updateWizard, msgAlert, triggerRefresh } = props

    const [wizard, setWizard] = useState(props.wizard)

    const onChange = (e) => {
        e.persist()

        setWizard(prevWizard => {
            const updatedName = e.target.name
            let updatedValue = e.target.value

            if (e.target.type === 'number') {
                updatedValue = parseInt(e.target.value)
            }

            if (updatedName === 'alive' && e.target.checked) {
                updatedValue = true
            } else if (updatedName === 'alive' && !e.target.checked) {
                updatedValue = false
            }

            const updatedWizard = {
                [updatedName] : updatedValue
            }

            return {
                ...prevWizard, ...updatedWizard
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        updateWizard(user, wizard)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: messages.updateWizardSuccess,
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'Oh No!',
                    message: messages.updateWizardFailure,
                    variant: 'danger'
                })
            })

    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <WizardForm 
                    wizard={wizard} 
                    handleChange={onChange} 
                    handleSubmit={onSubmit} 
                    heading="Update Wizard"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditWizardModal