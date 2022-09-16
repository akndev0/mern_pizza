import { useEffect, useState } from "react";
import {  Alert, Button, ButtonGroup, Col, Container, Image, Row, Stack } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from 'react-router-dom'
import "./productDetails.css"

import { getProductDetailsById } from "../../store/actions/productActions";
import { addToCart } from "../../store/actions/cartActions";
;
const ProductDetails = () => {



 
  const [index,setIndex]=useState(1)
  const [warning,setWarning]=useState(0)

  const [type, setType] = useState("regular")
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("regular")
  const [sizeDiff,setsizeDiff]=useState(1)
  const [typeDiff,settypeDiff]=useState(1)

   const dispatch=useDispatch();
   const product = useSelector((state) => state.product)
   const auth = useSelector((state) => state.auth)
   const { productId } =useParams();
  
  useEffect(() => {
    
     const payload = {
       params: {
        productId,
       },
    };
    dispatch(getProductDetailsById(payload));
  }, [dispatch,productId,auth.authenticate]);


  if (Object.keys(product.productDetails).length === 0) {
    return null;
  }
  
  const onSizeClick=(sizeInfo,sizDiffInfo)=>{
    setSize(sizeInfo)
    setsizeDiff(sizDiffInfo)
 }
 const onTypeClick=(sizeInfo,sizDiffInfo)=>{
   setType(sizeInfo)
   settypeDiff(sizDiffInfo)
}
  
   const { _id, name,slug,price, quantity,category, description,productImg,reviews}=product.productDetails

    const addToCartButton=()=>{
     dispatch(addToCart({ _id, name, price, productImg }, qty,type,size));
   }

  return (
    <>
    
    <Container  style={{paddingTop:"100px", paddingBottom:"150px"}}>
      {!auth.authenticate && warning ?  <Alert key={'danger'} variant={'danger'}>
          Log in to "ADD TO CHART" 
        </Alert> : null }
       
       
      <Row className="bg-white" style={{borderRadius:"20px" , paddingBottom:"26px"}}>
        <Col lang={6} className="px-5">
          {productImg !=null ?
          <Image fluid src={'/'+productImg} alt="pizza" className="productImg p-5"
           height={450} width={550} />
          :null }
        </Col>
        <Col  lg={6} className="mt-5 px-5">
          <Stack gap={3}>
         
            <div className="productTitle">{name} </div>
 
            <div className="productDesc">{description} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. ipsum primis in faucibus orci luctus et ultricesLorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            
          </Stack>
          {category==="pizza" ?
          <>
          <div className="d-flex flex-lg-row flex-column justify-content-between mt-3">
            <div>
              <p className="productCrustTitle">CHOOSE YOUR CRUST :</p>
            </div>
            
            <div className="p-0 w-50 border mx-auto  mx-lg-0 shadow-none border-danger badgepills "  >
                      <div direction="horizontal" className="cardPills   d-flex flex-row "
                      >
                        <div onClick={() => {onTypeClick("Thin",-1) }}
                          className={" py-2 flex-grow-1 shadow-none badgepills  " + (type === "Thin" ? 'sizePills' : '')}>
                          Thin
                        </div>
                        <div onClick={() => {onTypeClick("regular",0)  }}
                          className={" py-2  flex-grow-1 badgepills  " + (type ===  "regular" ? 'sizePills' : '')}>
                          Normal
                        </div>
                        <div onClick={() => {onTypeClick("Thick",2) }}
                          className={" py-2  flex-grow-1 badgepills  " + (type ===  "Thick" ? 'sizePills' : '')}
                        >
                          Thick
                        </div>
                      </div>
                    </div>
          </div>
          <div className="d-flex flex-lg-row flex-column   justify-content-between mt-3">
            <div>
               <p className="productCrustTitle">SIZE OF CRUST :</p>
            </div>
            <div className="p-0 w-50  mx-auto mx-lg-0 border border-danger mt-3 badgepills">
                      <div direction="horizontal" className="cardPills  d-flex flex-row">
                        <div onClick={() => {onSizeClick("small",-3) }} className={" py-2  flex-grow-1 badgepills  " + (size === "small" ? 'sizePills' : '')}    >
                          7 "
                        </div>
                        <div onClick={() => {onSizeClick("regular",0) }} className={" py-2  flex-grow-1  badgepills " + (size === "regular" ? 'sizePills' : '')}    >
                          8 "
                        </div>
                        <div onClick={() => {onSizeClick("big",7)  }} className={" py-2  flex-grow-1  badgepills " + (size === "big" ? 'sizePills' : '')}    >
                          11 "
                        </div>

                      </div>
                </div>
                
            </div>
            </>
         : null}

          <Stack direction="horizontal" gap={2} className="py-2 mt-3">
            <p className="ms-md-auto mx-auto productPrice dancing">Price :</p>
            <div className="productPrice productPriceNum dancing d-flex  ">
              <p className="px-3 fakePrice"> ${(qty*(price+sizeDiff+typeDiff)*1.1).toFixed(2)}</p>
              <p> ${(qty*(price+sizeDiff+typeDiff)).toFixed(2)} </p>
            </div>
          </Stack>


          <div  className="d-flex flex-column 
          justify-content-end flex-lg-row  ">

            <div className="mx-md-3 mt-md-3 ">
             
            <ButtonGroup aria-label="btn" className="qtybtn  ">
               <p className="mx-3 my-auto productQtyTitle "> QTY :</p>
              <Button onClick={ ()=>qty >1 ? setQty(qty-1) : ""} className="qtybtnColor px-3 py-2 shadow-none" >-</Button>
              <Button className="qtybtnColor px-3 py-2 shadow-none" variant="secondary">{qty}</Button>
              <Button  onClick={ ()=>{setQty(qty+1)} } className="qtybtnColor px-3 py-2 shadow-none  " >+</Button>
            </ButtonGroup>
            </div>

            <div className=" mt-3 ">
            {auth.authenticate ?   <Link to={`/cart`} className="align-items-center " style={{textDecoration:"none",color:"white"}}>
            <div onClick={addToCartButton} className="btnColor 
               shadow-none  align-items-center px-3">
                <p className="btnColor py-2 ">ADD TO CART</p>
              
             </div>
             </Link>
             :<div onClick={()=>setWarning(1)}  className="btnColor 
             shadow-none  align-items-center px-3">
              <p  className="btnColor py-2 ">ADD TO CART</p>
            
           </div>}
             </div>
          </div>
        </Col>
      </Row>
      
      <hr></hr>

      <Row className="pt-5 bg-white"  style={{borderTopLeftRadius:"20px",borderTopRightRadius:"20px",
        fontSize:"25px", fontFamily: "Dancing Script" }}>

        <Col  md={4}  onClick={()=>setIndex(1)}>
        <div className="d-flex  justify-content-center">
          <p className={index===1 ? 'descTitleActive' : 'descTitle' } >Description</p>
        </div>
        </Col>
        <Col  md={4}   onClick={()=>setIndex(2)}>
        <div className="d-flex  justify-content-center">
          <p className={index===2 ? 'descTitleActive' : 'descTitle' }>Additional information</p>
          </div>
        </Col>
        <Col  md={4}  onClick={()=>setIndex(3)}>
        <div className="d-flex  justify-content-center">
          <p className={index===3 ? 'descTitleActive' : 'descTitle' }>Reviews(3)</p>
          </div>
        </Col>
        <hr></hr>
      </Row>

     
      <Row className="bg-white" style={{minHeight:"500px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px"}}>
        <Col>
             {index===1 ? <Description/>: "" }
             {index===2 ? <AdditionalInfo/>: "" }
             {index===3 ? <Reviews/>: "" }  
         </Col>
      </Row>
      <hr></hr>
       <Row className="bg-white"  style={{marginTop:"20px",
       borderTopLeftRadius:"20px",borderTopRightRadius:"20px",paddingTop:"50px"}} >
          <Col sm={12} >
             <p className="text-center dancing" style={{fontWeight:"700",color:"#fd9d3e",
             fontSize:"35px"}}> Fresh From Mern Pizza </p>
             <h2 className="text-center " style={{fontSize:"20px"}} > RELATED PRODUCTS </h2>
          </Col>
          <Col sm={12}>
              
         </Col>
       </Row>
       <Row  className="bg-white" style={{marginTop:"0px",
       borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px" ,paddingTop:"50px",
        paddingBottom:"50px" }}>
        <Col md={3}>
           <Image fluid src="/p-1.png" alt="pizza" className="" height={250} width={250} />
           <p className="text-center" style={{fontWeight:"700"}}> Margherita Pizza </p>
           <p className="text-center"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
           <p className="text-center dancing" style={{fontSize:"20px",color:"#fd9d3e"}}>$ 20.00 </p>
        </Col>
        <Col md={3}>
           <Image fluid src="/p-5.png" alt="pizza" className="" height={250} width={250} />
           <p className="text-center"  style={{fontWeight:"700"}}> Rum with soda </p>
           <p className="text-center"  > Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
           <p className="text-center dancing" style={{fontSize:"20px",color:"#fd9d3e"}}>$ 20.00</p>
        </Col>
        <Col md={3}>
           <Image fluid src="/p-3.png" alt="pizza" className="" height={250} width={250} />
           <p className="text-center"  style={{fontWeight:"700"}}> Vegetarian </p>
           <p className="text-center"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
           <p className="text-center dancing" style={{ fontSize:"20px",color:"#fd9d3e"}}> $ 20.00 </p>
        </Col>
        <Col md={3}>
           <Image fluid src="/p-4.png" alt="pizza" className="" height={250} width={250} />
           <p className="text-center"  style={{fontWeight:"700"}}> Pepperoni Pizza </p>
           <p className="text-center"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
           <p className="text-center dancing" style={{ fontSize:"20px",color:"#fd9d3e"}}> $ 20.00 </p>
        </Col>
       </Row>
      

    </Container>
    </>
  )
}

