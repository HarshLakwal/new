import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { getCart, remove } from "../redux/cartSlice";
import { serverImg, serverURL, token } from "../../serverURL";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-hot-toast";

const AddToCartCard = ({ open }) => {
  console.log(open);
  const [response, setResponse] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart(token));
  }, [open, response]);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const handleSubmit = async () => {
    const res = await axios.post(
      `${serverURL}/api/user/buy-assets`,
      "",
      config
    );
    if (res.data) {
      setResponse(!response);
      return toast.success(res.data.message);
    }
    console.log(res.data.response      )
    toast.error(res.data);
  };

  const cart = useSelector((state) => state.userCart);
  const handleRemove = async (data) => {
    console.log(data)
    dispatch(remove(data));
    try{
      const res = await axios.post(
        `${serverURL}/api/user/remove-cart`,
        data,
        config
      );
      if (res.data) {
        
        setResponse(!response);
        return toast.success(res.data.message);
      }
    }
    catch(err){
      console.log(err.response)
      // return toast.error(err.message);
    }
  };
  let subTotal = 0;
  if (cart.data.length != 0) {
    cart.data.forEach((item) => {
      return (subTotal += item.vehiclePrice);
    });
  }

  return (
    <>
      <div
        className="modal fade"
        id="addToCartModel"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg"
          role="document"
          style={{ marginTop: "4.5rem" }}
        >
          <div
            className="modal-content dirt_common_modal"
            style={{ padding: "1vh 5vh" }}
          >
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <RxCrossCircled size={30} color="#fff" cursor="pointer" />
              </button>
            </div>
            <div className={style.model_body}>
              <div className={style.heading_container}>
                <h1 className={style.heading}>Game assest</h1>
              </div>
              <div style={{ overflowY: "scroll", height: "30vh" }}>
                {cart.data.length != 0
                  ? cart.data.map((data, index) => (
                      <div className={style.product_container}>
                        <div className={style.product_details_container}>
                          <div className={style.product_details_wrapper}>
                            <RxCrossCircled
                              size={30}
                              color="#fff"
                              cursor="pointer"
                              onClick={() => handleRemove(data)}
                            />
                            <img
                              src={`${serverImg}/${data.vehicleImg}`}
                              alt="img"
                            />
                            <h1>{data.vehicleName}</h1>
                          </div>
                          <div className={style.product_price}>
                            <h1>{data.vehiclePrice}</h1>
                            <span>coin</span>
                          </div>
                        </div>
                      </div>
                    ))
                  : null}
              </div>

              <div className={style.total_container}>
                <h1>Sub total</h1>
                <h1>{subTotal}</h1>
                <span>coin</span>
              </div>
              <div className={style.buy_btn}>
                <button onClick={handleSubmit}>Buy now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCartCard;
