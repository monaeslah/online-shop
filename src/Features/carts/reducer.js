
const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload]
        case 'REMOVE':
            const firstMachIndex = state.indexOf(action.payload)
            return state.filter((item, index) => index !== firstMachIndex)

        default:
            return state;
    }
}
export default cartReducer
