"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, SquarePen, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DeleteConfirmationDialog from "@/components/delete-confirmation-dialog";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const BasicTable: React.FC<
  Partial<{
    columns: any[];
    action(id: string | null): Promise<void> | null;
    token: string;
  }>
> = ({ columns = [], action = null, token = "" }) => {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [actId, setActId] = useState<string | null>(null);
  const [tableData, setTableData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pages, setPages] = useState<number>(1);
  const [next, setNext] = useState<boolean>(false);
  const [prev, setPrev] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(1);
  function pagination(page: any) {
    async function fetchData() {
      setLoading(true);
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/alumni?pages=${page}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      )
        .then((res) => res.json())
        .catch((err) => {
          console.error(err);
        });
      const isNext = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/alumni?pages=${page + 1}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      )
        .then((res) => res.json())
        .catch((err) => {
          console.error(err);
        });
      const isPrev = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/alumni?pages=${page - 1}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      )
        .then((res) => res.json())
        .catch((err) => {
          console.error(err);
        });
      setTableData(data);
      setNext(isNext?.length > 0);
      setPrev(isPrev?.length > 0);
      setPages(page);
      setLoading(false);
      setOffset((page - 1) * 25 + 1);
    }
    fetchData();
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/alumni?pages=${pages}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      )
        .then((res) => res.json())
        .catch((err) => {
          console.error(err);
        });
      const isNext = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/alumni?pages=${pages + 1}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      )
        .then((res) => res.json())
        .catch((err) => {
          console.error(err);
        });
      const isPrev = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/alumni?pages=${pages - 1}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      )
        .then((res) => res.json())
        .catch((err) => {
          console.error(err);
        });
      setTableData(data);
      setNext(isNext?.length > 0);
      setPrev(isPrev?.length > 0);
      setLoading(false);
    }
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <DeleteConfirmationDialog
        open={deleteModalOpen}
        onClose={() => {
          setActId(null);
          setDeleteModalOpen(false);
        }}
        onConfirm={() => {
          async function runAct() {
            if (action) {
              await action(actId);
            }
            router.refresh();
          }
          runAct();
        }}
        defaultToast={false}
      />
      <Table>
        <TableHeader>
          <TableRow>
            {columns?.map((column, index) => (
              <TableHead
                key={`basic-table-column-${index}`}
                className="text-center"
              >
                {column}
              </TableHead>
            ))}
            <TableHead className="text-center">action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData?.map((row, index1) => (
            <TableRow key={`table-data-${index1}`}>
              {Object.keys(row).map((key, index) => (
                <>
                  {key === "approval" && (
                    <TableCell key={`table-data-cell-${index}`}>
                      {row[key] ? "Approved" : "Not Approved"}
                    </TableCell>
                  )}
                  {key === "id" && (
                    <TableCell key={`table-data-cell-${index}`}>
                      {offset +index1}
                    </TableCell>
                  )}

                  {![
                    "image",
                    "id",
                    "createdAt",
                    "updatedAt",
                    "approval",
                  ].includes(key) && (
                    <TableCell key={`table-data-cell-${index}`}>
                      {row[key]}
                    </TableCell>
                  )}
                </>
              ))}
              <TableCell>
                <div className="flex items-center gap-4">
                  <Link
                    href={
                      "/staff/alumni/add" +
                      `/${row && row["id"] ? row["id"] : ""}`
                    }
                  >
                    <Button color="secondary">
                      <Eye className="w-4 h-4" /> Up to About Us
                    </Button>
                  </Link>
                  <Link
                    href={
                      pathname + `/update/${row && row["id"] ? row["id"] : ""}`
                    }
                  >
                    <Button>
                      <SquarePen className="w-3 h-3" /> Edit
                    </Button>
                  </Link>
                  <Button
                    onClick={() => {
                      setActId(row["id"]);
                      setDeleteModalOpen(true);
                    }}
                  >
                    <Trash2 className="w-4 h-4" /> Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center gap-4">
        {pages > 1 && (
          <Button
            onClick={() => {
              if (pages > 1) {
                setPages(pages - 1);
              }
              pagination(pages - 1);
            }}
            hidden={pages === 1}
          >
            Previous
          </Button>
        )}
        {pages > 1 && (
          <Button
            onClick={() => {
              setPages(pages - 1);
              pagination(pages - 1);
            }}
          >
            {" "}
            {pages - 1}{" "}
          </Button>
        )}
        <Button
          onClick={() => {
            setPages(pages);
            pagination(pages);
          }}
        >
          {" "}
          {pages}{" "}
        </Button>
        {next && (
          <Button
            onClick={() => {
              setPages(pages + 1);
              pagination(pages + 1);
            }}
          >
            {" "}
            {pages + 1}{" "}
          </Button>
        )}
        {next && (
          <Button
            onClick={() => {
              setPages(pages + 1);
              pagination(pages + 1);
            }}
            hidden={!next}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default BasicTable;
