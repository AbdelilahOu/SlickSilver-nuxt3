export default function () {
  const ToastQueue = useState<{ text: string; id: number }[]>(() => []);

  const addToast = (text: string) => {
    const id = ToastQueue.value.length == 0 ? 0 : ToastQueue.value.length - 1;
    ToastQueue.value.push({ text, id });
  };
  const deleteToast = (id: number) => {
    ToastQueue.value.splice(id, 1);
  };

  return {
    ToastQueue,
    addToast,
    deleteToast,
  };
}
