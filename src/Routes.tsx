import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Calculator } from './pages'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* =============================================================== */}

        <Route path="/" element={<Calculator />} />
        <Route path="/*" element={<Navigate to="/" />} />

        {/* =============================================================== */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
