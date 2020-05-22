// Navigation/Navigation.js

import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import listReunion from '../component/listReunion'

import addReunion from '../component/addReunion'
import Reuniondetail from '../component/Reuniondetail'

const listReunionStackNavigator = createStackNavigator({
  Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: listReunion,
    navigationOptions: {
      title: 'SALLE DE REUNION'
    }
  },

Reuniondetail: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
screen: Reuniondetail

 },

addReunion: { 
    screen: addReunion,
    navigationOptions: {
        title: 'Add'
      }
    
    
    }
   }
  )
  export default createAppContainer(listReunionStackNavigator)
