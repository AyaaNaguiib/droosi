import React, { useState } from "react";
import { Dimensions, FlatList, Image,StyleSheet,Text,TouchableOpacity,View,I18nManager,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/src/constants/colors";
import { isTablet, ms, msf, mvs } from "@/src/utils/scaling";
import { useTranslation } from "react-i18next";
import { changeAppLanguage } from "@/src/locals/i18n";
import BottomSheetModal from "@/src/components/modal/BottomSheetModal";
import PopupModal from "@/src/components/modal/PopUp";

const screenHeight = Dimensions.get("window").height;

export default function CartScreen() {
  const { t, i18n } = useTranslation();
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "عصير برتقال",
      price: 18,
      image: require("../../../assets/images/orangeJuice.png"),
      quantity: 1,
    },
  ]);
  React.useEffect(() => {
    const isRTL = i18n.language === "ar";
    if (I18nManager.isRTL !== isRTL) {
      I18nManager.forceRTL(isRTL);
    }
  }, [i18n.language]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const toggleLang = async () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    await changeAppLanguage(newLang);
  };

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

  const renderItem = ({ item }) => {
    const isRTL = i18n.language === "ar";
    return (
      <View
        style={[
          stylesC.$card,
          { flexDirection: isRTL ? "row-reverse" : "row" },
        ]}
      >
        <TouchableOpacity
          onPress={() => confirmDeleteItem(item.id)}
          style={[
            stylesC.$deleteButton,
            isRTL ? { marginLeft: ms(8) } : { marginRight: ms(8) },
          ]}
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
            {item.price} {t("Riyal")}
          </Text>
        </View>

        <Image source={item.image} style={stylesC.$itemImage} />
      </View>
    );
  };

  const isRTL = i18n.language === "ar";

  return (
    <>
      <View style={stylesC.$container}>
     <View style={{ alignItems: "center", marginTop: mvs(10) }}>
  <Text style={stylesC.$title}>{t("Cart Shopping")}</Text>

  <TouchableOpacity
    onPress={toggleLang}
    style={[stylesC.$langButton, { position: "absolute", top: 0, end: 20 }]} 
  >
    <Text style={stylesC.$langButtonText}>{isRTL ? "EN" : "ع"}</Text>
  </TouchableOpacity>
</View>

        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 150 }}
        />
      </View>

      <View style={stylesC.$bottomSection}>
        <View
          style={[
            stylesC.$totalRow,
            { flexDirection: isRTL ? "row-reverse" : "row" },
          ]}
        >
          <Text style={stylesC.$totalPrice}>
            {getTotal()} {t("Riyal")}
          </Text>
          <Text style={stylesC.$totalLabel}>{t("Total")}</Text>
        </View>

        <TouchableOpacity
          style={stylesC.$payButton}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={stylesC.$payText}>
            {t("countinueToPay", { price: getTotal() })}
          </Text>
        </TouchableOpacity>
      </View>

      <BottomSheetModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
       
        isTablet={isTablet}
        />

      <PopupModal
        visible={isDeleteModalVisible}
        onClose={() => setIsDeleteModalVisible(false)}
        onConfirmDelete={removeItem}
        isRTL={false}   
      />
    </>
  );
}

const stylesC = StyleSheet.create({
  $container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: mvs(isTablet ? 28 : 42),
   
  },
  $title: {
    fontSize: msf(isTablet ? 24 : 18),
    fontWeight: "700",
    color: COLORS.secondary,
   textAlign: "center",
  },
  $langButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  $langButtonText: {
    color: COLORS.white,
    fontWeight: "700",
  },
  $card: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    // flexDirection: "row-reverse",
    alignItems: "center",
    backgroundColor: COLORS.lightBackground,
    borderRadius: ms(20),
    padding: ms(12),
    marginHorizontal: ms(10),
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
    flexDirection: "row-reverse",
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
    borderTopWidth: 1,
    borderColor: COLORS.white,
  },
  $totalRow: {
    flexDirection: "row",
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
