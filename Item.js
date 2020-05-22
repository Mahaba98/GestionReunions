import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'

class Item extends React.Component{

    render(){
        const { reunion, displayDetailForreunion } = this.props
        
        
        return(
            <TouchableOpacity style={styles.main_contain} 
            onPress={() => displayDetailForreunion(reunion.id)}>
                <TouchableOpacity>
                <Image style={styles.images}
                source={require('../logo/contact.png')} />
                <View  style={styles.nombre_co}>
                    <Text style={styles.nombre}>{reunion.nombre} </Text>                
                </View>
                 
                </TouchableOpacity>
                
                <View style={styles.enveloppe}>
                    <View style={styles.title_contain}>
                         <Text style={styles.title_text}>{reunion.Nom_de_la_Reunion} </Text>                
                     </View>
                     <View style={styles.Description_contain}>
                         <Text style={styles.Description}  >{reunion.sujet} </Text>
                         </View>
                         <View>
                             <TouchableOpacity  style={styles.detail_contain} onPressItem={() => {
                              this.navigation.navigate('DetailA')} } > 
                                <Text style={styles.detail}>Detail</Text>                      
                             </TouchableOpacity>
                         </View>
                          <View>
                           <TouchableOpacity style={styles.detaile_containe}>
                             <Text style={styles.detaile}> {reunion.date} </Text>
                          </TouchableOpacity>
                             </View>
                </View>
               
                </TouchableOpacity>
               
    
                
               
          
        )
    }
}
const styles=
StyleSheet.create({
    main_contain:{
        height:140,
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'grey'
         },
    images:{
        
        width:30,
        height:28,
        margin:21,
        marginTop:40,
        borderRightWidth:20,
        borderColor:'green'
       
    },
    enveloppe:{
        flex:5,
        margin:5,       
        
    },
    title_contain:{
        flexDirection:'column',
        marginLeft:18
        
       
    },

   title_text: {
    marginRight:5,
    fontSize:18,
     color:'#007FFF',
    fontWeight:'bold'
    
   },
   Description_contain:{
       flex:1,
       borderLeftWidth:2,
        borderLeftColor:'#811453',
        marginLeft:4


   },
   Description:{
    fontStyle:'normal',
    color:'grey',
    marginBottom:1,
    marginLeft:10
   },

   nombre_co:{
        flex:7,
        marginTop:1
   },
   
   
   
   detail:{
       color:'grey',
       fontWeight:'bold',
       marginRight:2,
       textAlign:'center',
       borderRadius: 2,
       marginTop:0,    
        width: 50,
        height: 20,
        borderColor:'grey',
        borderWidth:1,
        backgroundColor: 'white',
    
       
       
   },
   detail_contain:{
    
    
    marginLeft:15
   },
   detaile_containe:{
    
    marginBottom:10,
    marginLeft:30
   },
   detaile:{
    color:'white',
    fontWeight:'bold',
    marginRight:5,
    textAlign:'center',
    backgroundColor: '#01D758',
        borderRadius: 2,
        width: 145,
        height: 24,
        borderColor:'#01D758',
        borderWidth:2,
        marginTop:0,
        marginLeft:80,

   },
   nombre:{
       fontSize:18,
       textAlign:'center',

       
      
   }
})
export default Item