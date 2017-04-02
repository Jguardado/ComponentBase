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
        <div className='head'>
          <div className='jumobotext headerlogo'>ComponentBase</div>
          <div className="nav-links">
            <div className="nav-bar">
              <div className="nav-button">
                <Link to='/' className='nav-link'>Home</Link>
              </div>
              <div className="nav-button">
                <a className='nav-link' href='https://github.com/Jguardado'>GitHub</a>
              </div>
              <div className="nav-button">
                <a className='nav-link' href='https://medium.com/@juanguardado'>Blog</a>
              </div>
              <div className="nav-button">
                <Link to='/components' className='nav-link'>Components</Link>
              </div>
            </div>
          </div>
        </div>
      );
    };
};

export default Header;
