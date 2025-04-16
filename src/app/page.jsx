import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import CategoriesSection from "./components/categoriesSection";
import Feed from "./components/feed";
import FeaturedMemesSection from "./components/featuredMemesSection";
import CreatorsSection from "./components/creatorsSection";
import Creators from "./components/creators";
import NewsLetterSection from "./components/newsLetterSection";
import SideBar from "./components/sideBar";
import SideBarCompeticoes from "./components/sideBarCompeticoes";

export default function Home() {
  return (
    <div className={styles.container}>
            <Header
        logo="MemeVerse"
        navItems={[
          { label: "Início", href: "/", active: true },
          { label: "Categorias", href: "/categories" },
          { label: "Criar Meme", href: "/create" },
          { label: "Eventos", href: "/events" },
          { label: "Sobre", href: "/about" },
        ]}
      />
      <div className={styles.mainContent}>
      <div className={styles.contentArea}>
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
        <NewsLetterSection />
      </div>
      <SideBar>
        <SideBarCompeticoes
          title={"Competições de Memes 2025"}
          date={"15 de Maio, 2025"}
          participants={356}
        />
        <SideBarCompeticoes
          title={"Workshop: Como Criar Memes Virais"}
          date={"22 de Maio, 2025"}
          participants={127}
        />
      </SideBar>
      </div>
      <Footer
        footerData={[
          {
            title: "Navegação",
            links: ["Home", "Trending", "Create", "Categories", "Profile"],
          },
          {
            title: "Recursos",
            links: [
              "Editor de Memes",
              "Templates",
              "API",
              "Para Desenvolvedores",
            ],
          },
          {
            title: "Empresa",
            links: ["Sobre nós", "Carreiras", "Blog", "Contato"],
          },
          {
            title: "Legal",
            links: ["Termos de Uso", "Privacidade", "Cookies"],
          },
        ]}
        socialLinks={[
          { icon: "📘" },
          { icon: "📸" },
          { icon: "🐦" },
          { icon: "🔗" },
        ]}
      />
    </div>
  );
}
