import { redirect } from 'next/navigation'

export default async function Home({ params }) {

    //proscreens://app/post/109303145898302795432_2TJc5G
    
    redirect(`proscreens://app/post/${params?.id}`)

}
