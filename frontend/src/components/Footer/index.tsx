import styles from './styles.module.scss';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <p className={styles.description}>
          Esse site foi construído para trazer à tona os estados vulneráveis que muitos animais se encontram por todo o
          Brasil, principalmete, por conta de ações humanas.
        </p>
        <div className={styles.warning}>
          <h5>Aviso:</h5>
          <span>Esse site contém imagens sensíveis sobre animais!</span>
        </div>
        <div className={styles.sectionsContainer}>
          <div className={styles.section}>
            <h5>Integrantes</h5>
            <span>Cinthia Mie Ungefehr Nagahama</span>
            <span>Gustavo Cunha Lacerda</span>
            <span>Henrique Tavares Aguiar</span>
          </div>
          <div className={styles.section}>
            <h5>Referências</h5>
            <span>ICMBio</span>
            <span>WikiAves</span>
          </div>
        </div>
      </div>
    </div>
  );
}
