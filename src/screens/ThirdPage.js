import { View, Button, Text, SafeAreaView, ScrollView } from "react-native";
import { goForward, goBack } from "../hooks";

const ThirdPage = () => {
  const number = 3;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ margin: 20, alignItems: "center" }}>
          <Text>Third Page : Fin!</Text>

          <Button onPress={goForward(number)} title="Continue" />
          <Button onPress={goBack(number)} title="go Back!" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ThirdPage;
