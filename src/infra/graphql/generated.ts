import type { GraphQLResolveInfo } from "graphql";
import type { MercuriusContext } from "mercurius";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) =>
  | Promise<import("mercurius-codegen").DeepPartial<TResult>>
  | import("mercurius-codegen").DeepPartial<TResult>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
};

export type Student = {
  __typename?: "Student";
  id: Scalars["ID"];
  name: Scalars["String"];
  cpf: Scalars["String"];
  email: Scalars["String"];
};

export type CreateStudentInput = {
  name: Scalars["String"];
  cpf: Scalars["String"];
  email: Scalars["String"];
};

export type CreateStudentOutput = {
  __typename?: "CreateStudentOutput";
  studentId: Scalars["ID"];
};

export type Mutation = {
  __typename?: "Mutation";
  createStudent: CreateStudentOutput;
};

export type MutationcreateStudentArgs = {
  input?: InputMaybe<CreateStudentInput>;
};

export type SearchStudentsInput = {
  name?: InputMaybe<Scalars["String"]>;
  cpf?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pageSize?: InputMaybe<Scalars["Int"]>;
};

export type SearchStudentsOutput = {
  __typename?: "SearchStudentsOutput";
  students: Array<Student>;
};

export type Query = {
  __typename?: "Query";
  searchStudents: SearchStudentsOutput;
};

export type QuerysearchStudentsArgs = {
  input: SearchStudentsInput;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Student: ResolverTypeWrapper<Student>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  CreateStudentInput: CreateStudentInput;
  CreateStudentOutput: ResolverTypeWrapper<CreateStudentOutput>;
  Mutation: ResolverTypeWrapper<{}>;
  SearchStudentsInput: SearchStudentsInput;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  SearchStudentsOutput: ResolverTypeWrapper<SearchStudentsOutput>;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Student: Student;
  ID: Scalars["ID"];
  String: Scalars["String"];
  CreateStudentInput: CreateStudentInput;
  CreateStudentOutput: CreateStudentOutput;
  Mutation: {};
  SearchStudentsInput: SearchStudentsInput;
  Int: Scalars["Int"];
  SearchStudentsOutput: SearchStudentsOutput;
  Query: {};
  Boolean: Scalars["Boolean"];
};

export type StudentResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["Student"] = ResolversParentTypes["Student"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  cpf?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateStudentOutputResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["CreateStudentOutput"] = ResolversParentTypes["CreateStudentOutput"],
> = {
  studentId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  createStudent?: Resolver<
    ResolversTypes["CreateStudentOutput"],
    ParentType,
    ContextType,
    Partial<MutationcreateStudentArgs>
  >;
};

export type SearchStudentsOutputResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["SearchStudentsOutput"] = ResolversParentTypes["SearchStudentsOutput"],
> = {
  students?: Resolver<
    Array<ResolversTypes["Student"]>,
    ParentType,
    ContextType
  >;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  searchStudents?: Resolver<
    ResolversTypes["SearchStudentsOutput"],
    ParentType,
    ContextType,
    RequireFields<QuerysearchStudentsArgs, "input">
  >;
};

export type Resolvers<ContextType = MercuriusContext> = {
  Student?: StudentResolvers<ContextType>;
  CreateStudentOutput?: CreateStudentOutputResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  SearchStudentsOutput?: SearchStudentsOutputResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

export type Loader<TReturn, TObj, TParams, TContext> = (
  queries: Array<{
    obj: TObj;
    params: TParams;
  }>,
  context: TContext & {
    reply: import("fastify").FastifyReply;
  },
) => Promise<Array<import("mercurius-codegen").DeepPartial<TReturn>>>;
export type LoaderResolver<TReturn, TObj, TParams, TContext> =
  | Loader<TReturn, TObj, TParams, TContext>
  | {
      loader: Loader<TReturn, TObj, TParams, TContext>;
      opts?: {
        cache?: boolean;
      };
    };
export interface Loaders<
  TContext = import("mercurius").MercuriusContext & {
    reply: import("fastify").FastifyReply;
  },
> {
  Student?: {
    id?: LoaderResolver<Scalars["ID"], Student, {}, TContext>;
    name?: LoaderResolver<Scalars["String"], Student, {}, TContext>;
    cpf?: LoaderResolver<Scalars["String"], Student, {}, TContext>;
    email?: LoaderResolver<Scalars["String"], Student, {}, TContext>;
  };

  CreateStudentOutput?: {
    studentId?: LoaderResolver<
      Scalars["ID"],
      CreateStudentOutput,
      {},
      TContext
    >;
  };

  SearchStudentsOutput?: {
    students?: LoaderResolver<
      Array<Student>,
      SearchStudentsOutput,
      {},
      TContext
    >;
  };
}
declare module "mercurius" {
  interface IResolvers
    extends Resolvers<import("mercurius").MercuriusContext> {}
  interface MercuriusLoaders extends Loaders {}
}
