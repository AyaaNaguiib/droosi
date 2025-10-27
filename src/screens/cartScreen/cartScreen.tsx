import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { stylesC } from "../cartScreen/stylesC";

export default function CartScreen() {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "عصير برتقال",
      price: 18,
      image: require("../../../assets/images/orangeJuice.png"),
      quantity: 1,
    },
  ]);

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const renderItem = ({ item }) => (
    <View style={stylesC.card}>

      <TouchableOpacity
        onPress={() => removeItem(item.id)}
        style={stylesC.deleteButton}>
        <Ionicons name="trash" size={20} color="#FFFFFF" />
      </TouchableOpacity>

      <View style={stylesC.qtyContainer}>

        <TouchableOpacity
          style={stylesC.qtyButton}
          onPress={() => increaseQty(item.id)}>
          <Text style={stylesC.qtyText}>+</Text>
        </TouchableOpacity>

        <Text style={stylesC.qtyNumber}>{item.quantity}</Text>

        <TouchableOpacity
          style={stylesC.qtyButton}
          onPress={() => decreaseQty(item.id)}
        >
          <Text style={stylesC.qtyText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={stylesC.infoContainer}>
        <Text style={stylesC.itemName}>{item.name}</Text>
        <Text style={stylesC.itemPrice}>{item.price} ريال</Text>
      </View>

      <Image source={item.image} style={stylesC.itemImage} />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={stylesC.container}>
        <Text style={stylesC.title}>عربة التسوق</Text>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 150 }}
        />
      </View>

      <View style={stylesC.bottomSection}>
        <View style={stylesC.totalRow}>
          <Text style={stylesC.totalPrice}>{getTotal()} ريال</Text>
          <Text style={stylesC.totalLabel}>الإجمالي</Text>
        </View>

        <TouchableOpacity style={stylesC.payButton}>
          <Text style={stylesC.payText}>متابعة دفع {getTotal()} ريال</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
