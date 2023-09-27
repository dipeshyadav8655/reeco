import React from "react";
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup } from '../redux/statusChange/actions';
import { changeStatus } from "../redux/statusChange/actions";

function PopUp(props) {
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.popupVisible);
  
  const closePopup = () => {
    dispatch(togglePopup()); // Toggle the popup state when the close button is clicked
  };

  const handleYesClick = () => {
    dispatch(changeStatus(props.index, 'Missing Urgent')); // Use props.index to update the correct item's status
    dispatch(togglePopup());
  };
  
  const handleNoClick = () => {
    dispatch(changeStatus(props.index, 'Missing')); // Use props.index to update the correct item's status
    dispatch(togglePopup());
  };
  return(
    <div>
      {popup ? (
        <div className="w-full h-screen bg-black/60 z-10 fixed left-0 top-0">
          <div className={popup ? "bg-white w-[300px] h-[150px] fixed top-1/3 right-[450px] z-10 duration-300 p-2 rounded-md" : "bg-white w-10 h-10 fixed top-[-100%] left-1/2 z-10 duration-300"}>
            <span className="font-semibold">Mising Product</span>
            <span className="ml-36 font-semibold cursor-pointer" onClick={closePopup}>X</span>
            <p className="mt-10">{props.product_name} is Urgent</p>
            <div className="flex w-full justify-end mt-6">
              <h3 className="mx-5 font-semibold cursor-pointer" onClick={handleYesClick}>Yes</h3>
              <h3 className="font-semibold cursor-pointer" onClick={handleNoClick}>No</h3>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  popupVisible: state.popupVisible,
});

const mapDispatchToProps = {
  showPopup: togglePopup,
};

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);