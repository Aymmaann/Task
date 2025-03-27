import { createContext, useContext, useReducer, useEffect } from "react";

const ACTIONS = {
    SET_USERS: "SET_USERS",
    SEARCH: "SEARCH",
    SORT: "SORT",
    SET_PAGE: "SET_PAGE"
}

const userReducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.SET_USERS:
            return {...state, allUsers: action.payload, users: action.payload}
        case ACTIONS.SEARCH:
            return {...state, 
                users: state.allUsers.filter((user) => 
                    user.firstName.toLowerCase().includes(action.payload.toLowerCase()) || 
                    user.lastName.toLowerCase().includes(action.payload.toLowerCase()) || 
                    user.age.toString().includes(action.payload)
                )
            }
        case ACTIONS.SORT:
            let sortedUsers = [...state.allUsers]
            if(action.payload === 'ageAsc') {
                sortedUsers.sort((a,b) => a.age - b.age)
            }
            else if(action.payload === 'ageDesc') {
                sortedUsers.sort((a,b) => b.age - a.age)
            }
            else if(action.payload === 'name') {
                sortedUsers.sort((a,b) => a.firstName.localeCompare(b.firstName))
            } 
            else {
                sortedUsers = state.allUsers
            }
            return {...state, users: sortedUsers}
        case ACTIONS.SET_PAGE:
            return {...state, currentPage: action.payload}
        default: 
            return state
    }
}

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(userReducer, {
        allUsers: [],
        users: [],
        currentPage: 1
    })

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch('https://dummyjson.com/users')
                const data = await response.json()
                dispatch({type: ACTIONS.SET_USERS, payload: data.users})
            } catch(error) {
                console.error("Error fetching users: ", error)
            }
        }
        fetchData()
    }, [])

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);