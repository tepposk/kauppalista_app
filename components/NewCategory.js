import React, { useState, useEffect, useContext } from "react";
import { Button, SafeAreaView, FlatList, TextInput, Text, ScrollView, View, TouchableOpacity, Pressable } from "react-native";
import editCategories from "../styles/editCategories";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

export default function NewCategory({ addCategory }) {

    const [active, setActive] = useState(false);
    const [categoryNameInput, setCategoryNameInput] = useState("");

    const handleSubmit = () => {
        toggleActive();
        if (categoryNameInput) {
            addCategory(categoryNameInput);
        }
    };

    const toggleActive = () => {
        setActive(!active);
        setCategoryNameInput("");
    };

    if (active) {
        return (
            <View style={[editCategories.newCategoryContainer, { backgroundColor: "#b75c2f" }]}>
                <View style={[editCategories.editCategoryHeaderContainer, { backgroundColor: "#b75c2f" }]}>
                    <TextInput
                        value={categoryNameInput}
                        onChangeText={text => setCategoryNameInput(text)}
                        autoFocus={true}
                        style={editCategories.categoryHeaderInput}
                    />
                    <Pressable onPress={handleSubmit}>
                        <MaterialCommunityIcons name="check-bold" size={30} color="#fff" />
                    </Pressable>
                </View>
                <View style={editCategories.categoryHeaderSecondary}>
                </View>
            </View>
        )
    } else {
        return (
            <View style={editCategories.newCategoryContainer}>
                <View style={editCategories.newCategoryButton}>
                    <TouchableOpacity style={editCategories.addItemTouchable} onPress={toggleActive}>
                        <View style={editCategories.newCategoryRoundButton}>
                            <Entypo name="plus" size={30} color={"#fff"} />
                        </View>
                        <Text style={editCategories.newCategoryText}>Uusi kategoria</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};