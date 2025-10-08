import { I18nManager, StyleSheet} from "react-native";
import {responsiveWidth,responsiveHeight,responsiveFontSize,} from "react-native-responsive-dimensions";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(5),
  },

  header: {
    fontSize: responsiveFontSize(3),
    fontWeight: "bold",
    marginBottom: responsiveHeight(3),
    textAlign: "center",
    color: "#333",
  },

  card: {
    backgroundColor: "#fff",
    padding: responsiveWidth(3),
    width: "47%",
    shadowColor: "#000",
  },

  
  topSection: {
     flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    //flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: responsiveHeight(1.5),
  },

  teacherImage: {
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    borderRadius: responsiveWidth(8),
    marginLeft: responsiveWidth(1),
  },

  teacherName: {
    color: "#1E1E1E",
    fontSize: responsiveFontSize(2),
    fontWeight: "bold",
    flexShrink: 1,
    textAlign: "left",
  },

  middleSection: {
    alignItems: "flex-end",
    marginBottom: responsiveHeight(1.5),
  },

  subject: {
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(0.5),
    textAlign: "right",
  },

  location: {
    fontSize: responsiveFontSize(1.6),
    color: "Secondary blue", 
    marginBottom: responsiveHeight(0.5),
    textAlign: "right",
  },

  bookBtn: {
    backgroundColor: "#ECEFFF",
    borderRadius: responsiveWidth(2),
    paddingVertical: responsiveHeight(0.8),
    alignItems: "center",
  },

  bookBtnText: {
    color: "#414E75",
    fontWeight: "bold",
    fontSize: responsiveFontSize(1.7),
  },

  subjectContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: responsiveHeight(0.5),
  },

  subjectBadge: {
    backgroundColor: "#F8F9FF",
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(2),
    margin: responsiveWidth(1),
  },

  subjectText: {
    fontSize: responsiveFontSize(1.4),
    color: "#414E75",
    fontWeight: "600",
  },

  ratingRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginTop: responsiveHeight(0.5),
  },

  ratingText: {
    fontSize: responsiveFontSize(1.6),
    color: "Secondary blue",
    fontWeight: "bold",
    marginLeft: responsiveWidth(1.5),
  },
});



