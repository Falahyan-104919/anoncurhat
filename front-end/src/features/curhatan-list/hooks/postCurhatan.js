import axiosInstance from '@/utils/axios';

const postCurhatan = async (values) => {
  const res = await axiosInstance
    .post('posts', values)
    .then((res) => res.data)
    .catch((err) => err.response);
  return res;
};

export { postCurhatan };
