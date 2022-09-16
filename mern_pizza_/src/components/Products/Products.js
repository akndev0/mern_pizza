import { Col, Container, Form, Image, Row, Stack, DropdownButton, Dropdown, Pagination } from "react-bootstrap"
import ProductsItem from "./ProductsItem"
import "./products.css"
import React, { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  getProducts, getProductsLength } from "../../store/actions/productActions"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"


const Products = () => {
  

  const [badge, setBadge] = useState(1)
  
 
  
  const dispatch = useDispatch()
  let limit=4
 
  const product = useSelector(state => state.product.products)
  const productlength = useSelector(state => state.product.productsLength.productsLength )
  let paginationlenght=Math.ceil(productlength/limit)
 
  const [sortType,setsortType]=useState('_id')
  
  const [title,setTitle]=useState('Sorting By')

  const [fields,setFields]=useState('')
  const [fieldName,setFieldName]=useState('')
  const [activePagination,setActivePagination]=useState(1)
  

 
  let items = [];
  if (product.products!=null){
   let paginationlenght=Math.ceil(productlength/limit)
 
  

 
    if (paginationlenght>3){
      items=
        <>
      <Pagination.Item key={1} active={1 === activePagination} onClick={()=>setActivePagination(1)}>{1}</Pagination.Item>
      <Pagination.Item key={2} active={2 === activePagination} onClick={()=>setActivePagination(2)}>{2}</Pagination.Item>
      <Pagination.Item key={3} active={3 === activePagination} onClick={()=>setActivePagination(3)}>{3}</Pagination.Item>
      <Pagination.Item key={4} active={4 === activePagination} onClick={()=>setActivePagination(4)}>{4}</Pagination.Item>
      <Pagination.Ellipsis />
      {activePagination>4 && activePagination<paginationlenght ? 
      <>
          <Pagination.Item key={activePagination} active={activePagination} onClick={()=>setActivePagination(activePagination)}>{activePagination}</Pagination.Item>
          <Pagination.Ellipsis />
       </>
     :null}
      <Pagination.Item key={paginationlenght} active={paginationlenght === activePagination} onClick={()=>setActivePagination(paginationlenght)}>{paginationlenght}</Pagination.Item>
       </>
    
    
    }
    else if (paginationlenght<=3){
      for (let number = 1; number <= paginationlenght; number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePagination}
       onClick={()=>setActivePagination(number)}
      >
        {number}
      </Pagination.Item>
      
    );
    }
  }
   }
  

 
  useEffect(() => {
  
   dispatch(getProductsLength(1,sortType,200,fields,fieldName))
   dispatch(getProducts(activePagination ? activePagination:1,sortType,limit,fields,fieldName))
   
    
  }, [sortType,fields,fieldName,dispatch,activePagination,limit])

 
  const arrayChunk = (arr, n) => {
    const array = arr.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));
    return chunks;
  }
   const queryFunc=(badge,fieldName)=>{
    setBadge(badge)
    setActivePagination(1) 
   // setType('-price')
   if (fieldName==="All"){
    setFields('')
    setFieldName('')
   }
   else{
    setFields('category')
    setFieldName(fieldName)
   }
   }

   const handleClick = (sorttype,title) => {
    setsortType(sorttype) 
    setTitle(title)
}
  return (

    <Container fluid style={{background:"#d3d3d3",padding: '100px 20px 100px 20px',maxWidth:"1320px" }}>

    

      


      <Row className="toppills" style={{background:"white"}}>
        <Col sm={12}>
        <Stack className="flex-md-wrap my-3 px-3 " direction="horizontal" gap={3}>

         <div className="d-flex  flex-column  flex-md-row">
         
          <div  className={badge === 1 ? " menuPillsActive my-2 p-2 py-md-2 px-md-3 text-uppercase text-white  "
            : "  menuPillsInactive bg-transparent p-0 py-md-2 px-md-3 text-uppercase  my-2 "}  onClick={()=>queryFunc(1,'All')    }    >
            All
          </div>
          <div className={badge === 2 ? " menuPillsActive  my-2 p-0 py-md-2 px-md-3 text-uppercase   text-white "
            : " menuPillsInactive bg-transparent p-0 py-md-2 px-md-3 text-uppercase  my-2 "} 
            onClick={()=>queryFunc(2,'pizza')        
            }    >
            Pizza
          </div>
          <div className={badge === 3 ? " menuPillsActive  my-2 p-0 py-md-2 px-md-3 text-uppercase  text-white  "
            : " menuPillsInactive bg-transparent p-0 py-md-2 px-md-3 text-uppercase   my-2 "} 
             onClick={()=>queryFunc(3,'side')}      >
            Sides
          </div>
          <div className={badge === 4 ? " menuPillsActive  my-2 p-0 py-md-2 px-md-3 text-uppercase  text-white  "
            : " menuPillsInactive bg-transparent p-0 py-md-2 px-md-3 text-uppercase  my-2  "}
             onClick={()=>queryFunc(4,'salad')}      >

            Salads
          </div>
          <div className={badge === 5 ? " menuPillsActive  my-2 p-0 py-md-2 px-md-3 text-uppercase  text-white  "
            : " menuPillsInactive bg-transparent p-0 py-md-2 px-md-3 text-uppercase  my-2  "}
             onClick={()=>queryFunc(5,'dessert')}     >
            Desserts
          </div>
         
          </div>
         

          <div className="ms-auto  d-flex flex-column">
        
         <div className=" d-lg-none  mx-3 m-2 bg-transparent border py-2 px-3 text-uppercase "     >
            Filter
          </div>
          <div className="ms-auto  m-2  bg-transparent  py-2 px-3 text-uppercase  "     >
          
         
          <DropdownButton
      variant="outline-secondary"
      title={title}
      id="input-group-dropdown-1"
    >
    
      <Dropdown.Item onClick={()=>handleClick('price',"Price-Low to High")} >Price Low to High</Dropdown.Item>
      <Dropdown.Item onClick={()=>handleClick('-price',"Price-High to Low")}  >Price High to Low</Dropdown.Item>
      <Dropdown.Item onClick={()=>handleClick('ratings',"Rating-Low to High")}>Rating Low to High</Dropdown.Item>
     
      <Dropdown.Item onClick={()=>handleClick('-ratings',"Rating-High to Low")} >Rating High to Low</Dropdown.Item>
   
    
    </DropdownButton>
    </div>
          </div>
        </Stack>
        </Col>
      </Row>



      <Row className=" mt-3" style={{borderRadius:"20px"}}>
        <Col md={2} style={{borderRadius:"20px"}} className= "bg-white my-3 d-none d-lg-block " >
            <p className="m-3">Recomended</p>
            <hr/>
            <div className="mt-3">
            <Stack direction="horizontal" className="bg-">
                 <div className="mx-2 ">
                    <Image src="./p-1.png" width={50} height={50} />
                 </div>
                 <div> 
                   <Stack  className=" bg- me-auto ">
                    <p   className="me-auto  m-0 p-0" style={{fontWeight:"bolder",fontSize:"12px"}}>Hawaiian Pizza</p>
                    <p className=" me-auto text-start py-1 m-0 p-0" style={{fontSize:"10px"}}>Pizza ipsum dolor amet pepperoni mozzarella bbq </p>
                 <Stack direction="horizontal">
                    <p  style={{fontSize:"12px", fontFamily: "Dancing Script"}}>Price:</p>
                     <p style={{fontSize:"12px", fontFamily: "Dancing Script"}}>$20.00</p>
                 </Stack>
             </Stack>
                 </div>
            </Stack>
            <Stack direction="horizontal" className="bg-">
                 <div className="mx-2 ">
                    <Image src="./p-3.png" width={50} height={50} />
                 </div>
                 <div> 
                   <Stack  className=" bg- me-auto ">
                    <p   className="me-auto  m-0 p-0" style={{fontWeight:"bolder",fontSize:"12px"}}>Specialty Pizza</p>
                    <p className=" me-auto text-start py-1 m-0 p-0" style={{fontSize:"10px"}}>Pizza ipsum dolor amet pepperoni mozzarella bbq</p>
                 <Stack direction="horizontal">
                    <p style={{fontSize:"12px", fontFamily: "Dancing Script"}}>Price:</p>
                    <p style={{fontSize:"12px", fontFamily: "Dancing Script"}}>$15.00</p>
                 </Stack>
             </Stack>
                 </div>
            </Stack>
            <Stack direction="horizontal" className="bg-">
                 <div className="mx-2">
                    <Image src="./p-5.png" width={50} height={50} />
                 </div>
                 <div> 
                   <Stack  className=" bg- me-auto " gap={0}>
                    <p className="me-auto  m-0 p-0" style={{fontWeight:"bolder",fontSize:"12px"}}>Vegetarian Pizza</p>
                    <p className=" me-auto text-start py-1 m-0 p-0" style={{fontSize:"10px"}}>Cream craker with sprigs of oaşas nad minces beef</p>
                 <Stack direction="horizontal">
                    <p style={{fontSize:"12px", fontFamily: "Dancing Script"}}>Price:</p>
                    <p style={{fontSize:"12px", fontFamily: "Dancing Script"}}>$12.50</p>
                 </Stack>
             </Stack>
                 </div>
            </Stack>
            </div>

            <hr/>
             

             <Filter/>
            
        
            
                     
        
        </Col>
        
        <Col sm={12} lg={10} className="align-items-end "  >
         
            
          {product.products ?  arrayChunk(product.products, 4).map((ProductsItemGroup, index) => (
          
           <Row key={index} className="my-0 my-md-3">
           
           {ProductsItemGroup.map((element, index2) => (
            
                  
               <Fragment key={index2}>
             
             <Col className="my-3 my-xl-0 col-md-3">
                <ProductsItem
                   _id={element._id}
                  title={element.name}
                  slug={element.slug}
                  img={element.productImg}
                  price={element.price}
                  quantity={element.quantity}
                  description={element.description}
                  category={element.category}
                  ratings={element.ratings}
                  
                />
              </Col> 

            
</Fragment>
           ))}
         
           
           
            </Row>
          
          

       
           ))
          
        : ''} 
         <Row className="my-0 my-md-3" style={{position:"bottom"}}>
         <Pagination className="justify-content-center mt-5 px-3  ">
           <Pagination.First onClick={()=>setActivePagination(1)} />
           <Pagination.Prev onClick={()=> 1 !== activePagination ? setActivePagination(activePagination-1) :null} />
                
              
              {items}
             
           <Pagination.Next 
           onClick={()=>paginationlenght !== activePagination ? setActivePagination(activePagination+1) :null }
             />
           <Pagination.Last onClick={()=>setActivePagination(Math.ceil(paginationlenght))} /></Pagination> 
         </Row>
   
  
   
      </Col>
      </Row>
      
     
       


    </Container>

  )
}

