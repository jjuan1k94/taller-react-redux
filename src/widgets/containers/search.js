import React, { Component } from "react";
import Search from "../components/search";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/index";
class SearchContainer extends Component {
  state = {
    value: "Luis Fonsi",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.input.value, "submit");
    this.props.actions.searchAsyncEntities(this.input.value);
  };
  setInputRef = (element) => {
    this.input = element;
  };
  handleInputChange = (event) => {
    this.setState({
      value: event.target.value.replace(" ", "-"),
    });
  };
  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    );
  }
}

function mapDispatch2Props(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}
export default connect(null, mapDispatch2Props)(SearchContainer);
