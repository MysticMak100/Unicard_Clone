import React from 'react';
import img7 from '../assets/pcidss_cert.svg';
import img4 from '../assets/whatsapp_bubble.webp'
import img5 from '../assets/rupee_bubble.webp'
import img6 from '../assets/antivirus_bubble.webp'

const CardComponent = ({ cardType }) => {
    let htmlContent;
    let img;
    if (cardType === 'card1') {
        htmlContent = `
            <h1 class="MainTitle">Help, just a WhatsApp away. Anytime, Anyday.</h1>
            <p class="Subtitle">During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.</p>
        `;
        img=img4
    } else if (cardType === 'card2') {
        htmlContent = `
            <h1 class="MainTitle">No hidden charges, no last minute surprises.</h1>
            <p class="Subtitle">100% money back guarantee if a charge is applied without your knowledge.</p>
        `;
        img=img5
    } else if (cardType === 'card3') {
        htmlContent = `
            <h1 class="MainTitle">Super secure. Because we care about your money.</h1>
        `;
        img=img6
    }

    return (
        <div className="Card-container">
            <img src={img} alt="Bubble" className='Logo' />
            <div className='Mobileview'>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            {cardType === 'card3' && <img src={img7} alt="Security" className="svg-image" />}
            </div>
        </div>
    );
};

export default CardComponent;
