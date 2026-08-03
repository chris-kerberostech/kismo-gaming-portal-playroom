# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `kismo-connector`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetUser*](#getuser)
  - [*ListPublicChatrooms*](#listpublicchatrooms)
  - [*GetChatroomMessages*](#getchatroommessages)
  - [*ListChatroomsByOwner*](#listchatroomsbyowner)
  - [*ListChatroomsByCity*](#listchatroomsbycity)
  - [*SearchCities*](#searchcities)
  - [*IsMember*](#ismember)
  - [*GetFriendWith*](#getfriendwith)
  - [*ListFriendWithByUser*](#listfriendwithbyuser)
  - [*ListPendingFriendRequestsReceived*](#listpendingfriendrequestsreceived)
  - [*ListAcceptedFriendConnections*](#listacceptedfriendconnections)
  - [*ListMyChatrooms*](#listmychatrooms)
  - [*GetGlobalStats*](#getglobalstats)
  - [*GetGlobalStat*](#getglobalstat)
  - [*ListActiveSessionsByUser*](#listactivesessionsbyuser)
  - [*ListActiveSessionsGlobal*](#listactivesessionsglobal)
  - [*ListRecentVisitedChatrooms*](#listrecentvisitedchatrooms)
  - [*ListNotificationsByRecipient*](#listnotificationsbyrecipient)
  - [*CountUnreadNotifications*](#countunreadnotifications)
  - [*ListChatroomStatsByChatroomIds*](#listchatroomstatsbychatroomids)
  - [*FetchPlayroomCreatorToken*](#fetchplayroomcreatortoken)
  - [*FetchPlayroomInvitedUserToken*](#fetchplayroominvitedusertoken)
  - [*FetchPlayroomParticipantToken*](#fetchplayroomparticipanttoken)
  - [*FetchPlayroomParticipantUserIds*](#fetchplayroomparticipantuserids)
  - [*FetchPlayroomInvitedUserJoinedAt*](#fetchplayroominviteduserjoinedat)
  - [*FetchPlayroomCreatorUserHeartbeat*](#fetchplayroomcreatoruserheartbeat)
  - [*FetchPlayroomInvitedUserHeartbeat*](#fetchplayroominviteduserheartbeat)
  - [*FetchPlayroomSpectators*](#fetchplayroomspectators)
  - [*FetchPlayroomSpectatorsJoined*](#fetchplayroomspectatorsjoined)
  - [*IsUserInPlayroomSpectators*](#isuserinplayroomspectators)
  - [*ListActivePlayroomSessionsByUserAndGame*](#listactiveplayroomsessionsbyuserandgame)
  - [*GetPlayroomSessionByPlayroomSessionId*](#getplayroomsessionbyplayroomsessionid)
  - [*GetActivePlayroomSessionByPlayroomSessionId*](#getactiveplayroomsessionbyplayroomsessionid)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*CreateChatroom*](#createchatroom)
  - [*JoinChatroom*](#joinchatroom)
  - [*LeaveChatroom*](#leavechatroom)
  - [*SendMessage*](#sendmessage)
  - [*UpdateStatus*](#updatestatus)
  - [*UpdateUserImage*](#updateuserimage)
  - [*UpsertFriendWith*](#upsertfriendwith)
  - [*SendFriendWithRequest*](#sendfriendwithrequest)
  - [*AcceptFriendWithRequest*](#acceptfriendwithrequest)
  - [*AcceptFriendWithRequestBidirectional*](#acceptfriendwithrequestbidirectional)
  - [*RejectFriendWithRequestBidirectional*](#rejectfriendwithrequestbidirectional)
  - [*DeleteFriendWith*](#deletefriendwith)
  - [*UpdateChatroomDetails*](#updatechatroomdetails)
  - [*UpsertChatroomStat*](#upsertchatroomstat)
  - [*UpdateCityName*](#updatecityname)
  - [*DeleteChatroomStat*](#deletechatroomstat)
  - [*UpdateStatValue*](#updatestatvalue)
  - [*UpsertGlobalStat*](#upsertglobalstat)
  - [*OpenChatroomSession*](#openchatroomsession)
  - [*CloseChatroomSession*](#closechatroomsession)
  - [*HeartbeatChatroomSession*](#heartbeatchatroomsession)
  - [*RecordChatroomVisit*](#recordchatroomvisit)
  - [*TrimOldVisits*](#trimoldvisits)
  - [*CreateNotification*](#createnotification)
  - [*MarkNotificationRead*](#marknotificationread)
  - [*MarkAllNotificationsRead*](#markallnotificationsread)
  - [*InitializeChatroomStatsDefaults*](#initializechatroomstatsdefaults)
  - [*IncrementChatroomStat*](#incrementchatroomstat)
  - [*CreatePlayroomSession*](#createplayroomsession)
  - [*UpdatePlayroomSessionDetails*](#updateplayroomsessiondetails)
  - [*UpdatePlayroomInvitedUserJoinedAt*](#updateplayroominviteduserjoinedat)
  - [*DeletePlayroomInvitedUserJoinedAt*](#deleteplayroominviteduserjoinedat)
  - [*UpdatePlayroomCreatorUserHeartbeat*](#updateplayroomcreatoruserheartbeat)
  - [*DeletePlayroomCreatorUserHeartbeat*](#deleteplayroomcreatoruserheartbeat)
  - [*UpdatePlayroomInvitedUserHeartbeat*](#updateplayroominviteduserheartbeat)
  - [*DeletePlayroomInvitedUserHeartbeat*](#deleteplayroominviteduserheartbeat)
  - [*UpdatePlayroomSpectators*](#updateplayroomspectators)
  - [*DeletePlayroomSpectators*](#deleteplayroomspectators)
  - [*UpdatePlayroomSpectatorsJoined*](#updateplayroomspectatorsjoined)
  - [*DeletePlayroomSpectatorsJoined*](#deleteplayroomspectatorsjoined)
  - [*ClosePlayroomSession*](#closeplayroomsession)
  - [*DeletePlayroomSession*](#deleteplayroomsession)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `kismo-connector`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@kismoportal-dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@kismoportal-dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@kismoportal-dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `kismo-connector` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetUser
You can execute the `GetUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUser(vars: GetUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserData, GetUserVariables>;

interface GetUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
}
export const getUserRef: GetUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUser(dc: DataConnect, vars: GetUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserData, GetUserVariables>;

interface GetUserRef {
  ...
  (dc: DataConnect, vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
}
export const getUserRef: GetUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserRef:
```typescript
const name = getUserRef.operationName;
console.log(name);
```

### Variables
The `GetUser` query requires an argument of type `GetUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserData {
  user?: {
    id: UUIDString;
    name: string;
    imageUrl: string;
    onlineStatus?: boolean | null;
    lastSeenAt?: TimestampString | null;
  } & User_Key;
}
```
### Using `GetUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUser, GetUserVariables } from '@kismoportal-dataconnect/generated';

// The `GetUser` query requires an argument of type `GetUserVariables`:
const getUserVars: GetUserVariables = {
  id: ..., 
};

// Call the `getUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUser(getUserVars);
// Variables can be defined inline as well.
const { data } = await getUser({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUser(dataConnect, getUserVars);

console.log(data.user);

// Or, you can use the `Promise` API.
getUser(getUserVars).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserRef, GetUserVariables } from '@kismoportal-dataconnect/generated';

// The `GetUser` query requires an argument of type `GetUserVariables`:
const getUserVars: GetUserVariables = {
  id: ..., 
};

// Call the `getUserRef()` function to get a reference to the query.
const ref = getUserRef(getUserVars);
// Variables can be defined inline as well.
const ref = getUserRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserRef(dataConnect, getUserVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## ListPublicChatrooms
You can execute the `ListPublicChatrooms` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listPublicChatrooms(vars?: ListPublicChatroomsVariables, options?: ExecuteQueryOptions): QueryPromise<ListPublicChatroomsData, ListPublicChatroomsVariables>;

interface ListPublicChatroomsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListPublicChatroomsVariables): QueryRef<ListPublicChatroomsData, ListPublicChatroomsVariables>;
}
export const listPublicChatroomsRef: ListPublicChatroomsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPublicChatrooms(dc: DataConnect, vars?: ListPublicChatroomsVariables, options?: ExecuteQueryOptions): QueryPromise<ListPublicChatroomsData, ListPublicChatroomsVariables>;

interface ListPublicChatroomsRef {
  ...
  (dc: DataConnect, vars?: ListPublicChatroomsVariables): QueryRef<ListPublicChatroomsData, ListPublicChatroomsVariables>;
}
export const listPublicChatroomsRef: ListPublicChatroomsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPublicChatroomsRef:
```typescript
const name = listPublicChatroomsRef.operationName;
console.log(name);
```

### Variables
The `ListPublicChatrooms` query has an optional argument of type `ListPublicChatroomsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListPublicChatroomsVariables {
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that executing the `ListPublicChatrooms` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPublicChatroomsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListPublicChatroomsData {
  chatrooms: ({
    id: UUIDString;
    name: string;
    imageUrl?: string | null;
    description?: string | null;
    imageAtribution?: string | null;
    owner: {
      name: string;
    };
    city?: {
      name: string;
      country: string;
    };
  } & Chatroom_Key)[];
}
```
### Using `ListPublicChatrooms`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPublicChatrooms, ListPublicChatroomsVariables } from '@kismoportal-dataconnect/generated';

// The `ListPublicChatrooms` query has an optional argument of type `ListPublicChatroomsVariables`:
const listPublicChatroomsVars: ListPublicChatroomsVariables = {
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `listPublicChatrooms()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPublicChatrooms(listPublicChatroomsVars);
// Variables can be defined inline as well.
const { data } = await listPublicChatrooms({ limit: ..., offset: ..., });
// Since all variables are optional for this query, you can omit the `ListPublicChatroomsVariables` argument.
const { data } = await listPublicChatrooms();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPublicChatrooms(dataConnect, listPublicChatroomsVars);

console.log(data.chatrooms);

// Or, you can use the `Promise` API.
listPublicChatrooms(listPublicChatroomsVars).then((response) => {
  const data = response.data;
  console.log(data.chatrooms);
});
```

### Using `ListPublicChatrooms`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPublicChatroomsRef, ListPublicChatroomsVariables } from '@kismoportal-dataconnect/generated';

// The `ListPublicChatrooms` query has an optional argument of type `ListPublicChatroomsVariables`:
const listPublicChatroomsVars: ListPublicChatroomsVariables = {
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `listPublicChatroomsRef()` function to get a reference to the query.
const ref = listPublicChatroomsRef(listPublicChatroomsVars);
// Variables can be defined inline as well.
const ref = listPublicChatroomsRef({ limit: ..., offset: ..., });
// Since all variables are optional for this query, you can omit the `ListPublicChatroomsVariables` argument.
const ref = listPublicChatroomsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPublicChatroomsRef(dataConnect, listPublicChatroomsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.chatrooms);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.chatrooms);
});
```

## GetChatroomMessages
You can execute the `GetChatroomMessages` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getChatroomMessages(vars: GetChatroomMessagesVariables, options?: ExecuteQueryOptions): QueryPromise<GetChatroomMessagesData, GetChatroomMessagesVariables>;

interface GetChatroomMessagesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetChatroomMessagesVariables): QueryRef<GetChatroomMessagesData, GetChatroomMessagesVariables>;
}
export const getChatroomMessagesRef: GetChatroomMessagesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getChatroomMessages(dc: DataConnect, vars: GetChatroomMessagesVariables, options?: ExecuteQueryOptions): QueryPromise<GetChatroomMessagesData, GetChatroomMessagesVariables>;

interface GetChatroomMessagesRef {
  ...
  (dc: DataConnect, vars: GetChatroomMessagesVariables): QueryRef<GetChatroomMessagesData, GetChatroomMessagesVariables>;
}
export const getChatroomMessagesRef: GetChatroomMessagesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getChatroomMessagesRef:
```typescript
const name = getChatroomMessagesRef.operationName;
console.log(name);
```

### Variables
The `GetChatroomMessages` query requires an argument of type `GetChatroomMessagesVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetChatroomMessagesVariables {
  chatroomId: UUIDString;
  limit?: number | null;
  beforeTimestamp?: TimestampString | null;
  beforeId?: UUIDString | null;
}
```
### Return Type
Recall that executing the `GetChatroomMessages` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetChatroomMessagesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetChatroomMessagesData {
  messages: ({
    id: UUIDString;
    text?: string | null;
    imageUrl?: string | null;
    timestamp: TimestampString;
    sender: {
      id: UUIDString;
      name: string;
      imageUrl: string;
    } & User_Key;
  } & Message_Key)[];
}
```
### Using `GetChatroomMessages`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getChatroomMessages, GetChatroomMessagesVariables } from '@kismoportal-dataconnect/generated';

// The `GetChatroomMessages` query requires an argument of type `GetChatroomMessagesVariables`:
const getChatroomMessagesVars: GetChatroomMessagesVariables = {
  chatroomId: ..., 
  limit: ..., // optional
  beforeTimestamp: ..., // optional
  beforeId: ..., // optional
};

// Call the `getChatroomMessages()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getChatroomMessages(getChatroomMessagesVars);
// Variables can be defined inline as well.
const { data } = await getChatroomMessages({ chatroomId: ..., limit: ..., beforeTimestamp: ..., beforeId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getChatroomMessages(dataConnect, getChatroomMessagesVars);

console.log(data.messages);

// Or, you can use the `Promise` API.
getChatroomMessages(getChatroomMessagesVars).then((response) => {
  const data = response.data;
  console.log(data.messages);
});
```

### Using `GetChatroomMessages`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getChatroomMessagesRef, GetChatroomMessagesVariables } from '@kismoportal-dataconnect/generated';

// The `GetChatroomMessages` query requires an argument of type `GetChatroomMessagesVariables`:
const getChatroomMessagesVars: GetChatroomMessagesVariables = {
  chatroomId: ..., 
  limit: ..., // optional
  beforeTimestamp: ..., // optional
  beforeId: ..., // optional
};

// Call the `getChatroomMessagesRef()` function to get a reference to the query.
const ref = getChatroomMessagesRef(getChatroomMessagesVars);
// Variables can be defined inline as well.
const ref = getChatroomMessagesRef({ chatroomId: ..., limit: ..., beforeTimestamp: ..., beforeId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getChatroomMessagesRef(dataConnect, getChatroomMessagesVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.messages);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.messages);
});
```

## ListChatroomsByOwner
You can execute the `ListChatroomsByOwner` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listChatroomsByOwner(vars: ListChatroomsByOwnerVariables, options?: ExecuteQueryOptions): QueryPromise<ListChatroomsByOwnerData, ListChatroomsByOwnerVariables>;

interface ListChatroomsByOwnerRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListChatroomsByOwnerVariables): QueryRef<ListChatroomsByOwnerData, ListChatroomsByOwnerVariables>;
}
export const listChatroomsByOwnerRef: ListChatroomsByOwnerRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listChatroomsByOwner(dc: DataConnect, vars: ListChatroomsByOwnerVariables, options?: ExecuteQueryOptions): QueryPromise<ListChatroomsByOwnerData, ListChatroomsByOwnerVariables>;

interface ListChatroomsByOwnerRef {
  ...
  (dc: DataConnect, vars: ListChatroomsByOwnerVariables): QueryRef<ListChatroomsByOwnerData, ListChatroomsByOwnerVariables>;
}
export const listChatroomsByOwnerRef: ListChatroomsByOwnerRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listChatroomsByOwnerRef:
```typescript
const name = listChatroomsByOwnerRef.operationName;
console.log(name);
```

### Variables
The `ListChatroomsByOwner` query requires an argument of type `ListChatroomsByOwnerVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListChatroomsByOwnerVariables {
  ownerId: UUIDString;
}
```
### Return Type
Recall that executing the `ListChatroomsByOwner` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListChatroomsByOwnerData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListChatroomsByOwnerData {
  chatrooms: ({
    id: UUIDString;
    name: string;
    imageUrl?: string | null;
    description?: string | null;
    imageAtribution?: string | null;
    isPublic: boolean;
    city?: {
      name: string;
      country: string;
    };
  } & Chatroom_Key)[];
}
```
### Using `ListChatroomsByOwner`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listChatroomsByOwner, ListChatroomsByOwnerVariables } from '@kismoportal-dataconnect/generated';

// The `ListChatroomsByOwner` query requires an argument of type `ListChatroomsByOwnerVariables`:
const listChatroomsByOwnerVars: ListChatroomsByOwnerVariables = {
  ownerId: ..., 
};

// Call the `listChatroomsByOwner()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listChatroomsByOwner(listChatroomsByOwnerVars);
// Variables can be defined inline as well.
const { data } = await listChatroomsByOwner({ ownerId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listChatroomsByOwner(dataConnect, listChatroomsByOwnerVars);

console.log(data.chatrooms);

// Or, you can use the `Promise` API.
listChatroomsByOwner(listChatroomsByOwnerVars).then((response) => {
  const data = response.data;
  console.log(data.chatrooms);
});
```

### Using `ListChatroomsByOwner`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listChatroomsByOwnerRef, ListChatroomsByOwnerVariables } from '@kismoportal-dataconnect/generated';

// The `ListChatroomsByOwner` query requires an argument of type `ListChatroomsByOwnerVariables`:
const listChatroomsByOwnerVars: ListChatroomsByOwnerVariables = {
  ownerId: ..., 
};

// Call the `listChatroomsByOwnerRef()` function to get a reference to the query.
const ref = listChatroomsByOwnerRef(listChatroomsByOwnerVars);
// Variables can be defined inline as well.
const ref = listChatroomsByOwnerRef({ ownerId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listChatroomsByOwnerRef(dataConnect, listChatroomsByOwnerVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.chatrooms);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.chatrooms);
});
```

## ListChatroomsByCity
You can execute the `ListChatroomsByCity` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listChatroomsByCity(vars: ListChatroomsByCityVariables, options?: ExecuteQueryOptions): QueryPromise<ListChatroomsByCityData, ListChatroomsByCityVariables>;

interface ListChatroomsByCityRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListChatroomsByCityVariables): QueryRef<ListChatroomsByCityData, ListChatroomsByCityVariables>;
}
export const listChatroomsByCityRef: ListChatroomsByCityRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listChatroomsByCity(dc: DataConnect, vars: ListChatroomsByCityVariables, options?: ExecuteQueryOptions): QueryPromise<ListChatroomsByCityData, ListChatroomsByCityVariables>;

interface ListChatroomsByCityRef {
  ...
  (dc: DataConnect, vars: ListChatroomsByCityVariables): QueryRef<ListChatroomsByCityData, ListChatroomsByCityVariables>;
}
export const listChatroomsByCityRef: ListChatroomsByCityRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listChatroomsByCityRef:
```typescript
const name = listChatroomsByCityRef.operationName;
console.log(name);
```

### Variables
The `ListChatroomsByCity` query requires an argument of type `ListChatroomsByCityVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListChatroomsByCityVariables {
  geonameid: Int64String;
}
```
### Return Type
Recall that executing the `ListChatroomsByCity` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListChatroomsByCityData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListChatroomsByCityData {
  chatrooms: ({
    id: UUIDString;
    name: string;
    imageUrl?: string | null;
    description?: string | null;
    imageAtribution?: string | null;
    owner: {
      name: string;
      imageUrl: string;
    };
  } & Chatroom_Key)[];
}
```
### Using `ListChatroomsByCity`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listChatroomsByCity, ListChatroomsByCityVariables } from '@kismoportal-dataconnect/generated';

// The `ListChatroomsByCity` query requires an argument of type `ListChatroomsByCityVariables`:
const listChatroomsByCityVars: ListChatroomsByCityVariables = {
  geonameid: ..., 
};

// Call the `listChatroomsByCity()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listChatroomsByCity(listChatroomsByCityVars);
// Variables can be defined inline as well.
const { data } = await listChatroomsByCity({ geonameid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listChatroomsByCity(dataConnect, listChatroomsByCityVars);

console.log(data.chatrooms);

// Or, you can use the `Promise` API.
listChatroomsByCity(listChatroomsByCityVars).then((response) => {
  const data = response.data;
  console.log(data.chatrooms);
});
```

### Using `ListChatroomsByCity`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listChatroomsByCityRef, ListChatroomsByCityVariables } from '@kismoportal-dataconnect/generated';

// The `ListChatroomsByCity` query requires an argument of type `ListChatroomsByCityVariables`:
const listChatroomsByCityVars: ListChatroomsByCityVariables = {
  geonameid: ..., 
};

// Call the `listChatroomsByCityRef()` function to get a reference to the query.
const ref = listChatroomsByCityRef(listChatroomsByCityVars);
// Variables can be defined inline as well.
const ref = listChatroomsByCityRef({ geonameid: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listChatroomsByCityRef(dataConnect, listChatroomsByCityVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.chatrooms);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.chatrooms);
});
```

## SearchCities
You can execute the `SearchCities` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
searchCities(vars: SearchCitiesVariables, options?: ExecuteQueryOptions): QueryPromise<SearchCitiesData, SearchCitiesVariables>;

interface SearchCitiesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: SearchCitiesVariables): QueryRef<SearchCitiesData, SearchCitiesVariables>;
}
export const searchCitiesRef: SearchCitiesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
searchCities(dc: DataConnect, vars: SearchCitiesVariables, options?: ExecuteQueryOptions): QueryPromise<SearchCitiesData, SearchCitiesVariables>;

interface SearchCitiesRef {
  ...
  (dc: DataConnect, vars: SearchCitiesVariables): QueryRef<SearchCitiesData, SearchCitiesVariables>;
}
export const searchCitiesRef: SearchCitiesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the searchCitiesRef:
```typescript
const name = searchCitiesRef.operationName;
console.log(name);
```

### Variables
The `SearchCities` query requires an argument of type `SearchCitiesVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface SearchCitiesVariables {
  pattern: string;
}
```
### Return Type
Recall that executing the `SearchCities` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `SearchCitiesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface SearchCitiesData {
  cities: ({
    geonameid: Int64String;
    name: string;
    country: string;
    subcountry?: string | null;
  } & City_Key)[];
}
```
### Using `SearchCities`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, searchCities, SearchCitiesVariables } from '@kismoportal-dataconnect/generated';

// The `SearchCities` query requires an argument of type `SearchCitiesVariables`:
const searchCitiesVars: SearchCitiesVariables = {
  pattern: ..., 
};

// Call the `searchCities()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await searchCities(searchCitiesVars);
// Variables can be defined inline as well.
const { data } = await searchCities({ pattern: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await searchCities(dataConnect, searchCitiesVars);

console.log(data.cities);

// Or, you can use the `Promise` API.
searchCities(searchCitiesVars).then((response) => {
  const data = response.data;
  console.log(data.cities);
});
```

### Using `SearchCities`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, searchCitiesRef, SearchCitiesVariables } from '@kismoportal-dataconnect/generated';

// The `SearchCities` query requires an argument of type `SearchCitiesVariables`:
const searchCitiesVars: SearchCitiesVariables = {
  pattern: ..., 
};

// Call the `searchCitiesRef()` function to get a reference to the query.
const ref = searchCitiesRef(searchCitiesVars);
// Variables can be defined inline as well.
const ref = searchCitiesRef({ pattern: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = searchCitiesRef(dataConnect, searchCitiesVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.cities);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.cities);
});
```

## IsMember
You can execute the `IsMember` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
isMember(vars: IsMemberVariables, options?: ExecuteQueryOptions): QueryPromise<IsMemberData, IsMemberVariables>;

interface IsMemberRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: IsMemberVariables): QueryRef<IsMemberData, IsMemberVariables>;
}
export const isMemberRef: IsMemberRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
isMember(dc: DataConnect, vars: IsMemberVariables, options?: ExecuteQueryOptions): QueryPromise<IsMemberData, IsMemberVariables>;

interface IsMemberRef {
  ...
  (dc: DataConnect, vars: IsMemberVariables): QueryRef<IsMemberData, IsMemberVariables>;
}
export const isMemberRef: IsMemberRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the isMemberRef:
```typescript
const name = isMemberRef.operationName;
console.log(name);
```

### Variables
The `IsMember` query requires an argument of type `IsMemberVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface IsMemberVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
}
```
### Return Type
Recall that executing the `IsMember` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `IsMemberData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface IsMemberData {
  chatroomMember?: {
    joinedAt?: TimestampString | null;
  };
}
```
### Using `IsMember`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, isMember, IsMemberVariables } from '@kismoportal-dataconnect/generated';

// The `IsMember` query requires an argument of type `IsMemberVariables`:
const isMemberVars: IsMemberVariables = {
  userId: ..., 
  chatroomId: ..., 
};

// Call the `isMember()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await isMember(isMemberVars);
// Variables can be defined inline as well.
const { data } = await isMember({ userId: ..., chatroomId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await isMember(dataConnect, isMemberVars);

console.log(data.chatroomMember);

// Or, you can use the `Promise` API.
isMember(isMemberVars).then((response) => {
  const data = response.data;
  console.log(data.chatroomMember);
});
```

### Using `IsMember`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, isMemberRef, IsMemberVariables } from '@kismoportal-dataconnect/generated';

// The `IsMember` query requires an argument of type `IsMemberVariables`:
const isMemberVars: IsMemberVariables = {
  userId: ..., 
  chatroomId: ..., 
};

// Call the `isMemberRef()` function to get a reference to the query.
const ref = isMemberRef(isMemberVars);
// Variables can be defined inline as well.
const ref = isMemberRef({ userId: ..., chatroomId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = isMemberRef(dataConnect, isMemberVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.chatroomMember);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.chatroomMember);
});
```

## GetFriendWith
You can execute the `GetFriendWith` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getFriendWith(vars: GetFriendWithVariables, options?: ExecuteQueryOptions): QueryPromise<GetFriendWithData, GetFriendWithVariables>;

interface GetFriendWithRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetFriendWithVariables): QueryRef<GetFriendWithData, GetFriendWithVariables>;
}
export const getFriendWithRef: GetFriendWithRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getFriendWith(dc: DataConnect, vars: GetFriendWithVariables, options?: ExecuteQueryOptions): QueryPromise<GetFriendWithData, GetFriendWithVariables>;

interface GetFriendWithRef {
  ...
  (dc: DataConnect, vars: GetFriendWithVariables): QueryRef<GetFriendWithData, GetFriendWithVariables>;
}
export const getFriendWithRef: GetFriendWithRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getFriendWithRef:
```typescript
const name = getFriendWithRef.operationName;
console.log(name);
```

### Variables
The `GetFriendWith` query requires an argument of type `GetFriendWithVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetFriendWithVariables {
  userId: UUIDString;
  friendWithUserId: UUIDString;
}
```
### Return Type
Recall that executing the `GetFriendWith` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetFriendWithData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetFriendWithData {
  friendWith?: {
    userId: UUIDString;
    friendWithUserId: UUIDString;
    requestSent: boolean;
    requestSentAt?: TimestampString | null;
    requestAccepted: boolean;
    requestAcceptedAt?: TimestampString | null;
    user: {
      id: UUIDString;
      name: string;
      imageUrl: string;
      onlineStatus?: boolean | null;
      lastSeenAt?: TimestampString | null;
    } & User_Key;
    friendWithUser: {
      id: UUIDString;
      name: string;
      imageUrl: string;
      onlineStatus?: boolean | null;
      lastSeenAt?: TimestampString | null;
    } & User_Key;
  } & FriendWith_Key;
}
```
### Using `GetFriendWith`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getFriendWith, GetFriendWithVariables } from '@kismoportal-dataconnect/generated';

// The `GetFriendWith` query requires an argument of type `GetFriendWithVariables`:
const getFriendWithVars: GetFriendWithVariables = {
  userId: ..., 
  friendWithUserId: ..., 
};

// Call the `getFriendWith()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getFriendWith(getFriendWithVars);
// Variables can be defined inline as well.
const { data } = await getFriendWith({ userId: ..., friendWithUserId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getFriendWith(dataConnect, getFriendWithVars);

console.log(data.friendWith);

// Or, you can use the `Promise` API.
getFriendWith(getFriendWithVars).then((response) => {
  const data = response.data;
  console.log(data.friendWith);
});
```

### Using `GetFriendWith`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getFriendWithRef, GetFriendWithVariables } from '@kismoportal-dataconnect/generated';

// The `GetFriendWith` query requires an argument of type `GetFriendWithVariables`:
const getFriendWithVars: GetFriendWithVariables = {
  userId: ..., 
  friendWithUserId: ..., 
};

// Call the `getFriendWithRef()` function to get a reference to the query.
const ref = getFriendWithRef(getFriendWithVars);
// Variables can be defined inline as well.
const ref = getFriendWithRef({ userId: ..., friendWithUserId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getFriendWithRef(dataConnect, getFriendWithVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.friendWith);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.friendWith);
});
```

## ListFriendWithByUser
You can execute the `ListFriendWithByUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listFriendWithByUser(vars: ListFriendWithByUserVariables, options?: ExecuteQueryOptions): QueryPromise<ListFriendWithByUserData, ListFriendWithByUserVariables>;

interface ListFriendWithByUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListFriendWithByUserVariables): QueryRef<ListFriendWithByUserData, ListFriendWithByUserVariables>;
}
export const listFriendWithByUserRef: ListFriendWithByUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listFriendWithByUser(dc: DataConnect, vars: ListFriendWithByUserVariables, options?: ExecuteQueryOptions): QueryPromise<ListFriendWithByUserData, ListFriendWithByUserVariables>;

interface ListFriendWithByUserRef {
  ...
  (dc: DataConnect, vars: ListFriendWithByUserVariables): QueryRef<ListFriendWithByUserData, ListFriendWithByUserVariables>;
}
export const listFriendWithByUserRef: ListFriendWithByUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listFriendWithByUserRef:
```typescript
const name = listFriendWithByUserRef.operationName;
console.log(name);
```

### Variables
The `ListFriendWithByUser` query requires an argument of type `ListFriendWithByUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListFriendWithByUserVariables {
  userId: UUIDString;
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that executing the `ListFriendWithByUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListFriendWithByUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListFriendWithByUserData {
  friendWiths: ({
    userId: UUIDString;
    friendWithUserId: UUIDString;
    requestSent: boolean;
    requestSentAt?: TimestampString | null;
    requestAccepted: boolean;
    requestAcceptedAt?: TimestampString | null;
    friendWithUser: {
      id: UUIDString;
      name: string;
      imageUrl: string;
      onlineStatus?: boolean | null;
      lastSeenAt?: TimestampString | null;
    } & User_Key;
  } & FriendWith_Key)[];
}
```
### Using `ListFriendWithByUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listFriendWithByUser, ListFriendWithByUserVariables } from '@kismoportal-dataconnect/generated';

// The `ListFriendWithByUser` query requires an argument of type `ListFriendWithByUserVariables`:
const listFriendWithByUserVars: ListFriendWithByUserVariables = {
  userId: ..., 
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `listFriendWithByUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listFriendWithByUser(listFriendWithByUserVars);
// Variables can be defined inline as well.
const { data } = await listFriendWithByUser({ userId: ..., limit: ..., offset: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listFriendWithByUser(dataConnect, listFriendWithByUserVars);

console.log(data.friendWiths);

// Or, you can use the `Promise` API.
listFriendWithByUser(listFriendWithByUserVars).then((response) => {
  const data = response.data;
  console.log(data.friendWiths);
});
```

### Using `ListFriendWithByUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listFriendWithByUserRef, ListFriendWithByUserVariables } from '@kismoportal-dataconnect/generated';

// The `ListFriendWithByUser` query requires an argument of type `ListFriendWithByUserVariables`:
const listFriendWithByUserVars: ListFriendWithByUserVariables = {
  userId: ..., 
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `listFriendWithByUserRef()` function to get a reference to the query.
const ref = listFriendWithByUserRef(listFriendWithByUserVars);
// Variables can be defined inline as well.
const ref = listFriendWithByUserRef({ userId: ..., limit: ..., offset: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listFriendWithByUserRef(dataConnect, listFriendWithByUserVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.friendWiths);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.friendWiths);
});
```

## ListPendingFriendRequestsReceived
You can execute the `ListPendingFriendRequestsReceived` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listPendingFriendRequestsReceived(vars: ListPendingFriendRequestsReceivedVariables, options?: ExecuteQueryOptions): QueryPromise<ListPendingFriendRequestsReceivedData, ListPendingFriendRequestsReceivedVariables>;

interface ListPendingFriendRequestsReceivedRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListPendingFriendRequestsReceivedVariables): QueryRef<ListPendingFriendRequestsReceivedData, ListPendingFriendRequestsReceivedVariables>;
}
export const listPendingFriendRequestsReceivedRef: ListPendingFriendRequestsReceivedRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPendingFriendRequestsReceived(dc: DataConnect, vars: ListPendingFriendRequestsReceivedVariables, options?: ExecuteQueryOptions): QueryPromise<ListPendingFriendRequestsReceivedData, ListPendingFriendRequestsReceivedVariables>;

interface ListPendingFriendRequestsReceivedRef {
  ...
  (dc: DataConnect, vars: ListPendingFriendRequestsReceivedVariables): QueryRef<ListPendingFriendRequestsReceivedData, ListPendingFriendRequestsReceivedVariables>;
}
export const listPendingFriendRequestsReceivedRef: ListPendingFriendRequestsReceivedRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPendingFriendRequestsReceivedRef:
```typescript
const name = listPendingFriendRequestsReceivedRef.operationName;
console.log(name);
```

### Variables
The `ListPendingFriendRequestsReceived` query requires an argument of type `ListPendingFriendRequestsReceivedVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListPendingFriendRequestsReceivedVariables {
  friendWithUserId: UUIDString;
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that executing the `ListPendingFriendRequestsReceived` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPendingFriendRequestsReceivedData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListPendingFriendRequestsReceivedData {
  friendWiths: ({
    userId: UUIDString;
    friendWithUserId: UUIDString;
    requestSent: boolean;
    requestSentAt?: TimestampString | null;
    requestAccepted: boolean;
    requestAcceptedAt?: TimestampString | null;
    user: {
      id: UUIDString;
      name: string;
      imageUrl: string;
      onlineStatus?: boolean | null;
      lastSeenAt?: TimestampString | null;
    } & User_Key;
  } & FriendWith_Key)[];
}
```
### Using `ListPendingFriendRequestsReceived`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPendingFriendRequestsReceived, ListPendingFriendRequestsReceivedVariables } from '@kismoportal-dataconnect/generated';

// The `ListPendingFriendRequestsReceived` query requires an argument of type `ListPendingFriendRequestsReceivedVariables`:
const listPendingFriendRequestsReceivedVars: ListPendingFriendRequestsReceivedVariables = {
  friendWithUserId: ..., 
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `listPendingFriendRequestsReceived()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPendingFriendRequestsReceived(listPendingFriendRequestsReceivedVars);
// Variables can be defined inline as well.
const { data } = await listPendingFriendRequestsReceived({ friendWithUserId: ..., limit: ..., offset: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPendingFriendRequestsReceived(dataConnect, listPendingFriendRequestsReceivedVars);

console.log(data.friendWiths);

// Or, you can use the `Promise` API.
listPendingFriendRequestsReceived(listPendingFriendRequestsReceivedVars).then((response) => {
  const data = response.data;
  console.log(data.friendWiths);
});
```

### Using `ListPendingFriendRequestsReceived`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPendingFriendRequestsReceivedRef, ListPendingFriendRequestsReceivedVariables } from '@kismoportal-dataconnect/generated';

// The `ListPendingFriendRequestsReceived` query requires an argument of type `ListPendingFriendRequestsReceivedVariables`:
const listPendingFriendRequestsReceivedVars: ListPendingFriendRequestsReceivedVariables = {
  friendWithUserId: ..., 
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `listPendingFriendRequestsReceivedRef()` function to get a reference to the query.
const ref = listPendingFriendRequestsReceivedRef(listPendingFriendRequestsReceivedVars);
// Variables can be defined inline as well.
const ref = listPendingFriendRequestsReceivedRef({ friendWithUserId: ..., limit: ..., offset: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPendingFriendRequestsReceivedRef(dataConnect, listPendingFriendRequestsReceivedVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.friendWiths);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.friendWiths);
});
```

## ListAcceptedFriendConnections
You can execute the `ListAcceptedFriendConnections` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listAcceptedFriendConnections(vars: ListAcceptedFriendConnectionsVariables, options?: ExecuteQueryOptions): QueryPromise<ListAcceptedFriendConnectionsData, ListAcceptedFriendConnectionsVariables>;

interface ListAcceptedFriendConnectionsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListAcceptedFriendConnectionsVariables): QueryRef<ListAcceptedFriendConnectionsData, ListAcceptedFriendConnectionsVariables>;
}
export const listAcceptedFriendConnectionsRef: ListAcceptedFriendConnectionsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAcceptedFriendConnections(dc: DataConnect, vars: ListAcceptedFriendConnectionsVariables, options?: ExecuteQueryOptions): QueryPromise<ListAcceptedFriendConnectionsData, ListAcceptedFriendConnectionsVariables>;

interface ListAcceptedFriendConnectionsRef {
  ...
  (dc: DataConnect, vars: ListAcceptedFriendConnectionsVariables): QueryRef<ListAcceptedFriendConnectionsData, ListAcceptedFriendConnectionsVariables>;
}
export const listAcceptedFriendConnectionsRef: ListAcceptedFriendConnectionsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAcceptedFriendConnectionsRef:
```typescript
const name = listAcceptedFriendConnectionsRef.operationName;
console.log(name);
```

### Variables
The `ListAcceptedFriendConnections` query requires an argument of type `ListAcceptedFriendConnectionsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListAcceptedFriendConnectionsVariables {
  userId: UUIDString;
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that executing the `ListAcceptedFriendConnections` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAcceptedFriendConnectionsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListAcceptedFriendConnectionsData {
  friendWiths: ({
    userId: UUIDString;
    friendWithUserId: UUIDString;
    requestSent: boolean;
    requestSentAt?: TimestampString | null;
    requestAccepted: boolean;
    requestAcceptedAt?: TimestampString | null;
    user: {
      id: UUIDString;
      name: string;
      imageUrl: string;
      onlineStatus?: boolean | null;
      lastSeenAt?: TimestampString | null;
    } & User_Key;
    friendWithUser: {
      id: UUIDString;
      name: string;
      imageUrl: string;
      onlineStatus?: boolean | null;
      lastSeenAt?: TimestampString | null;
    } & User_Key;
  } & FriendWith_Key)[];
}
```
### Using `ListAcceptedFriendConnections`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAcceptedFriendConnections, ListAcceptedFriendConnectionsVariables } from '@kismoportal-dataconnect/generated';

// The `ListAcceptedFriendConnections` query requires an argument of type `ListAcceptedFriendConnectionsVariables`:
const listAcceptedFriendConnectionsVars: ListAcceptedFriendConnectionsVariables = {
  userId: ..., 
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `listAcceptedFriendConnections()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAcceptedFriendConnections(listAcceptedFriendConnectionsVars);
// Variables can be defined inline as well.
const { data } = await listAcceptedFriendConnections({ userId: ..., limit: ..., offset: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAcceptedFriendConnections(dataConnect, listAcceptedFriendConnectionsVars);

console.log(data.friendWiths);

// Or, you can use the `Promise` API.
listAcceptedFriendConnections(listAcceptedFriendConnectionsVars).then((response) => {
  const data = response.data;
  console.log(data.friendWiths);
});
```

### Using `ListAcceptedFriendConnections`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAcceptedFriendConnectionsRef, ListAcceptedFriendConnectionsVariables } from '@kismoportal-dataconnect/generated';

// The `ListAcceptedFriendConnections` query requires an argument of type `ListAcceptedFriendConnectionsVariables`:
const listAcceptedFriendConnectionsVars: ListAcceptedFriendConnectionsVariables = {
  userId: ..., 
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `listAcceptedFriendConnectionsRef()` function to get a reference to the query.
const ref = listAcceptedFriendConnectionsRef(listAcceptedFriendConnectionsVars);
// Variables can be defined inline as well.
const ref = listAcceptedFriendConnectionsRef({ userId: ..., limit: ..., offset: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAcceptedFriendConnectionsRef(dataConnect, listAcceptedFriendConnectionsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.friendWiths);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.friendWiths);
});
```

## ListMyChatrooms
You can execute the `ListMyChatrooms` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyChatrooms(vars: ListMyChatroomsVariables, options?: ExecuteQueryOptions): QueryPromise<ListMyChatroomsData, ListMyChatroomsVariables>;

interface ListMyChatroomsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListMyChatroomsVariables): QueryRef<ListMyChatroomsData, ListMyChatroomsVariables>;
}
export const listMyChatroomsRef: ListMyChatroomsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyChatrooms(dc: DataConnect, vars: ListMyChatroomsVariables, options?: ExecuteQueryOptions): QueryPromise<ListMyChatroomsData, ListMyChatroomsVariables>;

interface ListMyChatroomsRef {
  ...
  (dc: DataConnect, vars: ListMyChatroomsVariables): QueryRef<ListMyChatroomsData, ListMyChatroomsVariables>;
}
export const listMyChatroomsRef: ListMyChatroomsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyChatroomsRef:
```typescript
const name = listMyChatroomsRef.operationName;
console.log(name);
```

### Variables
The `ListMyChatrooms` query requires an argument of type `ListMyChatroomsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListMyChatroomsVariables {
  userId: UUIDString;
}
```
### Return Type
Recall that executing the `ListMyChatrooms` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyChatroomsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyChatroomsData {
  chatroomMembers: ({
    chatroom: {
      id: UUIDString;
      name: string;
      imageUrl?: string | null;
      description?: string | null;
      imageAtribution?: string | null;
    } & Chatroom_Key;
  })[];
}
```
### Using `ListMyChatrooms`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyChatrooms, ListMyChatroomsVariables } from '@kismoportal-dataconnect/generated';

// The `ListMyChatrooms` query requires an argument of type `ListMyChatroomsVariables`:
const listMyChatroomsVars: ListMyChatroomsVariables = {
  userId: ..., 
};

// Call the `listMyChatrooms()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyChatrooms(listMyChatroomsVars);
// Variables can be defined inline as well.
const { data } = await listMyChatrooms({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyChatrooms(dataConnect, listMyChatroomsVars);

console.log(data.chatroomMembers);

// Or, you can use the `Promise` API.
listMyChatrooms(listMyChatroomsVars).then((response) => {
  const data = response.data;
  console.log(data.chatroomMembers);
});
```

### Using `ListMyChatrooms`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyChatroomsRef, ListMyChatroomsVariables } from '@kismoportal-dataconnect/generated';

// The `ListMyChatrooms` query requires an argument of type `ListMyChatroomsVariables`:
const listMyChatroomsVars: ListMyChatroomsVariables = {
  userId: ..., 
};

// Call the `listMyChatroomsRef()` function to get a reference to the query.
const ref = listMyChatroomsRef(listMyChatroomsVars);
// Variables can be defined inline as well.
const ref = listMyChatroomsRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyChatroomsRef(dataConnect, listMyChatroomsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.chatroomMembers);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.chatroomMembers);
});
```

## GetGlobalStats
You can execute the `GetGlobalStats` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getGlobalStats(options?: ExecuteQueryOptions): QueryPromise<GetGlobalStatsData, undefined>;

interface GetGlobalStatsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetGlobalStatsData, undefined>;
}
export const getGlobalStatsRef: GetGlobalStatsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getGlobalStats(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetGlobalStatsData, undefined>;

interface GetGlobalStatsRef {
  ...
  (dc: DataConnect): QueryRef<GetGlobalStatsData, undefined>;
}
export const getGlobalStatsRef: GetGlobalStatsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getGlobalStatsRef:
```typescript
const name = getGlobalStatsRef.operationName;
console.log(name);
```

### Variables
The `GetGlobalStats` query has no variables.
### Return Type
Recall that executing the `GetGlobalStats` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetGlobalStatsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetGlobalStatsData {
  globalStats: ({
    label: string;
    value: Int64String;
    subtext?: string | null;
    updatedAt?: TimestampString | null;
  } & GlobalStat_Key)[];
}
```
### Using `GetGlobalStats`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getGlobalStats } from '@kismoportal-dataconnect/generated';


// Call the `getGlobalStats()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getGlobalStats();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getGlobalStats(dataConnect);

console.log(data.globalStats);

// Or, you can use the `Promise` API.
getGlobalStats().then((response) => {
  const data = response.data;
  console.log(data.globalStats);
});
```

### Using `GetGlobalStats`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getGlobalStatsRef } from '@kismoportal-dataconnect/generated';


// Call the `getGlobalStatsRef()` function to get a reference to the query.
const ref = getGlobalStatsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getGlobalStatsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.globalStats);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.globalStats);
});
```

## GetGlobalStat
You can execute the `GetGlobalStat` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getGlobalStat(vars: GetGlobalStatVariables, options?: ExecuteQueryOptions): QueryPromise<GetGlobalStatData, GetGlobalStatVariables>;

interface GetGlobalStatRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetGlobalStatVariables): QueryRef<GetGlobalStatData, GetGlobalStatVariables>;
}
export const getGlobalStatRef: GetGlobalStatRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getGlobalStat(dc: DataConnect, vars: GetGlobalStatVariables, options?: ExecuteQueryOptions): QueryPromise<GetGlobalStatData, GetGlobalStatVariables>;

interface GetGlobalStatRef {
  ...
  (dc: DataConnect, vars: GetGlobalStatVariables): QueryRef<GetGlobalStatData, GetGlobalStatVariables>;
}
export const getGlobalStatRef: GetGlobalStatRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getGlobalStatRef:
```typescript
const name = getGlobalStatRef.operationName;
console.log(name);
```

### Variables
The `GetGlobalStat` query requires an argument of type `GetGlobalStatVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetGlobalStatVariables {
  label: string;
}
```
### Return Type
Recall that executing the `GetGlobalStat` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetGlobalStatData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetGlobalStatData {
  globalStat?: {
    label: string;
    value: Int64String;
    subtext?: string | null;
  } & GlobalStat_Key;
}
```
### Using `GetGlobalStat`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getGlobalStat, GetGlobalStatVariables } from '@kismoportal-dataconnect/generated';

// The `GetGlobalStat` query requires an argument of type `GetGlobalStatVariables`:
const getGlobalStatVars: GetGlobalStatVariables = {
  label: ..., 
};

// Call the `getGlobalStat()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getGlobalStat(getGlobalStatVars);
// Variables can be defined inline as well.
const { data } = await getGlobalStat({ label: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getGlobalStat(dataConnect, getGlobalStatVars);

console.log(data.globalStat);

// Or, you can use the `Promise` API.
getGlobalStat(getGlobalStatVars).then((response) => {
  const data = response.data;
  console.log(data.globalStat);
});
```

### Using `GetGlobalStat`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getGlobalStatRef, GetGlobalStatVariables } from '@kismoportal-dataconnect/generated';

// The `GetGlobalStat` query requires an argument of type `GetGlobalStatVariables`:
const getGlobalStatVars: GetGlobalStatVariables = {
  label: ..., 
};

// Call the `getGlobalStatRef()` function to get a reference to the query.
const ref = getGlobalStatRef(getGlobalStatVars);
// Variables can be defined inline as well.
const ref = getGlobalStatRef({ label: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getGlobalStatRef(dataConnect, getGlobalStatVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.globalStat);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.globalStat);
});
```

## ListActiveSessionsByUser
You can execute the `ListActiveSessionsByUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listActiveSessionsByUser(vars: ListActiveSessionsByUserVariables, options?: ExecuteQueryOptions): QueryPromise<ListActiveSessionsByUserData, ListActiveSessionsByUserVariables>;

interface ListActiveSessionsByUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListActiveSessionsByUserVariables): QueryRef<ListActiveSessionsByUserData, ListActiveSessionsByUserVariables>;
}
export const listActiveSessionsByUserRef: ListActiveSessionsByUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listActiveSessionsByUser(dc: DataConnect, vars: ListActiveSessionsByUserVariables, options?: ExecuteQueryOptions): QueryPromise<ListActiveSessionsByUserData, ListActiveSessionsByUserVariables>;

interface ListActiveSessionsByUserRef {
  ...
  (dc: DataConnect, vars: ListActiveSessionsByUserVariables): QueryRef<ListActiveSessionsByUserData, ListActiveSessionsByUserVariables>;
}
export const listActiveSessionsByUserRef: ListActiveSessionsByUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listActiveSessionsByUserRef:
```typescript
const name = listActiveSessionsByUserRef.operationName;
console.log(name);
```

### Variables
The `ListActiveSessionsByUser` query requires an argument of type `ListActiveSessionsByUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListActiveSessionsByUserVariables {
  userId: UUIDString;
}
```
### Return Type
Recall that executing the `ListActiveSessionsByUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListActiveSessionsByUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListActiveSessionsByUserData {
  userChatroomSessions: ({
    id: UUIDString;
    userId: UUIDString;
    chatroomId: UUIDString;
    openedAt: TimestampString;
    lastHeartbeatAt?: TimestampString | null;
    closedAt?: TimestampString | null;
  } & UserChatroomSession_Key)[];
}
```
### Using `ListActiveSessionsByUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listActiveSessionsByUser, ListActiveSessionsByUserVariables } from '@kismoportal-dataconnect/generated';

// The `ListActiveSessionsByUser` query requires an argument of type `ListActiveSessionsByUserVariables`:
const listActiveSessionsByUserVars: ListActiveSessionsByUserVariables = {
  userId: ..., 
};

// Call the `listActiveSessionsByUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listActiveSessionsByUser(listActiveSessionsByUserVars);
// Variables can be defined inline as well.
const { data } = await listActiveSessionsByUser({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listActiveSessionsByUser(dataConnect, listActiveSessionsByUserVars);

console.log(data.userChatroomSessions);

// Or, you can use the `Promise` API.
listActiveSessionsByUser(listActiveSessionsByUserVars).then((response) => {
  const data = response.data;
  console.log(data.userChatroomSessions);
});
```

### Using `ListActiveSessionsByUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listActiveSessionsByUserRef, ListActiveSessionsByUserVariables } from '@kismoportal-dataconnect/generated';

// The `ListActiveSessionsByUser` query requires an argument of type `ListActiveSessionsByUserVariables`:
const listActiveSessionsByUserVars: ListActiveSessionsByUserVariables = {
  userId: ..., 
};

// Call the `listActiveSessionsByUserRef()` function to get a reference to the query.
const ref = listActiveSessionsByUserRef(listActiveSessionsByUserVars);
// Variables can be defined inline as well.
const ref = listActiveSessionsByUserRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listActiveSessionsByUserRef(dataConnect, listActiveSessionsByUserVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.userChatroomSessions);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.userChatroomSessions);
});
```

## ListActiveSessionsGlobal
You can execute the `ListActiveSessionsGlobal` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listActiveSessionsGlobal(vars?: ListActiveSessionsGlobalVariables, options?: ExecuteQueryOptions): QueryPromise<ListActiveSessionsGlobalData, ListActiveSessionsGlobalVariables>;

interface ListActiveSessionsGlobalRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListActiveSessionsGlobalVariables): QueryRef<ListActiveSessionsGlobalData, ListActiveSessionsGlobalVariables>;
}
export const listActiveSessionsGlobalRef: ListActiveSessionsGlobalRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listActiveSessionsGlobal(dc: DataConnect, vars?: ListActiveSessionsGlobalVariables, options?: ExecuteQueryOptions): QueryPromise<ListActiveSessionsGlobalData, ListActiveSessionsGlobalVariables>;

interface ListActiveSessionsGlobalRef {
  ...
  (dc: DataConnect, vars?: ListActiveSessionsGlobalVariables): QueryRef<ListActiveSessionsGlobalData, ListActiveSessionsGlobalVariables>;
}
export const listActiveSessionsGlobalRef: ListActiveSessionsGlobalRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listActiveSessionsGlobalRef:
```typescript
const name = listActiveSessionsGlobalRef.operationName;
console.log(name);
```

### Variables
The `ListActiveSessionsGlobal` query has an optional argument of type `ListActiveSessionsGlobalVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListActiveSessionsGlobalVariables {
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that executing the `ListActiveSessionsGlobal` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListActiveSessionsGlobalData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListActiveSessionsGlobalData {
  userChatroomSessions: ({
    id: UUIDString;
    userId: UUIDString;
    chatroomId: UUIDString;
    openedAt: TimestampString;
    lastHeartbeatAt?: TimestampString | null;
  } & UserChatroomSession_Key)[];
}
```
### Using `ListActiveSessionsGlobal`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listActiveSessionsGlobal, ListActiveSessionsGlobalVariables } from '@kismoportal-dataconnect/generated';

// The `ListActiveSessionsGlobal` query has an optional argument of type `ListActiveSessionsGlobalVariables`:
const listActiveSessionsGlobalVars: ListActiveSessionsGlobalVariables = {
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `listActiveSessionsGlobal()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listActiveSessionsGlobal(listActiveSessionsGlobalVars);
// Variables can be defined inline as well.
const { data } = await listActiveSessionsGlobal({ limit: ..., offset: ..., });
// Since all variables are optional for this query, you can omit the `ListActiveSessionsGlobalVariables` argument.
const { data } = await listActiveSessionsGlobal();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listActiveSessionsGlobal(dataConnect, listActiveSessionsGlobalVars);

console.log(data.userChatroomSessions);

// Or, you can use the `Promise` API.
listActiveSessionsGlobal(listActiveSessionsGlobalVars).then((response) => {
  const data = response.data;
  console.log(data.userChatroomSessions);
});
```

### Using `ListActiveSessionsGlobal`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listActiveSessionsGlobalRef, ListActiveSessionsGlobalVariables } from '@kismoportal-dataconnect/generated';

// The `ListActiveSessionsGlobal` query has an optional argument of type `ListActiveSessionsGlobalVariables`:
const listActiveSessionsGlobalVars: ListActiveSessionsGlobalVariables = {
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `listActiveSessionsGlobalRef()` function to get a reference to the query.
const ref = listActiveSessionsGlobalRef(listActiveSessionsGlobalVars);
// Variables can be defined inline as well.
const ref = listActiveSessionsGlobalRef({ limit: ..., offset: ..., });
// Since all variables are optional for this query, you can omit the `ListActiveSessionsGlobalVariables` argument.
const ref = listActiveSessionsGlobalRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listActiveSessionsGlobalRef(dataConnect, listActiveSessionsGlobalVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.userChatroomSessions);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.userChatroomSessions);
});
```

## ListRecentVisitedChatrooms
You can execute the `ListRecentVisitedChatrooms` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listRecentVisitedChatrooms(vars: ListRecentVisitedChatroomsVariables, options?: ExecuteQueryOptions): QueryPromise<ListRecentVisitedChatroomsData, ListRecentVisitedChatroomsVariables>;

interface ListRecentVisitedChatroomsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListRecentVisitedChatroomsVariables): QueryRef<ListRecentVisitedChatroomsData, ListRecentVisitedChatroomsVariables>;
}
export const listRecentVisitedChatroomsRef: ListRecentVisitedChatroomsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listRecentVisitedChatrooms(dc: DataConnect, vars: ListRecentVisitedChatroomsVariables, options?: ExecuteQueryOptions): QueryPromise<ListRecentVisitedChatroomsData, ListRecentVisitedChatroomsVariables>;

interface ListRecentVisitedChatroomsRef {
  ...
  (dc: DataConnect, vars: ListRecentVisitedChatroomsVariables): QueryRef<ListRecentVisitedChatroomsData, ListRecentVisitedChatroomsVariables>;
}
export const listRecentVisitedChatroomsRef: ListRecentVisitedChatroomsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listRecentVisitedChatroomsRef:
```typescript
const name = listRecentVisitedChatroomsRef.operationName;
console.log(name);
```

### Variables
The `ListRecentVisitedChatrooms` query requires an argument of type `ListRecentVisitedChatroomsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListRecentVisitedChatroomsVariables {
  userId: UUIDString;
  limit?: number | null;
}
```
### Return Type
Recall that executing the `ListRecentVisitedChatrooms` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListRecentVisitedChatroomsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListRecentVisitedChatroomsData {
  userChatroomVisits: ({
    id: UUIDString;
    userId: UUIDString;
    chatroomId: UUIDString;
    visitedAt: TimestampString;
    chatroom: {
      id: UUIDString;
      name: string;
      imageUrl?: string | null;
      description?: string | null;
      imageAtribution?: string | null;
      isPublic: boolean;
    } & Chatroom_Key;
  } & UserChatroomVisit_Key)[];
}
```
### Using `ListRecentVisitedChatrooms`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listRecentVisitedChatrooms, ListRecentVisitedChatroomsVariables } from '@kismoportal-dataconnect/generated';

// The `ListRecentVisitedChatrooms` query requires an argument of type `ListRecentVisitedChatroomsVariables`:
const listRecentVisitedChatroomsVars: ListRecentVisitedChatroomsVariables = {
  userId: ..., 
  limit: ..., // optional
};

// Call the `listRecentVisitedChatrooms()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listRecentVisitedChatrooms(listRecentVisitedChatroomsVars);
// Variables can be defined inline as well.
const { data } = await listRecentVisitedChatrooms({ userId: ..., limit: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listRecentVisitedChatrooms(dataConnect, listRecentVisitedChatroomsVars);

console.log(data.userChatroomVisits);

// Or, you can use the `Promise` API.
listRecentVisitedChatrooms(listRecentVisitedChatroomsVars).then((response) => {
  const data = response.data;
  console.log(data.userChatroomVisits);
});
```

### Using `ListRecentVisitedChatrooms`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listRecentVisitedChatroomsRef, ListRecentVisitedChatroomsVariables } from '@kismoportal-dataconnect/generated';

// The `ListRecentVisitedChatrooms` query requires an argument of type `ListRecentVisitedChatroomsVariables`:
const listRecentVisitedChatroomsVars: ListRecentVisitedChatroomsVariables = {
  userId: ..., 
  limit: ..., // optional
};

// Call the `listRecentVisitedChatroomsRef()` function to get a reference to the query.
const ref = listRecentVisitedChatroomsRef(listRecentVisitedChatroomsVars);
// Variables can be defined inline as well.
const ref = listRecentVisitedChatroomsRef({ userId: ..., limit: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listRecentVisitedChatroomsRef(dataConnect, listRecentVisitedChatroomsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.userChatroomVisits);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.userChatroomVisits);
});
```

## ListNotificationsByRecipient
You can execute the `ListNotificationsByRecipient` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listNotificationsByRecipient(vars: ListNotificationsByRecipientVariables, options?: ExecuteQueryOptions): QueryPromise<ListNotificationsByRecipientData, ListNotificationsByRecipientVariables>;

interface ListNotificationsByRecipientRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListNotificationsByRecipientVariables): QueryRef<ListNotificationsByRecipientData, ListNotificationsByRecipientVariables>;
}
export const listNotificationsByRecipientRef: ListNotificationsByRecipientRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listNotificationsByRecipient(dc: DataConnect, vars: ListNotificationsByRecipientVariables, options?: ExecuteQueryOptions): QueryPromise<ListNotificationsByRecipientData, ListNotificationsByRecipientVariables>;

interface ListNotificationsByRecipientRef {
  ...
  (dc: DataConnect, vars: ListNotificationsByRecipientVariables): QueryRef<ListNotificationsByRecipientData, ListNotificationsByRecipientVariables>;
}
export const listNotificationsByRecipientRef: ListNotificationsByRecipientRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listNotificationsByRecipientRef:
```typescript
const name = listNotificationsByRecipientRef.operationName;
console.log(name);
```

### Variables
The `ListNotificationsByRecipient` query requires an argument of type `ListNotificationsByRecipientVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListNotificationsByRecipientVariables {
  recipientUserId: UUIDString;
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that executing the `ListNotificationsByRecipient` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListNotificationsByRecipientData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListNotificationsByRecipientData {
  userNotifications: ({
    id: UUIDString;
    recipientUserId: UUIDString;
    actorUserId?: UUIDString | null;
    type: NotificationType;
    title: string;
    body: string;
    payloadJson?: unknown | null;
    chatroomId?: UUIDString | null;
    messageId?: UUIDString | null;
    readAt?: TimestampString | null;
    createdAt: TimestampString;
  } & UserNotification_Key)[];
}
```
### Using `ListNotificationsByRecipient`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listNotificationsByRecipient, ListNotificationsByRecipientVariables } from '@kismoportal-dataconnect/generated';

// The `ListNotificationsByRecipient` query requires an argument of type `ListNotificationsByRecipientVariables`:
const listNotificationsByRecipientVars: ListNotificationsByRecipientVariables = {
  recipientUserId: ..., 
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `listNotificationsByRecipient()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listNotificationsByRecipient(listNotificationsByRecipientVars);
// Variables can be defined inline as well.
const { data } = await listNotificationsByRecipient({ recipientUserId: ..., limit: ..., offset: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listNotificationsByRecipient(dataConnect, listNotificationsByRecipientVars);

console.log(data.userNotifications);

// Or, you can use the `Promise` API.
listNotificationsByRecipient(listNotificationsByRecipientVars).then((response) => {
  const data = response.data;
  console.log(data.userNotifications);
});
```

### Using `ListNotificationsByRecipient`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listNotificationsByRecipientRef, ListNotificationsByRecipientVariables } from '@kismoportal-dataconnect/generated';

// The `ListNotificationsByRecipient` query requires an argument of type `ListNotificationsByRecipientVariables`:
const listNotificationsByRecipientVars: ListNotificationsByRecipientVariables = {
  recipientUserId: ..., 
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `listNotificationsByRecipientRef()` function to get a reference to the query.
const ref = listNotificationsByRecipientRef(listNotificationsByRecipientVars);
// Variables can be defined inline as well.
const ref = listNotificationsByRecipientRef({ recipientUserId: ..., limit: ..., offset: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listNotificationsByRecipientRef(dataConnect, listNotificationsByRecipientVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.userNotifications);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.userNotifications);
});
```

## CountUnreadNotifications
You can execute the `CountUnreadNotifications` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
countUnreadNotifications(vars: CountUnreadNotificationsVariables, options?: ExecuteQueryOptions): QueryPromise<CountUnreadNotificationsData, CountUnreadNotificationsVariables>;

interface CountUnreadNotificationsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CountUnreadNotificationsVariables): QueryRef<CountUnreadNotificationsData, CountUnreadNotificationsVariables>;
}
export const countUnreadNotificationsRef: CountUnreadNotificationsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
countUnreadNotifications(dc: DataConnect, vars: CountUnreadNotificationsVariables, options?: ExecuteQueryOptions): QueryPromise<CountUnreadNotificationsData, CountUnreadNotificationsVariables>;

interface CountUnreadNotificationsRef {
  ...
  (dc: DataConnect, vars: CountUnreadNotificationsVariables): QueryRef<CountUnreadNotificationsData, CountUnreadNotificationsVariables>;
}
export const countUnreadNotificationsRef: CountUnreadNotificationsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the countUnreadNotificationsRef:
```typescript
const name = countUnreadNotificationsRef.operationName;
console.log(name);
```

### Variables
The `CountUnreadNotifications` query requires an argument of type `CountUnreadNotificationsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CountUnreadNotificationsVariables {
  recipientUserId: UUIDString;
}
```
### Return Type
Recall that executing the `CountUnreadNotifications` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CountUnreadNotificationsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CountUnreadNotificationsData {
  unreadNotifications?: unknown | null;
}
```
### Using `CountUnreadNotifications`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, countUnreadNotifications, CountUnreadNotificationsVariables } from '@kismoportal-dataconnect/generated';

// The `CountUnreadNotifications` query requires an argument of type `CountUnreadNotificationsVariables`:
const countUnreadNotificationsVars: CountUnreadNotificationsVariables = {
  recipientUserId: ..., 
};

// Call the `countUnreadNotifications()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await countUnreadNotifications(countUnreadNotificationsVars);
// Variables can be defined inline as well.
const { data } = await countUnreadNotifications({ recipientUserId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await countUnreadNotifications(dataConnect, countUnreadNotificationsVars);

console.log(data.unreadNotifications);

// Or, you can use the `Promise` API.
countUnreadNotifications(countUnreadNotificationsVars).then((response) => {
  const data = response.data;
  console.log(data.unreadNotifications);
});
```

### Using `CountUnreadNotifications`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, countUnreadNotificationsRef, CountUnreadNotificationsVariables } from '@kismoportal-dataconnect/generated';

// The `CountUnreadNotifications` query requires an argument of type `CountUnreadNotificationsVariables`:
const countUnreadNotificationsVars: CountUnreadNotificationsVariables = {
  recipientUserId: ..., 
};

// Call the `countUnreadNotificationsRef()` function to get a reference to the query.
const ref = countUnreadNotificationsRef(countUnreadNotificationsVars);
// Variables can be defined inline as well.
const ref = countUnreadNotificationsRef({ recipientUserId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = countUnreadNotificationsRef(dataConnect, countUnreadNotificationsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.unreadNotifications);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.unreadNotifications);
});
```

## ListChatroomStatsByChatroomIds
You can execute the `ListChatroomStatsByChatroomIds` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listChatroomStatsByChatroomIds(vars: ListChatroomStatsByChatroomIdsVariables, options?: ExecuteQueryOptions): QueryPromise<ListChatroomStatsByChatroomIdsData, ListChatroomStatsByChatroomIdsVariables>;

interface ListChatroomStatsByChatroomIdsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListChatroomStatsByChatroomIdsVariables): QueryRef<ListChatroomStatsByChatroomIdsData, ListChatroomStatsByChatroomIdsVariables>;
}
export const listChatroomStatsByChatroomIdsRef: ListChatroomStatsByChatroomIdsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listChatroomStatsByChatroomIds(dc: DataConnect, vars: ListChatroomStatsByChatroomIdsVariables, options?: ExecuteQueryOptions): QueryPromise<ListChatroomStatsByChatroomIdsData, ListChatroomStatsByChatroomIdsVariables>;

interface ListChatroomStatsByChatroomIdsRef {
  ...
  (dc: DataConnect, vars: ListChatroomStatsByChatroomIdsVariables): QueryRef<ListChatroomStatsByChatroomIdsData, ListChatroomStatsByChatroomIdsVariables>;
}
export const listChatroomStatsByChatroomIdsRef: ListChatroomStatsByChatroomIdsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listChatroomStatsByChatroomIdsRef:
```typescript
const name = listChatroomStatsByChatroomIdsRef.operationName;
console.log(name);
```

### Variables
The `ListChatroomStatsByChatroomIds` query requires an argument of type `ListChatroomStatsByChatroomIdsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListChatroomStatsByChatroomIdsVariables {
  chatroomIds: UUIDString[];
  labels?: string[] | null;
}
```
### Return Type
Recall that executing the `ListChatroomStatsByChatroomIds` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListChatroomStatsByChatroomIdsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListChatroomStatsByChatroomIdsData {
  chatroomStatsByIds: ({
    chatroomId: UUIDString;
    label: string;
    value: Int64String;
    subtext?: string | null;
    updatedAt?: TimestampString | null;
  } & ChatroomStat_Key)[];
}
```
### Using `ListChatroomStatsByChatroomIds`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listChatroomStatsByChatroomIds, ListChatroomStatsByChatroomIdsVariables } from '@kismoportal-dataconnect/generated';

// The `ListChatroomStatsByChatroomIds` query requires an argument of type `ListChatroomStatsByChatroomIdsVariables`:
const listChatroomStatsByChatroomIdsVars: ListChatroomStatsByChatroomIdsVariables = {
  chatroomIds: ..., 
  labels: ..., // optional
};

// Call the `listChatroomStatsByChatroomIds()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listChatroomStatsByChatroomIds(listChatroomStatsByChatroomIdsVars);
// Variables can be defined inline as well.
const { data } = await listChatroomStatsByChatroomIds({ chatroomIds: ..., labels: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listChatroomStatsByChatroomIds(dataConnect, listChatroomStatsByChatroomIdsVars);

console.log(data.chatroomStatsByIds);

// Or, you can use the `Promise` API.
listChatroomStatsByChatroomIds(listChatroomStatsByChatroomIdsVars).then((response) => {
  const data = response.data;
  console.log(data.chatroomStatsByIds);
});
```

### Using `ListChatroomStatsByChatroomIds`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listChatroomStatsByChatroomIdsRef, ListChatroomStatsByChatroomIdsVariables } from '@kismoportal-dataconnect/generated';

// The `ListChatroomStatsByChatroomIds` query requires an argument of type `ListChatroomStatsByChatroomIdsVariables`:
const listChatroomStatsByChatroomIdsVars: ListChatroomStatsByChatroomIdsVariables = {
  chatroomIds: ..., 
  labels: ..., // optional
};

// Call the `listChatroomStatsByChatroomIdsRef()` function to get a reference to the query.
const ref = listChatroomStatsByChatroomIdsRef(listChatroomStatsByChatroomIdsVars);
// Variables can be defined inline as well.
const ref = listChatroomStatsByChatroomIdsRef({ chatroomIds: ..., labels: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listChatroomStatsByChatroomIdsRef(dataConnect, listChatroomStatsByChatroomIdsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.chatroomStatsByIds);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.chatroomStatsByIds);
});
```

## FetchPlayroomCreatorToken
You can execute the `FetchPlayroomCreatorToken` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
fetchPlayroomCreatorToken(vars: FetchPlayroomCreatorTokenVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomCreatorTokenData, FetchPlayroomCreatorTokenVariables>;

interface FetchPlayroomCreatorTokenRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: FetchPlayroomCreatorTokenVariables): QueryRef<FetchPlayroomCreatorTokenData, FetchPlayroomCreatorTokenVariables>;
}
export const fetchPlayroomCreatorTokenRef: FetchPlayroomCreatorTokenRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
fetchPlayroomCreatorToken(dc: DataConnect, vars: FetchPlayroomCreatorTokenVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomCreatorTokenData, FetchPlayroomCreatorTokenVariables>;

interface FetchPlayroomCreatorTokenRef {
  ...
  (dc: DataConnect, vars: FetchPlayroomCreatorTokenVariables): QueryRef<FetchPlayroomCreatorTokenData, FetchPlayroomCreatorTokenVariables>;
}
export const fetchPlayroomCreatorTokenRef: FetchPlayroomCreatorTokenRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the fetchPlayroomCreatorTokenRef:
```typescript
const name = fetchPlayroomCreatorTokenRef.operationName;
console.log(name);
```

### Variables
The `FetchPlayroomCreatorToken` query requires an argument of type `FetchPlayroomCreatorTokenVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface FetchPlayroomCreatorTokenVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `FetchPlayroomCreatorToken` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `FetchPlayroomCreatorTokenData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface FetchPlayroomCreatorTokenData {
  playroomSession?: {
    jwtTokenCreator: string;
  };
}
```
### Using `FetchPlayroomCreatorToken`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, fetchPlayroomCreatorToken, FetchPlayroomCreatorTokenVariables } from '@kismoportal-dataconnect/generated';

// The `FetchPlayroomCreatorToken` query requires an argument of type `FetchPlayroomCreatorTokenVariables`:
const fetchPlayroomCreatorTokenVars: FetchPlayroomCreatorTokenVariables = {
  id: ..., 
};

// Call the `fetchPlayroomCreatorToken()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await fetchPlayroomCreatorToken(fetchPlayroomCreatorTokenVars);
// Variables can be defined inline as well.
const { data } = await fetchPlayroomCreatorToken({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await fetchPlayroomCreatorToken(dataConnect, fetchPlayroomCreatorTokenVars);

console.log(data.playroomSession);

// Or, you can use the `Promise` API.
fetchPlayroomCreatorToken(fetchPlayroomCreatorTokenVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession);
});
```

### Using `FetchPlayroomCreatorToken`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, fetchPlayroomCreatorTokenRef, FetchPlayroomCreatorTokenVariables } from '@kismoportal-dataconnect/generated';

// The `FetchPlayroomCreatorToken` query requires an argument of type `FetchPlayroomCreatorTokenVariables`:
const fetchPlayroomCreatorTokenVars: FetchPlayroomCreatorTokenVariables = {
  id: ..., 
};

// Call the `fetchPlayroomCreatorTokenRef()` function to get a reference to the query.
const ref = fetchPlayroomCreatorTokenRef(fetchPlayroomCreatorTokenVars);
// Variables can be defined inline as well.
const ref = fetchPlayroomCreatorTokenRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = fetchPlayroomCreatorTokenRef(dataConnect, fetchPlayroomCreatorTokenVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.playroomSession);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession);
});
```

## FetchPlayroomInvitedUserToken
You can execute the `FetchPlayroomInvitedUserToken` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
fetchPlayroomInvitedUserToken(vars: FetchPlayroomInvitedUserTokenVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomInvitedUserTokenData, FetchPlayroomInvitedUserTokenVariables>;

interface FetchPlayroomInvitedUserTokenRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: FetchPlayroomInvitedUserTokenVariables): QueryRef<FetchPlayroomInvitedUserTokenData, FetchPlayroomInvitedUserTokenVariables>;
}
export const fetchPlayroomInvitedUserTokenRef: FetchPlayroomInvitedUserTokenRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
fetchPlayroomInvitedUserToken(dc: DataConnect, vars: FetchPlayroomInvitedUserTokenVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomInvitedUserTokenData, FetchPlayroomInvitedUserTokenVariables>;

interface FetchPlayroomInvitedUserTokenRef {
  ...
  (dc: DataConnect, vars: FetchPlayroomInvitedUserTokenVariables): QueryRef<FetchPlayroomInvitedUserTokenData, FetchPlayroomInvitedUserTokenVariables>;
}
export const fetchPlayroomInvitedUserTokenRef: FetchPlayroomInvitedUserTokenRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the fetchPlayroomInvitedUserTokenRef:
```typescript
const name = fetchPlayroomInvitedUserTokenRef.operationName;
console.log(name);
```

### Variables
The `FetchPlayroomInvitedUserToken` query requires an argument of type `FetchPlayroomInvitedUserTokenVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface FetchPlayroomInvitedUserTokenVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `FetchPlayroomInvitedUserToken` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `FetchPlayroomInvitedUserTokenData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface FetchPlayroomInvitedUserTokenData {
  playroomSession?: {
    jwtTokenInvitedUser?: string | null;
  };
}
```
### Using `FetchPlayroomInvitedUserToken`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, fetchPlayroomInvitedUserToken, FetchPlayroomInvitedUserTokenVariables } from '@kismoportal-dataconnect/generated';

// The `FetchPlayroomInvitedUserToken` query requires an argument of type `FetchPlayroomInvitedUserTokenVariables`:
const fetchPlayroomInvitedUserTokenVars: FetchPlayroomInvitedUserTokenVariables = {
  id: ..., 
};

// Call the `fetchPlayroomInvitedUserToken()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await fetchPlayroomInvitedUserToken(fetchPlayroomInvitedUserTokenVars);
// Variables can be defined inline as well.
const { data } = await fetchPlayroomInvitedUserToken({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await fetchPlayroomInvitedUserToken(dataConnect, fetchPlayroomInvitedUserTokenVars);

console.log(data.playroomSession);

// Or, you can use the `Promise` API.
fetchPlayroomInvitedUserToken(fetchPlayroomInvitedUserTokenVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession);
});
```

### Using `FetchPlayroomInvitedUserToken`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, fetchPlayroomInvitedUserTokenRef, FetchPlayroomInvitedUserTokenVariables } from '@kismoportal-dataconnect/generated';

// The `FetchPlayroomInvitedUserToken` query requires an argument of type `FetchPlayroomInvitedUserTokenVariables`:
const fetchPlayroomInvitedUserTokenVars: FetchPlayroomInvitedUserTokenVariables = {
  id: ..., 
};

// Call the `fetchPlayroomInvitedUserTokenRef()` function to get a reference to the query.
const ref = fetchPlayroomInvitedUserTokenRef(fetchPlayroomInvitedUserTokenVars);
// Variables can be defined inline as well.
const ref = fetchPlayroomInvitedUserTokenRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = fetchPlayroomInvitedUserTokenRef(dataConnect, fetchPlayroomInvitedUserTokenVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.playroomSession);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession);
});
```

## FetchPlayroomParticipantToken
You can execute the `FetchPlayroomParticipantToken` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
fetchPlayroomParticipantToken(vars: FetchPlayroomParticipantTokenVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomParticipantTokenData, FetchPlayroomParticipantTokenVariables>;

interface FetchPlayroomParticipantTokenRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: FetchPlayroomParticipantTokenVariables): QueryRef<FetchPlayroomParticipantTokenData, FetchPlayroomParticipantTokenVariables>;
}
export const fetchPlayroomParticipantTokenRef: FetchPlayroomParticipantTokenRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
fetchPlayroomParticipantToken(dc: DataConnect, vars: FetchPlayroomParticipantTokenVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomParticipantTokenData, FetchPlayroomParticipantTokenVariables>;

interface FetchPlayroomParticipantTokenRef {
  ...
  (dc: DataConnect, vars: FetchPlayroomParticipantTokenVariables): QueryRef<FetchPlayroomParticipantTokenData, FetchPlayroomParticipantTokenVariables>;
}
export const fetchPlayroomParticipantTokenRef: FetchPlayroomParticipantTokenRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the fetchPlayroomParticipantTokenRef:
```typescript
const name = fetchPlayroomParticipantTokenRef.operationName;
console.log(name);
```

### Variables
The `FetchPlayroomParticipantToken` query requires an argument of type `FetchPlayroomParticipantTokenVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface FetchPlayroomParticipantTokenVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `FetchPlayroomParticipantToken` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `FetchPlayroomParticipantTokenData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface FetchPlayroomParticipantTokenData {
  playroomSession?: {
    jwtTokenSpectator?: string | null;
  };
}
```
### Using `FetchPlayroomParticipantToken`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, fetchPlayroomParticipantToken, FetchPlayroomParticipantTokenVariables } from '@kismoportal-dataconnect/generated';

// The `FetchPlayroomParticipantToken` query requires an argument of type `FetchPlayroomParticipantTokenVariables`:
const fetchPlayroomParticipantTokenVars: FetchPlayroomParticipantTokenVariables = {
  id: ..., 
};

// Call the `fetchPlayroomParticipantToken()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await fetchPlayroomParticipantToken(fetchPlayroomParticipantTokenVars);
// Variables can be defined inline as well.
const { data } = await fetchPlayroomParticipantToken({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await fetchPlayroomParticipantToken(dataConnect, fetchPlayroomParticipantTokenVars);

console.log(data.playroomSession);

// Or, you can use the `Promise` API.
fetchPlayroomParticipantToken(fetchPlayroomParticipantTokenVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession);
});
```

### Using `FetchPlayroomParticipantToken`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, fetchPlayroomParticipantTokenRef, FetchPlayroomParticipantTokenVariables } from '@kismoportal-dataconnect/generated';

// The `FetchPlayroomParticipantToken` query requires an argument of type `FetchPlayroomParticipantTokenVariables`:
const fetchPlayroomParticipantTokenVars: FetchPlayroomParticipantTokenVariables = {
  id: ..., 
};

// Call the `fetchPlayroomParticipantTokenRef()` function to get a reference to the query.
const ref = fetchPlayroomParticipantTokenRef(fetchPlayroomParticipantTokenVars);
// Variables can be defined inline as well.
const ref = fetchPlayroomParticipantTokenRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = fetchPlayroomParticipantTokenRef(dataConnect, fetchPlayroomParticipantTokenVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.playroomSession);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession);
});
```

## FetchPlayroomParticipantUserIds
You can execute the `FetchPlayroomParticipantUserIds` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
fetchPlayroomParticipantUserIds(vars: FetchPlayroomParticipantUserIdsVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomParticipantUserIdsData, FetchPlayroomParticipantUserIdsVariables>;

interface FetchPlayroomParticipantUserIdsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: FetchPlayroomParticipantUserIdsVariables): QueryRef<FetchPlayroomParticipantUserIdsData, FetchPlayroomParticipantUserIdsVariables>;
}
export const fetchPlayroomParticipantUserIdsRef: FetchPlayroomParticipantUserIdsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
fetchPlayroomParticipantUserIds(dc: DataConnect, vars: FetchPlayroomParticipantUserIdsVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomParticipantUserIdsData, FetchPlayroomParticipantUserIdsVariables>;

interface FetchPlayroomParticipantUserIdsRef {
  ...
  (dc: DataConnect, vars: FetchPlayroomParticipantUserIdsVariables): QueryRef<FetchPlayroomParticipantUserIdsData, FetchPlayroomParticipantUserIdsVariables>;
}
export const fetchPlayroomParticipantUserIdsRef: FetchPlayroomParticipantUserIdsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the fetchPlayroomParticipantUserIdsRef:
```typescript
const name = fetchPlayroomParticipantUserIdsRef.operationName;
console.log(name);
```

### Variables
The `FetchPlayroomParticipantUserIds` query requires an argument of type `FetchPlayroomParticipantUserIdsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface FetchPlayroomParticipantUserIdsVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `FetchPlayroomParticipantUserIds` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `FetchPlayroomParticipantUserIdsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface FetchPlayroomParticipantUserIdsData {
  playroomSession?: {
    openedByUserId: UUIDString;
    invitedUserId?: UUIDString | null;
  };
}
```
### Using `FetchPlayroomParticipantUserIds`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, fetchPlayroomParticipantUserIds, FetchPlayroomParticipantUserIdsVariables } from '@kismoportal-dataconnect/generated';

// The `FetchPlayroomParticipantUserIds` query requires an argument of type `FetchPlayroomParticipantUserIdsVariables`:
const fetchPlayroomParticipantUserIdsVars: FetchPlayroomParticipantUserIdsVariables = {
  id: ..., 
};

// Call the `fetchPlayroomParticipantUserIds()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await fetchPlayroomParticipantUserIds(fetchPlayroomParticipantUserIdsVars);
// Variables can be defined inline as well.
const { data } = await fetchPlayroomParticipantUserIds({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await fetchPlayroomParticipantUserIds(dataConnect, fetchPlayroomParticipantUserIdsVars);

console.log(data.playroomSession);

// Or, you can use the `Promise` API.
fetchPlayroomParticipantUserIds(fetchPlayroomParticipantUserIdsVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession);
});
```

### Using `FetchPlayroomParticipantUserIds`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, fetchPlayroomParticipantUserIdsRef, FetchPlayroomParticipantUserIdsVariables } from '@kismoportal-dataconnect/generated';

// The `FetchPlayroomParticipantUserIds` query requires an argument of type `FetchPlayroomParticipantUserIdsVariables`:
const fetchPlayroomParticipantUserIdsVars: FetchPlayroomParticipantUserIdsVariables = {
  id: ..., 
};

// Call the `fetchPlayroomParticipantUserIdsRef()` function to get a reference to the query.
const ref = fetchPlayroomParticipantUserIdsRef(fetchPlayroomParticipantUserIdsVars);
// Variables can be defined inline as well.
const ref = fetchPlayroomParticipantUserIdsRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = fetchPlayroomParticipantUserIdsRef(dataConnect, fetchPlayroomParticipantUserIdsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.playroomSession);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession);
});
```

## FetchPlayroomInvitedUserJoinedAt
You can execute the `FetchPlayroomInvitedUserJoinedAt` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
fetchPlayroomInvitedUserJoinedAt(vars: FetchPlayroomInvitedUserJoinedAtVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomInvitedUserJoinedAtData, FetchPlayroomInvitedUserJoinedAtVariables>;

interface FetchPlayroomInvitedUserJoinedAtRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: FetchPlayroomInvitedUserJoinedAtVariables): QueryRef<FetchPlayroomInvitedUserJoinedAtData, FetchPlayroomInvitedUserJoinedAtVariables>;
}
export const fetchPlayroomInvitedUserJoinedAtRef: FetchPlayroomInvitedUserJoinedAtRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
fetchPlayroomInvitedUserJoinedAt(dc: DataConnect, vars: FetchPlayroomInvitedUserJoinedAtVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomInvitedUserJoinedAtData, FetchPlayroomInvitedUserJoinedAtVariables>;

interface FetchPlayroomInvitedUserJoinedAtRef {
  ...
  (dc: DataConnect, vars: FetchPlayroomInvitedUserJoinedAtVariables): QueryRef<FetchPlayroomInvitedUserJoinedAtData, FetchPlayroomInvitedUserJoinedAtVariables>;
}
export const fetchPlayroomInvitedUserJoinedAtRef: FetchPlayroomInvitedUserJoinedAtRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the fetchPlayroomInvitedUserJoinedAtRef:
```typescript
const name = fetchPlayroomInvitedUserJoinedAtRef.operationName;
console.log(name);
```

### Variables
The `FetchPlayroomInvitedUserJoinedAt` query requires an argument of type `FetchPlayroomInvitedUserJoinedAtVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface FetchPlayroomInvitedUserJoinedAtVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `FetchPlayroomInvitedUserJoinedAt` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `FetchPlayroomInvitedUserJoinedAtData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface FetchPlayroomInvitedUserJoinedAtData {
  playroomSession?: {
    invitedUserJoinedAt?: TimestampString | null;
  };
}
```
### Using `FetchPlayroomInvitedUserJoinedAt`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, fetchPlayroomInvitedUserJoinedAt, FetchPlayroomInvitedUserJoinedAtVariables } from '@kismoportal-dataconnect/generated';

// The `FetchPlayroomInvitedUserJoinedAt` query requires an argument of type `FetchPlayroomInvitedUserJoinedAtVariables`:
const fetchPlayroomInvitedUserJoinedAtVars: FetchPlayroomInvitedUserJoinedAtVariables = {
  id: ..., 
};

// Call the `fetchPlayroomInvitedUserJoinedAt()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await fetchPlayroomInvitedUserJoinedAt(fetchPlayroomInvitedUserJoinedAtVars);
// Variables can be defined inline as well.
const { data } = await fetchPlayroomInvitedUserJoinedAt({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await fetchPlayroomInvitedUserJoinedAt(dataConnect, fetchPlayroomInvitedUserJoinedAtVars);

console.log(data.playroomSession);

// Or, you can use the `Promise` API.
fetchPlayroomInvitedUserJoinedAt(fetchPlayroomInvitedUserJoinedAtVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession);
});
```

### Using `FetchPlayroomInvitedUserJoinedAt`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, fetchPlayroomInvitedUserJoinedAtRef, FetchPlayroomInvitedUserJoinedAtVariables } from '@kismoportal-dataconnect/generated';

// The `FetchPlayroomInvitedUserJoinedAt` query requires an argument of type `FetchPlayroomInvitedUserJoinedAtVariables`:
const fetchPlayroomInvitedUserJoinedAtVars: FetchPlayroomInvitedUserJoinedAtVariables = {
  id: ..., 
};

// Call the `fetchPlayroomInvitedUserJoinedAtRef()` function to get a reference to the query.
const ref = fetchPlayroomInvitedUserJoinedAtRef(fetchPlayroomInvitedUserJoinedAtVars);
// Variables can be defined inline as well.
const ref = fetchPlayroomInvitedUserJoinedAtRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = fetchPlayroomInvitedUserJoinedAtRef(dataConnect, fetchPlayroomInvitedUserJoinedAtVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.playroomSession);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession);
});
```

## FetchPlayroomCreatorUserHeartbeat
You can execute the `FetchPlayroomCreatorUserHeartbeat` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
fetchPlayroomCreatorUserHeartbeat(vars: FetchPlayroomCreatorUserHeartbeatVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomCreatorUserHeartbeatData, FetchPlayroomCreatorUserHeartbeatVariables>;

interface FetchPlayroomCreatorUserHeartbeatRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: FetchPlayroomCreatorUserHeartbeatVariables): QueryRef<FetchPlayroomCreatorUserHeartbeatData, FetchPlayroomCreatorUserHeartbeatVariables>;
}
export const fetchPlayroomCreatorUserHeartbeatRef: FetchPlayroomCreatorUserHeartbeatRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
fetchPlayroomCreatorUserHeartbeat(dc: DataConnect, vars: FetchPlayroomCreatorUserHeartbeatVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomCreatorUserHeartbeatData, FetchPlayroomCreatorUserHeartbeatVariables>;

interface FetchPlayroomCreatorUserHeartbeatRef {
  ...
  (dc: DataConnect, vars: FetchPlayroomCreatorUserHeartbeatVariables): QueryRef<FetchPlayroomCreatorUserHeartbeatData, FetchPlayroomCreatorUserHeartbeatVariables>;
}
export const fetchPlayroomCreatorUserHeartbeatRef: FetchPlayroomCreatorUserHeartbeatRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the fetchPlayroomCreatorUserHeartbeatRef:
```typescript
const name = fetchPlayroomCreatorUserHeartbeatRef.operationName;
console.log(name);
```

### Variables
The `FetchPlayroomCreatorUserHeartbeat` query requires an argument of type `FetchPlayroomCreatorUserHeartbeatVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface FetchPlayroomCreatorUserHeartbeatVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `FetchPlayroomCreatorUserHeartbeat` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `FetchPlayroomCreatorUserHeartbeatData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface FetchPlayroomCreatorUserHeartbeatData {
  playroomSession?: {
    creatorUserHeartbeat?: TimestampString | null;
  };
}
```
### Using `FetchPlayroomCreatorUserHeartbeat`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, fetchPlayroomCreatorUserHeartbeat, FetchPlayroomCreatorUserHeartbeatVariables } from '@kismoportal-dataconnect/generated';

// The `FetchPlayroomCreatorUserHeartbeat` query requires an argument of type `FetchPlayroomCreatorUserHeartbeatVariables`:
const fetchPlayroomCreatorUserHeartbeatVars: FetchPlayroomCreatorUserHeartbeatVariables = {
  id: ..., 
};

// Call the `fetchPlayroomCreatorUserHeartbeat()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await fetchPlayroomCreatorUserHeartbeat(fetchPlayroomCreatorUserHeartbeatVars);
// Variables can be defined inline as well.
const { data } = await fetchPlayroomCreatorUserHeartbeat({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await fetchPlayroomCreatorUserHeartbeat(dataConnect, fetchPlayroomCreatorUserHeartbeatVars);

console.log(data.playroomSession);

// Or, you can use the `Promise` API.
fetchPlayroomCreatorUserHeartbeat(fetchPlayroomCreatorUserHeartbeatVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession);
});
```

### Using `FetchPlayroomCreatorUserHeartbeat`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, fetchPlayroomCreatorUserHeartbeatRef, FetchPlayroomCreatorUserHeartbeatVariables } from '@kismoportal-dataconnect/generated';

// The `FetchPlayroomCreatorUserHeartbeat` query requires an argument of type `FetchPlayroomCreatorUserHeartbeatVariables`:
const fetchPlayroomCreatorUserHeartbeatVars: FetchPlayroomCreatorUserHeartbeatVariables = {
  id: ..., 
};

// Call the `fetchPlayroomCreatorUserHeartbeatRef()` function to get a reference to the query.
const ref = fetchPlayroomCreatorUserHeartbeatRef(fetchPlayroomCreatorUserHeartbeatVars);
// Variables can be defined inline as well.
const ref = fetchPlayroomCreatorUserHeartbeatRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = fetchPlayroomCreatorUserHeartbeatRef(dataConnect, fetchPlayroomCreatorUserHeartbeatVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.playroomSession);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession);
});
```

## FetchPlayroomInvitedUserHeartbeat
You can execute the `FetchPlayroomInvitedUserHeartbeat` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
fetchPlayroomInvitedUserHeartbeat(vars: FetchPlayroomInvitedUserHeartbeatVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomInvitedUserHeartbeatData, FetchPlayroomInvitedUserHeartbeatVariables>;

interface FetchPlayroomInvitedUserHeartbeatRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: FetchPlayroomInvitedUserHeartbeatVariables): QueryRef<FetchPlayroomInvitedUserHeartbeatData, FetchPlayroomInvitedUserHeartbeatVariables>;
}
export const fetchPlayroomInvitedUserHeartbeatRef: FetchPlayroomInvitedUserHeartbeatRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
fetchPlayroomInvitedUserHeartbeat(dc: DataConnect, vars: FetchPlayroomInvitedUserHeartbeatVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomInvitedUserHeartbeatData, FetchPlayroomInvitedUserHeartbeatVariables>;

interface FetchPlayroomInvitedUserHeartbeatRef {
  ...
  (dc: DataConnect, vars: FetchPlayroomInvitedUserHeartbeatVariables): QueryRef<FetchPlayroomInvitedUserHeartbeatData, FetchPlayroomInvitedUserHeartbeatVariables>;
}
export const fetchPlayroomInvitedUserHeartbeatRef: FetchPlayroomInvitedUserHeartbeatRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the fetchPlayroomInvitedUserHeartbeatRef:
```typescript
const name = fetchPlayroomInvitedUserHeartbeatRef.operationName;
console.log(name);
```

### Variables
The `FetchPlayroomInvitedUserHeartbeat` query requires an argument of type `FetchPlayroomInvitedUserHeartbeatVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface FetchPlayroomInvitedUserHeartbeatVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `FetchPlayroomInvitedUserHeartbeat` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `FetchPlayroomInvitedUserHeartbeatData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface FetchPlayroomInvitedUserHeartbeatData {
  playroomSession?: {
    invitedUserHeartbeat?: TimestampString | null;
  };
}
```
### Using `FetchPlayroomInvitedUserHeartbeat`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, fetchPlayroomInvitedUserHeartbeat, FetchPlayroomInvitedUserHeartbeatVariables } from '@kismoportal-dataconnect/generated';

// The `FetchPlayroomInvitedUserHeartbeat` query requires an argument of type `FetchPlayroomInvitedUserHeartbeatVariables`:
const fetchPlayroomInvitedUserHeartbeatVars: FetchPlayroomInvitedUserHeartbeatVariables = {
  id: ..., 
};

// Call the `fetchPlayroomInvitedUserHeartbeat()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await fetchPlayroomInvitedUserHeartbeat(fetchPlayroomInvitedUserHeartbeatVars);
// Variables can be defined inline as well.
const { data } = await fetchPlayroomInvitedUserHeartbeat({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await fetchPlayroomInvitedUserHeartbeat(dataConnect, fetchPlayroomInvitedUserHeartbeatVars);

console.log(data.playroomSession);

// Or, you can use the `Promise` API.
fetchPlayroomInvitedUserHeartbeat(fetchPlayroomInvitedUserHeartbeatVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession);
});
```

### Using `FetchPlayroomInvitedUserHeartbeat`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, fetchPlayroomInvitedUserHeartbeatRef, FetchPlayroomInvitedUserHeartbeatVariables } from '@kismoportal-dataconnect/generated';

// The `FetchPlayroomInvitedUserHeartbeat` query requires an argument of type `FetchPlayroomInvitedUserHeartbeatVariables`:
const fetchPlayroomInvitedUserHeartbeatVars: FetchPlayroomInvitedUserHeartbeatVariables = {
  id: ..., 
};

// Call the `fetchPlayroomInvitedUserHeartbeatRef()` function to get a reference to the query.
const ref = fetchPlayroomInvitedUserHeartbeatRef(fetchPlayroomInvitedUserHeartbeatVars);
// Variables can be defined inline as well.
const ref = fetchPlayroomInvitedUserHeartbeatRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = fetchPlayroomInvitedUserHeartbeatRef(dataConnect, fetchPlayroomInvitedUserHeartbeatVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.playroomSession);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession);
});
```

## FetchPlayroomSpectators
You can execute the `FetchPlayroomSpectators` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
fetchPlayroomSpectators(vars: FetchPlayroomSpectatorsVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomSpectatorsData, FetchPlayroomSpectatorsVariables>;

interface FetchPlayroomSpectatorsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: FetchPlayroomSpectatorsVariables): QueryRef<FetchPlayroomSpectatorsData, FetchPlayroomSpectatorsVariables>;
}
export const fetchPlayroomSpectatorsRef: FetchPlayroomSpectatorsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
fetchPlayroomSpectators(dc: DataConnect, vars: FetchPlayroomSpectatorsVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomSpectatorsData, FetchPlayroomSpectatorsVariables>;

interface FetchPlayroomSpectatorsRef {
  ...
  (dc: DataConnect, vars: FetchPlayroomSpectatorsVariables): QueryRef<FetchPlayroomSpectatorsData, FetchPlayroomSpectatorsVariables>;
}
export const fetchPlayroomSpectatorsRef: FetchPlayroomSpectatorsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the fetchPlayroomSpectatorsRef:
```typescript
const name = fetchPlayroomSpectatorsRef.operationName;
console.log(name);
```

### Variables
The `FetchPlayroomSpectators` query requires an argument of type `FetchPlayroomSpectatorsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface FetchPlayroomSpectatorsVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `FetchPlayroomSpectators` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `FetchPlayroomSpectatorsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface FetchPlayroomSpectatorsData {
  playroomSession?: {
    spectators?: unknown | null;
  };
}
```
### Using `FetchPlayroomSpectators`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, fetchPlayroomSpectators, FetchPlayroomSpectatorsVariables } from '@kismoportal-dataconnect/generated';

// The `FetchPlayroomSpectators` query requires an argument of type `FetchPlayroomSpectatorsVariables`:
const fetchPlayroomSpectatorsVars: FetchPlayroomSpectatorsVariables = {
  id: ..., 
};

// Call the `fetchPlayroomSpectators()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await fetchPlayroomSpectators(fetchPlayroomSpectatorsVars);
// Variables can be defined inline as well.
const { data } = await fetchPlayroomSpectators({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await fetchPlayroomSpectators(dataConnect, fetchPlayroomSpectatorsVars);

console.log(data.playroomSession);

// Or, you can use the `Promise` API.
fetchPlayroomSpectators(fetchPlayroomSpectatorsVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession);
});
```

### Using `FetchPlayroomSpectators`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, fetchPlayroomSpectatorsRef, FetchPlayroomSpectatorsVariables } from '@kismoportal-dataconnect/generated';

// The `FetchPlayroomSpectators` query requires an argument of type `FetchPlayroomSpectatorsVariables`:
const fetchPlayroomSpectatorsVars: FetchPlayroomSpectatorsVariables = {
  id: ..., 
};

// Call the `fetchPlayroomSpectatorsRef()` function to get a reference to the query.
const ref = fetchPlayroomSpectatorsRef(fetchPlayroomSpectatorsVars);
// Variables can be defined inline as well.
const ref = fetchPlayroomSpectatorsRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = fetchPlayroomSpectatorsRef(dataConnect, fetchPlayroomSpectatorsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.playroomSession);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession);
});
```

## FetchPlayroomSpectatorsJoined
You can execute the `FetchPlayroomSpectatorsJoined` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
fetchPlayroomSpectatorsJoined(vars: FetchPlayroomSpectatorsJoinedVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomSpectatorsJoinedData, FetchPlayroomSpectatorsJoinedVariables>;

interface FetchPlayroomSpectatorsJoinedRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: FetchPlayroomSpectatorsJoinedVariables): QueryRef<FetchPlayroomSpectatorsJoinedData, FetchPlayroomSpectatorsJoinedVariables>;
}
export const fetchPlayroomSpectatorsJoinedRef: FetchPlayroomSpectatorsJoinedRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
fetchPlayroomSpectatorsJoined(dc: DataConnect, vars: FetchPlayroomSpectatorsJoinedVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomSpectatorsJoinedData, FetchPlayroomSpectatorsJoinedVariables>;

interface FetchPlayroomSpectatorsJoinedRef {
  ...
  (dc: DataConnect, vars: FetchPlayroomSpectatorsJoinedVariables): QueryRef<FetchPlayroomSpectatorsJoinedData, FetchPlayroomSpectatorsJoinedVariables>;
}
export const fetchPlayroomSpectatorsJoinedRef: FetchPlayroomSpectatorsJoinedRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the fetchPlayroomSpectatorsJoinedRef:
```typescript
const name = fetchPlayroomSpectatorsJoinedRef.operationName;
console.log(name);
```

### Variables
The `FetchPlayroomSpectatorsJoined` query requires an argument of type `FetchPlayroomSpectatorsJoinedVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface FetchPlayroomSpectatorsJoinedVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `FetchPlayroomSpectatorsJoined` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `FetchPlayroomSpectatorsJoinedData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface FetchPlayroomSpectatorsJoinedData {
  playroomSession?: {
    spectatorsJoined?: unknown | null;
  };
}
```
### Using `FetchPlayroomSpectatorsJoined`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, fetchPlayroomSpectatorsJoined, FetchPlayroomSpectatorsJoinedVariables } from '@kismoportal-dataconnect/generated';

// The `FetchPlayroomSpectatorsJoined` query requires an argument of type `FetchPlayroomSpectatorsJoinedVariables`:
const fetchPlayroomSpectatorsJoinedVars: FetchPlayroomSpectatorsJoinedVariables = {
  id: ..., 
};

// Call the `fetchPlayroomSpectatorsJoined()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await fetchPlayroomSpectatorsJoined(fetchPlayroomSpectatorsJoinedVars);
// Variables can be defined inline as well.
const { data } = await fetchPlayroomSpectatorsJoined({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await fetchPlayroomSpectatorsJoined(dataConnect, fetchPlayroomSpectatorsJoinedVars);

console.log(data.playroomSession);

// Or, you can use the `Promise` API.
fetchPlayroomSpectatorsJoined(fetchPlayroomSpectatorsJoinedVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession);
});
```

### Using `FetchPlayroomSpectatorsJoined`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, fetchPlayroomSpectatorsJoinedRef, FetchPlayroomSpectatorsJoinedVariables } from '@kismoportal-dataconnect/generated';

// The `FetchPlayroomSpectatorsJoined` query requires an argument of type `FetchPlayroomSpectatorsJoinedVariables`:
const fetchPlayroomSpectatorsJoinedVars: FetchPlayroomSpectatorsJoinedVariables = {
  id: ..., 
};

// Call the `fetchPlayroomSpectatorsJoinedRef()` function to get a reference to the query.
const ref = fetchPlayroomSpectatorsJoinedRef(fetchPlayroomSpectatorsJoinedVars);
// Variables can be defined inline as well.
const ref = fetchPlayroomSpectatorsJoinedRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = fetchPlayroomSpectatorsJoinedRef(dataConnect, fetchPlayroomSpectatorsJoinedVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.playroomSession);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession);
});
```

## IsUserInPlayroomSpectators
You can execute the `IsUserInPlayroomSpectators` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
isUserInPlayroomSpectators(vars: IsUserInPlayroomSpectatorsVariables, options?: ExecuteQueryOptions): QueryPromise<IsUserInPlayroomSpectatorsData, IsUserInPlayroomSpectatorsVariables>;

interface IsUserInPlayroomSpectatorsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: IsUserInPlayroomSpectatorsVariables): QueryRef<IsUserInPlayroomSpectatorsData, IsUserInPlayroomSpectatorsVariables>;
}
export const isUserInPlayroomSpectatorsRef: IsUserInPlayroomSpectatorsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
isUserInPlayroomSpectators(dc: DataConnect, vars: IsUserInPlayroomSpectatorsVariables, options?: ExecuteQueryOptions): QueryPromise<IsUserInPlayroomSpectatorsData, IsUserInPlayroomSpectatorsVariables>;

interface IsUserInPlayroomSpectatorsRef {
  ...
  (dc: DataConnect, vars: IsUserInPlayroomSpectatorsVariables): QueryRef<IsUserInPlayroomSpectatorsData, IsUserInPlayroomSpectatorsVariables>;
}
export const isUserInPlayroomSpectatorsRef: IsUserInPlayroomSpectatorsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the isUserInPlayroomSpectatorsRef:
```typescript
const name = isUserInPlayroomSpectatorsRef.operationName;
console.log(name);
```

### Variables
The `IsUserInPlayroomSpectators` query requires an argument of type `IsUserInPlayroomSpectatorsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface IsUserInPlayroomSpectatorsVariables {
  id: UUIDString;
  userId: UUIDString;
}
```
### Return Type
Recall that executing the `IsUserInPlayroomSpectators` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `IsUserInPlayroomSpectatorsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface IsUserInPlayroomSpectatorsData {
  spectatorCheck?: unknown | null;
}
```
### Using `IsUserInPlayroomSpectators`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, isUserInPlayroomSpectators, IsUserInPlayroomSpectatorsVariables } from '@kismoportal-dataconnect/generated';

// The `IsUserInPlayroomSpectators` query requires an argument of type `IsUserInPlayroomSpectatorsVariables`:
const isUserInPlayroomSpectatorsVars: IsUserInPlayroomSpectatorsVariables = {
  id: ..., 
  userId: ..., 
};

// Call the `isUserInPlayroomSpectators()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await isUserInPlayroomSpectators(isUserInPlayroomSpectatorsVars);
// Variables can be defined inline as well.
const { data } = await isUserInPlayroomSpectators({ id: ..., userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await isUserInPlayroomSpectators(dataConnect, isUserInPlayroomSpectatorsVars);

console.log(data.spectatorCheck);

// Or, you can use the `Promise` API.
isUserInPlayroomSpectators(isUserInPlayroomSpectatorsVars).then((response) => {
  const data = response.data;
  console.log(data.spectatorCheck);
});
```

### Using `IsUserInPlayroomSpectators`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, isUserInPlayroomSpectatorsRef, IsUserInPlayroomSpectatorsVariables } from '@kismoportal-dataconnect/generated';

// The `IsUserInPlayroomSpectators` query requires an argument of type `IsUserInPlayroomSpectatorsVariables`:
const isUserInPlayroomSpectatorsVars: IsUserInPlayroomSpectatorsVariables = {
  id: ..., 
  userId: ..., 
};

// Call the `isUserInPlayroomSpectatorsRef()` function to get a reference to the query.
const ref = isUserInPlayroomSpectatorsRef(isUserInPlayroomSpectatorsVars);
// Variables can be defined inline as well.
const ref = isUserInPlayroomSpectatorsRef({ id: ..., userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = isUserInPlayroomSpectatorsRef(dataConnect, isUserInPlayroomSpectatorsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.spectatorCheck);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.spectatorCheck);
});
```

## ListActivePlayroomSessionsByUserAndGame
You can execute the `ListActivePlayroomSessionsByUserAndGame` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listActivePlayroomSessionsByUserAndGame(vars: ListActivePlayroomSessionsByUserAndGameVariables, options?: ExecuteQueryOptions): QueryPromise<ListActivePlayroomSessionsByUserAndGameData, ListActivePlayroomSessionsByUserAndGameVariables>;

interface ListActivePlayroomSessionsByUserAndGameRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListActivePlayroomSessionsByUserAndGameVariables): QueryRef<ListActivePlayroomSessionsByUserAndGameData, ListActivePlayroomSessionsByUserAndGameVariables>;
}
export const listActivePlayroomSessionsByUserAndGameRef: ListActivePlayroomSessionsByUserAndGameRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listActivePlayroomSessionsByUserAndGame(dc: DataConnect, vars: ListActivePlayroomSessionsByUserAndGameVariables, options?: ExecuteQueryOptions): QueryPromise<ListActivePlayroomSessionsByUserAndGameData, ListActivePlayroomSessionsByUserAndGameVariables>;

interface ListActivePlayroomSessionsByUserAndGameRef {
  ...
  (dc: DataConnect, vars: ListActivePlayroomSessionsByUserAndGameVariables): QueryRef<ListActivePlayroomSessionsByUserAndGameData, ListActivePlayroomSessionsByUserAndGameVariables>;
}
export const listActivePlayroomSessionsByUserAndGameRef: ListActivePlayroomSessionsByUserAndGameRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listActivePlayroomSessionsByUserAndGameRef:
```typescript
const name = listActivePlayroomSessionsByUserAndGameRef.operationName;
console.log(name);
```

### Variables
The `ListActivePlayroomSessionsByUserAndGame` query requires an argument of type `ListActivePlayroomSessionsByUserAndGameVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListActivePlayroomSessionsByUserAndGameVariables {
  userId: UUIDString;
  gameName: string;
}
```
### Return Type
Recall that executing the `ListActivePlayroomSessionsByUserAndGame` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListActivePlayroomSessionsByUserAndGameData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListActivePlayroomSessionsByUserAndGameData {
  playroomSessions: ({
    id: UUIDString;
    gameName: string;
    openedByUserId: UUIDString;
    invitedUserId?: UUIDString | null;
    invitedUserJoinedAt?: TimestampString | null;
    openedAt: TimestampString;
    creatorUserHeartbeat?: TimestampString | null;
    invitedUserHeartbeat?: TimestampString | null;
    spectators?: unknown | null;
    spectatorsJoined?: unknown | null;
    closedAt?: TimestampString | null;
  } & PlayroomSession_Key)[];
}
```
### Using `ListActivePlayroomSessionsByUserAndGame`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listActivePlayroomSessionsByUserAndGame, ListActivePlayroomSessionsByUserAndGameVariables } from '@kismoportal-dataconnect/generated';

// The `ListActivePlayroomSessionsByUserAndGame` query requires an argument of type `ListActivePlayroomSessionsByUserAndGameVariables`:
const listActivePlayroomSessionsByUserAndGameVars: ListActivePlayroomSessionsByUserAndGameVariables = {
  userId: ..., 
  gameName: ..., 
};

// Call the `listActivePlayroomSessionsByUserAndGame()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listActivePlayroomSessionsByUserAndGame(listActivePlayroomSessionsByUserAndGameVars);
// Variables can be defined inline as well.
const { data } = await listActivePlayroomSessionsByUserAndGame({ userId: ..., gameName: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listActivePlayroomSessionsByUserAndGame(dataConnect, listActivePlayroomSessionsByUserAndGameVars);

console.log(data.playroomSessions);

// Or, you can use the `Promise` API.
listActivePlayroomSessionsByUserAndGame(listActivePlayroomSessionsByUserAndGameVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSessions);
});
```

### Using `ListActivePlayroomSessionsByUserAndGame`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listActivePlayroomSessionsByUserAndGameRef, ListActivePlayroomSessionsByUserAndGameVariables } from '@kismoportal-dataconnect/generated';

// The `ListActivePlayroomSessionsByUserAndGame` query requires an argument of type `ListActivePlayroomSessionsByUserAndGameVariables`:
const listActivePlayroomSessionsByUserAndGameVars: ListActivePlayroomSessionsByUserAndGameVariables = {
  userId: ..., 
  gameName: ..., 
};

// Call the `listActivePlayroomSessionsByUserAndGameRef()` function to get a reference to the query.
const ref = listActivePlayroomSessionsByUserAndGameRef(listActivePlayroomSessionsByUserAndGameVars);
// Variables can be defined inline as well.
const ref = listActivePlayroomSessionsByUserAndGameRef({ userId: ..., gameName: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listActivePlayroomSessionsByUserAndGameRef(dataConnect, listActivePlayroomSessionsByUserAndGameVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.playroomSessions);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSessions);
});
```

## GetPlayroomSessionByPlayroomSessionId
You can execute the `GetPlayroomSessionByPlayroomSessionId` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getPlayroomSessionByPlayroomSessionId(vars: GetPlayroomSessionByPlayroomSessionIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetPlayroomSessionByPlayroomSessionIdData, GetPlayroomSessionByPlayroomSessionIdVariables>;

interface GetPlayroomSessionByPlayroomSessionIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetPlayroomSessionByPlayroomSessionIdVariables): QueryRef<GetPlayroomSessionByPlayroomSessionIdData, GetPlayroomSessionByPlayroomSessionIdVariables>;
}
export const getPlayroomSessionByPlayroomSessionIdRef: GetPlayroomSessionByPlayroomSessionIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getPlayroomSessionByPlayroomSessionId(dc: DataConnect, vars: GetPlayroomSessionByPlayroomSessionIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetPlayroomSessionByPlayroomSessionIdData, GetPlayroomSessionByPlayroomSessionIdVariables>;

interface GetPlayroomSessionByPlayroomSessionIdRef {
  ...
  (dc: DataConnect, vars: GetPlayroomSessionByPlayroomSessionIdVariables): QueryRef<GetPlayroomSessionByPlayroomSessionIdData, GetPlayroomSessionByPlayroomSessionIdVariables>;
}
export const getPlayroomSessionByPlayroomSessionIdRef: GetPlayroomSessionByPlayroomSessionIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getPlayroomSessionByPlayroomSessionIdRef:
```typescript
const name = getPlayroomSessionByPlayroomSessionIdRef.operationName;
console.log(name);
```

### Variables
The `GetPlayroomSessionByPlayroomSessionId` query requires an argument of type `GetPlayroomSessionByPlayroomSessionIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetPlayroomSessionByPlayroomSessionIdVariables {
  playroomSessionId: string;
}
```
### Return Type
Recall that executing the `GetPlayroomSessionByPlayroomSessionId` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetPlayroomSessionByPlayroomSessionIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetPlayroomSessionByPlayroomSessionIdData {
  playroomSessions: ({
    id: UUIDString;
    playroomSessionId: string;
    gameName: string;
    openedByUserId: UUIDString;
    invitedUserId?: UUIDString | null;
    invitedUserJoinedAt?: TimestampString | null;
    openedAt: TimestampString;
    creatorUserHeartbeat?: TimestampString | null;
    invitedUserHeartbeat?: TimestampString | null;
    spectators?: unknown | null;
    spectatorsJoined?: unknown | null;
    closedAt?: TimestampString | null;
    jwtTokenCreator: string;
    jwtTokenInvitedUser?: string | null;
    jwtTokenSpectator?: string | null;
  } & PlayroomSession_Key)[];
}
```
### Using `GetPlayroomSessionByPlayroomSessionId`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getPlayroomSessionByPlayroomSessionId, GetPlayroomSessionByPlayroomSessionIdVariables } from '@kismoportal-dataconnect/generated';

// The `GetPlayroomSessionByPlayroomSessionId` query requires an argument of type `GetPlayroomSessionByPlayroomSessionIdVariables`:
const getPlayroomSessionByPlayroomSessionIdVars: GetPlayroomSessionByPlayroomSessionIdVariables = {
  playroomSessionId: ..., 
};

// Call the `getPlayroomSessionByPlayroomSessionId()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getPlayroomSessionByPlayroomSessionId(getPlayroomSessionByPlayroomSessionIdVars);
// Variables can be defined inline as well.
const { data } = await getPlayroomSessionByPlayroomSessionId({ playroomSessionId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getPlayroomSessionByPlayroomSessionId(dataConnect, getPlayroomSessionByPlayroomSessionIdVars);

console.log(data.playroomSessions);

// Or, you can use the `Promise` API.
getPlayroomSessionByPlayroomSessionId(getPlayroomSessionByPlayroomSessionIdVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSessions);
});
```

### Using `GetPlayroomSessionByPlayroomSessionId`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getPlayroomSessionByPlayroomSessionIdRef, GetPlayroomSessionByPlayroomSessionIdVariables } from '@kismoportal-dataconnect/generated';

// The `GetPlayroomSessionByPlayroomSessionId` query requires an argument of type `GetPlayroomSessionByPlayroomSessionIdVariables`:
const getPlayroomSessionByPlayroomSessionIdVars: GetPlayroomSessionByPlayroomSessionIdVariables = {
  playroomSessionId: ..., 
};

// Call the `getPlayroomSessionByPlayroomSessionIdRef()` function to get a reference to the query.
const ref = getPlayroomSessionByPlayroomSessionIdRef(getPlayroomSessionByPlayroomSessionIdVars);
// Variables can be defined inline as well.
const ref = getPlayroomSessionByPlayroomSessionIdRef({ playroomSessionId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getPlayroomSessionByPlayroomSessionIdRef(dataConnect, getPlayroomSessionByPlayroomSessionIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.playroomSessions);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSessions);
});
```

## GetActivePlayroomSessionByPlayroomSessionId
You can execute the `GetActivePlayroomSessionByPlayroomSessionId` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getActivePlayroomSessionByPlayroomSessionId(vars: GetActivePlayroomSessionByPlayroomSessionIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetActivePlayroomSessionByPlayroomSessionIdData, GetActivePlayroomSessionByPlayroomSessionIdVariables>;

interface GetActivePlayroomSessionByPlayroomSessionIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetActivePlayroomSessionByPlayroomSessionIdVariables): QueryRef<GetActivePlayroomSessionByPlayroomSessionIdData, GetActivePlayroomSessionByPlayroomSessionIdVariables>;
}
export const getActivePlayroomSessionByPlayroomSessionIdRef: GetActivePlayroomSessionByPlayroomSessionIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getActivePlayroomSessionByPlayroomSessionId(dc: DataConnect, vars: GetActivePlayroomSessionByPlayroomSessionIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetActivePlayroomSessionByPlayroomSessionIdData, GetActivePlayroomSessionByPlayroomSessionIdVariables>;

interface GetActivePlayroomSessionByPlayroomSessionIdRef {
  ...
  (dc: DataConnect, vars: GetActivePlayroomSessionByPlayroomSessionIdVariables): QueryRef<GetActivePlayroomSessionByPlayroomSessionIdData, GetActivePlayroomSessionByPlayroomSessionIdVariables>;
}
export const getActivePlayroomSessionByPlayroomSessionIdRef: GetActivePlayroomSessionByPlayroomSessionIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getActivePlayroomSessionByPlayroomSessionIdRef:
```typescript
const name = getActivePlayroomSessionByPlayroomSessionIdRef.operationName;
console.log(name);
```

### Variables
The `GetActivePlayroomSessionByPlayroomSessionId` query requires an argument of type `GetActivePlayroomSessionByPlayroomSessionIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetActivePlayroomSessionByPlayroomSessionIdVariables {
  playroomSessionId: string;
}
```
### Return Type
Recall that executing the `GetActivePlayroomSessionByPlayroomSessionId` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetActivePlayroomSessionByPlayroomSessionIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetActivePlayroomSessionByPlayroomSessionIdData {
  playroomSessions: ({
    id: UUIDString;
    playroomSessionId: string;
    gameName: string;
    openedByUserId: UUIDString;
    invitedUserId?: UUIDString | null;
    invitedUserJoinedAt?: TimestampString | null;
    openedAt: TimestampString;
    creatorUserHeartbeat?: TimestampString | null;
    invitedUserHeartbeat?: TimestampString | null;
    spectators?: unknown | null;
    spectatorsJoined?: unknown | null;
    closedAt?: TimestampString | null;
    jwtTokenCreator: string;
    jwtTokenInvitedUser?: string | null;
    jwtTokenSpectator?: string | null;
  } & PlayroomSession_Key)[];
}
```
### Using `GetActivePlayroomSessionByPlayroomSessionId`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getActivePlayroomSessionByPlayroomSessionId, GetActivePlayroomSessionByPlayroomSessionIdVariables } from '@kismoportal-dataconnect/generated';

// The `GetActivePlayroomSessionByPlayroomSessionId` query requires an argument of type `GetActivePlayroomSessionByPlayroomSessionIdVariables`:
const getActivePlayroomSessionByPlayroomSessionIdVars: GetActivePlayroomSessionByPlayroomSessionIdVariables = {
  playroomSessionId: ..., 
};

// Call the `getActivePlayroomSessionByPlayroomSessionId()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getActivePlayroomSessionByPlayroomSessionId(getActivePlayroomSessionByPlayroomSessionIdVars);
// Variables can be defined inline as well.
const { data } = await getActivePlayroomSessionByPlayroomSessionId({ playroomSessionId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getActivePlayroomSessionByPlayroomSessionId(dataConnect, getActivePlayroomSessionByPlayroomSessionIdVars);

console.log(data.playroomSessions);

// Or, you can use the `Promise` API.
getActivePlayroomSessionByPlayroomSessionId(getActivePlayroomSessionByPlayroomSessionIdVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSessions);
});
```

### Using `GetActivePlayroomSessionByPlayroomSessionId`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getActivePlayroomSessionByPlayroomSessionIdRef, GetActivePlayroomSessionByPlayroomSessionIdVariables } from '@kismoportal-dataconnect/generated';

// The `GetActivePlayroomSessionByPlayroomSessionId` query requires an argument of type `GetActivePlayroomSessionByPlayroomSessionIdVariables`:
const getActivePlayroomSessionByPlayroomSessionIdVars: GetActivePlayroomSessionByPlayroomSessionIdVariables = {
  playroomSessionId: ..., 
};

// Call the `getActivePlayroomSessionByPlayroomSessionIdRef()` function to get a reference to the query.
const ref = getActivePlayroomSessionByPlayroomSessionIdRef(getActivePlayroomSessionByPlayroomSessionIdVars);
// Variables can be defined inline as well.
const ref = getActivePlayroomSessionByPlayroomSessionIdRef({ playroomSessionId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getActivePlayroomSessionByPlayroomSessionIdRef(dataConnect, getActivePlayroomSessionByPlayroomSessionIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.playroomSessions);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSessions);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `kismo-connector` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation requires an argument of type `CreateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserVariables {
  id: UUIDString;
  name: string;
  imageUrl: string;
}
```
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser, CreateUserVariables } from '@kismoportal-dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  id: ..., 
  name: ..., 
  imageUrl: ..., 
};

// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser(createUserVars);
// Variables can be defined inline as well.
const { data } = await createUser({ id: ..., name: ..., imageUrl: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect, createUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser(createUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef, CreateUserVariables } from '@kismoportal-dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  id: ..., 
  name: ..., 
  imageUrl: ..., 
};

// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef(createUserVars);
// Variables can be defined inline as well.
const ref = createUserRef({ id: ..., name: ..., imageUrl: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect, createUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## CreateChatroom
You can execute the `CreateChatroom` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createChatroom(vars: CreateChatroomVariables): MutationPromise<CreateChatroomData, CreateChatroomVariables>;

interface CreateChatroomRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateChatroomVariables): MutationRef<CreateChatroomData, CreateChatroomVariables>;
}
export const createChatroomRef: CreateChatroomRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createChatroom(dc: DataConnect, vars: CreateChatroomVariables): MutationPromise<CreateChatroomData, CreateChatroomVariables>;

interface CreateChatroomRef {
  ...
  (dc: DataConnect, vars: CreateChatroomVariables): MutationRef<CreateChatroomData, CreateChatroomVariables>;
}
export const createChatroomRef: CreateChatroomRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createChatroomRef:
```typescript
const name = createChatroomRef.operationName;
console.log(name);
```

### Variables
The `CreateChatroom` mutation requires an argument of type `CreateChatroomVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateChatroomVariables {
  name: string;
  isPublic: boolean;
  ownerId: UUIDString;
  cityId?: Int64String | null;
  imageUrl?: string | null;
  description?: string | null;
  imageAtribution?: string | null;
}
```
### Return Type
Recall that executing the `CreateChatroom` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateChatroomData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateChatroomData {
  chatroom_insert: Chatroom_Key;
}
```
### Using `CreateChatroom`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createChatroom, CreateChatroomVariables } from '@kismoportal-dataconnect/generated';

// The `CreateChatroom` mutation requires an argument of type `CreateChatroomVariables`:
const createChatroomVars: CreateChatroomVariables = {
  name: ..., 
  isPublic: ..., 
  ownerId: ..., 
  cityId: ..., // optional
  imageUrl: ..., // optional
  description: ..., // optional
  imageAtribution: ..., // optional
};

// Call the `createChatroom()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createChatroom(createChatroomVars);
// Variables can be defined inline as well.
const { data } = await createChatroom({ name: ..., isPublic: ..., ownerId: ..., cityId: ..., imageUrl: ..., description: ..., imageAtribution: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createChatroom(dataConnect, createChatroomVars);

console.log(data.chatroom_insert);

// Or, you can use the `Promise` API.
createChatroom(createChatroomVars).then((response) => {
  const data = response.data;
  console.log(data.chatroom_insert);
});
```

### Using `CreateChatroom`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createChatroomRef, CreateChatroomVariables } from '@kismoportal-dataconnect/generated';

// The `CreateChatroom` mutation requires an argument of type `CreateChatroomVariables`:
const createChatroomVars: CreateChatroomVariables = {
  name: ..., 
  isPublic: ..., 
  ownerId: ..., 
  cityId: ..., // optional
  imageUrl: ..., // optional
  description: ..., // optional
  imageAtribution: ..., // optional
};

// Call the `createChatroomRef()` function to get a reference to the mutation.
const ref = createChatroomRef(createChatroomVars);
// Variables can be defined inline as well.
const ref = createChatroomRef({ name: ..., isPublic: ..., ownerId: ..., cityId: ..., imageUrl: ..., description: ..., imageAtribution: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createChatroomRef(dataConnect, createChatroomVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.chatroom_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.chatroom_insert);
});
```

## JoinChatroom
You can execute the `JoinChatroom` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
joinChatroom(vars: JoinChatroomVariables): MutationPromise<JoinChatroomData, JoinChatroomVariables>;

interface JoinChatroomRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: JoinChatroomVariables): MutationRef<JoinChatroomData, JoinChatroomVariables>;
}
export const joinChatroomRef: JoinChatroomRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
joinChatroom(dc: DataConnect, vars: JoinChatroomVariables): MutationPromise<JoinChatroomData, JoinChatroomVariables>;

interface JoinChatroomRef {
  ...
  (dc: DataConnect, vars: JoinChatroomVariables): MutationRef<JoinChatroomData, JoinChatroomVariables>;
}
export const joinChatroomRef: JoinChatroomRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the joinChatroomRef:
```typescript
const name = joinChatroomRef.operationName;
console.log(name);
```

### Variables
The `JoinChatroom` mutation requires an argument of type `JoinChatroomVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface JoinChatroomVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
}
```
### Return Type
Recall that executing the `JoinChatroom` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `JoinChatroomData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface JoinChatroomData {
  chatroomMember_insert: ChatroomMember_Key;
}
```
### Using `JoinChatroom`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, joinChatroom, JoinChatroomVariables } from '@kismoportal-dataconnect/generated';

// The `JoinChatroom` mutation requires an argument of type `JoinChatroomVariables`:
const joinChatroomVars: JoinChatroomVariables = {
  userId: ..., 
  chatroomId: ..., 
};

// Call the `joinChatroom()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await joinChatroom(joinChatroomVars);
// Variables can be defined inline as well.
const { data } = await joinChatroom({ userId: ..., chatroomId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await joinChatroom(dataConnect, joinChatroomVars);

console.log(data.chatroomMember_insert);

// Or, you can use the `Promise` API.
joinChatroom(joinChatroomVars).then((response) => {
  const data = response.data;
  console.log(data.chatroomMember_insert);
});
```

### Using `JoinChatroom`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, joinChatroomRef, JoinChatroomVariables } from '@kismoportal-dataconnect/generated';

// The `JoinChatroom` mutation requires an argument of type `JoinChatroomVariables`:
const joinChatroomVars: JoinChatroomVariables = {
  userId: ..., 
  chatroomId: ..., 
};

// Call the `joinChatroomRef()` function to get a reference to the mutation.
const ref = joinChatroomRef(joinChatroomVars);
// Variables can be defined inline as well.
const ref = joinChatroomRef({ userId: ..., chatroomId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = joinChatroomRef(dataConnect, joinChatroomVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.chatroomMember_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.chatroomMember_insert);
});
```

## LeaveChatroom
You can execute the `LeaveChatroom` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
leaveChatroom(vars: LeaveChatroomVariables): MutationPromise<LeaveChatroomData, LeaveChatroomVariables>;

interface LeaveChatroomRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: LeaveChatroomVariables): MutationRef<LeaveChatroomData, LeaveChatroomVariables>;
}
export const leaveChatroomRef: LeaveChatroomRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
leaveChatroom(dc: DataConnect, vars: LeaveChatroomVariables): MutationPromise<LeaveChatroomData, LeaveChatroomVariables>;

interface LeaveChatroomRef {
  ...
  (dc: DataConnect, vars: LeaveChatroomVariables): MutationRef<LeaveChatroomData, LeaveChatroomVariables>;
}
export const leaveChatroomRef: LeaveChatroomRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the leaveChatroomRef:
```typescript
const name = leaveChatroomRef.operationName;
console.log(name);
```

### Variables
The `LeaveChatroom` mutation requires an argument of type `LeaveChatroomVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface LeaveChatroomVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
}
```
### Return Type
Recall that executing the `LeaveChatroom` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `LeaveChatroomData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface LeaveChatroomData {
  chatroomMember_delete?: ChatroomMember_Key | null;
}
```
### Using `LeaveChatroom`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, leaveChatroom, LeaveChatroomVariables } from '@kismoportal-dataconnect/generated';

// The `LeaveChatroom` mutation requires an argument of type `LeaveChatroomVariables`:
const leaveChatroomVars: LeaveChatroomVariables = {
  userId: ..., 
  chatroomId: ..., 
};

// Call the `leaveChatroom()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await leaveChatroom(leaveChatroomVars);
// Variables can be defined inline as well.
const { data } = await leaveChatroom({ userId: ..., chatroomId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await leaveChatroom(dataConnect, leaveChatroomVars);

console.log(data.chatroomMember_delete);

// Or, you can use the `Promise` API.
leaveChatroom(leaveChatroomVars).then((response) => {
  const data = response.data;
  console.log(data.chatroomMember_delete);
});
```

### Using `LeaveChatroom`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, leaveChatroomRef, LeaveChatroomVariables } from '@kismoportal-dataconnect/generated';

// The `LeaveChatroom` mutation requires an argument of type `LeaveChatroomVariables`:
const leaveChatroomVars: LeaveChatroomVariables = {
  userId: ..., 
  chatroomId: ..., 
};

// Call the `leaveChatroomRef()` function to get a reference to the mutation.
const ref = leaveChatroomRef(leaveChatroomVars);
// Variables can be defined inline as well.
const ref = leaveChatroomRef({ userId: ..., chatroomId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = leaveChatroomRef(dataConnect, leaveChatroomVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.chatroomMember_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.chatroomMember_delete);
});
```

## SendMessage
You can execute the `SendMessage` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
sendMessage(vars: SendMessageVariables): MutationPromise<SendMessageData, SendMessageVariables>;

interface SendMessageRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: SendMessageVariables): MutationRef<SendMessageData, SendMessageVariables>;
}
export const sendMessageRef: SendMessageRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
sendMessage(dc: DataConnect, vars: SendMessageVariables): MutationPromise<SendMessageData, SendMessageVariables>;

interface SendMessageRef {
  ...
  (dc: DataConnect, vars: SendMessageVariables): MutationRef<SendMessageData, SendMessageVariables>;
}
export const sendMessageRef: SendMessageRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the sendMessageRef:
```typescript
const name = sendMessageRef.operationName;
console.log(name);
```

### Variables
The `SendMessage` mutation requires an argument of type `SendMessageVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface SendMessageVariables {
  chatroomId: UUIDString;
  senderId: UUIDString;
  text?: string | null;
  imageUrl?: string | null;
}
```
### Return Type
Recall that executing the `SendMessage` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `SendMessageData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface SendMessageData {
  message_insert: Message_Key;
}
```
### Using `SendMessage`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, sendMessage, SendMessageVariables } from '@kismoportal-dataconnect/generated';

// The `SendMessage` mutation requires an argument of type `SendMessageVariables`:
const sendMessageVars: SendMessageVariables = {
  chatroomId: ..., 
  senderId: ..., 
  text: ..., // optional
  imageUrl: ..., // optional
};

// Call the `sendMessage()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await sendMessage(sendMessageVars);
// Variables can be defined inline as well.
const { data } = await sendMessage({ chatroomId: ..., senderId: ..., text: ..., imageUrl: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await sendMessage(dataConnect, sendMessageVars);

console.log(data.message_insert);

// Or, you can use the `Promise` API.
sendMessage(sendMessageVars).then((response) => {
  const data = response.data;
  console.log(data.message_insert);
});
```

### Using `SendMessage`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, sendMessageRef, SendMessageVariables } from '@kismoportal-dataconnect/generated';

// The `SendMessage` mutation requires an argument of type `SendMessageVariables`:
const sendMessageVars: SendMessageVariables = {
  chatroomId: ..., 
  senderId: ..., 
  text: ..., // optional
  imageUrl: ..., // optional
};

// Call the `sendMessageRef()` function to get a reference to the mutation.
const ref = sendMessageRef(sendMessageVars);
// Variables can be defined inline as well.
const ref = sendMessageRef({ chatroomId: ..., senderId: ..., text: ..., imageUrl: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = sendMessageRef(dataConnect, sendMessageVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.message_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.message_insert);
});
```

## UpdateStatus
You can execute the `UpdateStatus` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateStatus(vars: UpdateStatusVariables): MutationPromise<UpdateStatusData, UpdateStatusVariables>;

interface UpdateStatusRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateStatusVariables): MutationRef<UpdateStatusData, UpdateStatusVariables>;
}
export const updateStatusRef: UpdateStatusRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateStatus(dc: DataConnect, vars: UpdateStatusVariables): MutationPromise<UpdateStatusData, UpdateStatusVariables>;

interface UpdateStatusRef {
  ...
  (dc: DataConnect, vars: UpdateStatusVariables): MutationRef<UpdateStatusData, UpdateStatusVariables>;
}
export const updateStatusRef: UpdateStatusRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateStatusRef:
```typescript
const name = updateStatusRef.operationName;
console.log(name);
```

### Variables
The `UpdateStatus` mutation requires an argument of type `UpdateStatusVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateStatusVariables {
  id: UUIDString;
  online: boolean;
  lastSeenAt: TimestampString;
}
```
### Return Type
Recall that executing the `UpdateStatus` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateStatusData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateStatusData {
  user_update?: User_Key | null;
}
```
### Using `UpdateStatus`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateStatus, UpdateStatusVariables } from '@kismoportal-dataconnect/generated';

// The `UpdateStatus` mutation requires an argument of type `UpdateStatusVariables`:
const updateStatusVars: UpdateStatusVariables = {
  id: ..., 
  online: ..., 
  lastSeenAt: ..., 
};

// Call the `updateStatus()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateStatus(updateStatusVars);
// Variables can be defined inline as well.
const { data } = await updateStatus({ id: ..., online: ..., lastSeenAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateStatus(dataConnect, updateStatusVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateStatus(updateStatusVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateStatus`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateStatusRef, UpdateStatusVariables } from '@kismoportal-dataconnect/generated';

// The `UpdateStatus` mutation requires an argument of type `UpdateStatusVariables`:
const updateStatusVars: UpdateStatusVariables = {
  id: ..., 
  online: ..., 
  lastSeenAt: ..., 
};

// Call the `updateStatusRef()` function to get a reference to the mutation.
const ref = updateStatusRef(updateStatusVars);
// Variables can be defined inline as well.
const ref = updateStatusRef({ id: ..., online: ..., lastSeenAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateStatusRef(dataConnect, updateStatusVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## UpdateUserImage
You can execute the `UpdateUserImage` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUserImage(vars: UpdateUserImageVariables): MutationPromise<UpdateUserImageData, UpdateUserImageVariables>;

interface UpdateUserImageRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserImageVariables): MutationRef<UpdateUserImageData, UpdateUserImageVariables>;
}
export const updateUserImageRef: UpdateUserImageRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUserImage(dc: DataConnect, vars: UpdateUserImageVariables): MutationPromise<UpdateUserImageData, UpdateUserImageVariables>;

interface UpdateUserImageRef {
  ...
  (dc: DataConnect, vars: UpdateUserImageVariables): MutationRef<UpdateUserImageData, UpdateUserImageVariables>;
}
export const updateUserImageRef: UpdateUserImageRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserImageRef:
```typescript
const name = updateUserImageRef.operationName;
console.log(name);
```

### Variables
The `UpdateUserImage` mutation requires an argument of type `UpdateUserImageVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateUserImageVariables {
  id: UUIDString;
  imageUrl: string;
}
```
### Return Type
Recall that executing the `UpdateUserImage` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserImageData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserImageData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUserImage`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUserImage, UpdateUserImageVariables } from '@kismoportal-dataconnect/generated';

// The `UpdateUserImage` mutation requires an argument of type `UpdateUserImageVariables`:
const updateUserImageVars: UpdateUserImageVariables = {
  id: ..., 
  imageUrl: ..., 
};

// Call the `updateUserImage()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUserImage(updateUserImageVars);
// Variables can be defined inline as well.
const { data } = await updateUserImage({ id: ..., imageUrl: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUserImage(dataConnect, updateUserImageVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUserImage(updateUserImageVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUserImage`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserImageRef, UpdateUserImageVariables } from '@kismoportal-dataconnect/generated';

// The `UpdateUserImage` mutation requires an argument of type `UpdateUserImageVariables`:
const updateUserImageVars: UpdateUserImageVariables = {
  id: ..., 
  imageUrl: ..., 
};

// Call the `updateUserImageRef()` function to get a reference to the mutation.
const ref = updateUserImageRef(updateUserImageVars);
// Variables can be defined inline as well.
const ref = updateUserImageRef({ id: ..., imageUrl: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserImageRef(dataConnect, updateUserImageVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## UpsertFriendWith
You can execute the `UpsertFriendWith` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
upsertFriendWith(vars: UpsertFriendWithVariables): MutationPromise<UpsertFriendWithData, UpsertFriendWithVariables>;

interface UpsertFriendWithRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertFriendWithVariables): MutationRef<UpsertFriendWithData, UpsertFriendWithVariables>;
}
export const upsertFriendWithRef: UpsertFriendWithRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertFriendWith(dc: DataConnect, vars: UpsertFriendWithVariables): MutationPromise<UpsertFriendWithData, UpsertFriendWithVariables>;

interface UpsertFriendWithRef {
  ...
  (dc: DataConnect, vars: UpsertFriendWithVariables): MutationRef<UpsertFriendWithData, UpsertFriendWithVariables>;
}
export const upsertFriendWithRef: UpsertFriendWithRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertFriendWithRef:
```typescript
const name = upsertFriendWithRef.operationName;
console.log(name);
```

### Variables
The `UpsertFriendWith` mutation requires an argument of type `UpsertFriendWithVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpsertFriendWithVariables {
  userId: UUIDString;
  friendWithUserId: UUIDString;
  requestSent: boolean;
  requestSentAt?: TimestampString | null;
  requestAccepted: boolean;
  requestAcceptedAt?: TimestampString | null;
}
```
### Return Type
Recall that executing the `UpsertFriendWith` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertFriendWithData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertFriendWithData {
  friendWith_upsert: FriendWith_Key;
}
```
### Using `UpsertFriendWith`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertFriendWith, UpsertFriendWithVariables } from '@kismoportal-dataconnect/generated';

// The `UpsertFriendWith` mutation requires an argument of type `UpsertFriendWithVariables`:
const upsertFriendWithVars: UpsertFriendWithVariables = {
  userId: ..., 
  friendWithUserId: ..., 
  requestSent: ..., 
  requestSentAt: ..., // optional
  requestAccepted: ..., 
  requestAcceptedAt: ..., // optional
};

// Call the `upsertFriendWith()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertFriendWith(upsertFriendWithVars);
// Variables can be defined inline as well.
const { data } = await upsertFriendWith({ userId: ..., friendWithUserId: ..., requestSent: ..., requestSentAt: ..., requestAccepted: ..., requestAcceptedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertFriendWith(dataConnect, upsertFriendWithVars);

console.log(data.friendWith_upsert);

// Or, you can use the `Promise` API.
upsertFriendWith(upsertFriendWithVars).then((response) => {
  const data = response.data;
  console.log(data.friendWith_upsert);
});
```

### Using `UpsertFriendWith`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertFriendWithRef, UpsertFriendWithVariables } from '@kismoportal-dataconnect/generated';

// The `UpsertFriendWith` mutation requires an argument of type `UpsertFriendWithVariables`:
const upsertFriendWithVars: UpsertFriendWithVariables = {
  userId: ..., 
  friendWithUserId: ..., 
  requestSent: ..., 
  requestSentAt: ..., // optional
  requestAccepted: ..., 
  requestAcceptedAt: ..., // optional
};

// Call the `upsertFriendWithRef()` function to get a reference to the mutation.
const ref = upsertFriendWithRef(upsertFriendWithVars);
// Variables can be defined inline as well.
const ref = upsertFriendWithRef({ userId: ..., friendWithUserId: ..., requestSent: ..., requestSentAt: ..., requestAccepted: ..., requestAcceptedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertFriendWithRef(dataConnect, upsertFriendWithVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.friendWith_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.friendWith_upsert);
});
```

## SendFriendWithRequest
You can execute the `SendFriendWithRequest` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
sendFriendWithRequest(vars: SendFriendWithRequestVariables): MutationPromise<SendFriendWithRequestData, SendFriendWithRequestVariables>;

interface SendFriendWithRequestRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: SendFriendWithRequestVariables): MutationRef<SendFriendWithRequestData, SendFriendWithRequestVariables>;
}
export const sendFriendWithRequestRef: SendFriendWithRequestRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
sendFriendWithRequest(dc: DataConnect, vars: SendFriendWithRequestVariables): MutationPromise<SendFriendWithRequestData, SendFriendWithRequestVariables>;

interface SendFriendWithRequestRef {
  ...
  (dc: DataConnect, vars: SendFriendWithRequestVariables): MutationRef<SendFriendWithRequestData, SendFriendWithRequestVariables>;
}
export const sendFriendWithRequestRef: SendFriendWithRequestRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the sendFriendWithRequestRef:
```typescript
const name = sendFriendWithRequestRef.operationName;
console.log(name);
```

### Variables
The `SendFriendWithRequest` mutation requires an argument of type `SendFriendWithRequestVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface SendFriendWithRequestVariables {
  userId: UUIDString;
  friendWithUserId: UUIDString;
  sentAt: TimestampString;
}
```
### Return Type
Recall that executing the `SendFriendWithRequest` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `SendFriendWithRequestData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface SendFriendWithRequestData {
  friendWith_upsert: FriendWith_Key;
}
```
### Using `SendFriendWithRequest`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, sendFriendWithRequest, SendFriendWithRequestVariables } from '@kismoportal-dataconnect/generated';

// The `SendFriendWithRequest` mutation requires an argument of type `SendFriendWithRequestVariables`:
const sendFriendWithRequestVars: SendFriendWithRequestVariables = {
  userId: ..., 
  friendWithUserId: ..., 
  sentAt: ..., 
};

// Call the `sendFriendWithRequest()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await sendFriendWithRequest(sendFriendWithRequestVars);
// Variables can be defined inline as well.
const { data } = await sendFriendWithRequest({ userId: ..., friendWithUserId: ..., sentAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await sendFriendWithRequest(dataConnect, sendFriendWithRequestVars);

console.log(data.friendWith_upsert);

// Or, you can use the `Promise` API.
sendFriendWithRequest(sendFriendWithRequestVars).then((response) => {
  const data = response.data;
  console.log(data.friendWith_upsert);
});
```

### Using `SendFriendWithRequest`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, sendFriendWithRequestRef, SendFriendWithRequestVariables } from '@kismoportal-dataconnect/generated';

// The `SendFriendWithRequest` mutation requires an argument of type `SendFriendWithRequestVariables`:
const sendFriendWithRequestVars: SendFriendWithRequestVariables = {
  userId: ..., 
  friendWithUserId: ..., 
  sentAt: ..., 
};

// Call the `sendFriendWithRequestRef()` function to get a reference to the mutation.
const ref = sendFriendWithRequestRef(sendFriendWithRequestVars);
// Variables can be defined inline as well.
const ref = sendFriendWithRequestRef({ userId: ..., friendWithUserId: ..., sentAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = sendFriendWithRequestRef(dataConnect, sendFriendWithRequestVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.friendWith_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.friendWith_upsert);
});
```

## AcceptFriendWithRequest
You can execute the `AcceptFriendWithRequest` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
acceptFriendWithRequest(vars: AcceptFriendWithRequestVariables): MutationPromise<AcceptFriendWithRequestData, AcceptFriendWithRequestVariables>;

interface AcceptFriendWithRequestRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AcceptFriendWithRequestVariables): MutationRef<AcceptFriendWithRequestData, AcceptFriendWithRequestVariables>;
}
export const acceptFriendWithRequestRef: AcceptFriendWithRequestRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
acceptFriendWithRequest(dc: DataConnect, vars: AcceptFriendWithRequestVariables): MutationPromise<AcceptFriendWithRequestData, AcceptFriendWithRequestVariables>;

interface AcceptFriendWithRequestRef {
  ...
  (dc: DataConnect, vars: AcceptFriendWithRequestVariables): MutationRef<AcceptFriendWithRequestData, AcceptFriendWithRequestVariables>;
}
export const acceptFriendWithRequestRef: AcceptFriendWithRequestRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the acceptFriendWithRequestRef:
```typescript
const name = acceptFriendWithRequestRef.operationName;
console.log(name);
```

### Variables
The `AcceptFriendWithRequest` mutation requires an argument of type `AcceptFriendWithRequestVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AcceptFriendWithRequestVariables {
  userId: UUIDString;
  friendWithUserId: UUIDString;
  acceptedAt: TimestampString;
}
```
### Return Type
Recall that executing the `AcceptFriendWithRequest` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AcceptFriendWithRequestData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AcceptFriendWithRequestData {
  friendWith_update?: FriendWith_Key | null;
}
```
### Using `AcceptFriendWithRequest`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, acceptFriendWithRequest, AcceptFriendWithRequestVariables } from '@kismoportal-dataconnect/generated';

// The `AcceptFriendWithRequest` mutation requires an argument of type `AcceptFriendWithRequestVariables`:
const acceptFriendWithRequestVars: AcceptFriendWithRequestVariables = {
  userId: ..., 
  friendWithUserId: ..., 
  acceptedAt: ..., 
};

// Call the `acceptFriendWithRequest()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await acceptFriendWithRequest(acceptFriendWithRequestVars);
// Variables can be defined inline as well.
const { data } = await acceptFriendWithRequest({ userId: ..., friendWithUserId: ..., acceptedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await acceptFriendWithRequest(dataConnect, acceptFriendWithRequestVars);

console.log(data.friendWith_update);

// Or, you can use the `Promise` API.
acceptFriendWithRequest(acceptFriendWithRequestVars).then((response) => {
  const data = response.data;
  console.log(data.friendWith_update);
});
```

### Using `AcceptFriendWithRequest`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, acceptFriendWithRequestRef, AcceptFriendWithRequestVariables } from '@kismoportal-dataconnect/generated';

// The `AcceptFriendWithRequest` mutation requires an argument of type `AcceptFriendWithRequestVariables`:
const acceptFriendWithRequestVars: AcceptFriendWithRequestVariables = {
  userId: ..., 
  friendWithUserId: ..., 
  acceptedAt: ..., 
};

// Call the `acceptFriendWithRequestRef()` function to get a reference to the mutation.
const ref = acceptFriendWithRequestRef(acceptFriendWithRequestVars);
// Variables can be defined inline as well.
const ref = acceptFriendWithRequestRef({ userId: ..., friendWithUserId: ..., acceptedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = acceptFriendWithRequestRef(dataConnect, acceptFriendWithRequestVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.friendWith_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.friendWith_update);
});
```

## AcceptFriendWithRequestBidirectional
You can execute the `AcceptFriendWithRequestBidirectional` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
acceptFriendWithRequestBidirectional(vars: AcceptFriendWithRequestBidirectionalVariables): MutationPromise<AcceptFriendWithRequestBidirectionalData, AcceptFriendWithRequestBidirectionalVariables>;

interface AcceptFriendWithRequestBidirectionalRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AcceptFriendWithRequestBidirectionalVariables): MutationRef<AcceptFriendWithRequestBidirectionalData, AcceptFriendWithRequestBidirectionalVariables>;
}
export const acceptFriendWithRequestBidirectionalRef: AcceptFriendWithRequestBidirectionalRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
acceptFriendWithRequestBidirectional(dc: DataConnect, vars: AcceptFriendWithRequestBidirectionalVariables): MutationPromise<AcceptFriendWithRequestBidirectionalData, AcceptFriendWithRequestBidirectionalVariables>;

interface AcceptFriendWithRequestBidirectionalRef {
  ...
  (dc: DataConnect, vars: AcceptFriendWithRequestBidirectionalVariables): MutationRef<AcceptFriendWithRequestBidirectionalData, AcceptFriendWithRequestBidirectionalVariables>;
}
export const acceptFriendWithRequestBidirectionalRef: AcceptFriendWithRequestBidirectionalRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the acceptFriendWithRequestBidirectionalRef:
```typescript
const name = acceptFriendWithRequestBidirectionalRef.operationName;
console.log(name);
```

### Variables
The `AcceptFriendWithRequestBidirectional` mutation requires an argument of type `AcceptFriendWithRequestBidirectionalVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AcceptFriendWithRequestBidirectionalVariables {
  requesterUserId: UUIDString;
  accepterUserId: UUIDString;
  acceptedAt: TimestampString;
}
```
### Return Type
Recall that executing the `AcceptFriendWithRequestBidirectional` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AcceptFriendWithRequestBidirectionalData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AcceptFriendWithRequestBidirectionalData {
  _execute?: number | null;
}
```
### Using `AcceptFriendWithRequestBidirectional`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, acceptFriendWithRequestBidirectional, AcceptFriendWithRequestBidirectionalVariables } from '@kismoportal-dataconnect/generated';

// The `AcceptFriendWithRequestBidirectional` mutation requires an argument of type `AcceptFriendWithRequestBidirectionalVariables`:
const acceptFriendWithRequestBidirectionalVars: AcceptFriendWithRequestBidirectionalVariables = {
  requesterUserId: ..., 
  accepterUserId: ..., 
  acceptedAt: ..., 
};

// Call the `acceptFriendWithRequestBidirectional()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await acceptFriendWithRequestBidirectional(acceptFriendWithRequestBidirectionalVars);
// Variables can be defined inline as well.
const { data } = await acceptFriendWithRequestBidirectional({ requesterUserId: ..., accepterUserId: ..., acceptedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await acceptFriendWithRequestBidirectional(dataConnect, acceptFriendWithRequestBidirectionalVars);

console.log(data._execute);

// Or, you can use the `Promise` API.
acceptFriendWithRequestBidirectional(acceptFriendWithRequestBidirectionalVars).then((response) => {
  const data = response.data;
  console.log(data._execute);
});
```

### Using `AcceptFriendWithRequestBidirectional`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, acceptFriendWithRequestBidirectionalRef, AcceptFriendWithRequestBidirectionalVariables } from '@kismoportal-dataconnect/generated';

// The `AcceptFriendWithRequestBidirectional` mutation requires an argument of type `AcceptFriendWithRequestBidirectionalVariables`:
const acceptFriendWithRequestBidirectionalVars: AcceptFriendWithRequestBidirectionalVariables = {
  requesterUserId: ..., 
  accepterUserId: ..., 
  acceptedAt: ..., 
};

// Call the `acceptFriendWithRequestBidirectionalRef()` function to get a reference to the mutation.
const ref = acceptFriendWithRequestBidirectionalRef(acceptFriendWithRequestBidirectionalVars);
// Variables can be defined inline as well.
const ref = acceptFriendWithRequestBidirectionalRef({ requesterUserId: ..., accepterUserId: ..., acceptedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = acceptFriendWithRequestBidirectionalRef(dataConnect, acceptFriendWithRequestBidirectionalVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data._execute);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data._execute);
});
```

## RejectFriendWithRequestBidirectional
You can execute the `RejectFriendWithRequestBidirectional` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
rejectFriendWithRequestBidirectional(vars: RejectFriendWithRequestBidirectionalVariables): MutationPromise<RejectFriendWithRequestBidirectionalData, RejectFriendWithRequestBidirectionalVariables>;

interface RejectFriendWithRequestBidirectionalRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: RejectFriendWithRequestBidirectionalVariables): MutationRef<RejectFriendWithRequestBidirectionalData, RejectFriendWithRequestBidirectionalVariables>;
}
export const rejectFriendWithRequestBidirectionalRef: RejectFriendWithRequestBidirectionalRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
rejectFriendWithRequestBidirectional(dc: DataConnect, vars: RejectFriendWithRequestBidirectionalVariables): MutationPromise<RejectFriendWithRequestBidirectionalData, RejectFriendWithRequestBidirectionalVariables>;

interface RejectFriendWithRequestBidirectionalRef {
  ...
  (dc: DataConnect, vars: RejectFriendWithRequestBidirectionalVariables): MutationRef<RejectFriendWithRequestBidirectionalData, RejectFriendWithRequestBidirectionalVariables>;
}
export const rejectFriendWithRequestBidirectionalRef: RejectFriendWithRequestBidirectionalRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the rejectFriendWithRequestBidirectionalRef:
```typescript
const name = rejectFriendWithRequestBidirectionalRef.operationName;
console.log(name);
```

### Variables
The `RejectFriendWithRequestBidirectional` mutation requires an argument of type `RejectFriendWithRequestBidirectionalVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface RejectFriendWithRequestBidirectionalVariables {
  userAId: UUIDString;
  userBId: UUIDString;
}
```
### Return Type
Recall that executing the `RejectFriendWithRequestBidirectional` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `RejectFriendWithRequestBidirectionalData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface RejectFriendWithRequestBidirectionalData {
  _execute?: number | null;
}
```
### Using `RejectFriendWithRequestBidirectional`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, rejectFriendWithRequestBidirectional, RejectFriendWithRequestBidirectionalVariables } from '@kismoportal-dataconnect/generated';

// The `RejectFriendWithRequestBidirectional` mutation requires an argument of type `RejectFriendWithRequestBidirectionalVariables`:
const rejectFriendWithRequestBidirectionalVars: RejectFriendWithRequestBidirectionalVariables = {
  userAId: ..., 
  userBId: ..., 
};

// Call the `rejectFriendWithRequestBidirectional()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await rejectFriendWithRequestBidirectional(rejectFriendWithRequestBidirectionalVars);
// Variables can be defined inline as well.
const { data } = await rejectFriendWithRequestBidirectional({ userAId: ..., userBId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await rejectFriendWithRequestBidirectional(dataConnect, rejectFriendWithRequestBidirectionalVars);

console.log(data._execute);

// Or, you can use the `Promise` API.
rejectFriendWithRequestBidirectional(rejectFriendWithRequestBidirectionalVars).then((response) => {
  const data = response.data;
  console.log(data._execute);
});
```

### Using `RejectFriendWithRequestBidirectional`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, rejectFriendWithRequestBidirectionalRef, RejectFriendWithRequestBidirectionalVariables } from '@kismoportal-dataconnect/generated';

// The `RejectFriendWithRequestBidirectional` mutation requires an argument of type `RejectFriendWithRequestBidirectionalVariables`:
const rejectFriendWithRequestBidirectionalVars: RejectFriendWithRequestBidirectionalVariables = {
  userAId: ..., 
  userBId: ..., 
};

// Call the `rejectFriendWithRequestBidirectionalRef()` function to get a reference to the mutation.
const ref = rejectFriendWithRequestBidirectionalRef(rejectFriendWithRequestBidirectionalVars);
// Variables can be defined inline as well.
const ref = rejectFriendWithRequestBidirectionalRef({ userAId: ..., userBId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = rejectFriendWithRequestBidirectionalRef(dataConnect, rejectFriendWithRequestBidirectionalVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data._execute);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data._execute);
});
```

## DeleteFriendWith
You can execute the `DeleteFriendWith` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteFriendWith(vars: DeleteFriendWithVariables): MutationPromise<DeleteFriendWithData, DeleteFriendWithVariables>;

interface DeleteFriendWithRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteFriendWithVariables): MutationRef<DeleteFriendWithData, DeleteFriendWithVariables>;
}
export const deleteFriendWithRef: DeleteFriendWithRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteFriendWith(dc: DataConnect, vars: DeleteFriendWithVariables): MutationPromise<DeleteFriendWithData, DeleteFriendWithVariables>;

interface DeleteFriendWithRef {
  ...
  (dc: DataConnect, vars: DeleteFriendWithVariables): MutationRef<DeleteFriendWithData, DeleteFriendWithVariables>;
}
export const deleteFriendWithRef: DeleteFriendWithRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteFriendWithRef:
```typescript
const name = deleteFriendWithRef.operationName;
console.log(name);
```

### Variables
The `DeleteFriendWith` mutation requires an argument of type `DeleteFriendWithVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteFriendWithVariables {
  userId: UUIDString;
  friendWithUserId: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteFriendWith` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteFriendWithData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteFriendWithData {
  friendWith_delete?: FriendWith_Key | null;
}
```
### Using `DeleteFriendWith`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteFriendWith, DeleteFriendWithVariables } from '@kismoportal-dataconnect/generated';

// The `DeleteFriendWith` mutation requires an argument of type `DeleteFriendWithVariables`:
const deleteFriendWithVars: DeleteFriendWithVariables = {
  userId: ..., 
  friendWithUserId: ..., 
};

// Call the `deleteFriendWith()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteFriendWith(deleteFriendWithVars);
// Variables can be defined inline as well.
const { data } = await deleteFriendWith({ userId: ..., friendWithUserId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteFriendWith(dataConnect, deleteFriendWithVars);

console.log(data.friendWith_delete);

// Or, you can use the `Promise` API.
deleteFriendWith(deleteFriendWithVars).then((response) => {
  const data = response.data;
  console.log(data.friendWith_delete);
});
```

### Using `DeleteFriendWith`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteFriendWithRef, DeleteFriendWithVariables } from '@kismoportal-dataconnect/generated';

// The `DeleteFriendWith` mutation requires an argument of type `DeleteFriendWithVariables`:
const deleteFriendWithVars: DeleteFriendWithVariables = {
  userId: ..., 
  friendWithUserId: ..., 
};

// Call the `deleteFriendWithRef()` function to get a reference to the mutation.
const ref = deleteFriendWithRef(deleteFriendWithVars);
// Variables can be defined inline as well.
const ref = deleteFriendWithRef({ userId: ..., friendWithUserId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteFriendWithRef(dataConnect, deleteFriendWithVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.friendWith_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.friendWith_delete);
});
```

## UpdateChatroomDetails
You can execute the `UpdateChatroomDetails` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateChatroomDetails(vars: UpdateChatroomDetailsVariables): MutationPromise<UpdateChatroomDetailsData, UpdateChatroomDetailsVariables>;

interface UpdateChatroomDetailsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateChatroomDetailsVariables): MutationRef<UpdateChatroomDetailsData, UpdateChatroomDetailsVariables>;
}
export const updateChatroomDetailsRef: UpdateChatroomDetailsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateChatroomDetails(dc: DataConnect, vars: UpdateChatroomDetailsVariables): MutationPromise<UpdateChatroomDetailsData, UpdateChatroomDetailsVariables>;

interface UpdateChatroomDetailsRef {
  ...
  (dc: DataConnect, vars: UpdateChatroomDetailsVariables): MutationRef<UpdateChatroomDetailsData, UpdateChatroomDetailsVariables>;
}
export const updateChatroomDetailsRef: UpdateChatroomDetailsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateChatroomDetailsRef:
```typescript
const name = updateChatroomDetailsRef.operationName;
console.log(name);
```

### Variables
The `UpdateChatroomDetails` mutation requires an argument of type `UpdateChatroomDetailsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateChatroomDetailsVariables {
  id: UUIDString;
  imageUrl?: string | null;
  description?: string | null;
  imageAtribution?: string | null;
}
```
### Return Type
Recall that executing the `UpdateChatroomDetails` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateChatroomDetailsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateChatroomDetailsData {
  chatroom_update?: Chatroom_Key | null;
}
```
### Using `UpdateChatroomDetails`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateChatroomDetails, UpdateChatroomDetailsVariables } from '@kismoportal-dataconnect/generated';

// The `UpdateChatroomDetails` mutation requires an argument of type `UpdateChatroomDetailsVariables`:
const updateChatroomDetailsVars: UpdateChatroomDetailsVariables = {
  id: ..., 
  imageUrl: ..., // optional
  description: ..., // optional
  imageAtribution: ..., // optional
};

// Call the `updateChatroomDetails()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateChatroomDetails(updateChatroomDetailsVars);
// Variables can be defined inline as well.
const { data } = await updateChatroomDetails({ id: ..., imageUrl: ..., description: ..., imageAtribution: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateChatroomDetails(dataConnect, updateChatroomDetailsVars);

console.log(data.chatroom_update);

// Or, you can use the `Promise` API.
updateChatroomDetails(updateChatroomDetailsVars).then((response) => {
  const data = response.data;
  console.log(data.chatroom_update);
});
```

### Using `UpdateChatroomDetails`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateChatroomDetailsRef, UpdateChatroomDetailsVariables } from '@kismoportal-dataconnect/generated';

// The `UpdateChatroomDetails` mutation requires an argument of type `UpdateChatroomDetailsVariables`:
const updateChatroomDetailsVars: UpdateChatroomDetailsVariables = {
  id: ..., 
  imageUrl: ..., // optional
  description: ..., // optional
  imageAtribution: ..., // optional
};

// Call the `updateChatroomDetailsRef()` function to get a reference to the mutation.
const ref = updateChatroomDetailsRef(updateChatroomDetailsVars);
// Variables can be defined inline as well.
const ref = updateChatroomDetailsRef({ id: ..., imageUrl: ..., description: ..., imageAtribution: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateChatroomDetailsRef(dataConnect, updateChatroomDetailsVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.chatroom_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.chatroom_update);
});
```

## UpsertChatroomStat
You can execute the `UpsertChatroomStat` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
upsertChatroomStat(vars: UpsertChatroomStatVariables): MutationPromise<UpsertChatroomStatData, UpsertChatroomStatVariables>;

interface UpsertChatroomStatRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertChatroomStatVariables): MutationRef<UpsertChatroomStatData, UpsertChatroomStatVariables>;
}
export const upsertChatroomStatRef: UpsertChatroomStatRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertChatroomStat(dc: DataConnect, vars: UpsertChatroomStatVariables): MutationPromise<UpsertChatroomStatData, UpsertChatroomStatVariables>;

interface UpsertChatroomStatRef {
  ...
  (dc: DataConnect, vars: UpsertChatroomStatVariables): MutationRef<UpsertChatroomStatData, UpsertChatroomStatVariables>;
}
export const upsertChatroomStatRef: UpsertChatroomStatRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertChatroomStatRef:
```typescript
const name = upsertChatroomStatRef.operationName;
console.log(name);
```

### Variables
The `UpsertChatroomStat` mutation requires an argument of type `UpsertChatroomStatVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpsertChatroomStatVariables {
  chatroomId: UUIDString;
  label: string;
  value: Int64String;
  subtext?: string | null;
}
```
### Return Type
Recall that executing the `UpsertChatroomStat` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertChatroomStatData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertChatroomStatData {
  chatroomStat_upsert: ChatroomStat_Key;
}
```
### Using `UpsertChatroomStat`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertChatroomStat, UpsertChatroomStatVariables } from '@kismoportal-dataconnect/generated';

// The `UpsertChatroomStat` mutation requires an argument of type `UpsertChatroomStatVariables`:
const upsertChatroomStatVars: UpsertChatroomStatVariables = {
  chatroomId: ..., 
  label: ..., 
  value: ..., 
  subtext: ..., // optional
};

// Call the `upsertChatroomStat()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertChatroomStat(upsertChatroomStatVars);
// Variables can be defined inline as well.
const { data } = await upsertChatroomStat({ chatroomId: ..., label: ..., value: ..., subtext: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertChatroomStat(dataConnect, upsertChatroomStatVars);

console.log(data.chatroomStat_upsert);

// Or, you can use the `Promise` API.
upsertChatroomStat(upsertChatroomStatVars).then((response) => {
  const data = response.data;
  console.log(data.chatroomStat_upsert);
});
```

### Using `UpsertChatroomStat`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertChatroomStatRef, UpsertChatroomStatVariables } from '@kismoportal-dataconnect/generated';

// The `UpsertChatroomStat` mutation requires an argument of type `UpsertChatroomStatVariables`:
const upsertChatroomStatVars: UpsertChatroomStatVariables = {
  chatroomId: ..., 
  label: ..., 
  value: ..., 
  subtext: ..., // optional
};

// Call the `upsertChatroomStatRef()` function to get a reference to the mutation.
const ref = upsertChatroomStatRef(upsertChatroomStatVars);
// Variables can be defined inline as well.
const ref = upsertChatroomStatRef({ chatroomId: ..., label: ..., value: ..., subtext: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertChatroomStatRef(dataConnect, upsertChatroomStatVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.chatroomStat_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.chatroomStat_upsert);
});
```

## UpdateCityName
You can execute the `UpdateCityName` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateCityName(vars: UpdateCityNameVariables): MutationPromise<UpdateCityNameData, UpdateCityNameVariables>;

interface UpdateCityNameRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateCityNameVariables): MutationRef<UpdateCityNameData, UpdateCityNameVariables>;
}
export const updateCityNameRef: UpdateCityNameRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateCityName(dc: DataConnect, vars: UpdateCityNameVariables): MutationPromise<UpdateCityNameData, UpdateCityNameVariables>;

interface UpdateCityNameRef {
  ...
  (dc: DataConnect, vars: UpdateCityNameVariables): MutationRef<UpdateCityNameData, UpdateCityNameVariables>;
}
export const updateCityNameRef: UpdateCityNameRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateCityNameRef:
```typescript
const name = updateCityNameRef.operationName;
console.log(name);
```

### Variables
The `UpdateCityName` mutation requires an argument of type `UpdateCityNameVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateCityNameVariables {
  geonameid: Int64String;
  name: string;
}
```
### Return Type
Recall that executing the `UpdateCityName` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateCityNameData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateCityNameData {
  city_update?: City_Key | null;
}
```
### Using `UpdateCityName`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateCityName, UpdateCityNameVariables } from '@kismoportal-dataconnect/generated';

// The `UpdateCityName` mutation requires an argument of type `UpdateCityNameVariables`:
const updateCityNameVars: UpdateCityNameVariables = {
  geonameid: ..., 
  name: ..., 
};

// Call the `updateCityName()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateCityName(updateCityNameVars);
// Variables can be defined inline as well.
const { data } = await updateCityName({ geonameid: ..., name: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateCityName(dataConnect, updateCityNameVars);

console.log(data.city_update);

// Or, you can use the `Promise` API.
updateCityName(updateCityNameVars).then((response) => {
  const data = response.data;
  console.log(data.city_update);
});
```

### Using `UpdateCityName`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateCityNameRef, UpdateCityNameVariables } from '@kismoportal-dataconnect/generated';

// The `UpdateCityName` mutation requires an argument of type `UpdateCityNameVariables`:
const updateCityNameVars: UpdateCityNameVariables = {
  geonameid: ..., 
  name: ..., 
};

// Call the `updateCityNameRef()` function to get a reference to the mutation.
const ref = updateCityNameRef(updateCityNameVars);
// Variables can be defined inline as well.
const ref = updateCityNameRef({ geonameid: ..., name: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateCityNameRef(dataConnect, updateCityNameVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.city_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.city_update);
});
```

## DeleteChatroomStat
You can execute the `DeleteChatroomStat` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteChatroomStat(vars: DeleteChatroomStatVariables): MutationPromise<DeleteChatroomStatData, DeleteChatroomStatVariables>;

interface DeleteChatroomStatRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteChatroomStatVariables): MutationRef<DeleteChatroomStatData, DeleteChatroomStatVariables>;
}
export const deleteChatroomStatRef: DeleteChatroomStatRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteChatroomStat(dc: DataConnect, vars: DeleteChatroomStatVariables): MutationPromise<DeleteChatroomStatData, DeleteChatroomStatVariables>;

interface DeleteChatroomStatRef {
  ...
  (dc: DataConnect, vars: DeleteChatroomStatVariables): MutationRef<DeleteChatroomStatData, DeleteChatroomStatVariables>;
}
export const deleteChatroomStatRef: DeleteChatroomStatRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteChatroomStatRef:
```typescript
const name = deleteChatroomStatRef.operationName;
console.log(name);
```

### Variables
The `DeleteChatroomStat` mutation requires an argument of type `DeleteChatroomStatVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteChatroomStatVariables {
  chatroomId: UUIDString;
  label: string;
}
```
### Return Type
Recall that executing the `DeleteChatroomStat` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteChatroomStatData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteChatroomStatData {
  chatroomStat_delete?: ChatroomStat_Key | null;
}
```
### Using `DeleteChatroomStat`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteChatroomStat, DeleteChatroomStatVariables } from '@kismoportal-dataconnect/generated';

// The `DeleteChatroomStat` mutation requires an argument of type `DeleteChatroomStatVariables`:
const deleteChatroomStatVars: DeleteChatroomStatVariables = {
  chatroomId: ..., 
  label: ..., 
};

// Call the `deleteChatroomStat()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteChatroomStat(deleteChatroomStatVars);
// Variables can be defined inline as well.
const { data } = await deleteChatroomStat({ chatroomId: ..., label: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteChatroomStat(dataConnect, deleteChatroomStatVars);

console.log(data.chatroomStat_delete);

// Or, you can use the `Promise` API.
deleteChatroomStat(deleteChatroomStatVars).then((response) => {
  const data = response.data;
  console.log(data.chatroomStat_delete);
});
```

### Using `DeleteChatroomStat`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteChatroomStatRef, DeleteChatroomStatVariables } from '@kismoportal-dataconnect/generated';

// The `DeleteChatroomStat` mutation requires an argument of type `DeleteChatroomStatVariables`:
const deleteChatroomStatVars: DeleteChatroomStatVariables = {
  chatroomId: ..., 
  label: ..., 
};

// Call the `deleteChatroomStatRef()` function to get a reference to the mutation.
const ref = deleteChatroomStatRef(deleteChatroomStatVars);
// Variables can be defined inline as well.
const ref = deleteChatroomStatRef({ chatroomId: ..., label: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteChatroomStatRef(dataConnect, deleteChatroomStatVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.chatroomStat_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.chatroomStat_delete);
});
```

## UpdateStatValue
You can execute the `UpdateStatValue` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateStatValue(vars: UpdateStatValueVariables): MutationPromise<UpdateStatValueData, UpdateStatValueVariables>;

interface UpdateStatValueRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateStatValueVariables): MutationRef<UpdateStatValueData, UpdateStatValueVariables>;
}
export const updateStatValueRef: UpdateStatValueRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateStatValue(dc: DataConnect, vars: UpdateStatValueVariables): MutationPromise<UpdateStatValueData, UpdateStatValueVariables>;

interface UpdateStatValueRef {
  ...
  (dc: DataConnect, vars: UpdateStatValueVariables): MutationRef<UpdateStatValueData, UpdateStatValueVariables>;
}
export const updateStatValueRef: UpdateStatValueRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateStatValueRef:
```typescript
const name = updateStatValueRef.operationName;
console.log(name);
```

### Variables
The `UpdateStatValue` mutation requires an argument of type `UpdateStatValueVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateStatValueVariables {
  chatroomId: UUIDString;
  label: string;
  value: Int64String;
}
```
### Return Type
Recall that executing the `UpdateStatValue` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateStatValueData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateStatValueData {
  chatroomStat_update?: ChatroomStat_Key | null;
}
```
### Using `UpdateStatValue`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateStatValue, UpdateStatValueVariables } from '@kismoportal-dataconnect/generated';

// The `UpdateStatValue` mutation requires an argument of type `UpdateStatValueVariables`:
const updateStatValueVars: UpdateStatValueVariables = {
  chatroomId: ..., 
  label: ..., 
  value: ..., 
};

// Call the `updateStatValue()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateStatValue(updateStatValueVars);
// Variables can be defined inline as well.
const { data } = await updateStatValue({ chatroomId: ..., label: ..., value: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateStatValue(dataConnect, updateStatValueVars);

console.log(data.chatroomStat_update);

// Or, you can use the `Promise` API.
updateStatValue(updateStatValueVars).then((response) => {
  const data = response.data;
  console.log(data.chatroomStat_update);
});
```

### Using `UpdateStatValue`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateStatValueRef, UpdateStatValueVariables } from '@kismoportal-dataconnect/generated';

// The `UpdateStatValue` mutation requires an argument of type `UpdateStatValueVariables`:
const updateStatValueVars: UpdateStatValueVariables = {
  chatroomId: ..., 
  label: ..., 
  value: ..., 
};

// Call the `updateStatValueRef()` function to get a reference to the mutation.
const ref = updateStatValueRef(updateStatValueVars);
// Variables can be defined inline as well.
const ref = updateStatValueRef({ chatroomId: ..., label: ..., value: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateStatValueRef(dataConnect, updateStatValueVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.chatroomStat_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.chatroomStat_update);
});
```

## UpsertGlobalStat
You can execute the `UpsertGlobalStat` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
upsertGlobalStat(vars: UpsertGlobalStatVariables): MutationPromise<UpsertGlobalStatData, UpsertGlobalStatVariables>;

interface UpsertGlobalStatRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertGlobalStatVariables): MutationRef<UpsertGlobalStatData, UpsertGlobalStatVariables>;
}
export const upsertGlobalStatRef: UpsertGlobalStatRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertGlobalStat(dc: DataConnect, vars: UpsertGlobalStatVariables): MutationPromise<UpsertGlobalStatData, UpsertGlobalStatVariables>;

interface UpsertGlobalStatRef {
  ...
  (dc: DataConnect, vars: UpsertGlobalStatVariables): MutationRef<UpsertGlobalStatData, UpsertGlobalStatVariables>;
}
export const upsertGlobalStatRef: UpsertGlobalStatRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertGlobalStatRef:
```typescript
const name = upsertGlobalStatRef.operationName;
console.log(name);
```

### Variables
The `UpsertGlobalStat` mutation requires an argument of type `UpsertGlobalStatVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpsertGlobalStatVariables {
  label: string;
  value: Int64String;
  subtext?: string | null;
}
```
### Return Type
Recall that executing the `UpsertGlobalStat` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertGlobalStatData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertGlobalStatData {
  globalStat_upsert: GlobalStat_Key;
}
```
### Using `UpsertGlobalStat`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertGlobalStat, UpsertGlobalStatVariables } from '@kismoportal-dataconnect/generated';

// The `UpsertGlobalStat` mutation requires an argument of type `UpsertGlobalStatVariables`:
const upsertGlobalStatVars: UpsertGlobalStatVariables = {
  label: ..., 
  value: ..., 
  subtext: ..., // optional
};

// Call the `upsertGlobalStat()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertGlobalStat(upsertGlobalStatVars);
// Variables can be defined inline as well.
const { data } = await upsertGlobalStat({ label: ..., value: ..., subtext: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertGlobalStat(dataConnect, upsertGlobalStatVars);

console.log(data.globalStat_upsert);

// Or, you can use the `Promise` API.
upsertGlobalStat(upsertGlobalStatVars).then((response) => {
  const data = response.data;
  console.log(data.globalStat_upsert);
});
```

### Using `UpsertGlobalStat`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertGlobalStatRef, UpsertGlobalStatVariables } from '@kismoportal-dataconnect/generated';

// The `UpsertGlobalStat` mutation requires an argument of type `UpsertGlobalStatVariables`:
const upsertGlobalStatVars: UpsertGlobalStatVariables = {
  label: ..., 
  value: ..., 
  subtext: ..., // optional
};

// Call the `upsertGlobalStatRef()` function to get a reference to the mutation.
const ref = upsertGlobalStatRef(upsertGlobalStatVars);
// Variables can be defined inline as well.
const ref = upsertGlobalStatRef({ label: ..., value: ..., subtext: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertGlobalStatRef(dataConnect, upsertGlobalStatVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.globalStat_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.globalStat_upsert);
});
```

## OpenChatroomSession
You can execute the `OpenChatroomSession` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
openChatroomSession(vars: OpenChatroomSessionVariables): MutationPromise<OpenChatroomSessionData, OpenChatroomSessionVariables>;

interface OpenChatroomSessionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: OpenChatroomSessionVariables): MutationRef<OpenChatroomSessionData, OpenChatroomSessionVariables>;
}
export const openChatroomSessionRef: OpenChatroomSessionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
openChatroomSession(dc: DataConnect, vars: OpenChatroomSessionVariables): MutationPromise<OpenChatroomSessionData, OpenChatroomSessionVariables>;

interface OpenChatroomSessionRef {
  ...
  (dc: DataConnect, vars: OpenChatroomSessionVariables): MutationRef<OpenChatroomSessionData, OpenChatroomSessionVariables>;
}
export const openChatroomSessionRef: OpenChatroomSessionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the openChatroomSessionRef:
```typescript
const name = openChatroomSessionRef.operationName;
console.log(name);
```

### Variables
The `OpenChatroomSession` mutation requires an argument of type `OpenChatroomSessionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface OpenChatroomSessionVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
  openedAt: TimestampString;
}
```
### Return Type
Recall that executing the `OpenChatroomSession` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `OpenChatroomSessionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface OpenChatroomSessionData {
  userChatroomSession_upsert: UserChatroomSession_Key;
}
```
### Using `OpenChatroomSession`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, openChatroomSession, OpenChatroomSessionVariables } from '@kismoportal-dataconnect/generated';

// The `OpenChatroomSession` mutation requires an argument of type `OpenChatroomSessionVariables`:
const openChatroomSessionVars: OpenChatroomSessionVariables = {
  userId: ..., 
  chatroomId: ..., 
  openedAt: ..., 
};

// Call the `openChatroomSession()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await openChatroomSession(openChatroomSessionVars);
// Variables can be defined inline as well.
const { data } = await openChatroomSession({ userId: ..., chatroomId: ..., openedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await openChatroomSession(dataConnect, openChatroomSessionVars);

console.log(data.userChatroomSession_upsert);

// Or, you can use the `Promise` API.
openChatroomSession(openChatroomSessionVars).then((response) => {
  const data = response.data;
  console.log(data.userChatroomSession_upsert);
});
```

### Using `OpenChatroomSession`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, openChatroomSessionRef, OpenChatroomSessionVariables } from '@kismoportal-dataconnect/generated';

// The `OpenChatroomSession` mutation requires an argument of type `OpenChatroomSessionVariables`:
const openChatroomSessionVars: OpenChatroomSessionVariables = {
  userId: ..., 
  chatroomId: ..., 
  openedAt: ..., 
};

// Call the `openChatroomSessionRef()` function to get a reference to the mutation.
const ref = openChatroomSessionRef(openChatroomSessionVars);
// Variables can be defined inline as well.
const ref = openChatroomSessionRef({ userId: ..., chatroomId: ..., openedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = openChatroomSessionRef(dataConnect, openChatroomSessionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userChatroomSession_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userChatroomSession_upsert);
});
```

## CloseChatroomSession
You can execute the `CloseChatroomSession` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
closeChatroomSession(vars: CloseChatroomSessionVariables): MutationPromise<CloseChatroomSessionData, CloseChatroomSessionVariables>;

interface CloseChatroomSessionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CloseChatroomSessionVariables): MutationRef<CloseChatroomSessionData, CloseChatroomSessionVariables>;
}
export const closeChatroomSessionRef: CloseChatroomSessionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
closeChatroomSession(dc: DataConnect, vars: CloseChatroomSessionVariables): MutationPromise<CloseChatroomSessionData, CloseChatroomSessionVariables>;

interface CloseChatroomSessionRef {
  ...
  (dc: DataConnect, vars: CloseChatroomSessionVariables): MutationRef<CloseChatroomSessionData, CloseChatroomSessionVariables>;
}
export const closeChatroomSessionRef: CloseChatroomSessionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the closeChatroomSessionRef:
```typescript
const name = closeChatroomSessionRef.operationName;
console.log(name);
```

### Variables
The `CloseChatroomSession` mutation requires an argument of type `CloseChatroomSessionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CloseChatroomSessionVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
  closedAt: TimestampString;
}
```
### Return Type
Recall that executing the `CloseChatroomSession` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CloseChatroomSessionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CloseChatroomSessionData {
  userChatroomSession_updateMany: number;
}
```
### Using `CloseChatroomSession`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, closeChatroomSession, CloseChatroomSessionVariables } from '@kismoportal-dataconnect/generated';

// The `CloseChatroomSession` mutation requires an argument of type `CloseChatroomSessionVariables`:
const closeChatroomSessionVars: CloseChatroomSessionVariables = {
  userId: ..., 
  chatroomId: ..., 
  closedAt: ..., 
};

// Call the `closeChatroomSession()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await closeChatroomSession(closeChatroomSessionVars);
// Variables can be defined inline as well.
const { data } = await closeChatroomSession({ userId: ..., chatroomId: ..., closedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await closeChatroomSession(dataConnect, closeChatroomSessionVars);

console.log(data.userChatroomSession_updateMany);

// Or, you can use the `Promise` API.
closeChatroomSession(closeChatroomSessionVars).then((response) => {
  const data = response.data;
  console.log(data.userChatroomSession_updateMany);
});
```

### Using `CloseChatroomSession`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, closeChatroomSessionRef, CloseChatroomSessionVariables } from '@kismoportal-dataconnect/generated';

// The `CloseChatroomSession` mutation requires an argument of type `CloseChatroomSessionVariables`:
const closeChatroomSessionVars: CloseChatroomSessionVariables = {
  userId: ..., 
  chatroomId: ..., 
  closedAt: ..., 
};

// Call the `closeChatroomSessionRef()` function to get a reference to the mutation.
const ref = closeChatroomSessionRef(closeChatroomSessionVars);
// Variables can be defined inline as well.
const ref = closeChatroomSessionRef({ userId: ..., chatroomId: ..., closedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = closeChatroomSessionRef(dataConnect, closeChatroomSessionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userChatroomSession_updateMany);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userChatroomSession_updateMany);
});
```

## HeartbeatChatroomSession
You can execute the `HeartbeatChatroomSession` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
heartbeatChatroomSession(vars: HeartbeatChatroomSessionVariables): MutationPromise<HeartbeatChatroomSessionData, HeartbeatChatroomSessionVariables>;

interface HeartbeatChatroomSessionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: HeartbeatChatroomSessionVariables): MutationRef<HeartbeatChatroomSessionData, HeartbeatChatroomSessionVariables>;
}
export const heartbeatChatroomSessionRef: HeartbeatChatroomSessionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
heartbeatChatroomSession(dc: DataConnect, vars: HeartbeatChatroomSessionVariables): MutationPromise<HeartbeatChatroomSessionData, HeartbeatChatroomSessionVariables>;

interface HeartbeatChatroomSessionRef {
  ...
  (dc: DataConnect, vars: HeartbeatChatroomSessionVariables): MutationRef<HeartbeatChatroomSessionData, HeartbeatChatroomSessionVariables>;
}
export const heartbeatChatroomSessionRef: HeartbeatChatroomSessionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the heartbeatChatroomSessionRef:
```typescript
const name = heartbeatChatroomSessionRef.operationName;
console.log(name);
```

### Variables
The `HeartbeatChatroomSession` mutation requires an argument of type `HeartbeatChatroomSessionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface HeartbeatChatroomSessionVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
  heartbeatAt: TimestampString;
}
```
### Return Type
Recall that executing the `HeartbeatChatroomSession` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `HeartbeatChatroomSessionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface HeartbeatChatroomSessionData {
  userChatroomSession_updateMany: number;
}
```
### Using `HeartbeatChatroomSession`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, heartbeatChatroomSession, HeartbeatChatroomSessionVariables } from '@kismoportal-dataconnect/generated';

// The `HeartbeatChatroomSession` mutation requires an argument of type `HeartbeatChatroomSessionVariables`:
const heartbeatChatroomSessionVars: HeartbeatChatroomSessionVariables = {
  userId: ..., 
  chatroomId: ..., 
  heartbeatAt: ..., 
};

// Call the `heartbeatChatroomSession()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await heartbeatChatroomSession(heartbeatChatroomSessionVars);
// Variables can be defined inline as well.
const { data } = await heartbeatChatroomSession({ userId: ..., chatroomId: ..., heartbeatAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await heartbeatChatroomSession(dataConnect, heartbeatChatroomSessionVars);

console.log(data.userChatroomSession_updateMany);

// Or, you can use the `Promise` API.
heartbeatChatroomSession(heartbeatChatroomSessionVars).then((response) => {
  const data = response.data;
  console.log(data.userChatroomSession_updateMany);
});
```

### Using `HeartbeatChatroomSession`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, heartbeatChatroomSessionRef, HeartbeatChatroomSessionVariables } from '@kismoportal-dataconnect/generated';

// The `HeartbeatChatroomSession` mutation requires an argument of type `HeartbeatChatroomSessionVariables`:
const heartbeatChatroomSessionVars: HeartbeatChatroomSessionVariables = {
  userId: ..., 
  chatroomId: ..., 
  heartbeatAt: ..., 
};

// Call the `heartbeatChatroomSessionRef()` function to get a reference to the mutation.
const ref = heartbeatChatroomSessionRef(heartbeatChatroomSessionVars);
// Variables can be defined inline as well.
const ref = heartbeatChatroomSessionRef({ userId: ..., chatroomId: ..., heartbeatAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = heartbeatChatroomSessionRef(dataConnect, heartbeatChatroomSessionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userChatroomSession_updateMany);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userChatroomSession_updateMany);
});
```

## RecordChatroomVisit
You can execute the `RecordChatroomVisit` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
recordChatroomVisit(vars: RecordChatroomVisitVariables): MutationPromise<RecordChatroomVisitData, RecordChatroomVisitVariables>;

interface RecordChatroomVisitRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: RecordChatroomVisitVariables): MutationRef<RecordChatroomVisitData, RecordChatroomVisitVariables>;
}
export const recordChatroomVisitRef: RecordChatroomVisitRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
recordChatroomVisit(dc: DataConnect, vars: RecordChatroomVisitVariables): MutationPromise<RecordChatroomVisitData, RecordChatroomVisitVariables>;

interface RecordChatroomVisitRef {
  ...
  (dc: DataConnect, vars: RecordChatroomVisitVariables): MutationRef<RecordChatroomVisitData, RecordChatroomVisitVariables>;
}
export const recordChatroomVisitRef: RecordChatroomVisitRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the recordChatroomVisitRef:
```typescript
const name = recordChatroomVisitRef.operationName;
console.log(name);
```

### Variables
The `RecordChatroomVisit` mutation requires an argument of type `RecordChatroomVisitVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface RecordChatroomVisitVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
  visitedAt: TimestampString;
}
```
### Return Type
Recall that executing the `RecordChatroomVisit` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `RecordChatroomVisitData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface RecordChatroomVisitData {
  userChatroomVisit_upsert: UserChatroomVisit_Key;
}
```
### Using `RecordChatroomVisit`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, recordChatroomVisit, RecordChatroomVisitVariables } from '@kismoportal-dataconnect/generated';

// The `RecordChatroomVisit` mutation requires an argument of type `RecordChatroomVisitVariables`:
const recordChatroomVisitVars: RecordChatroomVisitVariables = {
  userId: ..., 
  chatroomId: ..., 
  visitedAt: ..., 
};

// Call the `recordChatroomVisit()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await recordChatroomVisit(recordChatroomVisitVars);
// Variables can be defined inline as well.
const { data } = await recordChatroomVisit({ userId: ..., chatroomId: ..., visitedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await recordChatroomVisit(dataConnect, recordChatroomVisitVars);

console.log(data.userChatroomVisit_upsert);

// Or, you can use the `Promise` API.
recordChatroomVisit(recordChatroomVisitVars).then((response) => {
  const data = response.data;
  console.log(data.userChatroomVisit_upsert);
});
```

### Using `RecordChatroomVisit`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, recordChatroomVisitRef, RecordChatroomVisitVariables } from '@kismoportal-dataconnect/generated';

// The `RecordChatroomVisit` mutation requires an argument of type `RecordChatroomVisitVariables`:
const recordChatroomVisitVars: RecordChatroomVisitVariables = {
  userId: ..., 
  chatroomId: ..., 
  visitedAt: ..., 
};

// Call the `recordChatroomVisitRef()` function to get a reference to the mutation.
const ref = recordChatroomVisitRef(recordChatroomVisitVars);
// Variables can be defined inline as well.
const ref = recordChatroomVisitRef({ userId: ..., chatroomId: ..., visitedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = recordChatroomVisitRef(dataConnect, recordChatroomVisitVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userChatroomVisit_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userChatroomVisit_upsert);
});
```

## TrimOldVisits
You can execute the `TrimOldVisits` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
trimOldVisits(vars: TrimOldVisitsVariables): MutationPromise<TrimOldVisitsData, TrimOldVisitsVariables>;

interface TrimOldVisitsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: TrimOldVisitsVariables): MutationRef<TrimOldVisitsData, TrimOldVisitsVariables>;
}
export const trimOldVisitsRef: TrimOldVisitsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
trimOldVisits(dc: DataConnect, vars: TrimOldVisitsVariables): MutationPromise<TrimOldVisitsData, TrimOldVisitsVariables>;

interface TrimOldVisitsRef {
  ...
  (dc: DataConnect, vars: TrimOldVisitsVariables): MutationRef<TrimOldVisitsData, TrimOldVisitsVariables>;
}
export const trimOldVisitsRef: TrimOldVisitsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the trimOldVisitsRef:
```typescript
const name = trimOldVisitsRef.operationName;
console.log(name);
```

### Variables
The `TrimOldVisits` mutation requires an argument of type `TrimOldVisitsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface TrimOldVisitsVariables {
  userId: UUIDString;
  keepLatest?: number | null;
}
```
### Return Type
Recall that executing the `TrimOldVisits` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `TrimOldVisitsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface TrimOldVisitsData {
  _execute?: number | null;
}
```
### Using `TrimOldVisits`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, trimOldVisits, TrimOldVisitsVariables } from '@kismoportal-dataconnect/generated';

// The `TrimOldVisits` mutation requires an argument of type `TrimOldVisitsVariables`:
const trimOldVisitsVars: TrimOldVisitsVariables = {
  userId: ..., 
  keepLatest: ..., // optional
};

// Call the `trimOldVisits()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await trimOldVisits(trimOldVisitsVars);
// Variables can be defined inline as well.
const { data } = await trimOldVisits({ userId: ..., keepLatest: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await trimOldVisits(dataConnect, trimOldVisitsVars);

console.log(data._execute);

// Or, you can use the `Promise` API.
trimOldVisits(trimOldVisitsVars).then((response) => {
  const data = response.data;
  console.log(data._execute);
});
```

### Using `TrimOldVisits`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, trimOldVisitsRef, TrimOldVisitsVariables } from '@kismoportal-dataconnect/generated';

// The `TrimOldVisits` mutation requires an argument of type `TrimOldVisitsVariables`:
const trimOldVisitsVars: TrimOldVisitsVariables = {
  userId: ..., 
  keepLatest: ..., // optional
};

// Call the `trimOldVisitsRef()` function to get a reference to the mutation.
const ref = trimOldVisitsRef(trimOldVisitsVars);
// Variables can be defined inline as well.
const ref = trimOldVisitsRef({ userId: ..., keepLatest: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = trimOldVisitsRef(dataConnect, trimOldVisitsVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data._execute);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data._execute);
});
```

## CreateNotification
You can execute the `CreateNotification` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNotification(vars: CreateNotificationVariables): MutationPromise<CreateNotificationData, CreateNotificationVariables>;

interface CreateNotificationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNotificationVariables): MutationRef<CreateNotificationData, CreateNotificationVariables>;
}
export const createNotificationRef: CreateNotificationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNotification(dc: DataConnect, vars: CreateNotificationVariables): MutationPromise<CreateNotificationData, CreateNotificationVariables>;

interface CreateNotificationRef {
  ...
  (dc: DataConnect, vars: CreateNotificationVariables): MutationRef<CreateNotificationData, CreateNotificationVariables>;
}
export const createNotificationRef: CreateNotificationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNotificationRef:
```typescript
const name = createNotificationRef.operationName;
console.log(name);
```

### Variables
The `CreateNotification` mutation requires an argument of type `CreateNotificationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNotificationVariables {
  recipientUserId: UUIDString;
  actorUserId?: UUIDString | null;
  type: NotificationType;
  title: string;
  body: string;
  payloadJson?: unknown | null;
  chatroomId?: UUIDString | null;
  messageId?: UUIDString | null;
}
```
### Return Type
Recall that executing the `CreateNotification` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNotificationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNotificationData {
  userNotification_insert: UserNotification_Key;
}
```
### Using `CreateNotification`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNotification, CreateNotificationVariables } from '@kismoportal-dataconnect/generated';

// The `CreateNotification` mutation requires an argument of type `CreateNotificationVariables`:
const createNotificationVars: CreateNotificationVariables = {
  recipientUserId: ..., 
  actorUserId: ..., // optional
  type: ..., 
  title: ..., 
  body: ..., 
  payloadJson: ..., // optional
  chatroomId: ..., // optional
  messageId: ..., // optional
};

// Call the `createNotification()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNotification(createNotificationVars);
// Variables can be defined inline as well.
const { data } = await createNotification({ recipientUserId: ..., actorUserId: ..., type: ..., title: ..., body: ..., payloadJson: ..., chatroomId: ..., messageId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNotification(dataConnect, createNotificationVars);

console.log(data.userNotification_insert);

// Or, you can use the `Promise` API.
createNotification(createNotificationVars).then((response) => {
  const data = response.data;
  console.log(data.userNotification_insert);
});
```

### Using `CreateNotification`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNotificationRef, CreateNotificationVariables } from '@kismoportal-dataconnect/generated';

// The `CreateNotification` mutation requires an argument of type `CreateNotificationVariables`:
const createNotificationVars: CreateNotificationVariables = {
  recipientUserId: ..., 
  actorUserId: ..., // optional
  type: ..., 
  title: ..., 
  body: ..., 
  payloadJson: ..., // optional
  chatroomId: ..., // optional
  messageId: ..., // optional
};

// Call the `createNotificationRef()` function to get a reference to the mutation.
const ref = createNotificationRef(createNotificationVars);
// Variables can be defined inline as well.
const ref = createNotificationRef({ recipientUserId: ..., actorUserId: ..., type: ..., title: ..., body: ..., payloadJson: ..., chatroomId: ..., messageId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNotificationRef(dataConnect, createNotificationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userNotification_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userNotification_insert);
});
```

## MarkNotificationRead
You can execute the `MarkNotificationRead` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
markNotificationRead(vars: MarkNotificationReadVariables): MutationPromise<MarkNotificationReadData, MarkNotificationReadVariables>;

interface MarkNotificationReadRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: MarkNotificationReadVariables): MutationRef<MarkNotificationReadData, MarkNotificationReadVariables>;
}
export const markNotificationReadRef: MarkNotificationReadRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
markNotificationRead(dc: DataConnect, vars: MarkNotificationReadVariables): MutationPromise<MarkNotificationReadData, MarkNotificationReadVariables>;

interface MarkNotificationReadRef {
  ...
  (dc: DataConnect, vars: MarkNotificationReadVariables): MutationRef<MarkNotificationReadData, MarkNotificationReadVariables>;
}
export const markNotificationReadRef: MarkNotificationReadRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the markNotificationReadRef:
```typescript
const name = markNotificationReadRef.operationName;
console.log(name);
```

### Variables
The `MarkNotificationRead` mutation requires an argument of type `MarkNotificationReadVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface MarkNotificationReadVariables {
  notificationId: UUIDString;
  readAt: TimestampString;
}
```
### Return Type
Recall that executing the `MarkNotificationRead` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `MarkNotificationReadData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface MarkNotificationReadData {
  userNotification_update?: UserNotification_Key | null;
}
```
### Using `MarkNotificationRead`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, markNotificationRead, MarkNotificationReadVariables } from '@kismoportal-dataconnect/generated';

// The `MarkNotificationRead` mutation requires an argument of type `MarkNotificationReadVariables`:
const markNotificationReadVars: MarkNotificationReadVariables = {
  notificationId: ..., 
  readAt: ..., 
};

// Call the `markNotificationRead()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await markNotificationRead(markNotificationReadVars);
// Variables can be defined inline as well.
const { data } = await markNotificationRead({ notificationId: ..., readAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await markNotificationRead(dataConnect, markNotificationReadVars);

console.log(data.userNotification_update);

// Or, you can use the `Promise` API.
markNotificationRead(markNotificationReadVars).then((response) => {
  const data = response.data;
  console.log(data.userNotification_update);
});
```

### Using `MarkNotificationRead`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, markNotificationReadRef, MarkNotificationReadVariables } from '@kismoportal-dataconnect/generated';

// The `MarkNotificationRead` mutation requires an argument of type `MarkNotificationReadVariables`:
const markNotificationReadVars: MarkNotificationReadVariables = {
  notificationId: ..., 
  readAt: ..., 
};

// Call the `markNotificationReadRef()` function to get a reference to the mutation.
const ref = markNotificationReadRef(markNotificationReadVars);
// Variables can be defined inline as well.
const ref = markNotificationReadRef({ notificationId: ..., readAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = markNotificationReadRef(dataConnect, markNotificationReadVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userNotification_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userNotification_update);
});
```

## MarkAllNotificationsRead
You can execute the `MarkAllNotificationsRead` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
markAllNotificationsRead(vars: MarkAllNotificationsReadVariables): MutationPromise<MarkAllNotificationsReadData, MarkAllNotificationsReadVariables>;

interface MarkAllNotificationsReadRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: MarkAllNotificationsReadVariables): MutationRef<MarkAllNotificationsReadData, MarkAllNotificationsReadVariables>;
}
export const markAllNotificationsReadRef: MarkAllNotificationsReadRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
markAllNotificationsRead(dc: DataConnect, vars: MarkAllNotificationsReadVariables): MutationPromise<MarkAllNotificationsReadData, MarkAllNotificationsReadVariables>;

interface MarkAllNotificationsReadRef {
  ...
  (dc: DataConnect, vars: MarkAllNotificationsReadVariables): MutationRef<MarkAllNotificationsReadData, MarkAllNotificationsReadVariables>;
}
export const markAllNotificationsReadRef: MarkAllNotificationsReadRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the markAllNotificationsReadRef:
```typescript
const name = markAllNotificationsReadRef.operationName;
console.log(name);
```

### Variables
The `MarkAllNotificationsRead` mutation requires an argument of type `MarkAllNotificationsReadVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface MarkAllNotificationsReadVariables {
  recipientUserId: UUIDString;
  readAt: TimestampString;
}
```
### Return Type
Recall that executing the `MarkAllNotificationsRead` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `MarkAllNotificationsReadData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface MarkAllNotificationsReadData {
  userNotification_updateMany: number;
}
```
### Using `MarkAllNotificationsRead`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, markAllNotificationsRead, MarkAllNotificationsReadVariables } from '@kismoportal-dataconnect/generated';

// The `MarkAllNotificationsRead` mutation requires an argument of type `MarkAllNotificationsReadVariables`:
const markAllNotificationsReadVars: MarkAllNotificationsReadVariables = {
  recipientUserId: ..., 
  readAt: ..., 
};

// Call the `markAllNotificationsRead()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await markAllNotificationsRead(markAllNotificationsReadVars);
// Variables can be defined inline as well.
const { data } = await markAllNotificationsRead({ recipientUserId: ..., readAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await markAllNotificationsRead(dataConnect, markAllNotificationsReadVars);

console.log(data.userNotification_updateMany);

// Or, you can use the `Promise` API.
markAllNotificationsRead(markAllNotificationsReadVars).then((response) => {
  const data = response.data;
  console.log(data.userNotification_updateMany);
});
```

### Using `MarkAllNotificationsRead`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, markAllNotificationsReadRef, MarkAllNotificationsReadVariables } from '@kismoportal-dataconnect/generated';

// The `MarkAllNotificationsRead` mutation requires an argument of type `MarkAllNotificationsReadVariables`:
const markAllNotificationsReadVars: MarkAllNotificationsReadVariables = {
  recipientUserId: ..., 
  readAt: ..., 
};

// Call the `markAllNotificationsReadRef()` function to get a reference to the mutation.
const ref = markAllNotificationsReadRef(markAllNotificationsReadVars);
// Variables can be defined inline as well.
const ref = markAllNotificationsReadRef({ recipientUserId: ..., readAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = markAllNotificationsReadRef(dataConnect, markAllNotificationsReadVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userNotification_updateMany);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userNotification_updateMany);
});
```

## InitializeChatroomStatsDefaults
You can execute the `InitializeChatroomStatsDefaults` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
initializeChatroomStatsDefaults(vars: InitializeChatroomStatsDefaultsVariables): MutationPromise<InitializeChatroomStatsDefaultsData, InitializeChatroomStatsDefaultsVariables>;

interface InitializeChatroomStatsDefaultsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: InitializeChatroomStatsDefaultsVariables): MutationRef<InitializeChatroomStatsDefaultsData, InitializeChatroomStatsDefaultsVariables>;
}
export const initializeChatroomStatsDefaultsRef: InitializeChatroomStatsDefaultsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
initializeChatroomStatsDefaults(dc: DataConnect, vars: InitializeChatroomStatsDefaultsVariables): MutationPromise<InitializeChatroomStatsDefaultsData, InitializeChatroomStatsDefaultsVariables>;

interface InitializeChatroomStatsDefaultsRef {
  ...
  (dc: DataConnect, vars: InitializeChatroomStatsDefaultsVariables): MutationRef<InitializeChatroomStatsDefaultsData, InitializeChatroomStatsDefaultsVariables>;
}
export const initializeChatroomStatsDefaultsRef: InitializeChatroomStatsDefaultsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the initializeChatroomStatsDefaultsRef:
```typescript
const name = initializeChatroomStatsDefaultsRef.operationName;
console.log(name);
```

### Variables
The `InitializeChatroomStatsDefaults` mutation requires an argument of type `InitializeChatroomStatsDefaultsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface InitializeChatroomStatsDefaultsVariables {
  chatroomId: UUIDString;
}
```
### Return Type
Recall that executing the `InitializeChatroomStatsDefaults` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `InitializeChatroomStatsDefaultsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface InitializeChatroomStatsDefaultsData {
  _execute?: number | null;
}
```
### Using `InitializeChatroomStatsDefaults`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, initializeChatroomStatsDefaults, InitializeChatroomStatsDefaultsVariables } from '@kismoportal-dataconnect/generated';

// The `InitializeChatroomStatsDefaults` mutation requires an argument of type `InitializeChatroomStatsDefaultsVariables`:
const initializeChatroomStatsDefaultsVars: InitializeChatroomStatsDefaultsVariables = {
  chatroomId: ..., 
};

// Call the `initializeChatroomStatsDefaults()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await initializeChatroomStatsDefaults(initializeChatroomStatsDefaultsVars);
// Variables can be defined inline as well.
const { data } = await initializeChatroomStatsDefaults({ chatroomId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await initializeChatroomStatsDefaults(dataConnect, initializeChatroomStatsDefaultsVars);

console.log(data._execute);

// Or, you can use the `Promise` API.
initializeChatroomStatsDefaults(initializeChatroomStatsDefaultsVars).then((response) => {
  const data = response.data;
  console.log(data._execute);
});
```

### Using `InitializeChatroomStatsDefaults`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, initializeChatroomStatsDefaultsRef, InitializeChatroomStatsDefaultsVariables } from '@kismoportal-dataconnect/generated';

// The `InitializeChatroomStatsDefaults` mutation requires an argument of type `InitializeChatroomStatsDefaultsVariables`:
const initializeChatroomStatsDefaultsVars: InitializeChatroomStatsDefaultsVariables = {
  chatroomId: ..., 
};

// Call the `initializeChatroomStatsDefaultsRef()` function to get a reference to the mutation.
const ref = initializeChatroomStatsDefaultsRef(initializeChatroomStatsDefaultsVars);
// Variables can be defined inline as well.
const ref = initializeChatroomStatsDefaultsRef({ chatroomId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = initializeChatroomStatsDefaultsRef(dataConnect, initializeChatroomStatsDefaultsVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data._execute);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data._execute);
});
```

## IncrementChatroomStat
You can execute the `IncrementChatroomStat` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
incrementChatroomStat(vars: IncrementChatroomStatVariables): MutationPromise<IncrementChatroomStatData, IncrementChatroomStatVariables>;

interface IncrementChatroomStatRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: IncrementChatroomStatVariables): MutationRef<IncrementChatroomStatData, IncrementChatroomStatVariables>;
}
export const incrementChatroomStatRef: IncrementChatroomStatRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
incrementChatroomStat(dc: DataConnect, vars: IncrementChatroomStatVariables): MutationPromise<IncrementChatroomStatData, IncrementChatroomStatVariables>;

interface IncrementChatroomStatRef {
  ...
  (dc: DataConnect, vars: IncrementChatroomStatVariables): MutationRef<IncrementChatroomStatData, IncrementChatroomStatVariables>;
}
export const incrementChatroomStatRef: IncrementChatroomStatRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the incrementChatroomStatRef:
```typescript
const name = incrementChatroomStatRef.operationName;
console.log(name);
```

### Variables
The `IncrementChatroomStat` mutation requires an argument of type `IncrementChatroomStatVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface IncrementChatroomStatVariables {
  chatroomId: UUIDString;
  label: string;
  delta: Int64String;
  subtextOnCreate?: string | null;
}
```
### Return Type
Recall that executing the `IncrementChatroomStat` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `IncrementChatroomStatData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface IncrementChatroomStatData {
  _execute?: number | null;
}
```
### Using `IncrementChatroomStat`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, incrementChatroomStat, IncrementChatroomStatVariables } from '@kismoportal-dataconnect/generated';

// The `IncrementChatroomStat` mutation requires an argument of type `IncrementChatroomStatVariables`:
const incrementChatroomStatVars: IncrementChatroomStatVariables = {
  chatroomId: ..., 
  label: ..., 
  delta: ..., 
  subtextOnCreate: ..., // optional
};

// Call the `incrementChatroomStat()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await incrementChatroomStat(incrementChatroomStatVars);
// Variables can be defined inline as well.
const { data } = await incrementChatroomStat({ chatroomId: ..., label: ..., delta: ..., subtextOnCreate: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await incrementChatroomStat(dataConnect, incrementChatroomStatVars);

console.log(data._execute);

// Or, you can use the `Promise` API.
incrementChatroomStat(incrementChatroomStatVars).then((response) => {
  const data = response.data;
  console.log(data._execute);
});
```

### Using `IncrementChatroomStat`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, incrementChatroomStatRef, IncrementChatroomStatVariables } from '@kismoportal-dataconnect/generated';

// The `IncrementChatroomStat` mutation requires an argument of type `IncrementChatroomStatVariables`:
const incrementChatroomStatVars: IncrementChatroomStatVariables = {
  chatroomId: ..., 
  label: ..., 
  delta: ..., 
  subtextOnCreate: ..., // optional
};

// Call the `incrementChatroomStatRef()` function to get a reference to the mutation.
const ref = incrementChatroomStatRef(incrementChatroomStatVars);
// Variables can be defined inline as well.
const ref = incrementChatroomStatRef({ chatroomId: ..., label: ..., delta: ..., subtextOnCreate: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = incrementChatroomStatRef(dataConnect, incrementChatroomStatVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data._execute);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data._execute);
});
```

## CreatePlayroomSession
You can execute the `CreatePlayroomSession` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createPlayroomSession(vars: CreatePlayroomSessionVariables): MutationPromise<CreatePlayroomSessionData, CreatePlayroomSessionVariables>;

interface CreatePlayroomSessionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePlayroomSessionVariables): MutationRef<CreatePlayroomSessionData, CreatePlayroomSessionVariables>;
}
export const createPlayroomSessionRef: CreatePlayroomSessionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createPlayroomSession(dc: DataConnect, vars: CreatePlayroomSessionVariables): MutationPromise<CreatePlayroomSessionData, CreatePlayroomSessionVariables>;

interface CreatePlayroomSessionRef {
  ...
  (dc: DataConnect, vars: CreatePlayroomSessionVariables): MutationRef<CreatePlayroomSessionData, CreatePlayroomSessionVariables>;
}
export const createPlayroomSessionRef: CreatePlayroomSessionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createPlayroomSessionRef:
```typescript
const name = createPlayroomSessionRef.operationName;
console.log(name);
```

### Variables
The `CreatePlayroomSession` mutation requires an argument of type `CreatePlayroomSessionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreatePlayroomSessionVariables {
  playroomSessionId: string;
  gameName: string;
  openedByUserId: UUIDString;
  jwtTokenCreator: string;
}
```
### Return Type
Recall that executing the `CreatePlayroomSession` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreatePlayroomSessionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreatePlayroomSessionData {
  playroomSession_insert: PlayroomSession_Key;
}
```
### Using `CreatePlayroomSession`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createPlayroomSession, CreatePlayroomSessionVariables } from '@kismoportal-dataconnect/generated';

// The `CreatePlayroomSession` mutation requires an argument of type `CreatePlayroomSessionVariables`:
const createPlayroomSessionVars: CreatePlayroomSessionVariables = {
  playroomSessionId: ..., 
  gameName: ..., 
  openedByUserId: ..., 
  jwtTokenCreator: ..., 
};

// Call the `createPlayroomSession()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createPlayroomSession(createPlayroomSessionVars);
// Variables can be defined inline as well.
const { data } = await createPlayroomSession({ playroomSessionId: ..., gameName: ..., openedByUserId: ..., jwtTokenCreator: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createPlayroomSession(dataConnect, createPlayroomSessionVars);

console.log(data.playroomSession_insert);

// Or, you can use the `Promise` API.
createPlayroomSession(createPlayroomSessionVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_insert);
});
```

### Using `CreatePlayroomSession`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createPlayroomSessionRef, CreatePlayroomSessionVariables } from '@kismoportal-dataconnect/generated';

// The `CreatePlayroomSession` mutation requires an argument of type `CreatePlayroomSessionVariables`:
const createPlayroomSessionVars: CreatePlayroomSessionVariables = {
  playroomSessionId: ..., 
  gameName: ..., 
  openedByUserId: ..., 
  jwtTokenCreator: ..., 
};

// Call the `createPlayroomSessionRef()` function to get a reference to the mutation.
const ref = createPlayroomSessionRef(createPlayroomSessionVars);
// Variables can be defined inline as well.
const ref = createPlayroomSessionRef({ playroomSessionId: ..., gameName: ..., openedByUserId: ..., jwtTokenCreator: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createPlayroomSessionRef(dataConnect, createPlayroomSessionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playroomSession_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_insert);
});
```

## UpdatePlayroomSessionDetails
You can execute the `UpdatePlayroomSessionDetails` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updatePlayroomSessionDetails(vars: UpdatePlayroomSessionDetailsVariables): MutationPromise<UpdatePlayroomSessionDetailsData, UpdatePlayroomSessionDetailsVariables>;

interface UpdatePlayroomSessionDetailsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePlayroomSessionDetailsVariables): MutationRef<UpdatePlayroomSessionDetailsData, UpdatePlayroomSessionDetailsVariables>;
}
export const updatePlayroomSessionDetailsRef: UpdatePlayroomSessionDetailsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updatePlayroomSessionDetails(dc: DataConnect, vars: UpdatePlayroomSessionDetailsVariables): MutationPromise<UpdatePlayroomSessionDetailsData, UpdatePlayroomSessionDetailsVariables>;

interface UpdatePlayroomSessionDetailsRef {
  ...
  (dc: DataConnect, vars: UpdatePlayroomSessionDetailsVariables): MutationRef<UpdatePlayroomSessionDetailsData, UpdatePlayroomSessionDetailsVariables>;
}
export const updatePlayroomSessionDetailsRef: UpdatePlayroomSessionDetailsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updatePlayroomSessionDetailsRef:
```typescript
const name = updatePlayroomSessionDetailsRef.operationName;
console.log(name);
```

### Variables
The `UpdatePlayroomSessionDetails` mutation requires an argument of type `UpdatePlayroomSessionDetailsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdatePlayroomSessionDetailsVariables {
  id: UUIDString;
  invitedUserId?: UUIDString | null;
  invitedUserJoinedAt?: TimestampString | null;
  jwtTokenInvitedUser?: string | null;
  jwtTokenSpectator?: string | null;
}
```
### Return Type
Recall that executing the `UpdatePlayroomSessionDetails` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdatePlayroomSessionDetailsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdatePlayroomSessionDetailsData {
  playroomSession_update?: PlayroomSession_Key | null;
}
```
### Using `UpdatePlayroomSessionDetails`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updatePlayroomSessionDetails, UpdatePlayroomSessionDetailsVariables } from '@kismoportal-dataconnect/generated';

// The `UpdatePlayroomSessionDetails` mutation requires an argument of type `UpdatePlayroomSessionDetailsVariables`:
const updatePlayroomSessionDetailsVars: UpdatePlayroomSessionDetailsVariables = {
  id: ..., 
  invitedUserId: ..., // optional
  invitedUserJoinedAt: ..., // optional
  jwtTokenInvitedUser: ..., // optional
  jwtTokenSpectator: ..., // optional
};

// Call the `updatePlayroomSessionDetails()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updatePlayroomSessionDetails(updatePlayroomSessionDetailsVars);
// Variables can be defined inline as well.
const { data } = await updatePlayroomSessionDetails({ id: ..., invitedUserId: ..., invitedUserJoinedAt: ..., jwtTokenInvitedUser: ..., jwtTokenSpectator: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updatePlayroomSessionDetails(dataConnect, updatePlayroomSessionDetailsVars);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
updatePlayroomSessionDetails(updatePlayroomSessionDetailsVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

### Using `UpdatePlayroomSessionDetails`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updatePlayroomSessionDetailsRef, UpdatePlayroomSessionDetailsVariables } from '@kismoportal-dataconnect/generated';

// The `UpdatePlayroomSessionDetails` mutation requires an argument of type `UpdatePlayroomSessionDetailsVariables`:
const updatePlayroomSessionDetailsVars: UpdatePlayroomSessionDetailsVariables = {
  id: ..., 
  invitedUserId: ..., // optional
  invitedUserJoinedAt: ..., // optional
  jwtTokenInvitedUser: ..., // optional
  jwtTokenSpectator: ..., // optional
};

// Call the `updatePlayroomSessionDetailsRef()` function to get a reference to the mutation.
const ref = updatePlayroomSessionDetailsRef(updatePlayroomSessionDetailsVars);
// Variables can be defined inline as well.
const ref = updatePlayroomSessionDetailsRef({ id: ..., invitedUserId: ..., invitedUserJoinedAt: ..., jwtTokenInvitedUser: ..., jwtTokenSpectator: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updatePlayroomSessionDetailsRef(dataConnect, updatePlayroomSessionDetailsVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

## UpdatePlayroomInvitedUserJoinedAt
You can execute the `UpdatePlayroomInvitedUserJoinedAt` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updatePlayroomInvitedUserJoinedAt(vars: UpdatePlayroomInvitedUserJoinedAtVariables): MutationPromise<UpdatePlayroomInvitedUserJoinedAtData, UpdatePlayroomInvitedUserJoinedAtVariables>;

interface UpdatePlayroomInvitedUserJoinedAtRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePlayroomInvitedUserJoinedAtVariables): MutationRef<UpdatePlayroomInvitedUserJoinedAtData, UpdatePlayroomInvitedUserJoinedAtVariables>;
}
export const updatePlayroomInvitedUserJoinedAtRef: UpdatePlayroomInvitedUserJoinedAtRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updatePlayroomInvitedUserJoinedAt(dc: DataConnect, vars: UpdatePlayroomInvitedUserJoinedAtVariables): MutationPromise<UpdatePlayroomInvitedUserJoinedAtData, UpdatePlayroomInvitedUserJoinedAtVariables>;

interface UpdatePlayroomInvitedUserJoinedAtRef {
  ...
  (dc: DataConnect, vars: UpdatePlayroomInvitedUserJoinedAtVariables): MutationRef<UpdatePlayroomInvitedUserJoinedAtData, UpdatePlayroomInvitedUserJoinedAtVariables>;
}
export const updatePlayroomInvitedUserJoinedAtRef: UpdatePlayroomInvitedUserJoinedAtRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updatePlayroomInvitedUserJoinedAtRef:
```typescript
const name = updatePlayroomInvitedUserJoinedAtRef.operationName;
console.log(name);
```

### Variables
The `UpdatePlayroomInvitedUserJoinedAt` mutation requires an argument of type `UpdatePlayroomInvitedUserJoinedAtVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdatePlayroomInvitedUserJoinedAtVariables {
  id: UUIDString;
  invitedUserJoinedAt: TimestampString;
}
```
### Return Type
Recall that executing the `UpdatePlayroomInvitedUserJoinedAt` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdatePlayroomInvitedUserJoinedAtData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdatePlayroomInvitedUserJoinedAtData {
  playroomSession_update?: PlayroomSession_Key | null;
}
```
### Using `UpdatePlayroomInvitedUserJoinedAt`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updatePlayroomInvitedUserJoinedAt, UpdatePlayroomInvitedUserJoinedAtVariables } from '@kismoportal-dataconnect/generated';

// The `UpdatePlayroomInvitedUserJoinedAt` mutation requires an argument of type `UpdatePlayroomInvitedUserJoinedAtVariables`:
const updatePlayroomInvitedUserJoinedAtVars: UpdatePlayroomInvitedUserJoinedAtVariables = {
  id: ..., 
  invitedUserJoinedAt: ..., 
};

// Call the `updatePlayroomInvitedUserJoinedAt()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updatePlayroomInvitedUserJoinedAt(updatePlayroomInvitedUserJoinedAtVars);
// Variables can be defined inline as well.
const { data } = await updatePlayroomInvitedUserJoinedAt({ id: ..., invitedUserJoinedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updatePlayroomInvitedUserJoinedAt(dataConnect, updatePlayroomInvitedUserJoinedAtVars);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
updatePlayroomInvitedUserJoinedAt(updatePlayroomInvitedUserJoinedAtVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

### Using `UpdatePlayroomInvitedUserJoinedAt`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updatePlayroomInvitedUserJoinedAtRef, UpdatePlayroomInvitedUserJoinedAtVariables } from '@kismoportal-dataconnect/generated';

// The `UpdatePlayroomInvitedUserJoinedAt` mutation requires an argument of type `UpdatePlayroomInvitedUserJoinedAtVariables`:
const updatePlayroomInvitedUserJoinedAtVars: UpdatePlayroomInvitedUserJoinedAtVariables = {
  id: ..., 
  invitedUserJoinedAt: ..., 
};

// Call the `updatePlayroomInvitedUserJoinedAtRef()` function to get a reference to the mutation.
const ref = updatePlayroomInvitedUserJoinedAtRef(updatePlayroomInvitedUserJoinedAtVars);
// Variables can be defined inline as well.
const ref = updatePlayroomInvitedUserJoinedAtRef({ id: ..., invitedUserJoinedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updatePlayroomInvitedUserJoinedAtRef(dataConnect, updatePlayroomInvitedUserJoinedAtVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

## DeletePlayroomInvitedUserJoinedAt
You can execute the `DeletePlayroomInvitedUserJoinedAt` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deletePlayroomInvitedUserJoinedAt(vars: DeletePlayroomInvitedUserJoinedAtVariables): MutationPromise<DeletePlayroomInvitedUserJoinedAtData, DeletePlayroomInvitedUserJoinedAtVariables>;

interface DeletePlayroomInvitedUserJoinedAtRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePlayroomInvitedUserJoinedAtVariables): MutationRef<DeletePlayroomInvitedUserJoinedAtData, DeletePlayroomInvitedUserJoinedAtVariables>;
}
export const deletePlayroomInvitedUserJoinedAtRef: DeletePlayroomInvitedUserJoinedAtRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deletePlayroomInvitedUserJoinedAt(dc: DataConnect, vars: DeletePlayroomInvitedUserJoinedAtVariables): MutationPromise<DeletePlayroomInvitedUserJoinedAtData, DeletePlayroomInvitedUserJoinedAtVariables>;

interface DeletePlayroomInvitedUserJoinedAtRef {
  ...
  (dc: DataConnect, vars: DeletePlayroomInvitedUserJoinedAtVariables): MutationRef<DeletePlayroomInvitedUserJoinedAtData, DeletePlayroomInvitedUserJoinedAtVariables>;
}
export const deletePlayroomInvitedUserJoinedAtRef: DeletePlayroomInvitedUserJoinedAtRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deletePlayroomInvitedUserJoinedAtRef:
```typescript
const name = deletePlayroomInvitedUserJoinedAtRef.operationName;
console.log(name);
```

### Variables
The `DeletePlayroomInvitedUserJoinedAt` mutation requires an argument of type `DeletePlayroomInvitedUserJoinedAtVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeletePlayroomInvitedUserJoinedAtVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeletePlayroomInvitedUserJoinedAt` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeletePlayroomInvitedUserJoinedAtData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeletePlayroomInvitedUserJoinedAtData {
  playroomSession_update?: PlayroomSession_Key | null;
}
```
### Using `DeletePlayroomInvitedUserJoinedAt`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deletePlayroomInvitedUserJoinedAt, DeletePlayroomInvitedUserJoinedAtVariables } from '@kismoportal-dataconnect/generated';

// The `DeletePlayroomInvitedUserJoinedAt` mutation requires an argument of type `DeletePlayroomInvitedUserJoinedAtVariables`:
const deletePlayroomInvitedUserJoinedAtVars: DeletePlayroomInvitedUserJoinedAtVariables = {
  id: ..., 
};

// Call the `deletePlayroomInvitedUserJoinedAt()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deletePlayroomInvitedUserJoinedAt(deletePlayroomInvitedUserJoinedAtVars);
// Variables can be defined inline as well.
const { data } = await deletePlayroomInvitedUserJoinedAt({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deletePlayroomInvitedUserJoinedAt(dataConnect, deletePlayroomInvitedUserJoinedAtVars);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
deletePlayroomInvitedUserJoinedAt(deletePlayroomInvitedUserJoinedAtVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

### Using `DeletePlayroomInvitedUserJoinedAt`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deletePlayroomInvitedUserJoinedAtRef, DeletePlayroomInvitedUserJoinedAtVariables } from '@kismoportal-dataconnect/generated';

// The `DeletePlayroomInvitedUserJoinedAt` mutation requires an argument of type `DeletePlayroomInvitedUserJoinedAtVariables`:
const deletePlayroomInvitedUserJoinedAtVars: DeletePlayroomInvitedUserJoinedAtVariables = {
  id: ..., 
};

// Call the `deletePlayroomInvitedUserJoinedAtRef()` function to get a reference to the mutation.
const ref = deletePlayroomInvitedUserJoinedAtRef(deletePlayroomInvitedUserJoinedAtVars);
// Variables can be defined inline as well.
const ref = deletePlayroomInvitedUserJoinedAtRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deletePlayroomInvitedUserJoinedAtRef(dataConnect, deletePlayroomInvitedUserJoinedAtVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

## UpdatePlayroomCreatorUserHeartbeat
You can execute the `UpdatePlayroomCreatorUserHeartbeat` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updatePlayroomCreatorUserHeartbeat(vars: UpdatePlayroomCreatorUserHeartbeatVariables): MutationPromise<UpdatePlayroomCreatorUserHeartbeatData, UpdatePlayroomCreatorUserHeartbeatVariables>;

interface UpdatePlayroomCreatorUserHeartbeatRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePlayroomCreatorUserHeartbeatVariables): MutationRef<UpdatePlayroomCreatorUserHeartbeatData, UpdatePlayroomCreatorUserHeartbeatVariables>;
}
export const updatePlayroomCreatorUserHeartbeatRef: UpdatePlayroomCreatorUserHeartbeatRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updatePlayroomCreatorUserHeartbeat(dc: DataConnect, vars: UpdatePlayroomCreatorUserHeartbeatVariables): MutationPromise<UpdatePlayroomCreatorUserHeartbeatData, UpdatePlayroomCreatorUserHeartbeatVariables>;

interface UpdatePlayroomCreatorUserHeartbeatRef {
  ...
  (dc: DataConnect, vars: UpdatePlayroomCreatorUserHeartbeatVariables): MutationRef<UpdatePlayroomCreatorUserHeartbeatData, UpdatePlayroomCreatorUserHeartbeatVariables>;
}
export const updatePlayroomCreatorUserHeartbeatRef: UpdatePlayroomCreatorUserHeartbeatRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updatePlayroomCreatorUserHeartbeatRef:
```typescript
const name = updatePlayroomCreatorUserHeartbeatRef.operationName;
console.log(name);
```

### Variables
The `UpdatePlayroomCreatorUserHeartbeat` mutation requires an argument of type `UpdatePlayroomCreatorUserHeartbeatVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdatePlayroomCreatorUserHeartbeatVariables {
  id: UUIDString;
  creatorUserHeartbeat: TimestampString;
}
```
### Return Type
Recall that executing the `UpdatePlayroomCreatorUserHeartbeat` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdatePlayroomCreatorUserHeartbeatData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdatePlayroomCreatorUserHeartbeatData {
  playroomSession_update?: PlayroomSession_Key | null;
}
```
### Using `UpdatePlayroomCreatorUserHeartbeat`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updatePlayroomCreatorUserHeartbeat, UpdatePlayroomCreatorUserHeartbeatVariables } from '@kismoportal-dataconnect/generated';

// The `UpdatePlayroomCreatorUserHeartbeat` mutation requires an argument of type `UpdatePlayroomCreatorUserHeartbeatVariables`:
const updatePlayroomCreatorUserHeartbeatVars: UpdatePlayroomCreatorUserHeartbeatVariables = {
  id: ..., 
  creatorUserHeartbeat: ..., 
};

// Call the `updatePlayroomCreatorUserHeartbeat()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updatePlayroomCreatorUserHeartbeat(updatePlayroomCreatorUserHeartbeatVars);
// Variables can be defined inline as well.
const { data } = await updatePlayroomCreatorUserHeartbeat({ id: ..., creatorUserHeartbeat: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updatePlayroomCreatorUserHeartbeat(dataConnect, updatePlayroomCreatorUserHeartbeatVars);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
updatePlayroomCreatorUserHeartbeat(updatePlayroomCreatorUserHeartbeatVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

### Using `UpdatePlayroomCreatorUserHeartbeat`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updatePlayroomCreatorUserHeartbeatRef, UpdatePlayroomCreatorUserHeartbeatVariables } from '@kismoportal-dataconnect/generated';

// The `UpdatePlayroomCreatorUserHeartbeat` mutation requires an argument of type `UpdatePlayroomCreatorUserHeartbeatVariables`:
const updatePlayroomCreatorUserHeartbeatVars: UpdatePlayroomCreatorUserHeartbeatVariables = {
  id: ..., 
  creatorUserHeartbeat: ..., 
};

// Call the `updatePlayroomCreatorUserHeartbeatRef()` function to get a reference to the mutation.
const ref = updatePlayroomCreatorUserHeartbeatRef(updatePlayroomCreatorUserHeartbeatVars);
// Variables can be defined inline as well.
const ref = updatePlayroomCreatorUserHeartbeatRef({ id: ..., creatorUserHeartbeat: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updatePlayroomCreatorUserHeartbeatRef(dataConnect, updatePlayroomCreatorUserHeartbeatVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

## DeletePlayroomCreatorUserHeartbeat
You can execute the `DeletePlayroomCreatorUserHeartbeat` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deletePlayroomCreatorUserHeartbeat(vars: DeletePlayroomCreatorUserHeartbeatVariables): MutationPromise<DeletePlayroomCreatorUserHeartbeatData, DeletePlayroomCreatorUserHeartbeatVariables>;

interface DeletePlayroomCreatorUserHeartbeatRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePlayroomCreatorUserHeartbeatVariables): MutationRef<DeletePlayroomCreatorUserHeartbeatData, DeletePlayroomCreatorUserHeartbeatVariables>;
}
export const deletePlayroomCreatorUserHeartbeatRef: DeletePlayroomCreatorUserHeartbeatRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deletePlayroomCreatorUserHeartbeat(dc: DataConnect, vars: DeletePlayroomCreatorUserHeartbeatVariables): MutationPromise<DeletePlayroomCreatorUserHeartbeatData, DeletePlayroomCreatorUserHeartbeatVariables>;

interface DeletePlayroomCreatorUserHeartbeatRef {
  ...
  (dc: DataConnect, vars: DeletePlayroomCreatorUserHeartbeatVariables): MutationRef<DeletePlayroomCreatorUserHeartbeatData, DeletePlayroomCreatorUserHeartbeatVariables>;
}
export const deletePlayroomCreatorUserHeartbeatRef: DeletePlayroomCreatorUserHeartbeatRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deletePlayroomCreatorUserHeartbeatRef:
```typescript
const name = deletePlayroomCreatorUserHeartbeatRef.operationName;
console.log(name);
```

### Variables
The `DeletePlayroomCreatorUserHeartbeat` mutation requires an argument of type `DeletePlayroomCreatorUserHeartbeatVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeletePlayroomCreatorUserHeartbeatVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeletePlayroomCreatorUserHeartbeat` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeletePlayroomCreatorUserHeartbeatData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeletePlayroomCreatorUserHeartbeatData {
  playroomSession_update?: PlayroomSession_Key | null;
}
```
### Using `DeletePlayroomCreatorUserHeartbeat`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deletePlayroomCreatorUserHeartbeat, DeletePlayroomCreatorUserHeartbeatVariables } from '@kismoportal-dataconnect/generated';

// The `DeletePlayroomCreatorUserHeartbeat` mutation requires an argument of type `DeletePlayroomCreatorUserHeartbeatVariables`:
const deletePlayroomCreatorUserHeartbeatVars: DeletePlayroomCreatorUserHeartbeatVariables = {
  id: ..., 
};

// Call the `deletePlayroomCreatorUserHeartbeat()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deletePlayroomCreatorUserHeartbeat(deletePlayroomCreatorUserHeartbeatVars);
// Variables can be defined inline as well.
const { data } = await deletePlayroomCreatorUserHeartbeat({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deletePlayroomCreatorUserHeartbeat(dataConnect, deletePlayroomCreatorUserHeartbeatVars);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
deletePlayroomCreatorUserHeartbeat(deletePlayroomCreatorUserHeartbeatVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

### Using `DeletePlayroomCreatorUserHeartbeat`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deletePlayroomCreatorUserHeartbeatRef, DeletePlayroomCreatorUserHeartbeatVariables } from '@kismoportal-dataconnect/generated';

// The `DeletePlayroomCreatorUserHeartbeat` mutation requires an argument of type `DeletePlayroomCreatorUserHeartbeatVariables`:
const deletePlayroomCreatorUserHeartbeatVars: DeletePlayroomCreatorUserHeartbeatVariables = {
  id: ..., 
};

// Call the `deletePlayroomCreatorUserHeartbeatRef()` function to get a reference to the mutation.
const ref = deletePlayroomCreatorUserHeartbeatRef(deletePlayroomCreatorUserHeartbeatVars);
// Variables can be defined inline as well.
const ref = deletePlayroomCreatorUserHeartbeatRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deletePlayroomCreatorUserHeartbeatRef(dataConnect, deletePlayroomCreatorUserHeartbeatVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

## UpdatePlayroomInvitedUserHeartbeat
You can execute the `UpdatePlayroomInvitedUserHeartbeat` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updatePlayroomInvitedUserHeartbeat(vars: UpdatePlayroomInvitedUserHeartbeatVariables): MutationPromise<UpdatePlayroomInvitedUserHeartbeatData, UpdatePlayroomInvitedUserHeartbeatVariables>;

interface UpdatePlayroomInvitedUserHeartbeatRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePlayroomInvitedUserHeartbeatVariables): MutationRef<UpdatePlayroomInvitedUserHeartbeatData, UpdatePlayroomInvitedUserHeartbeatVariables>;
}
export const updatePlayroomInvitedUserHeartbeatRef: UpdatePlayroomInvitedUserHeartbeatRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updatePlayroomInvitedUserHeartbeat(dc: DataConnect, vars: UpdatePlayroomInvitedUserHeartbeatVariables): MutationPromise<UpdatePlayroomInvitedUserHeartbeatData, UpdatePlayroomInvitedUserHeartbeatVariables>;

interface UpdatePlayroomInvitedUserHeartbeatRef {
  ...
  (dc: DataConnect, vars: UpdatePlayroomInvitedUserHeartbeatVariables): MutationRef<UpdatePlayroomInvitedUserHeartbeatData, UpdatePlayroomInvitedUserHeartbeatVariables>;
}
export const updatePlayroomInvitedUserHeartbeatRef: UpdatePlayroomInvitedUserHeartbeatRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updatePlayroomInvitedUserHeartbeatRef:
```typescript
const name = updatePlayroomInvitedUserHeartbeatRef.operationName;
console.log(name);
```

### Variables
The `UpdatePlayroomInvitedUserHeartbeat` mutation requires an argument of type `UpdatePlayroomInvitedUserHeartbeatVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdatePlayroomInvitedUserHeartbeatVariables {
  id: UUIDString;
  invitedUserHeartbeat: TimestampString;
}
```
### Return Type
Recall that executing the `UpdatePlayroomInvitedUserHeartbeat` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdatePlayroomInvitedUserHeartbeatData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdatePlayroomInvitedUserHeartbeatData {
  playroomSession_update?: PlayroomSession_Key | null;
}
```
### Using `UpdatePlayroomInvitedUserHeartbeat`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updatePlayroomInvitedUserHeartbeat, UpdatePlayroomInvitedUserHeartbeatVariables } from '@kismoportal-dataconnect/generated';

// The `UpdatePlayroomInvitedUserHeartbeat` mutation requires an argument of type `UpdatePlayroomInvitedUserHeartbeatVariables`:
const updatePlayroomInvitedUserHeartbeatVars: UpdatePlayroomInvitedUserHeartbeatVariables = {
  id: ..., 
  invitedUserHeartbeat: ..., 
};

// Call the `updatePlayroomInvitedUserHeartbeat()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updatePlayroomInvitedUserHeartbeat(updatePlayroomInvitedUserHeartbeatVars);
// Variables can be defined inline as well.
const { data } = await updatePlayroomInvitedUserHeartbeat({ id: ..., invitedUserHeartbeat: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updatePlayroomInvitedUserHeartbeat(dataConnect, updatePlayroomInvitedUserHeartbeatVars);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
updatePlayroomInvitedUserHeartbeat(updatePlayroomInvitedUserHeartbeatVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

### Using `UpdatePlayroomInvitedUserHeartbeat`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updatePlayroomInvitedUserHeartbeatRef, UpdatePlayroomInvitedUserHeartbeatVariables } from '@kismoportal-dataconnect/generated';

// The `UpdatePlayroomInvitedUserHeartbeat` mutation requires an argument of type `UpdatePlayroomInvitedUserHeartbeatVariables`:
const updatePlayroomInvitedUserHeartbeatVars: UpdatePlayroomInvitedUserHeartbeatVariables = {
  id: ..., 
  invitedUserHeartbeat: ..., 
};

// Call the `updatePlayroomInvitedUserHeartbeatRef()` function to get a reference to the mutation.
const ref = updatePlayroomInvitedUserHeartbeatRef(updatePlayroomInvitedUserHeartbeatVars);
// Variables can be defined inline as well.
const ref = updatePlayroomInvitedUserHeartbeatRef({ id: ..., invitedUserHeartbeat: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updatePlayroomInvitedUserHeartbeatRef(dataConnect, updatePlayroomInvitedUserHeartbeatVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

## DeletePlayroomInvitedUserHeartbeat
You can execute the `DeletePlayroomInvitedUserHeartbeat` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deletePlayroomInvitedUserHeartbeat(vars: DeletePlayroomInvitedUserHeartbeatVariables): MutationPromise<DeletePlayroomInvitedUserHeartbeatData, DeletePlayroomInvitedUserHeartbeatVariables>;

interface DeletePlayroomInvitedUserHeartbeatRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePlayroomInvitedUserHeartbeatVariables): MutationRef<DeletePlayroomInvitedUserHeartbeatData, DeletePlayroomInvitedUserHeartbeatVariables>;
}
export const deletePlayroomInvitedUserHeartbeatRef: DeletePlayroomInvitedUserHeartbeatRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deletePlayroomInvitedUserHeartbeat(dc: DataConnect, vars: DeletePlayroomInvitedUserHeartbeatVariables): MutationPromise<DeletePlayroomInvitedUserHeartbeatData, DeletePlayroomInvitedUserHeartbeatVariables>;

interface DeletePlayroomInvitedUserHeartbeatRef {
  ...
  (dc: DataConnect, vars: DeletePlayroomInvitedUserHeartbeatVariables): MutationRef<DeletePlayroomInvitedUserHeartbeatData, DeletePlayroomInvitedUserHeartbeatVariables>;
}
export const deletePlayroomInvitedUserHeartbeatRef: DeletePlayroomInvitedUserHeartbeatRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deletePlayroomInvitedUserHeartbeatRef:
```typescript
const name = deletePlayroomInvitedUserHeartbeatRef.operationName;
console.log(name);
```

### Variables
The `DeletePlayroomInvitedUserHeartbeat` mutation requires an argument of type `DeletePlayroomInvitedUserHeartbeatVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeletePlayroomInvitedUserHeartbeatVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeletePlayroomInvitedUserHeartbeat` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeletePlayroomInvitedUserHeartbeatData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeletePlayroomInvitedUserHeartbeatData {
  playroomSession_update?: PlayroomSession_Key | null;
}
```
### Using `DeletePlayroomInvitedUserHeartbeat`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deletePlayroomInvitedUserHeartbeat, DeletePlayroomInvitedUserHeartbeatVariables } from '@kismoportal-dataconnect/generated';

// The `DeletePlayroomInvitedUserHeartbeat` mutation requires an argument of type `DeletePlayroomInvitedUserHeartbeatVariables`:
const deletePlayroomInvitedUserHeartbeatVars: DeletePlayroomInvitedUserHeartbeatVariables = {
  id: ..., 
};

// Call the `deletePlayroomInvitedUserHeartbeat()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deletePlayroomInvitedUserHeartbeat(deletePlayroomInvitedUserHeartbeatVars);
// Variables can be defined inline as well.
const { data } = await deletePlayroomInvitedUserHeartbeat({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deletePlayroomInvitedUserHeartbeat(dataConnect, deletePlayroomInvitedUserHeartbeatVars);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
deletePlayroomInvitedUserHeartbeat(deletePlayroomInvitedUserHeartbeatVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

### Using `DeletePlayroomInvitedUserHeartbeat`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deletePlayroomInvitedUserHeartbeatRef, DeletePlayroomInvitedUserHeartbeatVariables } from '@kismoportal-dataconnect/generated';

// The `DeletePlayroomInvitedUserHeartbeat` mutation requires an argument of type `DeletePlayroomInvitedUserHeartbeatVariables`:
const deletePlayroomInvitedUserHeartbeatVars: DeletePlayroomInvitedUserHeartbeatVariables = {
  id: ..., 
};

// Call the `deletePlayroomInvitedUserHeartbeatRef()` function to get a reference to the mutation.
const ref = deletePlayroomInvitedUserHeartbeatRef(deletePlayroomInvitedUserHeartbeatVars);
// Variables can be defined inline as well.
const ref = deletePlayroomInvitedUserHeartbeatRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deletePlayroomInvitedUserHeartbeatRef(dataConnect, deletePlayroomInvitedUserHeartbeatVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

## UpdatePlayroomSpectators
You can execute the `UpdatePlayroomSpectators` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updatePlayroomSpectators(vars: UpdatePlayroomSpectatorsVariables): MutationPromise<UpdatePlayroomSpectatorsData, UpdatePlayroomSpectatorsVariables>;

interface UpdatePlayroomSpectatorsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePlayroomSpectatorsVariables): MutationRef<UpdatePlayroomSpectatorsData, UpdatePlayroomSpectatorsVariables>;
}
export const updatePlayroomSpectatorsRef: UpdatePlayroomSpectatorsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updatePlayroomSpectators(dc: DataConnect, vars: UpdatePlayroomSpectatorsVariables): MutationPromise<UpdatePlayroomSpectatorsData, UpdatePlayroomSpectatorsVariables>;

interface UpdatePlayroomSpectatorsRef {
  ...
  (dc: DataConnect, vars: UpdatePlayroomSpectatorsVariables): MutationRef<UpdatePlayroomSpectatorsData, UpdatePlayroomSpectatorsVariables>;
}
export const updatePlayroomSpectatorsRef: UpdatePlayroomSpectatorsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updatePlayroomSpectatorsRef:
```typescript
const name = updatePlayroomSpectatorsRef.operationName;
console.log(name);
```

### Variables
The `UpdatePlayroomSpectators` mutation requires an argument of type `UpdatePlayroomSpectatorsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdatePlayroomSpectatorsVariables {
  id: UUIDString;
  spectators: unknown;
}
```
### Return Type
Recall that executing the `UpdatePlayroomSpectators` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdatePlayroomSpectatorsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdatePlayroomSpectatorsData {
  playroomSession_update?: PlayroomSession_Key | null;
}
```
### Using `UpdatePlayroomSpectators`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updatePlayroomSpectators, UpdatePlayroomSpectatorsVariables } from '@kismoportal-dataconnect/generated';

// The `UpdatePlayroomSpectators` mutation requires an argument of type `UpdatePlayroomSpectatorsVariables`:
const updatePlayroomSpectatorsVars: UpdatePlayroomSpectatorsVariables = {
  id: ..., 
  spectators: ..., 
};

// Call the `updatePlayroomSpectators()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updatePlayroomSpectators(updatePlayroomSpectatorsVars);
// Variables can be defined inline as well.
const { data } = await updatePlayroomSpectators({ id: ..., spectators: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updatePlayroomSpectators(dataConnect, updatePlayroomSpectatorsVars);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
updatePlayroomSpectators(updatePlayroomSpectatorsVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

### Using `UpdatePlayroomSpectators`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updatePlayroomSpectatorsRef, UpdatePlayroomSpectatorsVariables } from '@kismoportal-dataconnect/generated';

// The `UpdatePlayroomSpectators` mutation requires an argument of type `UpdatePlayroomSpectatorsVariables`:
const updatePlayroomSpectatorsVars: UpdatePlayroomSpectatorsVariables = {
  id: ..., 
  spectators: ..., 
};

// Call the `updatePlayroomSpectatorsRef()` function to get a reference to the mutation.
const ref = updatePlayroomSpectatorsRef(updatePlayroomSpectatorsVars);
// Variables can be defined inline as well.
const ref = updatePlayroomSpectatorsRef({ id: ..., spectators: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updatePlayroomSpectatorsRef(dataConnect, updatePlayroomSpectatorsVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

## DeletePlayroomSpectators
You can execute the `DeletePlayroomSpectators` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deletePlayroomSpectators(vars: DeletePlayroomSpectatorsVariables): MutationPromise<DeletePlayroomSpectatorsData, DeletePlayroomSpectatorsVariables>;

interface DeletePlayroomSpectatorsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePlayroomSpectatorsVariables): MutationRef<DeletePlayroomSpectatorsData, DeletePlayroomSpectatorsVariables>;
}
export const deletePlayroomSpectatorsRef: DeletePlayroomSpectatorsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deletePlayroomSpectators(dc: DataConnect, vars: DeletePlayroomSpectatorsVariables): MutationPromise<DeletePlayroomSpectatorsData, DeletePlayroomSpectatorsVariables>;

interface DeletePlayroomSpectatorsRef {
  ...
  (dc: DataConnect, vars: DeletePlayroomSpectatorsVariables): MutationRef<DeletePlayroomSpectatorsData, DeletePlayroomSpectatorsVariables>;
}
export const deletePlayroomSpectatorsRef: DeletePlayroomSpectatorsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deletePlayroomSpectatorsRef:
```typescript
const name = deletePlayroomSpectatorsRef.operationName;
console.log(name);
```

### Variables
The `DeletePlayroomSpectators` mutation requires an argument of type `DeletePlayroomSpectatorsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeletePlayroomSpectatorsVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeletePlayroomSpectators` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeletePlayroomSpectatorsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeletePlayroomSpectatorsData {
  playroomSession_update?: PlayroomSession_Key | null;
}
```
### Using `DeletePlayroomSpectators`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deletePlayroomSpectators, DeletePlayroomSpectatorsVariables } from '@kismoportal-dataconnect/generated';

// The `DeletePlayroomSpectators` mutation requires an argument of type `DeletePlayroomSpectatorsVariables`:
const deletePlayroomSpectatorsVars: DeletePlayroomSpectatorsVariables = {
  id: ..., 
};

// Call the `deletePlayroomSpectators()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deletePlayroomSpectators(deletePlayroomSpectatorsVars);
// Variables can be defined inline as well.
const { data } = await deletePlayroomSpectators({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deletePlayroomSpectators(dataConnect, deletePlayroomSpectatorsVars);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
deletePlayroomSpectators(deletePlayroomSpectatorsVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

### Using `DeletePlayroomSpectators`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deletePlayroomSpectatorsRef, DeletePlayroomSpectatorsVariables } from '@kismoportal-dataconnect/generated';

// The `DeletePlayroomSpectators` mutation requires an argument of type `DeletePlayroomSpectatorsVariables`:
const deletePlayroomSpectatorsVars: DeletePlayroomSpectatorsVariables = {
  id: ..., 
};

// Call the `deletePlayroomSpectatorsRef()` function to get a reference to the mutation.
const ref = deletePlayroomSpectatorsRef(deletePlayroomSpectatorsVars);
// Variables can be defined inline as well.
const ref = deletePlayroomSpectatorsRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deletePlayroomSpectatorsRef(dataConnect, deletePlayroomSpectatorsVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

## UpdatePlayroomSpectatorsJoined
You can execute the `UpdatePlayroomSpectatorsJoined` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updatePlayroomSpectatorsJoined(vars: UpdatePlayroomSpectatorsJoinedVariables): MutationPromise<UpdatePlayroomSpectatorsJoinedData, UpdatePlayroomSpectatorsJoinedVariables>;

interface UpdatePlayroomSpectatorsJoinedRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePlayroomSpectatorsJoinedVariables): MutationRef<UpdatePlayroomSpectatorsJoinedData, UpdatePlayroomSpectatorsJoinedVariables>;
}
export const updatePlayroomSpectatorsJoinedRef: UpdatePlayroomSpectatorsJoinedRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updatePlayroomSpectatorsJoined(dc: DataConnect, vars: UpdatePlayroomSpectatorsJoinedVariables): MutationPromise<UpdatePlayroomSpectatorsJoinedData, UpdatePlayroomSpectatorsJoinedVariables>;

interface UpdatePlayroomSpectatorsJoinedRef {
  ...
  (dc: DataConnect, vars: UpdatePlayroomSpectatorsJoinedVariables): MutationRef<UpdatePlayroomSpectatorsJoinedData, UpdatePlayroomSpectatorsJoinedVariables>;
}
export const updatePlayroomSpectatorsJoinedRef: UpdatePlayroomSpectatorsJoinedRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updatePlayroomSpectatorsJoinedRef:
```typescript
const name = updatePlayroomSpectatorsJoinedRef.operationName;
console.log(name);
```

### Variables
The `UpdatePlayroomSpectatorsJoined` mutation requires an argument of type `UpdatePlayroomSpectatorsJoinedVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdatePlayroomSpectatorsJoinedVariables {
  id: UUIDString;
  spectatorsJoined: unknown;
}
```
### Return Type
Recall that executing the `UpdatePlayroomSpectatorsJoined` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdatePlayroomSpectatorsJoinedData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdatePlayroomSpectatorsJoinedData {
  playroomSession_update?: PlayroomSession_Key | null;
}
```
### Using `UpdatePlayroomSpectatorsJoined`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updatePlayroomSpectatorsJoined, UpdatePlayroomSpectatorsJoinedVariables } from '@kismoportal-dataconnect/generated';

// The `UpdatePlayroomSpectatorsJoined` mutation requires an argument of type `UpdatePlayroomSpectatorsJoinedVariables`:
const updatePlayroomSpectatorsJoinedVars: UpdatePlayroomSpectatorsJoinedVariables = {
  id: ..., 
  spectatorsJoined: ..., 
};

// Call the `updatePlayroomSpectatorsJoined()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updatePlayroomSpectatorsJoined(updatePlayroomSpectatorsJoinedVars);
// Variables can be defined inline as well.
const { data } = await updatePlayroomSpectatorsJoined({ id: ..., spectatorsJoined: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updatePlayroomSpectatorsJoined(dataConnect, updatePlayroomSpectatorsJoinedVars);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
updatePlayroomSpectatorsJoined(updatePlayroomSpectatorsJoinedVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

### Using `UpdatePlayroomSpectatorsJoined`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updatePlayroomSpectatorsJoinedRef, UpdatePlayroomSpectatorsJoinedVariables } from '@kismoportal-dataconnect/generated';

// The `UpdatePlayroomSpectatorsJoined` mutation requires an argument of type `UpdatePlayroomSpectatorsJoinedVariables`:
const updatePlayroomSpectatorsJoinedVars: UpdatePlayroomSpectatorsJoinedVariables = {
  id: ..., 
  spectatorsJoined: ..., 
};

// Call the `updatePlayroomSpectatorsJoinedRef()` function to get a reference to the mutation.
const ref = updatePlayroomSpectatorsJoinedRef(updatePlayroomSpectatorsJoinedVars);
// Variables can be defined inline as well.
const ref = updatePlayroomSpectatorsJoinedRef({ id: ..., spectatorsJoined: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updatePlayroomSpectatorsJoinedRef(dataConnect, updatePlayroomSpectatorsJoinedVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

## DeletePlayroomSpectatorsJoined
You can execute the `DeletePlayroomSpectatorsJoined` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deletePlayroomSpectatorsJoined(vars: DeletePlayroomSpectatorsJoinedVariables): MutationPromise<DeletePlayroomSpectatorsJoinedData, DeletePlayroomSpectatorsJoinedVariables>;

interface DeletePlayroomSpectatorsJoinedRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePlayroomSpectatorsJoinedVariables): MutationRef<DeletePlayroomSpectatorsJoinedData, DeletePlayroomSpectatorsJoinedVariables>;
}
export const deletePlayroomSpectatorsJoinedRef: DeletePlayroomSpectatorsJoinedRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deletePlayroomSpectatorsJoined(dc: DataConnect, vars: DeletePlayroomSpectatorsJoinedVariables): MutationPromise<DeletePlayroomSpectatorsJoinedData, DeletePlayroomSpectatorsJoinedVariables>;

interface DeletePlayroomSpectatorsJoinedRef {
  ...
  (dc: DataConnect, vars: DeletePlayroomSpectatorsJoinedVariables): MutationRef<DeletePlayroomSpectatorsJoinedData, DeletePlayroomSpectatorsJoinedVariables>;
}
export const deletePlayroomSpectatorsJoinedRef: DeletePlayroomSpectatorsJoinedRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deletePlayroomSpectatorsJoinedRef:
```typescript
const name = deletePlayroomSpectatorsJoinedRef.operationName;
console.log(name);
```

### Variables
The `DeletePlayroomSpectatorsJoined` mutation requires an argument of type `DeletePlayroomSpectatorsJoinedVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeletePlayroomSpectatorsJoinedVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeletePlayroomSpectatorsJoined` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeletePlayroomSpectatorsJoinedData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeletePlayroomSpectatorsJoinedData {
  playroomSession_update?: PlayroomSession_Key | null;
}
```
### Using `DeletePlayroomSpectatorsJoined`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deletePlayroomSpectatorsJoined, DeletePlayroomSpectatorsJoinedVariables } from '@kismoportal-dataconnect/generated';

// The `DeletePlayroomSpectatorsJoined` mutation requires an argument of type `DeletePlayroomSpectatorsJoinedVariables`:
const deletePlayroomSpectatorsJoinedVars: DeletePlayroomSpectatorsJoinedVariables = {
  id: ..., 
};

// Call the `deletePlayroomSpectatorsJoined()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deletePlayroomSpectatorsJoined(deletePlayroomSpectatorsJoinedVars);
// Variables can be defined inline as well.
const { data } = await deletePlayroomSpectatorsJoined({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deletePlayroomSpectatorsJoined(dataConnect, deletePlayroomSpectatorsJoinedVars);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
deletePlayroomSpectatorsJoined(deletePlayroomSpectatorsJoinedVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

### Using `DeletePlayroomSpectatorsJoined`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deletePlayroomSpectatorsJoinedRef, DeletePlayroomSpectatorsJoinedVariables } from '@kismoportal-dataconnect/generated';

// The `DeletePlayroomSpectatorsJoined` mutation requires an argument of type `DeletePlayroomSpectatorsJoinedVariables`:
const deletePlayroomSpectatorsJoinedVars: DeletePlayroomSpectatorsJoinedVariables = {
  id: ..., 
};

// Call the `deletePlayroomSpectatorsJoinedRef()` function to get a reference to the mutation.
const ref = deletePlayroomSpectatorsJoinedRef(deletePlayroomSpectatorsJoinedVars);
// Variables can be defined inline as well.
const ref = deletePlayroomSpectatorsJoinedRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deletePlayroomSpectatorsJoinedRef(dataConnect, deletePlayroomSpectatorsJoinedVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playroomSession_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_update);
});
```

## ClosePlayroomSession
You can execute the `ClosePlayroomSession` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
closePlayroomSession(vars: ClosePlayroomSessionVariables): MutationPromise<ClosePlayroomSessionData, ClosePlayroomSessionVariables>;

interface ClosePlayroomSessionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ClosePlayroomSessionVariables): MutationRef<ClosePlayroomSessionData, ClosePlayroomSessionVariables>;
}
export const closePlayroomSessionRef: ClosePlayroomSessionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
closePlayroomSession(dc: DataConnect, vars: ClosePlayroomSessionVariables): MutationPromise<ClosePlayroomSessionData, ClosePlayroomSessionVariables>;

interface ClosePlayroomSessionRef {
  ...
  (dc: DataConnect, vars: ClosePlayroomSessionVariables): MutationRef<ClosePlayroomSessionData, ClosePlayroomSessionVariables>;
}
export const closePlayroomSessionRef: ClosePlayroomSessionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the closePlayroomSessionRef:
```typescript
const name = closePlayroomSessionRef.operationName;
console.log(name);
```

### Variables
The `ClosePlayroomSession` mutation requires an argument of type `ClosePlayroomSessionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ClosePlayroomSessionVariables {
  id: UUIDString;
  closedAt: TimestampString;
}
```
### Return Type
Recall that executing the `ClosePlayroomSession` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ClosePlayroomSessionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ClosePlayroomSessionData {
  playroomSession_updateMany: number;
}
```
### Using `ClosePlayroomSession`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, closePlayroomSession, ClosePlayroomSessionVariables } from '@kismoportal-dataconnect/generated';

// The `ClosePlayroomSession` mutation requires an argument of type `ClosePlayroomSessionVariables`:
const closePlayroomSessionVars: ClosePlayroomSessionVariables = {
  id: ..., 
  closedAt: ..., 
};

// Call the `closePlayroomSession()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await closePlayroomSession(closePlayroomSessionVars);
// Variables can be defined inline as well.
const { data } = await closePlayroomSession({ id: ..., closedAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await closePlayroomSession(dataConnect, closePlayroomSessionVars);

console.log(data.playroomSession_updateMany);

// Or, you can use the `Promise` API.
closePlayroomSession(closePlayroomSessionVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_updateMany);
});
```

### Using `ClosePlayroomSession`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, closePlayroomSessionRef, ClosePlayroomSessionVariables } from '@kismoportal-dataconnect/generated';

// The `ClosePlayroomSession` mutation requires an argument of type `ClosePlayroomSessionVariables`:
const closePlayroomSessionVars: ClosePlayroomSessionVariables = {
  id: ..., 
  closedAt: ..., 
};

// Call the `closePlayroomSessionRef()` function to get a reference to the mutation.
const ref = closePlayroomSessionRef(closePlayroomSessionVars);
// Variables can be defined inline as well.
const ref = closePlayroomSessionRef({ id: ..., closedAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = closePlayroomSessionRef(dataConnect, closePlayroomSessionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playroomSession_updateMany);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_updateMany);
});
```

## DeletePlayroomSession
You can execute the `DeletePlayroomSession` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deletePlayroomSession(vars: DeletePlayroomSessionVariables): MutationPromise<DeletePlayroomSessionData, DeletePlayroomSessionVariables>;

interface DeletePlayroomSessionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePlayroomSessionVariables): MutationRef<DeletePlayroomSessionData, DeletePlayroomSessionVariables>;
}
export const deletePlayroomSessionRef: DeletePlayroomSessionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deletePlayroomSession(dc: DataConnect, vars: DeletePlayroomSessionVariables): MutationPromise<DeletePlayroomSessionData, DeletePlayroomSessionVariables>;

interface DeletePlayroomSessionRef {
  ...
  (dc: DataConnect, vars: DeletePlayroomSessionVariables): MutationRef<DeletePlayroomSessionData, DeletePlayroomSessionVariables>;
}
export const deletePlayroomSessionRef: DeletePlayroomSessionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deletePlayroomSessionRef:
```typescript
const name = deletePlayroomSessionRef.operationName;
console.log(name);
```

### Variables
The `DeletePlayroomSession` mutation requires an argument of type `DeletePlayroomSessionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeletePlayroomSessionVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeletePlayroomSession` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeletePlayroomSessionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeletePlayroomSessionData {
  playroomSession_delete?: PlayroomSession_Key | null;
}
```
### Using `DeletePlayroomSession`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deletePlayroomSession, DeletePlayroomSessionVariables } from '@kismoportal-dataconnect/generated';

// The `DeletePlayroomSession` mutation requires an argument of type `DeletePlayroomSessionVariables`:
const deletePlayroomSessionVars: DeletePlayroomSessionVariables = {
  id: ..., 
};

// Call the `deletePlayroomSession()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deletePlayroomSession(deletePlayroomSessionVars);
// Variables can be defined inline as well.
const { data } = await deletePlayroomSession({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deletePlayroomSession(dataConnect, deletePlayroomSessionVars);

console.log(data.playroomSession_delete);

// Or, you can use the `Promise` API.
deletePlayroomSession(deletePlayroomSessionVars).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_delete);
});
```

### Using `DeletePlayroomSession`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deletePlayroomSessionRef, DeletePlayroomSessionVariables } from '@kismoportal-dataconnect/generated';

// The `DeletePlayroomSession` mutation requires an argument of type `DeletePlayroomSessionVariables`:
const deletePlayroomSessionVars: DeletePlayroomSessionVariables = {
  id: ..., 
};

// Call the `deletePlayroomSessionRef()` function to get a reference to the mutation.
const ref = deletePlayroomSessionRef(deletePlayroomSessionVars);
// Variables can be defined inline as well.
const ref = deletePlayroomSessionRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deletePlayroomSessionRef(dataConnect, deletePlayroomSessionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.playroomSession_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.playroomSession_delete);
});
```

