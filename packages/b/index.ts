import { isEven } from '@common/monorepo-pkg-a';

export const isOdd = (x: number) => !isEven(x);
