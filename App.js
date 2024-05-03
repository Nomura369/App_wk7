//import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import HomeScreen from "./src/screens/HomeScreen";
import store from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
