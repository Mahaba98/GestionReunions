import React from 'react'
import{StyleSheet, View, TextInput, Button, FlatList } from 'react-native'
import reunion from '../Helpers/ReunionData'
import Item from './Item'


import { FloatingAction } from 'react-native-floating-action';


const actions = [
    {
      text: "Add",
      icon: require("../logo/images.png"),
      name: "bt_add",
      position: 1
    }
  ];

class listReunion extends React.Component{
  _displayDetailForreunion = (idreunion) => {
    console.log("Display reunion with id " + idreunion)
    this.props.navigation.navigate("Reuniondetail", {idreunion: idreunion})
    
  }

 
  constructor(props){
    super(props);
    this.navigation = props.navigation;
    this.state = {
      data: []
    }
  }

    render() {
     
        return(
          < View style={styles.main_contain} 
          >
              <TextInput style={styles.textinput} placeholder='Nom de la Réunion'/>
              <Button style={{height:58}} title='Rechercher' onPress={() => {}}/>
              <FlatList
                data={reunion}
                keyExtractor={(item) =>
                  item.id.toString()}
                renderItem={({item}) => <Item reunion={item} displayDetailForreunion={this._displayDetailForreunion}/>
                }
              />    
              <FloatingAction
                  actions={actions}
                  onPressItem={name => {
                    if(name === 'bt_add') {
                      this.navigation.navigate('addReunion');
                    }
                  }}
              />                
                
          </View>
        )
    }
} 
const styles = StyleSheet.create({
    textinput:{
        marginLeft: 5,
        marginRight: 5,
        height:50,
        borderColor:'#000000',
        borderWidth:1,         
        paddingLeft:5,
    },
    main_contain:{
        flex:1,
       marginTop:30,
        
        
    },
})

export default listReunion