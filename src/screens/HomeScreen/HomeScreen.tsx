import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { stylesk } from "./stylesk";
import { OrderItem } from "@/src/components/orders/orderItem";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackParamList } from "@/src/navigation/stacks/mainStack";

type HomeScreenNavigationProp = NativeStackNavigationProp<MainStackParamList, "HomeScreen">;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const orders = [
    {
      id: "1",
      orderNumber: "6526851",
      date: "24/12/2024",
      price: "29",
      status: "تم الاستلام",
      isCancelled: false,
      isReceived:true
    },
    {
      id: "2",
      orderNumber: "6526851",
      date: "23/12/2024",
      price: "18",
      status: "تم الاستلام",
      isCancelled: false,
      isReceived:true
    },
    {
      id: "3",
      orderNumber: "6526851",
      date: "20/12/2024",
      price: "25",
      status: "تم الاستلام",
      isCancelled: false,
      isReceived:true
    },
    {
      id: "4",
      orderNumber: "6526851",
      date: "20/12/2024",
      price: "25",
      status: "ملغي",
      isCancelled: true,
      isReceived:false
    },
    {
      id: "5",
      orderNumber: "6526851",
      date: "20/12/2024",
      price: "25",
      status: "ملغي",
      isCancelled: true,
      isReceived:false
    },
  ];

return (
    <View style={stylesk.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
      
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate("Cart")}
      >
        <Text style={styles.cartText}> عربة التسوق</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  cartButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "black",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  cartText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