export default Products

const Filter =() =>{
   


  return(
    <>     
           
         

     
          <FilterItem title={"Size"} data={['Small', 'Medium','Large','XLarge','Family']} showData={1}  />
            <hr/>
             <FilterItem title={"Cheese"} data={['Mozezarella', 'Goat Cheese','Mascarpone','Grgonzoia','Feta cheese','Cheddar','Parmigiano']} showData={1}  />
             <hr/>
             <FilterItem title={"Meat"} data={['lorem', 'Ipsum']} showData={0}  />
             <hr/>
             <FilterItem title={"Veggies"} data={['lorem', 'Ipsum']} showData={0}  />
             <hr/>
    </>
  )
}

const FilterItem = ({title,data,showData}) => {
  const [show,setShow]=useState(showData)

  return(
    <div className="mt-3">
              <Stack onClick={()=>setShow(!show)} className="justify-content-between " direction="horizontal" gap={3}>
                 <div className=" px-2">
                    <p className="my-auto align-middle text-uppercase">{title} </p>
                 </div>
                 <div className="px-2" >
                     {show ? <FaChevronUp/> : <FaChevronDown/> }
                   
                  </div>
              </Stack>
           
               {show  ? 
                <Form className="px-2 mt-3">
     {data.map((items) => (
         <div key={`${items}`}    className="labels">
           <Form.Check 
                type='checkbox'
               id={`${items}`}
               label={`${items}`}
             
                   />
               
               

            </div>
    ))}
        </Form>
  : ""}
   </div>
  )
}
