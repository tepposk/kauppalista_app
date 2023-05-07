import React, { useState, useContext } from "react";
import { SafeAreaView, FlatList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShoppingListCategory from "../components/ShoppingListCategory";
import DefaultData from "../constants/DefaultData";
import styles from "../styles/main.js";

//

export default function ShoppingList({ shoppingList }) {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shoppingList}
        renderItem={({ item }) => (
          <ShoppingListCategory category={item.category} color={item.color} items={item.items} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );

};