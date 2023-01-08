import ExternalLink from '@/components/externalLink';
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
  {
    href: TWITTER_PROFILE,
    label: 'Twitter',
    color: 'twitter',
  },
  {
    href: RESUME_LINK,
    label: 'Resume',
    color: 'github',
  },
];

export default function Home() {
  return (
    <VStack spacing={20}>
      <Stack spacing={8} direction={{ base: 'column-reverse', md: 'row' }}>
        <VStack spacing={2} alignItems="flex-start">
          <Heading size="xl" pb={0}>
            Kamil Ertekin.
          </Heading>
          <Heading size="md" fontWeight={'bold'}>
            Frontend Developer
          </Heading>
          <Text lineHeight="175%">
            Passionate about building modern, responsive, and user-friendly
            websites from scratch. My skills and experience allow me to create
            dependable web experiences that exceed expectations.
          </Text>

          <HStack spacing={4}>
            {socialLinks.map(({ href, label, color }) => (
              <Button
                as={Link}
                href={href}
                target="_blank"
                color={color}
                variant="ghost"
                rightIcon={<Icon as={FiArrowUpRight} />}
                key={href}
              >
                {label}
              </Button>
            ))}
          </HStack>
        </VStack>
        <ProfileAvatar />
      </Stack>
    </VStack>
  );
}
