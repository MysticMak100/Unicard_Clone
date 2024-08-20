import React from 'react'

const Features = ({htmlContent,img,order,type}) => {
  return (
    <>

    <div className =  { `Featurecontainer ${order} ${type}`} >
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}/>
    <img src={img} alt="" />
    </div>
    </>
  )
}

export default Features