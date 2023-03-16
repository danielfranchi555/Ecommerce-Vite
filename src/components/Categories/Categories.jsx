import { Center } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import iphone from "../../img/icon-iphone.png";
import macbook from "../../img/icon-macbook..png";
import watch from "../../img/icon-watch.png";
import airpods from "../../img/icon-airpods.png";


const Categories = () => {
  return (

    
      <div >
  <ul
        style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          width:'100%',
          listStyle:'none',
          gap:'50px'
        }}
      >
        <Link to={`/category/${'iphone'}`}>
           <li>
          <Center>
            <img src={iphone} style={{ width: "40px" }} alt="" />
          </Center>
          <Center>
          <a href=""> Iphones</a>
          </Center>
        </li>
        </Link>
        
        <Link  to={`/category/${'macbook'}`}>
         <li>
          <Center>
            <img src={macbook} style={{ width: "40px" }} alt="" />
          </Center>
          <Center>
          <a href=""> Macbook</a>
          </Center>
        </li>
        </Link>
       
       <Link  to={`/category/${'watch'}`}>
          <li>
          <Center>
            <img src={watch} style={{ width: "40px" }} alt="" />
          </Center>
          <Center>
            <a href=""> Watch</a>
          </Center>
        </li>
       </Link>
       <Link  to={`/category/${'airpods'}`}>
          <li>
          <Center>
            <img src={airpods} style={{ width: "40px" }} alt="" />
          </Center>
          <Center>
            <a href=""> Airpods</a>
          </Center>
        </li>
       </Link>
       
     
      </ul>
      </div>
    
    
  );
};

export default Categories;
