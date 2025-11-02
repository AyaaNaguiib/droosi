import { StyleSheet } from "react-native";
import { width, isTablet, ms, mvs, msf } from "@/src/utils/scaling";

export const stylesk = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: mvs(40),
  },

  listContent: {
    paddingHorizontal: ms(20),
    paddingBottom: mvs(80),
  },

  columnWrapper: {
    justifyContent: "space-between",
  },

  card: {
    backgroundColor: "#DFF1F3",
    borderRadius: ms(14),
    padding: ms(16),
    marginBottom: mvs(16),
    width: isTablet ? width / 2.2 : "100%",
    alignSelf: "center",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: mvs(8),
  },

  price: {
    color: "#289CA5",
    fontSize: msf(15),
    fontWeight: "600",
  },

  orderNumber: {
    fontSize: msf(14),
    color: "#385052",
    fontFamily: "IBMPlexSansArabic-Regular",
    fontWeight: "500",
  },

  date: {
    fontSize: msf(13),
    color: "#385052",
  },

  status: {
    paddingVertical: mvs(5),
    paddingHorizontal: ms(12),
    borderRadius: ms(6),
    fontSize: msf(13),
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
    paddingHorizontal: ms(20),
    paddingBottom: mvs(20),
    backgroundColor: "white",
  },

  cartButton: {
    backgroundColor: "black",
    paddingVertical: mvs(14),
    borderRadius: ms(10),
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  cartText: {
    color: "white",
    fontSize: msf(15),
    fontWeight: "bold",
  },
});
