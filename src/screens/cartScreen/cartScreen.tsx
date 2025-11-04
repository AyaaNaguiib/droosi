import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View,} from "react-native";

import { COLORS } from "@/src/constants/colors";
import { isTablet, ms, msf, mvs } from "@/src/utils/scaling";
import CustomModal from "../../components/modal/CustomModal";


const screenHeight = Dimensions.get("window").height;

export default function CartScreen() {
  // const { t } = useTranslation();

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
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
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
      setCartItems((prev) =>
        prev.filter((item) => item.id !== itemToDelete)
      );
      setItemToDelete(null);
      setIsDeleteModalVisible(false);
    }
  };

  const getTotal = () =>
    cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

  const renderItem = ({ item }) => (
    <View style={stylesC.$card}>
      <TouchableOpacity
        onPress={() => confirmDeleteItem(item.id)}
        style={stylesC.$deleteButton}
      >
        <Ionicons
          name="trash"
          size={isTablet ? 30 : 20}
          color={COLORS.white}
        />
      </TouchableOpacity>

      <View style={stylesC.$qtyContainer}>
        <TouchableOpacity
          style={stylesC.$qtyButton}
          onPress={() => increaseQty(item.id)}
        >
          <Text style={stylesC.$qtyText}>+</Text>
        </TouchableOpacity>

        <Text style={stylesC.$qtyNumber}>{item.quantity}</Text>

        <TouchableOpacity
          style={stylesC.$qtyButton}
          onPress={() => decreaseQty(item.id)}
        >
          <Text style={stylesC.$qtyText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={stylesC.$infoContainer}>
        <Text style={stylesC.$itemName}>{item.name}</Text>
        <Text style={stylesC.$itemPrice}>
          {item.price} ريال
        </Text>
      </View>

      <Image
        source={item.image}
        style={stylesC.$itemImage}
      />
    </View>
  );

  return (
    <>
      <View style={stylesC.$container}>
        <Text style={stylesC.$title}>عربة التسوق</Text>

        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 150 }}
        />
      </View>

      <View style={stylesC.$bottomSection}>
        <View style={stylesC.$totalRow}>
          <Text style={stylesC.$totalPrice}>
            {getTotal()} ريال
          </Text>
          <Text style={stylesC.$totalLabel}>
            الاجمالي
          </Text>
        </View>

        <TouchableOpacity
          style={stylesC.$payButton}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={stylesC.$payText}>
            متابعه الدفع
          </Text>
        </TouchableOpacity>
      </View>

      <CustomModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        type="payment"
        stylesC={stylesC}
        isTablet={isTablet}
        onConfirmDelete={undefined}
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


export const stylesC = StyleSheet.create({
  $container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: mvs(isTablet ? 28 : 42),
  },
  $simpleLangButton: {
    alignSelf: "flex-end",
    margin: ms(16),
    paddingVertical: mvs(6),
    paddingHorizontal: ms(12),
    borderRadius: ms(8),
    backgroundColor: COLORS.primary,
  },
  $simpleLangText: {
    color: COLORS.white,
    fontSize: msf(isTablet ? 18 : 14),
    fontFamily: "IBMPlexSansArabic-Medium",
  },
  $title: {
    flexDirection: "row-reverse",
    fontSize: msf(isTablet ? 24 : 18),
    fontWeight: "700",
    textAlign: "center",
    color: COLORS.secondary,
    marginVertical: mvs(isTablet ? 32 : 16),
  },
  $card: {
    flexDirection: "row-reverse",
    alignItems: "center",
    backgroundColor: COLORS.lightBackground,
    borderRadius: ms(20),
    padding: ms(12),
    marginHorizontal: ms(16),
    marginVertical: mvs(isTablet ? 10 : 8),
  },
  $deleteButton: {
    backgroundColor: COLORS.red,
    borderRadius: ms(8),
    padding: ms(isTablet ? 10 : 8),
    justifyContent: "center",
    marginRight: ms(8),
  },
  $qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
    borderRadius: ms(8),
    paddingHorizontal: ms(8),
    paddingVertical: mvs(4),
  },
  $qtyButton: {
    width: ms(isTablet ? 40 : 34),
    height: ms(isTablet ? 40 : 34),
    borderRadius: ms(8),
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  $qtyText: {
    fontSize: msf(isTablet ? 20 : 16),
    color: COLORS.textDark,
    fontWeight: "600",
  },
  $qtyNumber: {
    fontSize: msf(isTablet ? 16 : 14),
    fontWeight: "500",
    color: COLORS.textDark,
    marginHorizontal: ms(8),
  },
  $infoContainer: {
    flex: 1,
    marginHorizontal: ms(8),
  },
  $itemName: {
    fontSize: msf(isTablet ? 16 : 14),
    textAlign: "auto",
    fontFamily: "IBMPlexSansArabic-Regular",
  },
  $itemPrice: {
    fontSize: msf(isTablet ? 18 : 15),
    color: COLORS.primary,
    textAlign: "auto",
    fontFamily: "IBMPlexSansArabic-Regular",
  },
  $itemImage: {
    width: ms(isTablet ? 100 : 70),
    height: ms(isTablet ? 100 : 70),
    resizeMode: "contain",
  },
  $bottomSection: {
    position: "absolute",
    bottom: mvs(20),
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    paddingHorizontal: ms(20),
    paddingVertical: mvs(10),
  },
  $totalRow: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: mvs(8),
  },
  $totalLabel: {
    fontSize: msf(15),
    color: COLORS.textGray,
    fontWeight: "bold",
  },
  $totalPrice: {
    fontSize: msf(14),
    color: COLORS.primary,
    fontWeight: "bold",
  },
  $payButton: {
    backgroundColor: COLORS.primary,
    borderRadius: ms(16),
    paddingVertical: mvs(isTablet ? 14 : 12),
    alignItems: "center",
  },
  $payText: {
    color: COLORS.white,
    fontSize: msf(isTablet ? 18 : 15),
    fontWeight: "700",
  },
});
