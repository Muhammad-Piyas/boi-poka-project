import { toast } from "react-toastify";

const getStoredReadList = () => {
  const storedLiStr = localStorage.getItem("read-list");
  if (storedLiStr) {
    const storedList = JSON.parse(storedLiStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    console.log(id, "already exists in the read list");
  } else {
    storedList.push(id);
    const storedLiStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedLiStr);
    // ideally trigger toast from the component
    toast("This book is added to your read list");
  }
};
export { addToStoredReadList, getStoredReadList };
