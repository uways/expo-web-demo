import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { commonStyles } from "../../commonstyles";

export default function Post() {
  const { post } = useLocalSearchParams();

  return (
    <View style={commonStyles.container}>
      <Link push href="/home" style={commonStyles.link}>
        Home
      </Link>
      <Text>Blog post: {post}</Text>
    </View>
  );
}

