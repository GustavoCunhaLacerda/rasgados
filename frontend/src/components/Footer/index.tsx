import styles from './styles.module.scss';
import { Icon } from '@mdi/react';
import { mdiGithub } from '@mdi/js';

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
            <a href='https://github.com/CinthiaNagahama' target='_blank' rel='noreferrer' className={styles.link}>
              <Icon path={mdiGithub} size={1} style={{ marginRight: 5 }} /> Cinthia Mie Ungefehr Nagahama
            </a>
            <a href='https://github.com/GustavoCunhaLacerda' target='_blank' rel='noreferrer' className={styles.link}>
              <Icon path={mdiGithub} size={1} style={{ marginRight: 5 }} /> Gustavo Cunha Lacerda
            </a>
            <a href='https://github.com/henrique-tavares' target='_blank' rel='noreferrer' className={styles.link}>
              <Icon path={mdiGithub} size={1} style={{ marginRight: 5 }} /> Henrique Tavares Aguiar
            </a>
          </div>
          <div className={styles.section}>
            <h5>Referências</h5>
            <a
              href='https://www.icmbio.gov.br/portal/faunabrasileira/planos-de-reducao-de-impacto/7000-uncategorised/10187-livro-vermelho-ed-ano-2018'
              target='_blank'
              rel='noreferrer'
              className={styles.link}
            >
              ICMBio - Livro Vermelho - ed. ano 2018
            </a>
            <a href='https://www.wikiaves.com.br/' target='_blank' rel='noreferrer' className={styles.link}>
              WikiAves
            </a>
            <a href='https://www.iucnredlist.org/' target='_blank' rel='noreferrer' className={styles.link}>
              IUCN - Red List
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
