export default function Image({url,name}){
    return(
        <img className="round-image" src={url} alt={name} />
    )
}