import toast from 'react-hot-toast'
import EscuelaApiWhatsappServer from "../../apis/EscuelaApiWhatsappServer";

export const fetchUser = (user:any) => async (dispatch:any) =>{
    if(!user){
        return null;
    }
    const response = await EscuelaApiWhatsappServer.get(`/usuarios/${user._id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});    
    
};
export const fetchUsers = () => async (dispatch:any) =>{
    const response = await EscuelaApiWhatsappServer.get(`/usuarios/`);
    // console.log('respuesta desde action fetch use')
    // console.log(response.data)
    dispatch({type: 'FETCH_USERS', payload: response.data});
};

export const createUser = (formValues: any) => async (dispatch:any) => {
    // console.log('valores desde el action')
    // console.log(formValues)
    // const data = new FormData();
    // if ( formValues.imagen ) {
    //     data.append( 'avatar', formValues.imagen, formValues.imagen.name );            
    //     DraBettyGarzonServer.post( '/uploads/profile', data, {
    //         headers: {
    //             'accept': 'application/json',
    //             'Accept-Language': 'en-US,en;q=0.8',
    //             'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
    //         }
    //     })
    //     .then( ( response ) => {if ( 200 === response.status ) {
    //         const datos = {
    //             nombre: formValues.nombre ? formValues.nombre : '',
    //             cedula : formValues.cedula ? formValues.cedula : '',
    //             fecha_nacimiento : formValues.fecha_nacimiento ? formValues.fecha_nacimiento : new Date(),
    //             sexo : formValues.sexo ? formValues.sexo : '',
    //             estado_civil : formValues.estadoCivil ? formValues.estadoCivil : '',
    //             religion : formValues.religion ? formValues.religion : '',
    //             ocupacion : formValues.ocupacion ? formValues.ocupacion : '',
    //             lugar_nacimiento : formValues.lugarNacimiento ? formValues.lugarNacimiento : '',
    //             residencia : formValues.residencia ? formValues.residencia : '',
    //             domicilio : formValues.domicilio ? formValues.domicilio : '',
    //             telefono : formValues.telefono ? formValues.telefono : '',
    //             estado : 1,
    //             imagen : response.data.url,
    //             username : formValues.username ? formValues.username : '',
    //             email : formValues.email ? formValues.email : '',
    //             password : formValues.password ? formValues.password : '',
    //             roles : formValues.checkboxAdmin ? ['admin'] : ['moderator'],
    //         }

    //         DraBettyGarzonServer.post('/usuarios', datos)
    //         .then(res => {
    //             toast.success('Usuario creado con éxito', {
    //                 type: 'success',
    //                 position: 'top-center',
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             });
    //             dispatch({type: 'CREATE_USER', payload: res.data.datosUsuarioCreado});

    //         }) 
    //     }})
    // }
}

export const editUser = (userId :any, formValues : any) => async (dispatch:any) => {
    // console.log('user desde actions edit')
    // console.log(userId);

    // DraBettyGarzonServer.put(`/usuarios/${userId}`, formValues)
    // .then(res => {
    //     toast.success('Usuario editado con éxito', {
    //         type: 'success',
    //         position: 'top-center',
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //     });
    //     dispatch({type: 'EDIT_USER', payload: res.data});

    // }) 
}

export const deleteUser = (userId:any) => async (dispatch:any) => {
    // DraBettyGarzonServer.delete(`/usuarios/${userId}`)
    // .then(res => {
    //     console.log(res);
    //     dispatch({type: 'DELETE_USER', payload: userId});
    //     toast.success('Usuario eliminado correctamente', {
    //         position: 'top-center'
    //     })
    // }
    // )
    // .catch(err => {
    //     console.log(err);
    //     toast.error('Error al eliminar el usuario', {
    //         position: 'top-center'
    //     })
    // }
    // )
}