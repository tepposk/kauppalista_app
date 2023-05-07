import React, { useState } from "react";
import editCategories from "../styles/editCategories";
import themeColors from "../constants/themeColors";
import { TouchableOpacity, Text, View, TextInput } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function CategoriesAddItem({ category, color, onStateChange }) {

    const [itemInput, setItemInput] = useState("");
    const [active, setActive] = useState(false); // Sets the text input field available when true

    const handleAddItem = (category) => {
        const newValue = itemInput;
        setItemInput("");
        onStateChange(category, newValue);
        toggleActive();
    };

    const toggleActive = () => {
        setItemInput("");
        setActive(!active);
    };

    if (!active) {
        return (
            <View style={editCategories.addItemContainer}>
                <TouchableOpacity style={editCategories.addItemTouchable} onPress={toggleActive}>
                    <View style={[editCategories.addItemRoundButton, { backgroundColor: themeColors[color] }]}>
                        <Entypo name="plus" size={30} color={"#fff"} />
                    </View>
                    <Text style={[editCategories.addItemText, { color: themeColors[color] }]}>Lisää tuote</Text>
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <View style={editCategories.addItemContainer}>
                <TextInput
                    autoFocus={true}
                    style={editCategories.input}
                    value={itemInput}
                    onChangeText={text => setItemInput(text)}
                />
                <View style={editCategories.buttonsContainer}>
                    <TouchableOpacity disabled={itemInput === ""} style={[editCategories.roundButton, {backgroundColor: themeColors[color]}, itemInput === "" ? editCategories.disabledButton: null,]} onPress={() => handleAddItem(category)}>
                        <View style={[editCategories.roundButton]}>
                            <Entypo name="plus" size={40} color={"#fff"} />
                        </View>
                    </TouchableOpacity>
                    {/*                     <TouchableOpacity style={[editCategories.addItemTextButton, {backgroundColor: themeColors[color]}]}>
                        <Text style={[editCategories.addItemText, {color: "#fff"}]}>Lisää</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={editCategories.roundButton} onPress={toggleActive}>
                        <View style={editCategories.roundButton}>
                            <Entypo name="plus" size={30} color={"#757575"} style={{ transform: [{ rotateZ: '45deg' }] }} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};