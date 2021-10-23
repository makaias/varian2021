import React, {FC} from 'react';
import {Select} from '@chakra-ui/react';
import {User} from '../context/AuthBackend';

interface Props {
  options: User[];
  userId: number;
  setUserId: (newUserId: number) => void,
}

const UserSelector: FC<Props> = (props) => {

  return (
    <Select placeholder='Select user' value={props.userId}
            onChange={e => props.setUserId(Number.parseInt(e.target.value))}>
      {props.options.map(user => (
        <option key={user.id} value={user.id}>{user.firstname + ' ' + user.surename}</option>
      ))}
    </Select>
  );
};

export default UserSelector;
