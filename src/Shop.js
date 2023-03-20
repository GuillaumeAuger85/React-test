import RowLayout from "./RowLayout";

function Shop({ name, id}) {
    const arrowStyles = { border: '2px solid transparent' }
    return (
        <RowLayout
            id={id} name={name}
            arrowStyles={arrowStyles}
            key={`${name}${id}`}
        />
    )
}

export default Shop;