import React from 'react'

function Skill({skill,img}) {
  return (
    <div className="relative group">
      <img src={img} className="w-8 h-8 group-hover:-translate-y-1 transition-all ease-in-out duration-300" />
      <div className="skill">
        {skill}
      </div>
    </div>
  )
}

export default Skill