interface iProps {
  title: string;
  text: string;
  imageURL: string;
}

export default function Card({ title, text, imageURL }: iProps) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{text}</p>
      <img src={imageURL} />
    </article>
  );
}
