import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import img1 from '../images/img_bg_1.jpg'
import img2 from '../images/img_bg_2.jpg'
import img3 from '../images/img_bg_3.jpg'
import img4 from '../images/img_bg_4.jpg'
import projectimg1 from '../images/project-1.jpg'
import projectimg2 from '../images/project-2.jpg'
import projectimg3 from '../images/project-3.jpg'
import projectimg4 from '../images/project-4.jpg'
import projectimg5 from '../images/project-5.jpg'
import projectimg6 from '../images/project-6.jpg'
import projectimg7 from '../images/project-7.jpg'
import projectimg8 from '../images/project-8.jpg'
import projectimg9 from '../images/project-9.jpg'

class RoutineApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div class="fh5co-loader"></div>
                <nav class="fh5co-nav" role="navigation">
                    <div class="top">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 text-right">
                                    <p class="site">www.yourdomainname.com</p>
                                    <p class="num">Call: +01 123 456 7890</p>
                                    <ul class="fh5co-social">
                                        <li><Link to="#"><i class="icon-facebook2"></i></Link></li>
                                        <li><Link to="#"><i class="icon-twitter2"></i></Link></li>
                                        <li><Link to="#"><i class="icon-dribbble2"></i></Link></li>
                                        <li><Link to="#"><i class="icon-github"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="top-menu">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-2">
                                    <div id="fh5co-logo"><Link to="#"><i class="icon-study"></i>&nbsp;&nbsp;Routine<span></span></Link></div>
                                </div>
                                <div class="col-xs-10 text-right menu-1">
                                    <ul>
                                        <li class="active"><Link to="#">Home</Link></li>
                                        <li><Link to="#">Courses</Link></li>
                                        <li><Link to="#">Teacher</Link></li>
                                        <li><Link to="#">About</Link></li>
                                        <li><Link to="#">Pricing</Link></li>
                                        <li class="has-dropdown">
                                            <Link to="#">Blog</Link>
                                            <ul class="dropdown">
                                                <li><Link to="#">Web Design</Link></li>
                                                <li><Link to="#">eCommerce</Link></li>
                                                <li><Link to="#">Branding</Link></li>
                                                <li><Link to="#">API</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="#">Contact</Link></li>
                                        <li class="btn-cta"><Link to="#"><span>Login</span></Link></li>
                                        <li class="btn-cta"><Link to="#"><span>Create a Course</span></Link></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </nav>
                <aside id="fh5co-hero">
                    <div class="flexslider">
                        <ul class="slides">
                            <li style={{ backgroundImage: `url(${img1})` }}>
                                <div class="overlay-gradient"></div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-8 col-md-offset-2 text-center slider-text">
                                            <div class="slider-text-inner">
                                                <h1>The Roots of Education are Bitter, But the Fruit is Sweet</h1>
                                                <h2>Brought to you by <Link to="#">freehtml5.co</Link></h2>
                                                <p><Link to="#" class="btn btn-primary btn-lg">Start Learning Now!</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li style={{ backgroundImage: `url(${img2})` }}>
                                <div className="overlay-gradient"></div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-8 col-md-offset-2 text-center slider-text">
                                            <div class="slider-text-inner">
                                                <h1>The Great Aim of Education is not Knowledge, But Action</h1>
                                                <h2>Brought to you by <Link to="#">freehtml5.co</Link></h2>
                                                <p> <Link to="#" class="btn btn-primary btn-lg btn-learn"> Start Learning Now!</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li style={{ backgroundImage: `url(${img3})` }}>
                                <div class="overlay-gradient"></div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-8 col-md-offset-2 text-center slider-text">
                                            <div class="slider-text-inner">
                                                <h1>We Help You to Learn New Things</h1>
                                                <h2>Brought to you by <Link to="#">freehtml5.co</Link></h2>
                                                <p><Link to="#" class="btn btn-primary btn-lg btn-learn">Start Learning Now!</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div id="fh5co-course-categories">
                    <div class="container">
                        <div class="row animate-box">
                            <div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
                                <h2>Course categories</h2>
                                <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 col-sm-6 text-center animate-box">
                                <div class="services">
                                    <span class="icon">
                                        <i class="icon-shop"></i>
                                    </span>
                                    <div class="desc">
                                        <h3><Link to="#">Business</Link></h3>
                                        <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 text-center animate-box">
                                <div class="services">
                                    <span class="icon">
                                        <i class="icon-heart4"></i>
                                    </span>
                                    <div class="desc">
                                        <h3><Link to="#">Health &amp; Psychology</Link></h3>
                                        <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 text-center animate-box">
                                <div class="services">
                                    <span class="icon">
                                        <i class="icon-banknote"></i>
                                    </span>
                                    <div class="desc">
                                        <h3><Link to="#">Accounting</Link></h3>
                                        <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 text-center animate-box">
                                <div class="services">
                                    <span class="icon">
                                        <i class="icon-lab2"></i>
                                    </span>
                                    <div class="desc">
                                        <h3><Link to="#">Science &amp; Technology</Link></h3>
                                        <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 text-center animate-box">
                                <div class="services">
                                    <span class="icon">
                                        <i class="icon-photo"></i>
                                    </span>
                                    <div class="desc">
                                        <h3><Link to="#">Art &amp; Media</Link></h3>
                                        <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 text-center animate-box">
                                <div class="services">
                                    <span class="icon">
                                        <i class="icon-home-outline"></i>
                                    </span>
                                    <div class="desc">
                                        <h3><Link to="#">Real Estate</Link></h3>
                                        <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 text-center animate-box">
                                <div class="services">
                                    <span class="icon">
                                        <i class="icon-bubble3"></i>
                                    </span>
                                    <div class="desc">
                                        <h3><Link to="#">Language</Link></h3>
                                        <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 text-center animate-box">
                                <div class="services">
                                    <span class="icon">
                                        <i class="icon-world"></i>
                                    </span>
                                    <div class="desc">
                                        <h3><Link to="#">Web &amp; Programming</Link></h3>
                                        <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="fh5co-counter" class="fh5co-counters" style={{ backgroundImage: `url(${img4})` }} data-stellar-background-ratio="0.5">
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 col-md-offset-1">
                                <div class="row">
                                    <div class="col-md-3 col-sm-6 text-center animate-box">
                                        <span class="icon"><i class="icon-world"></i></span>
                                        <span class="fh5co-counter js-counter" data-from="0" data-to="3297" data-speed="5000" data-refresh-interval="50"></span>
                                        <span class="fh5co-counter-label">Foreign Followers</span>
                                    </div>
                                    <div class="col-md-3 col-sm-6 text-center animate-box">
                                        <span class="icon"><i class="icon-study"></i></span>
                                        <span class="fh5co-counter js-counter" data-from="0" data-to="3700" data-speed="5000" data-refresh-interval="50"></span>
                                        <span class="fh5co-counter-label">Students Enrolled</span>
                                    </div>
                                    <div class="col-md-3 col-sm-6 text-center animate-box">
                                        <span class="icon"><i class="icon-bulb"></i></span>
                                        <span class="fh5co-counter js-counter" data-from="0" data-to="5034" data-speed="5000" data-refresh-interval="50"></span>
                                        <span class="fh5co-counter-label">Classes Complete</span>
                                    </div>
                                    <div class="col-md-3 col-sm-6 text-center animate-box">
                                        <span class="icon"><i class="icon-head"></i></span>
                                        <span class="fh5co-counter js-counter" data-from="0" data-to="1080" data-speed="5000" data-refresh-interval="50"></span>
                                        <span class="fh5co-counter-label">Certified Teachers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="fh5co-course">
                    <div class="container">
                        <div class="row animate-box">
                            <div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
                                <h2>Our Course</h2>
                                <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 animate-box">
                                <div class="course">
                                    <Link href="#" class="course-img" style={{ backgroundImage: `url(${projectimg1})` }}>
                                    </Link>
                                    <div class="desc">
                                        <h3><Link to="#">Web Master</Link></h3>
                                        <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                                        <span><Link to="#" class="btn btn-primary btn-sm btn-course">Take A Course</Link></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 animate-box">
                                <div class="course">
                                    <Link href="#" class="course-img" style={{ backgroundImage: `url(${projectimg2})` }}>
                                    </Link>
                                    <div class="desc">
                                        <h3><Link to="#">Business &amp; Accounting</Link></h3>
                                        <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                                        <span><Link to="#" class="btn btn-primary btn-sm btn-course">Take A Course</Link></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 animate-box">
                                <div class="course">
                                    <Link href="#" class="course-img" style={{ backgroundImage: `url(${projectimg3})` }}>
                                    </Link>
                                    <div class="desc">
                                        <h3><Link to="#">Science &amp; Technology</Link></h3>
                                        <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                                        <span><Link to="#" class="btn btn-primary btn-sm btn-course">Take A Course</Link></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 animate-box">
                                <div class="course">
                                    <Link href="#" class="course-img" style={{ backgroundImage: `url(${projectimg4})` }}>
                                    </Link>
                                    <div class="desc">
                                        <h3><Link to="#">Health &amp; Psychology</Link></h3>
                                        <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                                        <span><Link to="#" class="btn btn-primary btn-sm btn-course">Take A Course</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="fh5co-testimonial" style={{ backgroundImage: `url(${projectimg4})` }}>
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row animate-box">
                            <div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
                                <h2><span>Testimonials</span></h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10 col-md-offset-1">
                                <div class="row animate-box">
                                    <div class="owl-carousel owl-carousel-fullwidth">
                                        <div class="item">
                                            <div class="testimony-slide active text-center">
                                                <div class="user" style={{ backgroundImage: `url(${projectimg4})` }}></div>
                                                <span>Mary Walker<br /><small>Students</small></span>
                                                <blockquote>
                                                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                                                </blockquote>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="testimony-slide active text-center">
                                                <div class="user" style={{ backgroundImage: `url(${projectimg4})` }}></div>
                                                <span>Mike Smith<br /><small>Students</small></span>
                                                <blockquote>
                                                    <p>&ldquo;Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                                                </blockquote>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="testimony-slide active text-center">
                                                <div class="user" style={{ backgroundImage: `url(${projectimg4})` }}></div>
                                                <span>Rita Jones<br /><small>Teacher</small></span>
                                                <blockquote>
                                                    <p>&ldquo;Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="fh5co-blog">
                    <div class="container">
                        <div class="row animate-box">
                            <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <h2>Blog &amp; Events</h2>
                                <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                            </div>
                        </div>
                        <div class="row row-padded-mb">
                            <div class="col-md-4 animate-box">
                                <div class="fh5co-event">
                                    <div class="date text-center"><span>15<br />Mar.</span></div>
                                    <h3><a href="#">USA, International Triathlon Event</a></h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <p><a href="#">Read More</a></p>
                                </div>
                            </div>
                            <div class="col-md-4 animate-box">
                                <div class="fh5co-event">
                                    <div class="date text-center"><span>15<br />Mar.</span></div>
                                    <h3><a href="#">USA, International Triathlon Event</a></h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <p><a href="#">Read More</a></p>
                                </div>
                            </div>
                            <div class="col-md-4 animate-box">
                                <div class="fh5co-event">
                                    <div class="date text-center"><span>15<br />Mar.</span></div>
                                    <h3><a href="#">New Device Develope by Microsoft</a></h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <p><a href="#">Read More</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-4">
                                <div class="fh5co-blog animate-box">
                                    <a href="#" class="blog-img-holder" style={{ backgroundImage: `url(${img4})` }}></a>
                                    <div class="blog-text">
                                        <h3><a href="#">Healty Lifestyle &amp; Living</a></h3>
                                        <span class="posted_on">March. 15th</span>
                                        <span class="comment"><a href="">21<i class="icon-speech-bubble"></i></a></span>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="fh5co-blog animate-box">
                                    <a href="#" class="blog-img-holder" style={{ backgroundImage: `url(${img4})` }}></a>
                                    <div class="blog-text">
                                        <h3><a href="#">Healty Lifestyle &amp; Living</a></h3>
                                        <span class="posted_on">March. 15th</span>
                                        <span class="comment"><a href="">21<i class="icon-speech-bubble"></i></a></span>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="fh5co-blog animate-box">
                                    <a href="#" class="blog-img-holder" style={{ backgroundImage: `url(${img4})` }}></a>
                                    <div class="blog-text">
                                        <h3><a href="#">Healty Lifestyle &amp; Living</a></h3>
                                        <span class="posted_on">March. 15th</span>
                                        <span class="comment"><a href="">21<i class="icon-speech-bubble"></i></a></span>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="fh5co-pricing" class="fh5co-bg-section">
                    <div class="container">
                        <div class="row animate-box">
                            <div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
                                <h2>Plan &amp; Pricing</h2>
                                <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="pricing pricing--rabten">
                                <div class="col-md-4 animate-box">
                                    <div class="pricing__item">
                                        <div class="wrap-price">
                                            <h3 class="pricing__title">Trial</h3>
                                        </div>
                                        <div class="pricing__price">
                                            <span class="pricing__anim pricing__anim--1">
                                                <span class="pricing__currency">$</span>0
                                            </span>
                                            <span class="pricing__anim pricing__anim--2">
                                                <span class="pricing__period">per year</span>
                                            </span>
                                        </div>
                                        <div class="wrap-price">
                                            <ul class="pricing__feature-list">
                                                <li class="pricing__feature">One Day Trial</li>
                                                <li class="pricing__feature">Limited Courses</li>
                                                <li class="pricing__feature">Free 3 Lessons</li>
                                                <li class="pricing__feature">No Supporter</li>
                                                <li class="pricing__feature">No Tutorial</li>
                                                <li class="pricing__feature">No Ebook</li>
                                                <li class="pricing__feature">Limited Registered User</li>
                                            </ul>
                                            <button class="pricing__action">Choose plan</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 animate-box">
                                    <div class="pricing__item">
                                        <div class="wrap-price">
                                            <h3 class="pricing__title">Silver</h3>
                                        </div>
                                        <div class="pricing__price">
                                            <span class="pricing__anim pricing__anim--1">
                                                <span class="pricing__currency">$</span>79
                                            </span>
                                            <span class="pricing__anim pricing__anim--2">
                                                <span class="pricing__period">per year</span>
                                            </span>
                                        </div>
                                        <div class="wrap-price">
                                            <ul class="pricing__feature-list">
                                                <li class="pricing__feature">One Year Standard Access</li>
                                                <li class="pricing__feature">Limited Courses</li>
                                                <li class="pricing__feature">300+ Lessons</li>
                                                <li class="pricing__feature">Random Supporter</li>
                                                <li class="pricing__feature">View Only Ebook</li>
                                                <li class="pricing__feature">Standard Tutorials</li>
                                                <li class="pricing__feature">Unlimited Registered User</li>
                                            </ul>
                                            <button class="pricing__action">Choose plan</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 animate-box">
                                    <div class="pricing__item">
                                        <div class="wrap-price">
                                            <h3 class="pricing__title">Gold</h3>
                                        </div>
                                        <div class="pricing__price">
                                            <span class="pricing__anim pricing__anim--1">
                                                <span class="pricing__currency">$</span>499
                                             </span>
                                            <span class="pricing__anim pricing__anim--2">
                                                <span class="pricing__period">per year</span>
                                            </span>
                                        </div>
                                        <div class="wrap-price">
                                            <ul class="pricing__feature-list">
                                                <li class="pricing__feature">Life Time Access</li>
                                                <li class="pricing__feature">Unlimited All Courses</li>
                                                <li class="pricing__feature">7000+ Lessons &amp; Growing</li>
                                                <li class="pricing__feature">Free Supporter</li>
                                                <li class="pricing__feature">Free Ebook Downloads</li>
                                                <li class="pricing__feature">Premium Tutorials</li>
                                                <li class="pricing__feature">Unlimited Registered User</li>
                                            </ul>
                                            <button class="pricing__action">Choose plan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="fh5co-register" style={{ backgroundImage: `url(${projectimg4})` }}>
                    <div class="overlay"></div>
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 animate-box">
                            <div class="date-counter text-center">
                                <h2>Get 400 of Online Courses for Free</h2>
                                <h3>By Mike Smith</h3>
                                <div class="simply-countdown simply-countdown-one"></div>
                                <p><strong>Limited Offer, Hurry Up!</strong></p>
                                <p><a href="#" class="btn btn-primary btn-lg btn-reg">Register Now!</a></p>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="fh5co-gallery" class="fh5co-bg-section">
                    <div class="row text-center">
                        <h2><span>Instagram Gallery</span></h2>
                    </div>
                    <div class="row">
                        <div class="col-md-3 col-padded">
                            <Link to="#" class="gallery" style={{ backgroundImage: `url(${projectimg4})` }}></Link>
                        </div>
                        <div class="col-md-3 col-padded">
                            <Link to="#" class="gallery" style={{ backgroundImage: `url(${projectimg4})` }}></Link>
                        </div>
                        <div class="col-md-3 col-padded">
                            <Link to="#" class="gallery" style={{ backgroundImage: `url(${projectimg4})` }}></Link>
                        </div>
                        <div class="col-md-3 col-padded">
                            <Link to="#" class="gallery" style={{ backgroundImage: `url(${projectimg4})` }}></Link>
                        </div>
                    </div>
                </div>


                <footer id="fh5co-footer" role="contentinfo" style={{ backgroundImage: `url(${projectimg4})` }}>
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row row-pb-md">
                            <div class="col-md-3 fh5co-widget">
                                <h3>About Education</h3>
                                <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                            </div>
                            <div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1 fh5co-widget">
                                <h3>Learning</h3>
                                <ul class="fh5co-footer-links">
                                    <li><Link to="#">Course</Link></li>
                                    <li><Link to="#">Blog</Link></li>
                                    <li><Link to="#">Contact</Link></li>
                                    <li><Link to="#">Terms</Link></li>
                                    <li><Link to="#">Meetups</Link></li>
                                </ul>
                            </div>

                            <div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1 fh5co-widget">
                                <h3>Learn &amp; Grow</h3>
                                <ul class="fh5co-footer-links">
                                    <li><Link to="#">Blog</Link></li>
                                    <li><Link to="#">Privacy</Link></li>
                                    <li><Link to="#">Testimonials</Link></li>
                                    <li><Link to="#">Handbook</Link></li>
                                    <li><Link to="#">Held Desk</Link></li>
                                </ul>
                            </div>

                            <div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1 fh5co-widget">
                                <h3>Engage us</h3>
                                <ul class="fh5co-footer-links">
                                    <li><Link to="#">Marketing</Link></li>
                                    <li><Link to="#">Visual Assistant</Link></li>
                                    <li><Link to="#">System Analysis</Link></li>
                                    <li><Link to="#">Advertise</Link></li>
                                </ul>
                            </div>

                            <div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1 fh5co-widget">
                                <h3>Legal</h3>
                                <ul class="fh5co-footer-links">
                                    <li><Link to="#">Find Designers</Link></li>
                                    <li><Link to="#">Find Developers</Link></li>
                                    <li><Link to="#">Teams</Link></li>
                                    <li><Link to="#">Advertise</Link></li>
                                    <li><Link to="#">API</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div class="row copyright">
                            <div class="col-md-12 text-center">
                                <p>
                                    <small class="block">&copy; 2016 Free HTML5. All Rights Reserved.</small>
                                    <small class="block">Designed by <Link to="#">FreeHTML5.co</Link> Demo Images: <Link to="#">Unsplash</Link> &amp; <Link to="#">Pexels</Link></small>
                                </p>
                            </div>
                        </div>

                    </div>
                </footer>
            </div >
        )
    }
}

export default RoutineApp