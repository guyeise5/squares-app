import axios from "axios";
import {config} from "./config";

export const colorProvider = async (): Promise<string> => {
    const resp = await axios.get<{color: string}>(`${config.apiUrl}/api/v1/color`);
    return resp.data.color
}

export const colorArray = async (len: number): Promise<string[]> => {
    return Promise.all(
        Array(len).fill(null).map((_) => colorProvider())
    )
}