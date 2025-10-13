import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import {ActivityIndicator,FlatList,Image,Text, View,I18nManager,} from "react-native";
import styles from "./stacks/homeStyle";
import { useInstructorsQuery } from "../../hooks/useQuery";
import CustomBtn from "../components/btn/CustomBtn";
import { useTranslation } from "react-i18next";

export default function HomeScreen() {
  const { t } = useTranslation();
  const { data, isLoading, error } = useInstructorsQuery();

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
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.topSection}>
              <Image source={{ uri: item.image }} style={styles.teacherImage} />
              <Text style={styles.teacherName}>{item.name}</Text>
            </View>

            <View style={styles.middleSection}>

              <View style={styles.subjectContainer}>
                {item.subjects && item.subjects.length > 0 ? (
                  item.subjects.map((subject, index) => (
                    <View key={index} style={styles.subjectBadge}>
                      <Text style={styles.subjectText}>{subject}</Text>
                    </View>
                  ))
                ) : (
                  <Text style={styles.subjectText}>{t("No Subjects")}</Text>
                )}
              </View>

              <View
                style={{
                  flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
                  alignItems: "center",
                  marginTop: 4,
                }}
              >
                <FontAwesome 
                name="map-marker"
                  size={16}
                  color="#555"
                  style={{ marginHorizontal: 4 }}
                />
                <Text style={styles.location}>{item.location}</Text>
              </View>

           
              <View style={styles.ratingRow}>
                <FontAwesome name="star" size={16} color="#FFA828" />
                <Text style={styles.ratingText}> {item.rate}</Text>
              </View>
            </View>

            <CustomBtn
              title={t("Book Lesson")}
              onPress={() => {}}
              style={styles.bookBtn}
            />
          </View>
        )}
      />
    </View>
  );
}
