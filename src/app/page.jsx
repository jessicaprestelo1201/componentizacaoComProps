import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import CategoriesSection from "./components/categoriesSection";
import Feed from "./components/feed";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
      <CategoriesSection />
      <Feed />
      <Footer />
    </div>
  );
}
