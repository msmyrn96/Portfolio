import { Container } from 'react-bootstrap';
import Lottie from 'react-lottie';
import { useResponsive } from 'ahooks';
import './styles.scss';
import { defaultOptions } from './constants';

const QuoteComponent = () => {
    const { sm, md } = useResponsive();
    const smallScreens = !md;
    const extraSmallScreens = !sm;

    return (
        <Container className="w-100 p-0 m-0" fluid>
            <div
                className={`marginBig animation-container ${
                    smallScreens ? 'block-grid' : ''
                }`}
            >
                <Lottie
                    style={{
                        width: '70%',
                        height: '100%',
                        minWidth: extraSmallScreens ? '350px' : '450px'
                    }}
                    options={defaultOptions}
                />
                <h1
                    className={`name-title justify-content-center ${
                        extraSmallScreens ? 'extra-margin' : ''
                    }`}
                >
                    &#123; Code is like humor. When you have to explain it, it's
                    bad &#125;
                    <span className="fw-bold author-text">Cory House</span>{' '}
                </h1>
            </div>
        </Container>
    );
};

export default QuoteComponent;
