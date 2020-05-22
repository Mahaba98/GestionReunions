

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Reuniondetail extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text>Détail de la Reunion {this.props.navigation.state.params.idreunion}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})

export default Reuniondetail