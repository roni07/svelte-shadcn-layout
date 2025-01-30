/**
 * Created by WebStorm.
 * User: Mehedi Hasan
 * Date: 20 Jan 2025
 * Time: 11:52 AM
 * Email: mdmehedihasanroni28@gmail.com
 */

import * as  ICON from "lucide-svelte/icons";
import {COUPON_PATH, PRODUCT_LIST_PATH, ROOT_PATH, USER_LIST_PATH} from "./Slug.js";

export const Navs = [
    {
        title: "Dashboard",
        icon: ICON.Home,
        path: ROOT_PATH,
        key: "dashboard",
        subMenu: null,
    },
    {
        title: "User Management",
        icon: ICON.User,
        key: "user-management",
        subMenu: [
            {
                title: "User List",
                icon: ICON.User,
                key: "user-list",
                path: USER_LIST_PATH,
                subMenu: null
            }
        ],
    },
    {
        title: "Product Management",
        icon: ICON.BookMarked,
        key: "product-management",
        subMenu: [
            {
                title: "Product List",
                icon: ICON.BookOpen,
                key: "product-list",
                path: PRODUCT_LIST_PATH,
                subMenu: null
            }
        ],
    },
    {
        title: "Coupon",
        icon: ICON.Gift,
        path: COUPON_PATH,
        key: "coupon",
        subMenu: null,
    },
]
