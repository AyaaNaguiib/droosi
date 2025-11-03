import React, { useState } from "react";
import {View,Text,FlatList,TouchableOpacity,Image,Dimensions,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { stylesC } from "../cartScreen/stylesC";
import { isTablet } from "@/src/utils/scaling";
import CustomModal from "../../components/modal/CustomModal"; 
import { COLORS } from "@/src/constants/colors";


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

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const renderItem = ({ item }) => (
    <View style={stylesC.card}>
      <TouchableOpacity
        onPress={() => confirmDeleteItem(item.id)}
        style={stylesC.deleteButton}
      >
        <Ionicons name="trash" size={isTablet ? 30 : 20} color={COLORS.white}/>
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
          <Text style={stylesC.payText}>متابعة دفع {getTotal()} ريال</Text>
        </TouchableOpacity>
      </View>

      <CustomModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        type="payment"
        stylesC={stylesC}
        isTablet={isTablet} onConfirmDelete={undefined}      
        />

      <CustomModal
        visible={isDeleteModalVisible}
        onClose={() => setIsDeleteModalVisible(false)}
        type="delete"
        onConfirmDelete={removeItem}
        stylesC={stylesC}
        isTablet={isTablet}
      />
    </>
  );
}
