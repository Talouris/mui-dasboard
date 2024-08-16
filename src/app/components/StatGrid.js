import React from 'react';
import { Box, Grid, Typography, Paper, useTheme, CircularProgress } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const dataSales = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
];

const dataPie = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AnalyticsDashboard = () => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: '20px', bgcolor: theme.palette.background.default }}>
      {/* Верхня панель */}
      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Залучені клієнти</Typography>
            <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>1,240</Typography>
            <Typography variant="body2" color="textSecondary">+12% за останній місяць</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Продажі</Typography>
            <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>$24,000</Typography>
            <Typography variant="body2" color="textSecondary">+8% за останній місяць</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Прибуток</Typography>
            <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>$12,000</Typography>
            <Typography variant="body2" color="textSecondary">+5% за останній місяць</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Середня секція */}
      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: '20px', height: '100%' }}>
            <Typography variant="h6" mb={2}>Продажі за місяцями</Typography>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={dataSales}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="uv" stroke={theme.palette.primary.main} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: '20px', height: '100%', textAlign: 'center' }}>
            <Typography variant="h6" mb={2}>Розподіл прибутку</Typography>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={dataPie}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataPie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Нижня секція */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Рейтинг задоволеності клієнтів</Typography>
            <CircularProgress variant="determinate" value={75} size={100} sx={{ margin: '20px 0' }} />
            <Typography variant="h4">75%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Середній чек</Typography>
            <Typography variant="h4" sx={{ margin: '20px 0', color: theme.palette.primary.main }}>$200</Typography>
            <Typography variant="body2" color="textSecondary">-2% за останній місяць</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Нові користувачі</Typography>
            <Typography variant="h4" sx={{ margin: '20px 0', color: theme.palette.primary.main }}>320</Typography>
            <Typography variant="body2" color="textSecondary">+15% за останній місяць</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnalyticsDashboard;
