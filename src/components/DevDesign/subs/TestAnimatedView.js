import cx from 'classnames';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import AnimatedView from 'BaseComponents/ReusableComps/AnimatedView';

import {localStyles} from '../localStyles';

const TestAnimatedView = () => {
  return (
    <>
      <AppView className="height-150">
        <AnimatedView
          hAlign="center"
          vAlign="center"
          className="height-60 width-100 bg-red z-2 pos-abs"
          initialTranslateX={0}
          finalTranslateX={200}
          initialTranslateY={0}
          finalTranslateY={50}
          initialRotation={0}
          finalRotation={0.125}
          initialOpacity={0}
          finalOpacity={1}
          durationTime={10000}
          startAnimation={true}>
          <AppText>Hello</AppText>
        </AnimatedView>
      </AppView>
    </>
  );
};

export default TestAnimatedView;
