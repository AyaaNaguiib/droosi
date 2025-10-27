import { StyleSheet } from "react-native";

export const stylesk = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#FFFFFF", 
    paddingTop: 50 
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    marginRight: 16,
    color: "#117A8B",
  },
  card: {
    backgroundColor: "#DFF1F3",
    borderRadius: 15,
    padding: 16,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  price: { 
    color: "#289CA5", 
    fontSize: 18, 
    fontWeight: "600", 
  },
  orderNumber: { 
    fontSize: 16,
     color: "#385052", 
     fontFamily:"IBMPlexSansArabic-Regular",
     fontWeight: "500"
     },
  date: { 
    fontSize: 14, 
    color: "#385052"
   },
  status: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
    fontSize: 15,
    fontFamily: "IBMPlexSansArabic-Bold",

    
  },
  received: { 
    fontFamily: "IBMPlexSansArabic-Bold",
    backgroundColor: "#FFFFFF66",
    fontWeight:700,
     color: "#289CA5",
     borderWidth: 1.5,
     borderColor:"#289CA5", 
    },
  cancelled: { 
    backgroundColor: "#FFFFFF66",
     color: "#CE0043", 
     borderWidth: 1.5, 
     borderColor:"#CE0043"
    },
});
 