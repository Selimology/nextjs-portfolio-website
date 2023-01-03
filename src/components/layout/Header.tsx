import {
  Heading,
  HStack,
  IconButton,
  useColorMode,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import NextLink from 'next/link';
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
      <Heading size="md">
        <Link href="/">Kertekin.</Link>
      </Heading>

      <HStack alignItems="center" spacing={2}>
        <NextLink href="/" passHref>
          <Button size="md" variant="ghost">
            Projects
          </Button>
        </NextLink>
        <NextLink href="/" passHref>
          <Button size="md" variant="ghost">
            About
          </Button>
        </NextLink>
        <NextLink href="/" passHref>
          <Button size="md" variant="ghost">
            Resume
          </Button>
        </NextLink>
        <NextLink href="/" passHref>
          <Button size="md" variant="ghost">
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
