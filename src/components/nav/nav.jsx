import './nav.css'
function Navbar() {
    return (
        <>
            <div className="bar">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 4H4C2.89543 4 2 4.89543 2 6V8C2 9.10457 2.89543 10 4 10H20C21.1046 10 22 9.10457 22 8V6C22 4.89543 21.1046 4 20 4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20 14H4C2.89543 14 2 14.8954 2 16V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V16C22 14.8954 21.1046 14 20 14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </div>
                <div className='right-section'>
                    <div className="mail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg><small className='text'>contact@banyaphon-kongtham.com</small>
                    </div>

                    <div className="phone"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5342 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.271 2.11999 4.18001C2.095 3.90347 2.12787 3.62477 2.21649 3.36163C2.30512 3.09849 2.44756 2.85669 2.63476 2.65163C2.82196 2.44656 3.0498 2.28271 3.30379 2.17053C3.55777 2.05834 3.83233 2.00027 4.10999 2.00001H7.10999C7.5953 1.99523 8.06579 2.16708 8.43376 2.48354C8.80173 2.79999 9.04207 3.23945 9.10999 3.72001C9.23662 4.68007 9.47144 5.62273 9.80999 6.53001C9.94454 6.88793 9.97366 7.27692 9.8939 7.65089C9.81415 8.02485 9.62886 8.36812 9.35999 8.64001L8.08999 9.91001C9.51355 12.4136 11.5864 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1859 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg><small className='text'>+66631594914</small>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
