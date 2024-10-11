import { Post } from '../Post/Post';
import { Post as PostType } from '../../types';
interface FeedProps {
  posts: PostType[];
}
export function Feed({ posts }: FeedProps) {
  return (
    <>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </>
  );
}