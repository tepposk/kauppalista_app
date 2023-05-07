import { StyleSheet, StatusBar } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        width: "100%",
        marginHorizontal: 0,
        backgroundColor: "#f9f9f1",
    },
    categoryHeaderContainer: {
        backgroundColor: "#545454",
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 0,
    },
    categoryHeader: {
        marginLeft: 60,
        marginBottom: 4,
        fontFamily: "AsapCondensed_700Bold",
        fontSize: 22,
        textShadowColor: "rgba(0, 0, 0, 0.25)",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1,
        color: "#ffffff",
    },
    categoryHeaderButton: {
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        alignSelf: "flex-end",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16,
        height: 40,
        width: 40,
    },
    itemsList: {
        marginVertical: 16,
    },
    categoryItemContainer: {
        backgroundColor: "rgba(255, 0, 0, 0.0)", // Change alpha value for debugging
        flexDirection: "row",
        paddingLeft: 32,
        height: 48,
        width: "100%",
        marginHorizontal: 0,
        marginVertical: 0,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    categoryItemUnchecked: {
        color: "#4A4848",
        fontFamily: "Lato_900Black",
        fontSize: 18,
        marginLeft: 16,
    },
    categoryItemChecked: {
        color: "#757575",
        fontFamily: "Lato_300Light",
        fontSize: 18,
        marginLeft: 16,
    },
    input: {
        width: '70%',
        borderBottomWidth: 1,
        marginBottom: 20,
    },

});

