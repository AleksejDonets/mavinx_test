const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
    color: '#000',
    position: 'relative',
  },
  grow: {
    flexGrow: 1,
  },
  blockLogo: {
    position: 'relative',
    fontWeight:'bold',
    padding: '0 25px',
    fontSize: '21px',
    "&::before": {
      content: "''",
      display: 'block',
      width: '2px',
      height: '100%',
      position: 'absolute',
      right:'0',
      backgroundColor: '#e4e4e4',
    }
  },
  searchBlock: {
    display: 'flex',
    position: 'relative',
    margin: '0 45px',
  },
  searchInput: {
    width: '250px',
    padding: '0 25px',
  },
  searchIcon: {
    position:'absolute',
    width: '24px',
    height: '100%',
    color: '#e4e4e4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockButtonsItem:{
    margin:'0 20px',
  },
  blockButtonsLastElem: {
    position: 'relative',
    padding: '0 45px',
    marginLeft: '40px',
    "&::before": {
      content: "''",
      display: 'block',
      width: '2px',
      height: '100%',
      position: 'absolute',
      right:'0',
      backgroundColor: '#e4e4e4',
    },
    "&::after": {
      content: "''",
      display: 'block',
      width: '2px',
      height: '100%',
      position: 'absolute',
      left:'0',
      backgroundColor: '#e4e4e4',
    }
  },
  noDecoration: {
    textDecoration: 'none',
    color: '#000',
  }
}
export default styles;