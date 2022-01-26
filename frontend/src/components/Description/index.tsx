import "./styles.css";

type DescriptionProps = {
  text: null | string;
};

export default function Description({ text }: DescriptionProps) {
  return (
    <div className={""}>
      <p>{text}</p>
    </div>
  );
}
