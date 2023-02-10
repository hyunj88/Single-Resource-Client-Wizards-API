import { useState } from 'react'
import { createWizard } from '../../api/wizards'
import { createWizardSuccess, createWizardFailure } from '../shared/AutoDismissAlert/messages'
import WizardForm from '../shared/WizardForm'

// bring in the useNavigate hook from react-router-dom
import { useNavigate } from 'react-router-dom'

const CreateWizard = (props) => {
    // pull out props
    const { user, msgAlert } = props

    const navigate = useNavigate()
    const [wizard, setWizard] = useState({
        name: '',
        house: '',
        age: '',
        alive: false
    })

    const onChange = (e) => {
        e.persist()

        setWizard(prevWizard => {
            const updatedName = e.target.name
            let updatedValue = e.target.value

            // to handle a number, we look at the type, and parse a string to an integer
            if (e.target.type === 'number') {
                updatedValue = parseInt(e.target.value)
            }

            // to handle a checkbox, we can check the name, and change the value that is output. Checkboxes only know if they are checked or not
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

        createWizard(user, wizard)
            .then(res => { navigate(`/wizard/${res.data.wizard.id}`)})
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: createWizardSuccess,
                    variant: 'success'
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'Oh No!',
                    message: createWizardFailure,
                    variant: 'danger'
                })
            })

    }

    return (
        <WizardForm 
            wizard={wizard}
            handleChange={onChange}
            handleSubmit={onSubmit}
            heading="Add a new Wizard!"
        />
    )
}

export default CreateWizard