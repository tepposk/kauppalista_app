import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ShoppingList from "./pages/ShoppingList";
import Categories from "./pages/Categories";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { AsapCondensed_700Bold } from "@expo-google-fonts/asap-condensed";
import { Lato_300Light, Lato_900Black } from "@expo-google-fonts/lato";

import DefaultData from "./constants/DefaultData";

// https://reactnavigation.org/docs/drawer-navigator
// https://www.waldo.com/blog/react-native-side-menu-guide

const Drawer = createDrawerNavigator();

export default function App() {

  //const { categories } = useContext(AppContext);
  const [categories, setCategories] = useState(DefaultData);
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const emptyShoppingList = () => {
    const emptiedList = [];
    for (let i = 0; i < categories.length; i++) {
      emptiedList[i] = {
        category: categories[i].category,
        color: categories[i].color,
        items: [],
      }
      for (let j = 0; j < categories[i].items.length; j++) {
        categories[i].items[j].checked = false;
      }
    }
    setShoppingList(emptiedList);
    console.log("Shopping list emptied!");
  };

  const updateShoppingList = () => {
    let updatedList = [];
    for (let i = 0; i < categories.length; i++) {
      const itemsOnList = [];
      categories[i].items.forEach((item) => {
        if (item.checked) {
          itemsOnList.push(item);
        }
      })
      updatedList[i] = {
        category: categories[i].category,
        color: categories[i].color,
        items: itemsOnList,
      }
    }
    setShoppingList(updatedList);
    console.log("Shopping list updated!");
  };

  const saveShoppingList = async (shoppingList) => {
    try {

    } catch {

    }
  };

  const printShoppingList = () => {
    console.log(shoppingList);
  };

  const getAllProducts = async () => {
    try {
      const products = await AsyncStorage.getItem("@allproducts");
      const parseProducts = JSON.parse(products);
      setCategories(parseProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const printAllProducts = async () => {
    try {
      const products = await AsyncStorage.getItem("@allproducts");
      const parseProducts = JSON.parse(products);
      console.log(parseProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = (category) => {
    const newCategories = categories.filter(item => item.category !== category);
    setCategories(newCategories);
    console.log(`Category "${category}" deleted`);
  };



  const updateCategories = (newCategories) => {
    setCategories(newCategories);
  };

  let [fontsLoaded] = useFonts({
    AsapCondensed_700Bold,
    Lato_300Light,
    Lato_900Black,
  });

  if (!fontsLoaded) {
    return null; // Tähän joku splash screen -hommeli
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {/*         <Drawer.Screen
          name="Ostoslista"
          options={{ drawerLabel: "Ostoslista" }}
          component={ShoppingList}
        /> */}
        <Drawer.Screen
          name={"Ostoslista"}
          options={{ drawerLabel: "Ostoslista" }}
        >
          {() => (
            <ShoppingList
              shoppingList={shoppingList}
              updateCategories={updateCategories}
              deleteCategory={deleteCategory}
              updateShoppingList={updateShoppingList}
              printShoppingList={printShoppingList}
              emptyShoppingList={emptyShoppingList}
            />
          )}
        </Drawer.Screen>

        <Drawer.Screen
          name={"Kategoriatjatuotteet"}
          options={{ drawerLabel: "Kategoriat ja tuotteet" }}
        >
          {() => (
            <Categories
              categories={categories}
              updateCategories={updateCategories}
              deleteCategory={deleteCategory}
              updateShoppingList={updateShoppingList}
              printShoppingList={printShoppingList}
              emptyShoppingList={emptyShoppingList}
            />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}