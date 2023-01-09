import NextImage from 'next/image';
import { AspectRatio, Box } from '@chakra-ui/react';
import Image from '@/components/image';

const ProfileAvatar = () => {
  return (
    <AspectRatio
      as="figure"
      flexShrink={0}
      ratio={1}
      w={{ base: '52', md: '36' }}
      h={{ base: '52', md: '36' }}
    >
      <Box>
        <Image
          src="/assets/images/profileAvatar.png"
          alt="Kamil Ertekin"
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          width="350"
          height="350"
          rounded="full"
        />
      </Box>
    </AspectRatio>
  );
};

export default ProfileAvatar;
