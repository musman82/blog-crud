import { BlogType } from "./commonTypes"
// export type BlogPropsType = {
//     note: string,
//     date: string,
//     amount: number,
//     category: string,
//     id: string
// }

export type BlogModalProps = {
    isOpen: boolean,
    onClose: ()=> void,
    Blog: BlogType
    onAddBlog: (Blog:BlogType)=> void
    onUpdateBlog: (Blog:BlogType)=> void
}