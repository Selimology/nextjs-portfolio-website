import { PropsWithChildren } from 'react';
import { VStack, Container } from '@chakra-ui/react';

type Props = PropsWithChildren<{}>;

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <VStack spacing={0}>{children}</VStack>
    </Container>
  );
};

export default Layout;
