import { View, Button, Text, SafeAreaView, ScrollView } from "react-native";
import { goForward, goBack } from "../hooks";

const SecondPage = () => {
  const number = 2;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ margin: 20, alignItems: "center" }}>
          <Text>You're now on Second Page</Text>

          <Button onPress={goForward(number)} title="Continue" />
          <Button onPress={goBack(number)} title="go Back!" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SecondPage;
