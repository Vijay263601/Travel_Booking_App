import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: " The overall evaluation of the weather the traveler expects to find when arriving at the destination and for the first 3–5 days after arrival.  "
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "They pay attention to what guests enjoy the most and the least about the tour. They ask the guests some questions and answer theirs. And they encourage guest feedback at the end of a tour. "
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: " Customization is done by the user. Users are asked to identify their preferences and they are then shown things that they prefer. "
    },
]

const ServiceList = () => {
  return (<>
    {
        servicesData.map((item,index)=> (
        <Col lg='3' key={index}>  
            <ServiceCard item={item}/>
        </Col>
      ))}
    </>
  )
};

export default ServiceList