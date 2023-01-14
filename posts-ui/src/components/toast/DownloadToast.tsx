import { ProgressBar, Toast } from "react-bootstrap"
import classes from "./DownloadToast.module.scss"

type Props = {
  filename: string
  loaded: number
  total: number
  progress: number
}

export function DownloadToast({ filename, loaded, total, progress }: Props) {
  return (
    <Toast className={classes["toast"]}>
      <Toast.Header className={classes["toast__header"]} closeButton={false}>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">{filename}</strong>
        {loaded === 0 ? (
          <small>Initializing....</small>
        ) : (
          <>
            <small>{loaded}</small>/<small>{total} MB</small>
          </>
        )}
      </Toast.Header>
      <Toast.Body className={classes["toast__body"]}>
        <ProgressBar variant="success" now={progress} label={`${progress}%`} />
      </Toast.Body>
    </Toast>
  )
}
