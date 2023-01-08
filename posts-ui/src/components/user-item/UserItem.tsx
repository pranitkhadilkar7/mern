import classes from "./UserItem.module.scss"
import { Card } from "react-bootstrap"
import classnames from "classnames"

type Props = {
  id: string
  image: string
  name: string
  placeCount: number
}

export function UserItem({ id, image, name, placeCount }: Props) {
  return (
    <li className={classes["user-item"]}>
      <Card className={classnames(classes["card"])}>
        <div className={classnames(classes["user-item__image"])}>
          <div className={classnames(classes["avatar"])}>
            <img src={image} alt={`${id}-dp`} />
          </div>
        </div>
        <div>
          <h2>{name}</h2>
          <h5>{placeCount} Places</h5>
        </div>
      </Card>
    </li>
  )
}
