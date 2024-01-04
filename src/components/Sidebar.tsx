import '@/styles/sidebar.scss';

type SidebarProps = {
    onCategoryselected: (category: string) => void
}

const Sidebar = ({ onCategoryselected }: SidebarProps) => {
    const categories = ['All', 'PC', 'Phone', 'Audio', 'Camera']

    const handleCategoryClick = (category: string) => {
        onCategoryselected(category)
    }

    return (
        <aside className="sidebar">
            <h3 className="sidebar__title">Categories</h3>
            <ul className="sidebar__content">
                { categories.map((item, key) => (
                <li 
                    className='sidebar__content-items' 
                    key={key}
                    onClick={() => handleCategoryClick(item)}    
                >
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