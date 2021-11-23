import JumperBack from '../images/jumperback.jpg'
import JumperFront from '../images/jumperfront.jpg'
import TShirtFront from '../images/tshirtFront.jpg'
import {MerchandisePageBox, MerchandiseHeading, TShirtBox, JumperBox, DescriptionBox} from './Merchandise.styled';
import {EntirePage} from '../App.styled';

export default function Merchandise() {
    return ( 
        <>
        <EntirePage>
            <MerchandiseHeading>Merchandise</MerchandiseHeading>
            <MerchandisePageBox>
                <TShirtBox>
                    <h3>T-Shirts $20</h3>
                    <img src={TShirtFront}></img>
                </TShirtBox>
                <DescriptionBox>
                    Both shirts and jumpers are available in childrens sizes and adults sizes up to a generous XXL
                </DescriptionBox>
                <JumperBox>
                    <h3>Jumpers $50</h3>
                    <img src={JumperFront}></img>
                    <img src={JumperBack}></img>
                </JumperBox>
            </MerchandisePageBox>
        </EntirePage>
        </>
    );
}