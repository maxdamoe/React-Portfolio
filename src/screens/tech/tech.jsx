import React from 'react'
import './tech.css'
import DevIcon from "devicon-react-svg";
import {techs} from '../../helpers/techs'

function Technologies() {
  return (
    <div className="techsContainer" id="techs">
      <div>
        <h1 id="tech_h1" style={{textAlign: 'center'}}>Below are the Technologies with which I am proficient</h1>
      </div>
      <div className="techCardsCcontainer">
        {techs.map((e, idx) => {
          return (
            <div key={idx} className="techCard">
              <DevIcon className="techIcons" icon={e.iconName} />
              <span style={{ margin: '5px', fontSize: '1.5rem'}}>{e.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Technologies
