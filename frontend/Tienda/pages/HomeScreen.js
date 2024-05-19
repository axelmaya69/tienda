import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, FlatList, TextInput, Button } from "react-native";
import axios from "axios";
import tw from "twrnc";


export default function HomeScreen() {
  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://192.168.0.113:3000/productos")
      .then(response => {
        setProductos(response.data);
        setFilteredProductos(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching productos: ", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    const filteredData = productos.filter((item) =>
      item.nombre.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProductos(filteredData);
  };

  const renderItem = ({ item }) => (
    <>
    
        <View style={tw` flex-grow m-4 rounded-lg border w-24 h-3/4 bg-white`}>
          <Text style={tw`font-bold text-sm p-1 rounded-t-lg bg-white min-w-full h-14 text-center pt-2`}>{item.nombre}</Text>
          <Text style={tw`text-sm font-bold p-1 text-white rounded-b-lg bg-orange-400 min-w-full h-9 text-center`}>$ {item.precio}</Text>
        </View>
        </>
     
   );
 
  return (
    <View style={tw`flex-1 bg-amber-200`}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <TextInput
            style={tw`border rounded-md mt-1 p-2 mb-4 mx-4 bg-white`}
            placeholder="Buscar producto..."
            value={search}
            onChangeText={handleSearch}
          /> 
          <FlatList
            data={filteredProductos}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            style={tw`flex`}
          />
        </>
      )}
    </View>
  );
}
