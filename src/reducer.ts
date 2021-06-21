function reducer(state = { movies: [] }, action: {type: string, payload: any}) {
    switch (action.type) {
      case 'MOVIES_FETCH_SUCCEEDED':
        console.log("ACTION", action)
        return { movies: action.payload.data.Search }
      case 'MOVIES_FETCH_FAILED':
        console.log('REDUCER ERROR!')
        return {movies: []}
      default:
        return state
    }
  }

  export default reducer;