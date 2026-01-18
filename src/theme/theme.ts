import { StyleSheet } from 'react-native';
import { Colors } from './colors';

export const AppTheme = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 18,
    padding: 18,
    marginVertical: 12,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '700', // ✅ correct
    color: Colors.textPrimary,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
});
