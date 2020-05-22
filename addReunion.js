import React from 'react';
import DatePicker from 'react-native-datepicker';
import { 
  StyleSheet, Text, 
  View,TextInput, 
  Dimensions, TouchableOpacity } from 'react-native';
  

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class addReunion extends React.Component {

  constructor(props) {
    super(props);
    this.state = { placeholder:"Selectionner une date"}
  }

  render() {
    return (
      <View style={styles.container}>
        
        
        <TextInput
          placeholder='Nom_de_la_Reunion'
          value={this.name}
          style={styles.simpleInput}
          />
          <DatePicker
        style={{width: width - 20,marginTop: 30,
          height: 40,     
          paddingHorizontal: 10,
          }}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="2010-01-01"
        maxDate="2029-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            right:20,
            top: 4,
            marginLeft: 0
          },
         
          
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    
        <TextInput
          placeholder='sujet'
          style={styles.simpleInput}
          />

        <TextInput
          placeholder='nombre'
          multiline = {true}
          numberOfLines = {4}
          style={styles.textAreaInput}
          />

        <TouchableOpacity
          style={styles.buttonSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
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

  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50
  },

  simpleInput: {
    width: width - 40,
    marginTop: 30,
    height: 40, 
    borderColor: 'grey', 
    paddingHorizontal: 10,
    borderWidth: 1
  },

  textAreaInput: {
    width: width - 40,
    marginTop: 30,
    height: 40, 
    borderColor: 'grey', 
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 30
  },

  buttonSave: {
    backgroundColor: '#048b99',
    borderRadius: 7,
    width: 200,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: 'white'
  }
});
