import styles from "./sideBarCompeticoes.module.css"

const SideBarCompeticoes = ({ title, date, participants}) => {
    return (
        <div className={styles.eventCard}>
            <h4 className={styles.eventTitle}>{title}</h4>
            <p className={styles.eventDate}>{date}</p>
            <p className={styles.eventParticipants}>
                {participants} participantes
            </p>
        </div>
    );
}
export default SideBarCompeticoes;