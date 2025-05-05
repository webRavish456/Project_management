import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Cookies from "js-cookie";

const Dashboard = () => {

    const [projectStatus, setProjectStatus] = useState([]);
    const [dailyLead, setLead] = useState([]);
    const [financeData, setFinanceData] = useState([]);
    const [clientStatus, setClientStatus] = useState([]);


    const [loading, setLoading] = useState(true)

    const token = Cookies.get("token");
    const Base_url = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
      
      
        const fetchData = async () => {
          try {
            const [projectRes, leadRes, financeRes, clientRes] = await Promise.all([
              fetch(`${Base_url}/project`, { headers: { Authorization: `Bearer ${token}` } }).then(res => res.text()).then(JSON.parse),
              fetch(`${Base_url}/leads`, { headers: { Authorization: `Bearer ${token}` } }).then(res => res.text()).then(JSON.parse),
              fetch(`${Base_url}/finance`, { headers: { Authorization: `Bearer ${token}` } }).then(res => res.text()).then(JSON.parse),
              fetch(`${Base_url}/client`, { headers: { Authorization: `Bearer ${token}` } }).then(res => res.text()).then(JSON.parse)
            ]);
      

            if (projectRes.status === "success") {
              const projectData = projectRes.data.reduce((acc, item) => {
                acc[item.status] = (acc[item.status] || 0) + 1;
                return acc;
              }, {});
              setProjectStatus(Object.entries(projectData).map(([name, value]) => ({ name, value })));
            }
      
 
            if (leadRes.status === "success") {
              const dailyCounts = leadRes.data.reduce((acc, item) => {
                const date = new Date(item.createdAt).toLocaleDateString();
                acc[date] = (acc[date] || 0) + 1;
                return acc;
              }, {});
              setLead(Object.entries(dailyCounts).map(([date, value]) => ({ date, leads: value })));
            }
      

            if (financeRes.status === "success") {
              const monthlyMap = {};
              financeRes.data.forEach((item) => {
                const month = new Date(item.TransactionDate).toLocaleString("default", { month: "short" });
                if (!monthlyMap[month]) {
                  monthlyMap[month] = { month, income: 0, expense: 0 };
                }
                const type = item.TransactionType.toLowerCase();
                if (type === "income") monthlyMap[month].income += item.amount;
                else if (type === "expense") monthlyMap[month].expense += item.amount;
              });
              setFinanceData(Object.values(monthlyMap));
            }
      
    
            if (clientRes.status === "success") {
              const clientData = clientRes.data.reduce((acc, item) => {
                acc[item.status] = (acc[item.status] || 0) + 1;
                return acc;
              }, {});
              setClientStatus(Object.entries(clientData).map(([name, value]) => ({ name, value })));
            }

            setLoading(false)
      
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
       if(loading) {
        fetchData();
       }
       
      }, [loading]);
      

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

    return (
        <Box sx={{
              flexGrow: 1,
              overflowY: "auto",
              height: "100vh",
              paddingBottom: 4,
              marginBottom: "20px"
            }}>

        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={3}>
            
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Project Status
                        </Typography>
                        <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                        <Pie
                        data={projectStatus}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) =>
                            `${name} ${(percent * 100).toFixed(0)}%`
                        }
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        >
                        {projectStatus.map((entry, index) => (
                            <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                        </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                     Daily Leads
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={dailyLead}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="leads" stroke="#8884d8" />
                    </LineChart>
                    </ResponsiveContainer>
                </Paper>
                </Grid>

          
                <Grid item xs={12} md={6} >
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                    Monthly Finance Summary
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={financeData}
                        margin={{ top: 20, right: 50, left: 0, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis yAxisId="left" orientation="left" stroke="#82ca9d" />
                        <YAxis yAxisId="right" orientation="right" stroke="#f87171" />
                        <Tooltip />
                        <Legend />
                        <Bar
                        yAxisId="left"
                        dataKey="income"
                        fill="#82ca9d"
                        name="Income"
                        barSize={20}
                        />
                        <Bar
                        yAxisId="right"
                        dataKey="expense"
                        fill="#f87171"
                        name="Expense"
                        barSize={20}
                        />
                    </BarChart>
                    </ResponsiveContainer>
                </Paper>
                </Grid>

            
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Client Status
                        </Typography>
                        <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                        <Pie
                        data={clientStatus}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) =>
                            `${name} ${(percent * 100).toFixed(0)}%`
                        }
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        >
                        {clientStatus.map((entry, index) => (
                            <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                        </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
        </Box>
    );
};

export default Dashboard;