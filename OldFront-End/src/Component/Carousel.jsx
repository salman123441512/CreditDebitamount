import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const CustomCarousel = ({ items, deviceType }) => {
    
        
    return (
        <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="transform .5s cubic-bezier(0.46, 0.03, 0.52, 0.96)"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            
        >
            {items.map((item, index) => (
                <Paper key={index} sx={{marginBottom:"29px",backgroundColor:'#f7f7f7'}} >
                    <div className="testimonial-item text-light rounded p-4"style={{ backgroundColor: '#003399' , marginLeft:'20px',height:'27rem'}}>
                        <div className="d-flex align-items-center mb-4 carousel-img">
                            <img className="flex-shrink-0 rounded-circle border p-1" src={item.pic} alt="" />
                            <div className="ms-4">
                                <h5 className="mb-1">{item.clientName}</h5>
                                <span>{item.profession}</span>
                            </div>
                        </div>
                        <p className="mb-0 text-light">{item.Discription}</p>
                    </div>
                    <Button className="CheckButton"  >
                       
                    </Button>
                </Paper>
            ))}
        </Carousel>
    );
};

export default CustomCarousel;

