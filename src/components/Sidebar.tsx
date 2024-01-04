import '@/styles/sidebar.scss';

const Sidebar = () => {
    const categories = ['All', 'PC', 'Phone', 'Audio', 'Camera']

    return (
        <aside className="sidebar">
            <h3 className="sidebar__title">Categories</h3>
            <ul className="sidebar__content">
                { categories.map((item, key) => (
                <li className='sidebar__content-items' key={key}>
                    <span className='sidebar__content-items-line' />
                    {item}
                </li>
                ))}
                <span className='sidebar__content-items-line' />
            </ul>
        </aside>
    )
}

export default Sidebar