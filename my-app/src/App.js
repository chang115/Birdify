import './App.css'
import Footer from './components/footer';
import Header from './components/header';
import button from './components/button';
import { Layout } from 'antd';
import React from 'react';


function App() {
   return (

   <div className="page-container">
    <Header className='header'/>
      
     <img
        src = "https://cdn.birdwatchingdaily.com/2018/08/Pelican-Warbler-Plover-opener-660x440.jpg"
        alt = "birds"/>
     <div>

     

      {/* <button>Default</button>; */}

        <button className = 'btn'>identify the bird</button>

      </div>


      <Footer/>
      
    </div>
   );
}

export default App;


// const { Header, Footer, Sider, Content } = Layout;

// const App = () => (
  // <>
    // <Layout>
      // <Header>Header</Header>
      // <Content>Content</Content>
      // <Footer>Footer</Footer>
    // </Layout>

    // <Layout>
    // <Header>Header</Header>
      // <Layout>
        // {/* <Sider>Sider</Sider> */}
        // <Content>Content</Content>
      // </Layout>
      // <Footer>Footer</Footer>
    // </Layout>
// 
    // <Layout>
      // <Header>Header</Header>
      // <Layout>
        // <Content>Content</Content>
        // <Sider>Sider</Sider>
      // </Layout>
      // <Footer>Footer</Footer>
    // </Layout>
// 
    // <Layout>
      // <Sider>Sider</Sider>
      // <Layout>
        // <Header>Header</Header>
        // <Content>Content</Content>
        // <Footer>Footer</Footer>
      // </Layout>
    // </Layout>
  // </>
// );

// export default App;