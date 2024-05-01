
type CartLabelProps = {
    array: string[]
}

export const CartLabel = ({ array }: CartLabelProps) => {

    return (
        <>
            {array.map((label, id) => (
                <p key={id}>{label}</p>
            ))}
        </>
    )
}