import {clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function getFirstPathSegment(path) {
    return path.split('/').filter(Boolean)[0] || '';
}

export const generatePagination = (current, total) => {

    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);

    let pages = [1];

    if (current > 3) pages.push("ellips");

    if (current === 1) {
        pages.push(2, 3, 4);
    } else if (current === 2) {
        pages.push(2, 3, 4);
    } else if (current >= 3 && current <= total - 2) {
        pages.push(current - 1, current, current + 1);
    } else if (current === total - 1) {
        pages.push(total - 3, total - 2, total - 1);
    } else if (current === total) {
        pages.push(total - 3, total - 2, total - 1);
    }

    if (current < total - 2) pages.push("ellips");

    pages.push(total);

    return pages;
};
