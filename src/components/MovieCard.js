export const MovieCard = ({title, type, posterUrl, children}) => {
    return(
        <div>
            <div>
                <img src="{posterUrl}" alt="{title}"></img>
            </div>
            <div>
                <p>{title}</p>
                <button>{type}</button>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}