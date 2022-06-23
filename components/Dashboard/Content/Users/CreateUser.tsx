import { useState, useRef} from 'react';
import styles from './userStyles/index.module.css';
import { Toaster} from 'react-hot-toast'
import Modal from '../../../Modal/Modal';
import {connect} from 'react-redux'
import {users} from '../../../../redux/actions/'
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
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
                    nombre_usuario : "",
                    telefono : "",
                    correo : '',
                    usuario : '',
                    password : '',
                    
                }}
                validate = {(values)=>{
                    let errores = {nombre_usuario : '', telefono : '', correo : ''};
                    console.log(values.correo);
                    if(!values.nombre_usuario){
                        errores.nombre_usuario =   'Ingresa un nombre pelao';
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.telefono)){
                        errores.telefono = "Por favor ingrese un num telefonico";
                    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.correo)){
                        console.log("errors")
                        errores.correo =  "Essto es"
                    }
                    return errores;
                 }}
                onSubmit = {(values)=>{
                    console.log('formulario enviado', values)
                }}
            >
                {
                    ({handleSubmit, values, handleChange, handleBlur, errors})=>
                    (
                       
                        <Modal ref={componentRef} title = {'Crear Usuario'} image = {'https://images.pexels.com/photos/8978449/pexels-photo-8978449.jpeg?cs=srgb&dl=pexels-meruyert-gonullu-8978449.jpg&fm=jpg'}>
                            <form  className={styles.form} name="formulario" onSubmit={handleSubmit}>
                                <div  className={styles.form_container_left_right}>    
                                    <div className={styles.form_container}>
                                        <div className={styles.form_group}>
                                            <input
                                                name='nombre_usuario'
                                                type="text"
                                                className={styles.form_input}
                                                placeholder=""
                                                value={values.nombre_usuario}
                                                onChange = {handleChange}
                                                onBlur = {handleBlur}
                                            />
                                            <label htmlFor="text" className={styles.form_label}>Nombres y apellidos de Usuario</label>
                                            <span className={styles.form_line}></span>
                                            {<div className = {notificationStyles.error}>{errors.nombre_usuario}</div>}
                                        </div>
                                        <div className={styles.form_group}>
                                            <input
                                                name='telefono'
                                                type="text"
                                                className={styles.form_input}
                                                placeholder=""
                                                value={values.telefono}
                                                onChange = {handleChange}
                                                onBlur = {handleBlur}
                                            />
                                            <label htmlFor="telefono" className={styles.form_label}>Telefono</label>
                                            <span className={styles.form_line}></span>
                                            {<div className = {notificationStyles.error}>{errors.telefono}</div>}
                                        </div>
                                        <div className={styles.form_group}>
                                            <input
                                                name='correo'
                                                type="email"
                                                className={styles.form_input}
                                                placeholder=""
                                                value={values.correo}
                                                onChange = {handleChange}
                                                onBlur = {handleBlur}
                                            />
                                            <label htmlFor="correo" className={styles.form_label}>Correo</label>
                                            <span className={styles.form_line}></span>
                                            
                                            {<div className = {notificationStyles.error}>{errors.correo}</div>}
                                        </div>
                                        <div className={styles.form_group}>
                                            <input
                                                name='usuario'
                                                type="text"
                                                className={styles.form_input}
                                                placeholder=""
                                                value={values.usuario}
                                                onChange = {handleChange}
                                                onBlur = {handleBlur}
                                            />
                                            <label htmlFor="usuario" className={styles.form_label}>Usuario</label>
                                            <span className={styles.form_line}></span>
                                        </div>

                                        <div className={styles.form_group}>
                                            <input
                                                name='password'
                                                type="password"
                                                className={styles.form_input}
                                                placeholder=""
                                                value={values.password}
                                                onChange = {handleChange}
                                                onBlur = {handleBlur}
                                            />
                                            <label htmlFor="password" className={styles.form_label}>Password</label>
                                            <span className={styles.form_line}></span>
                                        </div>
                                        <div className={styles.form_group}>
                                            <span className={styles.select_label}>Roles</span>
                                            
                                            <div className = {styles.checkBoxContainer}>
                                                <div className= {styles.checkBoxVerticalContainer}>
                                                    <span>Administrador</span>
                                                    <span>Docente</span>
                                                </div>
                                                <div className={styles.checkBoxVerticalContainer}>
                                                <input
                                                    name='checkboxAdmin'
                                                    type="checkbox"
                                                    // value={values.checkBoxAdmin}
                                                    onChange = {handleChange}
                                                    onBlur = {handleBlur}

                                                    // className={styles.form_input}
                                                    // placeholder=""
                                                />
                                                <input
                                                    name='checkboxModerator'
                                                    type="checkbox"
                                                    // value={values.checkboxModerador}
                                                    onChange = {handleChange}
                                                    onBlur = {handleBlur}

                                                    // className={styles.form_input}
                                                    // placeholder=""
                                                />
                                                    {/* <input type="checkbox" id="checkBox_admin" name = "checkBox_admin" onChange={setAdmin} ></input>
                                                    <input type="checkbox" id="checkBox_moderator" name = "checkBox_moderator" onChange={setModerator} ></input> */}
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" className={styles.form_submit} value="Registrarse" />       
                            </form>
                            <Toaster/>                 
                        </Modal>
                    )
                } 
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