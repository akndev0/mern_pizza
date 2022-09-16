import { Button, ButtonGroup,  Image, Stack } from "react-bootstrap"
import { Link } from "react-router-dom";
import { FiShoppingCart ,FiStar } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";

const ProductsItem = ({_id, title, slug, img, price, quantity, category, description,ratings }) => {



 
  const [type, setType] = useState("regular")
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("regular")
  const [sizeDiff,setsizeDiff]=useState(1)
  const [typeDiff,settypeDiff]=useState(1)


 
  const dispatch = useDispatch();
  const addToCartButton = () => {
    if(category==="pizza"){
       dispatch(addToCart({ _id, title, price, img }, qty,type,size))
    }else{
      dispatch(addToCart({ _id, title, price, img }, qty,"regular","regular"))
    }
  }
  useEffect(() => {
    
  }, [])


  const onSizeClick=(sizeInfo,sizDiffInfo)=>{
     setSize(sizeInfo)
     setsizeDiff(sizDiffInfo)
  }
  const onTypeClick=(sizeInfo,sizDiffInfo)=>{
    setType(sizeInfo)
    settypeDiff(sizDiffInfo)
 }
  return (
    <>

      <div  className="mx-auto bg-white rounded h-100"  >
        <div className="d-flex  productsItemImg  " style={{position:"relative"}}>
          <Image fluid className="p-3" src={img} />
          <div className="mx-2  bg- d-inline-flex flex-row-reverse gap-1 align-items-center" style={{background:"",bottom:"0",
          position:"absolute" ,right:"20px",borderRadius:"10px"
          ,
          }}>
            <p className=" bg- my-0 ">{ratings}</p>
            <FiStar className="my-0 bg-" style={{fontSize:"15px",fill:"yellow"}} />
             
          </div>
         
        </div>
       
        <div className="mx-3 ">
          <p className="text-bold text-center text-capitalize mt-3 productsItemTitle">{title}</p>
          <p className="text-center productsItemDescription">
            {description}
         
          </p>

          <div className="d-flex flex-column justify-content-between ">
            <div className="align-self-stretch productsItembadge">
              {category === "pizza" ?
                <div className="mt-3 ">
                  <div gap={3} className="mt-3  d-flex flex-column">
                    <div className="p-0 w-100 border shadow-none border-danger badgepills "  >
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


                    <div className="p-0 w-100 border border-danger mt-3 badgepills">
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


                </div>


                : null}
              {category !== "pizza" ?
                <ul className="mt-3 text-start">
                  <li >Cras justo odio</li>
                  <li >Dapibus ac facilisis</li>
                  <li>Dapibus ac facilisis</li>
                </ul>
                : null}
            </div>
            <div >
              <div className="my-3 ">


                <Stack direction="horizontal productsItemPrice"  gap={2}>

                  <div> <p className="dancing productsItemPriceTitle">Price:</p></div>
                  <div><p className="dancing productsItemPrice" > ${(qty * (price + sizeDiff + typeDiff)).toFixed(2)}</p></div>

                </Stack>
              </div>

              <Stack className=" my-3  "  >
                <ButtonGroup aria-label="Basic example" className="mx-auto  border border-2  mb-3 w-100 ">
                  <Button onClick={() => qty > 1 ? setQty(qty - 1) : ""} className="qtybtnColor border border-2  px-3 py-2 shadow-none">-</Button>
                  <Button className="qtybtnColor px-3 py-2 shadow-none border border-2 " >{qty}</Button>
                  <Button onClick={() => { setQty(qty + 1) }} className="qtybtnColor px-3 border border-2  py-2 shadow-none">+</Button>
                </ButtonGroup>
                <Link to={`/product/${_id}`}>
                  <Button className="mb-3 text-center shadow-none w-100 detailsbutton">Details</Button>
                </Link>
                {/* <Link to={`/cart`}> */}
                  <Button onClick={addToCartButton} className="w-100 font-bold shadow-none text-uppercase cartbutton" >Add to Cart <FiShoppingCart />

                  </Button>
                {/* </Link> */}
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsItem
