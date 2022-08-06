import React from 'react'
import "../questions.css";
import google from '../images/google1.jpeg';
import ms from '../images/microsoft.jpeg';
import amazon from '../images/amazon.jpeg';
import wipro from '../images/wipro.jpeg';
import paytm from '../images/paytm.jpeg';
import flipkart from '../images/flipkart.jpeg';
import logo from '../images/logo1.png';

function Questions() {
  return (
            <div>
              <section className="companies">
                <h1 className="h-primary center mb-5">
                  TOP COMPANY's QUESTION
                </h1>
                <div className="row justify-content-evenly" id="companies">
                  <div className="box col-xl-5 col-lg-5 col-md-9 col-sm-10 col-10">
                    <img src={google} alt="GOOGLE" />
                    <h2 className="h-secondary centre">Google</h2>
                    <p className="center">
                      Google LLC is an American multinational technology company that focuses on search engine technology,
                      online advertising, cloud computing, computer software, quantum computing, e-commerce, artificial
                      intelligence, and consumer electronics.Google is also the largest search engine, mapping and
                      navigation application, email provider, office suite, video sharing platform, photo and cloud
                      storage provider. <br />
                      Click the below button to check some of the important questions asked during Google placement
                      interviews.
                      <a href="https://leetcode.com/problem-list/top-interview-questions/"><button>Check Now</button></a>
                    </p>
                  </div>
                  <div className="box col-xl-5 col-lg-5 col-md-9 col-sm-10 col-10">
                    <img src={ms} alt="MICROSOFT" />
                    <h2 className="h-secondary centre">Microsoft</h2>
                    <p className="center">
                      Microsoft Corporation is an American multinational technology corporation which produces computer
                      software, consumer electronics, personal computers, and related services headquartered at the
                      Microsoft Redmond campus located in Redmond, Washington, United States. Its best-known software
                      products are the Windows line of operating systems, the Microsoft Office suite, and the Internet
                      Explorer and Edge web browsers. <br />
                      Click the below button to check some of the important questions asked during Microsoft placement
                      interviews.
                      <a href="https://leetcode.com/problem-list/top-interview-questions/"><button>Check
                          Now</button></a>
                    </p>
                  </div>
                  <div className="box col-xl-5 col-lg-5 col-md-9 col-sm-10 col-10">
                    <img src={amazon} alt="AMAZON" />
                    <h2 className="h-secondary centre">Amazon</h2>
                    <p className="center">
                      Amazon.com is an American multinational technology company which focuses on e-commerce, cloud
                      computing, digital streaming, and artificial intelligence.Amazon has earned a reputation as a
                      disruptor of well-established industries through technological innovation and mass scale.As of 2021,
                      it is the world's largest online retailer and marketplace, smart speaker provider, cloud computing
                      service through AWS. <br />
                      Click the below button to check some of the important questions asked during Amazon placement
                      interviews.
                      <a href="https://leetcode.com/problem-list/top-interview-questions/"><button>Check Now</button></a>
                    </p>
                  </div>
                  <div className="box col-xl-5 col-lg-5 col-md-9 col-sm-10 col-10">
                    <img src={flipkart} alt="FLIPKART" />
                    <h2 className="h-secondary center">Flipkart</h2>
                    <p className="centre">
                      Flipkart is an Indian e-commerce company, headquartered in Bangalore, and incorporated in Singapore
                      as a private limited company. The company initially focused on online book sales before expanding
                      into other product categories such as consumer electronics, fashion, home essentials, groceries, and
                      lifestyle products. <br />
                      Click the below button to check some of the important questions asked during Flipkart placement
                      interviews.
                      <a href="https://leetcode.com/problem-list/top-interview-questions/"><button>Check Now</button></a>
                    </p>
                  </div>
                  <div className="box col-xl-5 col-lg-5 col-md-9 col-sm-10 col-10">
                    <img src={wipro} alt="WIPRO" />
                    <h2 className="h-secondary center">Wipro</h2>
                    <p className="center">
                      Wipro Limited (formerly, Western India Palm Refined Oils Limited) is an Indian multinational
                      corporation that provides information technology, consulting and business process services. <br />
                      Click the below button to check some of the important questions asked during Wipro placement
                      interviews.
                      <a href="https://leetcode.com/problem-list/top-interview-questions/"><button>Check Now</button></a>
                    </p>
                  </div>
                  <div className="box col-xl-5 col-lg-5 col-md-9 col-sm-10 col-10">
                    <img src={paytm} alt="PAYTM" />
                    <h2 className="h-secondary center">Paytm</h2>
                    <p className="center">
                      Paytm serves as a payment gateway to customers and merchants to make seamless payments from cards,
                      bank accounts and other e-wallets. <br />
                      Click the below button to check some of the important qquestions asked during Paytm placement
                      interviews.
                      <a href="https://leetcode.com/problem-list/top-interview-questions/"><button>Check Now</button></a>
                    </p>
                  </div>
                </div></section>
            </div>
  )
}

export default Questions
