import { signIn, useSession } from "next-auth/client";
import styles from "./styles.module.scss";

interface SubscribeProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeProps) {
  const [session] = useSession();

  function handleSubscribe() {
    if (!session) { // se não tiver logado, direciona para autenticação do github
      signIn('github');
      return;
    }

    
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}