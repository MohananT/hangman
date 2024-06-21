import axios from "axios"
import { useEffect, useState } from "react";

const useFileHook = (filename: string) => {
    const [data, setdata] = useState<string>("");
    const [isloading, setLoading] = useState(false);
    const [isError, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await axios.get(`/${filename}`);
                setdata(data.data);
            }
            catch (e) {
                setError(true);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [filename])

    return { data, isloading, isError }
}

export default useFileHook;