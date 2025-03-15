"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@workspace/ui/components/input";
// 예: Heroicons, Lucide, FontAwesome 등 아이콘 라이브러리 import
import { SearchIcon } from "lucide-react";
import { Button } from "@workspace/ui/components/button";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // 사용자가 입력할 때마다 query를 업데이트
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // 'query'가 바뀌면 300ms 후에 debouncedQuery 반영
  // (디바운스 효과: 300ms 동안 입력이 계속 들어오면 타이머 리셋)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300); // 300ms, 원하는 시간으로 조정

    return () => clearTimeout(timer);
  }, [query]);

  // debouncedQuery가 변경될 때마다 API 호출
  useEffect(() => {
    if (debouncedQuery) {
      // 실제 검색 API 요청
      console.log("Searching for:", debouncedQuery);

      // fetch("/api/search?query=" + debouncedQuery)
      //   .then(...).catch(...)
    }
  }, [debouncedQuery]);

  // 아이콘과 Input을 함께 배치 (Tailwind 예시)
  return (
    <div className="mt-3 relative w-80">
      {/* 검색 아이콘 */}
      <Input
        className="pl-8 pr-2 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="검색어를 입력하세요"
        value={query}
        onChange={handleChange}
      />
      <SearchIcon className="absolute left-2 top-2 h-5 w-5 text-gray-400" />
    </div>
  );
}
