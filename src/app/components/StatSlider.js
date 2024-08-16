import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, ResponsiveContainer
} from 'recharts';

const StatSlider = () => {
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const clientData = [
    { name: 'Січ', newClients: 400, activeClients: 2400 },
    { name: 'Лют', newClients: 300, activeClients: 2210 },
    { name: 'Бер', newClients: 200, activeClients: 2290 },
    { name: 'Кві', newClients: 278, activeClients: 2000 },
    { name: 'Тра', newClients: 189, activeClients: 2181 },
    { name: 'Чер', newClients: 239, activeClients: 2500 },
  ];

  const salesData = [
    { name: 'Січ', sales: 4000 },
    { name: 'Лют', sales: 3000 },
    { name: 'Бер', sales: 2000 },
    { name: 'Кві', sales: 2780 },
    { name: 'Тра', sales: 1890 },
    { name: 'Чер', sales: 2390 },
  ];

  const profitData = [
    { name: 'Січ', profit: 2400 },
    { name: 'Лют', profit: 2210 },
    { name: 'Бер', profit: 2290 },
    { name: 'Кві', profit: 2000 },
    { name: 'Тра', profit: 2181 },
    { name: 'Чер', profit: 2500 },
  ];

  const slides = [
    {
      title: 'Клієнтські залучення',
      content: (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={clientData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="newClients" fill={theme.palette.primary.main} />
            <Bar dataKey="activeClients" fill={theme.palette.secondary.main} />
          </BarChart>
        </ResponsiveContainer>
      ),
    },
    {
      title: 'Продажі',
      content: (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke={theme.palette.primary.main} />
          </LineChart>
        </ResponsiveContainer>
      ),
    },
    {
      title: 'Профіт',
      content: (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={profitData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="profit" fill={theme.palette.primary.main} />
          </BarChart>
        </ResponsiveContainer>
      ),
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: '100%',
        margin: '0 auto',
        padding: '20px',
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              padding: '20px',
              borderRadius: '10px',
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
            }}
          >
            <Typography
              variant="h4"
              component="h4"
              sx={{
                marginBottom: '20px',
                textAlign: 'center',
                fontWeight: 'bold',
                color: theme.palette.text.primary,
              }}
            >
              {slide.title}
            </Typography>
            {slide.content}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default StatSlider;
