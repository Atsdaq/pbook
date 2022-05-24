import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation'; 
import Category from '../screens/category';
import Prayer from '../screens/prayer';

const screens={
    Category: {
        screen: Category
    },
    Prayer:{
        screen: Prayer
    }
}


const CategoryList = createStackNavigator(screens);

export default createAppContainer(CategoryList);