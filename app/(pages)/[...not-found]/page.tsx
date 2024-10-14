import { notFound } from "next/navigation";

const page = () => {
    notFound();
};

export async function generateStaticParams() {
    return [{ params: { "not-found": "not-found" } }];
}

export default page;
