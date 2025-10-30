import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Modal, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { stylesC } from "../cartScreen/stylesC";

const screenHeight = Dimensions.get("window").height;

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

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

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

  const confirmDeleteItem = (id) => {
    setItemToDelete(id); 
    setIsDeleteModalVisible(true);
  };

  const removeItem = () => {
    if (itemToDelete) {
      setCartItems((prev) => prev.filter((item) => item.id !== itemToDelete));
      setItemToDelete(null);
      setIsDeleteModalVisible(false);
    }
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
        onPress={() => confirmDeleteItem(item.id)}
        style={stylesC.deleteButton}
      >
        <Ionicons name="trash" size={20} color="#FFFFFF" />
      </TouchableOpacity>

      <View style={stylesC.qtyContainer}>
        <TouchableOpacity
          style={stylesC.qtyButton}
          onPress={() => increaseQty(item.id)}
        >
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
    <>
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

          <TouchableOpacity
            style={stylesC.payButton}
            onPress={() => setIsModalVisible(true)}
          >
            <Text style={stylesC.payText}>متابعة دفع{getTotal()} ريال</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        transparent
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
          onPress={() => setIsModalVisible(false)}
        />

        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: screenHeight / 2,
            backgroundColor: "#FFFFFF",
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 15,
              textAlign: "center",
            }}
          >
            تم الدفع بنجاح
          </Text>

          <TouchableOpacity
            style={{
              marginTop: 30,
              backgroundColor: "#082375",
              paddingVertical: 12,
              borderRadius: 10,
              alignItems: "center",
            }}
            onPress={() => setIsModalVisible(false)}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>إغلاق</Text>
          </TouchableOpacity>
        </View>
      </Modal>

  
      <Modal
        transparent
        visible={isDeleteModalVisible}
        onRequestClose={() => setIsDeleteModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.4)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "70%",
              backgroundColor: "#fff",
              borderRadius: 20,
              padding: 25,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 15,
                textAlign: "center",
              }}
            >
              هل تريد حذف العنصر؟
            </Text>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "red",
                  paddingVertical: 10,
                  paddingHorizontal: 25,
                  borderRadius: 8,
                  marginHorizontal: 10,
                }}
                onPress={removeItem}
              >
                <Text style={{ color: "#fff", fontSize: 16 }}>نعم</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "grey",
                  paddingVertical: 10,
                  paddingHorizontal: 25,
                  borderRadius: 8,
                  marginHorizontal: 10,
                }}
                onPress={() => setIsDeleteModalVisible(false)}
              >
                <Text style={{ color: "#fff", fontSize: 16 }}>لا</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}


