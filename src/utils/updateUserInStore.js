import { useDispatch } from 'react-redux';
import { addUser } from './userSlice';

const updateUserInStore = (userData) => {
     
    const dispatch = useDispatch();
     
    dispatch(addUser(userData));
  };

export default updateUserInStore;
