import React, {FC} from 'react';
import {Editable, EditableInput, EditablePreview} from '@chakra-ui/react';

interface Props {
  value: string;
  onChange: (newValue: string) => void;
  isEditable: boolean;
}

const MyEditable: FC<Props> = (props) => {
  return (
    <Editable
      padding="5px"
      border="1px"
      borderColor="primary.500"
      borderRadius={6}
      value={props.value}
      onChange={props.onChange}
      isDisabled={!props.isEditable}
    >
      <EditablePreview width="15rem" maxWidth="100%" />
      <EditableInput />
    </Editable>
  );
};

export default MyEditable;
