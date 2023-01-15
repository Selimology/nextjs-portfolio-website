import { PropsWithChildren } from 'react';
import { Box, VStack, Container } from '@chakra-ui/react';
import Header from './header';
import Footer from './footer';

type Props = PropsWithChildren<{}>;

const Layout = ({ children }: Props) => {
  return (
    <>
      <Container
        display="flex"
        maxW="container.md"
        minH={{ base: 'auto', md: '100vh' }}
        px={{ base: 4, md: 0 }}
        centerContent
      >
        <Header />
        <VStack as="main" alignItems="stretch" flex={1} w="full" spacing={16}>
          <VStack as="section" flex={1} w="full" spacing={16}>
            {children}
          </VStack>
          <Footer />
        </VStack>
      </Container>
    </>
  );
};

export default Layout;
