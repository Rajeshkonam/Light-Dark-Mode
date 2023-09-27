import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: false}

  ClickBtn = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const text = isDarkMode ? 'Dark Mode' : 'Light Mode'
    const bgColor = isDarkMode ? 'b1' : 'b2'
    return (
      <div className="c1">
        <div className={`${bgColor} c2`}>
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.ClickBtn} className="btn">
            {text}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
