import Image from 'next/image';
import type { Post } from '../../types';  

interface PostProps {
  post: Post;
}

export function Post({ post }: PostProps): JSX.Element {
  return (
    <div className='w-full h-full flex gap-8 items-start mt-12'>
      <div className='flex-shrink-0 w-[167px] h-[130px] relative rounded-2xl overflow-hidden'>
        <Image
          src={post.imagePost}
          alt={post.imageDescription}
          fill
          className='rounded-2xl object-cover'
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
        />
      </div>
      <div className='flex-1 min-h-[130px] flex flex-col justify-between'>
        <div>
          <h1 className="font-semibold text-[15px] text-black mb-2">{post.title}</h1>
          <p className="text-zinc-700">{post.description}</p>
        </div>
        <div>
          <p className="font-bold text-zinc-500 text-sm">{post.author}</p>
        </div>
      </div>
    </div>
  );
}
