import styles from './index.module.scss';

type Props = {
  quantity: 1 | 2 | 3;
};

const Boxes = ({ quantity }: Props) => {
  const indexes = Array.from(new Array(quantity), (_, index) => index + 1);

  return (
    <ul className={styles.list}>
      {indexes.map((index) => (
        <li key={index} data-index={index} className={styles.listitem}>
          {index}
        </li>
      ))}
    </ul>
  );
};

export default Boxes;
1;
