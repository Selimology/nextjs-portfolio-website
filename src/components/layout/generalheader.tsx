import {
  Heading,
  HStack,
  IconButton,
  useColorMode,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaMoon, FaSun } from 'react-icons/fa';
import NextLink from 'next/link';

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
      <Heading size={{ base: 'sm', md: 'md' }}>
        <Link href="/">Kertekin.</Link>
      </Heading>

      <HStack alignItems="center" spacing={{ base: 0, md: 2 }}>
        <NextLink href="/" passHref>
          <Button size={{ base: 'sm', md: 'md' }} variant="ghost">
            Projects
          </Button>
        </NextLink>
        <NextLink href="/" passHref>
          <Button size={{ base: 'sm', md: 'md' }} variant="ghost">
            Blog
          </Button>
        </NextLink>
        <NextLink href="/" passHref>
          <Button size={{ base: 'sm', md: 'md' }} variant="ghost">
            Resume
          </Button>
        </NextLink>
        <NextLink href="/" passHref>
          <Button size={{ base: 'sm', md: 'md' }} variant="ghost">
            Contact
          </Button>
        </NextLink>
        <IconButton
          aria-label="toggle the theme"
          size={'md'}
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
        />
      </HStack>
    </HStack>
  );
};

export default Header;
