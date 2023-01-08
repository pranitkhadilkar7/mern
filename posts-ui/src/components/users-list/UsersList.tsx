import { User } from "../../pages/users/users-type"
import { UserItem } from "../user-item/UserItem"
import classes from "./UsersList.module.scss"

type Props = {
  users: User[]
}

export function UsersList({ users }: Props) {
  return (
    <ul className={classes["user-list"]}>
      {users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.places}
        />
      ))}
    </ul>
  )
}
