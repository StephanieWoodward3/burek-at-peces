import {ContactUsHeading, AddressBox} from './ContactUs.styled';
import Facebook from '../images/facebook.png';
import Map from '../images/map.PNG';

export default function ContactUs() {
    return ( 
        <div style={{color: '#E6D4B0'}}>
            <ContactUsHeading>Contact Us</ContactUsHeading>
            <AddressBox>
                <p>We are located at: 1/43 Newcastle Street Cringilla Wollongong, NSW, Australia, 2502
                 Open 7 days from 4.30am - 1.30pm</p>
                <img src={Map}></img>
                
            </AddressBox>
            <p>Phone: (02) 4276 2945 </p>
            <p>Please feel free to contact us on Facebook <a href="https://www.facebook.com/BurekAtPeces/" target="_blank" rel="noopener noreferrer"><img src={Facebook}></img></a></p>
        </div>
    );
}