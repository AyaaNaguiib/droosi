import { StyleSheet } from "react-native";
import { width, isTablet, ms, mvs, msf } from "@/src/utils/scaling";
import { COLORS } from "@/src/constants/colors";

export const stylesk = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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
    backgroundColor: COLORS.listCard,
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
    color: COLORS.primary,
    fontSize: msf(15),
    fontWeight: "600",
  },

  orderNumber: {
    fontSize: msf(14),
    color: COLORS.textGray,
    fontFamily: "IBMPlexSansArabic-Regular",
    fontWeight: "500",
  },

  date: {
    fontSize: msf(13),
    color: COLORS.date,
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
    backgroundColor: COLORS.lightWhite,
    fontWeight: "700",
    color: COLORS.primary,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
  },

  cancelled: {
    backgroundColor: COLORS.lightWhite,
    color: COLORS.lightRed,
    borderWidth: 1.5,
    borderColor:COLORS.lightRed,
  },

  bottomContainer: {
    paddingHorizontal: ms(20),
    paddingBottom: mvs(20),
    backgroundColor:COLORS.white,
  },

  cartButton: {
    backgroundColor: COLORS.black,
    paddingVertical: mvs(14),
    borderRadius: ms(10),
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  cartText: {
    color: COLORS.white,
    fontSize: msf(15),
    fontWeight: "bold",
  },
});
