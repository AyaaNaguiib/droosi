// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import Toast from 'react-native-toast-message';
// import './src/locals/i18n';
// import MainStack from './src/navigation/stacks/mainStack';
// import { useFonts } from "expo-font";








// export default function App() {
//   // :point_down: تحميل الخط هنا مرة واحدة فقط
//   const [fontsLoaded] = useFonts({
//     "Alexandria-Bold": require("./assets/fonts/IBMPlexSansArabic-Bold.ttf"),
//     "Alexandria-Regular": require("./src/assets/fonts/Alexandria-Regular.ttf"),
//   });









// const queryClient = new QueryClient();
// export default function App() {

//   return (
//     <QueryClientProvider client={queryClient}>
//       <NavigationContainer>
//         <MainStack />
//         <Toast />
//       </NavigationContainer>
//     </QueryClientProvider>
  
//   );
// }
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import "./src/locals/i18n";
import MainStack from "./src/navigation/stacks/mainStack";
import { useFonts } from "expo-font";

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    "IBMPlexSansArabic-Bold": require("./assets/fonts/IBMPlexSansArabic-Bold.ttf"),
    "IBMPlexSansArabic-Regular": require("./assets/fonts/IBMPlexSansArabic-Regular.ttf"),
  });

  
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MainStack />
        <Toast />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
