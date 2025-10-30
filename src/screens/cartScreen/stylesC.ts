import { isTablet } from "@/src/utils/scaling";
import { StyleSheet } from "react-native";
import {responsiveWidth,responsiveHeight,responsiveFontSize,} from "react-native-responsive-dimensions";

export const stylesC = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: responsiveHeight(6),
  },
  title: {
    fontSize: responsiveFontSize(2.6),
    fontWeight: "700",
    textAlign: "center",
    color: "#117A8B",
    marginVertical: isTablet? responsiveHeight(4): responsiveHeight(2),
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E6F7F9",
    borderRadius: responsiveWidth(5),
    padding: responsiveWidth(3),
    marginHorizontal: responsiveWidth(4),
  },
  deleteButton: {
    backgroundColor: "#CE0043",
    borderRadius: responsiveWidth(2),
    padding: responsiveWidth(1.8),
    justifyContent: "center",
    marginRight: responsiveWidth(2),
  },
  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF66",
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(0.5),
  },
  qtyButton: {
    width: responsiveWidth(9),
    height: responsiveWidth(9),
    borderRadius: responsiveWidth(2),
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  qtyText: {
    fontSize: responsiveFontSize(2.5),
    color: "#333",
    fontWeight: "600",
  },
  qtyNumber: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: "500",
    color: "#333",
    marginHorizontal: responsiveWidth(2),
  },
  infoContainer: {
    flex: 1,
    marginHorizontal: responsiveWidth(2),
  },
  itemName: {
    fontSize: responsiveFontSize(2),
    textAlign: "right",
    fontFamily: "IBMPlexSansArabic-Regular",
  },
  itemPrice: {
    fontSize: responsiveFontSize(1.9),
    color: "#289CA5",
    textAlign: "right",
    fontFamily: "IBMPlexSansArabic-Regular",
  },
  bottomSection: {
    position: "absolute",
    bottom: responsiveHeight(3),
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(1.5),
    marginHorizontal: responsiveWidth(3),
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: responsiveHeight(1),
  },
  totalLabel: {
    fontSize: responsiveFontSize(2),
    color: "#385052",
    fontWeight: "bold",
    fontFamily: "IBMPlexSansArabic-Regular",
  },
  totalPrice: {
    fontSize: responsiveFontSize(1.9),
    color: "#289CA5",
    fontWeight: "bold",
    fontFamily: "IBMPlexSansArabic-Regular",
  },
  payButton: {
    backgroundColor: "#289CA5",
    borderRadius: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
    alignItems: "center",
  },
  payText: {
    color: "#fff",
    fontSize: responsiveFontSize(2),
    fontWeight: "700",
    fontFamily: "IBMPlexSansArabic-Regular",
  },
});


