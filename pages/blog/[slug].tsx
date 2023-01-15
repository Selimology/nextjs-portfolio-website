import { BlogPost } from '@/types/blogs';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getBlogPost } from 'src/utils/get-blog-post';
import { readBlogPost } from 'src/utils/read-blog-post';

type Props = BlogPost & {
  source: MDXRemoteSerializeResult;
};

const BlogPost = ({ title, date, source }: Props) => {
  return <MDXRemote {...source} components={{}} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getBlogPost();

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params.slug as string;

  const postContent = await readBlogPost(slug);
  const {
    content,
    data: { title, description, date },
  } = matter(postContent);

  return {
    props: {
      source: await serialize(content),
      title,
      description,
      date,
      slug,
    },
  };
};

export default BlogPost;
