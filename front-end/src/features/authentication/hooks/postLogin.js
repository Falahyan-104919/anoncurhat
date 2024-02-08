import axiosInstance from '@/utils/axios';

const postLogin = async (username, password) => {
  const res = await axiosInstance
    .post('auth/login', {
      username: username,
      password: password,
    })
    .then((res) => console.log(res.data))
    .catch((err) => err.data.message);
  return res;
};

export default postLogin;
