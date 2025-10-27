import {StyleSheet } from "react-native";
export const stylesC = StyleSheet.create({
   container: { 
    flex: 1, 
    backgroundColor: "#FFFFFF", 
    paddingTop: 50,
    
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    color: "#117A8B",
    marginVertical: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E6F7F9",
    borderRadius: 20,
    padding: 10,
    marginHorizontal:16,
  },
  
  deleteButton: {
    backgroundColor: "#CE0043",
    borderRadius: 8,
    padding: 6,
    justifyContent: "center",
    marginRight: 8,
  },
 qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF66",
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 4,

  },
  qtyButton: {
    width: 35,
    height: 35,
    borderRadius: 6,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  qtyText: {
    fontSize: 20,
    color: "#333",
    fontWeight: "600",
  },
  qtyNumber: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
    marginHorizontal: 8,
  },
  infoContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  itemName: {
    fontSize: 16,
    textAlign: "right",
    fontFamily:"IBMPlexSansArabic-Regular",
  },
  itemPrice: {
    fontSize: 14,
    color: "#289CA5",
    textAlign: "right",
    fontFamily:"IBMPlexSansArabic-Regular",
  },

  bottomSection: {
    position: "absolute",
    bottom: 25, 
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal:12
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  totalLabel: {
    fontSize: 16,
    color: "#385052",
    fontWeight: "bold",
    fontFamily:"IBMPlexSansArabic-Regular",
  },
  totalPrice: {
    fontSize: 14,
    color: "#289CA5",
    fontWeight: "bold",
    fontFamily:"IBMPlexSansArabic-Regular",
  },
  payButton: {
    backgroundColor: "#289CA5",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
  },
  payText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    fontFamily:"IBMPlexSansArabic-Regular",
  },
});

