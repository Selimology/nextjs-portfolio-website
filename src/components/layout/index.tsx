import { PropsWithChildren } from 'react';
import { VStack, Container } from '@chakra-ui/react';
import Header from './header';

type Props = PropsWithChildren<{}>;

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <VStack spacing={0}>
        <Header />
        {children}
      </VStack>
    </Container>
  );
};

export default Layout;
