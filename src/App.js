import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AbouticonLink from './components/AbouticonLink';
import {FeedbackProvider} from './context/FeedbackContext';
function App() {

    return (
      <FeedbackProvider>
<Router>
<Header/>
  <Routes>
  <Route exact path='/' element={
    <>
<FeedbackForm />
<FeedbackStats/>
<FeedbackList />
<AbouticonLink/>
    </>
  }>
</Route>
 <Route exact path='/about' element={<AboutPage/>}/>
 </Routes>


</Router>
</FeedbackProvider>
    );
}
export default App