const Description=()=>{
  
return <div className="mt-5 mb-5 mx-5">
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed nunc in tellus commodo blandit. Vivamus non arcu nibh. Vivamus maximus luctus tellus vestibulum tincidunt. Nunc nec nulla non mi venenatis facilisis. Maecenas ac nunc rutrum, varius orci ac, porttitor tellus. Fusce non lorem in augue aliquet imperdiet ac convallis orci. Sed quis fringilla metus. Vivamus rhoncus pretium maximus. Nunc nibh libero, commodo in tempus vel, ornare at ipsum. Praesent tortor felis, viverra non ornare nec, rutrum eget ligula. Proin bibendum fringilla facilisis. Sed et luctus elit. Mauris ut lacus arcu. Aliquam lobortis augu</p>
       <br/>
       <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed nunc in tellus commodo blandit. Vivamus non arcu nibh. Vivamus maximus luctus tellus vestibulum tincidunt. Nunc nec nulla non mi venenatis facilisis. Maecenas ac nunc rutrum, varius orci ac, porttitor tellus. Fusce non lorem in augue aliquet imperdiet ac convallis orci. Sed quis fringilla metus. Vivamus rhoncus pretium maximus. Nunc nibh libero, commodo in tempus vel, ornare at ipsum. Praesent tortor felis, viverra non ornare nec, rutrum eget ligula. Proin bibendum fringilla facilisis. Sed et luctus elit. Mauris ut lacus arcu. Aliquam lobortis augu</p>
        <div className="d-flex flex-md-row my-5   flex-column w-100">
           <div className="d-flex flex-column mx-2" style={{}}>
               <p className="text-uppercase descTitle">Energy</p>
               <p className="descInfo">150 cal</p>
           </div>
           
           <div className="vr" />
           <div className="d-flex flex-column mx-2">
               <p className="text-uppercase descTitle">Total Fats</p>
               <p className="descInfo">10g (saturated 20%)</p>
           </div>
           <div className="vr" />
           <div className="d-flex flex-column mx-2">
               <p className="text-uppercase descTitle">Carbohydrates</p>
               <p className="descInfo">21g (Total Sugar 4g)</p>
           </div>
           <div className="vr" />
           <div className="d-flex flex-column mx-2">
               <p className="text-uppercase descTitle">Protein</p>
               <p className="descInfo">38 g</p>
           </div>


        </div>
         <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed nunc in tellus commodo blandit. Vivamus non arcu nibh. Vivamus maximus luctus tellus vestibulum tincidunt. Nunc nec nulla non mi venenatis facilisis. Maecenas ac nunc rutrum, varius orci ac, porttitor tellus. Fusce non lorem in augue aliquet imperdiet ac convallis orci. Sed quis fringilla metus. Vivamus rhoncus pretium maximus. Nunc nibh libero, commodo in tempus vel, ornare at ipsum. Praesent tortor felis, viverra non ornare nec, rutrum eget ligula. Proin bibendum fringilla facilisis. Sed et luctus elit. Mauris ut lacus arcu. Aliquam lobortis augu</p>
         <br/>
         <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed nunc in tellus commodo blandit. Vivamus non arcu nibh. Vivamus maximus luctus tellus vestibulum tincidunt. Nunc nec nulla non mi venenatis facilisis. Maecenas ac nunc rutrum, varius orci ac, porttitor tellus. Fusce non lorem in augue aliquet imperdiet ac convallis orci. Sed quis fringilla metus. Vivamus rhoncus pretium maximus. Nunc nibh libero, commodo in tempus vel, ornare at ipsum. Praesent tortor felis, viverra non ornare nec, rutrum eget ligula. Proin bibendum fringilla facilisis. Sed et luctus elit. Mauris ut lacus arcu. Aliquam lobortis augu</p>
         <div className="vr" />
      </div>
}

