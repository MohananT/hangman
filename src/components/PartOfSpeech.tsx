

export default function PartOfSpeech(props: any) {
    let partOfSpeech = ['Unable to extract speech part']
    const fillPartOfSpeech = () => {
        try {
            console.log(props)
            if (!props.data) return;
            console.log('after')
            partOfSpeech = props.data[0].meanings.map((item: any) => {
                return item.partOfSpeech
            });
        }
        catch (e) {
            console.log(e)
        }
    }
    fillPartOfSpeech();
    if (props.loading) {
        return (
            <div>
                <div className="text-2xl font-medium mb-3 pt-6">Parts of Speech</div>
                <div className="">
                    loading...
                </div>
            </div>
        )
    }
    if (props.error) {
        console.log(props)
        return (
            <div>
                <div className="text-2xl font-medium mb-3 pt-6">Parts of Speech</div>
                <div className="pl-5">
                    Error in extracting part of speech
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="text-2xl font-medium mb-3 pt-6">Parts of Speech</div>
            <ul className="list-disc pl-5">
                {partOfSpeech.map((item: string) => {
                    return <li>{item}</li>
                })}
            </ul>
        </div>
    )

}