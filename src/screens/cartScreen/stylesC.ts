import { StyleSheet } from "react-native";
import {responsiveWidth,responsiveHeight,responsiveFontSize,} from "react-native-responsive-dimensions";
import { isTablet } from "@/src/utils/scaling";
import { COLORS } from "@/src/constants/colors";


export const stylesC = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: responsiveHeight(isTablet ? 4 : 6),
  },
  title: {
    fontSize: responsiveFontSize(isTablet ? 3 : 2.6),
    fontWeight: "700",
    textAlign: "center",
    color: COLORS.secondary,
    marginVertical: responsiveHeight(isTablet ? 4 : 2),
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.lightBackground,
    borderRadius: responsiveWidth(5),
    padding: responsiveWidth(3),
    marginHorizontal: responsiveWidth(4),
    marginVertical: responsiveHeight(isTablet ? 1.5 : 1),
  },
  deleteButton: {
    backgroundColor: COLORS.red,
    borderRadius: responsiveWidth(2),
    padding: responsiveWidth(isTablet ? 2.5 : 2),
    justifyContent: "center",
    marginRight: responsiveWidth(2),
  },
  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(0.5),
  },
  qtyButton: {
    width: responsiveWidth(isTablet ? 6 : 8),
    height: responsiveWidth(isTablet ? 6 : 8),
    borderRadius: responsiveWidth(2),
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  qtyText: {
    fontSize: responsiveFontSize(isTablet ? 3 : 2.5),
    color: COLORS.textDark,
    fontWeight: "600",
  },
  qtyNumber: {
    fontSize: responsiveFontSize(isTablet ? 2.4 : 2),
    fontWeight: "500",
    color: COLORS.textDark,
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
    color:COLORS.primary,
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
    backgroundColor: COLORS.white,
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
    color: COLORS.textGray,
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: responsiveFontSize(1.9),
    color: COLORS.primary,
    fontWeight: "bold",
  },
  payButton: {
    backgroundColor: COLORS.primary,
    borderRadius: responsiveWidth(4),
    paddingVertical: responsiveHeight(isTablet ? 2.2 : 2),
    alignItems: "center",
  },
  payText: {
    color: COLORS.white,
    fontSize: responsiveFontSize(isTablet ? 2.3 : 2),
    fontWeight: "700",
  },

 
  overlay: {
    flex: 1,
    backgroundColor:COLORS.overlay,
  },
  paymentModal: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: responsiveHeight(isTablet ? 65 : 50),
    backgroundColor: COLORS.white,
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
    backgroundColor: COLORS.successBackground,
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
    backgroundColor: COLORS.darkBlue,
    paddingVertical: responsiveHeight(isTablet ? 2 : 1.6),
    borderRadius: 10,
    alignItems: "center",
  },
  closeButtonText: {
    color: COLORS.white,
    fontSize: responsiveFontSize(isTablet ? 2.3 : 1.9),
  },


  deleteOverlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteBox: {
    width: "70%",
    backgroundColor: COLORS.white,
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
    backgroundColor: COLORS.red,
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
    color: COLORS.white,
    fontSize: responsiveFontSize(isTablet ? 2.2 : 1.9),
  },
});
