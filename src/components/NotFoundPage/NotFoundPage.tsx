import { CircleX } from "lucide-react"

export const NotFoundPage: React.FC = () => {
    return (
        <div data-testid="not-found-page" className="flex flex-col gap-[10px] items-center">
            <CircleX size={50} color="#DC143C"/>
            <h1 className="text-4xl font-bold">Page not found</h1>
        </div>
    )
}