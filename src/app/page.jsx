import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import CategoriesSection from "./components/categoriesSection";
import Feed from "./components/feed";
import FeaturedMemesSection from "./components/featuredMemesSection";
import CreatorsSection from "./components/creatorsSection";
import Creators from "./components/creators";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
      <CategoriesSection />
      <Feed />
      <FeaturedMemesSection />
      <CreatorsSection>
        <Creators
          name={"MemeQueen"}
          avatar={"https://i.pravatar.cc/150?img=23"}
          followers={"245K"}
          bio={"Criando memes que fazem seu dia melhor!"}
        />
        <Creators
          name={"FunnyGuy42"}
          avatar={"https://i.pravatar.cc/150?img=24"}
          followers={"189K"}
          bio={"Especialista em memes de programação e gatos"}
        />
        <Creators
          name={"LaughFactory"}
          avatar={"https://i.pravatar.cc/150?img=25"}
          followers={"327K"}
          bio={"Se não te fizer rir, devolvo seu tempo!"}
        />
      </CreatorsSection>
      <Footer />
    </div>
  );
}
