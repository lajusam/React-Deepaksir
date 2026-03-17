
import {memo, useCallback, useState } from "react"

const CustomButton=({onClick,title})=>{

    console.log("cutomButton rendered",title)
    return (
        <button onClick={onClick}>{title}</button>
    )
}

export default memo(CustomButton);