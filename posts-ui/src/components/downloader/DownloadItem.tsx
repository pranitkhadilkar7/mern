import { useEffect, useState } from "react"
import axios from "axios"
import { DownloadToast } from "../toast/DownloadToast"

type Props = {
  url: string
  filename: string
  removeFile: () => void
}

export function DownloadItem({ url, filename, removeFile }: Props) {
  const [downloadInfo, setDownloadInfo] = useState({
    progress: 0,
    completed: false,
    total: 0,
    loaded: 0,
  })

  useEffect(() => {
    axios
      .get(url, {
        responseType: "blob",
        onDownloadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent
          setDownloadInfo({
            progress: total ? Math.floor((loaded * 100) / total) : 0,
            loaded,
            total: total ?? 0,
            completed: false,
          })
        },
      })
      .then((response) => {
        const url = window.URL.createObjectURL(
          new Blob([response.data], { type: response.headers["content-type"] })
        )
        const link = document.createElement("a")
        link.href = url
        link.setAttribute("download", filename)
        document.body.appendChild(link)
        link.click()

        setDownloadInfo((info) => ({
          ...info,
          completed: true,
        }))

        setTimeout(() => {
          removeFile()
        }, 4000)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <DownloadToast
      filename={filename}
      loaded={downloadInfo.loaded}
      total={downloadInfo.total}
      progress={downloadInfo.progress}
    />
  )
}
