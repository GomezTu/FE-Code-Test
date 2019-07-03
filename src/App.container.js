import AppRouter from './App';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getList,
  changeFilter,
  raiseError,
  getDetail,
  cleanDetail,
  shouldGetIngredients,
  selectDrink } from "./store/actions";

const mapStateToProps = (state) => {
  return({
    cocktails: state.app.cocktails,
    selectedCocktail: state.app.selectedCocktail,
    error: state.app.error,
    fetching: state.app.fetching,
    filter: state.app.filter,
  });
};

const dispatchActionsToProps = (dispatch) => {
  return bindActionCreators(
    {
      getList,
      changeFilter,
      raiseError,
      getDetail,
      cleanDetail,
      shouldGetIngredients,
      selectDrink,
    },
    dispatch
  );
}

export default withRouter(connect(mapStateToProps, dispatchActionsToProps)(AppRouter));