const TabButton = ({id,dataBsTarget,ariaControls,ariaSelected,text,scoreSchool1,setScoreSchool1,scoreSchool2,setScoreSchool2,scoreSchool3,setScoreSchool3,scoreSchool4,setScoreSchool4}) => {
  return (

      <button
        className="nav-link fs-2"
        id={id}
        data-bs-toggle="tab"
        data-bs-target={dataBsTarget}
        type="button"
        role="tab"
        aria-controls={ariaControls}
        aria-selected={ariaSelected}
       
      >
        < >
       <span className="fs-1 fw-bold"> {text} </span>
        </>
      </button>
  
  );
};

export default TabButton;
