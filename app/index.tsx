import { Text, View } from 'react-native';
import './style.css';

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-fuchsia-600">
      <Text className="text-red-100 font-bold text-4xl">
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
