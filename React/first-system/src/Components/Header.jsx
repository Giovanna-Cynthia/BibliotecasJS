const Header = () => {
const headerStyle = {
backgroundColor: "pink",
padding: '20px',
textAlign: 'center',
borderBottom: '2px solid black'
}

const titleStyle = {
    margin: 0,
    fontSize: '24px',
    color: 'white'
}


    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>First System</h1>
        </header>
    );
};

export default Header;