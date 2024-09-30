import { usePostData } from '../hooks/usePostData';
import PostCard from './PostCard';
import Pagination from './Pagination';
import Loader from './Loader';

interface PostListProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const PostList: React.FC<PostListProps> = ({ currentPage, setCurrentPage }) => {
  const { posts, isLoading, isError } = usePostData(currentPage);

  if (isLoading) return <Loader />;
  if (isError) return <div>Error loading posts.</div>;

  return (
    <div>
      <div className="grid grid-cols-1 gap-4">
        {posts.map((post: { id: number; title: string; body: string }) => (
          <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
        ))}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default PostList;