import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { ArticleType } from "../components/types/articleType";
import ArticleDetails from "../screens/articleDetails/articleDetails";
import LoginScreen from "../screens/loginScreen/loginScreen";
import { getUserData } from "../utils/helpers/storage";
import ScreenNames from "./screenNames";
import StackNames from "./stackNames";
import AuthStack from "./stacks/auth.stack";
import MainTabs from "./stacks/tabs/MainTabs";

const Stack = createStackNavigator<MainStackParamList>();

export default function MainStack() {
  const [initialRoute, setInitialRoute] = useState<keyof MainStackParamList | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const user = await getUserData();
      if (user) {
        setInitialRoute(StackNames.MainTabs);
      } else {
        setInitialRoute(StackNames.AuthStack);
      }
    };
    checkUser();
  }, []);

  if (!initialRoute) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={StackNames.AuthStack} component={AuthStack} />
      <Stack.Screen name={StackNames.MainTabs} component={MainTabs} />
      <Stack.Screen name={ScreenNames.LoginScreen} component={LoginScreen} />
      <Stack.Screen name={ScreenNames.ArticleDetails} component={ArticleDetails} />
    </Stack.Navigator>
  );
}


export type MainStackParamList = {
  [StackNames.AuthStack]: undefined;
  [StackNames.MainTabs]: undefined; 
  [ScreenNames.ArticleDetails]: { article: ArticleType };
  [ScreenNames.LoginScreen]: undefined;
};
