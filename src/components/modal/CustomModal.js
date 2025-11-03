import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CustomModal({
  visible,
  onClose,
  type,
  onConfirmDelete,
  stylesC,
  isTablet,
}) {
  if (type === "payment") {
    return (
      <Modal transparent visible={visible} onRequestClose={onClose}>
        <TouchableOpacity activeOpacity={1} style={stylesC.overlay} onPress={onClose} />

        <View style={stylesC.paymentModal}>
          <View style={stylesC.paymentContent}>
            <View style={stylesC.checkIconContainer}>
              <Ionicons
                name="checkmark-circle"
                size={isTablet ? 80 : 60}
                color="#082375"
              />
            </View>

            <Text style={stylesC.paymentTitle}>تم الدفع بنجاح</Text>
            <Text style={stylesC.paymentSubtitle}>
              شكراً لطلبك! تم تأكيد عملية الدفع بنجاح.
            </Text>
          </View>

          <TouchableOpacity style={stylesC.closeButton} onPress={onClose}>
            <Text style={stylesC.closeButtonText}>إغلاق</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

  if (type === "delete") {
    return (
      <Modal transparent visible={visible} onRequestClose={onClose}>
        <View style={stylesC.deleteOverlay}>
          <View style={stylesC.deleteBox}>
            <Text style={stylesC.deleteText}>هل تريد حذف العنصر؟</Text>
            <View style={stylesC.deleteBtns}>
              <TouchableOpacity style={stylesC.deleteYes} onPress={onConfirmDelete}>
                <Text style={stylesC.deleteBtnText}>نعم</Text>
              </TouchableOpacity>

              <TouchableOpacity style={stylesC.deleteNo} onPress={onClose}>
                <Text style={stylesC.deleteBtnText}>لا</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  return null;
}
