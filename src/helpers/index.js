export function isFiltersEmpty(filters) {

  if (
    filters.role === "" &&
    filters.level === "" &&
    filters.tools.length === 0 &&
    filters.languages.length === 0
  ) {
    return true;
  }

  return false;
}
