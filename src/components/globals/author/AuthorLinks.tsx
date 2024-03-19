import Link from "next/link";
import { CMSIcon } from "../IconCms";

interface AuthorLinksProps{
    Url: string
    icon: string
}

export function AuthorLinks({Url,icon} : AuthorLinksProps) {

    return (
          <Link href={Url}>
           <CMSIcon icon={icon}/>
          </Link>
    )
}