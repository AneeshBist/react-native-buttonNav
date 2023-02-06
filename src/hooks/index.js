import { useNavigation } from "@react-navigation/native";

export function goForward(num) {
  const { navigate } = useNavigation();
  if (num === 1) return () => navigate("Second Page");
  if (num === 2) return () => navigate("Third Page");
  if (num === 3) return () => navigate("First Page");
}

export function goBack(num) {
  const { navigate } = useNavigation();
  if (num === 1) return () => navigate("Third Page");
  if (num === 2) return () => navigate("First Page");
  if (num === 3) return () => navigate("Second Page");
}
