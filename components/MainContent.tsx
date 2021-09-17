
import styles from '../styles/Maincontent.module.css';

interface IProps {

}

const MainContent: React.FC<IProps> = ({ children }) => {

  return (
    <main className={styles.mainContent}>{children}</main>
  );
}

export default MainContent;