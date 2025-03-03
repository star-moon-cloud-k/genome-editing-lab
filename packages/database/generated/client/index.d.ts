
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model images
 * 
 */
export type images = $Result.DefaultSelection<Prisma.$imagesPayload>
/**
 * Model lab
 * 
 */
export type lab = $Result.DefaultSelection<Prisma.$labPayload>
/**
 * Model stock
 * 
 */
export type stock = $Result.DefaultSelection<Prisma.$stockPayload>
/**
 * Model supplier
 * 
 */
export type supplier = $Result.DefaultSelection<Prisma.$supplierPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const role: {
  user: 'user',
  manager: 'manager',
  admin: 'admin'
};

export type role = (typeof role)[keyof typeof role]


export const status: {
  active: 'active',
  disabled: 'disabled'
};

export type status = (typeof status)[keyof typeof status]


export const type: {
  stock: 'stock'
};

export type type = (typeof type)[keyof typeof type]

}

export type role = $Enums.role

export const role: typeof $Enums.role

export type status = $Enums.status

export const status: typeof $Enums.status

export type type = $Enums.type

export const type: typeof $Enums.type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Images
 * const images = await prisma.images.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Images
   * const images = await prisma.images.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.images`: Exposes CRUD operations for the **images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.images.findMany()
    * ```
    */
  get images(): Prisma.imagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lab`: Exposes CRUD operations for the **lab** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Labs
    * const labs = await prisma.lab.findMany()
    * ```
    */
  get lab(): Prisma.labDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock`: Exposes CRUD operations for the **stock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks
    * const stocks = await prisma.stock.findMany()
    * ```
    */
  get stock(): Prisma.stockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.supplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    images: 'images',
    lab: 'lab',
    stock: 'stock',
    supplier: 'supplier',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "images" | "lab" | "stock" | "supplier" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      images: {
        payload: Prisma.$imagesPayload<ExtArgs>
        fields: Prisma.imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          findFirst: {
            args: Prisma.imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          findMany: {
            args: Prisma.imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>[]
          }
          create: {
            args: Prisma.imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          createMany: {
            args: Prisma.imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.imagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>[]
          }
          delete: {
            args: Prisma.imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          update: {
            args: Prisma.imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          deleteMany: {
            args: Prisma.imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.imagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>[]
          }
          upsert: {
            args: Prisma.imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          aggregate: {
            args: Prisma.ImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImages>
          }
          groupBy: {
            args: Prisma.imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.imagesCountArgs<ExtArgs>
            result: $Utils.Optional<ImagesCountAggregateOutputType> | number
          }
        }
      }
      lab: {
        payload: Prisma.$labPayload<ExtArgs>
        fields: Prisma.labFieldRefs
        operations: {
          findUnique: {
            args: Prisma.labFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.labFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labPayload>
          }
          findFirst: {
            args: Prisma.labFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.labFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labPayload>
          }
          findMany: {
            args: Prisma.labFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labPayload>[]
          }
          create: {
            args: Prisma.labCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labPayload>
          }
          createMany: {
            args: Prisma.labCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.labCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labPayload>[]
          }
          delete: {
            args: Prisma.labDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labPayload>
          }
          update: {
            args: Prisma.labUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labPayload>
          }
          deleteMany: {
            args: Prisma.labDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.labUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.labUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labPayload>[]
          }
          upsert: {
            args: Prisma.labUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labPayload>
          }
          aggregate: {
            args: Prisma.LabAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLab>
          }
          groupBy: {
            args: Prisma.labGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabGroupByOutputType>[]
          }
          count: {
            args: Prisma.labCountArgs<ExtArgs>
            result: $Utils.Optional<LabCountAggregateOutputType> | number
          }
        }
      }
      stock: {
        payload: Prisma.$stockPayload<ExtArgs>
        fields: Prisma.stockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          findFirst: {
            args: Prisma.stockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          findMany: {
            args: Prisma.stockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>[]
          }
          create: {
            args: Prisma.stockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          createMany: {
            args: Prisma.stockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>[]
          }
          delete: {
            args: Prisma.stockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          update: {
            args: Prisma.stockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          deleteMany: {
            args: Prisma.stockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>[]
          }
          upsert: {
            args: Prisma.stockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stockPayload>
          }
          aggregate: {
            args: Prisma.StockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock>
          }
          groupBy: {
            args: Prisma.stockGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockGroupByOutputType>[]
          }
          count: {
            args: Prisma.stockCountArgs<ExtArgs>
            result: $Utils.Optional<StockCountAggregateOutputType> | number
          }
        }
      }
      supplier: {
        payload: Prisma.$supplierPayload<ExtArgs>
        fields: Prisma.supplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.supplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.supplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          findFirst: {
            args: Prisma.supplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.supplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          findMany: {
            args: Prisma.supplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>[]
          }
          create: {
            args: Prisma.supplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          createMany: {
            args: Prisma.supplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.supplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>[]
          }
          delete: {
            args: Prisma.supplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          update: {
            args: Prisma.supplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          deleteMany: {
            args: Prisma.supplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.supplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.supplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>[]
          }
          upsert: {
            args: Prisma.supplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.supplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.supplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    images?: imagesOmit
    lab?: labOmit
    stock?: stockOmit
    supplier?: supplierOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ImagesCountOutputType
   */

  export type ImagesCountOutputType = {
    stock: number
  }

  export type ImagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock?: boolean | ImagesCountOutputTypeCountStockArgs
  }

  // Custom InputTypes
  /**
   * ImagesCountOutputType without action
   */
  export type ImagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagesCountOutputType
     */
    select?: ImagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImagesCountOutputType without action
   */
  export type ImagesCountOutputTypeCountStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stockWhereInput
  }


  /**
   * Count Type LabCountOutputType
   */

  export type LabCountOutputType = {
    stock_stock_labTolab: number
    supplier_supplier_labTolab: number
    users_users_labTolab: number
  }

  export type LabCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock_stock_labTolab?: boolean | LabCountOutputTypeCountStock_stock_labTolabArgs
    supplier_supplier_labTolab?: boolean | LabCountOutputTypeCountSupplier_supplier_labTolabArgs
    users_users_labTolab?: boolean | LabCountOutputTypeCountUsers_users_labTolabArgs
  }

  // Custom InputTypes
  /**
   * LabCountOutputType without action
   */
  export type LabCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabCountOutputType
     */
    select?: LabCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LabCountOutputType without action
   */
  export type LabCountOutputTypeCountStock_stock_labTolabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stockWhereInput
  }

  /**
   * LabCountOutputType without action
   */
  export type LabCountOutputTypeCountSupplier_supplier_labTolabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: supplierWhereInput
  }

  /**
   * LabCountOutputType without action
   */
  export type LabCountOutputTypeCountUsers_users_labTolabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model images
   */

  export type AggregateImages = {
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  export type ImagesAvgAggregateOutputType = {
    order: number | null
  }

  export type ImagesSumAggregateOutputType = {
    order: number | null
  }

  export type ImagesMinAggregateOutputType = {
    id: string | null
    key: string | null
    url: string | null
    type: $Enums.type | null
    order: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ImagesMaxAggregateOutputType = {
    id: string | null
    key: string | null
    url: string | null
    type: $Enums.type | null
    order: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ImagesCountAggregateOutputType = {
    id: number
    key: number
    url: number
    type: number
    order: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ImagesAvgAggregateInputType = {
    order?: true
  }

  export type ImagesSumAggregateInputType = {
    order?: true
  }

  export type ImagesMinAggregateInputType = {
    id?: true
    key?: true
    url?: true
    type?: true
    order?: true
    created_at?: true
    updated_at?: true
  }

  export type ImagesMaxAggregateInputType = {
    id?: true
    key?: true
    url?: true
    type?: true
    order?: true
    created_at?: true
    updated_at?: true
  }

  export type ImagesCountAggregateInputType = {
    id?: true
    key?: true
    url?: true
    type?: true
    order?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which images to aggregate.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned images
    **/
    _count?: true | ImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesMaxAggregateInputType
  }

  export type GetImagesAggregateType<T extends ImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages[P]>
      : GetScalarType<T[P], AggregateImages[P]>
  }




  export type imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imagesWhereInput
    orderBy?: imagesOrderByWithAggregationInput | imagesOrderByWithAggregationInput[]
    by: ImagesScalarFieldEnum[] | ImagesScalarFieldEnum
    having?: imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesCountAggregateInputType | true
    _avg?: ImagesAvgAggregateInputType
    _sum?: ImagesSumAggregateInputType
    _min?: ImagesMinAggregateInputType
    _max?: ImagesMaxAggregateInputType
  }

  export type ImagesGroupByOutputType = {
    id: string
    key: string | null
    url: string
    type: $Enums.type | null
    order: number | null
    created_at: Date
    updated_at: Date | null
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  type GetImagesGroupByPayload<T extends imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesGroupByOutputType[P]>
        }
      >
    >


  export type imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    url?: boolean
    type?: boolean
    order?: boolean
    created_at?: boolean
    updated_at?: boolean
    stock?: boolean | images$stockArgs<ExtArgs>
    _count?: boolean | ImagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type imagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    url?: boolean
    type?: boolean
    order?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["images"]>

  export type imagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    url?: boolean
    type?: boolean
    order?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["images"]>

  export type imagesSelectScalar = {
    id?: boolean
    key?: boolean
    url?: boolean
    type?: boolean
    order?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "url" | "type" | "order" | "created_at" | "updated_at", ExtArgs["result"]["images"]>
  export type imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock?: boolean | images$stockArgs<ExtArgs>
    _count?: boolean | ImagesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type imagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type imagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "images"
    objects: {
      stock: Prisma.$stockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string | null
      url: string
      type: $Enums.type | null
      order: number | null
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["images"]>
    composites: {}
  }

  type imagesGetPayload<S extends boolean | null | undefined | imagesDefaultArgs> = $Result.GetResult<Prisma.$imagesPayload, S>

  type imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagesCountAggregateInputType | true
    }

  export interface imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['images'], meta: { name: 'images' } }
    /**
     * Find zero or one Images that matches the filter.
     * @param {imagesFindUniqueArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends imagesFindUniqueArgs>(args: SelectSubset<T, imagesFindUniqueArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {imagesFindUniqueOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesFindFirstArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends imagesFindFirstArgs>(args?: SelectSubset<T, imagesFindFirstArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesFindFirstOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.images.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagesWithIdOnly = await prisma.images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends imagesFindManyArgs>(args?: SelectSubset<T, imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Images.
     * @param {imagesCreateArgs} args - Arguments to create a Images.
     * @example
     * // Create one Images
     * const Images = await prisma.images.create({
     *   data: {
     *     // ... data to create a Images
     *   }
     * })
     * 
     */
    create<T extends imagesCreateArgs>(args: SelectSubset<T, imagesCreateArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Images.
     * @param {imagesCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends imagesCreateManyArgs>(args?: SelectSubset<T, imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {imagesCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imagesWithIdOnly = await prisma.images.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends imagesCreateManyAndReturnArgs>(args?: SelectSubset<T, imagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Images.
     * @param {imagesDeleteArgs} args - Arguments to delete one Images.
     * @example
     * // Delete one Images
     * const Images = await prisma.images.delete({
     *   where: {
     *     // ... filter to delete one Images
     *   }
     * })
     * 
     */
    delete<T extends imagesDeleteArgs>(args: SelectSubset<T, imagesDeleteArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Images.
     * @param {imagesUpdateArgs} args - Arguments to update one Images.
     * @example
     * // Update one Images
     * const images = await prisma.images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends imagesUpdateArgs>(args: SelectSubset<T, imagesUpdateArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Images.
     * @param {imagesDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends imagesDeleteManyArgs>(args?: SelectSubset<T, imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends imagesUpdateManyArgs>(args: SelectSubset<T, imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {imagesUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imagesWithIdOnly = await prisma.images.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends imagesUpdateManyAndReturnArgs>(args: SelectSubset<T, imagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Images.
     * @param {imagesUpsertArgs} args - Arguments to update or create a Images.
     * @example
     * // Update or create a Images
     * const images = await prisma.images.upsert({
     *   create: {
     *     // ... data to create a Images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images we want to update
     *   }
     * })
     */
    upsert<T extends imagesUpsertArgs>(args: SelectSubset<T, imagesUpsertArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.images.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends imagesCountArgs>(
      args?: Subset<T, imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagesAggregateArgs>(args: Subset<T, ImagesAggregateArgs>): Prisma.PrismaPromise<GetImagesAggregateType<T>>

    /**
     * Group by Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: imagesGroupByArgs['orderBy'] }
        : { orderBy?: imagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the images model
   */
  readonly fields: imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stock<T extends images$stockArgs<ExtArgs> = {}>(args?: Subset<T, images$stockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the images model
   */ 
  interface imagesFieldRefs {
    readonly id: FieldRef<"images", 'String'>
    readonly key: FieldRef<"images", 'String'>
    readonly url: FieldRef<"images", 'String'>
    readonly type: FieldRef<"images", 'type'>
    readonly order: FieldRef<"images", 'Int'>
    readonly created_at: FieldRef<"images", 'DateTime'>
    readonly updated_at: FieldRef<"images", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * images findUnique
   */
  export type imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images findUniqueOrThrow
   */
  export type imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images findFirst
   */
  export type imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * images findFirstOrThrow
   */
  export type imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * images findMany
   */
  export type imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing images.
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * images create
   */
  export type imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a images.
     */
    data: XOR<imagesCreateInput, imagesUncheckedCreateInput>
  }

  /**
   * images createMany
   */
  export type imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many images.
     */
    data: imagesCreateManyInput | imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * images createManyAndReturn
   */
  export type imagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * The data used to create many images.
     */
    data: imagesCreateManyInput | imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * images update
   */
  export type imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a images.
     */
    data: XOR<imagesUpdateInput, imagesUncheckedUpdateInput>
    /**
     * Choose, which images to update.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images updateMany
   */
  export type imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update images.
     */
    data: XOR<imagesUpdateManyMutationInput, imagesUncheckedUpdateManyInput>
    /**
     * Filter which images to update
     */
    where?: imagesWhereInput
    /**
     * Limit how many images to update.
     */
    limit?: number
  }

  /**
   * images updateManyAndReturn
   */
  export type imagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * The data used to update images.
     */
    data: XOR<imagesUpdateManyMutationInput, imagesUncheckedUpdateManyInput>
    /**
     * Filter which images to update
     */
    where?: imagesWhereInput
    /**
     * Limit how many images to update.
     */
    limit?: number
  }

  /**
   * images upsert
   */
  export type imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the images to update in case it exists.
     */
    where: imagesWhereUniqueInput
    /**
     * In case the images found by the `where` argument doesn't exist, create a new images with this data.
     */
    create: XOR<imagesCreateInput, imagesUncheckedCreateInput>
    /**
     * In case the images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<imagesUpdateInput, imagesUncheckedUpdateInput>
  }

  /**
   * images delete
   */
  export type imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter which images to delete.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images deleteMany
   */
  export type imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which images to delete
     */
    where?: imagesWhereInput
    /**
     * Limit how many images to delete.
     */
    limit?: number
  }

  /**
   * images.stock
   */
  export type images$stockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    where?: stockWhereInput
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    cursor?: stockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * images without action
   */
  export type imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
  }


  /**
   * Model lab
   */

  export type AggregateLab = {
    _count: LabCountAggregateOutputType | null
    _avg: LabAvgAggregateOutputType | null
    _sum: LabSumAggregateOutputType | null
    _min: LabMinAggregateOutputType | null
    _max: LabMaxAggregateOutputType | null
  }

  export type LabAvgAggregateOutputType = {
    id: number | null
  }

  export type LabSumAggregateOutputType = {
    id: number | null
  }

  export type LabMinAggregateOutputType = {
    id: number | null
    name: string | null
    professor: string | null
    major: string | null
    school_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LabMaxAggregateOutputType = {
    id: number | null
    name: string | null
    professor: string | null
    major: string | null
    school_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LabCountAggregateOutputType = {
    id: number
    name: number
    professor: number
    major: number
    school_name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LabAvgAggregateInputType = {
    id?: true
  }

  export type LabSumAggregateInputType = {
    id?: true
  }

  export type LabMinAggregateInputType = {
    id?: true
    name?: true
    professor?: true
    major?: true
    school_name?: true
    created_at?: true
    updated_at?: true
  }

  export type LabMaxAggregateInputType = {
    id?: true
    name?: true
    professor?: true
    major?: true
    school_name?: true
    created_at?: true
    updated_at?: true
  }

  export type LabCountAggregateInputType = {
    id?: true
    name?: true
    professor?: true
    major?: true
    school_name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LabAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lab to aggregate.
     */
    where?: labWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of labs to fetch.
     */
    orderBy?: labOrderByWithRelationInput | labOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: labWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` labs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` labs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned labs
    **/
    _count?: true | LabCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LabAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LabSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabMaxAggregateInputType
  }

  export type GetLabAggregateType<T extends LabAggregateArgs> = {
        [P in keyof T & keyof AggregateLab]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLab[P]>
      : GetScalarType<T[P], AggregateLab[P]>
  }




  export type labGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: labWhereInput
    orderBy?: labOrderByWithAggregationInput | labOrderByWithAggregationInput[]
    by: LabScalarFieldEnum[] | LabScalarFieldEnum
    having?: labScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabCountAggregateInputType | true
    _avg?: LabAvgAggregateInputType
    _sum?: LabSumAggregateInputType
    _min?: LabMinAggregateInputType
    _max?: LabMaxAggregateInputType
  }

  export type LabGroupByOutputType = {
    id: number
    name: string | null
    professor: string | null
    major: string | null
    school_name: string | null
    created_at: Date
    updated_at: Date | null
    _count: LabCountAggregateOutputType | null
    _avg: LabAvgAggregateOutputType | null
    _sum: LabSumAggregateOutputType | null
    _min: LabMinAggregateOutputType | null
    _max: LabMaxAggregateOutputType | null
  }

  type GetLabGroupByPayload<T extends labGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabGroupByOutputType[P]>
            : GetScalarType<T[P], LabGroupByOutputType[P]>
        }
      >
    >


  export type labSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    professor?: boolean
    major?: boolean
    school_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    stock_stock_labTolab?: boolean | lab$stock_stock_labTolabArgs<ExtArgs>
    supplier_supplier_labTolab?: boolean | lab$supplier_supplier_labTolabArgs<ExtArgs>
    users_users_labTolab?: boolean | lab$users_users_labTolabArgs<ExtArgs>
    _count?: boolean | LabCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lab"]>

  export type labSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    professor?: boolean
    major?: boolean
    school_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["lab"]>

  export type labSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    professor?: boolean
    major?: boolean
    school_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["lab"]>

  export type labSelectScalar = {
    id?: boolean
    name?: boolean
    professor?: boolean
    major?: boolean
    school_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type labOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "professor" | "major" | "school_name" | "created_at" | "updated_at", ExtArgs["result"]["lab"]>
  export type labInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock_stock_labTolab?: boolean | lab$stock_stock_labTolabArgs<ExtArgs>
    supplier_supplier_labTolab?: boolean | lab$supplier_supplier_labTolabArgs<ExtArgs>
    users_users_labTolab?: boolean | lab$users_users_labTolabArgs<ExtArgs>
    _count?: boolean | LabCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type labIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type labIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $labPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lab"
    objects: {
      stock_stock_labTolab: Prisma.$stockPayload<ExtArgs>[]
      supplier_supplier_labTolab: Prisma.$supplierPayload<ExtArgs>[]
      users_users_labTolab: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      professor: string | null
      major: string | null
      school_name: string | null
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["lab"]>
    composites: {}
  }

  type labGetPayload<S extends boolean | null | undefined | labDefaultArgs> = $Result.GetResult<Prisma.$labPayload, S>

  type labCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<labFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabCountAggregateInputType | true
    }

  export interface labDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lab'], meta: { name: 'lab' } }
    /**
     * Find zero or one Lab that matches the filter.
     * @param {labFindUniqueArgs} args - Arguments to find a Lab
     * @example
     * // Get one Lab
     * const lab = await prisma.lab.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends labFindUniqueArgs>(args: SelectSubset<T, labFindUniqueArgs<ExtArgs>>): Prisma__labClient<$Result.GetResult<Prisma.$labPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Lab that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {labFindUniqueOrThrowArgs} args - Arguments to find a Lab
     * @example
     * // Get one Lab
     * const lab = await prisma.lab.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends labFindUniqueOrThrowArgs>(args: SelectSubset<T, labFindUniqueOrThrowArgs<ExtArgs>>): Prisma__labClient<$Result.GetResult<Prisma.$labPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Lab that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {labFindFirstArgs} args - Arguments to find a Lab
     * @example
     * // Get one Lab
     * const lab = await prisma.lab.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends labFindFirstArgs>(args?: SelectSubset<T, labFindFirstArgs<ExtArgs>>): Prisma__labClient<$Result.GetResult<Prisma.$labPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Lab that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {labFindFirstOrThrowArgs} args - Arguments to find a Lab
     * @example
     * // Get one Lab
     * const lab = await prisma.lab.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends labFindFirstOrThrowArgs>(args?: SelectSubset<T, labFindFirstOrThrowArgs<ExtArgs>>): Prisma__labClient<$Result.GetResult<Prisma.$labPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Labs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {labFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Labs
     * const labs = await prisma.lab.findMany()
     * 
     * // Get first 10 Labs
     * const labs = await prisma.lab.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labWithIdOnly = await prisma.lab.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends labFindManyArgs>(args?: SelectSubset<T, labFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$labPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Lab.
     * @param {labCreateArgs} args - Arguments to create a Lab.
     * @example
     * // Create one Lab
     * const Lab = await prisma.lab.create({
     *   data: {
     *     // ... data to create a Lab
     *   }
     * })
     * 
     */
    create<T extends labCreateArgs>(args: SelectSubset<T, labCreateArgs<ExtArgs>>): Prisma__labClient<$Result.GetResult<Prisma.$labPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Labs.
     * @param {labCreateManyArgs} args - Arguments to create many Labs.
     * @example
     * // Create many Labs
     * const lab = await prisma.lab.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends labCreateManyArgs>(args?: SelectSubset<T, labCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Labs and returns the data saved in the database.
     * @param {labCreateManyAndReturnArgs} args - Arguments to create many Labs.
     * @example
     * // Create many Labs
     * const lab = await prisma.lab.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Labs and only return the `id`
     * const labWithIdOnly = await prisma.lab.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends labCreateManyAndReturnArgs>(args?: SelectSubset<T, labCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$labPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Lab.
     * @param {labDeleteArgs} args - Arguments to delete one Lab.
     * @example
     * // Delete one Lab
     * const Lab = await prisma.lab.delete({
     *   where: {
     *     // ... filter to delete one Lab
     *   }
     * })
     * 
     */
    delete<T extends labDeleteArgs>(args: SelectSubset<T, labDeleteArgs<ExtArgs>>): Prisma__labClient<$Result.GetResult<Prisma.$labPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Lab.
     * @param {labUpdateArgs} args - Arguments to update one Lab.
     * @example
     * // Update one Lab
     * const lab = await prisma.lab.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends labUpdateArgs>(args: SelectSubset<T, labUpdateArgs<ExtArgs>>): Prisma__labClient<$Result.GetResult<Prisma.$labPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Labs.
     * @param {labDeleteManyArgs} args - Arguments to filter Labs to delete.
     * @example
     * // Delete a few Labs
     * const { count } = await prisma.lab.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends labDeleteManyArgs>(args?: SelectSubset<T, labDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Labs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {labUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Labs
     * const lab = await prisma.lab.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends labUpdateManyArgs>(args: SelectSubset<T, labUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Labs and returns the data updated in the database.
     * @param {labUpdateManyAndReturnArgs} args - Arguments to update many Labs.
     * @example
     * // Update many Labs
     * const lab = await prisma.lab.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Labs and only return the `id`
     * const labWithIdOnly = await prisma.lab.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends labUpdateManyAndReturnArgs>(args: SelectSubset<T, labUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$labPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Lab.
     * @param {labUpsertArgs} args - Arguments to update or create a Lab.
     * @example
     * // Update or create a Lab
     * const lab = await prisma.lab.upsert({
     *   create: {
     *     // ... data to create a Lab
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lab we want to update
     *   }
     * })
     */
    upsert<T extends labUpsertArgs>(args: SelectSubset<T, labUpsertArgs<ExtArgs>>): Prisma__labClient<$Result.GetResult<Prisma.$labPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Labs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {labCountArgs} args - Arguments to filter Labs to count.
     * @example
     * // Count the number of Labs
     * const count = await prisma.lab.count({
     *   where: {
     *     // ... the filter for the Labs we want to count
     *   }
     * })
    **/
    count<T extends labCountArgs>(
      args?: Subset<T, labCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LabAggregateArgs>(args: Subset<T, LabAggregateArgs>): Prisma.PrismaPromise<GetLabAggregateType<T>>

    /**
     * Group by Lab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {labGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends labGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: labGroupByArgs['orderBy'] }
        : { orderBy?: labGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, labGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lab model
   */
  readonly fields: labFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lab.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__labClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stock_stock_labTolab<T extends lab$stock_stock_labTolabArgs<ExtArgs> = {}>(args?: Subset<T, lab$stock_stock_labTolabArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    supplier_supplier_labTolab<T extends lab$supplier_supplier_labTolabArgs<ExtArgs> = {}>(args?: Subset<T, lab$supplier_supplier_labTolabArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    users_users_labTolab<T extends lab$users_users_labTolabArgs<ExtArgs> = {}>(args?: Subset<T, lab$users_users_labTolabArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the lab model
   */ 
  interface labFieldRefs {
    readonly id: FieldRef<"lab", 'Int'>
    readonly name: FieldRef<"lab", 'String'>
    readonly professor: FieldRef<"lab", 'String'>
    readonly major: FieldRef<"lab", 'String'>
    readonly school_name: FieldRef<"lab", 'String'>
    readonly created_at: FieldRef<"lab", 'DateTime'>
    readonly updated_at: FieldRef<"lab", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * lab findUnique
   */
  export type labFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab
     */
    select?: labSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lab
     */
    omit?: labOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labInclude<ExtArgs> | null
    /**
     * Filter, which lab to fetch.
     */
    where: labWhereUniqueInput
  }

  /**
   * lab findUniqueOrThrow
   */
  export type labFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab
     */
    select?: labSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lab
     */
    omit?: labOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labInclude<ExtArgs> | null
    /**
     * Filter, which lab to fetch.
     */
    where: labWhereUniqueInput
  }

  /**
   * lab findFirst
   */
  export type labFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab
     */
    select?: labSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lab
     */
    omit?: labOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labInclude<ExtArgs> | null
    /**
     * Filter, which lab to fetch.
     */
    where?: labWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of labs to fetch.
     */
    orderBy?: labOrderByWithRelationInput | labOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for labs.
     */
    cursor?: labWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` labs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` labs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of labs.
     */
    distinct?: LabScalarFieldEnum | LabScalarFieldEnum[]
  }

  /**
   * lab findFirstOrThrow
   */
  export type labFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab
     */
    select?: labSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lab
     */
    omit?: labOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labInclude<ExtArgs> | null
    /**
     * Filter, which lab to fetch.
     */
    where?: labWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of labs to fetch.
     */
    orderBy?: labOrderByWithRelationInput | labOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for labs.
     */
    cursor?: labWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` labs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` labs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of labs.
     */
    distinct?: LabScalarFieldEnum | LabScalarFieldEnum[]
  }

  /**
   * lab findMany
   */
  export type labFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab
     */
    select?: labSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lab
     */
    omit?: labOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labInclude<ExtArgs> | null
    /**
     * Filter, which labs to fetch.
     */
    where?: labWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of labs to fetch.
     */
    orderBy?: labOrderByWithRelationInput | labOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing labs.
     */
    cursor?: labWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` labs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` labs.
     */
    skip?: number
    distinct?: LabScalarFieldEnum | LabScalarFieldEnum[]
  }

  /**
   * lab create
   */
  export type labCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab
     */
    select?: labSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lab
     */
    omit?: labOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labInclude<ExtArgs> | null
    /**
     * The data needed to create a lab.
     */
    data?: XOR<labCreateInput, labUncheckedCreateInput>
  }

  /**
   * lab createMany
   */
  export type labCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many labs.
     */
    data: labCreateManyInput | labCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lab createManyAndReturn
   */
  export type labCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab
     */
    select?: labSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lab
     */
    omit?: labOmit<ExtArgs> | null
    /**
     * The data used to create many labs.
     */
    data: labCreateManyInput | labCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lab update
   */
  export type labUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab
     */
    select?: labSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lab
     */
    omit?: labOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labInclude<ExtArgs> | null
    /**
     * The data needed to update a lab.
     */
    data: XOR<labUpdateInput, labUncheckedUpdateInput>
    /**
     * Choose, which lab to update.
     */
    where: labWhereUniqueInput
  }

  /**
   * lab updateMany
   */
  export type labUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update labs.
     */
    data: XOR<labUpdateManyMutationInput, labUncheckedUpdateManyInput>
    /**
     * Filter which labs to update
     */
    where?: labWhereInput
    /**
     * Limit how many labs to update.
     */
    limit?: number
  }

  /**
   * lab updateManyAndReturn
   */
  export type labUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab
     */
    select?: labSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lab
     */
    omit?: labOmit<ExtArgs> | null
    /**
     * The data used to update labs.
     */
    data: XOR<labUpdateManyMutationInput, labUncheckedUpdateManyInput>
    /**
     * Filter which labs to update
     */
    where?: labWhereInput
    /**
     * Limit how many labs to update.
     */
    limit?: number
  }

  /**
   * lab upsert
   */
  export type labUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab
     */
    select?: labSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lab
     */
    omit?: labOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labInclude<ExtArgs> | null
    /**
     * The filter to search for the lab to update in case it exists.
     */
    where: labWhereUniqueInput
    /**
     * In case the lab found by the `where` argument doesn't exist, create a new lab with this data.
     */
    create: XOR<labCreateInput, labUncheckedCreateInput>
    /**
     * In case the lab was found with the provided `where` argument, update it with this data.
     */
    update: XOR<labUpdateInput, labUncheckedUpdateInput>
  }

  /**
   * lab delete
   */
  export type labDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab
     */
    select?: labSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lab
     */
    omit?: labOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labInclude<ExtArgs> | null
    /**
     * Filter which lab to delete.
     */
    where: labWhereUniqueInput
  }

  /**
   * lab deleteMany
   */
  export type labDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which labs to delete
     */
    where?: labWhereInput
    /**
     * Limit how many labs to delete.
     */
    limit?: number
  }

  /**
   * lab.stock_stock_labTolab
   */
  export type lab$stock_stock_labTolabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    where?: stockWhereInput
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    cursor?: stockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * lab.supplier_supplier_labTolab
   */
  export type lab$supplier_supplier_labTolabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    where?: supplierWhereInput
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    cursor?: supplierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * lab.users_users_labTolab
   */
  export type lab$users_users_labTolabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * lab without action
   */
  export type labDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab
     */
    select?: labSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lab
     */
    omit?: labOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labInclude<ExtArgs> | null
  }


  /**
   * Model stock
   */

  export type AggregateStock = {
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  export type StockAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    minimum_quantity: number | null
    maximum_quantity: number | null
    lab: number | null
  }

  export type StockSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    minimum_quantity: number | null
    maximum_quantity: number | null
    lab: number | null
  }

  export type StockMinAggregateOutputType = {
    id: number | null
    name: string | null
    importer_company: string | null
    order_type: string | null
    vendor: string | null
    catalog_id: string | null
    quantity: number | null
    image: string | null
    minimum_quantity: number | null
    maximum_quantity: number | null
    description: string | null
    lab: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StockMaxAggregateOutputType = {
    id: number | null
    name: string | null
    importer_company: string | null
    order_type: string | null
    vendor: string | null
    catalog_id: string | null
    quantity: number | null
    image: string | null
    minimum_quantity: number | null
    maximum_quantity: number | null
    description: string | null
    lab: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StockCountAggregateOutputType = {
    id: number
    name: number
    importer_company: number
    order_type: number
    vendor: number
    catalog_id: number
    quantity: number
    image: number
    minimum_quantity: number
    maximum_quantity: number
    description: number
    lab: number
    extra: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StockAvgAggregateInputType = {
    id?: true
    quantity?: true
    minimum_quantity?: true
    maximum_quantity?: true
    lab?: true
  }

  export type StockSumAggregateInputType = {
    id?: true
    quantity?: true
    minimum_quantity?: true
    maximum_quantity?: true
    lab?: true
  }

  export type StockMinAggregateInputType = {
    id?: true
    name?: true
    importer_company?: true
    order_type?: true
    vendor?: true
    catalog_id?: true
    quantity?: true
    image?: true
    minimum_quantity?: true
    maximum_quantity?: true
    description?: true
    lab?: true
    created_at?: true
    updated_at?: true
  }

  export type StockMaxAggregateInputType = {
    id?: true
    name?: true
    importer_company?: true
    order_type?: true
    vendor?: true
    catalog_id?: true
    quantity?: true
    image?: true
    minimum_quantity?: true
    maximum_quantity?: true
    description?: true
    lab?: true
    created_at?: true
    updated_at?: true
  }

  export type StockCountAggregateInputType = {
    id?: true
    name?: true
    importer_company?: true
    order_type?: true
    vendor?: true
    catalog_id?: true
    quantity?: true
    image?: true
    minimum_quantity?: true
    maximum_quantity?: true
    description?: true
    lab?: true
    extra?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stock to aggregate.
     */
    where?: stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stocks
    **/
    _count?: true | StockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMaxAggregateInputType
  }

  export type GetStockAggregateType<T extends StockAggregateArgs> = {
        [P in keyof T & keyof AggregateStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock[P]>
      : GetScalarType<T[P], AggregateStock[P]>
  }




  export type stockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stockWhereInput
    orderBy?: stockOrderByWithAggregationInput | stockOrderByWithAggregationInput[]
    by: StockScalarFieldEnum[] | StockScalarFieldEnum
    having?: stockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockCountAggregateInputType | true
    _avg?: StockAvgAggregateInputType
    _sum?: StockSumAggregateInputType
    _min?: StockMinAggregateInputType
    _max?: StockMaxAggregateInputType
  }

  export type StockGroupByOutputType = {
    id: number
    name: string | null
    importer_company: string | null
    order_type: string | null
    vendor: string | null
    catalog_id: string | null
    quantity: number | null
    image: string | null
    minimum_quantity: number | null
    maximum_quantity: number | null
    description: string | null
    lab: number | null
    extra: JsonValue | null
    created_at: Date
    updated_at: Date | null
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  type GetStockGroupByPayload<T extends stockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockGroupByOutputType[P]>
            : GetScalarType<T[P], StockGroupByOutputType[P]>
        }
      >
    >


  export type stockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    importer_company?: boolean
    order_type?: boolean
    vendor?: boolean
    catalog_id?: boolean
    quantity?: boolean
    image?: boolean
    minimum_quantity?: boolean
    maximum_quantity?: boolean
    description?: boolean
    lab?: boolean
    extra?: boolean
    created_at?: boolean
    updated_at?: boolean
    images?: boolean | stock$imagesArgs<ExtArgs>
    lab_stock_labTolab?: boolean | stock$lab_stock_labTolabArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type stockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    importer_company?: boolean
    order_type?: boolean
    vendor?: boolean
    catalog_id?: boolean
    quantity?: boolean
    image?: boolean
    minimum_quantity?: boolean
    maximum_quantity?: boolean
    description?: boolean
    lab?: boolean
    extra?: boolean
    created_at?: boolean
    updated_at?: boolean
    images?: boolean | stock$imagesArgs<ExtArgs>
    lab_stock_labTolab?: boolean | stock$lab_stock_labTolabArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type stockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    importer_company?: boolean
    order_type?: boolean
    vendor?: boolean
    catalog_id?: boolean
    quantity?: boolean
    image?: boolean
    minimum_quantity?: boolean
    maximum_quantity?: boolean
    description?: boolean
    lab?: boolean
    extra?: boolean
    created_at?: boolean
    updated_at?: boolean
    images?: boolean | stock$imagesArgs<ExtArgs>
    lab_stock_labTolab?: boolean | stock$lab_stock_labTolabArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type stockSelectScalar = {
    id?: boolean
    name?: boolean
    importer_company?: boolean
    order_type?: boolean
    vendor?: boolean
    catalog_id?: boolean
    quantity?: boolean
    image?: boolean
    minimum_quantity?: boolean
    maximum_quantity?: boolean
    description?: boolean
    lab?: boolean
    extra?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type stockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "importer_company" | "order_type" | "vendor" | "catalog_id" | "quantity" | "image" | "minimum_quantity" | "maximum_quantity" | "description" | "lab" | "extra" | "created_at" | "updated_at", ExtArgs["result"]["stock"]>
  export type stockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | stock$imagesArgs<ExtArgs>
    lab_stock_labTolab?: boolean | stock$lab_stock_labTolabArgs<ExtArgs>
  }
  export type stockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | stock$imagesArgs<ExtArgs>
    lab_stock_labTolab?: boolean | stock$lab_stock_labTolabArgs<ExtArgs>
  }
  export type stockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | stock$imagesArgs<ExtArgs>
    lab_stock_labTolab?: boolean | stock$lab_stock_labTolabArgs<ExtArgs>
  }

  export type $stockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stock"
    objects: {
      images: Prisma.$imagesPayload<ExtArgs> | null
      lab_stock_labTolab: Prisma.$labPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      importer_company: string | null
      order_type: string | null
      vendor: string | null
      catalog_id: string | null
      quantity: number | null
      image: string | null
      minimum_quantity: number | null
      maximum_quantity: number | null
      description: string | null
      lab: number | null
      extra: Prisma.JsonValue | null
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["stock"]>
    composites: {}
  }

  type stockGetPayload<S extends boolean | null | undefined | stockDefaultArgs> = $Result.GetResult<Prisma.$stockPayload, S>

  type stockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockCountAggregateInputType | true
    }

  export interface stockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stock'], meta: { name: 'stock' } }
    /**
     * Find zero or one Stock that matches the filter.
     * @param {stockFindUniqueArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stockFindUniqueArgs>(args: SelectSubset<T, stockFindUniqueArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Stock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stockFindUniqueOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stockFindUniqueOrThrowArgs>(args: SelectSubset<T, stockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockFindFirstArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stockFindFirstArgs>(args?: SelectSubset<T, stockFindFirstArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockFindFirstOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stockFindFirstOrThrowArgs>(args?: SelectSubset<T, stockFindFirstOrThrowArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stock.findMany()
     * 
     * // Get first 10 Stocks
     * const stocks = await prisma.stock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockWithIdOnly = await prisma.stock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stockFindManyArgs>(args?: SelectSubset<T, stockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Stock.
     * @param {stockCreateArgs} args - Arguments to create a Stock.
     * @example
     * // Create one Stock
     * const Stock = await prisma.stock.create({
     *   data: {
     *     // ... data to create a Stock
     *   }
     * })
     * 
     */
    create<T extends stockCreateArgs>(args: SelectSubset<T, stockCreateArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Stocks.
     * @param {stockCreateManyArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stockCreateManyArgs>(args?: SelectSubset<T, stockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stocks and returns the data saved in the database.
     * @param {stockCreateManyAndReturnArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stocks and only return the `id`
     * const stockWithIdOnly = await prisma.stock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stockCreateManyAndReturnArgs>(args?: SelectSubset<T, stockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Stock.
     * @param {stockDeleteArgs} args - Arguments to delete one Stock.
     * @example
     * // Delete one Stock
     * const Stock = await prisma.stock.delete({
     *   where: {
     *     // ... filter to delete one Stock
     *   }
     * })
     * 
     */
    delete<T extends stockDeleteArgs>(args: SelectSubset<T, stockDeleteArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Stock.
     * @param {stockUpdateArgs} args - Arguments to update one Stock.
     * @example
     * // Update one Stock
     * const stock = await prisma.stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stockUpdateArgs>(args: SelectSubset<T, stockUpdateArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Stocks.
     * @param {stockDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stockDeleteManyArgs>(args?: SelectSubset<T, stockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stockUpdateManyArgs>(args: SelectSubset<T, stockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks and returns the data updated in the database.
     * @param {stockUpdateManyAndReturnArgs} args - Arguments to update many Stocks.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stocks and only return the `id`
     * const stockWithIdOnly = await prisma.stock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends stockUpdateManyAndReturnArgs>(args: SelectSubset<T, stockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Stock.
     * @param {stockUpsertArgs} args - Arguments to update or create a Stock.
     * @example
     * // Update or create a Stock
     * const stock = await prisma.stock.upsert({
     *   create: {
     *     // ... data to create a Stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock we want to update
     *   }
     * })
     */
    upsert<T extends stockUpsertArgs>(args: SelectSubset<T, stockUpsertArgs<ExtArgs>>): Prisma__stockClient<$Result.GetResult<Prisma.$stockPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stock.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
    **/
    count<T extends stockCountArgs>(
      args?: Subset<T, stockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockAggregateArgs>(args: Subset<T, StockAggregateArgs>): Prisma.PrismaPromise<GetStockAggregateType<T>>

    /**
     * Group by Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stockGroupByArgs['orderBy'] }
        : { orderBy?: stockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stock model
   */
  readonly fields: stockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends stock$imagesArgs<ExtArgs> = {}>(args?: Subset<T, stock$imagesArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    lab_stock_labTolab<T extends stock$lab_stock_labTolabArgs<ExtArgs> = {}>(args?: Subset<T, stock$lab_stock_labTolabArgs<ExtArgs>>): Prisma__labClient<$Result.GetResult<Prisma.$labPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stock model
   */ 
  interface stockFieldRefs {
    readonly id: FieldRef<"stock", 'Int'>
    readonly name: FieldRef<"stock", 'String'>
    readonly importer_company: FieldRef<"stock", 'String'>
    readonly order_type: FieldRef<"stock", 'String'>
    readonly vendor: FieldRef<"stock", 'String'>
    readonly catalog_id: FieldRef<"stock", 'String'>
    readonly quantity: FieldRef<"stock", 'Int'>
    readonly image: FieldRef<"stock", 'String'>
    readonly minimum_quantity: FieldRef<"stock", 'Int'>
    readonly maximum_quantity: FieldRef<"stock", 'Int'>
    readonly description: FieldRef<"stock", 'String'>
    readonly lab: FieldRef<"stock", 'Int'>
    readonly extra: FieldRef<"stock", 'Json'>
    readonly created_at: FieldRef<"stock", 'DateTime'>
    readonly updated_at: FieldRef<"stock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * stock findUnique
   */
  export type stockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter, which stock to fetch.
     */
    where: stockWhereUniqueInput
  }

  /**
   * stock findUniqueOrThrow
   */
  export type stockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter, which stock to fetch.
     */
    where: stockWhereUniqueInput
  }

  /**
   * stock findFirst
   */
  export type stockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter, which stock to fetch.
     */
    where?: stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stocks.
     */
    cursor?: stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * stock findFirstOrThrow
   */
  export type stockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter, which stock to fetch.
     */
    where?: stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stocks.
     */
    cursor?: stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * stock findMany
   */
  export type stockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter, which stocks to fetch.
     */
    where?: stockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stockOrderByWithRelationInput | stockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stocks.
     */
    cursor?: stockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * stock create
   */
  export type stockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * The data needed to create a stock.
     */
    data?: XOR<stockCreateInput, stockUncheckedCreateInput>
  }

  /**
   * stock createMany
   */
  export type stockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stocks.
     */
    data: stockCreateManyInput | stockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stock createManyAndReturn
   */
  export type stockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * The data used to create many stocks.
     */
    data: stockCreateManyInput | stockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * stock update
   */
  export type stockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * The data needed to update a stock.
     */
    data: XOR<stockUpdateInput, stockUncheckedUpdateInput>
    /**
     * Choose, which stock to update.
     */
    where: stockWhereUniqueInput
  }

  /**
   * stock updateMany
   */
  export type stockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stocks.
     */
    data: XOR<stockUpdateManyMutationInput, stockUncheckedUpdateManyInput>
    /**
     * Filter which stocks to update
     */
    where?: stockWhereInput
    /**
     * Limit how many stocks to update.
     */
    limit?: number
  }

  /**
   * stock updateManyAndReturn
   */
  export type stockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * The data used to update stocks.
     */
    data: XOR<stockUpdateManyMutationInput, stockUncheckedUpdateManyInput>
    /**
     * Filter which stocks to update
     */
    where?: stockWhereInput
    /**
     * Limit how many stocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * stock upsert
   */
  export type stockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * The filter to search for the stock to update in case it exists.
     */
    where: stockWhereUniqueInput
    /**
     * In case the stock found by the `where` argument doesn't exist, create a new stock with this data.
     */
    create: XOR<stockCreateInput, stockUncheckedCreateInput>
    /**
     * In case the stock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stockUpdateInput, stockUncheckedUpdateInput>
  }

  /**
   * stock delete
   */
  export type stockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
    /**
     * Filter which stock to delete.
     */
    where: stockWhereUniqueInput
  }

  /**
   * stock deleteMany
   */
  export type stockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stocks to delete
     */
    where?: stockWhereInput
    /**
     * Limit how many stocks to delete.
     */
    limit?: number
  }

  /**
   * stock.images
   */
  export type stock$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the images
     */
    omit?: imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    where?: imagesWhereInput
  }

  /**
   * stock.lab_stock_labTolab
   */
  export type stock$lab_stock_labTolabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab
     */
    select?: labSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lab
     */
    omit?: labOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labInclude<ExtArgs> | null
    where?: labWhereInput
  }

  /**
   * stock without action
   */
  export type stockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock
     */
    select?: stockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock
     */
    omit?: stockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stockInclude<ExtArgs> | null
  }


  /**
   * Model supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    id: number | null
    lab: number | null
  }

  export type SupplierSumAggregateOutputType = {
    id: number | null
    lab: number | null
  }

  export type SupplierMinAggregateOutputType = {
    id: number | null
    vendor: string | null
    description: string | null
    lab: number | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: number | null
    vendor: string | null
    description: string | null
    lab: number | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    vendor: number
    description: number
    lab: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    id?: true
    lab?: true
  }

  export type SupplierSumAggregateInputType = {
    id?: true
    lab?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    vendor?: true
    description?: true
    lab?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    vendor?: true
    description?: true
    lab?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    vendor?: true
    description?: true
    lab?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supplier to aggregate.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type supplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: supplierWhereInput
    orderBy?: supplierOrderByWithAggregationInput | supplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: supplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: number
    vendor: string | null
    description: string | null
    lab: number | null
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends supplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type supplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendor?: boolean
    description?: boolean
    lab?: boolean
    lab_supplier_labTolab?: boolean | supplier$lab_supplier_labTolabArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type supplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendor?: boolean
    description?: boolean
    lab?: boolean
    lab_supplier_labTolab?: boolean | supplier$lab_supplier_labTolabArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type supplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendor?: boolean
    description?: boolean
    lab?: boolean
    lab_supplier_labTolab?: boolean | supplier$lab_supplier_labTolabArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type supplierSelectScalar = {
    id?: boolean
    vendor?: boolean
    description?: boolean
    lab?: boolean
  }

  export type supplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendor" | "description" | "lab", ExtArgs["result"]["supplier"]>
  export type supplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lab_supplier_labTolab?: boolean | supplier$lab_supplier_labTolabArgs<ExtArgs>
  }
  export type supplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lab_supplier_labTolab?: boolean | supplier$lab_supplier_labTolabArgs<ExtArgs>
  }
  export type supplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lab_supplier_labTolab?: boolean | supplier$lab_supplier_labTolabArgs<ExtArgs>
  }

  export type $supplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "supplier"
    objects: {
      lab_supplier_labTolab: Prisma.$labPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vendor: string | null
      description: string | null
      lab: number | null
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type supplierGetPayload<S extends boolean | null | undefined | supplierDefaultArgs> = $Result.GetResult<Prisma.$supplierPayload, S>

  type supplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<supplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface supplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['supplier'], meta: { name: 'supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {supplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends supplierFindUniqueArgs>(args: SelectSubset<T, supplierFindUniqueArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {supplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends supplierFindUniqueOrThrowArgs>(args: SelectSubset<T, supplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends supplierFindFirstArgs>(args?: SelectSubset<T, supplierFindFirstArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends supplierFindFirstOrThrowArgs>(args?: SelectSubset<T, supplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends supplierFindManyArgs>(args?: SelectSubset<T, supplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Supplier.
     * @param {supplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends supplierCreateArgs>(args: SelectSubset<T, supplierCreateArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Suppliers.
     * @param {supplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends supplierCreateManyArgs>(args?: SelectSubset<T, supplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {supplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends supplierCreateManyAndReturnArgs>(args?: SelectSubset<T, supplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Supplier.
     * @param {supplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends supplierDeleteArgs>(args: SelectSubset<T, supplierDeleteArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Supplier.
     * @param {supplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends supplierUpdateArgs>(args: SelectSubset<T, supplierUpdateArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {supplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends supplierDeleteManyArgs>(args?: SelectSubset<T, supplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends supplierUpdateManyArgs>(args: SelectSubset<T, supplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {supplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends supplierUpdateManyAndReturnArgs>(args: SelectSubset<T, supplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Supplier.
     * @param {supplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends supplierUpsertArgs>(args: SelectSubset<T, supplierUpsertArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends supplierCountArgs>(
      args?: Subset<T, supplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends supplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: supplierGroupByArgs['orderBy'] }
        : { orderBy?: supplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, supplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the supplier model
   */
  readonly fields: supplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__supplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lab_supplier_labTolab<T extends supplier$lab_supplier_labTolabArgs<ExtArgs> = {}>(args?: Subset<T, supplier$lab_supplier_labTolabArgs<ExtArgs>>): Prisma__labClient<$Result.GetResult<Prisma.$labPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the supplier model
   */ 
  interface supplierFieldRefs {
    readonly id: FieldRef<"supplier", 'Int'>
    readonly vendor: FieldRef<"supplier", 'String'>
    readonly description: FieldRef<"supplier", 'String'>
    readonly lab: FieldRef<"supplier", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * supplier findUnique
   */
  export type supplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier findUniqueOrThrow
   */
  export type supplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier findFirst
   */
  export type supplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier findFirstOrThrow
   */
  export type supplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier findMany
   */
  export type supplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier create
   */
  export type supplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * The data needed to create a supplier.
     */
    data?: XOR<supplierCreateInput, supplierUncheckedCreateInput>
  }

  /**
   * supplier createMany
   */
  export type supplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many suppliers.
     */
    data: supplierCreateManyInput | supplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * supplier createManyAndReturn
   */
  export type supplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * The data used to create many suppliers.
     */
    data: supplierCreateManyInput | supplierCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * supplier update
   */
  export type supplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * The data needed to update a supplier.
     */
    data: XOR<supplierUpdateInput, supplierUncheckedUpdateInput>
    /**
     * Choose, which supplier to update.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier updateMany
   */
  export type supplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update suppliers.
     */
    data: XOR<supplierUpdateManyMutationInput, supplierUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     */
    where?: supplierWhereInput
    /**
     * Limit how many suppliers to update.
     */
    limit?: number
  }

  /**
   * supplier updateManyAndReturn
   */
  export type supplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * The data used to update suppliers.
     */
    data: XOR<supplierUpdateManyMutationInput, supplierUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     */
    where?: supplierWhereInput
    /**
     * Limit how many suppliers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * supplier upsert
   */
  export type supplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * The filter to search for the supplier to update in case it exists.
     */
    where: supplierWhereUniqueInput
    /**
     * In case the supplier found by the `where` argument doesn't exist, create a new supplier with this data.
     */
    create: XOR<supplierCreateInput, supplierUncheckedCreateInput>
    /**
     * In case the supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<supplierUpdateInput, supplierUncheckedUpdateInput>
  }

  /**
   * supplier delete
   */
  export type supplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter which supplier to delete.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier deleteMany
   */
  export type supplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suppliers to delete
     */
    where?: supplierWhereInput
    /**
     * Limit how many suppliers to delete.
     */
    limit?: number
  }

  /**
   * supplier.lab_supplier_labTolab
   */
  export type supplier$lab_supplier_labTolabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab
     */
    select?: labSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lab
     */
    omit?: labOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labInclude<ExtArgs> | null
    where?: labWhereInput
  }

  /**
   * supplier without action
   */
  export type supplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    lab: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    lab: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    student_number: string | null
    password: string | null
    role: $Enums.role | null
    status: $Enums.status | null
    lab: number | null
    last_login_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    student_number: string | null
    password: string | null
    role: $Enums.role | null
    status: $Enums.status | null
    lab: number | null
    last_login_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    student_number: number
    password: number
    role: number
    status: number
    lab: number
    last_login_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    lab?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    lab?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    student_number?: true
    password?: true
    role?: true
    status?: true
    lab?: true
    last_login_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    student_number?: true
    password?: true
    role?: true
    status?: true
    lab?: true
    last_login_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    student_number?: true
    password?: true
    role?: true
    status?: true
    lab?: true
    last_login_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    student_number: string
    password: string | null
    role: $Enums.role | null
    status: $Enums.status | null
    lab: number | null
    last_login_at: Date | null
    created_at: Date
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_number?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    lab?: boolean
    last_login_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    lab_users_labTolab?: boolean | users$lab_users_labTolabArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_number?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    lab?: boolean
    last_login_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    lab_users_labTolab?: boolean | users$lab_users_labTolabArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_number?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    lab?: boolean
    last_login_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    lab_users_labTolab?: boolean | users$lab_users_labTolabArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    student_number?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    lab?: boolean
    last_login_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_number" | "password" | "role" | "status" | "lab" | "last_login_at" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lab_users_labTolab?: boolean | users$lab_users_labTolabArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lab_users_labTolab?: boolean | users$lab_users_labTolabArgs<ExtArgs>
  }
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lab_users_labTolab?: boolean | users$lab_users_labTolabArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      lab_users_labTolab: Prisma.$labPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      student_number: string
      password: string | null
      role: $Enums.role | null
      status: $Enums.status | null
      lab: number | null
      last_login_at: Date | null
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lab_users_labTolab<T extends users$lab_users_labTolabArgs<ExtArgs> = {}>(args?: Subset<T, users$lab_users_labTolabArgs<ExtArgs>>): Prisma__labClient<$Result.GetResult<Prisma.$labPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly student_number: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'role'>
    readonly status: FieldRef<"users", 'status'>
    readonly lab: FieldRef<"users", 'Int'>
    readonly last_login_at: FieldRef<"users", 'DateTime'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.lab_users_labTolab
   */
  export type users$lab_users_labTolabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lab
     */
    select?: labSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lab
     */
    omit?: labOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labInclude<ExtArgs> | null
    where?: labWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ImagesScalarFieldEnum: {
    id: 'id',
    key: 'key',
    url: 'url',
    type: 'type',
    order: 'order',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


  export const LabScalarFieldEnum: {
    id: 'id',
    name: 'name',
    professor: 'professor',
    major: 'major',
    school_name: 'school_name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LabScalarFieldEnum = (typeof LabScalarFieldEnum)[keyof typeof LabScalarFieldEnum]


  export const StockScalarFieldEnum: {
    id: 'id',
    name: 'name',
    importer_company: 'importer_company',
    order_type: 'order_type',
    vendor: 'vendor',
    catalog_id: 'catalog_id',
    quantity: 'quantity',
    image: 'image',
    minimum_quantity: 'minimum_quantity',
    maximum_quantity: 'maximum_quantity',
    description: 'description',
    lab: 'lab',
    extra: 'extra',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type StockScalarFieldEnum = (typeof StockScalarFieldEnum)[keyof typeof StockScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    vendor: 'vendor',
    description: 'description',
    lab: 'lab'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    student_number: 'student_number',
    password: 'password',
    role: 'role',
    status: 'status',
    lab: 'lab',
    last_login_at: 'last_login_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'type'
   */
  export type EnumtypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'type'>
    


  /**
   * Reference to a field of type 'type[]'
   */
  export type ListEnumtypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'type[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'role'
   */
  export type EnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role'>
    


  /**
   * Reference to a field of type 'role[]'
   */
  export type ListEnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role[]'>
    


  /**
   * Reference to a field of type 'status'
   */
  export type EnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status'>
    


  /**
   * Reference to a field of type 'status[]'
   */
  export type ListEnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type imagesWhereInput = {
    AND?: imagesWhereInput | imagesWhereInput[]
    OR?: imagesWhereInput[]
    NOT?: imagesWhereInput | imagesWhereInput[]
    id?: UuidFilter<"images"> | string
    key?: StringNullableFilter<"images"> | string | null
    url?: StringFilter<"images"> | string
    type?: EnumtypeNullableFilter<"images"> | $Enums.type | null
    order?: IntNullableFilter<"images"> | number | null
    created_at?: DateTimeFilter<"images"> | Date | string
    updated_at?: DateTimeNullableFilter<"images"> | Date | string | null
    stock?: StockListRelationFilter
  }

  export type imagesOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrderInput | SortOrder
    url?: SortOrder
    type?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    stock?: stockOrderByRelationAggregateInput
  }

  export type imagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: imagesWhereInput | imagesWhereInput[]
    OR?: imagesWhereInput[]
    NOT?: imagesWhereInput | imagesWhereInput[]
    key?: StringNullableFilter<"images"> | string | null
    url?: StringFilter<"images"> | string
    type?: EnumtypeNullableFilter<"images"> | $Enums.type | null
    order?: IntNullableFilter<"images"> | number | null
    created_at?: DateTimeFilter<"images"> | Date | string
    updated_at?: DateTimeNullableFilter<"images"> | Date | string | null
    stock?: StockListRelationFilter
  }, "id">

  export type imagesOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrderInput | SortOrder
    url?: SortOrder
    type?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: imagesCountOrderByAggregateInput
    _avg?: imagesAvgOrderByAggregateInput
    _max?: imagesMaxOrderByAggregateInput
    _min?: imagesMinOrderByAggregateInput
    _sum?: imagesSumOrderByAggregateInput
  }

  export type imagesScalarWhereWithAggregatesInput = {
    AND?: imagesScalarWhereWithAggregatesInput | imagesScalarWhereWithAggregatesInput[]
    OR?: imagesScalarWhereWithAggregatesInput[]
    NOT?: imagesScalarWhereWithAggregatesInput | imagesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"images"> | string
    key?: StringNullableWithAggregatesFilter<"images"> | string | null
    url?: StringWithAggregatesFilter<"images"> | string
    type?: EnumtypeNullableWithAggregatesFilter<"images"> | $Enums.type | null
    order?: IntNullableWithAggregatesFilter<"images"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"images"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"images"> | Date | string | null
  }

  export type labWhereInput = {
    AND?: labWhereInput | labWhereInput[]
    OR?: labWhereInput[]
    NOT?: labWhereInput | labWhereInput[]
    id?: IntFilter<"lab"> | number
    name?: StringNullableFilter<"lab"> | string | null
    professor?: StringNullableFilter<"lab"> | string | null
    major?: StringNullableFilter<"lab"> | string | null
    school_name?: StringNullableFilter<"lab"> | string | null
    created_at?: DateTimeFilter<"lab"> | Date | string
    updated_at?: DateTimeNullableFilter<"lab"> | Date | string | null
    stock_stock_labTolab?: StockListRelationFilter
    supplier_supplier_labTolab?: SupplierListRelationFilter
    users_users_labTolab?: UsersListRelationFilter
  }

  export type labOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    professor?: SortOrderInput | SortOrder
    major?: SortOrderInput | SortOrder
    school_name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    stock_stock_labTolab?: stockOrderByRelationAggregateInput
    supplier_supplier_labTolab?: supplierOrderByRelationAggregateInput
    users_users_labTolab?: usersOrderByRelationAggregateInput
  }

  export type labWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: labWhereInput | labWhereInput[]
    OR?: labWhereInput[]
    NOT?: labWhereInput | labWhereInput[]
    name?: StringNullableFilter<"lab"> | string | null
    professor?: StringNullableFilter<"lab"> | string | null
    major?: StringNullableFilter<"lab"> | string | null
    school_name?: StringNullableFilter<"lab"> | string | null
    created_at?: DateTimeFilter<"lab"> | Date | string
    updated_at?: DateTimeNullableFilter<"lab"> | Date | string | null
    stock_stock_labTolab?: StockListRelationFilter
    supplier_supplier_labTolab?: SupplierListRelationFilter
    users_users_labTolab?: UsersListRelationFilter
  }, "id">

  export type labOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    professor?: SortOrderInput | SortOrder
    major?: SortOrderInput | SortOrder
    school_name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: labCountOrderByAggregateInput
    _avg?: labAvgOrderByAggregateInput
    _max?: labMaxOrderByAggregateInput
    _min?: labMinOrderByAggregateInput
    _sum?: labSumOrderByAggregateInput
  }

  export type labScalarWhereWithAggregatesInput = {
    AND?: labScalarWhereWithAggregatesInput | labScalarWhereWithAggregatesInput[]
    OR?: labScalarWhereWithAggregatesInput[]
    NOT?: labScalarWhereWithAggregatesInput | labScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"lab"> | number
    name?: StringNullableWithAggregatesFilter<"lab"> | string | null
    professor?: StringNullableWithAggregatesFilter<"lab"> | string | null
    major?: StringNullableWithAggregatesFilter<"lab"> | string | null
    school_name?: StringNullableWithAggregatesFilter<"lab"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"lab"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"lab"> | Date | string | null
  }

  export type stockWhereInput = {
    AND?: stockWhereInput | stockWhereInput[]
    OR?: stockWhereInput[]
    NOT?: stockWhereInput | stockWhereInput[]
    id?: IntFilter<"stock"> | number
    name?: StringNullableFilter<"stock"> | string | null
    importer_company?: StringNullableFilter<"stock"> | string | null
    order_type?: StringNullableFilter<"stock"> | string | null
    vendor?: StringNullableFilter<"stock"> | string | null
    catalog_id?: StringNullableFilter<"stock"> | string | null
    quantity?: IntNullableFilter<"stock"> | number | null
    image?: UuidNullableFilter<"stock"> | string | null
    minimum_quantity?: IntNullableFilter<"stock"> | number | null
    maximum_quantity?: IntNullableFilter<"stock"> | number | null
    description?: StringNullableFilter<"stock"> | string | null
    lab?: IntNullableFilter<"stock"> | number | null
    extra?: JsonNullableFilter<"stock">
    created_at?: DateTimeFilter<"stock"> | Date | string
    updated_at?: DateTimeNullableFilter<"stock"> | Date | string | null
    images?: XOR<ImagesNullableScalarRelationFilter, imagesWhereInput> | null
    lab_stock_labTolab?: XOR<LabNullableScalarRelationFilter, labWhereInput> | null
  }

  export type stockOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    importer_company?: SortOrderInput | SortOrder
    order_type?: SortOrderInput | SortOrder
    vendor?: SortOrderInput | SortOrder
    catalog_id?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    minimum_quantity?: SortOrderInput | SortOrder
    maximum_quantity?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    lab?: SortOrderInput | SortOrder
    extra?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    images?: imagesOrderByWithRelationInput
    lab_stock_labTolab?: labOrderByWithRelationInput
  }

  export type stockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: stockWhereInput | stockWhereInput[]
    OR?: stockWhereInput[]
    NOT?: stockWhereInput | stockWhereInput[]
    name?: StringNullableFilter<"stock"> | string | null
    importer_company?: StringNullableFilter<"stock"> | string | null
    order_type?: StringNullableFilter<"stock"> | string | null
    vendor?: StringNullableFilter<"stock"> | string | null
    catalog_id?: StringNullableFilter<"stock"> | string | null
    quantity?: IntNullableFilter<"stock"> | number | null
    image?: UuidNullableFilter<"stock"> | string | null
    minimum_quantity?: IntNullableFilter<"stock"> | number | null
    maximum_quantity?: IntNullableFilter<"stock"> | number | null
    description?: StringNullableFilter<"stock"> | string | null
    lab?: IntNullableFilter<"stock"> | number | null
    extra?: JsonNullableFilter<"stock">
    created_at?: DateTimeFilter<"stock"> | Date | string
    updated_at?: DateTimeNullableFilter<"stock"> | Date | string | null
    images?: XOR<ImagesNullableScalarRelationFilter, imagesWhereInput> | null
    lab_stock_labTolab?: XOR<LabNullableScalarRelationFilter, labWhereInput> | null
  }, "id">

  export type stockOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    importer_company?: SortOrderInput | SortOrder
    order_type?: SortOrderInput | SortOrder
    vendor?: SortOrderInput | SortOrder
    catalog_id?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    minimum_quantity?: SortOrderInput | SortOrder
    maximum_quantity?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    lab?: SortOrderInput | SortOrder
    extra?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: stockCountOrderByAggregateInput
    _avg?: stockAvgOrderByAggregateInput
    _max?: stockMaxOrderByAggregateInput
    _min?: stockMinOrderByAggregateInput
    _sum?: stockSumOrderByAggregateInput
  }

  export type stockScalarWhereWithAggregatesInput = {
    AND?: stockScalarWhereWithAggregatesInput | stockScalarWhereWithAggregatesInput[]
    OR?: stockScalarWhereWithAggregatesInput[]
    NOT?: stockScalarWhereWithAggregatesInput | stockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stock"> | number
    name?: StringNullableWithAggregatesFilter<"stock"> | string | null
    importer_company?: StringNullableWithAggregatesFilter<"stock"> | string | null
    order_type?: StringNullableWithAggregatesFilter<"stock"> | string | null
    vendor?: StringNullableWithAggregatesFilter<"stock"> | string | null
    catalog_id?: StringNullableWithAggregatesFilter<"stock"> | string | null
    quantity?: IntNullableWithAggregatesFilter<"stock"> | number | null
    image?: UuidNullableWithAggregatesFilter<"stock"> | string | null
    minimum_quantity?: IntNullableWithAggregatesFilter<"stock"> | number | null
    maximum_quantity?: IntNullableWithAggregatesFilter<"stock"> | number | null
    description?: StringNullableWithAggregatesFilter<"stock"> | string | null
    lab?: IntNullableWithAggregatesFilter<"stock"> | number | null
    extra?: JsonNullableWithAggregatesFilter<"stock">
    created_at?: DateTimeWithAggregatesFilter<"stock"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"stock"> | Date | string | null
  }

  export type supplierWhereInput = {
    AND?: supplierWhereInput | supplierWhereInput[]
    OR?: supplierWhereInput[]
    NOT?: supplierWhereInput | supplierWhereInput[]
    id?: IntFilter<"supplier"> | number
    vendor?: StringNullableFilter<"supplier"> | string | null
    description?: StringNullableFilter<"supplier"> | string | null
    lab?: IntNullableFilter<"supplier"> | number | null
    lab_supplier_labTolab?: XOR<LabNullableScalarRelationFilter, labWhereInput> | null
  }

  export type supplierOrderByWithRelationInput = {
    id?: SortOrder
    vendor?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    lab?: SortOrderInput | SortOrder
    lab_supplier_labTolab?: labOrderByWithRelationInput
  }

  export type supplierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: supplierWhereInput | supplierWhereInput[]
    OR?: supplierWhereInput[]
    NOT?: supplierWhereInput | supplierWhereInput[]
    vendor?: StringNullableFilter<"supplier"> | string | null
    description?: StringNullableFilter<"supplier"> | string | null
    lab?: IntNullableFilter<"supplier"> | number | null
    lab_supplier_labTolab?: XOR<LabNullableScalarRelationFilter, labWhereInput> | null
  }, "id">

  export type supplierOrderByWithAggregationInput = {
    id?: SortOrder
    vendor?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    lab?: SortOrderInput | SortOrder
    _count?: supplierCountOrderByAggregateInput
    _avg?: supplierAvgOrderByAggregateInput
    _max?: supplierMaxOrderByAggregateInput
    _min?: supplierMinOrderByAggregateInput
    _sum?: supplierSumOrderByAggregateInput
  }

  export type supplierScalarWhereWithAggregatesInput = {
    AND?: supplierScalarWhereWithAggregatesInput | supplierScalarWhereWithAggregatesInput[]
    OR?: supplierScalarWhereWithAggregatesInput[]
    NOT?: supplierScalarWhereWithAggregatesInput | supplierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"supplier"> | number
    vendor?: StringNullableWithAggregatesFilter<"supplier"> | string | null
    description?: StringNullableWithAggregatesFilter<"supplier"> | string | null
    lab?: IntNullableWithAggregatesFilter<"supplier"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    student_number?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    role?: EnumroleNullableFilter<"users"> | $Enums.role | null
    status?: EnumstatusNullableFilter<"users"> | $Enums.status | null
    lab?: IntNullableFilter<"users"> | number | null
    last_login_at?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    lab_users_labTolab?: XOR<LabNullableScalarRelationFilter, labWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    student_number?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    lab?: SortOrderInput | SortOrder
    last_login_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    lab_users_labTolab?: labOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    student_number_lab?: usersStudent_numberLabCompoundUniqueInput
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    student_number?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    role?: EnumroleNullableFilter<"users"> | $Enums.role | null
    status?: EnumstatusNullableFilter<"users"> | $Enums.status | null
    lab?: IntNullableFilter<"users"> | number | null
    last_login_at?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    lab_users_labTolab?: XOR<LabNullableScalarRelationFilter, labWhereInput> | null
  }, "id" | "student_number_lab">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    student_number?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    lab?: SortOrderInput | SortOrder
    last_login_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    student_number?: StringWithAggregatesFilter<"users"> | string
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: EnumroleNullableWithAggregatesFilter<"users"> | $Enums.role | null
    status?: EnumstatusNullableWithAggregatesFilter<"users"> | $Enums.status | null
    lab?: IntNullableWithAggregatesFilter<"users"> | number | null
    last_login_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type imagesCreateInput = {
    id?: string
    key?: string | null
    url: string
    type?: $Enums.type | null
    order?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    stock?: stockCreateNestedManyWithoutImagesInput
  }

  export type imagesUncheckedCreateInput = {
    id?: string
    key?: string | null
    url: string
    type?: $Enums.type | null
    order?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    stock?: stockUncheckedCreateNestedManyWithoutImagesInput
  }

  export type imagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumtypeFieldUpdateOperationsInput | $Enums.type | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock?: stockUpdateManyWithoutImagesNestedInput
  }

  export type imagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumtypeFieldUpdateOperationsInput | $Enums.type | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock?: stockUncheckedUpdateManyWithoutImagesNestedInput
  }

  export type imagesCreateManyInput = {
    id?: string
    key?: string | null
    url: string
    type?: $Enums.type | null
    order?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type imagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumtypeFieldUpdateOperationsInput | $Enums.type | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type imagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumtypeFieldUpdateOperationsInput | $Enums.type | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type labCreateInput = {
    name?: string | null
    professor?: string | null
    major?: string | null
    school_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    stock_stock_labTolab?: stockCreateNestedManyWithoutLab_stock_labTolabInput
    supplier_supplier_labTolab?: supplierCreateNestedManyWithoutLab_supplier_labTolabInput
    users_users_labTolab?: usersCreateNestedManyWithoutLab_users_labTolabInput
  }

  export type labUncheckedCreateInput = {
    id?: number
    name?: string | null
    professor?: string | null
    major?: string | null
    school_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    stock_stock_labTolab?: stockUncheckedCreateNestedManyWithoutLab_stock_labTolabInput
    supplier_supplier_labTolab?: supplierUncheckedCreateNestedManyWithoutLab_supplier_labTolabInput
    users_users_labTolab?: usersUncheckedCreateNestedManyWithoutLab_users_labTolabInput
  }

  export type labUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    professor?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock_stock_labTolab?: stockUpdateManyWithoutLab_stock_labTolabNestedInput
    supplier_supplier_labTolab?: supplierUpdateManyWithoutLab_supplier_labTolabNestedInput
    users_users_labTolab?: usersUpdateManyWithoutLab_users_labTolabNestedInput
  }

  export type labUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    professor?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock_stock_labTolab?: stockUncheckedUpdateManyWithoutLab_stock_labTolabNestedInput
    supplier_supplier_labTolab?: supplierUncheckedUpdateManyWithoutLab_supplier_labTolabNestedInput
    users_users_labTolab?: usersUncheckedUpdateManyWithoutLab_users_labTolabNestedInput
  }

  export type labCreateManyInput = {
    id?: number
    name?: string | null
    professor?: string | null
    major?: string | null
    school_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type labUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    professor?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type labUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    professor?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stockCreateInput = {
    name?: string | null
    importer_company?: string | null
    order_type?: string | null
    vendor?: string | null
    catalog_id?: string | null
    quantity?: number | null
    minimum_quantity?: number | null
    maximum_quantity?: number | null
    description?: string | null
    extra?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    images?: imagesCreateNestedOneWithoutStockInput
    lab_stock_labTolab?: labCreateNestedOneWithoutStock_stock_labTolabInput
  }

  export type stockUncheckedCreateInput = {
    id?: number
    name?: string | null
    importer_company?: string | null
    order_type?: string | null
    vendor?: string | null
    catalog_id?: string | null
    quantity?: number | null
    image?: string | null
    minimum_quantity?: number | null
    maximum_quantity?: number | null
    description?: string | null
    lab?: number | null
    extra?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type stockUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    importer_company?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    catalog_id?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minimum_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    maximum_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    extra?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: imagesUpdateOneWithoutStockNestedInput
    lab_stock_labTolab?: labUpdateOneWithoutStock_stock_labTolabNestedInput
  }

  export type stockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    importer_company?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    catalog_id?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    minimum_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    maximum_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lab?: NullableIntFieldUpdateOperationsInput | number | null
    extra?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stockCreateManyInput = {
    id?: number
    name?: string | null
    importer_company?: string | null
    order_type?: string | null
    vendor?: string | null
    catalog_id?: string | null
    quantity?: number | null
    image?: string | null
    minimum_quantity?: number | null
    maximum_quantity?: number | null
    description?: string | null
    lab?: number | null
    extra?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type stockUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    importer_company?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    catalog_id?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minimum_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    maximum_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    extra?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    importer_company?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    catalog_id?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    minimum_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    maximum_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lab?: NullableIntFieldUpdateOperationsInput | number | null
    extra?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type supplierCreateInput = {
    vendor?: string | null
    description?: string | null
    lab_supplier_labTolab?: labCreateNestedOneWithoutSupplier_supplier_labTolabInput
  }

  export type supplierUncheckedCreateInput = {
    id?: number
    vendor?: string | null
    description?: string | null
    lab?: number | null
  }

  export type supplierUpdateInput = {
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lab_supplier_labTolab?: labUpdateOneWithoutSupplier_supplier_labTolabNestedInput
  }

  export type supplierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lab?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type supplierCreateManyInput = {
    id?: number
    vendor?: string | null
    description?: string | null
    lab?: number | null
  }

  export type supplierUpdateManyMutationInput = {
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type supplierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lab?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    student_number: string
    password?: string | null
    role?: $Enums.role | null
    status?: $Enums.status | null
    last_login_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    lab_users_labTolab?: labCreateNestedOneWithoutUsers_users_labTolabInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    student_number: string
    password?: string | null
    role?: $Enums.role | null
    status?: $Enums.status | null
    lab?: number | null
    last_login_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type usersUpdateInput = {
    student_number?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumroleFieldUpdateOperationsInput | $Enums.role | null
    status?: NullableEnumstatusFieldUpdateOperationsInput | $Enums.status | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lab_users_labTolab?: labUpdateOneWithoutUsers_users_labTolabNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_number?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumroleFieldUpdateOperationsInput | $Enums.role | null
    status?: NullableEnumstatusFieldUpdateOperationsInput | $Enums.status | null
    lab?: NullableIntFieldUpdateOperationsInput | number | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateManyInput = {
    id?: number
    student_number: string
    password?: string | null
    role?: $Enums.role | null
    status?: $Enums.status | null
    lab?: number | null
    last_login_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    student_number?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumroleFieldUpdateOperationsInput | $Enums.role | null
    status?: NullableEnumstatusFieldUpdateOperationsInput | $Enums.status | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_number?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumroleFieldUpdateOperationsInput | $Enums.role | null
    status?: NullableEnumstatusFieldUpdateOperationsInput | $Enums.status | null
    lab?: NullableIntFieldUpdateOperationsInput | number | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumtypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.type | EnumtypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.type[] | ListEnumtypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.type[] | ListEnumtypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtypeNullableFilter<$PrismaModel> | $Enums.type | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StockListRelationFilter = {
    every?: stockWhereInput
    some?: stockWhereInput
    none?: stockWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type stockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type imagesCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    url?: SortOrder
    type?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type imagesAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    url?: SortOrder
    type?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type imagesMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    url?: SortOrder
    type?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type imagesSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumtypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.type | EnumtypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.type[] | ListEnumtypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.type[] | ListEnumtypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtypeNullableFilter<$PrismaModel>
    _max?: NestedEnumtypeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SupplierListRelationFilter = {
    every?: supplierWhereInput
    some?: supplierWhereInput
    none?: supplierWhereInput
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type supplierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type labCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    professor?: SortOrder
    major?: SortOrder
    school_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type labAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type labMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    professor?: SortOrder
    major?: SortOrder
    school_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type labMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    professor?: SortOrder
    major?: SortOrder
    school_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type labSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ImagesNullableScalarRelationFilter = {
    is?: imagesWhereInput | null
    isNot?: imagesWhereInput | null
  }

  export type LabNullableScalarRelationFilter = {
    is?: labWhereInput | null
    isNot?: labWhereInput | null
  }

  export type stockCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    importer_company?: SortOrder
    order_type?: SortOrder
    vendor?: SortOrder
    catalog_id?: SortOrder
    quantity?: SortOrder
    image?: SortOrder
    minimum_quantity?: SortOrder
    maximum_quantity?: SortOrder
    description?: SortOrder
    lab?: SortOrder
    extra?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type stockAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    minimum_quantity?: SortOrder
    maximum_quantity?: SortOrder
    lab?: SortOrder
  }

  export type stockMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    importer_company?: SortOrder
    order_type?: SortOrder
    vendor?: SortOrder
    catalog_id?: SortOrder
    quantity?: SortOrder
    image?: SortOrder
    minimum_quantity?: SortOrder
    maximum_quantity?: SortOrder
    description?: SortOrder
    lab?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type stockMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    importer_company?: SortOrder
    order_type?: SortOrder
    vendor?: SortOrder
    catalog_id?: SortOrder
    quantity?: SortOrder
    image?: SortOrder
    minimum_quantity?: SortOrder
    maximum_quantity?: SortOrder
    description?: SortOrder
    lab?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type stockSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    minimum_quantity?: SortOrder
    maximum_quantity?: SortOrder
    lab?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type supplierCountOrderByAggregateInput = {
    id?: SortOrder
    vendor?: SortOrder
    description?: SortOrder
    lab?: SortOrder
  }

  export type supplierAvgOrderByAggregateInput = {
    id?: SortOrder
    lab?: SortOrder
  }

  export type supplierMaxOrderByAggregateInput = {
    id?: SortOrder
    vendor?: SortOrder
    description?: SortOrder
    lab?: SortOrder
  }

  export type supplierMinOrderByAggregateInput = {
    id?: SortOrder
    vendor?: SortOrder
    description?: SortOrder
    lab?: SortOrder
  }

  export type supplierSumOrderByAggregateInput = {
    id?: SortOrder
    lab?: SortOrder
  }

  export type EnumroleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel> | null
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumroleNullableFilter<$PrismaModel> | $Enums.role | null
  }

  export type EnumstatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatusNullableFilter<$PrismaModel> | $Enums.status | null
  }

  export type usersStudent_numberLabCompoundUniqueInput = {
    student_number: string
    lab: number
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    student_number?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    lab?: SortOrder
    last_login_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    lab?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    student_number?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    lab?: SortOrder
    last_login_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    student_number?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    lab?: SortOrder
    last_login_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    lab?: SortOrder
  }

  export type EnumroleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel> | null
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumroleNullableWithAggregatesFilter<$PrismaModel> | $Enums.role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumroleNullableFilter<$PrismaModel>
    _max?: NestedEnumroleNullableFilter<$PrismaModel>
  }

  export type EnumstatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumstatusNullableFilter<$PrismaModel>
    _max?: NestedEnumstatusNullableFilter<$PrismaModel>
  }

  export type stockCreateNestedManyWithoutImagesInput = {
    create?: XOR<stockCreateWithoutImagesInput, stockUncheckedCreateWithoutImagesInput> | stockCreateWithoutImagesInput[] | stockUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: stockCreateOrConnectWithoutImagesInput | stockCreateOrConnectWithoutImagesInput[]
    createMany?: stockCreateManyImagesInputEnvelope
    connect?: stockWhereUniqueInput | stockWhereUniqueInput[]
  }

  export type stockUncheckedCreateNestedManyWithoutImagesInput = {
    create?: XOR<stockCreateWithoutImagesInput, stockUncheckedCreateWithoutImagesInput> | stockCreateWithoutImagesInput[] | stockUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: stockCreateOrConnectWithoutImagesInput | stockCreateOrConnectWithoutImagesInput[]
    createMany?: stockCreateManyImagesInputEnvelope
    connect?: stockWhereUniqueInput | stockWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumtypeFieldUpdateOperationsInput = {
    set?: $Enums.type | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type stockUpdateManyWithoutImagesNestedInput = {
    create?: XOR<stockCreateWithoutImagesInput, stockUncheckedCreateWithoutImagesInput> | stockCreateWithoutImagesInput[] | stockUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: stockCreateOrConnectWithoutImagesInput | stockCreateOrConnectWithoutImagesInput[]
    upsert?: stockUpsertWithWhereUniqueWithoutImagesInput | stockUpsertWithWhereUniqueWithoutImagesInput[]
    createMany?: stockCreateManyImagesInputEnvelope
    set?: stockWhereUniqueInput | stockWhereUniqueInput[]
    disconnect?: stockWhereUniqueInput | stockWhereUniqueInput[]
    delete?: stockWhereUniqueInput | stockWhereUniqueInput[]
    connect?: stockWhereUniqueInput | stockWhereUniqueInput[]
    update?: stockUpdateWithWhereUniqueWithoutImagesInput | stockUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: stockUpdateManyWithWhereWithoutImagesInput | stockUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: stockScalarWhereInput | stockScalarWhereInput[]
  }

  export type stockUncheckedUpdateManyWithoutImagesNestedInput = {
    create?: XOR<stockCreateWithoutImagesInput, stockUncheckedCreateWithoutImagesInput> | stockCreateWithoutImagesInput[] | stockUncheckedCreateWithoutImagesInput[]
    connectOrCreate?: stockCreateOrConnectWithoutImagesInput | stockCreateOrConnectWithoutImagesInput[]
    upsert?: stockUpsertWithWhereUniqueWithoutImagesInput | stockUpsertWithWhereUniqueWithoutImagesInput[]
    createMany?: stockCreateManyImagesInputEnvelope
    set?: stockWhereUniqueInput | stockWhereUniqueInput[]
    disconnect?: stockWhereUniqueInput | stockWhereUniqueInput[]
    delete?: stockWhereUniqueInput | stockWhereUniqueInput[]
    connect?: stockWhereUniqueInput | stockWhereUniqueInput[]
    update?: stockUpdateWithWhereUniqueWithoutImagesInput | stockUpdateWithWhereUniqueWithoutImagesInput[]
    updateMany?: stockUpdateManyWithWhereWithoutImagesInput | stockUpdateManyWithWhereWithoutImagesInput[]
    deleteMany?: stockScalarWhereInput | stockScalarWhereInput[]
  }

  export type stockCreateNestedManyWithoutLab_stock_labTolabInput = {
    create?: XOR<stockCreateWithoutLab_stock_labTolabInput, stockUncheckedCreateWithoutLab_stock_labTolabInput> | stockCreateWithoutLab_stock_labTolabInput[] | stockUncheckedCreateWithoutLab_stock_labTolabInput[]
    connectOrCreate?: stockCreateOrConnectWithoutLab_stock_labTolabInput | stockCreateOrConnectWithoutLab_stock_labTolabInput[]
    createMany?: stockCreateManyLab_stock_labTolabInputEnvelope
    connect?: stockWhereUniqueInput | stockWhereUniqueInput[]
  }

  export type supplierCreateNestedManyWithoutLab_supplier_labTolabInput = {
    create?: XOR<supplierCreateWithoutLab_supplier_labTolabInput, supplierUncheckedCreateWithoutLab_supplier_labTolabInput> | supplierCreateWithoutLab_supplier_labTolabInput[] | supplierUncheckedCreateWithoutLab_supplier_labTolabInput[]
    connectOrCreate?: supplierCreateOrConnectWithoutLab_supplier_labTolabInput | supplierCreateOrConnectWithoutLab_supplier_labTolabInput[]
    createMany?: supplierCreateManyLab_supplier_labTolabInputEnvelope
    connect?: supplierWhereUniqueInput | supplierWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutLab_users_labTolabInput = {
    create?: XOR<usersCreateWithoutLab_users_labTolabInput, usersUncheckedCreateWithoutLab_users_labTolabInput> | usersCreateWithoutLab_users_labTolabInput[] | usersUncheckedCreateWithoutLab_users_labTolabInput[]
    connectOrCreate?: usersCreateOrConnectWithoutLab_users_labTolabInput | usersCreateOrConnectWithoutLab_users_labTolabInput[]
    createMany?: usersCreateManyLab_users_labTolabInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type stockUncheckedCreateNestedManyWithoutLab_stock_labTolabInput = {
    create?: XOR<stockCreateWithoutLab_stock_labTolabInput, stockUncheckedCreateWithoutLab_stock_labTolabInput> | stockCreateWithoutLab_stock_labTolabInput[] | stockUncheckedCreateWithoutLab_stock_labTolabInput[]
    connectOrCreate?: stockCreateOrConnectWithoutLab_stock_labTolabInput | stockCreateOrConnectWithoutLab_stock_labTolabInput[]
    createMany?: stockCreateManyLab_stock_labTolabInputEnvelope
    connect?: stockWhereUniqueInput | stockWhereUniqueInput[]
  }

  export type supplierUncheckedCreateNestedManyWithoutLab_supplier_labTolabInput = {
    create?: XOR<supplierCreateWithoutLab_supplier_labTolabInput, supplierUncheckedCreateWithoutLab_supplier_labTolabInput> | supplierCreateWithoutLab_supplier_labTolabInput[] | supplierUncheckedCreateWithoutLab_supplier_labTolabInput[]
    connectOrCreate?: supplierCreateOrConnectWithoutLab_supplier_labTolabInput | supplierCreateOrConnectWithoutLab_supplier_labTolabInput[]
    createMany?: supplierCreateManyLab_supplier_labTolabInputEnvelope
    connect?: supplierWhereUniqueInput | supplierWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutLab_users_labTolabInput = {
    create?: XOR<usersCreateWithoutLab_users_labTolabInput, usersUncheckedCreateWithoutLab_users_labTolabInput> | usersCreateWithoutLab_users_labTolabInput[] | usersUncheckedCreateWithoutLab_users_labTolabInput[]
    connectOrCreate?: usersCreateOrConnectWithoutLab_users_labTolabInput | usersCreateOrConnectWithoutLab_users_labTolabInput[]
    createMany?: usersCreateManyLab_users_labTolabInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type stockUpdateManyWithoutLab_stock_labTolabNestedInput = {
    create?: XOR<stockCreateWithoutLab_stock_labTolabInput, stockUncheckedCreateWithoutLab_stock_labTolabInput> | stockCreateWithoutLab_stock_labTolabInput[] | stockUncheckedCreateWithoutLab_stock_labTolabInput[]
    connectOrCreate?: stockCreateOrConnectWithoutLab_stock_labTolabInput | stockCreateOrConnectWithoutLab_stock_labTolabInput[]
    upsert?: stockUpsertWithWhereUniqueWithoutLab_stock_labTolabInput | stockUpsertWithWhereUniqueWithoutLab_stock_labTolabInput[]
    createMany?: stockCreateManyLab_stock_labTolabInputEnvelope
    set?: stockWhereUniqueInput | stockWhereUniqueInput[]
    disconnect?: stockWhereUniqueInput | stockWhereUniqueInput[]
    delete?: stockWhereUniqueInput | stockWhereUniqueInput[]
    connect?: stockWhereUniqueInput | stockWhereUniqueInput[]
    update?: stockUpdateWithWhereUniqueWithoutLab_stock_labTolabInput | stockUpdateWithWhereUniqueWithoutLab_stock_labTolabInput[]
    updateMany?: stockUpdateManyWithWhereWithoutLab_stock_labTolabInput | stockUpdateManyWithWhereWithoutLab_stock_labTolabInput[]
    deleteMany?: stockScalarWhereInput | stockScalarWhereInput[]
  }

  export type supplierUpdateManyWithoutLab_supplier_labTolabNestedInput = {
    create?: XOR<supplierCreateWithoutLab_supplier_labTolabInput, supplierUncheckedCreateWithoutLab_supplier_labTolabInput> | supplierCreateWithoutLab_supplier_labTolabInput[] | supplierUncheckedCreateWithoutLab_supplier_labTolabInput[]
    connectOrCreate?: supplierCreateOrConnectWithoutLab_supplier_labTolabInput | supplierCreateOrConnectWithoutLab_supplier_labTolabInput[]
    upsert?: supplierUpsertWithWhereUniqueWithoutLab_supplier_labTolabInput | supplierUpsertWithWhereUniqueWithoutLab_supplier_labTolabInput[]
    createMany?: supplierCreateManyLab_supplier_labTolabInputEnvelope
    set?: supplierWhereUniqueInput | supplierWhereUniqueInput[]
    disconnect?: supplierWhereUniqueInput | supplierWhereUniqueInput[]
    delete?: supplierWhereUniqueInput | supplierWhereUniqueInput[]
    connect?: supplierWhereUniqueInput | supplierWhereUniqueInput[]
    update?: supplierUpdateWithWhereUniqueWithoutLab_supplier_labTolabInput | supplierUpdateWithWhereUniqueWithoutLab_supplier_labTolabInput[]
    updateMany?: supplierUpdateManyWithWhereWithoutLab_supplier_labTolabInput | supplierUpdateManyWithWhereWithoutLab_supplier_labTolabInput[]
    deleteMany?: supplierScalarWhereInput | supplierScalarWhereInput[]
  }

  export type usersUpdateManyWithoutLab_users_labTolabNestedInput = {
    create?: XOR<usersCreateWithoutLab_users_labTolabInput, usersUncheckedCreateWithoutLab_users_labTolabInput> | usersCreateWithoutLab_users_labTolabInput[] | usersUncheckedCreateWithoutLab_users_labTolabInput[]
    connectOrCreate?: usersCreateOrConnectWithoutLab_users_labTolabInput | usersCreateOrConnectWithoutLab_users_labTolabInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutLab_users_labTolabInput | usersUpsertWithWhereUniqueWithoutLab_users_labTolabInput[]
    createMany?: usersCreateManyLab_users_labTolabInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutLab_users_labTolabInput | usersUpdateWithWhereUniqueWithoutLab_users_labTolabInput[]
    updateMany?: usersUpdateManyWithWhereWithoutLab_users_labTolabInput | usersUpdateManyWithWhereWithoutLab_users_labTolabInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type stockUncheckedUpdateManyWithoutLab_stock_labTolabNestedInput = {
    create?: XOR<stockCreateWithoutLab_stock_labTolabInput, stockUncheckedCreateWithoutLab_stock_labTolabInput> | stockCreateWithoutLab_stock_labTolabInput[] | stockUncheckedCreateWithoutLab_stock_labTolabInput[]
    connectOrCreate?: stockCreateOrConnectWithoutLab_stock_labTolabInput | stockCreateOrConnectWithoutLab_stock_labTolabInput[]
    upsert?: stockUpsertWithWhereUniqueWithoutLab_stock_labTolabInput | stockUpsertWithWhereUniqueWithoutLab_stock_labTolabInput[]
    createMany?: stockCreateManyLab_stock_labTolabInputEnvelope
    set?: stockWhereUniqueInput | stockWhereUniqueInput[]
    disconnect?: stockWhereUniqueInput | stockWhereUniqueInput[]
    delete?: stockWhereUniqueInput | stockWhereUniqueInput[]
    connect?: stockWhereUniqueInput | stockWhereUniqueInput[]
    update?: stockUpdateWithWhereUniqueWithoutLab_stock_labTolabInput | stockUpdateWithWhereUniqueWithoutLab_stock_labTolabInput[]
    updateMany?: stockUpdateManyWithWhereWithoutLab_stock_labTolabInput | stockUpdateManyWithWhereWithoutLab_stock_labTolabInput[]
    deleteMany?: stockScalarWhereInput | stockScalarWhereInput[]
  }

  export type supplierUncheckedUpdateManyWithoutLab_supplier_labTolabNestedInput = {
    create?: XOR<supplierCreateWithoutLab_supplier_labTolabInput, supplierUncheckedCreateWithoutLab_supplier_labTolabInput> | supplierCreateWithoutLab_supplier_labTolabInput[] | supplierUncheckedCreateWithoutLab_supplier_labTolabInput[]
    connectOrCreate?: supplierCreateOrConnectWithoutLab_supplier_labTolabInput | supplierCreateOrConnectWithoutLab_supplier_labTolabInput[]
    upsert?: supplierUpsertWithWhereUniqueWithoutLab_supplier_labTolabInput | supplierUpsertWithWhereUniqueWithoutLab_supplier_labTolabInput[]
    createMany?: supplierCreateManyLab_supplier_labTolabInputEnvelope
    set?: supplierWhereUniqueInput | supplierWhereUniqueInput[]
    disconnect?: supplierWhereUniqueInput | supplierWhereUniqueInput[]
    delete?: supplierWhereUniqueInput | supplierWhereUniqueInput[]
    connect?: supplierWhereUniqueInput | supplierWhereUniqueInput[]
    update?: supplierUpdateWithWhereUniqueWithoutLab_supplier_labTolabInput | supplierUpdateWithWhereUniqueWithoutLab_supplier_labTolabInput[]
    updateMany?: supplierUpdateManyWithWhereWithoutLab_supplier_labTolabInput | supplierUpdateManyWithWhereWithoutLab_supplier_labTolabInput[]
    deleteMany?: supplierScalarWhereInput | supplierScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutLab_users_labTolabNestedInput = {
    create?: XOR<usersCreateWithoutLab_users_labTolabInput, usersUncheckedCreateWithoutLab_users_labTolabInput> | usersCreateWithoutLab_users_labTolabInput[] | usersUncheckedCreateWithoutLab_users_labTolabInput[]
    connectOrCreate?: usersCreateOrConnectWithoutLab_users_labTolabInput | usersCreateOrConnectWithoutLab_users_labTolabInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutLab_users_labTolabInput | usersUpsertWithWhereUniqueWithoutLab_users_labTolabInput[]
    createMany?: usersCreateManyLab_users_labTolabInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutLab_users_labTolabInput | usersUpdateWithWhereUniqueWithoutLab_users_labTolabInput[]
    updateMany?: usersUpdateManyWithWhereWithoutLab_users_labTolabInput | usersUpdateManyWithWhereWithoutLab_users_labTolabInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type imagesCreateNestedOneWithoutStockInput = {
    create?: XOR<imagesCreateWithoutStockInput, imagesUncheckedCreateWithoutStockInput>
    connectOrCreate?: imagesCreateOrConnectWithoutStockInput
    connect?: imagesWhereUniqueInput
  }

  export type labCreateNestedOneWithoutStock_stock_labTolabInput = {
    create?: XOR<labCreateWithoutStock_stock_labTolabInput, labUncheckedCreateWithoutStock_stock_labTolabInput>
    connectOrCreate?: labCreateOrConnectWithoutStock_stock_labTolabInput
    connect?: labWhereUniqueInput
  }

  export type imagesUpdateOneWithoutStockNestedInput = {
    create?: XOR<imagesCreateWithoutStockInput, imagesUncheckedCreateWithoutStockInput>
    connectOrCreate?: imagesCreateOrConnectWithoutStockInput
    upsert?: imagesUpsertWithoutStockInput
    disconnect?: imagesWhereInput | boolean
    delete?: imagesWhereInput | boolean
    connect?: imagesWhereUniqueInput
    update?: XOR<XOR<imagesUpdateToOneWithWhereWithoutStockInput, imagesUpdateWithoutStockInput>, imagesUncheckedUpdateWithoutStockInput>
  }

  export type labUpdateOneWithoutStock_stock_labTolabNestedInput = {
    create?: XOR<labCreateWithoutStock_stock_labTolabInput, labUncheckedCreateWithoutStock_stock_labTolabInput>
    connectOrCreate?: labCreateOrConnectWithoutStock_stock_labTolabInput
    upsert?: labUpsertWithoutStock_stock_labTolabInput
    disconnect?: labWhereInput | boolean
    delete?: labWhereInput | boolean
    connect?: labWhereUniqueInput
    update?: XOR<XOR<labUpdateToOneWithWhereWithoutStock_stock_labTolabInput, labUpdateWithoutStock_stock_labTolabInput>, labUncheckedUpdateWithoutStock_stock_labTolabInput>
  }

  export type labCreateNestedOneWithoutSupplier_supplier_labTolabInput = {
    create?: XOR<labCreateWithoutSupplier_supplier_labTolabInput, labUncheckedCreateWithoutSupplier_supplier_labTolabInput>
    connectOrCreate?: labCreateOrConnectWithoutSupplier_supplier_labTolabInput
    connect?: labWhereUniqueInput
  }

  export type labUpdateOneWithoutSupplier_supplier_labTolabNestedInput = {
    create?: XOR<labCreateWithoutSupplier_supplier_labTolabInput, labUncheckedCreateWithoutSupplier_supplier_labTolabInput>
    connectOrCreate?: labCreateOrConnectWithoutSupplier_supplier_labTolabInput
    upsert?: labUpsertWithoutSupplier_supplier_labTolabInput
    disconnect?: labWhereInput | boolean
    delete?: labWhereInput | boolean
    connect?: labWhereUniqueInput
    update?: XOR<XOR<labUpdateToOneWithWhereWithoutSupplier_supplier_labTolabInput, labUpdateWithoutSupplier_supplier_labTolabInput>, labUncheckedUpdateWithoutSupplier_supplier_labTolabInput>
  }

  export type labCreateNestedOneWithoutUsers_users_labTolabInput = {
    create?: XOR<labCreateWithoutUsers_users_labTolabInput, labUncheckedCreateWithoutUsers_users_labTolabInput>
    connectOrCreate?: labCreateOrConnectWithoutUsers_users_labTolabInput
    connect?: labWhereUniqueInput
  }

  export type NullableEnumroleFieldUpdateOperationsInput = {
    set?: $Enums.role | null
  }

  export type NullableEnumstatusFieldUpdateOperationsInput = {
    set?: $Enums.status | null
  }

  export type labUpdateOneWithoutUsers_users_labTolabNestedInput = {
    create?: XOR<labCreateWithoutUsers_users_labTolabInput, labUncheckedCreateWithoutUsers_users_labTolabInput>
    connectOrCreate?: labCreateOrConnectWithoutUsers_users_labTolabInput
    upsert?: labUpsertWithoutUsers_users_labTolabInput
    disconnect?: labWhereInput | boolean
    delete?: labWhereInput | boolean
    connect?: labWhereUniqueInput
    update?: XOR<XOR<labUpdateToOneWithWhereWithoutUsers_users_labTolabInput, labUpdateWithoutUsers_users_labTolabInput>, labUncheckedUpdateWithoutUsers_users_labTolabInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumtypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.type | EnumtypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.type[] | ListEnumtypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.type[] | ListEnumtypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtypeNullableFilter<$PrismaModel> | $Enums.type | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumtypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.type | EnumtypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.type[] | ListEnumtypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.type[] | ListEnumtypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtypeNullableFilter<$PrismaModel>
    _max?: NestedEnumtypeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumroleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel> | null
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumroleNullableFilter<$PrismaModel> | $Enums.role | null
  }

  export type NestedEnumstatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatusNullableFilter<$PrismaModel> | $Enums.status | null
  }

  export type NestedEnumroleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel> | null
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumroleNullableWithAggregatesFilter<$PrismaModel> | $Enums.role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumroleNullableFilter<$PrismaModel>
    _max?: NestedEnumroleNullableFilter<$PrismaModel>
  }

  export type NestedEnumstatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumstatusNullableFilter<$PrismaModel>
    _max?: NestedEnumstatusNullableFilter<$PrismaModel>
  }

  export type stockCreateWithoutImagesInput = {
    name?: string | null
    importer_company?: string | null
    order_type?: string | null
    vendor?: string | null
    catalog_id?: string | null
    quantity?: number | null
    minimum_quantity?: number | null
    maximum_quantity?: number | null
    description?: string | null
    extra?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    lab_stock_labTolab?: labCreateNestedOneWithoutStock_stock_labTolabInput
  }

  export type stockUncheckedCreateWithoutImagesInput = {
    id?: number
    name?: string | null
    importer_company?: string | null
    order_type?: string | null
    vendor?: string | null
    catalog_id?: string | null
    quantity?: number | null
    minimum_quantity?: number | null
    maximum_quantity?: number | null
    description?: string | null
    lab?: number | null
    extra?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type stockCreateOrConnectWithoutImagesInput = {
    where: stockWhereUniqueInput
    create: XOR<stockCreateWithoutImagesInput, stockUncheckedCreateWithoutImagesInput>
  }

  export type stockCreateManyImagesInputEnvelope = {
    data: stockCreateManyImagesInput | stockCreateManyImagesInput[]
    skipDuplicates?: boolean
  }

  export type stockUpsertWithWhereUniqueWithoutImagesInput = {
    where: stockWhereUniqueInput
    update: XOR<stockUpdateWithoutImagesInput, stockUncheckedUpdateWithoutImagesInput>
    create: XOR<stockCreateWithoutImagesInput, stockUncheckedCreateWithoutImagesInput>
  }

  export type stockUpdateWithWhereUniqueWithoutImagesInput = {
    where: stockWhereUniqueInput
    data: XOR<stockUpdateWithoutImagesInput, stockUncheckedUpdateWithoutImagesInput>
  }

  export type stockUpdateManyWithWhereWithoutImagesInput = {
    where: stockScalarWhereInput
    data: XOR<stockUpdateManyMutationInput, stockUncheckedUpdateManyWithoutImagesInput>
  }

  export type stockScalarWhereInput = {
    AND?: stockScalarWhereInput | stockScalarWhereInput[]
    OR?: stockScalarWhereInput[]
    NOT?: stockScalarWhereInput | stockScalarWhereInput[]
    id?: IntFilter<"stock"> | number
    name?: StringNullableFilter<"stock"> | string | null
    importer_company?: StringNullableFilter<"stock"> | string | null
    order_type?: StringNullableFilter<"stock"> | string | null
    vendor?: StringNullableFilter<"stock"> | string | null
    catalog_id?: StringNullableFilter<"stock"> | string | null
    quantity?: IntNullableFilter<"stock"> | number | null
    image?: UuidNullableFilter<"stock"> | string | null
    minimum_quantity?: IntNullableFilter<"stock"> | number | null
    maximum_quantity?: IntNullableFilter<"stock"> | number | null
    description?: StringNullableFilter<"stock"> | string | null
    lab?: IntNullableFilter<"stock"> | number | null
    extra?: JsonNullableFilter<"stock">
    created_at?: DateTimeFilter<"stock"> | Date | string
    updated_at?: DateTimeNullableFilter<"stock"> | Date | string | null
  }

  export type stockCreateWithoutLab_stock_labTolabInput = {
    name?: string | null
    importer_company?: string | null
    order_type?: string | null
    vendor?: string | null
    catalog_id?: string | null
    quantity?: number | null
    minimum_quantity?: number | null
    maximum_quantity?: number | null
    description?: string | null
    extra?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
    images?: imagesCreateNestedOneWithoutStockInput
  }

  export type stockUncheckedCreateWithoutLab_stock_labTolabInput = {
    id?: number
    name?: string | null
    importer_company?: string | null
    order_type?: string | null
    vendor?: string | null
    catalog_id?: string | null
    quantity?: number | null
    image?: string | null
    minimum_quantity?: number | null
    maximum_quantity?: number | null
    description?: string | null
    extra?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type stockCreateOrConnectWithoutLab_stock_labTolabInput = {
    where: stockWhereUniqueInput
    create: XOR<stockCreateWithoutLab_stock_labTolabInput, stockUncheckedCreateWithoutLab_stock_labTolabInput>
  }

  export type stockCreateManyLab_stock_labTolabInputEnvelope = {
    data: stockCreateManyLab_stock_labTolabInput | stockCreateManyLab_stock_labTolabInput[]
    skipDuplicates?: boolean
  }

  export type supplierCreateWithoutLab_supplier_labTolabInput = {
    vendor?: string | null
    description?: string | null
  }

  export type supplierUncheckedCreateWithoutLab_supplier_labTolabInput = {
    id?: number
    vendor?: string | null
    description?: string | null
  }

  export type supplierCreateOrConnectWithoutLab_supplier_labTolabInput = {
    where: supplierWhereUniqueInput
    create: XOR<supplierCreateWithoutLab_supplier_labTolabInput, supplierUncheckedCreateWithoutLab_supplier_labTolabInput>
  }

  export type supplierCreateManyLab_supplier_labTolabInputEnvelope = {
    data: supplierCreateManyLab_supplier_labTolabInput | supplierCreateManyLab_supplier_labTolabInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutLab_users_labTolabInput = {
    student_number: string
    password?: string | null
    role?: $Enums.role | null
    status?: $Enums.status | null
    last_login_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type usersUncheckedCreateWithoutLab_users_labTolabInput = {
    id?: number
    student_number: string
    password?: string | null
    role?: $Enums.role | null
    status?: $Enums.status | null
    last_login_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type usersCreateOrConnectWithoutLab_users_labTolabInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLab_users_labTolabInput, usersUncheckedCreateWithoutLab_users_labTolabInput>
  }

  export type usersCreateManyLab_users_labTolabInputEnvelope = {
    data: usersCreateManyLab_users_labTolabInput | usersCreateManyLab_users_labTolabInput[]
    skipDuplicates?: boolean
  }

  export type stockUpsertWithWhereUniqueWithoutLab_stock_labTolabInput = {
    where: stockWhereUniqueInput
    update: XOR<stockUpdateWithoutLab_stock_labTolabInput, stockUncheckedUpdateWithoutLab_stock_labTolabInput>
    create: XOR<stockCreateWithoutLab_stock_labTolabInput, stockUncheckedCreateWithoutLab_stock_labTolabInput>
  }

  export type stockUpdateWithWhereUniqueWithoutLab_stock_labTolabInput = {
    where: stockWhereUniqueInput
    data: XOR<stockUpdateWithoutLab_stock_labTolabInput, stockUncheckedUpdateWithoutLab_stock_labTolabInput>
  }

  export type stockUpdateManyWithWhereWithoutLab_stock_labTolabInput = {
    where: stockScalarWhereInput
    data: XOR<stockUpdateManyMutationInput, stockUncheckedUpdateManyWithoutLab_stock_labTolabInput>
  }

  export type supplierUpsertWithWhereUniqueWithoutLab_supplier_labTolabInput = {
    where: supplierWhereUniqueInput
    update: XOR<supplierUpdateWithoutLab_supplier_labTolabInput, supplierUncheckedUpdateWithoutLab_supplier_labTolabInput>
    create: XOR<supplierCreateWithoutLab_supplier_labTolabInput, supplierUncheckedCreateWithoutLab_supplier_labTolabInput>
  }

  export type supplierUpdateWithWhereUniqueWithoutLab_supplier_labTolabInput = {
    where: supplierWhereUniqueInput
    data: XOR<supplierUpdateWithoutLab_supplier_labTolabInput, supplierUncheckedUpdateWithoutLab_supplier_labTolabInput>
  }

  export type supplierUpdateManyWithWhereWithoutLab_supplier_labTolabInput = {
    where: supplierScalarWhereInput
    data: XOR<supplierUpdateManyMutationInput, supplierUncheckedUpdateManyWithoutLab_supplier_labTolabInput>
  }

  export type supplierScalarWhereInput = {
    AND?: supplierScalarWhereInput | supplierScalarWhereInput[]
    OR?: supplierScalarWhereInput[]
    NOT?: supplierScalarWhereInput | supplierScalarWhereInput[]
    id?: IntFilter<"supplier"> | number
    vendor?: StringNullableFilter<"supplier"> | string | null
    description?: StringNullableFilter<"supplier"> | string | null
    lab?: IntNullableFilter<"supplier"> | number | null
  }

  export type usersUpsertWithWhereUniqueWithoutLab_users_labTolabInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutLab_users_labTolabInput, usersUncheckedUpdateWithoutLab_users_labTolabInput>
    create: XOR<usersCreateWithoutLab_users_labTolabInput, usersUncheckedCreateWithoutLab_users_labTolabInput>
  }

  export type usersUpdateWithWhereUniqueWithoutLab_users_labTolabInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutLab_users_labTolabInput, usersUncheckedUpdateWithoutLab_users_labTolabInput>
  }

  export type usersUpdateManyWithWhereWithoutLab_users_labTolabInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutLab_users_labTolabInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: IntFilter<"users"> | number
    student_number?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    role?: EnumroleNullableFilter<"users"> | $Enums.role | null
    status?: EnumstatusNullableFilter<"users"> | $Enums.status | null
    lab?: IntNullableFilter<"users"> | number | null
    last_login_at?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
  }

  export type imagesCreateWithoutStockInput = {
    id?: string
    key?: string | null
    url: string
    type?: $Enums.type | null
    order?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type imagesUncheckedCreateWithoutStockInput = {
    id?: string
    key?: string | null
    url: string
    type?: $Enums.type | null
    order?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type imagesCreateOrConnectWithoutStockInput = {
    where: imagesWhereUniqueInput
    create: XOR<imagesCreateWithoutStockInput, imagesUncheckedCreateWithoutStockInput>
  }

  export type labCreateWithoutStock_stock_labTolabInput = {
    name?: string | null
    professor?: string | null
    major?: string | null
    school_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    supplier_supplier_labTolab?: supplierCreateNestedManyWithoutLab_supplier_labTolabInput
    users_users_labTolab?: usersCreateNestedManyWithoutLab_users_labTolabInput
  }

  export type labUncheckedCreateWithoutStock_stock_labTolabInput = {
    id?: number
    name?: string | null
    professor?: string | null
    major?: string | null
    school_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    supplier_supplier_labTolab?: supplierUncheckedCreateNestedManyWithoutLab_supplier_labTolabInput
    users_users_labTolab?: usersUncheckedCreateNestedManyWithoutLab_users_labTolabInput
  }

  export type labCreateOrConnectWithoutStock_stock_labTolabInput = {
    where: labWhereUniqueInput
    create: XOR<labCreateWithoutStock_stock_labTolabInput, labUncheckedCreateWithoutStock_stock_labTolabInput>
  }

  export type imagesUpsertWithoutStockInput = {
    update: XOR<imagesUpdateWithoutStockInput, imagesUncheckedUpdateWithoutStockInput>
    create: XOR<imagesCreateWithoutStockInput, imagesUncheckedCreateWithoutStockInput>
    where?: imagesWhereInput
  }

  export type imagesUpdateToOneWithWhereWithoutStockInput = {
    where?: imagesWhereInput
    data: XOR<imagesUpdateWithoutStockInput, imagesUncheckedUpdateWithoutStockInput>
  }

  export type imagesUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumtypeFieldUpdateOperationsInput | $Enums.type | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type imagesUncheckedUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumtypeFieldUpdateOperationsInput | $Enums.type | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type labUpsertWithoutStock_stock_labTolabInput = {
    update: XOR<labUpdateWithoutStock_stock_labTolabInput, labUncheckedUpdateWithoutStock_stock_labTolabInput>
    create: XOR<labCreateWithoutStock_stock_labTolabInput, labUncheckedCreateWithoutStock_stock_labTolabInput>
    where?: labWhereInput
  }

  export type labUpdateToOneWithWhereWithoutStock_stock_labTolabInput = {
    where?: labWhereInput
    data: XOR<labUpdateWithoutStock_stock_labTolabInput, labUncheckedUpdateWithoutStock_stock_labTolabInput>
  }

  export type labUpdateWithoutStock_stock_labTolabInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    professor?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supplier_supplier_labTolab?: supplierUpdateManyWithoutLab_supplier_labTolabNestedInput
    users_users_labTolab?: usersUpdateManyWithoutLab_users_labTolabNestedInput
  }

  export type labUncheckedUpdateWithoutStock_stock_labTolabInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    professor?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supplier_supplier_labTolab?: supplierUncheckedUpdateManyWithoutLab_supplier_labTolabNestedInput
    users_users_labTolab?: usersUncheckedUpdateManyWithoutLab_users_labTolabNestedInput
  }

  export type labCreateWithoutSupplier_supplier_labTolabInput = {
    name?: string | null
    professor?: string | null
    major?: string | null
    school_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    stock_stock_labTolab?: stockCreateNestedManyWithoutLab_stock_labTolabInput
    users_users_labTolab?: usersCreateNestedManyWithoutLab_users_labTolabInput
  }

  export type labUncheckedCreateWithoutSupplier_supplier_labTolabInput = {
    id?: number
    name?: string | null
    professor?: string | null
    major?: string | null
    school_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    stock_stock_labTolab?: stockUncheckedCreateNestedManyWithoutLab_stock_labTolabInput
    users_users_labTolab?: usersUncheckedCreateNestedManyWithoutLab_users_labTolabInput
  }

  export type labCreateOrConnectWithoutSupplier_supplier_labTolabInput = {
    where: labWhereUniqueInput
    create: XOR<labCreateWithoutSupplier_supplier_labTolabInput, labUncheckedCreateWithoutSupplier_supplier_labTolabInput>
  }

  export type labUpsertWithoutSupplier_supplier_labTolabInput = {
    update: XOR<labUpdateWithoutSupplier_supplier_labTolabInput, labUncheckedUpdateWithoutSupplier_supplier_labTolabInput>
    create: XOR<labCreateWithoutSupplier_supplier_labTolabInput, labUncheckedCreateWithoutSupplier_supplier_labTolabInput>
    where?: labWhereInput
  }

  export type labUpdateToOneWithWhereWithoutSupplier_supplier_labTolabInput = {
    where?: labWhereInput
    data: XOR<labUpdateWithoutSupplier_supplier_labTolabInput, labUncheckedUpdateWithoutSupplier_supplier_labTolabInput>
  }

  export type labUpdateWithoutSupplier_supplier_labTolabInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    professor?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock_stock_labTolab?: stockUpdateManyWithoutLab_stock_labTolabNestedInput
    users_users_labTolab?: usersUpdateManyWithoutLab_users_labTolabNestedInput
  }

  export type labUncheckedUpdateWithoutSupplier_supplier_labTolabInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    professor?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock_stock_labTolab?: stockUncheckedUpdateManyWithoutLab_stock_labTolabNestedInput
    users_users_labTolab?: usersUncheckedUpdateManyWithoutLab_users_labTolabNestedInput
  }

  export type labCreateWithoutUsers_users_labTolabInput = {
    name?: string | null
    professor?: string | null
    major?: string | null
    school_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    stock_stock_labTolab?: stockCreateNestedManyWithoutLab_stock_labTolabInput
    supplier_supplier_labTolab?: supplierCreateNestedManyWithoutLab_supplier_labTolabInput
  }

  export type labUncheckedCreateWithoutUsers_users_labTolabInput = {
    id?: number
    name?: string | null
    professor?: string | null
    major?: string | null
    school_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    stock_stock_labTolab?: stockUncheckedCreateNestedManyWithoutLab_stock_labTolabInput
    supplier_supplier_labTolab?: supplierUncheckedCreateNestedManyWithoutLab_supplier_labTolabInput
  }

  export type labCreateOrConnectWithoutUsers_users_labTolabInput = {
    where: labWhereUniqueInput
    create: XOR<labCreateWithoutUsers_users_labTolabInput, labUncheckedCreateWithoutUsers_users_labTolabInput>
  }

  export type labUpsertWithoutUsers_users_labTolabInput = {
    update: XOR<labUpdateWithoutUsers_users_labTolabInput, labUncheckedUpdateWithoutUsers_users_labTolabInput>
    create: XOR<labCreateWithoutUsers_users_labTolabInput, labUncheckedCreateWithoutUsers_users_labTolabInput>
    where?: labWhereInput
  }

  export type labUpdateToOneWithWhereWithoutUsers_users_labTolabInput = {
    where?: labWhereInput
    data: XOR<labUpdateWithoutUsers_users_labTolabInput, labUncheckedUpdateWithoutUsers_users_labTolabInput>
  }

  export type labUpdateWithoutUsers_users_labTolabInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    professor?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock_stock_labTolab?: stockUpdateManyWithoutLab_stock_labTolabNestedInput
    supplier_supplier_labTolab?: supplierUpdateManyWithoutLab_supplier_labTolabNestedInput
  }

  export type labUncheckedUpdateWithoutUsers_users_labTolabInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    professor?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock_stock_labTolab?: stockUncheckedUpdateManyWithoutLab_stock_labTolabNestedInput
    supplier_supplier_labTolab?: supplierUncheckedUpdateManyWithoutLab_supplier_labTolabNestedInput
  }

  export type stockCreateManyImagesInput = {
    id?: number
    name?: string | null
    importer_company?: string | null
    order_type?: string | null
    vendor?: string | null
    catalog_id?: string | null
    quantity?: number | null
    minimum_quantity?: number | null
    maximum_quantity?: number | null
    description?: string | null
    lab?: number | null
    extra?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type stockUpdateWithoutImagesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    importer_company?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    catalog_id?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minimum_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    maximum_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    extra?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lab_stock_labTolab?: labUpdateOneWithoutStock_stock_labTolabNestedInput
  }

  export type stockUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    importer_company?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    catalog_id?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minimum_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    maximum_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lab?: NullableIntFieldUpdateOperationsInput | number | null
    extra?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stockUncheckedUpdateManyWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    importer_company?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    catalog_id?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minimum_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    maximum_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lab?: NullableIntFieldUpdateOperationsInput | number | null
    extra?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stockCreateManyLab_stock_labTolabInput = {
    id?: number
    name?: string | null
    importer_company?: string | null
    order_type?: string | null
    vendor?: string | null
    catalog_id?: string | null
    quantity?: number | null
    image?: string | null
    minimum_quantity?: number | null
    maximum_quantity?: number | null
    description?: string | null
    extra?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type supplierCreateManyLab_supplier_labTolabInput = {
    id?: number
    vendor?: string | null
    description?: string | null
  }

  export type usersCreateManyLab_users_labTolabInput = {
    id?: number
    student_number: string
    password?: string | null
    role?: $Enums.role | null
    status?: $Enums.status | null
    last_login_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type stockUpdateWithoutLab_stock_labTolabInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    importer_company?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    catalog_id?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    minimum_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    maximum_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    extra?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: imagesUpdateOneWithoutStockNestedInput
  }

  export type stockUncheckedUpdateWithoutLab_stock_labTolabInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    importer_company?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    catalog_id?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    minimum_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    maximum_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    extra?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stockUncheckedUpdateManyWithoutLab_stock_labTolabInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    importer_company?: NullableStringFieldUpdateOperationsInput | string | null
    order_type?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    catalog_id?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    minimum_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    maximum_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    extra?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type supplierUpdateWithoutLab_supplier_labTolabInput = {
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type supplierUncheckedUpdateWithoutLab_supplier_labTolabInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type supplierUncheckedUpdateManyWithoutLab_supplier_labTolabInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUpdateWithoutLab_users_labTolabInput = {
    student_number?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumroleFieldUpdateOperationsInput | $Enums.role | null
    status?: NullableEnumstatusFieldUpdateOperationsInput | $Enums.status | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateWithoutLab_users_labTolabInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_number?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumroleFieldUpdateOperationsInput | $Enums.role | null
    status?: NullableEnumstatusFieldUpdateOperationsInput | $Enums.status | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyWithoutLab_users_labTolabInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_number?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumroleFieldUpdateOperationsInput | $Enums.role | null
    status?: NullableEnumstatusFieldUpdateOperationsInput | $Enums.status | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}