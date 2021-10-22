import { Grid, GridOptions } from "@chakra-ui/layout";
import React, { PropsWithChildren, ReactElement } from "react";

interface Props extends GridOptions {
  columns?: number | number[];
}

function createRepeatString(
  input?: number | number[]
): undefined | string | string[] {
  if (!input) return undefined;
  if (typeof input === "number") return `repeat(${input}, 1fr)`;
  return input.map((i) => createRepeatString(i) as string);
}

export default function UniformGrid({
  columns,
  ...props
}: PropsWithChildren<Props>): ReactElement {
  return (
    <Grid
      {...props}
      templateColumns={createRepeatString(columns)}
      columns={columns}
    ></Grid>
  );
}
