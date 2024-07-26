import axiosInstance from "@/lib/axios";

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getGlobalHighScore = async () => {
  try {
    const response = await axiosInstance.get("/api/v1//global_best_score");
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const updateGlobalHighScore = async (payload: {
  id: string;
  global_best_score: number;
}) => {
  try {
    const response = await axiosInstance.put(
      `/api/v1/global_best_score/${payload.id}`,
      payload,
      axiosConfig
    );
    return response;
  } catch (error) {
    console.error("Error sending data:", error);
  }
};
