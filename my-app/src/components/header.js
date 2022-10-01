import PropTypes from 'prop-types' 
import Button from './button'

const Header = ({title}) =>{
    return (
        <header>
            <h1 style = {headingStyle}> {title} </h1>
            
        </header>
    )
}

 Header.defaultProps = {
    title: 'Birdify',
}
const headingStyle = {
    color: 'green',
    backgroundColor: 'black'
}

// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// }
export default Header;
