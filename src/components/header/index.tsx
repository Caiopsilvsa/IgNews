import { SingInButton } from '../signInButton'
import styles from './styles.module.scss'

export function Header(){
    return(
            
         <header className={styles.container}>
             <div className={styles.content}>
                 <img src="../images/logo.svg" alt="IgnewsLogo"></img>
                 <ul>
                     <a className={styles.active}>Home</a>
                     <a>Posts</a>
                     <SingInButton  /> 
                 </ul>
                
             </div>
         </header>    

    )
}
 
