import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonials = () => {


  const settings = {
    dots: true,
    infinity: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        },
      },
    ]
  }

  return (<Slider {...settings}>
    <div className="testimonial py-4 px-3">
      <p> We are back from our wonderful trip and all thanks to you both .
        Planning and bookings were well done as expected. Your set itinerary made the best use of our time.
        The hotels and tours were very comfortable, especially with kids. Even with compressed timelines,
        we thought that we saw the best of both countries. We had an issue with day 1 Tour guide and it was
        taken care the next day. </p>

      <div className="d-flex align-items-center gap-4 mt-3" >
        <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h6 className='mb-0 mt-3'>Niranjan & Shraddha</h6>
          <p>Customer</p>
        </div>
      </div>
    </div>
    <div className="testimonial py-4 px-3">
      <p>  I take this pleasure to thank FlyNations Travels for a wonderful & unforgettable trip to London. 
        Thanks for all the love and care you had expressed to each of us specially "My Birthday celebration"
        :- I was impressed at the every moment that we had interacted with your team before and during the trip.  </p>

      <div className="d-flex align-items-center gap-4 mt-3" >
        <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h6 className='mb-0 mt-3'>Vinitha Grace</h6>
          <p>Customer</p>
        </div>
      </div>
    </div>
    <div className="testimonial py-4 px-3">
      <p>  I would like to take this opportunity to convey our thanks to you for making our holiday experience in 
        Norway & Netherlands a truly memorable one. The hotels, pickups, tour sights , guides & other arrangements 
        made by FlyNations team were superb & very well executed. We were lucky to see the Northern Lights 3 times - 
        thanks to cloud breaks. The Snowdrome & sledge ride was a grand experience.  </p>

      <div className="d-flex align-items-center gap-4 mt-3" >
        <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h6 className='mb-0 mt-3'>Kevin Shiren</h6>
          <p>Customer</p>
        </div>
      </div>
    </div>
    <div className="testimonial py-4 px-3">
      <p> We are back from our wonderful trip and all thanks to you both .
        Planning and bookings were well done as expected. Your set itinerary made the best use of our time.
        The hotels and tours were very comfortable, especially with kids. Even with compressed timelines,
        we thought that we saw the best of both countries. We had an issue with day 1 Tour guide and it was
        taken care the next day. </p>

      <div className="d-flex align-items-center gap-4 mt-3" >
        <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h6 className='mb-0 mt-3'>Niranjan & Shraddha</h6>
          <p>Customer</p>
        </div>
      </div>
    </div>
    <div className="testimonial py-4 px-3">
      <p>  I would like to take this opportunity to convey our thanks to you for making our holiday experience in 
        Norway & Netherlands a truly memorable one. The hotels, pickups, tour sights , guides & other arrangements 
        made by FlyNations team were superb & very well executed. We were lucky to see the Northern Lights 3 times - 
        thanks to cloud breaks. The Snowdrome & sledge ride was a grand experience.  </p>

      <div className="d-flex align-items-center gap-4 mt-3" >
        <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h6 className='mb-0 mt-3'>Kevin Shiren</h6>
          <p>Customer</p>
        </div>
      </div>
      </div>
      <div className="testimonial py-4 px-3">
      <p>  I take this pleasure to thank FlyNations Travels for a wonderful & unforgettable trip to London. 
        Thanks for all the love and care you had expressed to each of us specially "My Birthday celebration"
        :- I was impressed at the every moment that we had interacted with your team before and during the trip.  </p>

      <div className="d-flex align-items-center gap-4 mt-3" >
        <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h6 className='mb-0 mt-3'>Vinitha Grace</h6>
          <p>Customer</p>
        </div>
      </div>
    </div>
  </Slider>
  )
}

export default Testimonials