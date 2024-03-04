import axiosInstance from "@/utils/axios";

const postComments = async (values) => {
  const res = await axiosInstance
    .post("Comments", values)
    .then((res) => res.data)
    .catch((err) => err.response);
  return res;
};

export { postComments };
