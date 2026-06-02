import Link from "next/link";
import type { NavItem } from "./navItems";

type Props = {
    items: NavItem[];
};

export const HeaderNav = ({items}: Props) => {
    return(
        <nav>
            <ul>
                {items.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}