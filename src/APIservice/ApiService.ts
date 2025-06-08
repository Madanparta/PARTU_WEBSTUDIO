import axios from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_PRODUCTION_API,
    headers: {
        "Content-Type": "application/json",
    },
});

const handleApiError = (error: any) => {
    console.log("error",error?.response?.data?.message)
};

export const postRequest = async (
    url: string,
    payload: object | FormData | string,
    setLoading?: (loading: boolean) => void,
    customHeaders = {}
) => {
    try {
        setLoading?.(true);
        const response = await apiClient.post(url, payload, {
            headers: customHeaders,
        });

        if(response?.data?.success === false) throw response?.data?.message;
        return response;
    } catch (error) {
        handleApiError(error);
        setLoading?.(false);
        throw error;
    } finally {
        setLoading?.(false);
    }
}