// setup where api calls for the wizards resources will live
import apiUrl from '../apiConfig'
import axios from 'axios'

// READ -> Index
export const getAllWizards = () => {
    return axios(`${apiUrl}/wizards`)
}

// READ -> Show
export const getOneWizard = (id) => {
    return axios(`${apiUrl}/wizards/${id}`)
}

// Create (create a wizard)
export const createWizard = (user, newWizard) => {
    return axios({
        url: `${apiUrl}/wizards`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { wizard: newWizard }
    })
}

// Update (update a wizard)
export const updateWizard = (user, updatedWizard) => {
    return axios({
        url: `${apiUrl}/wizards/${updatedWizard.id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { pet: updatedWizard }
    })
}

// Delete (delete a wizard)
export const removeWizard = (user, wizardId) => {
    return axios({
        url: `${apiUrl}/wizards/${wizardId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}