import { View, Button, Text, SafeAreaView, ScrollView } from "react-native";
import { goForward, goBack } from "../hooks";

const FirstPage = () => {
  const number = 1;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ margin: 20, alignItems: "center" }}>
          <Text>Welcome To First Page</Text>

          <Button onPress={goForward(number)} title="Continue" />
          <Button onPress={goBack(number)} title="go Back!" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FirstPage;
