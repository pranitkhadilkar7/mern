import { UsersList } from "../../components/users-list/UsersList"
import { USERS } from "./users-helper"

export function Users() {
  return <UsersList users={USERS} />
}
