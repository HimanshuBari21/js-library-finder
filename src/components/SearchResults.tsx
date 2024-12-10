import { getLibrariesByTask } from "@/utils/libraryData";
import React, { FC, HTMLAttributes, useMemo } from "react";
import Results from "./Results";

export type SearchResultsProps = HTMLAttributes<HTMLDivElement> & {
  selectedOption?: string;
};

const SearchResults: FC<SearchResultsProps> = ({ selectedOption = "" }) => {
  const resultLibraries = useMemo(
    () => getLibrariesByTask(selectedOption),
    [selectedOption]
  );

  return <Results resultLibraries={resultLibraries} />;
};

export default SearchResults;
