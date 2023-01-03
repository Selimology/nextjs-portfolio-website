import { Heading, HStack } from '@chakra-ui/react';
import Link from 'next/link';

const Header = () => {
  return (
    <HStack>
      <Heading width="full" justifyContent={'space-between'}>
        <Link href="/">Kertekin. </Link>
      </Heading>
      <HStack>
        <Heading>Projects</Heading>
        <Heading>About</Heading>
        <Heading>Resume</Heading>
        <Heading>Get in Touch!</Heading>
      </HStack>
    </HStack>
  );
};

export default Header;
