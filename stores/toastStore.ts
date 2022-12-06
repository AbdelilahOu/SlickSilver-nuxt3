import { defineStore } from "pinia";

export const useToastStore = defineStore("ToastStore", {
  state: (): toastState => {
    return {
      ToastQueue: [],
    };
  },
  actions: {
    addToast: function (text: string) {
      const id = this.ToastQueue.length == 0 ? 0 : this.ToastQueue.length - 1;
      this.ToastQueue.push({ text, id });
    },
    deleteToast: function (id: number) {
      this.ToastQueue.splice(id, 1);
    },
  },
});

export interface toastState {
  ToastQueue: { text: string; id: number }[];
}
