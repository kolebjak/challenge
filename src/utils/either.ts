enum tag {
  'right' = 'right',
  'left' = 'left',
}

export interface ILeft<A> {
  value: A;
  tag: tag.left;
}

export interface IRight<B> {
  value: B;
  tag: tag.right;
}

export type Either<A, B> = ILeft<A> | IRight<B>;

export const Left = <A>(val: A): ILeft<A> => ({ value: val, tag: tag.left });
export const Right = <B>(val: B): IRight<B> => ({ value: val, tag: tag.right });
export const isLeft = <A, B>(val?: Either<A, B>): val is ILeft<A> => !!val && (val as ILeft<A>).tag === tag.left;
export const isRight = <A, B>(val?: Either<A, B>): val is IRight<B> => !!val && (val as IRight<B>).tag === tag.right;
