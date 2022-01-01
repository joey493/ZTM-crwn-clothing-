import './menu-item.styles.scss'

const MenuItem = ({ title, img, size }) => {
    return (
        <div className={`menu-item ${size}`}>
            <div className="background-img" style={{ backgroundImage: `url(${img})` }}></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop now</span>
            </div>
        </div>
    )
}

export default MenuItem
