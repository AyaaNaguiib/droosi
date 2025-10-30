import { isTablet, width } from "@/src/utils/scaling";
import { StyleSheet } from "react-native";
import { responsiveWidth, responsiveHeight, responsiveFontSize,} from "react-native-responsive-dimensions";

export const stylesk = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#FFFFFF", 
    paddingTop: responsiveHeight(6),
  },
  title: {
    fontSize: responsiveFontSize(2.6),
    fontWeight: "700",
    marginBottom: responsiveHeight(2.5),
    marginRight: responsiveWidth(4),
    color: "#117A8B",
  },
  card: {
    backgroundColor: "#DFF1F3",
    borderRadius: responsiveWidth(4),
    padding: responsiveWidth(4),
    marginBottom: responsiveHeight(1.8),
    width: isTablet?width/2:width
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: responsiveHeight(0.8),
  },
  price: { 
    color: "#289CA5", 
    fontSize: responsiveFontSize(2.2),
    fontWeight: "600",
  },
  orderNumber: { 
    fontSize: responsiveFontSize(2),
    color: "#385052", 
    fontFamily: "IBMPlexSansArabic-Regular",
    fontWeight: "500",
  },
  date: { 
    fontSize: responsiveFontSize(1.8),
    color: "#385052",
  },
  status: {
    paddingVertical: responsiveHeight(0.7),
    paddingHorizontal: responsiveWidth(3.5),
    borderRadius: responsiveWidth(2),
    fontSize: responsiveFontSize(1.9),
    fontFamily: "IBMPlexSansArabic-Bold",
  },
  received: { 
    fontFamily: "IBMPlexSansArabic-Bold",
    backgroundColor: "#FFFFFF66",
    fontWeight: "700",
    color: "#289CA5",
    borderWidth: 1.5,
    borderColor: "#289CA5", 
  },
  cancelled: { 
    backgroundColor: "#FFFFFF66",
    color: "#CE0043", 
    borderWidth: 1.5, 
    borderColor: "#CE0043",
  },

bottomContainer: {
    paddingHorizontal: responsiveWidth(5), 
    paddingBottom: responsiveHeight(2),
    backgroundColor: "white",
  },

  cartButton: {
    backgroundColor: "black",
    paddingVertical: responsiveHeight(2), 
    borderRadius: responsiveWidth(3), 
    alignItems: "center",
    justifyContent: "center",
    width: "100%", 
  },

  cartText: {
    color: "white",
    fontSize: responsiveFontSize(2.2), 
    fontWeight: "bold",
  },
});

 