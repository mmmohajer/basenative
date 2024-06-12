import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import {localStyles} from '../localStyles';

const TitleSeparator = ({title = ''}) => {
  return (
    <>
      <AppText
        className="bg-blue m-y-8 p-all-8"
        textClassName="text-white f-b upper-case">
        {title}
      </AppText>
    </>
  );
};

export default TitleSeparator;
