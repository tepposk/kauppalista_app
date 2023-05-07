import React, { useState } from "react";
import { Button, SafeAreaView, FlatList, TextInput, Text, ScrollView, View } from "react-native";
import DefaultData from "../constants/DefaultData";
import CategoriesCategory from "../components/CategoriesCategory";
import editCategories from "../styles/editCategories";
import NewCategory from "../components/NewCategory";

export default function Categories({ categories, updateCategories, deleteCategory, printShoppingList, emptyShoppingList, updateShoppingList }) {

   const [newCategoryInput, setNewCategoryInput] = useState("");

   const addItem = (category, value) => {
      console.log(`Item ${value} added to ${category}`);
      const newItem = value;
      if (newItem) {
         const newCategories = categories.map((c) => {
            if (c.category === category) {
               const newArray = [...c.items, { name: newItem, checked: false }];
               newArray.sort((a, b) => a.name.localeCompare(b.name));
               return { ...c, items: newArray };
            }
            return c;
         });
         updateCategories(newCategories);
      }
   };
   const addCategory = (value) => {
      console.log(value);
      const newCategory = {
         category: value,
         color: 2,
         items: [],
      }
      updateCategories([...categories, newCategory]);
      console.log(`Category ${value} added!`);
   };

   const returnDefault = () => {
      updateCategories(DefaultData);
      console.log(`Default data restored!`);
   };

   return (
      <SafeAreaView style={styles.container}>
         <ScrollView>
            <TextInput
               style={styles.input}
               value={newCategoryInput}
               onChangeText={text => setNewCategoryInput(text)}
               autoCapitalize="characters"
            />
            <View style={editCategories.devButtonsContainer}>
               <Button title="Palauta oletukset" onPress={returnDefault} />
               <Button title="Uusi kategoria" onPress={addCategory} />
               <Button title="Save shoppingList" onPress={updateShoppingList} />
               <Button title="Log shoppingList" onPress={printShoppingList} />
               <Button title="Empty shoppingList" onPress={emptyShoppingList} />
            </View>
            <NewCategory
               addCategory={addCategory}
            />
            <FlatList
               data={categories}
               renderItem={({ item }) => (
                  <CategoriesCategory
                     category={item.category}
                     color={item.color}
                     items={item.items}
                     deleteCategory={deleteCategory}
                     onStateChange={addItem}
                  />
               )}
               keyExtractor={(item, index) => index.toString()}
            />
         </ScrollView>
      </SafeAreaView>
   );
};