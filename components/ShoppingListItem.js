import React from "react";
import { Pressable, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ShoppingListItem({ item, checked, onItemPress }) {

    return (
        <Pressable onPress={() => onItemPress(item)} style={styles.categoryItemContainer}>
            <MaterialCommunityIcons name="check-bold" size={20} color="#759f62" opacity={checked ? 100 : 0} />
            <Text style={checked ? styles.categoryItemChecked : styles.categoryItemUnchecked}>
                {item.name}
            </Text>
        </Pressable>
    );
}