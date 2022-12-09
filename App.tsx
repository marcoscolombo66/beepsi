const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
undefined;
import TripHistory from "./screens/TripHistory";
import Location1 from "./screens/Location1";
import PlaceSelectedDetail from "./screens/PlaceSelectedDetail";
import Search from "./screens/Search";
import Places from "./screens/Places";
import Navigation1 from "./screens/Navigation1";
import Profile from "./screens/Profile";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Onboarding from "./screens/Onboarding";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="TripHistory"
              component={TripHistory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Location"
              component={Location1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlaceSelectedDetail"
              component={PlaceSelectedDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Places"
              component={Places}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Navigation"
              component={Navigation1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
