import {Image} from '@chakra-ui/image';
import React, {ReactElement} from 'react';
import exit from './exit.svg';
import mail from './mail.svg';
import phone from './phone.svg';
import book from './read.svg';
import user from './user.svg';

const iconConfig = {width: '1em'};

interface Props {
  width?: string;
}

export function ExitIcon(props: Props): ReactElement {
  return <Image src={exit} {...iconConfig} {...props} />;
}
export function MailIcon(props: Props): ReactElement {
  return <Image src={mail} {...iconConfig} {...props} />;
}
export function PhoneIcon(props: Props): ReactElement {
  return <Image src={phone} {...iconConfig} {...props} />;
}
export function BookIcon(props: Props): ReactElement {
  return <Image src={book} {...iconConfig} {...props} />;
}
export function UserIcon(props: Props): ReactElement {
  return <Image src={user} {...iconConfig} {...props} />;
}
