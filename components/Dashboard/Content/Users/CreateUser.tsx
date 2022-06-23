import { useState, useRef} from 'react';
import styles from './userStyles/index.module.css';
import { Toaster} from 'react-hot-toast'
import Modal from '../../../Modal/Modal';
import {connect} from 'react-redux'
import {users} from '../../../../redux/actions/'
import { useNavigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import notificationStyles from '../../../../styles/divNotifications/divNotifications.module.css'
//Redux form
const createUser = users.createUser;

const CreateUser = (props : any) => {
    const navigate = useNavigate();
    const componentRef = useRef();
    //create ref to store the modal
    console.log("ref desde create user ")
    console.log(componentRef)
    //Checkbox
    const [adminCheckBox, setAdminCheckBox] = useState(false);
    const [moderatorCheckBox, setModeratorCheckBox] = useState(false);

    const setAdmin = (e:any) =>{
        console.log(e.target.checked);
        setAdminCheckBox(e.target.checked);
    }
    const setModerator = (e:any) =>{
        console.log(e.target.checked);
        setModeratorCheckBox(e.target.checked);
    }
    const onSubmit = (e:any) => {
            // e.preventDefault();
            console.log('valores del submit ')
            console.log(e);
            props.createUser(e)
    };
   
   
    return( 
        <>
            <Formik
                initialValues={{
                    ID_USUARIO : "",
                    NOMBRE_USER : "",
                    TELEFONO : "",
                    CORREO : '',
                    USER : '',
                    PASS : '',
                }}
                // validate = {(values)=>{
                //     let errores = {nombre_usuario : '', telefono : '', correo : '', usuario : '', password : ''};
                //     if(!values.nombre_usuario){
                //         errores.nombre_usuario =   'Ingresa un nombre pelao';
                //     }else if(!/^[0-9\s]{1,10}$/.test(values.telefono)){
                //         errores.telefono = "Por favor ingrese un num telefonico";
                //     }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.correo)){
                //         errores.correo =  "Por favor ingrese un correo electrónico válido"
                //     }else if(!values.usuario){
                //         errores.usuario = "Por favor ingrese un usuario"
                //     }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(values.password)){
                //         errores.password = "La contraseña debe tener mínimo 8 caracteres, máximo 15, al menos una letra mayúscula, una minúscula, un dígito, sin espacios en blanco,1 caracter especial";
                //     }
                //     return errores;
                //  }}
                onSubmit = {(values, {resetForm})=>{
                    props.createUser({...values, ID : 0, ESTADO : 1});
                    resetForm();
                }}
            >
                {
                    ({handleSubmit, values})=>
                    (
                       
                        <Modal ref={componentRef} title = {'Crear Usuario'} image = {'https://images.pexels.com/photos/8978449/pexels-photo-8978449.jpeg?cs=srgb&dl=pexels-meruyert-gonullu-8978449.jpg&fm=jpg'}>
                            <Form  className={styles.form} onSubmit={handleSubmit}>
                                <div  className={styles.form_container_left_right}>    
                                    <div className={styles.form_container}>
                                        <div className={styles.form_group}>
                                            <Field
                                                name='ID_USUARIO'
                                                type="text"
                                                className={styles.form_input}
                                                placeholder=""
                                                value={values.ID_USUARIO}
                                            />
                                            <label htmlFor="ID_USUARIO" className={styles.form_label}>Id de usuario</label>
                                            <span className={styles.form_line}></span>
                                            {/* {errors.id_usuario ?? <div className = {notificationStyles.error}>{errors.id_usuario}</div>} */}
                                        </div>
                                        <div className={styles.form_group}>
                                            <Field
                                                name='NOMBRE_USER'
                                                type="text"
                                                className={styles.form_input}
                                                placeholder=""
                                                value={values.NOMBRE_USER}
                                            />
                                            <label htmlFor="NOMBRE_USER" className={styles.form_label}>Nombres y apellidos de Usuario</label>
                                            <span className={styles.form_line}></span>
                                            {/* {errors.nombre_user ?? <div className = {notificationStyles.error}>{errors.nombre_user}</div>} */}
                                        </div>
                                        <div className={styles.form_group}>
                                            <Field
                                                name='TELEFONO'
                                                type="text"
                                                className={styles.form_input}
                                                placeholder=""
                                                value={values.TELEFONO}
                                            />
                                            <label htmlFor="TELEFONO" className={styles.form_label}>Telefono</label>
                                            <span className={styles.form_line}></span>
                                            {/* {errors.telefono ?? <div className = {notificationStyles.error}>{errors.telefono}</div>} */}
                                        </div>
                                        <div className={styles.form_group}>
                                            <Field
                                                name='CORREO'
                                                type="email"
                                                className={styles.form_input}
                                                placeholder=""
                                                value={values.CORREO}
                                            />
                                            <label htmlFor="CORREO" className={styles.form_label}>Correo</label>
                                            <span className={styles.form_line}></span>
                                            
                                            {/* {errors.correo ?? <div className = {notificationStyles.error}>{errors.correo}</div>} */}
                                        </div>
                                        <div className={styles.form_group}>
                                            <Field
                                                name='USER'
                                                type="text"
                                                className={styles.form_input}
                                                placeholder=""
                                                value={values.USER}
                                            />
                                            <label htmlFor="USER" className={styles.form_label}>Usuario</label>
                                            <span className={styles.form_line}></span>
                                            {/* {errors.usuario ?? <div className = {notificationStyles.error}>{errors.user}</div>} */}
                                        </div>

                                        <div className={styles.form_group}>
                                            <Field
                                                name='PASS'
                                                type="password"
                                                className={styles.form_input}
                                                placeholder=""
                                                value={values.PASS}
                                            />
                                            <label htmlFor="PASS" className={styles.form_label}>Password</label>
                                            <span className={styles.form_line}></span>
                                            {/* {errors.password ?? <div className = {notificationStyles.error}>{errors.password}</div>} */}
                                        </div>
                                        <div className={styles.form_group}>
                                            <span className={styles.select_label}>Roles</span>
                                            
                                            <div className = {styles.checkBoxContainer}>
                                                <div className= {styles.checkBoxVerticalContainer}>
                                                    <span>Administrador</span>
                                                    <span>Docente</span>
                                                </div>
                                                <div className={styles.checkBoxVerticalContainer}>
                                                <Field
                                                    name="ROL"
                                                    type="radio"
                                                    value={"ADMINISTRADOR"}
                                                />
                                                <Field
                                                    name="ROL"
                                                    type="radio"
                                                    value={"DOCENTE"}
                                                />
                                                     
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" className={styles.form_submit} value="Registrarse" />       
                            </Form>
                            <Toaster/>                 
                        </Modal>
                    )} 
            </Formik>
        </>
      )
}

// const formWrapped = reduxForm({
//     form : 'userCreate'
//   })(CreateUser)

export default connect(
    null,
    {createUser}
)(CreateUser)
// export default connect(
//     null,
//     {createUser}
// )(CreateUser)