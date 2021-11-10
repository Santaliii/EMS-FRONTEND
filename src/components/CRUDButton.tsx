import React from "react";

interface ICRUDButtonProps {
  employeeId: string,
  text: string,
  bgColor: string,
  onClick: (id: string) => void
}

const CRUDButton: React.FC<ICRUDButtonProps> = ({text, bgColor, onClick, employeeId}: ICRUDButtonProps) => {
  return(
    <button  onClick={() => onClick(employeeId)} style={{backgroundColor: bgColor}} className="crud-button">{text}</button>
  )
}

export default CRUDButton