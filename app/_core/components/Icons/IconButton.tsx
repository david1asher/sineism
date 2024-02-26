import { MouseEventHandler, ReactNode } from "react"

import { LoadingDots } from "../LoadingDots"

export type IconProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>
    loading?: boolean
    children?: ReactNode
}

export const IconButton = (props: IconProps) => {
    return (
        <button
            style={{
                border: "none",
                background: "none",
                padding: 0,
            }}
            onClick={props.onClick}>
            {props.loading ? <LoadingDots color="#808080" /> : props.children}
        </button>
    )
}
