import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Register, NotFound404, MainPage, Chats, Profile, ProfileEdit, Battles, Support, FAQ, AccountRestore, PostUpload, Studio, Container, Track, SavedPosts} from './components/pages/pages';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login'           element={<Login/>}/>
          <Route path='/register'        element={<Register/>}/>
          <Route path='/account-restore' element={<AccountRestore/>}/>
          <Route path='/'                element={<Container/>}>   
            <Route path='/feed'            element={<MainPage/>}/>
            <Route path='/chats'           element={<Chats/>} />
            <Route path='/saved'           element={<SavedPosts/>}/>
            <Route path='/profile'         element={<Profile/>}/>
            <Route path='/profile-edit'    element={<ProfileEdit/>}/>
            <Route path='/battles'         element={<Battles/>}/>
            <Route path='/post-upload'     element={<PostUpload/>}/>
            <Route path='/track'           element={<Track/>}/>
            <Route path='/support'         element={<Support/>}/>
            <Route path='/f.a.q'           element={<FAQ/>}/>
            <Route path='/studio'          element={<Studio/>}/>
            <Route path='*'                element={<NotFound404/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

