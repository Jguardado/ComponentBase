import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import createHistory from 'history/createBrowserHistory'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import ComponentPage from './components/appStructure/componentPage';
import Home from './components/appStructure/layout';
import Footer from './components/appStructure/footer';
import "./styles/appStructure.css"

//Nested routes
// import HideShow from './components/examples/exampleHideShow';
// import Contructor from './components/examples/constructorFunc';
// import Buttons from './components/examples/exampleButton';
// import InputForm from './components/examples/exampleInputForm';
// import InputOnClick from './components/examples/exampleInputOnClick';
// import Textbox from './components/examples/exampleTextbox';
// import SliderBar from './components/examples/exampleSliderbar';
// import NavBar from './components/examples/exampleNavBar';
// import Picture from './components/examples/exampleImg';
// import Dropdown from './components/examples/exampleDropdown';
// import ProgressBar from './components/examples/exampleProgressBar';
// import Routes from './routes';
import { Container } from './components/appStructure/container';
import store from "./store";

console.log(" this is store: ", store.getState());

const NotFound = () => (
  <h1>404.. This page is not found!</h1>);

//TODO: This needs to be abstacted and moved into a routes folder/page
 const App = () => {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Container}>
            <IndexRoute component={Home} />
              <Route path="components" component={ComponentPage} />
            <Route path="*" component={NotFound} />
          </Route>
        </Router>
      </Provider>
    );
};

export default App;

// <Provider store={store}>
//   <Router history={history}>
//     <Route pattern="/" component={Home}/>
//   </Router>
// </Provider>

//TODO: current implementation is only taking advantage of the Link component
// for navigation purposes. I need to determine why nested routes are not being
// represented as this.props.children in the parent component.


// <Route path="hide_show" component={HideShow}/>
// <Route path="constructor" component={Contructor}/>
// <Route path="buttons" component={Buttons}/>
// <Route path="input_form" component={InputForm}/>
// <Route path="input_on_click" component={InputOnClick}/>
// <Route path="textbox" component={Textbox}/>
// <Route path="slider_bar" component={SliderBar}/>
// <Route path="nav_bar" component={NavBar}/>
// <Route path="picture" component={Picture}/>
// <Route path="drop_down" component={Dropdown}/>
