import {FacebookDiv, UpdatesHeading} from './Updates.styled';
import { useState, useEffect } from 'react';

export default function Updates() {

    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() =>{
        setHasLoaded(true);
    }, [hasLoaded]);


    function reloadPage() {
   // The last "domLoading" Time //
    var currentDocumentTimestamp =
    new Date(performance.timing.domLoading).getTime();
    // Current Time //
    var now = Date.now();
    // Ten Seconds //
    var tenSec = 10 * 100;
    // Plus Ten Seconds //
    var plusTenSec = currentDocumentTimestamp + tenSec;
    if (now > plusTenSec) {
        window.location.reload();
    } else {}
    }
    reloadPage();

    

    return ( 
        <div style={{color: '#E6D4B0'}}>
            
            <UpdatesHeading>Latest News</UpdatesHeading>
            <FacebookDiv>
                {!hasLoaded && <div>Loading</div>}
            {hasLoaded && <div style={{width: '500px'}}
                className="fb-page" 
                data-href="https://www.facebook.com/BurekAtPeces" 
                data-tabs="timeline" 
                data-width="500" 
                data-height="900" 
                data-small-header="false" 
                data-adapt-container-width="true" 
                data-hide-cover="false" 
                data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/BurekAtPeces" class="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/BurekAtPeces">Burek at Pece&#039;s</a>
                </blockquote>
            </div>}
            </FacebookDiv>
        </div>
    );
}