import React from "react";
import { View, Text } from "react-native";
import { Icon } from "@/src/components/Icons";
import { stylesk } from "@/src/screens/HomeScreen/stylesk";

export const OrderItem = ({ item }) => {
  return (
    <View style={stylesk.card}>
  
      <View style={stylesk.row}>
        <Text style={stylesk.price}>{item.price} ريال</Text>
        <Text style={stylesk.orderNumber}>رقم الطلب #{item.orderNumber}</Text>
      </View>
      <View style={[stylesk.row, { alignItems: "center" }]}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          
          <Text style={stylesk.date}>{item.date}</Text>
          <Icon icon="calendar" style={{ marginRight: 6 }} />
        </View>

        <Text
          style={[
            stylesk.status,
            item.isCancelled ? stylesk.cancelled : stylesk.received,
          ]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );
};
