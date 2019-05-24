import * as React from 'react';

export class Home extends React.Component {
    public render() {
        return <div>
            <div id="section-topbar">
                <div id="topbar-inner">
                    <div className="container">
                        <div className="row">
                            <div className="dropdown">
                                <ul id="nav" className="nav">
                                    <li className="menu-item"><a className="smoothScroll" href="#about" title="About"><i className="fa fa-user" aria-hidden="true"></i></a></li>
                                    <li className="menu-item"><a className="smoothScroll" href="#work" title="Work"><i className="fa fa-briefcase" aria-hidden="true"></i></a></li>
                                    <li className="menu-item"><a className="smoothScroll" href="#education" title="Education"><i className="fa fa-graduation-cap" aria-hidden="true"></i></a></li>
                                    <li className="menu-item"><a className="smoothScroll" href="#certifiaction" title="Certifiaction"><i className="fa fa-certificate" aria-hidden="true"></i></a></li>
                                    <li className="menu-item"><a className="smoothScroll" href="#skills" title="Skills"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                    <li className="menu-item"><a className="smoothScroll" href="#whatido" title="What I do"><i className="fa fa-windows" aria-hidden="true"></i></a></li>
                                    <li className="menu-item"><a className="smoothScroll" href="#contact" title="Contact"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
            <div id="headerwrap">
                <div className="container">
                    <div className="row centered">
                        <div className="col-lg-12">
                            <h1>Łukasz Sadłocha</h1>
                            <h3>.NET Developer | lukaszsadlocha@gmail.com</h3>
                        </div>
                    </div>
                </div>
            </div>
            <section id="about" name="about"></section>
            <div id="intro">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-2 col-lg-offset-1">
                            <h5>ABOUT</h5>
                        </div>
                        <div className="col-lg-6">
                            <p>
                                I am a developer working with .NET framework and technologies around Microsoft. I gained @(DateTime.Now.Year-2013) years of professional experience in various work environments. My career path has crossed already with 2 big 'business-commercial' platforms: SharePoint and Sitecore. I am a big fan of latest trends of moving services to Cloud, Continous integration/deployment and open source projects. I was always a little bit more interested in backend development but during my career, I also gained knowledge of front-end technologies and I always treat it as the complement of my work. Privately I am a big fan of sport (Wind&Kite surfing, cycling, squash, skiing, and football)
                        <br />
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <p><a href="~/files/Lukasz Sadlocha_CV.pdf"><i className="fa fa-file-pdf-o" aria-hidden="true"></i>DOWNLOAD MY RESUME IN PDF</a></p>
                        </div>

                    </div>
                </div>
            </div>

            <section id="education" name="education"></section><br />
            <div className="container desc">
                <div className="row">
                    <div className="col-lg-2 col-lg-offset-1">
                        <h5>EDUCATION</h5>
                    </div>
                    <div className="col-lg-6">
                        <p>
                            <span>Postgraduate study in IT Management and Business </span><br />
                            Indiana University  <br />
                            <i>2 Years Course</i>
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <p>
                            2015 - 2017<br />
                        </p>
                    </div>

                    <div className="col-lg-6 col-lg-offset-3">
                        <p>
                            <span>Master of Automatic Control [IT in Control and Management]</span><br />
                            University of Science and Technology  <br />
                            <i>7 + 3 Semesters Course</i>
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <p>2010 - 2015</p>
                    </div>

                    <div className="col-lg-6 col-lg-offset-3">
                        <p>
                            <span>Information Technology [Not finished]</span><br />
                            University of Science and Technology  <br />
                            <i>2 Semesters Course</i>
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <p>2012 - 2013</p>
                    </div>

                    <div className="col-lg-6 col-lg-offset-3">
                        <p>
                            <span>Physics [Individual Cross-Sciences Studies]</span><br />
                            Jagiellonian University <br />
                            <i>3 Years Course</i>
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <p>2010 - 2013</p>
                    </div>

                </div>
                <br />
                <hr />
            </div>

            <section id="certifiaction" name="certifiaction"></section><br />
            <div className="container desc">
                <div className="row">
                    <div className="col-lg-2 col-lg-offset-1">
                        <h5>CENTIFICATIONS AND AWARDS</h5>
                    </div>
                    <div className="col-lg-6">
                        <p>
                            <span>Certificate for Azure Fundamentals</span><br />
                            Microsoft Learning Honor Code  <br />
                        </p>
                    </div>
                    <div className="col-lg-3">
                    </div>

                    <div className="col-lg-6 col-lg-offset-3">
                        <p>
                            <span>Developing Microsoft SharePoint Server 2013 Core Solutions</span><br />
                            Exam 70-488
                </p>
                    </div>
                    <div className="col-lg-3">
                    </div>

                    <div className="col-lg-6 col-lg-offset-3">
                        <p>
                            <span>Querying Microsoft SQL Server 2012</span><br />
                            Exam 70-461
                </p>
                    </div>
                    <div className="col-lg-3">
                    </div>

                    <div className="col-lg-6 col-lg-offset-3">
                        <p>
                            <span>Certified LabVIEW Associate Developer</span><br />
                        </p>
                    </div>
                    <div className="col-lg-3">
                    </div>

                    <div className="col-lg-6 col-lg-offset-3">
                        <p>
                            <span>National Physics and Math Competitions Finalist</span><br />
                        </p>
                    </div>
                    <div className="col-lg-3">
                    </div>

                </div>
                <br />
            </div>

            <section id="skills" name="skills"></section><br />
            <div id="skillswrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-lg-offset-1">
                            <h5>SKILLS</h5>
                        </div>

                        <div className="col-lg-3 centered">
                            <canvas id="dotnet" height="130" width="130"></canvas>
                            <p>.NET</p>
                            <br />
                            <script>

                            </script>
                        </div>

                        <div className="col-lg-3 centered">
                            <canvas id="sharePoint" height="130" width="130"></canvas>
                            <p>SharePoint</p>
                            <br />
                            <script>

                            </script>
                        </div>

                        <div className="col-lg-3 centered">
                            <canvas id="sql" height="130" width="130"></canvas>
                            <p>SQL</p>
                            <br />
                            <script>

                            </script>
                        </div>

                        <div className="col-lg-3 col-lg-offset-3 centered">
                            <canvas id="sitecore" height="130" width="130"></canvas>
                            <p>Sitecore</p>
                            <br />
                            <script>

                            </script>
                        </div>

                        <div className="col-lg-3  centered">
                            <canvas id="htmlcssjs" height="130" width="130"></canvas>
                            <p>HTML/CSS/JavaScript</p>
                            <br />
                            <script>

                            </script>
                        </div>

                        <div className="col-lg-3 centered">
                            <canvas id="azure" height="130" width="130"></canvas>
                            <p>Azure</p>
                            <br />
                            <script>

                            </script>
                        </div>
                    </div>
                    <br />
                </div>
            </div>

            <section id="whatido" name="whatido"></section><br />

            <div className="container desc">
                <div className="row">
                    <div className="col-lg-2 col-lg-offset-1">
                        <h5>TECHNOLOGIES</h5>
                    </div>
                    <div className="col-lg-5">
                        <p><img className="img-responsive" src="~/images/sitecore_big.png" alt="" /></p>
                    </div>
                    <div className="col-lg-4">
                        <p>
                            SITECORE
                    <br />
                            Sitecore.
                    I've been connected with Sitecore platform since November 2016 and I really enjoy how the system is built and that there are plenty ways of extending it. I was responsible for developing new features in two Sitecore projects that hosted customer faced web pages with a load of 1000 per second requests in peak periods. I lead upgrade from Sitecore 7.2 to Sitecore 8.1 for multipage instance, I have a role of technical expert and advisor for moving Sitecore instances to Microsoft Azure (IaaS model), Configure advanced CI/CD pipeline using VSTS and introduced Apache Lucene index into reporting pages<br />
                        </p>
                    </div>

                    <div className="col-lg-5 col-lg-offset-3">
                        <p><img className="img-responsive" src="~/images/sharePoint.jpg" alt="" /></p>
                    </div>
                    <div className="col-lg-4">
                        <p>
                            SHAREPOINT
                    <br />
                            I worked with SharePoint 2007, 2010, 2013 and Online fulfilling various business requirements; starting from OOTB SharePoint configuration to deliver simple intranet systems, going through big Farm solutions placed directly on the server, many small workflow instances that were achieved by extending SharePoint forms and adding many JS code, ending on modern apps in provided-hosted model deployed in Microsoft Azure.
                            I found the last model as my favorite way of developing systems on SharePoint. Testing/CI/CD/Scalability is simply achievable and there is a plenty of ASP.NET features that can be used.
                    <br />
                        </p>
                    </div>

                    <div className="col-lg-5 col-lg-offset-3">
                        <p><img className="img-responsive" src="~/images/other.png" alt=""/></p>
            </div>
                        <div className="col-lg-4">
                            <p>
                                Private projects<br />
                                As a big enthusiast of new technologies, I appreciate that many services are provided by Microsoft for learning or small projects. Recently I am focused on process automation. I remember that couple years ago I was struggling with searching for Windows hosting, generating packages for deployment with compiled code, styles, Typescript files and so on. Then I found gulp which helped me a lot. Currently, I use VSTS and keep my projects on Azure still looking at courses on Pluralsight/MVA to find more effective ways of my work.</p>
                        </div>

                    </div>
                    <br />
                    <br />
                </div>

                <section id="forRecruiters" name="forRecruiters"></section>
                <section id="contact" name="contact"></section>


                <div id="footwrap">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-2 col-lg-offset-1">
                                <h5>CONTACT</h5>
                            </div>
                            <div className="col-lg-5">
                                <p>
                                    <i className="fa fa-envelope" aria-hidden="true"></i><span>Email</span><br />
                                    <a href="mailto:lukaszsadlocha@gmail.com"> lukaszsadlocha@gmail.com</a><br />
                                </p>
                                <p>
                                    <i className="fa fa-link" aria-hidden="true"></i><span>Webpage</span><br />
                                    <a href="http://lukaszsadlocha.pl/">lukaszsadlocha.pl</a> <br />
                                </p>
                                <p>
                                    <i className="fa fa-phone" aria-hidden="true"></i><span>Phone</span><br />
                                    +48 509 509 917 <br />
                                </p>
                            </div>
                            <div className="col-lg-2">
                                <p>SOCIAL LINKS</p>
                                <ul>
                                    <li><a href="https://github.com/lukaszsadlocha/"><i className="fa fa-github" aria-hidden="true"></i> GitHub</a></li>
                                    <li><a href="https://www.facebook.com/profile.php?id=100001637353241"><i className="fa fa-facebook" aria-hidden="true"></i>Facebook</a></li>
                                    <li><a href="https://www.linkedin.com/in/%C5%82ukasz-sadlocha-33b63495/"><i className="fa fa-linkedin" aria-hidden="true"></i>LinkendIn</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        }
