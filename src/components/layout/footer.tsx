import { Stack, VStack, Divider, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { LinkProps } from 'src/types/links';

import {
  LINKEDIN_PROFILE,
  GITHUB_PROFILE,
  TWITTER_PROFILE,
  YOUTUBE_PROFILE,
} from '../../constants';

const firstLinks: LinkProps[] = [
  {
    href: '/',
    label: 'Home',
  },

  {
    href: '/blog',
    label: 'Blog',
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
    href: YOUTUBE_PROFILE,
    label: 'YouTube',
  },
  {
    href: GITHUB_PROFILE,
    label: 'Github',
  },
];

const thirdLinks: LinkProps[] = [
  {
    href: '/contact',
    label: 'Contact',
  },
  {
    href: '/about',
    label: 'About',
  },
];

const Footer = () => {
  const { pathname } = useRouter();

  return (
    <VStack pb={8} alignItems="flex-start" spacing={8}>
      <Divider />
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        w="full"
        spacing={{ base: 4, md: 8 }}
      >
        <VStack alignItems="flex-start">
          {firstLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              color={pathname === href ? 'teal.500' : 'gray.500'}
            >
              {label}
            </Link>
          ))}
        </VStack>
        <VStack alignItems="flex-start">
          {secondLinks.map(({ href, label }) => (
            <Link
              href={href}
              key={href}
              isExternal={href.startsWith('http')}
              target="_blank"
              color="gray.500"
            >
              {label}
            </Link>
          ))}
        </VStack>

        <VStack alignItems="flex-start">
          {thirdLinks.map(({ href, label }) => (
            <Link
              href={href}
              key={href}
              color={pathname === href ? 'teal.500' : 'gray.500'}
            >
              {label}
            </Link>
          ))}
        </VStack>
      </Stack>
    </VStack>
  );
};

export default Footer;
