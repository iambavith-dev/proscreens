import { redirect } from 'next/navigation'
import { FC } from 'react'

interface PostProps {
    params: {
        id: string
    }
}

const Post:FC<PostProps> = ({ params }) => {

    //proscreens://app/post/109303145898302795432_2TJc5G

    redirect(`proscreens://app/post/${params?.id}`)

}

export default Post;