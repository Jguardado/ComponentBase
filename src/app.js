import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ComponentPage from './components/appStructure/componentPage';
import Layout from './components/appStructure/layout';
import rootreducer from './reducers';

//Nested routes
import HideShow from './components/examples/exampleHideShow';
import Contructor from './components/examples/constructorFunc';
import Buttons from './components/examples/exampleButton';
import InputForm from './components/examples/exampleInputForm';
import InputOnClick from './components/examples/exampleInputOnClick';
import Textbox from './components/examples/exampleTextbox';
import SliderBar from './components/examples/exampleSliderbar';
import NavBar from './components/examples/exampleNavBar';
import Picture from './components/examples/exampleImg';
import Dropdown from './components/examples/exampleDropdown';
import ProgressBar from './components/examples/exampleProgressBar';

let store = createStore(rootreducer, {},
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

//TODO: This needs to be abstacted and moved into a routes folder/page
export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Layout}/>
          <Route path="/component" component={ComponentPage}>
            <Route path="/progress_bar" component={ProgressBar}/>
            <Route path="/hide_show" component={HideShow}/>
            <Route path="/constructor" component={Contructor}/>
            <Route path="/buttons" component={Buttons}/>
            <Route path="/input_form" component={InputForm}/>
            <Route path="/input_on_click" component={InputOnClick}/>
            <Route path="/textbox" component={Textbox}/>
            <Route path="/slider_bar" component={SliderBar}/>
            <Route path="/nav_bar" component={NavBar}/>
            <Route path="/picture" component={Picture}/>
            <Route path="/drop_down" component={Dropdown}/>
          </Route>
        </Router>
      </Provider>
    );
  }

};
