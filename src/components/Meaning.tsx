

export default function Meaning(props: any) {
    let meaning = ['Unable to extract meanings  ']
    const fillmeaning = () => {
        try {

            if (!props.data) return;
            const inter = props.data[0].meanings.map((item: any) => {
                return item.definitions
            })
            console.log(inter)
            if (inter.length > 0) {
                meaning = inter[0].filter((item: any) => {
                    console.log(item);
                    return item.definition.length <= 200
                }).map((item: any) => {
                    return item.definition
                })
                console.log(meaning)
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    fillmeaning();
    if (props.loading) {
        return (
            <div>
                <div className="text-2xl font-medium mb-3 pt-6">Meaning</div>
                <div className="">
                    loading...
                </div>
            </div>
        )
    }
    if (props.error) {
        return (
            <div>
                <div className="text-2xl font-medium mb-3 pt-6">Meaning</div>
                <div className="pl-5">
                    Error in extracting meanings
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="text-2xl font-medium mb-3">Meanings</div>
            <ul>
                {meaning.map((item: string) => {
                    return <li>{item}</li>
                })}
            </ul>
        </div>
    )
}