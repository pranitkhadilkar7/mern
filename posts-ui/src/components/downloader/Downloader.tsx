import { ToastContainer } from "react-bootstrap"
import { DownloadItem } from "./DownloadItem"

export function Downloader() {
  return (
    <ToastContainer className="p-3" position="bottom-end">
      <DownloadItem
        filename="profile-pic"
        url="https://images.unsplash.com/photo-1604264849633-67b1ea2ce0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80%20750w"
        removeFile={() => {
          console.log("download complete")
        }}
      />
    </ToastContainer>
  )
}
