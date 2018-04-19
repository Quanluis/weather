import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lon: 0
    };
  }

  render() {
    return (
      <div>
        <input value={this.state.lat} type="number" />

        <input value={this.state.lon} val type="number" />
      </div>
    );
  }
}
export default Input;
