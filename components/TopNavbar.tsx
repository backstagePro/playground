
import { AutoComplete } from 'antd';
import React from 'react';
import styles from '../styles/Topnavbar.module.css';

interface IProps {

}

const TopNavbar: React.FC<IProps> = ({ children }) => {

  return (
    <header className={styles.topNavBar}>
      <div className={styles.logo}>
        Playground
      </div>

      <div>
        <AutoComplete
          style={{width: '300px'}}
          placeholder="input here"
       />
      </div>

      {/* <nav>
        <ul className="">

        </ul>
      </nav> */}
    </header>
  );
}

export default TopNavbar;