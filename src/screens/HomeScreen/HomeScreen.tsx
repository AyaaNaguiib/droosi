import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { stylesk } from "./stylesk";
import { OrderItem } from "@/src/components/orders/orderItem";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackParamList } from "@/src/navigation/stacks/mainStack";
import { isTablet } from "@/src/utils/scaling";

type HomeScreenNavigationProp = NativeStackNavigationProp<MainStackParamList,"HomeScreen">;

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
      isReceived: true,
    },
    {
      id: "2",
      orderNumber: "6526852",
      date: "23/12/2024",
      price: "18",
      status: "تم الاستلام",
      isCancelled: false,
      isReceived: true,
    },
    {
      id: "3",
      orderNumber: "6526853",
      date: "20/12/2024",
      price: "25",
      status: "تم الاستلام",
      isCancelled: false,
      isReceived: true,
    },
    {
      id: "4",
      orderNumber: "6526854",
      date: "19/12/2024",
      price: "25",
      status: "ملغي",
      isCancelled: true,
      isReceived: false,
    },
    {
      id: "5",
      orderNumber: "6526855",
      date: "18/12/2024",
      price: "25",
      status: "ملغي",
      isCancelled: true,
      isReceived: false,
    },
  ];

  return (
    <View style={stylesk.container}>
      <FlatList
        data={orders}
        numColumns={isTablet ? 2 : 1}
        renderItem={({ item }) => <OrderItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={stylesk.listContent}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={isTablet ? stylesk.columnWrapper : undefined}
      />

      <View style={stylesk.bottomContainer}>
        <TouchableOpacity
          style={stylesk.cartButton}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={stylesk.cartText}>عربة التسوق</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
