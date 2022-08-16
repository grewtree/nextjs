import UseSWR from 'swr';

const baseURL = "nextjs-v7upbezwy-grewtree.vercel.app";

const response = (...args) => fetch(...args).then(res => res.json())

export default function fetcher(endpoint){
    const { data, error } = UseSWR(`${baseURL}${endpoint}`, response)
    return {
        data,
        isLoading : !error && !data,
        isError : error
    }
}