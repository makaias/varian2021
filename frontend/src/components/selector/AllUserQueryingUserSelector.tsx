import React, {FC} from 'react';
import useEndpoint from '../../hooks/useEndpoint';
import Spinner from '../../components/Spinner';
import FailureParagraph from '../../components/FailureParagraph';
import {User} from '../../context/AuthBackend';
import UserSelector from '../../components/selector/UserSelector';

interface Props {
  userId: number;
  setUserId: (newUserId: number) => void,
}

const AllUserQueryingUserSelector: FC<Props> = (props) => {
  const usedAllUsers = useEndpoint<User[]>({
    conf: {
      url: `/users`
    }
  });

  return (
    <>
      {usedAllUsers.pending && (
        <Spinner />
      )}
      {usedAllUsers.failed && (
        <FailureParagraph onRetry={usedAllUsers.reloadEndpoint} />
      )}
      {usedAllUsers.succeeded && (
        <UserSelector options={usedAllUsers.data} userId={props.userId}
                      setUserId={props.setUserId} />

      )}
    </>
  );
};

export default AllUserQueryingUserSelector;
