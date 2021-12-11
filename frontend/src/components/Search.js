import './Search.css';



const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <div class = "SearchBar">
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search posts</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search posts"
            name="s"
           
        />
        <button type="submit">Search</button>
    </form>
    </div>
);

export default SearchBar;