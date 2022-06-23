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
    dispatch({type: 'FETCH_USERS', payload: response.data});
};

export const createUser = (formValues: any) => async (dispatch:any) => {
    console.log('valores desde el action')
    console.log(formValues)
    EscuelaApiWhatsappServer.post('/usuarios', formValues)
            .then(res => {
                console.log(res);
                toast.success('Usuario creado con éxito', {
                    position: 'top-center',
                });
                dispatch({type: 'CREATE_USER', payload: res.data.user});

            })
}

export const editUser = (userId :any, formValues : any) => async (dispatch:any) => {
    console.log('valores desde el action')
    console.log(formValues)
    EscuelaApiWhatsappServer.put(`/usuarios/${userId}`, formValues)
        .then(res => {
            console.log(res);
            toast.success('Usuario editado con éxito', {
                position: 'top-center',
            });
            dispatch({type: 'EDIT_USER', payload: res.data.user});

        })
}

export const deleteUser = (tableId:any, ID_USUARIO : any) => async (dispatch:any) => {
    EscuelaApiWhatsappServer.delete(`/usuarios/${tableId}`)
    .then(res => {
        console.log(res);
        dispatch({type: 'DELETE_USER', payload: ID_USUARIO});
        toast.success('Usuario eliminado correctamente', {
            position: 'top-center'
        })
    }
    )
    .catch(err => {
        console.log(err);
        toast.error('Error al eliminar el usuario', {
            position: 'top-center'
        })
    }
    )
}