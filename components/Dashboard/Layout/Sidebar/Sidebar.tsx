import React, { useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Sidebar.module.css';
import HomeIcon from '@mui/icons-material/Home';
import LineStyleIcon from '@mui/icons-material/LineStyle'
import PersonIcon from '@mui/icons-material/Person';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import MedicationIcon from '@mui/icons-material/Medication';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import PendingIcon from '@mui/icons-material/Pending';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import {connect} from 'react-redux'
const Sidebar = (props:any) => {
    console.log("props desde sidebar dentro")
    console.log(props)
    useEffect(() => {
        return () => {
            // effects.forEach(effect => effect.cancel());
        };
    }, [])
    const activo = (activado:any)=>{
        if(activado){
            if(activado.isActive){
                return `${styles.navLink} ${styles.active}`
            }
            else{
                return styles.navLink
            }
        }
        
    }
    //MANEJO DE ROLES EN EL SIDEBAR
    if(props.rol === 'user'){
        return (
            <div className={styles.sidebar}>
                <div className={styles.sidebar_wrapper}>
                    <div className={styles.sidebar_menu}>
                        <h1 className={styles.sidebar_title}>
                            Dashboard
                        </h1>
                        <ul className={styles.sidebar_list}>
                        <li className={styles.sidebar_list_item}>
                                <HomeIcon className={styles.sideBarIcon}/>
                                <NavLink className={activo}  to='/home'>Home</NavLink>
                            </li>
                            <li className={styles.sidebar_list_item}>
                                <AccountCircleIcon className={styles.sideBarIcon}/>
                                <NavLink className={activo}  to='/profile'>Perfil</NavLink>
                            </li>
                            <li className={styles.sidebar_list_item}>
                                <AnalyticsIcon className={styles.sideBarIcon}/>
                                <NavLink className={activo}  to='/statistics'>Estadísticas</NavLink>
                            </li>
                            <li className={styles.sidebar_list_item}>
                                <InsertInvitationIcon className={styles.sideBarIcon}/>
                                <NavLink className={activo} to='/reserva-citas'>Reserva de Citas</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.sidebar_menu}>
                        <h1 className={styles.sidebar_title}>
                            Menú de Acceso Rápido
                        </h1>
                        <ul className={styles.sidebar_list}>
                            <li className={styles.sidebar_list_item}>
                                <InsertInvitationIcon className={styles.sideBarIcon}/>
                                <NavLink className={activo} to='/reserva-citas'>Reserva de Citas</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className={styles.sidebar}>
                <div className={styles.sidebar_wrapper}>
                    <div className={styles.sidebar_menu}>
                        <h1 className={styles.sidebar_title}>
                            Dashboard
                        </h1>
                        <ul className={styles.sidebar_list}>
                            <li className={styles.sidebar_list_item}>
                                <HomeIcon className={styles.sideBarIcon}/>
                                <NavLink className={activo}  to='/home'>Home</NavLink>
                            </li>
                            <li className={styles.sidebar_list_item}>
                                <PersonIcon className={styles.sideBarIcon}/>
                                <NavLink className={activo} to='/users'>Usuarios</NavLink>
                            </li>
                            <li className={styles.sidebar_list_item}>
                                <AnalyticsIcon className={styles.sideBarIcon}/>
                                <NavLink className={activo} to='/statistics'>Estadísticas</NavLink>
                            </li>
                            <li className={styles.sidebar_list_item}>
                                <MedicationIcon className={styles.sideBarIcon}/>
                                <NavLink className={activo} to='/docs'>Documentos</NavLink>
                            </li>
                            <li className={styles.sidebar_list_item}>
                                <InsertInvitationIcon className={styles.sideBarIcon}/>
                                <NavLink className={activo} to='/reserva-citas'>Reserva de Citas</NavLink>
                           
                            </li>
                        </ul>
                    </div>
                    <div className={styles.sidebar_menu}>
                        <h1 className={styles.sidebar_title}>
                            Menú de Acceso Rápido
                        </h1>
                        <ul className={styles.sidebar_list}>
                            <li className={styles.sidebar_list_item}>
                                <HistoryEduIcon className={styles.sideBarIcon}/>
                                <NavLink className={activo} to="/historias-clinicas">Historias Clínicas</NavLink>
                            </li>
                            <li className={styles.sidebar_list_item}>
                                <LineStyleIcon className={styles.sideBarIcon}/>
                                 <NavLink className={activo} to="/protocolos-operatorios">Protocolos Operatorios</NavLink>
                            </li>
                            <li className={styles.sidebar_list_item}>
                                <PendingIcon className={styles.sideBarIcon}/>
                                <NavLink className={activo} to="/epicrisises">Epicrisis</NavLink>
                            </li>
                            <li className={styles.sidebar_list_item}>
                                <DoneAllIcon className={styles.sideBarIcon}/>
                                <NavLink className={activo} to="/consentimientos">Consentimientos</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state:any) =>{
    if(state.auth.userData!==null)
    {
        console.log("state desde sidebar ")
        console.log(state);
        return {
            rol : state.auth.userData.roles[0].nombreRol
        }
    }else{
        
        return {
            rol : "user"
        }
    }
}

export default connect(
    mapStateToProps
)(Sidebar);
