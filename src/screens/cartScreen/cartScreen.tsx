import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Modal, Dimensions,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { stylesC } from "../cartScreen/stylesC"; 
import { isTablet } from "@/src/utils/scaling";

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
        <Ionicons name="trash" size={isTablet ? 30 : 20} color="#FFFFFF" />
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

  
      <Modal transparent visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
        <TouchableOpacity
          activeOpacity={1}
          style={stylesC.overlay}
          onPress={() => setIsModalVisible(false)}
        />

        <View style={stylesC.paymentModal}>
          <View style={stylesC.paymentContent}>
            <View style={stylesC.checkIconContainer}>
              <Ionicons name="checkmark-circle" size={isTablet ? 80 : 60} color="#082375" />
            </View>

            <Text style={stylesC.paymentTitle}>تم الدفع بنجاح</Text>
            <Text style={stylesC.paymentSubtitle}>
              شكراً لطلبك! تم تأكيد عملية الدفع بنجاح.
            </Text>
          </View>

          <TouchableOpacity
            style={stylesC.closeButton}
            onPress={() => setIsModalVisible(false)}
          >
            <Text style={stylesC.closeButtonText}>إغلاق</Text>
          </TouchableOpacity>
        </View>
      </Modal>

   
      <Modal
        transparent
        visible={isDeleteModalVisible}
        onRequestClose={() => setIsDeleteModalVisible(false)}
      >
        <View style={stylesC.deleteOverlay}>
          <View style={stylesC.deleteBox}>
            <Text style={stylesC.deleteText}>هل تريد حذف العنصر؟</Text>
            <View style={stylesC.deleteBtns}>
              <TouchableOpacity style={stylesC.deleteYes} onPress={removeItem}>
                <Text style={stylesC.deleteBtnText}>نعم</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={stylesC.deleteNo}
                onPress={() => setIsDeleteModalVisible(false)}
              >
                <Text style={stylesC.deleteBtnText}>لا</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
