import { GetStaticProps } from 'next';
import React, { ChangeEventHandler } from 'react';
import {
  Heading,
  Text,
  Input,
  InputGroup,
  VStack,
  Icon,
  List,
  ListItem,
  InputLeftElement,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { BlogPost } from '@/types/blogs';
import { getBlogPost } from 'src/utils/get-blog-post';
import BlogPostCard from '@/components/blogpostcard';

type Props = {
  posts: BlogPost[];
};

const Blog = ({ posts }: Props) => {
  //search feature
  const [displayPosts, setDisplayPosts] = useState<BlogPost[]>(posts);

  const onSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    const searchQuery = e.currentTarget.value.toLowerCase();

    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery)
    );

    setDisplayPosts(filteredPosts);
  };

  return (
    <>
      <VStack spacing={3} alignItems="flex-start" w="full">
        <Heading size="md" fontWeight={'bold'}>
          Blog.
        </Heading>
        <Text lineHeight="175%">
          I have just recently started blogging about my experience and
          learnings, mostly about topics related to web development, data
          structure and careers in technology. You can use the search feature to
          filter through my posts by title.
        </Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={FiSearch} color="gray.500" />
          </InputLeftElement>
          <Input
            placeholder="Search by title"
            variant="filled"
            onChange={onSearch}
          />
        </InputGroup>
      </VStack>
      <List spacing={12} w="full">
        {displayPosts.map((post) => (
          <ListItem key={post.slug}>
            {' '}
            <BlogPostCard {...post} />
          </ListItem>
        ))}
      </List>
      {displayPosts.length === 0 && <Text>No posts found</Text>}
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getBlogPost();
  const props: Props = {
    posts,
  };

  return {
    props,
  };
};

export default Blog;
