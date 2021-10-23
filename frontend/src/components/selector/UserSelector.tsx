import {Select} from '@chakra-ui/react';
import React, {FC} from 'react';
import {User} from '../../context/AuthBackend';

interface Props {
  options: User[];
  userId: number;
  setUserId?: (newUserId: number) => void;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const UserSelector: FC<Props> = (props) => {
  return (
    <Select
      placeholder="Select user"
      value={props.userId}
      onChange={(e) => {
        if (props.onChange) props.onChange(e);
        if (props.setUserId) props.setUserId(Number.parseInt(e.target.value));
      }}
    >
      {props.options.map((user) => (
        <option key={user.id} value={user.id}>
          {user.firstname + ' ' + user.surename}
        </option>
      ))}
    </Select>
  );
};

export default UserSelector;
