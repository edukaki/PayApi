import AboutCard from '../../components/AboutCard'
import Facilities from '../../components/Facilities'
import HomeHeader from '../../components/HomeHeader'
import Style from '../styles/Pages.module.scss'

const Home = () => {
  return (
    <main className={Style['main__background--home']}>
      <HomeHeader />
      <AboutCard />
      <Facilities />
    </main>
  )
}

export default Home
