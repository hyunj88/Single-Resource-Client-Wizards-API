import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE
// /wands/:wizardId
export const createWand = (wizardId, newWand) => {
    return axios({
        url: `${apiUrl}/wands/${wizardId}`,
        method: 'POST',
        data: { wand: newWand }
    })
}

// UPDATE
// /wands/:wizardId/:wandId
export const updateWand = (user, wizardId, updatedWand ) => {
    return axios({
        url: `${apiUrl}/wands/${wizardId}/${updatedWand._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { wand: updatedWand }
    })
}

// DELETE
// /wands/:wizardId/:wandId
export const deleteWand = (user, wizardId, wandId ) => {
    return axios({
        url: `${apiUrl}/wands/${wizardId}/${wandId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}