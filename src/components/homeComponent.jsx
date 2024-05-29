import { colors } from '@mui/material'
import React from 'react'

const HomeComponent = () => {
    return (
        <>
            <div className="hero_area">
                {/* slider section */}
                <section className="slider_section ">
                    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="detail-box">
                                                <h5>Bostorek Bookstore</h5>
                                                <h1>
                                                    For All Your <br />
                                                    Reading Needs
                                                </h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Iste quam velit saepe dolorem deserunt quo quidem ad
                                                    optio.
                                                </p>
                                                <a href="">Read More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src="assets/images/slider-img.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="detail-box">
                                                <h5>Bostorek Bookstore</h5>
                                                <h1>
                                                    For All Your <br />
                                                    Reading Needs
                                                </h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Iste quam velit saepe dolorem deserunt quo quidem ad
                                                    optio.
                                                </p>
                                                <a href="">Read More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src="assets/images/slider-img.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="detail-box">
                                                <h5>Bostorek Bookstore</h5>
                                                <h1>
                                                    For All Your <br />
                                                    Reading Needs
                                                </h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Iste quam velit saepe dolorem deserunt quo quidem ad
                                                    optio.
                                                </p>
                                                <a href="">Read More</a>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src="assets/images/slider-img.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel_btn_box">
                            <a
                                className="carousel-control-prev"
                                href="#customCarousel1"
                                role="button"
                                data-slide="prev"
                            >
                                <i className="fa fa-angle-left" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#customCarousel1"
                                role="button"
                                data-slide="next"
                            >
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </section>
                {/* end slider section */}
            </div>
            {/* catagory section */}
            <section className="catagory_section layout_padding">
                <div className="catagory_container">
                    <div className="container ">
                        <div className="heading_container heading_center">
                            <h2>Books Categories</h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-4 ">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src="assets/images/cat1.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>Textbooks</h5>
                                        <p>Equip yourself with essential knowledge and learning resources for academic study and professional development. Textbooks provide structured content, exercises, and information tailored to specific subjects, disciplines, and educational levels, serving as valuable tools for students, educators, and lifelong learners.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 ">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src="assets/images/cat2.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>Science</h5>
                                        <p>
                                            Unlock the mysteries of the universe and delve into the wonders of scientific inquiry. Science books cover a wide range of topics, from biology, chemistry, and physics to astronomy, ecology, and technology, offering explanations, theories, and discoveries that expand our understanding of the natural world.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 ">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src="assets/images/cat3.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>History</h5>
                                        <p>Explore the rich tapestry of human civilization through the lens of the past. History books chronicle significant events, periods, and movements, providing insights into cultures, societies, and the evolution of humanity over time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 ">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src="assets/images/cat4.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>Biography</h5>
                                        <p>Delve into the lives of remarkable individuals and gain insights into their personal stories, achievements, and experiences. Biographies provide detailed accounts of real people's lives, offering inspiration, knowledge, and a deeper understanding of historical and contemporary figures.</p>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 ">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src="assets/images/cat5.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>Adventure</h5>
                                        <p>Embark on thrilling journeys filled with excitement, danger, and discovery. Adventure books take readers on expeditions to distant lands, daring escapades in pursuit of treasure or exploration, and encounters with unexpected challenges and triumphs.

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 ">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src="assets/images/cat6.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>Fantasy</h5>
                                        <p> Immerse yourself in worlds of magic, mythical creatures, and extraordinary adventures. Fantasy books often feature epic quests, heroic characters, and imaginative settings that transport readers to realms beyond the ordinary.
                                            
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end catagory section */}
            {/* about section */}
            <section className="about_section layout_padding">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src="assets/images/about-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>About Our Bookstore</h2>
                                </div>
                                <p>
                                Welcome to Our Bookstore: Your premier destination for all things literature! Dive into our vast collection of books curated especially for students, offering a seamless e-commerce experience tailored to your academic needs.
                                </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end about section */}
            {/* client section */}
            <section className="client_section layout_padding">
                <div className="container ">
                    <div className="heading_container heading_center">
                        <h2>What Says Customers</h2>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="client_container ">
                                <div className="detail-box">
                                    <p>
                                    I love the convenience of shopping for textbooks on this site! It's so easy to find exactly what I need for my classes, and the prices are unbeatable. Highly recommend to all fellow students!
                                    </p>
                                    <span>
                                        <i className="fa fa-quote-left" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="client_id">
                                    <div className="img-box">
                                        <img src="assets/images/c1.jpg" alt="" />
                                    </div>
                                    <div className="client_name">
                                        <h5>Jone Mark</h5>
                                        <h6>Student</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mx-auto">
                            <div className="client_container ">
                                <div className="detail-box">
                                    <p>
                                    As a student, I rely on this bookstore for all my reading needs. The selection is extensive, covering everything from textbooks to novels, and the checkout process is smooth and hassle-free. A definite must-visit for any student!
                                    </p>
                                    <span>
                                        <i className="fa fa-quote-left" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="client_id">
                                    <div className="img-box">
                                        <img src="assets/images/c2.jpg" alt="" />
                                    </div>
                                    <div className="client_name">
                                        <h5>Anna Crowe</h5>
                                        <h6>Student</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mx-auto">
                            <div className="client_container ">
                                <div className="detail-box">
                                    <p>
                                    This bookstore has become my go-to for all my course materials. The user-friendly interface makes browsing and purchasing a breeze, and the quick delivery ensures I always have my books in time for classes. Couldn't ask for a better online bookstore!
                                    </p>
                                    <span>
                                        <i className="fa fa-quote-left" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="client_id">
                                    <div className="img-box">
                                        <img src="assets/images/c3.jpg" alt="" />
                                    </div>
                                    <div className="client_name">
                                        <h5>Hilley James</h5>
                                        <h6>Student</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end client section */}
            {/* blog section */}
            <section className="blog_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>From Our Blog</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box">
                                <div className="img-box">
                                    <img src="assets/images/b1.jpg" alt="" />
                                    <h4 className="blog_date">
                                        <span>22 January 2023</span>
                                    </h4>
                                </div>
                                <div className="detail-box">
                                    <h5> Exploring Classic Literature</h5>
                                    <p>
                                    Embark on a journey through classic literature with our curated selection of timeless masterpieces. Our blog offers insights, analyses, and recommendations to enrich your reading experience.
                                    </p>
                                    <a href="">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box">
                                <div className="img-box">
                                    <img src="assets/images/b2.jpg" alt="" />
                                    <h4 className="blog_date">
                                        <span>26 mai 2024</span>
                                    </h4>
                                </div>
                                <div className="detail-box">
                                    <h5>Spotlight on Contemporary Works</h5>
                                    <p>
                                    Discover the latest trends, voices, and narratives shaping contemporary literature. From debut novels to groundbreaking poetry, our blog celebrates modern storytelling and engages with pressing issues and themes.
                                    </p>
                                    <a href="">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end blog section */}
            {/* contact section */}
            <section className="contact_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="heading_container ">
                                <h2 className="">Contact Us</h2>
                            </div>
                            <form action="#">
                                <div>
                                    <input type="text" placeholder="Name" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Pone Number" />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="message-box"
                                        placeholder="Message"
                                    />
                                </div>
                                <div className="btn-box">
                                    <button>SEND</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src="assets/images/contact-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end contact section */}
            {/* info section */}
            <section className="info_section layout_padding2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 info-col">
                            <div className="info_detail">
                                <h4>About Us</h4>
                                <p>
                                Welcome to Our Bookstore: Your premier destination for all things literature! Dive into our vast collection of books curated especially for students, offering a seamless e-commerce experience tailored to your academic needs.
                                </p>
                                <div className="info_social">
                                    <a href="">
                                        <i className="fa fa-facebook" aria-hidden="true" />
                                    </a>
                                    <a href="">
                                        <i className="fa fa-twitter" aria-hidden="true" />
                                    </a>
                                    <a href="">
                                        <i className="fa fa-linkedin" aria-hidden="true" />
                                    </a>
                                    <a href="">
                                        <i className="fa fa-instagram" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 info-col">
                            <div className="info_contact">
                                <h4>Address</h4>
                                <div className="contact_link_box">
                                    <a href="">
                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                        <span>Iset Sfax</span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-phone" aria-hidden="true" />
                                        <span>Call +216 51385868</span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        <span>mahmoudgh@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 info-col">
                            <div className="info_contact">
                                <h4>Newsletter</h4>
                                <form action="#">
                                    <input type="text" placeholder="Enter email" />
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 info-col">
                            <div className="map_container">
                                <div className="map">
                                    <div id="googleMap" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end info section */}
            {/* footer section */}
            <footer className="footer_section">
                <div className="container">
                    <p>
                        © <span id="displayYear" /> All Rights Reserved By
                        <a href="https://html.design/">Mahmoud Ghorbel</a>
                    </p>
                </div>
            </footer>
            {/* footer section */}
            {/* jQery */}
            {/* bootstrap js */}
            {/* custom js */}
            {/* Google Map */}
            {/* End Google Map */}
        </>

    )
}
export default HomeComponent