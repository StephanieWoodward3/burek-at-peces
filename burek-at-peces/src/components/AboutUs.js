import {ImageBox, AboutUsHeading, ContentBox} from './AboutUs.styled'
import PeceEating from '../images/PeceEating.jpg';
import AwardWinning from '../images/awardWinning.jpg';
import AwardWinning2 from '../images/awardWinning2.jpg';


export default function AboutUs() {
    return ( 
        <div style={{color: '#E6D4B0'}}>
            <AboutUsHeading>About Us</AboutUsHeading>
            <ImageBox>
                <img src={AwardWinning} ></img>
                <img src={AwardWinning2} style={{width: '23rem'}}></img>
                <img src={PeceEating} ></img>
                
            </ImageBox>
            <ContentBox>
                
                <p>In 2020 we were the winner of 'The most outstanding Fast food/Takeaway in the Illawarra & South Coast 2020'</p>
                <p>We are family owned and operated and have been around since 2002</p>

            </ContentBox>
            
        </div>
    );
}