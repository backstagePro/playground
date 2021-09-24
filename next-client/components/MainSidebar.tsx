import styles from '../styles/Mainsidebar.module.css';
import Link from 'next/link'

export default function MainSidebar(){
  
  return (
    <aside className={styles.navbar}>
      <ul className={styles.navbarMenu}>
        <li>
          <Link href="/projects"> 
            <a>Projects</a> 
          </Link>
        </li>
      </ul>
    </aside>
  )
}
