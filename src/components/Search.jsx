
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { SearchField } from "@heroui/react";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.push(`/all-tiles?${params.toString()}`);
  };

  return (
    <SearchField>
      <SearchField.Group>
        <SearchField.SearchIcon />

        <SearchField.Input
          placeholder="Search tiles..."
          defaultValue={searchParams.get("search") || ""}
          onChange={handleChange}
          className="w-[280px]"
        />

        <SearchField.ClearButton
          onClick={() => router.push("/all-tiles")}
        />
      </SearchField.Group>
    </SearchField>
  );
};

export default Search;