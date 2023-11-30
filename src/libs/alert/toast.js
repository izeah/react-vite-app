import { toast } from "react-toastify";

export default function showToast({
  type = toast.TYPE.DEFAULT,
  title = "",
  position = toast.POSITION.TOP_CENTER,
}) {
  toast[type](title, {
    position: position,
  });
}
