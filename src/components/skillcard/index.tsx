import React from 'react';
import { Skills } from '@/types/skills';
import { Box, Text, useColorModeValue as mode } from '@chakra-ui/react';
import Image from '../image';
import { IconBase } from 'react-icons/lib';

type SkillsProps = Skills;

const SkillCard = ({ title, icon, color }: SkillsProps) => {
  return (
    <Box
      h="full"
      fontSize="sm"
      display="flex"
      alignItems="center"
      justifyContent={{ base: 'space-evenly', md: 'space-between' }}
      border="2px solid transparent"
      _hover={{
        bg: mode('gray.200', 'gray.600'),
        border: `2px solid ${color}`,
        transition: 'all 0.2s ease-in-out',
        letterSpacing: '0.1rem',
      }}
      p={4}
      rounded="md"
      bg={mode('gray.100', 'gray.700')}
    >
      <Text as="span">
        <Image
          src={icon}
          style={{ objectFit: 'fill', objectPosition: 'center' }}
          width="30"
          height="30"
          rounded="full"
          alt="title"
        ></Image>
      </Text>
      <Text fontWeight="bold">{title}</Text>
    </Box>
  );
};

export default SkillCard;
