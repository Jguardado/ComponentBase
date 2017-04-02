import React, {Component, Proptypes} from "react";
import { Link } from 'react-router';

//TODO:  fix this, remove use of setState
class Header extends Component {
    constructor(props) {
      super(props);

      this.state = {
        option: '',
      };

      this.setSelected = this.setSelected.bind(this);
      this.addActive = this.addActive.bind(this);
    }

    addActive(option) {
      if (option === this.state.option) {
        return 'nav-item active';
      } else {
        return 'nav-item';
      }
    }

    setSelected(value) {
      this.setState({ option: value });
    }

    render() {
      return (
        <div className='navbar navbar-default navbar-fixed-top head'>
            <ui className="nav navbar-nav">
              <li>
                <Link to='/' className='nav-link'>Home</Link>
              </li>
              <li>
              <a className='nav-link' href='https://github.com/Jguardado'>GitHub</a>
              </li>
              <li>
              <a className='nav-link' href='https://medium.com/@juanguardado'>Blog</a>
              </li>
              <li>
                <Link to='/components' className='nav-link'>Components</Link>
              </li>
            </ui>
            <h4 className='navbar-brand jumobotext headerlogo'>ComponentBase</h4>
          </div>
      );
    };
};

export default Header;
