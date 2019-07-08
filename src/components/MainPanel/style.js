const styles = {
  mainPanel:{
    paddingTop:'90px',
  },
  headTitle:{
    display:'inline',
    marginRight:'15px',
  },
  headSubtitle:{
    color: '#b9b9b9',
    fontWeigh:'bold',
    display:'inline',
  },
  mainPanelContent:{
    backgroundColor:'#ebebeb',
    borderRadius: '10px',
    paddingLeft:'40px',
    paddingRight:'40px,'
  },
  mainPanelItem:{
    display:'flex',
    padding: '55px 40px',
    borderBottom:'1px solid #dfdfdf',
    "&::last-of-type" :{
      borderBottom: 'none',
    }
  },
  mainPanelItemHead:{
    marginBottom: '35px',
  },
  mainPanelItemContent:{
    width:'75%',
    color: '#7c7c7c',
    fontSize:'17px',
  },
  mainPanelItemLeft:{
    maxWidth: '930px',
    width: '80%',
  },
  mainPanelItemTags:{
    marginTop:'36px',
  },
  mainPanelItemTagsItem:{
    marginRight:'10px',
  },
  mainPanelItemRight:{
    paddingLeft: '65px',
    display: 'flex',
    alignItems: 'center',
    borderLeft: '1px solid #dfdfdf',
  },
  mainPanelItemRightPrice:{
    display:'block',
  }
}
export default styles;