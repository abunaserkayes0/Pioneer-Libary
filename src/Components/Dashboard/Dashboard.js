import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 341,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 470,
      revenue: 61000,
    },
  ];

  return (
    <div>
      <Container>
        <Row xs={1} md={2} lg={2} className="my-5 g-4">
          <Col>
            <h6 className="text-primary text-center fw-bold">
              Month With Sell
            </h6>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sell" stroke="blue" />
            </LineChart>
          </Col>
          <Col>
            <h6 className="text-primary text-center fw-bold">
              Investment With Revenue
            </h6>
            <AreaChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="investment"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </AreaChart>
          </Col>
          <Col>
            <h6 className="text-primary text-center fw-bold">
              Investment With Revenue
            </h6>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="investment" stackId="a" fill="#8884d8" />
              <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
            </BarChart>
          </Col>
          <Col>
            <h6 className="text-primary text-center fw-bold">
              Month With Investment and Sell and Revenue
            </h6>
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                dataKey="investment"
                cx={200}
                cy={200}
                innerRadius={30}
                outerRadius={60}
                fill="#8884d8"
              />
              <Pie
                data={data}
                dataKey="revenue"
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={90}
                fill="#82ca9d"
                label
              />
              <Pie
                data={data}
                dataKey="sell"
                cx={200}
                cy={200}
                innerRadius={80}
                outerRadius={100}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
