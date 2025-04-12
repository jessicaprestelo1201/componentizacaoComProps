import styles from "./creatorsSection.module.css";

const CreatorsSection = ({children}) => {
    
    return (
        <section className={styles.creatorsSection}>
            <h2 className={styles.sectionTitle}>Criadores em Destaque</h2>
            <div className={styles.creatorsGrid}>
                {children}
            </div>
          </section>
    );
}

export default CreatorsSection;