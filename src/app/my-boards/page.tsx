"use client";

import Navbar from "@/components/MyBoards/navbar";
import { TypographyH3 } from "@/components/ownui/typography";
import { Board } from "@/components/MyBoards/board";
import { NewBoard } from "@/components/MyBoards/new-board";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ownui/spinner";
import { SearchX, Frown } from "lucide-react";
import { useSession } from "next-auth/react";

interface Board {
  name: string;
  containerId: string;
}

export default function Boards() {
  const [boards, setBoards] = useState<Board[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentBoardIndex, setCurrentBoardIndex] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data: session } = useSession();

  // Handle search on input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  /* FETCH */
  useEffect(() => {
    fetchBoards();
  }, [session]);

  const fetchBoards = async () => {
    if (!session) {
      return;
    }

    try {
      const response = await fetch("/api/board/list", {
        method: "POST",
        body: JSON.stringify({
          id: session.user.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        setBoards(responseData.boards);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }

    setLoading(false);
  };
  /* FETCH */

  // Delay boards a certain time between them
  useEffect(() => {
    const delay = setTimeout(() => {
      if (currentBoardIndex < boards.length - 1) {
        setCurrentBoardIndex(currentBoardIndex + 1);
      }
    }, 100);

    return () => clearTimeout(delay);
  }, [currentBoardIndex, boards]);

  return (
    <div className="flex flex-col h-screen">
      <Navbar onSearch={handleSearch} />
      <main className="flex-1 px-8 overflow-y-hidden">
        <div className="main_content pt-5 mx-auto max-w-screen-xl flex flex-col h-full">
          <TypographyH3 className="pb-2 shadow-[#fff_-5px_10px_11px_5px] dark:shadow-[#09090b_-5px_10px_11px_5px] z-30">
            My boards
          </TypographyH3>
          <ScrollArea>
            <div className="boards w-full py-5 px-5 grid grid-cols-3 gap-2">
              {loading ? (
                <div className="col-span-3 flex justify-center">
                  <Spinner className="w-12 h-12" />
                </div>
              ) : (
                boards
                  .filter((board) =>
                    board.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .slice(0, currentBoardIndex + 1)
                  .map((board, index) => (
                    <Board
                      key={index}
                      name={board.name}
                      id={board.containerId}
                    />
                  ))
              )}
              {!loading &&
                boards.filter((board) =>
                  board.name.toLowerCase().includes(searchTerm.toLowerCase())
                ).length === 0 && (
                  <div className="col-span-3 flex justify-center text-gray-500">
                    {boards.length === 0 ? (
                      <>
                        <span>You have no boards yet</span>
                        <Frown className="ml-2 h-6 w-6 inline-block" />
                      </>
                    ) : (
                      <>
                        <span>No boards found</span>
                        <SearchX className="ml-2 h-6 w-6 inline-block" />
                      </>
                    )}
                  </div>
                )}
            </div>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </div>
        <NewBoard />
      </main>
    </div>
  );
}
