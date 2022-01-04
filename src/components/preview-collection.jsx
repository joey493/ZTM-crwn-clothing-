import CollectionItem from "./collection-item"

const Collection = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item, idx) => idx < 4)
                    .map(({ id, ...OtherProps }) => (
                        <CollectionItem key={id} {...OtherProps} />
                    ))}
            </div>
        </div>
    )
}

export default Collection
