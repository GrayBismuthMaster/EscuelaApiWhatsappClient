import styles from './userStyles/index.module.css';
import { Toaster} from 'react-hot-toast'
import Modal from '../../../Modal/Modal';
import { useLocation} from 'react-router-dom';
import { connect } from 'react-redux';
import { users } from '../../../../redux/actions';
const  deleteUser = users.deleteUser
const DeleteUser = ({deleteUser }:any) => {
    
    const location = useLocation();
    //const params = useParams();
    console.log('location desde edit')
    console.log(location.state)
    const {ID, NOMBRE_USER, ID_USUARIO} = (location.state as any).datosFila;
    
  return (
        <Modal title = {'Eliminar Usuario'} image = {'https://images.pexels.com/photos/2882553/pexels-photo-2882553.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-2882553.jpg&fm=jpg'}>
            <p>¿Estás seguro de eliminar el usuario {NOMBRE_USER}</p>
            <div className = {styles.buttonContainer}>
                <button onClick = {() => {
                    deleteUser(ID, ID_USUARIO)
                }}
                
                className = {styles.deleteButton}
                >
                    Eliminar
                </button>
            </div>
            <Toaster/>
        </Modal>

  );
};
export default connect(
    null,
    {deleteUser}
)(DeleteUser)