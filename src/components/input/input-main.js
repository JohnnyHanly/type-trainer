import React from "react";
import ComponentView from "./input-view";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

    this.setState({
    })
  }

  render() {
    return ComponentView.bind(this)();
  }
}
export default Main;
