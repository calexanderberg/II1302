import { Grid, Header, Segment, Dropdown, Label } from 'semantic-ui-react'
import styles from '../styles/device.module.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import faker from 'faker'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

/* 
Future constant using chart.js
https://www.chartjs.org/docs/latest/
https://www.chartjs.org/docs/latest/samples/line/interpolation.html
*/

const DeviceView = ({ temp, gasses }: { temp: number; gasses: number }) => {
  const liveGraphing = () => {
    const options = {
      responsive: true,
      plugins: {
        legend: { position: 'top' as any },
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
    }
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

    const data = {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -20, max: 50 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }

    return <Line options={options} data={{ labels, datasets: [data] }} />
  }

  const dataBox = (type: string) => {
    var title: string, annotation: string, num: number

    if (type == 'temp') {
      title = 'Live Temperature'
      annotation = '°C'
      num = temp
    } else if (type == 'gas') {
      title = 'Live "gasses" Level'
      annotation = 'ppm'
      num = gasses
    } else if (type == 'moist') {
      title = 'Live "moist" Level'
      annotation = 'some val'
      num = 0
    } else {
      title = 'Not found'
      annotation = ''
      num = 404
    }

    return (
      <Grid>
        <Grid.Row centered>
          <div className={styles.liveheader}>{title}</div>
        </Grid.Row>
        <Grid.Row centered>
          <div className={styles.read}>
            <div className={styles.number}>{num}</div>
            <div className={styles.annotation}>{annotation}</div>
          </div>
        </Grid.Row>
        <Grid.Row></Grid.Row>
      </Grid>
    )
  }

  return (
    <div className={styles.main}>
      <Grid columns={2} padded inverted className={styles.grid}>
        <Grid.Row color="black">
          <Segment color="black" inverted className={styles.header}>
            <Header as="h3" className={styles.title}>
              Device 1<Label>Location: {'something'}</Label>
            </Header>
            <Dropdown icon="setting" pointing="left">
              <Dropdown.Menu>
                <Dropdown.Item text="Focus mode" />
                <Dropdown.Item>
                  <Dropdown text="Add" pointing="left">
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Dropdown text="Temperature">
                          <Dropdown.Menu>
                            <Dropdown.Item text="Live reading" />
                            <Dropdown.Item text="Live graphing" />
                            <Dropdown.Item text="Historical graphing" />
                          </Dropdown.Menu>
                        </Dropdown>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Dropdown text="gasses levels">
                          <Dropdown.Menu>
                            <Dropdown.Item text="Live reading" />
                            <Dropdown.Item text="Live graphing" />
                            <Dropdown.Item text="Historical graphing" />
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
        <Grid.Row className={styles.row}>
          <Grid.Column className={styles.box}>{dataBox('temp')}</Grid.Column>
          <Grid.Column className={styles.box}>{dataBox('gas')}</Grid.Column>
        </Grid.Row>
        <Grid.Row className={styles.row}>
          <Grid.Column className={styles.box}>{liveGraphing()}</Grid.Column>
          <Grid.Column className={styles.box}>
            <></>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default DeviceView
