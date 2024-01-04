const Sidebar = () => {
    const categories = ['PC', 'Phone', 'Audio', 'Camera']

    return (
        <aside className="sidebar">
            <h3 className="sidebar__title">Categories</h3>
            <ul className="sidebar__content">
                { categories.map((item, key) => (
                    <li key={key}>
                        {item}
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar