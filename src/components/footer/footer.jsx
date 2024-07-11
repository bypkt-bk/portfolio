import './footer.css'
function Footer() {
    return (
        <>
             <div id='Contact' className="contact-section">
            <div className="contact-title">Contact</div>
            <div className="contact-subtitle">
                Let's create something amazing together. Contact me today.
            </div>
            <div className="contact-form">
                <div className="contact-inputs">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button className="contact-button">Send</button>
                </div>
                <div className="contact-info">
                <p><span>LinkedIn:</span> Banyaphon (boom) Kongtham</p>
                    <p><span>Github:</span> bypkt-bk</p>
                    <p><span>Facebook:</span> Banyaphon Kongtham</p>
                    <p><span>Line:</span> b_byp</p>
                    <p><span>Instagram:</span> bypkt</p>
                    <p><span>E-mail:</span> contact@banyaphon-kongtham.com</p>
                    <p><span>Phone:</span> +66631594914</p>
                </div>
            </div>
        </div>

        </>
    )
}

export default Footer
