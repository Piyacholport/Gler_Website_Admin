
import axios from "axios";
export default function useApi() {
    const baseURL = process.env.VUE_APP_BACKEND_BASE_URL+"";
    const api = axios.create({
        baseURL,
      });
      const fetchActivity = async () => {
        const res = await api.get("/activity");
        return res.data;
      };
      const updateChatopen = async (id, Text) => {
        const res = await api.patch(`/updateChatopen/${id}/${Text}`);
        return res.data;
      };

      return {
        api,
        fetchActivity,updateChatopen
    };
}

