import { View, Text } from 'react-native';

export default function TodayScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#0B0B0D', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#F5F5F5' }} className='text-4xl font-extrabold'>Aujourd'hui — placeholder</Text>
    </View>
  );
}