import { getCollection } from 'astro:content';

export const getPostEntries = async () => {
  const postEntries = await getCollection('posts');
  return postEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: {
      entry: {
        ...entry,
        data: {
          ...entry.data,
        },
      },
    },
  }));
};

const posts = await getPostEntries();
export type Post = (typeof posts)[0];
