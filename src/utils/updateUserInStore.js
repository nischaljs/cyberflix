import { useDispatch } from 'react-redux';
import { addUser } from './userSlice';

const updateUserInStore = (userData) => {
    debugger
    const dispatch = useDispatch();
    debugger
    dispatch(addUser(userData));
    console.log('user updated');
  };

export default updateUserInStore;
