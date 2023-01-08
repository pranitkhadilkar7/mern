import { Route, Routes } from "react-router-dom"
import { Layout } from "../components/layout/Layout"
import { Auth } from "../pages/auth/Auth"
import { Users } from "../pages/users/Users"

export function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Users />} />
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  )
}
