//temporary page that will hold content for userpage later

import '../../App.css'
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const UserPageDetail = () => {
const { id } = userParams()
const {data:userInfo, isPending, error} = useFetch('http://localhost:3456/api/userInfo/' + id)


import {
    HeroContainer,
    HeroWrapper,
    HeroLeft,
    HeroRight,
    Image,
   
  } from "./HeroElements";
 
return (
    <main>
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1> {userInfo.userName} </h1>
            <h5>level: {userInfo.level}</h5>
            <p>
              Coding is temporary, cooking is forever.
            </p>
          <br></br>
            <Link to="/UserProfile">
          <Button variant="dark" className="btn-dark">  
          User Settings
           </Button>
            </Link>
            <br></br>
            <Link to="/CreateYourOwnRecipe">
          <Button variant="dark" className="btn-dark">  
          Create your own recipe
           </Button>
            </Link>
  
          
          </HeroLeft>
          <HeroRight>
            <Image
              src="images/chefprofilepic.png"
              alt="chefprofilepic"
            />
          </HeroRight>
        </HeroWrapper>
      </HeroContainer>
    )) 
    </main>
  );
}

export default UserPageDetail