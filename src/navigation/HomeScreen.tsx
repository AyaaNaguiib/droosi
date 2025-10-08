import React from "react";
import { FontAwesome } from '@expo/vector-icons';

import {ActivityIndicator,FlatList,Image,Text,TouchableOpacity,View,} from "react-native";
import styles from "./stacks/homeStyle";
import { useInstructorsQuery } from "../utils/helpers/useQuery";


export default function HomeScreen() {
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
        <Text>حدث خطأ أثناء تحميل المعلمين</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>أفضل معلمينا</Text>

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
      <Text style={styles.subjectText}>لا توجد مواد</Text>
    )}
  </View>

  <Text style={styles.location}>{item.location}</Text>
  <View style={styles.ratingRow}>
                <FontAwesome name="star" size={16} color="#FFA828" />
                <Text style={styles.ratingText}> {item.rate}</Text>
              </View>
</View>


       
            <TouchableOpacity style={styles.bookBtn}>
              <Text style={styles.bookBtnText}>احجز حصة</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}


