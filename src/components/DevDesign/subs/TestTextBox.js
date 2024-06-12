import {useState} from 'react';
import cx from 'classnames';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import TextBox from 'BaseComponents/FormComps/TextBox';

import {localStyles} from '../localStyles';

const TestTextBox = () => {
  const [name, setName] = useState('');

  return (
    <>
      <AppView marginL={2} marginR={2}>
        <TextBox
          // inputProps={{
          //   keyboardType: "ascii-capable",
          // }}
          // autoFocus
          isSecure
          iconName="email"
          placeholder="Type something"
          val={name}
          setVal={setName}
          className="bg-red"
        />
        <TextBox
          inputProps={{
            // keyboardType: "numeric",
            clearButtonMode: 'always',
          }}
          isMultiLine={true}
          className="height-200"
        />
      </AppView>
    </>
  );
};

export default TestTextBox;
