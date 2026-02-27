import { Link } from "react-router-dom" 

const Navbar = ({ style }) => {
    const buttonStyle = {
        border: "none",
        borderRadius: "5px",
        background: "#52b788",
        color: "#F7F9F9"
    };

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: '10px'}}>
                <Link to="/">
                    <button style={buttonStyle}>Home</button>
                </Link>
                <Link to="/signin">
                    <button style={buttonStyle}>Sign In</button>
                </Link>
                <Link to="/signup">
                    <button style={buttonStyle}>Sign Up</button>
                </Link>
                <Link to="/dashboard">
                    <button style={buttonStyle}>Dashboard *TDSO*</button>
                </Link>
            </div>
        </>
    );
}

export default Navbar;