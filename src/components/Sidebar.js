import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "primereact/menu";

const Sidebar = () => {

    const items = [
        {
            label: "Dashboard",
            icon: "pi pi-th-large",
            template: (item, options) => {
                return (
                    <Link to="/admin/dashboard" className={options.className}>
                        <span className={options.iconClassName}></span>
                        <span className={options.labelClassName}>{item.label}</span>
                    </Link>
                )
            }
        },
        {
            label: "Kategori",
            icon: "pi pi-tags",
            template: (item, options) => {
                return (
                    <Link to="/admin/kategori" className={options.className}>
                        <span className={options.iconClassName}></span>
                        <span className={options.labelClassName}>{item.label}</span>
                    </Link>
                )
            }
        },
        {
            label: "Produk",
            icon: "pi pi-box",
            template: (item, options) => {
                return (
                    <Link to="/admin/produk" className={options.className}>
                        <span className={options.iconClassName}></span>
                        <span className={options.labelClassName}>{item.label}</span>
                    </Link>
                )
            }
        }
    ]

    return (
        <div>
            <Menu model={items} className="sidebar" />
        </div>
    )
}

export default Sidebar;