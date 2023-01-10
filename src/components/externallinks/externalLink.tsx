import { Link, LinkProps, Icon } from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';

const ExternalLink = ({ children, ...linkProps }: LinkProps) => {
  return (
    <Link
      {...linkProps}
      color="teal.500"
      display="inline-flex"
      alignItems="center"
      target="_blank"
      isExternal
    >
      {children}
      <Icon as={FiArrowUpRight} color="gray.700" />
    </Link>
  );
};

export default ExternalLink;
