export default function Link({href, name,children}){
    return(
        <a className="navigation__link" href={href}>
            {name}{children}
          </a>
    )
}