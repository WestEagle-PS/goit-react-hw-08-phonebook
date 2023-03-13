import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRouter from 'modules/PrivateRouter/PrivateRouter';
import PublicRoute from 'modules/PublicRoute/PublicRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const PhonebookPage = lazy(() => import('pages/PhonebookPage/PhonebookPage'));
const MyFavoritePhonePage = lazy(() => import('pages/MyFavoritePhonePage/MyFavoritePhonePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>.....Loading page, please wait</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateRouter />}>
          <Route path="/phonebook" element={<PhonebookPage />} />
          <Route path="/favorite" element={<MyFavoritePhonePage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
