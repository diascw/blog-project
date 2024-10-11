import { FC } from 'react';
import Image from 'next/image';
import { Post as PostType } from '../../types';

interface PostProps {
  post: PostType;
}

export const Post: FC<PostProps> = ({ post }) => {
  return (
    <div className="mb-6">
      <Image
        src={post.imagePost}
        alt={post.imageDescription}
        width={500}
        height={300}
        layout="responsive"
        className="rounded-lg"
      />
      <h2 className="mt-4 text-2xl font-bold">{post.title}</h2>
      <p className="mt-2 text-gray-700">{post.description}</p>
      <p className="mt-2 text-gray-500">{post.author}</p>
    </div>
  );
};
