import { Link } from "react-router-dom" 

const Navbar = ({ style }) => {
    const aStyle = {
        color: "white",
        textDecoration: 'none'
    };

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: '10px'}}>
                <Link to="/" style={aStyle}>Home</Link>
                <Link to="/signin" style={aStyle}>Sign In</Link>
                <Link to="/signup" style={aStyle}>Sign Up</Link>
                
            </div>
        </>
    );
}

export default Navbar;