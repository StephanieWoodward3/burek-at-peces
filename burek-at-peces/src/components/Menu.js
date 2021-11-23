import {MenuPageBox, MenuBox, PriceBox, MenuHeading, ImageBox} from './Menu.styled';
import {EntirePage} from '../App.styled'
import Burek from '../images/burek.jpg'

export default function Menu() {
    return ( 
        <>
        <EntirePage>
            <MenuHeading>Menu</MenuHeading>
            <MenuPageBox>
                <ImageBox><img src={Burek}></img></ImageBox>
                <MenuBox>
                <h3> Burek Fillings available daily </h3>
                <ul>
                    <li> Meat &amp; Cheese </li>
                    <li> Meat, Cheese &amp; Spinach </li>
                    <li> Cheese &amp; Spinach </li>
                    <li> Meat </li>
                    <li> Cheese </li>
                </ul>

                <h3> Vegan Burek Fillings available daily </h3>
                <ul>
                    <li> Potato &amp; Onion </li>
                    <li> Potato, Leek &amp; Mushroom </li>
                    <li> Apple </li>
                    <li> Pumpkin </li>
                </ul>

                <h3> When given a day's notice, we can also make </h3>
                <ul>
                    <li> Cherry &amp; Cheese </li>
                    <li> Cherry </li>
                    <li> Leek &amp; Mushroom </li>
                </ul>
                <p>... and anything else your tastebuds desire</p>
                </MenuBox>
                <PriceBox>
                   
                </PriceBox>
            </MenuPageBox>
            <PriceBox>
                <p>All Burek $6 a piece or $24 per tray</p>
            </PriceBox>
        </EntirePage>
        </>
    
    );
}