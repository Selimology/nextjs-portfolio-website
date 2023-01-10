import ExternalLink from '@/components/externallinks/externalLink';
import {
  VStack,
  HStack,
  Text,
  Link,
  Stack,
  Heading,
  Button,
  Icon,
} from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';
import { LinkProps } from '@/types/links';
import ProfileAvatar from '@/components/profileavatar';

import {
  LINKEDIN_PROFILE,
  GITHUB_PROFILE,
  TWITTER_PROFILE,
  RESUME_LINK,
} from 'src/constants';

type socialLinksProps = LinkProps & { color: string };

const socialLinks: socialLinksProps[] = [
  {
    href: GITHUB_PROFILE,
    label: 'Github',
    color: 'github',
  },
  {
    href: LINKEDIN_PROFILE,
    label: 'LinkedIn',
    color: 'linkedin',
  },
  // {
  //   href: TWITTER_PROFILE,
  //   label: 'Twitter',
  //   color: 'twitter',
  // },
  {
    href: RESUME_LINK,
    label: 'Resume',
    color: 'github',
  },
];

const HeroSection = () => {
  return (
    <Stack
      alignItems="center"
      spacing={8}
      direction={{ base: 'column-reverse', md: 'row' }}
      w="full"
    >
      <VStack w="full" spacing={3} alignItems="flex-start">
        <Stack w="full" alignItems={{ base: 'center', md: 'flex-start' }}>
          <Heading size="xl" pb={0}>
            Kamil Ertekin.
          </Heading>
          <Heading size="md" fontWeight={'bold'}>
            Frontend Developer
          </Heading>
        </Stack>

        <Text lineHeight="175%">
          Passionate about building modern, responsive, and user-friendly
          websites from scratch. My skills and experience allow me to create
          dependable web experiences that exceed expectations.
        </Text>

        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          {socialLinks.map(({ href, label, color }) => (
            <Button
              as={Link}
              href={href}
              target="_blank"
              color={color}
              variant="ghost"
              px={{ base: 0, md: 4 }}
              justifyContent={{ base: 'flex-start', md: 'center' }}
              rightIcon={<Icon as={FiArrowUpRight} />}
              key={href}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </VStack>
      <ProfileAvatar />
    </Stack>
  );
};

export default HeroSection;
