import { HeartImage, ImageContainer } from "../components/styled/Image"
import { H1BlackTitleCenter, H2NewsTitleCenter } from "../components/styled/Title"
import { BlockWrapper, HomeWrapper, TextBoxLongTransparent, TextBoxSmallTransparent } from "../components/styled/Wrappers"


export const Home = () => {

  return ( <>
    <H1BlackTitleCenter>Welcome to Health map!</H1BlackTitleCenter>
    <HomeWrapper>
      <H2NewsTitleCenter></H2NewsTitleCenter>
      <BlockWrapper reverse> 
        <ImageContainer>
          <HeartImage src="/images/heart_atlas.webp" alt="heart on a map"/>
        </ImageContainer>
        <TextBoxSmallTransparent>Heart disease knows no borders. It is a leading cause of death worldwide, impacting millions of lives across continents, countries, and communities. Understanding the risk factors and prevalence of heart disease around the globe is crucial to addressing this silent epidemic.</TextBoxSmallTransparent>
      </BlockWrapper>
        
      <BlockWrapper>
        <ImageContainer>
        <HeartImage src="/images/atlas_heart.webp" alt="Atlas-heart"/>
        </ImageContainer>
        <TextBoxSmallTransparent>At Healthmap, we provide comprehensive data and visually engaging maps to shed light on the prevalence of heart disease and its risk factors worldwide. Our mission is to empower individuals, healthcare professionals, and policymakers with the information they need to make informed decisions and take proactive steps towards improving heart health.</TextBoxSmallTransparent>
      </BlockWrapper>
        
    </HomeWrapper>
    <HomeWrapper>
      <TextBoxLongTransparent><ul>
            <li>
              Interactive Maps : Explore our interactive maps to visualize heart disease trends and risk factors in different parts of the world. These maps provide a clear, at-a-glance understanding of how heart disease impacts various populations.<br />
            </li>
            <li>
              Risk Factors : Learn about the key risk factors contributing to heart disease, including lifestyle choices, genetic predispositions, and environmental influences. Understand how these factors vary across different regions and demographics.<br />        
            </li>
          </ul></TextBoxLongTransparent>
    </HomeWrapper>
  
  </>)

}