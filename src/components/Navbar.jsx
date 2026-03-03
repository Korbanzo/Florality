import { Link } from "react-router-dom"

const Navbar = ({ style }) => {
    const btnStyle = {
        background: "#F7F9F9",
        border: 'none',
        borderRadius: '5px'
    };

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: '10px'}}>
                <Link to="/">
                    <button style={btnStyle}>Home</button>
                </Link>
                <Link to="/signin">
                    <button style={btnStyle}>Sign In</button>
                </Link>
                <Link to="/signup">
                    <button style={btnStyle}>Sign Up</button>
                </Link>
                <Link to="/dashboard">
                    <button style={btnStyle}>Dashboard *TDSO*</button>
                </Link>
            </div>
        </>
    );
}

export default Navbar;