export const changeStatus = (index, newStatus) => {
    return {
      type: 'CHANGE_STATUS',
      payload: { index, newStatus },
    };
  };
  
  export const togglePopup = () => {
    return {
      type: 'TOGGLE_POPUP',
    };
  };