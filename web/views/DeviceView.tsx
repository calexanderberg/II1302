import Head from 'next/head'
import { 
  Grid, 
  Header, 
  Segment, 
  Dropdown 
} from 'semantic-ui-react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
//import faker from 'faker';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

/* 
Future constant using chart.js
https://www.chartjs.org/docs/latest/
https://www.chartjs.org/docs/latest/samples/line/interpolation.html
*/


const DeviceView = ({
  temp,
  gasses
}:{temp: number, gasses: number}) => {

  /*
  const liveGraphing = () => {

  const options = {
  responsive: true,
  plugins: {
  legend: { position: 'top' as const},
  title: {
    display: true,
    text: 'Chart.js Line Chart',
    },
  },
};


    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -20, max: 50 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }

    return(
       <Line options={options} data={data} />
    )
  }
  */
  

  const liveReading = (isTemp: boolean) => {
    var title: string, annotation: string, num: number
    if(isTemp) {
      title = 'Live Temperature',
      annotation = '°C',
      num = temp;
    } else {
      title = 'Live "gasses" Level'
      annotation = 'ppm'
      num = gasses;
    }

     return(
       <Grid>
          <Grid.Row centered>
            <div className='device-live-header'>{title}</div>
          </Grid.Row>
          <Grid.Row centered>
            <div className='device-live-read'>
              <div className='device-live-number'>
                {num} 
              </div>
              <div className='device-live-annotation'>
                {annotation}
              </div>
            </div>
          </Grid.Row>
          <Grid.Row></Grid.Row>
       </Grid>
     )
  }

  return (
    <div className='device'>
      <Grid columns={2} padded inverted className="device-grid">
        <Grid.Row color="black">
          <Segment color="black" inverted className="device-header">
            <div></div>
            <Header as='h3' className='device-title'>Device 1</Header>
            <Dropdown icon="setting" pointing='left'>
              <Dropdown.Menu>
                <Dropdown.Item text="Focus mode" />
                <Dropdown.Item>
                  <Dropdown text='Add' pointing='left'>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Dropdown text='Temperature'>
                        <Dropdown.Menu>
                          <Dropdown.Item text='Live reading'/>
                          <Dropdown.Item text='Live graphing'/>
                          <Dropdown.Item text='Historical graphing'/>
                        </Dropdown.Menu>
                      </Dropdown>
                  </Dropdown.Item>
                  <Dropdown.Item>
                      <Dropdown text='gasses levels'>
                        <Dropdown.Menu>
                          <Dropdown.Item text='Live reading'/>
                          <Dropdown.Item text='Live graphing'/>
                          <Dropdown.Item text='Historical graphing'/>
                        </Dropdown.Menu>
                      </Dropdown>
                  </Dropdown.Item>
                  </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item text="Remove device" />
              </Dropdown.Menu>
            </Dropdown>
          </Segment>
        </Grid.Row>
        <Grid.Row className='device-info-row'>
          <Grid.Column className='device-info-box'>
            {liveReading(true)}
          </Grid.Column>
          <Grid.Column className='device-info-box'>
            {liveReading(false)}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className='device-info-row'>
          <Grid.Column className='device-info-box'>
            {liveGraphing}
          </Grid.Column>
          <Grid.Column className='device-info-box'>
            
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
  )
}

export default DeviceView
