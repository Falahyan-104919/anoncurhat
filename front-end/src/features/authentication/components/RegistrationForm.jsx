import { useState } from 'react';
import axiosInstance from '@/utils/axios';
import { useToast } from '@/components/ui/use-toast';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    gender: '',
    date_of_birth: '',
  });
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetFormData = () => {
    setFormData({
      username: '',
      password: '',
      gender: '',
      date_of_birth: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('users', formData);
      resetFormData();
      return toast({
        title: 'Registration Successfull',
        variant: 'success',
      });
    } catch (error) {
      return toast({
        title: 'Registration Failed',
        description: `${error.response.data.message}`,
        variant: 'error',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="username" className="block mb-1 text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1 text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block mb-1 text-gray-700">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="date_of_birth" className="block mb-1 text-gray-700">
          Birth Date
        </label>
        <input
          type="date"
          id="date_of_birth"
          name="date_of_birth"
          value={formData.date_of_birth}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
      >
        Register
      </button>
    </form>
  );
}
