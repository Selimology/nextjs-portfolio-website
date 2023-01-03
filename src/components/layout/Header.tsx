import { Heading, HStack, IconButton, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      as="nav"
      width="full"
      justifyContent="space-between"
      alignItems="center"
      py={4}
    >
      <Heading>
        <Link href="/">Kertekin. </Link>
      </Heading>

      <HStack alignItems="center" spacing={2}>
        <Heading>Projects</Heading>
        <Heading>About</Heading>
        <Heading>Resume</Heading>
        <Heading>Contact!</Heading>
        <IconButton
          aria-label="toggle the theme"
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
        />
      </HStack>
    </HStack>
  );
};

export default Header;
