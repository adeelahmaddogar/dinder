import React, {Component } from 'react'
import { View } from 'native-base'
import Drawer from 'react-native-drawer'

import SideMenu from './components/sideMenu'

import SettingsStore from './stores/settingsStore'

import theme from './theme/base-theme'

const settings = new SettingsStore()

export default class AppContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      store: {
        settings: settings
      },
      theme: theme
    }
  }

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  render () {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="displace"
        content={<SideMenu navigator={this._navigator} theme={this.state.theme}/>}
      >
      </Drawer>
    );
  }
}
