import { promises as fs } from 'fs';
import path from 'path';

export const readBlogPost = async (slug: string) => {
  const postPath = path.join(process.cwd(), './blogposts', `${slug}.mdx`);

  return await fs.readFile(postPath, 'utf8');
};
