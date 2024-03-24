// export type typeProps = {
//     url: string,
//     views: number,
// }

export type ListItemsProps = {
    type: string,
    url?: string,
    title?: string,
    views: number,
    children?: React.ReactNode, 
}

export type ListProps = {
    list: ListItemsProps[],
}