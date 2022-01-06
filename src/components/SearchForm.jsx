const SearchForm = ({ zip, setZip }) => {

    return (
        <form>
            <input 
                type="text"
                placeholder="Enter ZIP Code"
                onChange={(e) => setZip(e.target.value)}
                value={zip}
            />
            <button type='submit'>Search</button>
        </form>
    );
};

export default SearchForm;