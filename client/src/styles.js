import { makeStyles } from '@material-ui/core/styles';

const srcStyles = makeStyles(() => ({
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
  },
  image: {
    marginLeft: '15px',
  },
}));

export default srcStyles;