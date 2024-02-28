import axiosInstance from '../../../utils/axios';

const getCurhatan = async (page = 1, sortMethod) => {
  const list = await axiosInstance
    .get(`posts?sort=${sortMethod}&page=${page}`)
    .then((res) => res.data)
    .catch((err) => err.data.message);
  return list;
};

export default getCurhatan;
