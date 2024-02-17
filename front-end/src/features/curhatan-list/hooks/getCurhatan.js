import { useLocation } from 'react-router-dom';
import axiosInstance from '../../../utils/axios';

const getCurhatan = async (page = 1) => {
  const list = await axiosInstance
    .get(`posts?page=${page}`)
    .then((res) => res.data)
    .catch((err) => err.data.message);
  return list;
};

export default getCurhatan;
