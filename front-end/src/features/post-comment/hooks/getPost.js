import axiosInstance from "../../../utils/axios";

const getPost = async (id) => {
  try {
    const response = await axiosInstance.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error("Failed to fetch post");
  }
};

export default getPost;
