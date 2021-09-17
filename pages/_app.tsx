import '../styles/globals.css'
import type { AppProps } from 'next/app';

import 'antd/dist/antd.css';
import MainSidebar from '../components/MainSidebar';
import { RecoilRoot } from 'recoil'
import MainContent from '../components/MainContent';
import TopNavbar from '../components/TopNavbar';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <MainSidebar></MainSidebar>
      <MainContent>
        <TopNavbar></TopNavbar>
        <Component {...pageProps} />
      </MainContent>
    </RecoilRoot>
  );
}
export default MyApp
