import { View, Text, Button } from 'react-native';
import React from 'react';
import UseStateHook from './src/components/UseStateHook';
import Props from './src/components/Props';
import InputText from './src/components/InputText';
import Styling from './src/components/Styling';
import FlateListScreen from './src/components/FlateListScreen';
import SectionListScreen from './src/components/SectionListScreen';
import LoginForm from './src/components/LoginForm';
import RegisterForm from './src/components/RegisterForm';
import ContactListScreen from './src/screens/Contact/ContactListScreen';
import Grid from './src/components/Grid';
import ClassComponents from './src/components/ClassComponent';
import SecondClassComponent from './src/components/SecondClassComponent';
import UseEffect from './src/components/UseEffectMountingPhase';
import UseEffectUpdatingPhase from './src/components/UseEffectUpdatingPhase';
import UseEffectHookUnmountingPhase from './src/components/UseEffectHookUnmountingPhase';
import HideShowToggle from './src/components/HideShowToggle';
import StyleWithButton from './src/components/StyleWithButton';
import Loader from './src/components/Loader';
import PressableComponentButton from './src/components/PressableComponentButton';
import StatusBarExample from './src/components/StatusBarExample';
import UseRefHook from './src/components/UseRefHook';
import ModalDialogBox from './src/components/ModalDialogBox';
// import First from './src/components/First';
// import OnPress from './src/components/OnPress';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Text style={{ fontSize: 39 }}>App</Text>
      <Text style={{ fontSize: 30 }}>App21</Text> */}
      {/* <Button title="Press Me1" /> */}
      {/* <First /> */}
      {/* <OnPress/> */}
      {/* <UseStateHook /> */}
      {/* {<Props/>} */}
      {/* {<InputText />} */}
      {/* {<Styling />} */}
      {/* {<FlateListScreen />} */}
      {/* {<SectionListScreen />} */}
      {/* {<LoginForm />} */}
      {/* {<RegisterForm />} */}
      {/* {<ContactListScreen />} */}
      {/* {<Grid />} */}
      {/* {<ClassComponents />} */}
      {/* {<SecondClassComponent />} */}
      {/* {<UseEffect />} */}
      {/* {<UseEffectUpdatingPhase />} */}
      {/* {<UseEffectHookUnmountingPhase />} */}
      {/* {<HideShowToggle />} */}
      {/* {<StyleWithButton />} */}
      {/* {<Loader />} */}
      {/* {<PressableComponentButton />} */}
      {/* {<StatusBarExample />} */}
      {/* {<UseRefHook/>} */}
      {<ModalDialogBox />}
    </View>
  );
};

// const Name = () => {
//   return (
//     <View>
//       <Text style={{ fontSize: 28 }}>I'm Mahi</Text>
//     </View>
//   )
// }

export default App;
