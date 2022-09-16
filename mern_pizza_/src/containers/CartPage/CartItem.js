import { Button, ButtonGroup, Stack } from "react-bootstrap"
import { addToCart } from "../../store/actions/cartActions";
import { useDispatch, } from "react-redux";

const CartItem = ({ i, _id, img, title,  desc, price,qty,orderType,orderSize }) => {
 


  const dispatch = useDispatch();

  const qtyUpdate = (qty,value) => {
   
    dispatch(addToCart({ _id, title, price, img }, value,orderType,orderSize));
    
  }

  return (
    
   <tr className="text-center align-middle" key={_id} >
        <td className="my-auto align-middle ">{i + 1}</td>
        <td colSpan="2" className="my-auto align-middle" >
          <Stack direction="horizontal" gap={3}>
            <div className=" "> <img src={'../../'+img} alt={title}
              width={150} height={150} /> </div>
            <div>
              <Stack>
                <div className="  productTitle">{title} </div>
                <div className="  productType">{orderType}/{orderSize}</div>
                <div className=" incre" style={{ marginTop: '10px' }}>{desc}</div>
              </Stack>
            </div>
           
          </Stack>
        </td>
        <td className="my-auto align-middle" >{price}</td>
        <td className="my-auto align-middle" >

          <div style={{
            display: "flex", flexDirection: "row", background: "",justifyContent:"space-between",
            alignItems:"center"
          }} >
           
            <ButtonGroup aria-label="Basic example" className="mx-auto ">
              <Button onClick={() => qty > 1 ? qtyUpdate(qty,-1) : null} className="qtybtnColor px-3 py-2 shadow-none" variant="secondary">-</Button>
              <Button className="qtybtnColor px-3 py-2 shadow-none" variant="secondary">{qty}</Button>
              <Button  onClick={() => qtyUpdate(qty,1)}  className="qtybtnColor px-3 py-2 shadow-none" variant="secondary">+</Button>
            </ButtonGroup>
       
          </div>
        
        </td>
        
        <td className="my-auto align-middle" >${(price * qty).toFixed(2)}</td>
           {/* delete */}
      </tr>
   
  )
}

export default CartItem

