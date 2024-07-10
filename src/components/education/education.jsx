import './education.css'
function Education() {
    return (
        <>
            <div className="section">
                <div className="title-education">Education
                </div>
                <div className="info">
                    <div className="tag">
                        <div className="uni">University</div>
                        <div className="high">Highschool</div>
                    </div>
                    <div className="lines"><div className="dot">
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="57" viewBox="0 0 55 57" fill="none">
                            <g filter="url(#filter0_d_208_573)">
                                <ellipse cx="27.0994" cy="28.5" rx="10" ry="10.5494" fill="#FB7185" />
                            </g>
                            <ellipse cx="27.0994" cy="28.5001" rx="6" ry="6.32967" fill="#FDA4AF" />
                            <defs>
                                <filter id="filter0_d_208_573" x="0.0993652" y="0.950562" width="54" height="55.0989" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feMorphology radius="8" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_208_573" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="4.5" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.984314 0 0 0 0 0.443137 0 0 0 0 0.521569 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_208_573" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_208_573" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="23" viewBox="0 0 21 23" fill="none">
                            <ellipse cx="10.0994" cy="11.5" rx="10" ry="10.5494" fill="#FECDD3" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="23" viewBox="0 0 21 23" fill="none">
                            <ellipse cx="10.0994" cy="11.5" rx="10" ry="10.5494" fill="#FECDD3" />
                        </svg></div>
                    </div>
                    <div className="school">
                        <div className="university">
                            <span>2022 - Present</span>
                            <p>Chulalongkorn university</p>
                            <p>Information technology (IT), Science Student Committee's,</p>
                            <p>Public Relations (PR) Designer, Department of Computer Science</p></div>
                       
                            <div className="upper">
                            <span>2019 - 2021</span>
                            <p>Princess Chulabhorn Science High School Mukdahan</p>
                            <p>Leader, Artificial Intelligence Science Project Club</p></div>
                        <div className="lower">
                            <span>2015 - 2018</span>
                            <p>Benchama Maharat School</p>
                        </div>
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default Education