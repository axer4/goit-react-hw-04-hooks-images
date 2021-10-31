import { Component } from "react";
import Loader from "react-loader-spinner";
export default class Loaders extends Component{
  render() {
    return (
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={1000} 
      />
    );
  }
}