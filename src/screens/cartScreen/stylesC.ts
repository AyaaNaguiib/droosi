import { StyleSheet } from "react-native";
import {responsiveWidth,responsiveHeight,responsiveFontSize,} from "react-native-responsive-dimensions";
import { isTablet } from "@/src/utils/scaling";

export const stylesC = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: responsiveHeight(isTablet ? 4 : 6),
  },
  title: {
    fontSize: responsiveFontSize(isTablet ? 3 : 2.6),
    fontWeight: "700",
    textAlign: "center",
    color: "#117A8B",
    marginVertical: responsiveHeight(isTablet ? 4 : 2),
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E6F7F9",
    borderRadius: responsiveWidth(5),
    padding: responsiveWidth(3),
    marginHorizontal: responsiveWidth(4),
    marginVertical: responsiveHeight(isTablet ? 1.5 : 1),
  },
  deleteButton: {
    backgroundColor: "red",
    borderRadius: responsiveWidth(2),
    padding: responsiveWidth(isTablet ? 2.5 : 2),
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
    width: responsiveWidth(isTablet ? 6 : 8),
    height: responsiveWidth(isTablet ? 6 : 8),
    borderRadius: responsiveWidth(2),
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  qtyText: {
    fontSize: responsiveFontSize(isTablet ? 3 : 2.5),
    color: "#333",
    fontWeight: "600",
  },
  qtyNumber: {
    fontSize: responsiveFontSize(isTablet ? 2.4 : 2),
    fontWeight: "500",
    color: "#333",
    marginHorizontal: responsiveWidth(2),
  },
  infoContainer: {
    flex: 1,
    marginHorizontal: responsiveWidth(2),
  },
  itemName: {
    fontSize: responsiveFontSize(isTablet ? 2.2 : 2),
    textAlign: "right",
    fontFamily: "IBMPlexSansArabic-Regular",
  },
  itemPrice: {
    fontSize: responsiveFontSize(isTablet ? 2.5 : 2),
    color: "#289CA5",
    textAlign: "right",
    fontFamily: "IBMPlexSansArabic-Regular",
  },
  itemImage: {
    width: responsiveWidth(isTablet ? 18 : 14),
    height: responsiveWidth(isTablet ? 18 : 14),
    resizeMode: "contain",
  },
  bottomSection: {
    position: "absolute",
    bottom: responsiveHeight(3),
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(1.5),
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
  },
  totalPrice: {
    fontSize: responsiveFontSize(1.9),
    color: "#289CA5",
    fontWeight: "bold",
  },
  payButton: {
    backgroundColor: "#289CA5",
    borderRadius: responsiveWidth(4),
    paddingVertical: responsiveHeight(isTablet ? 2.2 : 2),
    alignItems: "center",
  },
  payText: {
    color: "#fff",
    fontSize: responsiveFontSize(isTablet ? 2.3 : 2),
    fontWeight: "700",
  },

 
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  paymentModal: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: responsiveHeight(isTablet ? 65 : 50),
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: responsiveWidth(5),

  },
  paymentContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkIconContainer: {
    width: responsiveWidth(isTablet ? 10 : 18),
    height: responsiveWidth(isTablet ? 10 : 18),
    borderRadius: "100%",
    backgroundColor: "#E8F0FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: responsiveHeight(2),
    position:"absolute",
    top : responsiveHeight(isTablet ? -5 : 6), 
   },
  paymentTitle: {
    fontSize: responsiveFontSize(isTablet ? 2.8 : 2.2),
    fontWeight: "bold",
    marginBottom: responsiveHeight(1),
    marginTop:responsiveHeight(8)
    
  },
  paymentSubtitle: {
    fontSize: responsiveFontSize(isTablet ? 2.3 : 1.8),
    color: "gray",
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#082375",
    paddingVertical: responsiveHeight(isTablet ? 2 : 1.6),
    borderRadius: 10,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: responsiveFontSize(isTablet ? 2.3 : 1.9),
  },


  deleteOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteBox: {
    width: "70%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: responsiveWidth(5),
    alignItems: "center",
  },
  deleteText: {
    fontSize: responsiveFontSize(isTablet ? 2.4 : 2),
    fontWeight: "bold",
    marginBottom: responsiveHeight(2),
    textAlign: "center",
  },
  deleteBtns: {
    flexDirection: "row",
    marginTop: responsiveHeight(1),
  },
  deleteYes: {
    backgroundColor: "red",
    paddingVertical: responsiveHeight(1.2),
    paddingHorizontal: responsiveWidth(6),
    borderRadius: 8,
    marginHorizontal: responsiveWidth(2),
  },
  deleteNo: {
    backgroundColor: "grey",
    paddingVertical: responsiveHeight(1.2),
    paddingHorizontal: responsiveWidth(6),
    borderRadius: 8,
    marginHorizontal: responsiveWidth(2),
  },
  deleteBtnText: {
    color: "#fff",
    fontSize: responsiveFontSize(isTablet ? 2.2 : 1.9),
  },
});
