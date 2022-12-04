import { ReactNode } from "react";
import styles from "./Container.module.css";

type Props = {
  children?: ReactNode;
};

export const Container: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.container}>
			<h1>Container</h1>
			{props.children}
    </div>
  );
};

export default Container;
