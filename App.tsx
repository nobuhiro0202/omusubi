import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation/routes';
// import HistoryProvider from './src/providers/HistoryProvider';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}