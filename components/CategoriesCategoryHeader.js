import React, { useState } from "react";
import editCategories from "../styles/editCategories";
import themeColors from "../constants/themeColors";
import { TouchableOpacity, Pressable, Text, TextInput, View, FlatList } from "react-native";
import { Entypo, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function CategoriesCategoryHeader({ category, color, deleteCategory }) {

    const [editCategory, setEditCategory] = useState(false);
    const [categoryNameInput, setCategoryNameInput] = useState(category);

    const toggleCategoryEdit = () => {
        setEditCategory(!editCategory);
    }

    if (editCategory) {
        return (
            <View style={{ backgroundColor: themeColors[color] }}>
                <View style={[editCategories.editCategoryHeaderContainer, { backgroundColor: themeColors[color] }]}>
                    <TextInput autoFocus={true} style={editCategories.categoryHeaderInput}>
                        {category}
                    </TextInput>
                    <Pressable onPress={toggleCategoryEdit}>
                        <MaterialCommunityIcons name="check-bold" size={30} color="#fff" />
                    </Pressable>
                </View>
                <View style={editCategories.categoryHeaderSecondary}>
                </View>
            </View>
        )
    } else {
        return (
            <View style={{ backgroundColor: themeColors[color] }}>
                <View style={[editCategories.categoryHeaderContainer, { backgroundColor: themeColors[color] }]}>
                    <Text style={editCategories.categoryHeader}>
                        {category}
                    </Text>
                    <Pressable
                        style={styles.categoryHeaderButton}>
                        <Entypo name="chevron-up" size={30} color={"#fff"} />
                    </Pressable>
                </View>
                <View style={editCategories.categoryHeaderSecondary}>
                    <TouchableOpacity onPress={toggleCategoryEdit} style={editCategories.headerButtons}>
                        <MaterialIcons name="edit" size={24} color={"#fff"} />
                        <Text style={editCategories.headerButtonText}>Muokkaa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={editCategories.headerButtons} onPress={() => deleteCategory(category)}>
                        <MaterialCommunityIcons name="delete" size={24} color={"#fff"} />
                        <Text style={editCategories.headerButtonText}>Poista</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};