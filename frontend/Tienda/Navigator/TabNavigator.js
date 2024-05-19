import React from "react";
import { Text,  Alert } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecargaScreen from "../pages/Recargas";
import HomeScreen from "../pages/HomeScreen";
import EnvasesScreen from "../pages/EnvasesScreen";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import ProductosScreen from "../pages/Productos";
import { Foundation } from '@expo/vector-icons';
import tw from "twrnc";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Precios" component={HomeScreen} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Foundation name={focused ? "dollar" : "dollar"}size={size} color={color} />
        ),
        headerRight: () => (
          <TouchableOpacity
                onPress={() => Alert.alert('This is a button!')}
                style={tw`mr-4   bg-green-500 px-1 rounded`}
              >
                <Text style={tw`text-white p-1 text-sm`}>Nuevo</Text>
              </TouchableOpacity>
        ),
      }} />

      <Tab.Screen name="Productos" component={ProductosScreen} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? 'apps' : 'apps-outline'} size={size} color={color}
          />
        ),
        headerRight: () => (
          <TouchableOpacity
                onPress={() => Alert.alert('This is a button!')}
                style={tw`mr-4   bg-green-500 px-1 rounded`}
              >
                <Text style={tw`text-white p-1 text-sm`}>Nuevo</Text>
              </TouchableOpacity>
        ),


      }} />

      <Tab.Screen name="Recargas" component={RecargaScreen} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? 'arrow-up-circle' : 'arrow-up-circle-outline'} size={size} color={color} />
        ),
        headerRight: () => (
          <TouchableOpacity
                onPress={() => Alert.alert('This is a button!')}
                style={tw`mr-4   bg-green-500 px-1 rounded`}
              >
                <Text style={tw`text-white p-1 text-sm`}>Nuevo</Text>
              </TouchableOpacity>
        ),
      }} />
      <Tab.Screen name="Envases" component={EnvasesScreen} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <FontAwesome5 name={focused ? "wine-bottle" : 'wine-bottle'} size={size} color={color} />
        ),
        headerRight: () => (
          <TouchableOpacity
                onPress={() => Alert.alert('This is a button!')}
                style={tw`mr-4   bg-green-500 px-1 rounded`}
              >
                <Text style={tw`text-white p-1 text-sm`}>Nuevo</Text>
              </TouchableOpacity>
        ),
      }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;