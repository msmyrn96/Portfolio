import { useState } from 'react';
import { projectsToItems } from '../../hooks/helpers';
import { ReactComponent as RightArrow } from '../../assets/right-arrow-svgrepo-com.svg';
import './styles.scss';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentItems = projectsToItems(items);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === items.length ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? items.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel">
            <div className="slide-container">
                <div className="slide-direction">
                    <div className="left" onClick={handlePrevious}>
                        {/* left arrow */}
                        <RightArrow
                            className="left-arrow"
                            height={30}
                            width={30}
                        />
                    </div>
                    <div className="right" onClick={handleNext}>
                        {/* right arrow */}
                        <RightArrow
                            className="right-arrow"
                            height={30}
                            width={30}
                        />
                    </div>
                </div>
            </div>
            {currentItems[currentIndex]}
        </div>
    );
};

export default Carousel;
