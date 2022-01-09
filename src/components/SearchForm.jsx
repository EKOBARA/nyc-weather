const SearchForm = ({ zip, setZip, handleSubmit }) => {

    return (
        <form onSubmit={handleSubmit}>
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