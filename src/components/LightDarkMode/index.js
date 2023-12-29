// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightmode: true}
  onChangemode = () => {
    this.setState(prevState => ({isLightmode: !prevState.isLightmode}))
  }

  render() {
    const {isLightmode} = this.state
    const mode = isLightmode ? 'lightmode' : 'darkmode'
    const buttontext = isLightmode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="maincontainer">
        <div className={` subcontainer ${mode}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" onClick="onChangemode">
            {buttontext}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
