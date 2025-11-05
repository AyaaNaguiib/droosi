import React from "react";
import { View, Text, TouchableOpacity, Modal, GestureResponderEvent, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { COLORS } from "@/src/constants/colors";

interface PopupModalProps {
  visible: boolean;
  onClose: (event?: GestureResponderEvent) => void;
  onConfirmDelete: (event?: GestureResponderEvent) => void;
  isRTL: boolean;
}

const PopupModal: React.FC<PopupModalProps> = ({
  visible,
  onClose,
  onConfirmDelete,
  isRTL,
}) => {
  const { t } = useTranslation();

  return (
    <Modal transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.$overlay}>
        <View style={styles.$deleteBox}>
          <Text style={styles.$deleteText}>{t("confirmDeleteMessage")}</Text>
          <View
            style={[
              styles.$deleteBtns,
              { flexDirection: isRTL ? "row-reverse" : "row" },
            ]}
          >
            <TouchableOpacity style={styles.$deleteYes} onPress={onConfirmDelete}>
              <Text style={styles.$deleteBtnText}>{t("yes")}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.$deleteNo} onPress={onClose}>
              <Text style={styles.$deleteBtnText}>{t("no")}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PopupModal;

const styles = StyleSheet.create({
  $overlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
  },


  $deleteBox: {
    backgroundColor: COLORS.white,
    marginHorizontal: 40,
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: "40%", 
    alignSelf: "center",
    width: "75%",
   
  },
  $deleteText: {
    fontSize: 16,
    color: COLORS.textDark,
    marginBottom: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  $deleteBtns: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    width: "80%",
  },
  $deleteYes: {
    flex: 1,
    backgroundColor: COLORS.red,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  $deleteNo: {
    flex: 1,
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  $deleteBtnText: {
    color: COLORS.white,
    fontSize: 15,
  justifyContent: "center",
}
});