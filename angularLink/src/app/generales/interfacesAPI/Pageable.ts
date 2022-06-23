import { Embedded } from "./embedded";
import { Links } from "./Links";
import { Page } from "./page";

export interface Pageable {
    embedded: Embedded;
    links: Links;
    paginado: Page;
}
