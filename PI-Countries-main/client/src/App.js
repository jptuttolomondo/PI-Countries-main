import { AppRouter } from './router/Router'
import { Provider } from 'react-redux'
import { store } from './store/store'


export const App = () => {
    return (
        <Provider store={store}>
         <AppRouter/>
        </Provider>
        
    )
}

