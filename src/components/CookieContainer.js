import React from 'react'
import { connect } from 'react-redux'
import { buyCookie } from '../redux'

const CookieContainer = (props) => {
    return (
        <div>
            <h2>Num of Cookies - {props.numOfCookies}</h2>
            <button onClick={() => props.buyCookie()}>Buy Cookie</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCookies: state.cookie.numOfCookies
    }
}

const mapDipsatchToProps = (dispatch) => {
    return {
        buyCookie: () => dispatch(buyCookie())
    }
}

export default connect(mapStateToProps, mapDipsatchToProps)(CookieContainer)
