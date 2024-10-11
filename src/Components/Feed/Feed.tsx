import { FC } from 'react';
import { Post as PostType } from '../../types';
import { Post } from '../Post/Post';

interface FeedProps {
  posts: PostType[];
}

export const Feed: FC<FeedProps> = ({ posts }) => {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Post key={post.title} post={post} />
      ))}
    </div>
  );
};
