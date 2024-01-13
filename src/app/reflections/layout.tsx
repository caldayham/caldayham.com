import React from "react";
import styles from "./page.module.css";

export default function ThoughtsLayout({ children }: { children: React.ReactNode }) {

    return (
        <div>
            <h1>Reflections</h1>
            {children}
        </div>
    );
};