import '../styles/items.scss'

type Props = {
    count: number
}

const ItemsCount = ({ count }: Props) => {
    return (
        <>
        <span className="items-count">Items: {count}</span>
        </>
    )
}

export default ItemsCount