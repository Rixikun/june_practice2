import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

const HooksCakeContainer = () => {
    //access redux store's state
    //takes in function & returns value
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    //returns a reference to the dispatch fn from the redux store
    //use to dispatch actions
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;
