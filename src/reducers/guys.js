const initState = {
    guys: [
        { number: 1, name: 'QUALY', position: 'G' },
        { number: 2, name: 'VIC', position: 'M' },
        { number: 3, name: 'SPI', position: 'D' }
    ]
}

export const updateCurrentGuy = (val) => ({type: 'NEW_GUY', payload: val})

export default (state = initState, action) => {
    switch(action.type) {
        case 'NEW_GUY':
            return {...state, guys: state.guys.concat(action.payload)}
        case 'LIST_ALL':
            return {...state, guys: state.guys}
        default:
            return state;
    }
}