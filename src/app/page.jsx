import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import CategoriesSection from "./components/categoriesSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
      <CategoriesSection />
      <Footer />
    </div>
  );
}
