import { connect } from 'react-redux';
import Game from '../../components/Game/Game';

function mapStateToProps(state) {
  return {
    dots: state.dots
  }
}

const GameContainer = connect(mapStateToProps)(Game);

export default GameContainer;
