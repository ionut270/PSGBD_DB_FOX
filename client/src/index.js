import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import 'semantic-ui-css/semantic.min.css'
import './styles/css/index.css'

import Header from './Components/Headers/index';
import HOMEWORK_2 from './Components/Homework_2/index'

class App extends React.Component {

  state = {
    activeItem : "2"
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		return <div className="page">
      <Header className="page__header" activeItem={this.state.activeItem} handleItemClick={this.handleItemClick}  />
      {this.state.activeItem === "2" ? <HOMEWORK_2 /> : null}
    </div>;
	}
}

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById("root"));
serviceWorker.unregister();
