import React, { Fragment } from 'react'
import './input.css'
export default function Input159({typevalue,placeholdervalue,classnamevalue,onchangevalue,inputvalue,onKeyPressvalue,disabledvalue}) {
    return (
        <Fragment>
        <input type={typevalue} placeholder={placeholdervalue} className={classnamevalue} value={inputvalue} onChange={onchangevalue} onKeyPress={onKeyPressvalue} disabled={disabledvalue}/>
        </Fragment>
    )
}
