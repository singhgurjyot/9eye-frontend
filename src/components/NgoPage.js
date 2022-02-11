import React from 'react';
import img1 from './assets/ngo.jpg';
import img2 from './assets/ngo2.jpg';
import ngosvg from './assets/ngosvg.svg';
import ngosvgTab from './assets/ngoHeaderOverlayTab.svg';
import ngosvgMob from './assets/ngoHeaderOverlayMob.svg';
import './NgoPage.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Helmet } from "react-helmet";


var QRCode = require('qrcode.react');

function NgoPage() {
    return (
    <div className="ngo-page">
        <Helmet>
            <meta charSet="utf-8" />
			<title>99Health | NGO-The Bind Relief Association Delhi</title>
			<meta
				name="description"
				content="NGO-The Bind Relief Association Delhi."
				data-react-helmet="true"
			/>
		</Helmet>
        <div className="ngo-header">
        <div className="ngo-header-imgs">
            <img alt="overlay" className="ngo-header-img-overlay mobile" src = { ngosvgMob } />
            <img alt="overlay" className="ngo-header-img-overlay tablet" src = { ngosvgTab } />
            <img alt="overlay" className="ngo-header-img-overlay desktop" src = { ngosvg } />
        </div>
            <div className="ngo-header-details">
                <div className="ngo-heading">
                    <p className="ngo-name">THE BLIND RELIEF ASSOCIATION DELHI</p>
                    <p className="ngo-byline"> Helping the blind help themselves </p>
                    <div className="ngo-header-line"></div>
                </div>
                <p className="ngo-quote" >
                    <q>THERE IS NO BETTER WAY TO THANK GOD FOR YOUR SIGHT THAN GIVING A HELPING HAND TO SOMEONE IN DARK</q>
                </p>
                <a className="ngo-donate-btn donate-btn-header" href='https://blindrelief.org/donate/' target="_blank" rel="noopener noreferrer">DONATE</a>
            </div>

            <div className="ngo-nav">
                <p className="we-em">WE EMPOWER</p>

                    <div className="ngo-nav-item">
                        <Link to="education" spy={true} smooth={true} offset={-70} duration={500} >
                            <svg className="ngo-nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.612 58.318">
                                <path id="Path_1895" data-name="Path 1895" d="M1.166,85.094,12.9,90.745v9.408a2.06,2.06,0,0,0,1.166,1.856L36.51,112.821a2.062,2.062,0,0,0,.894.2h3.772a2.064,2.064,0,0,0,.894-.2l22.383-10.782a2.062,2.062,0,0,0,.981-1c.028-.062.055-.124.082-.187a2.06,2.06,0,0,0,.166-.809v-9.3l3.2-1.542v12.758a3.692,3.692,0,0,0-1.485,2l-1.821,5.933a3.692,3.692,0,0,0,.018,2.232l1.689,5.2a3.717,3.717,0,0,0,3.413,2.562h.115a3.687,3.687,0,0,0,3.45-2.349l1.952-4.956a3.724,3.724,0,0,0,.107-2.407L74.5,104a3.687,3.687,0,0,0-1.5-2.038V87.219l4.445-2.141a2.06,2.06,0,0,0,1.166-1.856V81.581a2.06,2.06,0,0,0-1.166-1.856L40.184,61.776a2.061,2.061,0,0,0-1.788,0L1.166,79.71A2.06,2.06,0,0,0,0,81.566v1.672A2.06,2.06,0,0,0,1.166,85.094Zm69.681,29.869-1.294-3.989,1.38-4.5,1.394,4.731Zm-9.286-16.1L40.705,108.905H37.874L17.019,98.859V92.73l21.377,10.3a2.061,2.061,0,0,0,1.788,0l21.377-10.3v6.129ZM39.29,65.918,73.508,82.4,63,87.464a2.081,2.081,0,0,0-.273.106L39.29,98.86,15.853,87.57a2.077,2.077,0,0,0-.273-.106L5.071,82.4Z" transform="translate(0 -61.572)" fill="#771572"/>
                            </svg>
                            <p>Education</p>
                        </Link>
                    </div>
                <div className="ngo-nav-item">
                    <Link to="training" spy={true} smooth={true} offset={-70} duration={500} >
                        <svg className="ngo-nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.742 58.318">
                            <path id="Path_1893" data-name="Path 1893" d="M60.1,28.478H4.643A4.649,4.649,0,0,0,0,33.122V66.729a4.649,4.649,0,0,0,4.643,4.644H24.3v7.212H15.729a2.384,2.384,0,0,0-2.383,2.385v3.442A2.384,2.384,0,0,0,15.729,86.8H49.013A2.384,2.384,0,0,0,51.4,84.411V80.969a2.384,2.384,0,0,0-2.383-2.385H40.447V71.373H60.1a4.649,4.649,0,0,0,4.643-4.644V33.122A4.649,4.649,0,0,0,60.1,28.478ZM4.519,66.729,4.643,33l55.58.125V66.851Zm57.963-2.712a1.167,1.167,0,1,1,1.167-1.166A1.168,1.168,0,0,1,62.483,64.017Zm0-4.869A1.167,1.167,0,1,1,63.65,57.98,1.167,1.167,0,0,1,62.483,59.148Z" transform="translate(0 -28.478)" fill="#771572"/>
                            <path id="Path_1894" data-name="Path 1894" d="M253.323,176.365a.673.673,0,0,0,.671-.17l1.812-1.812,4.243,4.241a.672.672,0,0,0,.949,0l1.675-1.673a.67.67,0,0,0,0-.948l-4.243-4.243,1.814-1.815a.677.677,0,0,0,.17-.667.686.686,0,0,0-.507-.461l-7.836-1.582a.668.668,0,0,0-.788.789l1.582,7.832A.672.672,0,0,0,253.323,176.365Z" transform="translate(-222.926 -151.574)" fill="#771572"/>
                        </svg>
                        <p>Training</p>
                    </Link>
                </div >
                <div className="ngo-nav-item">
                    <Link to="#" spy={true} smooth={true} offset={-70} duration={500} >
                        <svg className="ngo-nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.481 58.318">
                            <path id="Path_1892" data-name="Path 1892" d="M88.481,102.322a6.217,6.217,0,0,0-1.271-3.829L80.2,89.523a6.029,6.029,0,0,0-4.747-2.253,5.845,5.845,0,0,0-3.1.869l-6.836,4.253a6.237,6.237,0,0,1-3.142.765,5.7,5.7,0,0,1-2.409-.473l-6.694-3.243a8.063,8.063,0,0,0-3.494-.735,8.7,8.7,0,0,0-4.913,1.416l-.781.548-2.659-1.324a10.029,10.029,0,0,0-4.36-.9,10.432,10.432,0,0,0-4,.734L28.5,91.129a8.337,8.337,0,0,1-3.095.527,8.332,8.332,0,0,1-3.093-.527l-4.564-1.947a6.643,6.643,0,0,0-2.6-.508,7.931,7.931,0,0,0-2.963.581,6.737,6.737,0,0,0-2.5,1.72l-8.309,9.305a5.4,5.4,0,0,0,.527,7.713l7.751,6.613-3.677,3.836a5.478,5.478,0,0,0,.188,7.758l.746.709a5.47,5.47,0,0,0,2.431,1.317,5.416,5.416,0,0,0,1.02,6.579h0l.748.712a5.549,5.549,0,0,0,5.956,1.078,5.42,5.42,0,0,0,1.524,2.654l.748.712a5.537,5.537,0,0,0,6.861.589,5.44,5.44,0,0,0,1.434,2.356l.748.712a5.544,5.544,0,0,0,7.8-.185l3.25-3.393,4.415,4.086a5.541,5.541,0,0,0,7.79-.28l.7-.755a5.437,5.437,0,0,0,1.236-2.234l1.71,1.578a5.549,5.549,0,0,0,7.8-.288l.7-.754a5.419,5.419,0,0,0,1.406-3.029,5.4,5.4,0,0,0,5.412-1.553l.7-.754a5.462,5.462,0,0,0,1.469-3.734,5.6,5.6,0,0,0-.151-1.231,5.464,5.464,0,0,0,3.307-1.674l.7-.755a5.485,5.485,0,0,0-.287-7.758l-1.318-1.217,11.9-13.153A6.263,6.263,0,0,0,88.481,102.322Zm-77.764,23.1a2.5,2.5,0,0,1-1.728-.684l-.747-.709a2.494,2.494,0,0,1-.086-3.526l7.531-7.858a2.527,2.527,0,0,1,3.545-.084l.744.71a4.719,4.719,0,0,1,.772,1.808,2.482,2.482,0,0,1-.445,1.411c-.025.025-8.128,8.47-8.128,8.47A2.536,2.536,0,0,1,10.717,125.427Zm6.014,7.838a2.528,2.528,0,0,1-3.543.083l-.748-.711h0a2.5,2.5,0,0,1-.085-3.526s10.038-10.449,10.123-10.55a2.514,2.514,0,0,1,3.465-.017l.748.712a2.5,2.5,0,0,1,.084,3.527Zm8.227,4.443a2.524,2.524,0,0,1-3.542.084l-.75-.711a2.478,2.478,0,0,1-.218-3.359l6.991-7.3a2.506,2.506,0,0,1,3.4.034l.75.712a2.5,2.5,0,0,1,.084,3.526Zm13.283-.77L34,141.365a2.526,2.526,0,0,1-3.543.083l-.748-.711a2.5,2.5,0,0,1-.084-3.526l4.24-4.427a2.528,2.528,0,0,1,3.545-.083l.75.711a2.5,2.5,0,0,1,.082,3.526Zm36.851-12.009a2.47,2.47,0,0,1-.668,1.7l-.7.754a2.527,2.527,0,0,1-3.542.129L58.336,116.554l-2.048,2.193,12.677,11.744a2.5,2.5,0,0,1,.13,3.527l-.7.754a2.526,2.526,0,0,1-3.54.13L53.007,123.949l-2.046,2.193,10.514,9.723a2.492,2.492,0,0,1,.1,3.491l-.7.754a2.529,2.529,0,0,1-3.544.131l-10.493-9.687h0l0,0-2.042,2.2,0,0,.039.037,5.255,4.85a2.469,2.469,0,0,1,.045,3.416l-.7.755a2.521,2.521,0,0,1-3.536.128L41.319,137.7a5.4,5.4,0,0,0-1.084-6.452l-.75-.712a5.512,5.512,0,0,0-3.8-1.51c-.106,0-.212.024-.316.03,0-.025.006-.051.006-.076,0-1.443-1.7-3.974-1.7-3.974l-.748-.71a5.493,5.493,0,0,0-2.775-1.414,5.407,5.407,0,0,0-1.378-5.789l-.748-.712a5.523,5.523,0,0,0-3.8-1.512c-.159,0-.316.032-.474.046a5.462,5.462,0,0,0-1.687-3.8h0l-.746-.709a5.542,5.542,0,0,0-7.8.183l-1.778,1.855-7.874-6.716a2.414,2.414,0,0,1-.234-3.45l8.309-9.305a3.791,3.791,0,0,1,1.389-.937,4.944,4.944,0,0,1,1.826-.359,3.644,3.644,0,0,1,1.42.266l4.562,1.946a11.224,11.224,0,0,0,4.279.769,11.225,11.225,0,0,0,4.279-.769l4.56-1.946a7.469,7.469,0,0,1,2.818-.493,7.157,7.157,0,0,1,3.012.58l1.217.607L36.648,95.9a5.371,5.371,0,0,0-1.226,7.624l0,0,.614.825a6,6,0,0,0,4.8,2.352,5.832,5.832,0,0,0,3-.818l2.781-1.67a4.58,4.58,0,0,1,2.309-.562,4.81,4.81,0,0,1,2.72.765l7.694,5.516a76.841,76.841,0,0,1,6.047,4.934l8.9,8.233A2.481,2.481,0,0,1,75.092,124.928Zm9.594-20.4L72.823,117.648l-5.386-4.979A79.253,79.253,0,0,0,61.1,107.5l-7.691-5.516a7.774,7.774,0,0,0-4.479-1.329,7.573,7.573,0,0,0-3.865.992l-2.779,1.67a2.822,2.822,0,0,1-1.451.388,3,3,0,0,1-2.388-1.141l-.612-.824,0,0a2.383,2.383,0,0,1,.546-3.392L46.6,92.568A5.787,5.787,0,0,1,49.78,91.7a5.093,5.093,0,0,1,2.178.433l6.694,3.243a8.647,8.647,0,0,0,3.725.775,9.158,9.158,0,0,0,4.735-1.222l6.838-4.254a2.842,2.842,0,0,1,1.506-.413,3.034,3.034,0,0,1,2.372,1.1l7.011,8.97a3.264,3.264,0,0,1,.638,1.99A3.326,3.326,0,0,1,84.686,104.53Z" transform="translate(0 -87.27)" fill="#771572"/>
                        </svg>
                        <p>Rehabilitation</p>
                    </Link>
                </div>
            </div>

        </div>

        <div className="ngo-content">
            <p className="ngo-section-title">ABOUT US</p>
            <hr className="ngo-section-line"></hr>

            <div className="ngo-section ngo-about-us">
                <div className="ngo-section-column">
                    <p className="ngo-section-title mission">MISSION</p>
                    <p className="ngo-section-para">For seventy-five years we have believed and will continue to believe that children and adults with visual impairment and other disabilities are invaluable human assets.  They deserve the right kind of recognition and opportunity in an inclusive environment.</p>
                    <p className="ngo-section-para">Provision of such need-based services for the visually impaired to enable them to develop their latent talents and realize their fullest potential is what the Blind Relief Association, Delhi strives for.</p>
                </div>

                <div className="ngo-section-column">
                    <div className="ngo-special-box">
                        <p className="ngo-section-title">More reasons to work</p>
                        <p className="ngo-special-box-para">With 8 million visually impaired people, India is home to one-fourth of the blind population in the world</p>
                    </div>
                </div>

                <div className="ngo-section-column achievements">
                    <p className="ngo-section-title">Achievements and Recognitions</p>
                    <VerticalTimeline>
                        <VerticalTimelineElement className="vertical-timeline-element--work"
                                                contentStyle={{ background: '#EFE0EE', color: '#333333' }}
                                                contentArrowStyle={{ borderRight: '7px solid  #EFE0EE' }}
                                                iconStyle={{ background: '#EFE0EE', color: '#fff' }}
                                                icon={<></>} >

                            <h3 className="vertical-timeline-element-title">2006</h3>
                            <p>Durgabai Deshmukh College of Special Education (Visual Impairment)</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement className="vertical-timeline-element--work"
                                                contentStyle={{ background: '#EFE0EE', color: '#333333' }}
                                                contentArrowStyle={{ borderRight: '7px solid  #EFE0EE' }}
                                                iconStyle={{ background: '#EFE0EE', color: '#fff' }}
                                                icon={<></>} >

                            <h3 className="vertical-timeline-element-title">2013</h3>
                            <p>Best Institution National Award 2012</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement className="vertical-timeline-element--work"
                                                contentStyle={{ background: '#EFE0EE', color: '#333333' }}
                                                contentArrowStyle={{ borderRight: '7px solid  #EFE0EE' }}
                                                iconStyle={{ background: '#EFE0EE', color: '#fff' }}
                                                icon={<></>} >

                            <h3 className="vertical-timeline-element-title">2014</h3>
                            <p>Diploma Course in Computer Education; Construction of new hostel block for school children</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement className="vertical-timeline-element--work"
                                                contentStyle={{ background: '#EFE0EE', color: '#333333' }}
                                                contentArrowStyle={{ borderRight: '7px solid  #EFE0EE' }}
                                                iconStyle={{ background: '#EFE0EE', color: '#fff' }}
                                                icon={<></>} >

                            <h3 className="vertical-timeline-element-title">2018</h3>
                            <p>Commencement of new building block</p>
                        </VerticalTimelineElement>

                    </VerticalTimeline>

                    <ul className="ngo-section-list">
                        <li><p>The Association is a recipient of the National Award for the Empowerment of Persons with Disabilities – 2012 for the <b>“Best Institution Working for the Cause of Persons with Disabilities.”</b>  The Award instituted by <b>the Ministry of Social Justice and Empowerment, Government of India</b> was presented by the <b>President of India Shri Pranab Mukherjee</b> at a ceremony held in New Delhi on February 17, 2013.</p></li>
                        <li><p>Awarded by <b>Federation of Indian Chambers of Commerce and Industry, New Delhi (FICCI)</b> in 1986 for valuable contributions in the training and placement of blind persons.</p></li>
                        <li><p>The Association is a recipient of the <b>State award for outstanding employers</b> of the physically handicapped for the year 1988-89.</p></li>
                    </ul>
                </div>
            </div>

            <div id="education">
                <p className="ngo-section-title">WHAT WE DO</p>
                <hr className="ngo-section-line"></hr>

                <div className="ngo-section education">
                    <div className="ngo-section-column">
                        <p className="ngo-section-title">EDUCATION</p>
                        <p className="ngo-section-subtitle">JPM Senior Secondary School</p>
                        <p className="ngo-section-para">Jormal Periwal Memorial (JPM) Senior Secondary School offers free education, boarding, lodging, assistive devices, books and other services to visually impaired boys from nursery to Class XII. Recognized by the Directorate of Education, Government of NCT Delhi and affiliated to the Central Board of Secondary Education (CBSE), JPM has been widely recognized in the country for nurturing and grooming visually impaired children to become promising citizens excelling in academics, sports and co-curricular activities.</p>
                        <p className="ngo-section-para">The school has been providing education in academic subjects in accordance with the curriculum laid down by the <b>Directorate of Education, Delhi and CBSE.</b></p>
                        <p className="ngo-section-para">The school provides all facilities, support and encouragement to its <b>students to take part in diverse co-curricular activities that include sports, athletics, dance, music, theatre, poetry, debating, and eco-club.</b></p>
                        <p className="ngo-section-para">More details on admission, activities etc., can be found on <a href="http://www.jpmschool.in/Default.aspx" rel="noopener noreferrer" target="_blank">JPM Senior Secondary School for the Blind.</a></p>
                        <p className="ngo-section-para"><b>The school receives aid from the Government of NCT, Delhi.</b></p>
                    </div>

                    <div className="ngo-section-column">
                        <div className="ngo-section-imgs">
                            <div className="ngo-section-img-container">
                                <img className="ngo-section-img" src={img1} alt="header_image" />
                            </div>
                            <div className="ngo-section-img-container">
                                <img className="ngo-section-img" src={img2} alt="header_image" />
                            </div>
                        </div>

                        <div className="ngo-special-box">
                            <p className="ngo-section-title" style={{color: "#74156F"}}>Special Care Unit</p>
                            <p className="ngo-special-box-para">The Blind Relief Association has been running this unit since 1986 to cater to the special needs of visually impaired children with learning disabilities identified in the JPM Senior Secondary School. Special training and individual care is imparted to these children. The main objective is to mainstream them by developing possible academic skills and independent living skills.</p>
                            <p className="ngo-special-box-para"><b>The unit receives support from Military Order of Collar Charitable Foundation, U.K.</b></p>
                        </div>
                    </div>

                </div>
            </div>

            <div id="training">
                <div className="ngo-section training">
                    <div className="ngo-section-column">
                        <div className="ngo-special-box">
                            <p className="ngo-section-title" style={{color: "#74156F"}}>Computer Training Center</p>
                            <p className="ngo-special-box-para">The Association is among the pioneering institutions in the country to introduce <b>computer literacy programmes for the visually challenged.</b> The Computer Training Project for Adult Blind was launched in 1996, catering to the needs of adult, educated blind through a part-time course.</p>
                            <p className="ngo-special-box-para">Presently, it offers a <b>one-year diploma course in Computer Education (Visual Impairment),</b> the first of its kind approved by the <b>Rehabilitation Council of India (RCI)</b> to prepare a cadre of personnel specially equipped to provide education in computer and related services to the visually impaired.</p>
                            <p className="ngo-special-box-para">In addition, All JPM school students from Class VI onwards are also taught applications like <b>MS Word, Excel, Power Point, scanning, printing and use of internet for browsing mails, social networking, etc.</b> with the use of screen reading software.</p>
                        </div>
                    </div>

                    <div className="ngo-section-column">
                        <p className="ngo-section-title">Teacher Training</p>
                        <p className="ngo-section-para">The Blind Relief Association has been engaged in the task of preparing <b>special educators for the blind</b> since 1967 in its Training Centre for Teachers of the Blind. The programme was upgraded to postgraduate level in 2005, with the establishment of <b>Durgabai Deshmukh College</b> of Special Education in affiliation with the <b>University of Delhi.</b></p>
                        <p className="ngo-section-para">The College offers a two-year degree program in Bachelor of Education, (Special Education – Visually Impaired). The College has permanent recognition from the <b>University Grants Commission (UGC)</b> as well as <b>Rehabilitation Council of India (RCI).</b></p>
                        <p className="ngo-section-para">The college admits 27 trainees per year inducted through centralized admission system of the University of Delhi. The 2017-19 batch includes 13 visually impaired trainees and 2018-20 batch has 17 visually impaired trainees.</p>

                        <div className="ngo-section-imgs">
                            <div className="ngo-section-img-container">
                                <img className="ngo-section-img" src={img1} alt="header_image" />
                            </div>
                            <div className="ngo-section-img-container">
                                <img className="ngo-section-img" src={img2} alt="header_image" />
                            </div>
                        </div>

                    </div>

                    <div className="ngo-section-column diploma-container">
                        <div className="diploma">
                            <p className="ngo-section-title">Diploma Course in Computer Education (V.I)</p>
                            <p className="ngo-section-para">Started as a pilot project in 2014-15, the course designed by the Blind Relief Association was regularized by the Rehabilitation Council of India (RCI) in 2016-17. The course encourages students to stay abreast with the <b>technological advancements in IT and communication sector.</b></p>
                            <p className="ngo-section-para">The minimum qualification for admission to the Diploma course is senior secondary. The course admits 25 trainees per year inducted through <b>“All India Online Aptitude Test (AIOAT)”</b>, which is conducted by the Rehabilitation Council of India (RCI). In the 2018-19 batch of 19 trainees, there are 9 visually impaired trainees.</p>
                            <p className="ngo-section-para">Most of the trainees completing the training have found employment in diverse public and private establishments.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ngo-section donate">
                <p className="ngo-section-title">DONATE TO US</p>
                <hr className="ngo-section-line"></hr>
                <p className="scan">Scan the Code</p>
                <div className="donate-qr">
                    <QRCode value="https://blindrelief.org/donate/" />
                    <p>Or</p>
                    <a className="ngo-donate-btn" href='https://blindrelief.org/donate/' target="_blank" rel="noopener noreferrer">DONATE</a>
                </div>
            </div>

        </div>


    </div>
    )
}
export default NgoPage;
