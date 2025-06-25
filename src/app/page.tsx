import { SpinLoader } from '@/components/SpinLoader';
import { postRepository } from '@/repositories/post';

export default async function HomePage() {
  const posts = await postRepository.findAll();

  return (
    <div>
      <SpinLoader className={'min-h-[500PX] bg-amber-500'} />
    </div>
  );
}
