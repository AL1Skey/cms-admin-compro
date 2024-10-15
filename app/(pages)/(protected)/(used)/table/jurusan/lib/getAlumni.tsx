

export default async function getAlumni():Promise<any>{
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/jurusan`,{
        next:{revalidate:1}
    }).then(res => res.json());
    console.log(data);
    return data;
}