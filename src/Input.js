import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      lon: ''
    };
    this.onChangeLat = this.onChangeLat.bind(this);
    this.onChangeLon = this.onChangeLon.bind(this);
  }

  onChangeLat(e) {
    this.setState({
      lat: +e.target.value
    });
  }
  onChangeLon(e) {
    this.setState({
      lon: +e.target.value
    });
  }

  render() {
    return (
      <div>
        <input min = {-90} max = {90} onChange = {(e) => this.onChangeLat(e) } value={this.state.lat} type="number" placeholder = "lat" />

        <input min = {-180} max = {180} onChange = {(e) => this.onChangeLon(e)} value={this.state.lon} val type="number" placeholder = "lon"/>
      </div>
    );
  }
}
export default Input;
