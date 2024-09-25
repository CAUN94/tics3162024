"use client";
import { useRouter } from 'next/router'

export default function TaskDetailPage(){
    const router = useRouter()
    const { id } = router.query

    return(
        <div>
            <h1>Task Detail {id}</h1>
        </div>
    );
}