const AdditionalInfo=()=>{
  return <>
        <p> Nothing Yet</p>
        </>
  }
  
const Reviews=()=>{
  
    return <>
       
          <div className="bg- m-5 my-3 ">
             <div className="d-flex flex-column gap-2 ">
              
                <div className="d-flex flex-row align-items-center gap-2 reviewsbg p-3  ">
                   
                    <img src="/person-icon.png" width={50} height={50}  alt="person"/>
                    
                    <div className="d-flex flex-column ">
                      
                   
                      <p className="text-start  m-0 p-0 ">
                      Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit magna tempus an aliquet porta vitae auctor aliqum mullam blandit tempor sapien gravida congue eros magna nihil impedit tempor. Semper lacus cursus porta lectus enim ipsum  </p>
                   
                    <div className="d-flex flex-row   gap-3 dancing">
                      <p className="mt-2">SEAN MCMARTHY</p>
                      <p className="mt-2">December 4, 2020</p>
                    </div>
                    
                    </div>
                </div>

              
              
              
                <div className="d-flex flex-row align-items-center gap-2 reviewsbg p-3  ">
                   
                   <img src="/person-icon.png" width={50} height={50}  alt="person"/>
                 
                 <div className="d-flex flex-column ">
            
                
                   <p className="text-start  m-0 p-0 ">
                   Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit magna tempus aliquet porta vitae auctor aliqum mullam blandit tempor sapien gravida congue eros magna nihil impedit tempor lacus     </p>
                
                 <div className="d-flex flex-row   gap-3 dancing">
                   <p className="mt-2">LESLIE SERPAS</p>
                   <p className="mt-2">November 28, 2020</p>
                 </div>
                 
                 </div>
             </div>


             <div className="d-flex flex-row align-items-center gap-2 reviewsbg p-3  ">
                   
                   <img src="/person-icon.png" width={50} height={50}  alt="person"/>
                 
                 <div className="d-flex flex-column ">
               
                
                   <p className="text-start  m-0 p-0 ">
                   Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit magna tempus an aliquet porta vitae auctor aliqum mullam blandit tempor sapien gravida congue eros magna nihil impedit tempor. Semper lacus cursus porta lectus enim ipsum feugiat primis in ultrice ligula tempus undo auctor ipsum and mauris lectus enim ipsum   </p>
                
                 <div className="d-flex flex-row   gap-3 dancing">
                   <p className="mt-2">ROBERT PETERSON</p>
                   <p className="mt-2">November 11, 2020</p>
                 </div>
                 
                 </div>
             </div>

             </div>

          </div>
          
          
       
        
     </>
}
    

export default ProductDetails
