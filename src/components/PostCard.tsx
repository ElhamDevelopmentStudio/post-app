import { usePostStore } from "../store/PostStore";


interface PostCardProps {
  id: number;
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, body }) => {
  const setSelectedPostId = usePostStore((state) => state.setSelectedPostId);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 border hover:shadow-lg cursor-pointer" onClick={() => setSelectedPostId(id)}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{body.substring(0, 100)}...</p>
      <button className="mt-4 text-blue-500">Read more</button>
    </div>
  );
};

export default PostCard;