import { authSlice } from "./slice"
const { actions: slice } = authSlice;

//Log in Action
export const loginAction = (phone) => (dispatch) => {
    dispatch(slice.setLogin(phone))
}

//Logout Action

export const logoutAction = () => dispatch => {
    dispatch(slice.setLogout())
}

//Get Data
export const getDataAction = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if(response.ok){
                return response.json()
            }
            else{
                console.log('Something Went Wrong')
            }
        })
        .then(json => dispatch(slice.setData(json)))
        // .catch(error => {
        //     console.log(error)
        //     console.log(error.message)
        // })
}