import React, { useEffect } from "react";
import {ActivityIndicator,FlatList,Image,Text,View,I18nManager,ScrollView,Button,Alert,} from "react-native";
import styles from "./stacks/homeStyle";
import { useInstructorsQuery } from "../../hooks/useQuery";
import CustomBtn from "../components/btn/CustomBtn";
import { useTranslation } from "react-i18next";
import Star from "../../assets/images/Star.svg";
import Location from "../../assets/images/Location.svg";
import IdBadge from "../../assets/images/IdBadge.svg";
import * as Notifications from "expo-notifications";


export default function HomeScreen() {
  const { t } = useTranslation();
  const { data, isLoading, error } = useInstructorsQuery();


  useEffect(() => {
  const askNotificationPermission = async () => {
    try {

      const { status } = await Notifications.requestPermissionsAsync();

      if (status === "granted") {
        console.log("Notification permission allowed");
      } else {
        console.log("Notification permission denied");
      }
    } catch (err) {
      console.log("Error requesting notification permission:", err);
    }
  };

  askNotificationPermission();
}, []);

  if (isLoading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );

  if (error)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{t("Error Loading Instructors")}</Text>
      </View>
    );

  return (
    <View style={styles.container}>

      <Text style={styles.header}>{t("Best Teachers")}</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 16,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.topSectionBox}>
              <View style={styles.topSection}>
                <Image source={{ uri: item.image }} style={styles.teacherImage} />
                <View
                  style={{
                    flex: 1,
                    alignItems: I18nManager.isRTL ? "flex-end" : "flex-start",
                  }}
                >
                  <Text style={styles.teacherName}>{item.name}</Text>
                  <View style={styles.ratingRow}>
                    <Star width={14} />
                    <Text style={styles.ratingText}> {item.rate}</Text>
                  </View>
                </View>
              </View>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.subjectContainer}
            >
              {item.subjects && item.subjects.length > 0 ? (
                item.subjects.map((subject, index) => (
                  <View key={index} style={styles.subjectBadge}>
                    <Text style={styles.subjectText}>{subject}</Text>
                  </View>
                ))
              ) : (
                <Text style={styles.subjectText}>{t("No Subjects")}</Text>
              )}
            </ScrollView>

            <View style={styles.infoRow}>
              <Location width={20} />
              <Text style={styles.location}>{item.location}</Text>
            </View>

            <View style={styles.infoRow}>
              <IdBadge width={20} />
              <Text style={{ color: "#414E75" }}>سعودي</Text>
            </View>

            <CustomBtn
              title={t("Book Lesson")}
              onPress={() => {}}
              style={styles.bookBtn}
              textStyle={styles.bookBtnText}
            />
          </View>
        )}
      />
    </View>
  );
}





