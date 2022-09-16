import { Image } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import "./layout.css"

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.pageType !== "Home" ?    
      <Image fluid  src="/1074058.jpg" alt="pizzaMain" className="pizzamain" />
      : null }
      
       <div  style={{background:props.background}}>
        {props.children}
       </div>
      
      <Footer />
    </>
  )
}

export default Layout