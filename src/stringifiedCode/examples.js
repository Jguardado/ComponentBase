export const comps = {
  javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};',
  Buttons: 'import React, { Component } from "react";\n\nexport default class Buttons extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<div className="center">\n\t\t\t\t<button\n\t\t\t\tclassName="btn btn-success"\n\t\t\t\tonClick={function () {\n\t\t\t\t\tconsole.log("Hey! who said press that button?"");\n\t\t\t\t}}>Name of button here</button>\n\t\t\t</div>\n\t\t);\n\t}\n}',
  Constructor: 'import React, { Component } from "react";\n\nexport default class Contructor extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\t\tthis.state = {\n\t\t\t\ttest: "Created on initializaton"\n\t\t\t};\n\t}\n\n\trender() {\n\t\treturn (\n\t\t<div>\n\t\t\t{this.state.test}\n\t\t</div>\n\t\t);\n\t}\n}',
  HideShow: 'import React, { Component } from "react";\nexport default class HideShow extends Component {\n  constructor(props) {\n    super(props);\n     this.state = {\n      visible: false,\n    };\n    this.show = this.show.bind(this);\n    this.hide = this.hide.bind(this);\n  }\n  show() {\n    this.setState({ visible: true });\n  }\n  hide() {\n    this.setState({ visible: false });\n  }\n  render() {\n    if (this.state.visible) {\n      return (\n        <div>\n          <div>',
  InputForm: '',
  InputOnClick: '',
  Textbox: '',
  SliderBar: '',
  NavBar: '',
  Picture: '',
  Dropdown: '',
  ProgressBar: '',
};





//             <button onClick={ this.hide.bind(this)}>Make things appear</button>
//           </div>
//         </div>
//       );
//     }
//
//     if (!this.state.visible) {
//       return (
//         <div>
//           <div>
//             <button onClick={ this.show.bind(this)}>Click Here</button>
//           </div>
//         </div>
//       );
//     }
//   }
// }
