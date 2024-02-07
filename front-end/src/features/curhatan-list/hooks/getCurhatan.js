import axiosInstance from '../../../utils/axios';

const getCurhatan = async () => {
  const list = await axiosInstance
    .get('posts')
    .then((res) => res.data)
    .catch((err) => err.data.message);
  return list;
};

export default getCurhatan;
