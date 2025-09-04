import axios from "axios";
const Adminapi = axios.create({
  baseURL: "https://68b602dee5dc090291b0b0e7.mockapi.io/adminapi",
  headers: { "Content-Type": "application/json" },
});
export default Adminapi;
