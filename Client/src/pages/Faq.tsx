import { H1RedTitle, H2NewsTitle } from "../components/styled/Title"
import { TextBoxLongTransparent, WhiteWrapper } from "../components/styled/Wrappers"

export const Faq = () => {

return(
<>
<H1RedTitle>FAQ</H1RedTitle>
<WhiteWrapper>
  <TextBoxLongTransparent>
    <H2NewsTitle>What types of data can I explore on Healthmaps interactive maps?</H2NewsTitle> 
    Prevalence of heart disease, as well as key risk factors and more.
  </TextBoxLongTransparent>
</WhiteWrapper>

<WhiteWrapper>
  <TextBoxLongTransparent>
    <H2NewsTitle>How can I stay updated with new insights from Healthmap?</H2NewsTitle> 
    You can follow us on social media, or check our platform regularly for the latest updates and reports.
  </TextBoxLongTransparent>
</WhiteWrapper>

<WhiteWrapper>
  <TextBoxLongTransparent>
    <H2NewsTitle>What are the common risk factors for cardiovascular diseases?</H2NewsTitle> 
    Common risk factors for cardiovascular diseases include high blood pressure, high cholesterol, smoking, diabetes, physical inactivity, poor diet, family history, excessive alcohol consumption, and stress. Healthy lifestyle choices like regular exercise, a balanced diet, quitting smoking, and managing stress can help reduce these risks.
    </TextBoxLongTransparent>
</WhiteWrapper>

<WhiteWrapper>
  <TextBoxLongTransparent>
    <H2NewsTitle>Where can I find information about pollution in my area?</H2NewsTitle> 
    Click on "Pollution Map" at the top of the screen to go to the Pollution Map to see information about pollution levels all over the world.
    </TextBoxLongTransparent>
</WhiteWrapper>

<WhiteWrapper>
  <TextBoxLongTransparent>
    <H2NewsTitle>How frequently is the data updated?</H2NewsTitle> 
    We strive to update our data regularly, incorporating the latest research and health reports to ensure accuracy and relevance.
  </TextBoxLongTransparent>
</WhiteWrapper>


</>)

}