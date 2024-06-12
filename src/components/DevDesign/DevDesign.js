import {View, Text, ScrollView, SafeAreaView} from 'react-native';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import {styles, fontStyleFunc} from 'Styles';

// import TestList from './subs/TestList';
import TestAnimatedView from './subs/TestAnimatedView';
import TestButton from './subs/TestButton';
import TestAppTouchable from './subs/TestAppTouchable';
import TestIcon from './subs/TestIcon';
import TestImage from './subs/TestImage';
import TestSwipeable from './subs/TestSwipeable';
import TestSwitch from './subs/TestSwitch';
import TestText from './subs/TestText';
import TestTextBox from './subs/TestTextBox';
import TestToggler from './subs/TestToggler';
import TestView from './subs/TestView';
import TestModal from './subs/TestModal';
import TestLoading from './subs/TestLoading';
import TestPrompt from './subs/TestPrompt';
import TestAlert from './subs/TestAlert';
import TestCards from './subs/TestCards';
// import TestImagePicker from './subs/TestImagePicker';

import TitleSeparator from './subs/TitleSeparator';
import {localStyles} from './localStyles';

const DevDesign = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <AppView className="p-b-200">
            <TitleSeparator title="View" />
            <TestView />

            <TitleSeparator title="Text" />
            <TestText />

            <TitleSeparator title="Animated View" />
            <TestAnimatedView />

            <TitleSeparator title="Button" />
            <TestButton />

            <TitleSeparator title="App Touchable" />
            <TestAppTouchable />

            <TitleSeparator title="Icon" />
            <TestIcon />

            <TitleSeparator title="Image" />
            <TestImage />

            <TitleSeparator title="Swipeable" />
            <TestSwipeable />

            <TitleSeparator title="Switch" />
            <TestSwitch />

            <TitleSeparator title="Toggler" />
            <TestToggler />

            <TitleSeparator title="Text Box" />
            <TestTextBox />

            <TitleSeparator title="Modal" />
            <TestModal />

            <TitleSeparator title="Loader" />
            <TestLoading />

            <TitleSeparator title="Prompt" />
            <TestPrompt />

            <TitleSeparator title="Alerts" />
            <TestAlert />

            <TitleSeparator title="Cards" />
            <TestCards />

            {/* 
          <TitleSeparator title="Image Picker" />
          <TestImagePicker />
          */}

            {/* <TitleSeparator title="List" />
          <TestList /> */}
          </AppView>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default DevDesign;
