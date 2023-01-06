import { Stack, VStack, Divider, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import {
  LINKEDIN_PROFILE,
  GITHUB_PROFILE,
  TWITTER_PROFILE,
  YOUTUBE_PROFILE,
} from '../../constants';

const firstLinks = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/about',
    label: 'About',
  },
];

const secondLinks = [
  {
    href: TWITTER_PROFILE,
    label: 'Twitter',
  },
  {
    href: LINKEDIN_PROFILE,
    label: 'LinkedIn',
  },
  {
    href: GITHUB_PROFILE,
    label: 'GitHub',
  },
  // {
  //   href: YOUTUBE_PROFILE,
  //   label: 'YouTube',
  // },
];
const Footer = () => {
  const { pathname } = useRouter();

  return (
    <VStack pb={8} spacing={8}>
      <Divider />

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-evenly"
        w="full"
        spacing={{ base: 4, md: 8 }}
      >
        <VStack alignItems="flex-start">
          {firstLinks.map(({ href, label }) => (
            <NextLink href={href} passHref key={href}>
              <Link color={pathname === href ? 'teal.500' : 'gray.500'}>
                {label}
              </Link>
            </NextLink>
          ))}
        </VStack>
        <VStack alignItems="flex-start">
          {secondLinks.map(({ href, label }) => (
            <NextLink href={href} passHref key={href}>
              <Link isExternal target="_blank" color="gray.500">
                {label}
              </Link>
            </NextLink>
          ))}
        </VStack>
      </Stack>
    </VStack>
  );
};

export default Footer;
