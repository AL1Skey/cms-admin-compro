"use client";

import { useRouter } from "@/components/navigation";

const Edit = () => {
  const router = useRouter();
  router.push("/utility/invoice/edit/1");
  return <div>Edit</div>;
};

export default Edit;
