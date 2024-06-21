import axios from "axios";

export async function fetchWordDesc(word: string) {
    const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    return res.data
}