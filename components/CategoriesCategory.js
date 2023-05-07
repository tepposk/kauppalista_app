import React, { useState } from "react";
import CategoriesCategoryHeader from "../components/CategoriesCategoryHeader";
import CategoriesAddItem from "../components/CategoriesAddItem";
import CategoriesItem from "./CategoriesItem";
import { View, FlatList } from "react-native";

export default function CategoriesCategory({ category, color, items, deleteCategory, onStateChange, updateShoppingList }) {

    const [itemsInCategory, setItemsInCategory] = useState(items);

    const handleItemPress = (item) => {
        const newArray = [...items];
        newArray.forEach((i) => {
            if (i.name === item) {
                i.checked = !i.checked;
                return { ...item, checked: !item.checked };
            }
            return item;
        })
        setItemsInCategory(newArray);
        console.log(item);
    };

    return (
        <View>
            <CategoriesCategoryHeader category={category} color={color} deleteCategory={deleteCategory}/>
            <CategoriesAddItem
                category={category}
                onStateChange={onStateChange}
                color={color}
            />

            <FlatList style={styles.itemsList}
                data={items}
                renderItem={({ item }) => (
                    <CategoriesItem
                        item={item.name}
                        checked={item.checked}
                        onItemPress={handleItemPress}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
};