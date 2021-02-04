import React from 'react'
import {connect} from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
    return(
        <div>
            <h2>item -{props.item} </h2>
            <button onClick = { props.buyButton } > Buy Items </button>
        </div>
    )
}


const mapStateToProps = (state,ownProps) => {
 const itemSelected = ownProps.cake ? state.cake.numOfCakes  : state.iceCream.numOfIceCream
 return {
     item : itemSelected
 }
}

const mapDispatchToProps = (dispatch , ownProps ) => {
    const buyItem = ownProps.cake ? () => {dispatch(buyCake())} :() => {dispatch(buyIceCream())}

    return {
        buyButton : buyItem
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)