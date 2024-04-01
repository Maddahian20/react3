import React from 'react'
import Fcss from './Footer.module.css'
function footer() {
  return (
    <footer>
<table>
<tr>
<th>Albeton</th>  
<td><br></br></td><td><br></br></td>
    <td><a href='#'>Register Live or Push > </a></td>
    <td><a href='#'>About Ableton ></a></td> 
    <td><a href='#'>Jobs ></a></td>
    <td><socials className={Fcss.social}>
      <ul>
        <li id={Fcss.facebook}><i class="fa-brands fa-facebook"></i></li>
        <li id={Fcss.twiter}><i class="fa-brands fa-twitter"></i></li>
        <li id={Fcss.youtube}><i class="fa-brands fa-square-youtube"></i></li>
        <li id={Fcss.instagram}><i class="fa-brands fa-square-instagram"></i></li>
      </ul>
    </socials></td>
          </tr>
      <tr>
      <td><br></br></td><td><br></br></td><td><br></br></td><td><br></br></td>
      <td><a href='#'> Education</a></td>
    <td><a href='#'>Offers for student and teachers ></a></td> 
    <td><a href='#'>Offers for institutions ></a></td>
      </tr>
      <tr>
      <td><br></br></td><td><br></br></td><td><br></br></td><td><br></br></td>
      <td><a href='#'>Sign up to our newsletter</a></td>
      <td><a href='#'>Enter your email address to stay up to date with the latest offers, tutorials, downloads and more.</a></td>
      

      </tr>  
     
</table>











   </footer>
  )
}

export default footer