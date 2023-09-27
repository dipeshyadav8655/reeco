import React from "react";
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatus, togglePopup } from '../redux/statusChange/actions';
import { TiTickOutline } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineEdit } from "react-icons/ai";
import PopUp from "./PopUp";
import productImage from '../Avocado Hass.jpg'


function ItemList(prop) {
  const { product_name, brand, price, quantity, total, status } = prop.item;

  const dispatch = useDispatch();
  const popup = useSelector((state) => state.popupVisible);

  const statusApproved = () => {
    dispatch(changeStatus(prop.index, 'Approved'));
  };

  const statusMissing = () => {
    dispatch(changeStatus(prop.index, 'Missing'));
    dispatch(togglePopup());
  };

  const statusMissingUrgent = () => {
    dispatch(changeStatus(prop.index, 'Missing Urgent'));
    dispatch(togglePopup());
  };

  const popupHadler = () =>{
    console.log(prop.index,"props")
    dispatch(togglePopup());
  }
  return (
    <div>
      <div className="grid-container item-list">
        <div className="grid-items">
          <img src={productImage} alt="product"></img>
        </div>
        <div className="grid-items item-two">{product_name}</div>
        <div className="grid-items">{brand}</div>
        <div className="grid-items">{price}</div>
        <div className="grid-items">{quantity}</div>
        <div className="grid-items">{total}</div>
        <div className="grid-items item-seven">
          {status === "Approved" ? (
            <div className="w-fit px-3 bg-green-600 border rounded-full text-white ml-[70px]">
              Approved
            </div>
          ) : status === "Missing Urgent" ? (
            <div className="w-fit px-3 bg-red-600 border rounded-full text-white ml-[60px]">
              Missing Urgent
            </div>
          ) : status === "Missing" ? (
            <div className="w-fit px-3 bg-orange-600 border rounded-full text-white ml-[70px]">
              Missing
            </div>
          ): "-"}
        </div>
        <div className="grid-items">
          <div className="flex justify-end items-center">
            <TiTickOutline className="align-middle cursor-pointer" onClick={statusApproved} />
            <RxCross2 className="cursor-pointer" onClick={popupHadler} />
            <AiOutlineEdit className="cursor-pointer" />
          </div>
        </div>
      </div>
      {popup && (
        <PopUp
        product_name={product_name}
        statusMissing={statusMissing}
        statusMissingUrgent={statusMissingUrgent}
        index={prop.index}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  popupVisible: state.popupVisible,
});

const mapDispatchToProps = {
  handelStatusChange: changeStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
