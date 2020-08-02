import React from "react";
import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
import ListenNowScreen from "../components/listenNow/ListenNowScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../components/search/SearchScreen";
import LibraryScreen from "../components/library/LibraryScreen";

const MainTab = createBottomTabNavigator();
const ListenNowStack = createStackNavigator();
const SearchStack = createStackNavigator();
const LibraryStack = createStackNavigator();


const ListenNowStackNavigator = () => {
    return (
        <ListenNowStack.Navigator>
            <ListenNowStack.Screen options={{
                title: "Listen Nowz",
            }} name="Lizten now" component={ListenNowScreen} />
        </ListenNowStack.Navigator>
    )
}
const SearchStackNavigator = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="search now" component={SearchScreen} />
        </SearchStack.Navigator>
    )
}
const LibraryStackStackNavigator = () => {
    return (
        <LibraryStack.Navigator>
            <LibraryStack.Screen name="library now" component={LibraryScreen} />
        </LibraryStack.Navigator>
    )
}

const MainTabNavigator = () => {

    return (
        <MainTab.Navigator>
            <MainTab.Screen name="Listenn now" options={{
                title: "Listen Nowz",
            }} component={ListenNowStackNavigator} />
            
            <MainTab.Screen name="library" component={LibraryStackStackNavigator} />
            <MainTab.Screen name="search" component={SearchStackNavigator} />

        </MainTab.Navigator>
    )
}

export default MainTabNavigator;