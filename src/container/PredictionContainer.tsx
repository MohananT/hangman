import { useQuery } from "@tanstack/react-query"
import { fetchWordDesc } from "../utils/apis"
import { useTextStore } from "../store/store";
import { useState } from "react";
import PartOfSpeech from "../components/PartOfSpeech";
import Meaning from "../components/Meaning";

export default function PredictionContainer() {
    const text = useTextStore(state => state.sourceText)
    const { data, isLoading, error } = useQuery({
        queryKey: ['word', text], queryFn: async () => {
            const data = await fetchWordDesc(text)
            return data
        },
    });

    if (isLoading) return (
        <div className="hangman-border">
            <div>
                <div className="text-2xl font-bold mb-3">Prediction Tips</div>
                <Meaning loading={true} />
                <PartOfSpeech loading={true} />
            </div>
        </div>
    )
    if (error) return (
        <div className="hangman-border">
            <div>
                <div className="text-2xl font-bold mb-3">Prediction Tips</div>
                <Meaning error={true} />
                <PartOfSpeech error={true} />
            </div>
        </div>
    )
    return (
        <div className="hangman-border">
            <div>
                <div className="text-2xl font-bold mb-3">Prediction Tips</div>
                <Meaning data={data} />
                <PartOfSpeech data={data} />
            </div>
        </div>
    )
}