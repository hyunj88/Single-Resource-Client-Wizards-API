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