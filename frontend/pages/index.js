import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'


export default function Home({ token }) { 

 
  return (
    <Layout >
    <Head>
        <title>Apex Legend</title>
    </Head>
    <div >
      <div>
    <div className={styles.containerBG}>
    <Navbar />
        <div  className={styles.dyo}>
        <h1 className="bg-slate-300">สวัสดี Legend ทุกท่าน</h1>
        <h3 className="text-center">ขอต้อนรับสู่การเป็น Apex Predator</h3>
        <a >หากสนใจในการเข้าร่วมเป็น Apex Legend กรุณากดรูปด่านล่างได้เลย</a>
        </div>
      
        <div>
          <a href="https://www.ea.com/games/apex-legends">
          <img  src="https://ih1.redbubble.net/image.751239689.8403/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg"  width="90" height="90" ></img>
          </a>
        </div>
        </div>
        
    </div>
    </div>
</Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
