import styles from './styles.module.scss';

interface PokeCardProps {
  name: String,
  id: String,
  image: String
}

export default function PokeCard({ name, id, image }: PokeCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.info}>
          <img src={image.toString()} alt="" />
          <span>{name}</span>
        </div>
        <div className={styles.more}>
          <span>#{id}</span>
        </div>
      </div>
    </div>
  )
}