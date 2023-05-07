import React, { useState } from "react";
import { Pressable, Text, View, FlatList } from "react-native";
import ShoppingListItem from "../components/ShoppingListItem";
import { Entypo } from "@expo/vector-icons";
import themeColors from "../constants/themeColors";

export default function Category({ category, color, items }) {

    const [checkedItems, setCheckedItems] = useState(() => {
        const initialCheckedItems = {};
        for (let item of items) {
            initialCheckedItems[item.name] = false;
        }
        return initialCheckedItems;
    });


    const handleItemPress = (item) => {
        setCheckedItems({
            ...checkedItems,
            [item.name]: !checkedItems[item.name],
        })
    };

    return (
        <View>
            <View style={[styles.categoryHeaderContainer, { backgroundColor: themeColors[color] }]}>
                <Text style={styles.categoryHeader}>{category}</Text>
                <Pressable
                    style={styles.categoryHeaderButton}>
                    <Entypo name="plus" size={30} color={"#fff"} />
                </Pressable>

            </View>
            <FlatList style={styles.itemsList}
                data={items}
                renderItem={({ item }) => (
                    <ShoppingListItem
                        item={item}
                        checked={checkedItems[item.name]}
                        onItemPress={handleItemPress}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
};
