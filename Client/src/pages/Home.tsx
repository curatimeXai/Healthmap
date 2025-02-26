import { HeartImage, ImageContainer } from "../components/styled/Image"
import { H1BlackTitleCenter, H2NewsTitleCenter } from "../components/styled/Title"
import { BlockWrapper, HomeWrapper, TextBoxLongTransparent, TextBoxSmallTransparent } from "../components/styled/Wrappers"


export const Home = () => {

  return ( <>
    <H1BlackTitleCenter>Welcome to World Health map!</H1BlackTitleCenter>
    <HomeWrapper>
      <H2NewsTitleCenter></H2NewsTitleCenter>
      <BlockWrapper reverse> 
        <ImageContainer>
          <HeartImage src="/images/heart_atlas.webp" alt="heart on a map"/>
        </ImageContainer>
        <TextBoxSmallTransparent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam distinctio corrupti, officia quibusdam quisquam illo facilis assumenda sit similique quod asperiores eaque! Natus quas expedita explicabo est accusantium ad nisi.</TextBoxSmallTransparent>
      </BlockWrapper>
        
      <BlockWrapper>
        <ImageContainer>
        <HeartImage src="/images/atlas_heart.webp" alt="Atlas-heart"/>
        </ImageContainer>
        <TextBoxSmallTransparent>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui illo dolore dolores aspernatur nihil fugit praesentium esse, saepe at adipisci quidem commodi odit ipsum ut ipsam natus beatae doloribus eius.</TextBoxSmallTransparent>
      </BlockWrapper>
        
    </HomeWrapper>
    <HomeWrapper>
      <TextBoxLongTransparent>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ea id tempore. Saepe ullam odio fugit officiis autem doloribus perspiciatis explicabo? Quos vel reiciendis, reprehenderit ipsam pariatur nostrum voluptatum cumque!</TextBoxLongTransparent>
    </HomeWrapper>
  
  </>)

}