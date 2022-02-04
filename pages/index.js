import Grid from '../components/Layout'
import SideMenu from '../components/SideMenu'
import Content from '../components/Content'
import Company from '../components/Company'
import AboutUs from '../components/AboutUs'
import Transport from '../components/Transport'

export default function Home() {
  return (
    <>
    <Grid>
      <Content>
        <Company />
        <AboutUs />
        <Transport />
      </Content>
      <SideMenu />
    </Grid>
    </>
  )
}
