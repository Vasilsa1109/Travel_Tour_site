import { Header } from '@widgets/ui/Header/Header';
import { Footer } from '@widgets/ui/Footer/Footer';
import './AboutPage.css'
import '../../../../src/index.css'
import { Button } from '@shared/ui/Button';
import { TravelGuide } from '@shared/ui/TravelGuide';
import { Hotels } from '@shared/ui/Hotels/Hotels';
export const AboutPage = () => {
    return (
        <>
            <Header />
            <main>
                <div className="min-h-screen flex items-center justify-center">
                    <h1>Welcome to about page</h1>
                    <img src="https://revelo.vercel.app/assets/images/about/about-page.jpg" alt="" />
                    <div className="description">
                        <div className="description__block">
                            <Button>About Company</Button>
                            <h2>Experience and Professional Tours & Travel Agency in the World</h2>
                        </div>

                        <div className="circle">
                            <Button>Years of experience</Button>
                            <h5>We have</h5>
                            <b>28+</b>
                        </div>
                        <div className="description__specializing">
                            <p>We specialize in crafting unforgettable city experiences for travelers seeking discover the heart and soul of urban landscapes.
                                <br />Our expertly guided tours take journey through vibrant streets, historic landmarks, and hidden gems of each city.</p>
                            <ul className='specializing'>
                                <li>Experience Agency</li>
                                <li>Professional Team</li>
                                <li>Low Cost Travel</li>
                                <li>Online Support 24/7</li>
                            </ul>
                            <Button>Explore tours →</Button>
                        </div>
                    </div>
                    <div className="company">
                        <img src="https://revelo.vercel.app/assets/images/about/about-feature1.jpg" alt="" />
                        <img src=" https://revelo.vercel.app/assets/images/about/about-feature2.jpg" alt="" />
                        <div className="block">
                            <img src="https://www.freeiconspng.com/uploads/travel-guide-icon-map-ticket-travel-icon-17.png" alt="" />
                            <h2>We Are Award Winning Company</h2>
                            <h4>At Pinnacle Business Solutions commitment to excellence and innovation earned</h4>
                            <div className="sub-block">
                                <img src="https://www.freeiconspng.com/uploads/badge-certificate-medal-quality-reward-icon--3.png" alt="" id='reward' />
                                <h2>5000+ Popular tour destinations</h2>
                                <h4>Our team of experts is dedicate developing cutting-edge strategies drive success</h4></div>
                        </div>
                    </div>
                    <div className="reasons">
                        <h2>Travel with Confidence Top Reasons to Choose Our Agency</h2>
                        <p>We work closely with our clients to understand challenges and <br /> objectives, providing customized solutions to enhance efficiency boost profitability,
                            and foster sustainable growth.</p>
                        <div className="circle">
                            <Button>Popular Destination</Button>
                            <b>3k+</b>
                        </div>
                        <div className="circle">
                            <Button>Satisfied Clients</Button>
                            <b>9m+</b>
                        </div>
                        <Button>Explore destinations →</Button>
                    </div>
                    <h2>Meet Our Experience Travel Guides</h2>
                    <h3>One site <Button>34,500</Button> most popular experience you’ll remember</h3>
                    <div className="tour-guides">
                        <TravelGuide imgSrc='https://revelo.vercel.app/assets/images/team/guide1.jpg' guide='John L. Simmons' designation='Co-founder' />
                        <TravelGuide imgSrc='https://revelo.vercel.app/assets/images/team/guide2.jpg' guide='Andrew K. Manley' designation='Senior Guide' />
                        <TravelGuide imgSrc='https://revelo.vercel.app/assets/images/team/guide3.jpg' guide='Drew J. Bridges' designation='Travel Guide' />
                        <TravelGuide imgSrc='https://revelo.vercel.app/assets/images/team/guide4.jpg' guide='Byron F. Simpson' designation='Travel Guide' />
                    </div>
                    <div className="benefit">
                        <img src="https://revelo.vercel.app/assets/images/video/shape1.png" alt="" />
                    </div>
                </div>
                <Hotels />
            </main>
            <Footer></Footer>
        </>
    )
}