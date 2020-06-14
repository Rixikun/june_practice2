import React, { useState } from 'react'
import { connect } from 'react-redux'

import { buyCake } from '../redux'

const NewCakeContainer = (props) => {
    const [num, setNum] = useState(1)
    return (
        <div>
            <h2>Number of Cakes: {props.numOfCakes}</h2>
            <input type="text" value={num} onChange={e => setNum(e.target.value)}></input>
            <button onClick={() => props.buyCake(num)}>
                Buy {num} cakes
            </button>
        </div >
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (num) => dispatch(buyCake(num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
