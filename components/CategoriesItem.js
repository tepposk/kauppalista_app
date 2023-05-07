import React from "react";
import { Pressable, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CategoriesItem ({ item, checked, onItemPress }) {

    return (
       <Pressable onPress={() => onItemPress(item)} style={styles.categoryItemContainer}>
          <View style={editCategories.itemCheckbox}>
             <MaterialCommunityIcons name="check-bold" size={20} color="#759f62" opacity={checked ? 1 : 0} />
          </View>
          <Text style={checked ? styles.categoryItemUnchecked : styles.categoryItemChecked}>
             {item}
          </Text>
       </Pressable>
    )
 };