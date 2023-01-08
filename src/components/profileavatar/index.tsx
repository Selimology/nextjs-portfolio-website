import Kamil from './profileAvatar.png';
import NextImage from 'next/image';
import { AspectRatio } from '@chakra-ui/react';
import Image from '@/components/image';

const ProfileAvatar = () => {
  return (
    <AspectRatio flexShrink={0} ratio={1} w={40} h={40}>
      <Image src={Kamil} alt="Kamil" rounded="full" />
    </AspectRatio>
  );
};

export default ProfileAvatar;
