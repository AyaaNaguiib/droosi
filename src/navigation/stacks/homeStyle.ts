import { I18nManager, StyleSheet } from "react-native";
import {responsiveFontSize,responsiveHeight, responsiveWidth,} from "react-native-responsive-dimensions";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFF",
    paddingHorizontal: responsiveWidth(4),
    paddingTop: responsiveHeight(3),
  },

  header: {
    fontSize: responsiveFontSize(3),
    fontWeight: "bold",
    marginBottom: responsiveHeight(3),
    textAlign: "center",
    color: "#333",
    fontFamily: "Alexandria-Bold",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: responsiveWidth(3),

    paddingBottom:responsiveWidth(3),
    paddingLeft:responsiveWidth(3),
    paddingRight:responsiveWidth(3),
    width: "47%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  topSectionBox: {
    backgroundColor: "#FBFCFF",
    borderRadius: responsiveWidth(3),
    marginHorizontal: -responsiveWidth(3), 
    borderWidth: 1,
  borderColor: "#ECEFFF",
  top:0
  },

  topSection: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    alignItems: "center",
  },

  teacherImage: {
    width: responsiveWidth(14),
    height: responsiveWidth(14),
    borderRadius: responsiveWidth(7),
  },

  teacherName: {
    color: "#1E1E1E",
    fontSize: responsiveFontSize(2),
    fontWeight: "600",
    fontFamily: "Alexandria-Bold",
    marginLeft: I18nManager.isRTL ? 0 : responsiveWidth(2),
    marginRight: I18nManager.isRTL ? responsiveWidth(2) : 0,
  },

  subjectContainer: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    flexWrap: "nowrap",
    marginVertical: responsiveHeight(1),
  },

  subjectBadge: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    backgroundColor: "#F8F9FF",
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(0.4),
    margin: responsiveWidth(0.8),
  },

  subjectText: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    fontSize: responsiveFontSize(1.5),
    color: "#414E75",
    fontWeight: "600",
    fontFamily: "Alexandria",
  },

  infoRow: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    alignItems: "center",
    marginVertical: responsiveHeight(0.3),
  },

  location: {
    fontSize: responsiveFontSize(1.5),
    color: "#414E75",
    fontFamily: "Alexandria",
  },

  bookBtn: {
    backgroundColor: "#ECEFFF",
    borderRadius: responsiveWidth(2),
    paddingVertical: responsiveHeight(1),
    marginTop: responsiveHeight(1),
    alignItems: "center",
  },

  bookBtnText: {
    color: "#414E75",
    fontWeight: "400",
    fontFamily: "Alexandria-Bold",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: responsiveHeight(0.3),
  },

  ratingText: {
    fontSize: responsiveFontSize(1.6),
    color: "#414E75",
    fontWeight: "500",
    marginLeft: responsiveWidth(1),
    fontFamily: "Alexandria",
  },
});


