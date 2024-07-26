import React from 'react'

type ContainerProps = {
    maxWidth? : string
    children: React.ReactNode
}

const Container = (props: ContainerProps) => {
    const { children, maxWidth } = props;
    return (
        <div className={`flex items-center justify-center bg-custom-yellow w-full rounded-[32px] ${maxWidth}`}>{children}</div>
    )
}

export default Container