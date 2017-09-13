import React, { Component } from 'react'
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  View,
  Button
} from 'native-base'

import {
  FlatList
} from 'react-native'


export default class SideMenu extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let list = [{
      key: '1',
      title: "Match",
      onPress: () => {
        this.props.navigator.replace("Match")
      }
    }, {
        key: '2',
        title: "History",
        onPress: () => {
          this.props.navigator.replace("History")
        }
    }]
    return (
      <Container theme={this.props.theme}>
        <Header/>
        <View>
          <List>
            <FlatList data={list} renderItem={(item) =>
              <ListItem button onPress={() => item.onPress.bind(this)}>
                <Text> {item.title} </Text>
              </ListItem>
            }/>
          </List>
        </View>
      </Container>
    )
  }
}
