import { FaGithub } from 'react-icons/fa';
import { FiX } from "react-icons/fi";
import { signIn, useSession,signOut } from "next-auth/react";
import style from "./style.module.scss";


export default function SignInButton() {

    const {data: session} = useSession()

    console.log(useSession())
  
    return session?(
        <button 
        type='button'
        className={style.signInButton}
        onClick ={() => signOut()}>
            <FaGithub color='#04d361'/>
            {session.user.name}
            <FiX  color='#737380' className={style.closeIcon}/>
        </button>
    

    ) :(
        <button 
        type='button'
        className={style.signInButton}
        onClick={()=>signIn('github')}
        >
            
            <FaGithub color='#eba417'/>
            Sing in with GitHub
        </button>
    
    
    
   
    )
    
        
    }
