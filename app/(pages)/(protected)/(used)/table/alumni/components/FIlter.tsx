"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams, useRouter } from 'next/navigation'
import { Label } from "@/components/ui/label";
const Filter = () => {
  const searchParams = useSearchParams();
  const query = searchParams ? searchParams.get('angkatan') as string|null : null;
  const [angkatan, setAngkatan] = React.useState<any>();
  const router = useRouter();
  React.useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/public/angkatan`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());
      setAngkatan(data);
      console.log(query)
    }
    fetchData();
  }, [query]);
  return (
    <div className="flex">
      <Label className="mr-5 mt-3">Angkatan: </Label>
      <Select name="angkatan" onValueChange={(e) => router.push(`/table/alumni?angkatan=${e}`)}
        value={query ? `${query}` : "Angkatan"}>
        
        <SelectTrigger>
          <SelectValue>{query ? query : "Angkatan"}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Angkatan</SelectLabel>
            {angkatan?.map((item: any, index: any) => (
              <SelectItem key={index} value={`${item}`} >
              {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
