import 'react-native-gesture-handler';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation/index";
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

const App = () => {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <Navigation />   
      </GluestackUIProvider>           
    </SafeAreaProvider>
  );
};

export default App;
