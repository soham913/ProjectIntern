import React,{useMemo,useState} from 'react'
import Chart from "react-apexcharts";
import { Layout, Menu,Button, Tag } from 'antd';
import './App.css';
import { Typography } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import { Card } from 'antd';
import {  Dropdown } from 'antd';
import { Progress } from 'antd';
import { DownOutlined,LeftOutlined,RightOutlined,BulbOutlined } from '@ant-design/icons';
import { Space,Breadcrumb } from 'antd';
import { RocketOutlined,HomeOutlined, EllipsisOutlined,SettingOutlined,DashOutlined,PieChartOutlined,SnippetsOutlined,HeatMapOutlined, CopyOutlined, LineChartOutlined, FontSizeOutlined ,LeftSquareOutlined,ArrowUpOutlined,MenuFoldOutlined,MenuUnfoldOutlined,DatabaseOutlined, ImportOutlined, BlockOutlined, BookOutlined,InfoCircleOutlined, ExpandOutlined, CalculatorOutlined,CalendarOutlined,FormOutlined, WindowsOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;

const { Title } = Typography;
const {SubMenu} = Menu
function App() {
  const [iscollapsed,setIsCollapsed] = useState(true)

  const { RangePicker } = DatePicker;

  const dateFormat = 'YYYY/MM/DD';
  const monthFormat = 'YYYY/MM';

  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

  const customFormat = value => {
    return `custom format: ${value.format(dateFormat)}`;
  }

  const menu1 = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );




  const toggleCollapsed = () => setIsCollapsed(!iscollapsed)
  useMemo(() => {
     setIsCollapsed(iscollapsed) 
  },[iscollapsed])

  const [datafirst,setDataFirst] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ],
    colors: ['#546E7A', '#E91E63']
  })

  const [datasecond,setDataSecond] = useState(
    {
      options: {
        dataLabels:{
          enabled:false
        }
      },
      series: [44, 55, 41],
      chartOptions: {
        labels: ['HTML','CSS','Angular']
      },
      legend:{
          show: true
      },
    }
  )

  const [datathird,setDataThird] = useState(
    {
          
      series: [{
        name: "STOCK ABC",
        data: [10,50,25,78]
      }],
      options: {
        chart: {
          type: 'area',
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
  
        labels: ['2010','2014','2018','2020'],
        xaxis: {
          type: 'string',
        },
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: 'left'
        }
      },
    
    
    }
  )

  const [finalchart,setFinalChart] = useState({
          
    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      legend:{
        position: 'left'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    },
  
  
  })


  return (
    <div className="App">
    <Layout>
    <Sider>
    <Title id="title" level={2}>Keen</Title>
        <Button type="primary" style={{alignContent:'right'}} onClick={() => toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(iscollapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu 
              defaultSelectedKeys={['1']}
              mode="inline" 
              theme="dark"
              inlineCollapsed={iscollapsed}
        >
          <SubMenu key = "sub1"
                   title={<span>
              <LineChartOutlined />
              <span>Dashboards</span>
            </span>}>
            <Menu.ItemGroup>
              <Menu.Item key="sub1g1"><EllipsisOutlined /> Navy Aside</Menu.Item>
              <Menu.Item key="sub1g2"><EllipsisOutlined /> Brand Aside</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
            <Menu.Item key="indep1"><SettingOutlined />Layout Builder</Menu.Item>
          <Menu.Item>COMPONENTS</Menu.Item>
            <SubMenu key = "sub2"
                   title={<span>
              <DatabaseOutlined />
              <span>Base</span>
            </span>}>
            <Menu.ItemGroup>
              <Menu.Item key="sub1g1"><EllipsisOutlined /> Navy Aside</Menu.Item>
              <Menu.Item key="sub1g2"><EllipsisOutlined /> Brand Aside</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key = "sub3"
                   title={<span>
              <RocketOutlined />
              <span>Custom</span>
            </span>}>
            <Menu.ItemGroup>
              <Menu.Item key="sub1g1"><EllipsisOutlined /> Navy Aside</Menu.Item>
              <Menu.Item key="sub1g2"><EllipsisOutlined /> Brand Aside</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key = "sub4"
                   title={<span>
           <BlockOutlined />
              <span>Extended</span>
            </span>}>
            <Menu.ItemGroup>
              <Menu.Item key="sub1g1"><EllipsisOutlined /> Navy Aside</Menu.Item>
              <Menu.Item key="sub1g2"><EllipsisOutlined /> Brand Aside</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key = "sub5"
                   title={<span>
              <FormOutlined />
              <span>Forms</span>
            </span>}>
            <Menu.ItemGroup>
              <Menu.Item key="sub1g1"><EllipsisOutlined /> Navy Aside</Menu.Item>
              <Menu.Item key="sub1g2"><EllipsisOutlined /> Brand Aside</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key = "sub6"
                   title={<span>
              <LeftSquareOutlined />
              <span>Keen Wizard</span>
            </span>}>
            <Menu.ItemGroup>
              <Menu.Item key="sub1g1"><EllipsisOutlined /> Navy Aside</Menu.Item>
              <Menu.Item key="sub1g2"><EllipsisOutlined /> Brand Aside</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key = "sub7"
                   title={<span>
              <ArrowUpOutlined />
              <span>DataTables</span>
            </span>}>
            <Menu.ItemGroup>
              <Menu.Item key="sub1g1"><EllipsisOutlined /> Navy Aside</Menu.Item>
              <Menu.Item key="sub1g2"><EllipsisOutlined /> Brand Aside</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key = "sub8"
                   title={<span>
              <FontSizeOutlined />
              <span>Icons</span>
            </span>}>
            <Menu.ItemGroup>
              <Menu.Item key="sub1g1"><EllipsisOutlined /> Navy Aside</Menu.Item>
              <Menu.Item key="sub1g2"><EllipsisOutlined /> Brand Aside</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key = "sub9"
                   title={<span>
              <WindowsOutlined />
              <span>Portlots</span>
            </span>}>
            <Menu.ItemGroup>
              <Menu.Item key="sub1g1"><EllipsisOutlined /> Navy Aside</Menu.Item>
              <Menu.Item key="sub1g2"><EllipsisOutlined /> Brand Aside</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key = "sub10"
                   title={<span>
              <CalendarOutlined />
              <span>Calenders</span>
            </span>}>
            <Menu.ItemGroup>
              <Menu.Item key="sub1g1"><EllipsisOutlined /> Navy Aside</Menu.Item>
              <Menu.Item key="sub1g2"><EllipsisOutlined /> Brand Aside</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key = "sub11"
                   title={<span>
              <CopyOutlined />
              <span>Charts</span>
            </span>}>
            <Menu.ItemGroup>
              <Menu.Item key="sub1g1"><EllipsisOutlined /> Navy Aside</Menu.Item>
              <Menu.Item key="sub1g2"><EllipsisOutlined /> Brand Aside</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item>CUSTOM</Menu.Item>
          <SubMenu key = "sub11"
                   title={<span>
              <PieChartOutlined />
              <span>Charts</span>
            </span>}>
            <Menu.ItemGroup>
              <Menu.Item key="sub1g1"><EllipsisOutlined /> Navy Aside</Menu.Item>
              <Menu.Item key="sub1g2"><EllipsisOutlined /> Brand Aside</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key = "sub11"
                   title={<span>
              <ImportOutlined />
              <span>Blog</span>
            </span>}>
            <Menu.ItemGroup>
              <Menu.Item key="sub1g1"><EllipsisOutlined /> Navy Aside</Menu.Item>
              <Menu.Item key="sub1g2"><EllipsisOutlined /> Brand Aside</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key = "sub12"
                   title={<span>
              <BookOutlined />
              <span>Pricing</span>
            </span>}>
            <Menu.ItemGroup>
              <Menu.Item key="sub1g1"><EllipsisOutlined /> Navy Aside</Menu.Item>
              <Menu.Item key="sub1g2"><EllipsisOutlined /> Brand Aside</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key = "sub13"
                   title={<span>
              <SnippetsOutlined />
              <span>Invoices</span>
            </span>}>
            <Menu.ItemGroup>
              <Menu.Item key="sub1g1"><EllipsisOutlined /> Navy Aside</Menu.Item>
              <Menu.Item key="sub1g2"><EllipsisOutlined /> Brand Aside</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key = "sub14"
                   title={<span>
              <InfoCircleOutlined />
              <span>FAQs</span>
            </span>}>
            <Menu.ItemGroup>
              <Menu.Item key="sub1g1"><EllipsisOutlined /> Navy Aside</Menu.Item>
              <Menu.Item key="sub1g2"><EllipsisOutlined /> Brand Aside</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key = "sub15"
                   title={<span>
              <HeatMapOutlined />
              <span>User Pages </span>
            </span>}>
            <Menu.ItemGroup>
              <Menu.Item key="sub1g1"><EllipsisOutlined /> Navy Aside</Menu.Item>
              <Menu.Item key="sub1g2"><EllipsisOutlined /> Brand Aside</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>

        </Menu>
      </Sider>
      <Layout>
      <Header style={{padding:10, backgroundColor:"white"}}>
      <SettingOutlined id="seting" size="large" />
          <Avatar id="avatar" size="large" icon={<UserOutlined />} />
          <Space>
          <Dropdown overlay={menu1}>
            <Button>
              Pages <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={menu1}>
            <Button>
              Reports <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={menu1}>
            <Button>
              Apps <DownOutlined />
            </Button>
          </Dropdown>
          </Space>
        </Header>
        <Content style={{backgroundColor:"whitesmoke",padding:10}}>
          <Space direction="vertical">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={2}>
          <div>
              <h2>Dashboard</h2>
          </div>
        </Col>
        <Col className="gutter-row" span={3} style={{paddingTop:7}}>
          <div>
              <Breadcrumb>
                <Breadcrumb.Item href="">
                  <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                  <UserOutlined />
                  <span>Dashboard</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </Breadcrumb>
          </div>
        </Col>
        <Col className="gutter-row" span={19}>
           <DatePicker style={{float:"right"}} defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
        </Col>
        </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
              <div>
              <Card className="card-height" title="Author Sales" extra={<a href="#"><DashOutlined /></a>}>
                <Row>
                <div span={12}>
                <Chart style={{alignSelf:"right"}}
                  options={datafirst.options}
                  series={datafirst.series}
                  type="line"
                  width="450"
                  height="200"
            
            />
                </div>
                </Row>
                <div style={{alignContent:"right"}}>
                </div>
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <Card title="Technologies" extra={<a href="#"><DashOutlined /></a>}>
              <div className="donut">
              <Chart style={{alignSelf:"right"}}
                  options={datasecond.options}
                  series={datasecond.series}
                  type="donut"
                  width="450"
                  height="200"
            />
              </div>
              </Card>
            </Col>
            <Col className="gutter-row" span={8}>
              <div>
              <Card title="Total Orders" extra={<a href="#"><DashOutlined /></a>}>
              <Chart style={{alignSelf:"right"}}
                  options={datathird.options}
                  series={datathird.series}
                  type="area"
                  width="450"
                  height="200"
            />
              </Card>
              </div>
            </Col>
          </Row>
          

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={8}>
            <div s>
            <Card title="Announcements" extra={<a href="#"><LeftOutlined /><RightOutlined/></a>}>
              <h2><b>Incredibly Positive Reviews</b></h2>
              <h4 style={{color:"gray"}}>Lorem ipsum dolor sit amet. Nam sunt tenetur in velit ipsa sit libero voluptatem est ducimus debitis et doloremque animi sit deleniti</h4>
              <Tag color="blue">17 Nov,2018</Tag>
              <Tag style={{float:"right"}}>View</Tag>
            </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
        <div>
        <Card title="Projects" extra={<a href="#"><LeftOutlined /><RightOutlined/></a>}>
          <h2><b>First Milestone Achievement</b></h2>
          <h4 style={{color:"gray"}}>Lorem ipsum dolor sit amet. Nam sunt tenetur in velit ipsa sit libero voluptatem est ducimus debitis et doloremque animi sit deleniti</h4>
          <h4 style={{color:"gray"}}>Progress</h4>
          <Progress percent={50} status="active" />
        </Card>
        </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div>
          <Card title="Today's Schedule" extra={<a href="#"><LeftOutlined /><RightOutlined/></a>}>
            <h2><b>UI/UX Design Updates</b></h2>
            <h3 style={{color:"blue"}}>11:30AM-12:30PM</h3>
            <h5 style={{color:"gray"}}><BulbOutlined />loorem,ippsumdolar,sit...</h5>
            <Tag style={{float:"right"}}>View Map</Tag>
          </Card>
          </div>
        </Col>
    </Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={8}>
        <Card title="Top Products" style={{height:472}} extra={<a href="#"><DashOutlined /></a>}>
        <div style={{float:"center"}}>
          <Row>
        <Space>
        <Button type="primary" size="large">
          <DashOutlined />
          Primary
        </Button>
        <Button type="primary" size="large">
          Primary
        </Button>
        <Button type="primary" size="large">
          Primary
        </Button>
        </Space>
        </Row>
        <Row>
        <h4>HTML CSS</h4>
        <Progress percent={70} size="small" style={{float:"right"}}/>
        </Row>
        <Row>
        <h4>Wordpress Themes</h4>
        <Progress percent={21} size="small" style={{float:"right"}}/>
        </Row>
        <Row>
        <h4>eCommerce Websites</h4>
        <Progress percent={16} size="small" style={{float:"right"}}/>
        </Row>
        <Row>
        <h4>UX/UI Design</h4>
        <Progress percent={4} size="small" style={{float:"right"}}/>
        </Row>
        <Row>
        <h4>Froobie Themes</h4>
        <Progress percent={1} size="small" style={{float:"right"}}/>
        </Row>
        
        </div>
      </Card>
      </Col>
      <Col className="gutter-row" span={16}>
      <Card title="Sales Statistics" extra={<a href="#"><DashOutlined /></a>}>
      <Chart options={finalchart.options} series={finalchart.series} type="bar" height={350} />
    </Card>
      </Col>
    </Row>



    </Space>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    </div>
  );
}

export default App;
