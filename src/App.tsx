import React, { Suspense, lazy } from 'react';
import Loader from './components/Loader';

const PostsPage = lazy(() => import('./pages/PostPage'));

const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <PostsPage />
      </Suspense>
    </div>
  );
};

export default App;