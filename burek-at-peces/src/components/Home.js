import {ImageBox, AboutUsHeading, ContentBox} from './Home.styled.js'
import MakingBurek1 from '../images/makingBurek1.jpg'
import MakingBurek2 from '../images/makingBurek2.jpg'
import MakingBurek3 from '../images/makingBurek3.jpg'
import MakingBurek4 from '../images/makingBurek4.jpg'
import MakingBurek5 from '../images/makingBurek5.jpg'

export default function Home() {
    return ( 
        <div style={{color: '#E6D4B0'}}>
            <AboutUsHeading>Home</AboutUsHeading>
            <ImageBox>
                <img src={MakingBurek1}></img>
                <img src={MakingBurek2}></img>
                <img src={MakingBurek3}></img>
                <img src={MakingBurek4}></img>
                <img src={MakingBurek5}></img>
            </ImageBox>
            <ContentBox>
                
                    <h4>Burek is the best pasty food in the world!</h4>
                    
                    <p>It's made of pastries filled with ground meat, 
                    cheese or spinach and it's found in the cuisines of all Balkan countries that used to be part of the Ottoman Empire. 
                
                    Here at Burek at Pece's we specialise in providing high quality Burek to our customers on a daily basis. 
                    Delicious, fine flaky layers of hand worked pastry filled with a variety of savoury &amp; sweet fillings. 
                    Create your own &amp; vegan options now also available.</p>
                

                <p>Burek at Pece's are open every day from 4.30am to 1.30pm</p>
            </ContentBox>
        </div>
    );
}
