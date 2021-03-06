import styles from './styles.module.scss';

type DescriptionProps = {
  text?: string;
};

export default function Description({ text }: DescriptionProps) {
  return (
    <div className={styles.description}>
      <p className={styles.descriptionText}>{text}</p>
    </div>
  );
}
