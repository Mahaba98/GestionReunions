import React from 'react';
import { 
  StyleSheet, Text, 
  View, Image, TextInput, 
  Dimensions, TouchableOpacity } from 'react-native';
  import { createStackNavigator, createAppContainer } from 'react-navigation';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class ListeA extends React.Component {

  constructor(props) {
    super(props);

    
  }

  render() {

    const nom = this.props.route.params.Name
    const photo = this.props.route.params.Image_url
    const prof = this.props.route.params.profession
  

   
      

    return (
      
     
    <View style={styles.container}>
      
 
     
        <FlatList
          style={styles.list}
          data={this.state.ListeA}
          renderItem={
            ({item}) => <ListeA
            nom={item.Name}
            photo={item.Image_url}
            prof={item.profession}

            navigation={this.navigation}
          />
          }
          >
        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

 
  
  
});
