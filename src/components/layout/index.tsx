import { PropsWithChildren } from 'react';
import { VStack, Container } from '@chakra-ui/react';
import Header from './header';
import Footer from './footer';

type Props = PropsWithChildren<{}>;

const Layout = ({ children }: Props) => {
  return (
    <Container maxW="container.md">
      <VStack spacing={0} alignItems="stretch">
        <Header />
        {children}
        <Footer />
      </VStack>
    </Container>
  );
};

export default Layout;
