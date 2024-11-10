const TabButton = ({id,dataBsTarget,ariaControls,ariaSelected,text}) => {
  return (

      <button
        className="nav-link"
        id={id}
        data-bs-toggle="tab"
        data-bs-target={dataBsTarget}
        type="button"
        role="tab"
        aria-controls={ariaControls}
        aria-selected={ariaSelected}
      >
        {text}
      </button>
  
  );
};

export default TabButton;
