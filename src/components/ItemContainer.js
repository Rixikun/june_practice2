import React from "react";
import { connect } from "react-redux";

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item - {props.item}</h2>
    </div>
  );
};

//pass in TWO params, ownProps = component's own props
//is this comp being called with a prop passed in?
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;
  return {
    item: itemState,
  };
};

export default connect(mapStateToProps)(ItemContainer);
