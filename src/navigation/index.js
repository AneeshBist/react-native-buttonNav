import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "../screens/FirstPage";
import SecondPage from "../screens/SecondPage";
import ThirdPage from "../screens/ThirdPage";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute="First Page">
        <Stack.Screen name="First Page" component={FirstPage} />
        <Stack.Screen name="Second Page" component={SecondPage} />
        <Stack.Screen name="Third Page" component={ThirdPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
