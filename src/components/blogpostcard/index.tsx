import { BlogPost } from '@/types/blogs';
import {
  HStack,
  VStack,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

const BlogPostCard = ({ date, slug, title, description }: BlogPost) => {
  return (
    <>
      <LinkBox as="article">
        <VStack w="full" alignItems="stretch">
          <HStack justify="space-between">
            <Link href={`/blog/${slug}`} passHref>
              <LinkOverlay href={`/blog/${slug}`}>
                <Heading size="sm">{title}</Heading>
              </LinkOverlay>
            </Link>
            <Text fontSize="sm" color="gray.500">
              {date}
            </Text>
          </HStack>
          <Text noOfLines={[1, 2, 3]}>{description || 'No description'}</Text>
        </VStack>
      </LinkBox>
    </>
  );
};

export default BlogPostCard;
