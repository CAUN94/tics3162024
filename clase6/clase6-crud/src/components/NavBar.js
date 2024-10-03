"use client";

import Link from "next/link";

export function NavBar() {
    return (
        <header className="flex justify-between bg-green-200 p-4 items-center mb-2">
            <Link href="/">
                Hola
            </Link>
            <Link className="bg-white p-2 rounded-xl" href="/new">
                Create Task
            </Link>
        </header>
    );
}
