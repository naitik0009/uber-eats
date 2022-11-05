import { Homescreen } from './src/screens/home.screen';
import { StatusBar } from 'react-native';
import { StateProvider } from './src/context/context.api';
export default function App() {
  return (
    <>
    <StateProvider>
      <StatusBar/>
      <Homescreen/>
    </StateProvider>
  </>
  );
}


