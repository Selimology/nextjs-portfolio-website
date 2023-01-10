import { PropsWithChildren } from 'react';
import { Box, VStack, Container } from '@chakra-ui/react';
import Header from './generalheader';
import Footer from './footer';

type Props = PropsWithChildren<{}>;

const Layout = ({ children }: Props) => {
  return (
    <Container
      display="flex"
      maxW="container.md"
      minH={{ base: 'auto', md: '100vh' }}
      px={{ base: 4, md: 0 }}
      centerContent
    >
      <VStack flex={1} spacing={16} alignItems="stretch" w="full">
        <Header />
        <Box flex={1} w="full">
          {children}
        </Box>
        <Footer />
      </VStack>
    </Container>
  );
};

export default Layout;
