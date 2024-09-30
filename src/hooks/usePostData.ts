import useSWR from "swr"
import { getPostById, getPosts } from "../api/JsonPlaceholder"


export const usePostData = (page: number) => {

    const {data, error} = useSWR(['/posts', page], () => getPosts(page));

    return {
        posts: data,
        isLoading: !error && !data,
        isError: error
    }

}

export const usePostDetails = (postId: number) => {
    const { data, error } = useSWR(postId ? `/posts/${postId}` : null, () => getPostById(postId));
  
    return {
      post: data ? {
        ...data,
        author: data.author || 'Unknown',
        createdAt: data.createdAt || new Date().toISOString(),
        commentCount: data.commentCount || 0,
        likes: data.likes || 0,
      } : null,
      isLoading: !error && !data,
      isError: error
    }
  }