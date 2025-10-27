// import { I18nManager, StyleSheet } from "react-native";
// import {responsiveFontSize,responsiveHeight, responsiveWidth,} from "react-native-responsive-dimensions";

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F9FAFF",
//     paddingHorizontal: responsiveWidth(4),
//     paddingTop: responsiveHeight(3),
//   },

//   header: {
//     fontSize: responsiveFontSize(3),
//     fontWeight: "bold",
//     marginBottom: responsiveHeight(3),
//     textAlign: "center",
//     color: "#333",
//     fontFamily: "Alexandria-Bold",
//   },

//   card: {
//     backgroundColor: "#fff",
//     borderRadius: responsiveWidth(3),

//     paddingBottom:responsiveWidth(3),
//     paddingLeft:responsiveWidth(3),
//     paddingRight:responsiveWidth(3),
//     width: "47%",
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     elevation: 3,
//   },

//   topSectionBox: {
//     backgroundColor: "#FBFCFF",
//     borderRadius: responsiveWidth(3),
//     marginHorizontal: -responsiveWidth(3), 
//     borderWidth: 1,
//   borderColor: "#ECEFFF",
//   top:0
//   },

//   topSection: {
//     flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
//     alignItems: "center",
//   },

//   teacherImage: {
//     width: responsiveWidth(14),
//     height: responsiveWidth(14),
//     borderRadius: responsiveWidth(7),
//   },

//   teacherName: {
//     color: "#1E1E1E",
//     fontSize: responsiveFontSize(2),
//     fontWeight: "600",
//     fontFamily: "Alexandria-Bold",
//     marginLeft: I18nManager.isRTL ? 0 : responsiveWidth(2),
//     marginRight: I18nManager.isRTL ? responsiveWidth(2) : 0,
//   },

//   subjectContainer: {
//     flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
//     flexWrap: "nowrap",
//     marginVertical: responsiveHeight(1),
//   },

//   subjectBadge: {
//     flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
//     backgroundColor: "#F8F9FF",
//     borderWidth: 1,
//     borderColor: "#DADADA",
//     borderRadius: responsiveWidth(2),
//     paddingHorizontal: responsiveWidth(2),
//     paddingVertical: responsiveHeight(0.4),
//     margin: responsiveWidth(0.8),
//   },

//   subjectText: {
//     flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
//     fontSize: responsiveFontSize(1.5),
//     color: "#414E75",
//     fontWeight: "600",
//     fontFamily: "Alexandria",
//   },

//   infoRow: {
//     flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
//     alignItems: "center",
//     marginVertical: responsiveHeight(0.3),
//   },

//   location: {
//     fontSize: responsiveFontSize(1.5),
//     color: "#414E75",
//     fontFamily: "Alexandria",
//   },

//   bookBtn: {
//     backgroundColor: "#ECEFFF",
//     borderRadius: responsiveWidth(2),
//     paddingVertical: responsiveHeight(1),
//     marginTop: responsiveHeight(1),
//     alignItems: "center",
//   },

//   bookBtnText: {
//     color: "#414E75",
//     fontWeight: "400",
//     fontFamily: "Alexandria-Bold",
//   },

//   ratingRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: responsiveHeight(0.3),
//   },

//   ratingText: {
//     fontSize: responsiveFontSize(1.6),
//     color: "#414E75",
//     fontWeight: "500",
//     marginLeft: responsiveWidth(1),
//     fontFamily: "Alexandria",
//   },
// });


// import React, { useEffect } from "react";
// import {ActivityIndicator,FlatList,Image,Text,View,I18nManager,ScrollView,Button,Alert,} from "react-native";
// import styles from "./stacks/homeStyle";
// import { useInstructorsQuery } from "../../hooks/useQuery";
// import CustomBtn from "../components/btn/CustomBtn";
// import { useTranslation } from "react-i18next";
// import Star from "../../assets/images/Star.svg";
// import Location from "../../assets/images/Location.svg";
// import IdBadge from "../../assets/images/IdBadge.svg";
// // import * as Notifications from "expo-notifications";

// export default function HomeScreen() {
//   const { t } = useTranslation();
//   const { data, isLoading, error } = useInstructorsQuery();

// //   useEffect(() => {
// //   const askNotificationPermission = async () => {
// //     try {

// //       const { status } = await Notifications.requestPermissionsAsync();

// //       if (status === "granted") {
// //         console.log("Notification permission allowed");
// //       } else {
// //         console.log("Notification permission denied");
// //       }
// //     } catch (err) {
// //       console.log("Error requesting notification permission:", err);
// //     }
// //   };

// //   askNotificationPermission();
// // }, []);

//   if (isLoading)
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" color="#007bff" />
//       </View>
//     );

//   if (error)
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>{t("Error Loading Instructors")}</Text>
//       </View>
//     );

//   return (
//     <View style={styles.container}>

//       <Text style={styles.header}>{t("Best Teachers")}</Text>

//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={2}
//         columnWrapperStyle={{
//           justifyContent: "space-between",
//           marginBottom: 16,
//         }}
//         showsVerticalScrollIndicator={false}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <View style={styles.topSectionBox}>
//               <View style={styles.topSection}>
//                 <Image source={{ uri: item.image }} style={styles.teacherImage} />
//                 <View
//                   style={{
//                     flex: 1,
//                     alignItems: I18nManager.isRTL ? "flex-end" : "flex-start",
//                   }}
//                 >
//                   <Text style={styles.teacherName}>{item.name}</Text>
//                   <View style={styles.ratingRow}>
//                     <Star width={14} />
//                     <Text style={styles.ratingText}> {item.rate}</Text>
//                   </View>
//                 </View>
//               </View>
//             </View>

//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.subjectContainer}
//             >
//               {item.subjects && item.subjects.length > 0 ? (
//                 item.subjects.map((subject, index) => (
//                   <View key={index} style={styles.subjectBadge}>
//                     <Text style={styles.subjectText}>{subject}</Text>
//                   </View>
//                 ))
//               ) : (
//                 <Text style={styles.subjectText}>{t("No Subjects")}</Text>
//               )}
//             </ScrollView>

//             <View style={styles.infoRow}>
//               <Location width={20} />
//               <Text style={styles.location}>{item.location}</Text>
//             </View>

//             <View style={styles.infoRow}>
//               <IdBadge width={20} />
//               <Text style={{ color: "#414E75" }}>سعودي</Text>
//             </View>

//             <CustomBtn
//               title={t("Book Lesson")}
//               onPress={() => {}}
//               style={styles.bookBtn}
//               textStyle={styles.bookBtnText}
//             />
//           </View>
//         )}
//       />
//     </View>
//   );
// }