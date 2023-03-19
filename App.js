import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>SZCZEGÓŁY BILETU</Text>

      <Text>Zakupiony</Text>

      <Text>02.03.2023 22:21</Text>

      <Text>Bilet opłacony</Text>

      <Text>Tak</Text>

      <Text>Typ płatności</Text>

      <Text>ePłatność - przelew elektroniczny</Text>

      <Text>Stan płatności</Text>

      <Text>Płatność potwierdzona i zakończona</Text>

      <Text>Stan transakcji</Text>

      <Text>Transakcja zakończona pomyślnie - nie wymaga zapisu na nośniku plastikowym</Text>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d48ae',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
