import React from 'react'

const Footer = () => {
    const style1 = {backgroundColor: "black"}
    const style2 = {color: "white"}
    const style3 = {padding: "20px"}
    const style4 = {position: "absolute"}
    const style5 = {textDecoration: "none"}
    const style6 = {color: "white"}
    const style7 = {listStyle: "none"}
    
    

    
   
  return (
    <div className='container-fluid' style={{...style1, ...style2, ...style4 }}>
        <div className='row' style={{...style3}}>
           
            <div className='col-12 col-md-4'>
                <p> <i style={{color: "orange"}} className='fa fa-map-marker'></i> Gods Glory Restoration Prophetic Ministry, 
                    Plot 100, 4th Avenue Near Ecobank, Gwarinpa Estate, FCT- Abuja
                    <br/> </p>
                    <p> <i style={{color: "orange"}} className='fa fa-phone'></i>
                    
                    08037041821, 08029404829, 08038144518


                    </p>

                    <p> <i style={{color: "orange"}} className='fa fa-envelope'></i>
                     godsgloryevan@yahoo.com <br/>
                     abiolamatthew16@yahoo.com


                    </p>

            </div>


            <div className='col-12 col-md-4' style={{borderLeft: "2px solid white"}}>
           
                <ul >
                    <li  style={{...style7}}><a style={{...style5, ...style6}} href="/">Home</a></li>
                    <li style={{...style7}}><a  style={{...style5, ...style6}} href="/aboutus">About Us</a>  </li>
                    <li style={{...style7}}><a  style={{...style5, ...style6}} href="/contactus">Contact Us</a>  </li>
                </ul>
                  

            </div>

            <div className='col-12 col-md-4' style={{borderLeft: "2px solid white"}}>
                <h5>Social Media </h5>
                <ul>
                    <li style={{...style7}}><i style={{color: "orange"}}className='fa fa-facebook'></i> <a style={{...style5, ...style6}} href="https://wwww.facebook.com"> godsgloryrestorationpropheticministry</a></li>
                    <li style={{...style7}}><i style={{color: "orange"}} className='fa fa-instagram'></i> <a style={{...style5, ...style6}}  href="https://www.instagram.com"> godsgloryrestorationpropheticministry</a> </li>
                    <li style={{...style7}}><i style={{color: "orange"}} className='fa fa-youtube'></i> <a style={{...style5, ...style6}}  href="https://www.instagram.com"> godsgloryrestorationpropheticministry</a> </li>
                </ul>
                  

            </div>


      



        </div>
      
      <p className='text-center'>All Right Reserved &copy; God's Glory Restoration Prophetic Ministry 2023 </p>
    </div>
  )
}

export default Footer
