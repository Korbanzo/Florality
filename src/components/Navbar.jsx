const Navbar = ({ style }) => {
    const aStyle = {
        color: "white",
         textDecoration: 'none'
    };

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: '10px'}}>
                <a href="#" style={aStyle}>Sign in</a>
                <a href="#" style={aStyle}>Sign up</a>
            </div>
        </>
    );
}

export default Navbar;