//Redux
import styles from './Home.module.css';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
const Home =  ({nombre, rol}:any) =>{

    
    if(rol === 'ADMINISTRADOR'){
        return(
            <div style = {{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '5%'
            }}>
                <div className= {styles.container}>
                    <div className={styles.card}>
                        <h2 className={styles.card_title}>Usuarios</h2>
                        <ul 
                            className={styles.card_list}
                        >
                            <Link to="/users">
                                <img 
                                    src = 'https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?cs=srgb&dl=pexels-ali-pazani-2777898.jpg&fm=jpg'
                                    alt = 'Usuarios'
                                    className = {styles.img}
                                />
                            </Link>
                        </ul>
                    </div>
                    
                </div>
                
            </div>
        )
    } else if(rol === 'DOCENTE'){
        console.log("entra con ds")
        return (
            <div className= {styles.container}>
                <div className={styles.card}>
                    <h2 className={styles.card_title}>Reserva de Citas</h2>
                    <ul 
                        className={styles.card_list}
                    >
                        <Link to="/reserva-citas">
                            <img 
                                src = 'https://images.pexels.com/photos/6408282/pexels-photo-6408282.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                                alt = 'Reserva de citas'
                                className = {styles.img}
                            />
                        </Link>
{/*                         
                        <li></li>
                        <li></li> */}
                        
                    </ul>
                </div>
                <div className={styles.card}>
                <h2 className={styles.card_title}>Estadísticas</h2>
                    <ul 
                        className={styles.card_list}
                    >
                        <Link to="/statistics">
                            <img 
                                src = 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                                alt = 'Estadísticas'
                                className = {styles.img}
                            />
                        </Link>
{/*                         
                        <li></li>
                        <li></li> */}
                        
                    </ul>
                </div>
                <div className={styles.card}>
                <h2 className={styles.card_title}>Perfil</h2>
                    <ul 
                        className={styles.card_list}
                    >
                        <Link to="/profile">
                            <img 
                                src = 'https://images.pexels.com/photos/4549407/pexels-photo-4549407.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                                alt = 'Perfil'
                                className = {styles.img}
                            />
                        </Link>
{/*                         
                        <li></li>
                        <li></li> */}
                        
                    </ul>
                </div>

            </div>
        )
    }else{
        return null
    }
}

const mapStateToProps = (state:any) =>{
    
        return {
            nombre : state.auth.userData.NOMBRE_USER,
            rol : state.auth.userData.ROL,
        }
    
}

export default connect(
    mapStateToProps,
)(Home);