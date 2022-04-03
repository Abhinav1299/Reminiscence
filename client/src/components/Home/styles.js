import { makeStyles } from '@material-ui/core/styles';

const srcStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#77aa77',
    fontSize: '3.5rem'
  },
  image: {
    marginLeft: '15px',
  },

  [theme.breakpoints.down('sm')]:{
    mainContainer: {
      flexDirection: 'column-reverse'
    },
    defHeading: {
      fontSize: '2rem'
    }
  },  
  
}));

export default srcStyles;