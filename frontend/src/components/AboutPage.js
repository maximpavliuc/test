import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './AboutPage.css';

import topImage1 from './images/4.png';
import topImage2 from './images/5.jpg';
import topImage3 from './images/6.jpg';
import bottomImage1 from './images/1.jpg';
import bottomImage2 from './images/2.png';
import bottomImage3 from './images/3.png';

const AboutPage = () => {
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [tooltipText, setTooltipText] = useState('');

    useEffect(() => {
        const stars = Array.from(document.querySelectorAll('.star'));
        stars.forEach((star) => {
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
        });
    }, []);

    const handleMouseOver = (text) => {
        setTooltipText(text);
        setTooltipVisible(true);
    };

    const handleMouseOut = () => {
        setTooltipVisible(false);
    };

    const topImages = [
        topImage1,
        topImage2,
        topImage3
    ];

    const bottomImages = [
        bottomImage1,
        bottomImage2,
        bottomImage3
    ];

    return (
        <Container className="about-container" maxWidth="lg">
            <div className={`tooltip ${tooltipVisible ? 'tooltip-visible' : ''}`} style={{ top: '20px', left: '50%', transform: 'translateX(-50%)' }}>
                {tooltipText}
            </div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Paper
                        elevation={3}
                        className="about-section"
                        onMouseOver={() => handleMouseOver('Добро пожаловать на нашу страницу!')}
                        onMouseOut={handleMouseOut}
                    >
                        <Typography variant="h4" component="h2" className="about-title">О нас</Typography>
                        <Typography variant="body1" className="about-text">
                            Мы стремимся предоставить лучший сервис для наших клиентов. Наша команда профессионалов всегда готова помочь вам с любыми вопросами.
                        </Typography>
                        <Carousel showThumbs={false} infiniteLoop autoPlay>
                            {topImages.map((src, index) => (
                                <div key={index}>
                                    <img src={src} alt={`Top Slide ${index + 1}`} />
                                </div>
                            ))}
                        </Carousel>
                    </Paper>
                </Grid>
                
                <Grid item xs={12}>
                    <Paper
                        elevation={3}
                        className="about-section"
                        onMouseOver={() => handleMouseOver('Узнайте больше о нашей миссии!')}
                        onMouseOut={handleMouseOut}
                    >
                        <Typography variant="h4" component="h2" className="about-title">Наша Миссия</Typography>
                        <Typography variant="body1" className="about-text">
                            Наша миссия - предоставить качественные продукты и услуги, которые улучшают жизнь наших клиентов. Мы верим в инновации и постоянное развитие.
                        </Typography>
                        <Typography variant="h6" className="about-quote">
                            "Исключительное обслуживание клиентов - наш главный приоритет."
                        </Typography>
                    </Paper>
                </Grid>
                
                <Grid item xs={12}>
                    <Paper
                        elevation={3}
                        className="about-section"
                        onMouseOver={() => handleMouseOver('История нашей компании')}
                        onMouseOut={handleMouseOut}
                    >
                        <Typography variant="h4" component="h2" className="about-title">Наша История</Typography>
                        <Typography variant="body1" className="about-text">
                            Наша компания была основана в 2000 году и с тех пор мы постоянно растем и развиваемся. Мы гордимся нашими достижениями и стремимся к еще большим успехам.
                        </Typography>
                        <Typography variant="h6" className="about-quote">
                            "Наши продукты постоянно совершенствуются, чтобы соответствовать самым высоким стандартам качества."
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper
                        elevation={3}
                        className="about-section"
                        onMouseOver={() => handleMouseOver('Сравнение товаров')}
                        onMouseOut={handleMouseOut}
                    >
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <Carousel showThumbs={false} infiniteLoop autoPlay>
                                    {bottomImages.map((src, index) => (
                                        <div key={index}>
                                            <img src={src} alt={`Product Slide ${index + 1}`} />
                                        </div>
                                    ))}
                                </Carousel>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h4" component="h2" className="about-title">Сравнение Товаров</Typography>
                                <Typography variant="body1" className="about-text">
                                    Наши товары отличаются высоким качеством и инновационными технологиями. Мы предлагаем широкий ассортимент продукции, который удовлетворит потребности самых требовательных клиентов.
                                </Typography>
                                <Typography variant="body2" className="about-text">
                                    - Продукт 1: Высокое качество, инновационные технологии, доступная цена.
                                </Typography>
                                <Typography variant="body2" className="about-text">
                                    - Продукт 2: Уникальный дизайн, долговечность, отличная производительность.
                                </Typography>
                                <Typography variant="body2" className="about-text">
                                    - Продукт 3: Экологичность, эргономичность, превосходное соотношение цены и качества.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default AboutPage;
