import MainPage from '../components/mainPage';
import NavBar from '../components/navBar';
import Announcement from '../components/announcement';
import Categories from '../components/categories';
import Products from '../components/products';
import Newsletter from '../components/newsletter';
import Footer from '../components/footer';
import "../styles.css";


const HomePage = () => {
  return (
    <div className="whole-project">
      <NavBar />
      <Announcement />
      <MainPage />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
};

export default HomePage;