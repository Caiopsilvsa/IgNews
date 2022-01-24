import styles from'./styles.module.scss';

interface ButtonProps {
    productID:String
}

export function SubscribeButton ({buttonProps:ButtonProps}){
    return(
        <button className={styles.subscribeButton}>
               Subscribe Now
        </button>
    )
}