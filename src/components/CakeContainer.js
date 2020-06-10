import React from 'react'
import { connect } from 'react-redux'

import { buyCake } from '../redux'

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of Cakes: {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>
                Buy cakes
            </button>
        </div>
    )
}

//getting props in this component
//access the redux state to retrieve desired state property
const mapStateToProps = state => {
    return {
        //define a state-property prop
        numOfCakes: state.numOfCakes
    }
}

//dispatches actions
const mapDispatchToProps = dispatch => {
    return {
        //define an action-creator prop
        buyCake: () => dispatch(buyCake())
    }
}

//'connect'-func from react-redux allows for mapping-to-prop
//connects this component to Redux-Store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
