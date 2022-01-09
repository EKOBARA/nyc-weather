import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './SearchForm.css';

const SearchForm = ({ zip, setZip, handleSubmit }) => {
    return (
        <form className='form' onSubmit={handleSubmit}>
            <Form.Control 
                type="text"
                placeholder="Enter ZIP Code"
                onChange={(e) => setZip(e.target.value)}
                value={zip}
                />
            <Button type='submit'>Search</Button>
        </form>
    );
};

export default SearchForm;