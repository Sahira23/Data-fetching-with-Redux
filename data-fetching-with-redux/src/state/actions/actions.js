import { FETCH_PHOTO_LOADING, FETCH_PHOTO_ERROR, FETCH_PHOTO_SUCCESS, ADD_VALUE ,DECREASE_VALUE} from "../action-types/action-types";
import axios from "axios"
// ACTION-CREATORS
export const fetch_photo_loading = () => {
    return {
        type: FETCH_PHOTO_LOADING
    }
}
export const fetch_photo_success = (photos_list) => {
    return {
        type: FETCH_PHOTO_SUCCESS,
        payload: photos_list
    }
}
export const fetch_photo_error = (error) => {
    return {
        type: FETCH_PHOTO_ERROR,
        payload: error
    }
}

export const fetch_photos = (id,limit) => {
    return function async (dispatch) {
        dispatch(fetch_photo_loading());
        axios.get(`https://picsum.photos/v2/list?page=${id}&limit=${limit}`)
            .then(response => {
                const photo_list = response.data
                dispatch(fetch_photo_success(photo_list));
                console.log(`https://picsum.photos/v2/list?page=${id}&limit=${limit}`)
            })
            .catch((error) => {
                dispatch(fetch_photo_error(error.message))
            })
            console.log(id,limit)
    }
}

export const add_value = () => {
    return {
        type: ADD_VALUE
    }
}
export const decrease_value = () => {
    return {
        type: DECREASE_VALUE
    }
}
