import React from 'react'
import { useSelector } from 'react-redux'

const HooksCakeContainer = () => {
    //access redux store's state
    //takes in function & returns value
    const numOfCakes = useSelector(state => state.numOfCakes)

    return (
        <div>
            <h2>Num of Cakes - {numOfCakes}</h2>
            <button>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;
