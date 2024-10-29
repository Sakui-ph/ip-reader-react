export function convertSearchByToString(searchBy: object) {
  const searchParams: string = Object.keys(searchBy)
    .map((key) => {
      const whereString = `${key} = '${searchBy[key as keyof object]}'`;
      return whereString;
    })
    .join(" AND ");

  return searchParams;
}
