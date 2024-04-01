import React from 'react'
import Prcss from './Html-prime.module.css'
import Firstimage from '../Img/pic1.jpg'
import Image2 from '../Img/pic2.jpg'
import Image3 from '../Img/pic3.jpg'
function prime() {
  return (
    <>

   <center>
    <div>
   <img className={Prcss.firstpic} src={Firstimage}></img> 
 </div>
    
    <table className={Prcss.text1}>  
 <tr >
<td>
<p>We make <style >Live</style>, Push, Note and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</p>
</td><br></br>
<td>
    <p id={Prcss.paragraph2}>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world</p>
</td>
 </tr>
 
 </table>
  
   <div className={Prcss.parent}>
   </div>
   <div >
  <img className={Prcss.child} src={Image2}></img>
  </div>
  <div>
    <img className={Prcss.child2} src={Image3}></img>
  </div>
  <table className={Prcss.text1}>  
 <tr >
<td>
<p>Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.</p>
</td>
 </tr>
 
 </table>
  </center>
    </>
      )
} 

export default prime