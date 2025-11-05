import React from "react";
import {View,Text,TouchableOpacity,Modal,StyleSheet,GestureResponderEvent,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/src/constants/colors";
import { useTranslation } from "react-i18next";
import { ms, mvs } from "@/src/utils/scaling";
import { msf } from "@/src/utils/scaling";

interface BottomSheetModalProps {
  visible: boolean;
  onClose: (event?: GestureResponderEvent) => void;
  isTablet: boolean;
}

const BottomSheetModal: React.FC<BottomSheetModalProps> = ({
  visible,
  onClose,
  isTablet,
}) => {
  const { t } = useTranslation();

  return (
    <Modal transparent visible={visible} onRequestClose={onClose}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.$overlay}
        onPress={onClose}
      />
      <View style={styles.$bottomSheetContainer}>
        <View style={styles.$paymentContent}>
          <View style={styles.$checkIconContainer}>
            <Ionicons
              name="checkmark-circle"
              size={isTablet ? 80 : 60}
              color={COLORS.darkBlue}
            />
          </View>

          <Text style={[styles.$paymentTitle, { fontSize: msf(isTablet ? 20 : 16) }]}>
            {t("paymentSuccessTitle")}
          </Text>
          <Text style={[styles.$paymentSubtitle, { fontSize: msf(isTablet ? 16 : 13) }]}>
            {t("paymentSuccessMessage")}
          </Text>
        </View>

        <TouchableOpacity style={styles.$closeButton} onPress={onClose}>
          <Text style={[styles.$closeButtonText, { fontSize: msf(isTablet ? 16 : 14) }]}>
            {t("close")}
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default BottomSheetModal;

const styles = StyleSheet.create({
  $overlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
  },
  $bottomSheetContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "35%",
    backgroundColor: COLORS.white,
    borderTopLeftRadius: ms(25),
    borderTopRightRadius: ms(25),
    paddingHorizontal: ms(10),
    alignItems: "center",
    justifyContent: "space-between",
    shadowRadius: 8,
    elevation: 8,
  },
  $paymentContent: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  $checkIconContainer: {
    position: "absolute",
    top: mvs(30),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  $paymentTitle: {
    fontWeight: "700",
    color: COLORS.darkBlue,
    textAlign: "center",
  },
  $paymentSubtitle: {
    color: COLORS.textGray,
    textAlign: "center",
    marginTop: mvs(4),
  },
  $closeButton: {
    backgroundColor: COLORS.darkBlue,
    paddingVertical: mvs(12),
    borderRadius: ms(12),
    width: "85%",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: mvs(10),
  },
  $closeButtonText: {
    color: COLORS.white,
    fontWeight: "700",
  },
});

