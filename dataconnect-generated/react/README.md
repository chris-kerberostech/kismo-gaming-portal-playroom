# Generated React README
This README will guide you through the process of using the generated React SDK package for the connector `kismo-connector`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `JavaScript README`, you can find it at [`dataconnect-generated/README.md`](../README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

You can use this generated SDK by importing from the package `@kismoportal-dataconnect/generated/react` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#react).

# Table of Contents
- [**Overview**](#generated-react-readme)
- [**TanStack Query Firebase & TanStack React Query**](#tanstack-query-firebase-tanstack-react-query)
  - [*Package Installation*](#installing-tanstack-query-firebase-and-tanstack-react-query-packages)
  - [*Configuring TanStack Query*](#configuring-tanstack-query)
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
  - [*ClosePlayroomSession*](#closeplayroomsession)
  - [*DeletePlayroomSession*](#deleteplayroomsession)

# TanStack Query Firebase & TanStack React Query
This SDK provides [React](https://react.dev/) hooks generated specific to your application, for the operations found in the connector `kismo-connector`. These hooks are generated using [TanStack Query Firebase](https://react-query-firebase.invertase.dev/) by our partners at Invertase, a library built on top of [TanStack React Query v5](https://tanstack.com/query/v5/docs/framework/react/overview).

***You do not need to be familiar with Tanstack Query or Tanstack Query Firebase to use this SDK.*** However, you may find it useful to learn more about them, as they will empower you as a user of this Generated React SDK.

## Installing TanStack Query Firebase and TanStack React Query Packages
In order to use the React generated SDK, you must install the `TanStack React Query` and `TanStack Query Firebase` packages.
```bash
npm i --save @tanstack/react-query @tanstack-query-firebase/react
```
```bash
npm i --save firebase@latest # Note: React has a peer dependency on ^11.3.0
```

You can also follow the installation instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#tanstack-install), or the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react) and [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/installation).

## Configuring TanStack Query
In order to use the React generated SDK in your application, you must wrap your application's component tree in a `QueryClientProvider` component from TanStack React Query. None of your generated React SDK hooks will work without this provider.

```javascript
import { QueryClientProvider } from '@tanstack/react-query';

// Create a TanStack Query client instance
const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <MyApplication />
    </QueryClientProvider>
  )
}
```

To learn more about `QueryClientProvider`, see the [TanStack React Query documentation](https://tanstack.com/query/latest/docs/framework/react/quick-start) and the [TanStack Query Firebase documentation](https://invertase.docs.page/tanstack-query-firebase/react#usage).

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `kismo-connector`.

You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@kismoportal-dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#emulator-react-angular).

```javascript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@kismoportal-dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) using the hooks provided from your generated React SDK.

# Queries

The React generated SDK provides Query hook functions that call and return [`useDataConnectQuery`](https://react-query-firebase.invertase.dev/react/data-connect/querying) hooks from TanStack Query Firebase.

Calling these hook functions will return a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and the most recent data returned by the Query, among other things. To learn more about these hooks and how to use them, see the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react/data-connect/querying).

TanStack React Query caches the results of your Queries, so using the same Query hook function in multiple places in your application allows the entire application to automatically see updates to that Query's data.

Query hooks execute their Queries automatically when called, and periodically refresh, unless you change the `queryOptions` for the Query. To learn how to stop a Query from automatically executing, including how to make a query "lazy", see the [TanStack React Query documentation](https://tanstack.com/query/latest/docs/framework/react/guides/disabling-queries).

To learn more about TanStack React Query's Queries, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/queries).

## Using Query Hooks
Here's a general overview of how to use the generated Query hooks in your code:

- If the Query has no variables, the Query hook function does not require arguments.
- If the Query has any required variables, the Query hook function will require at least one argument: an object that contains all the required variables for the Query.
- If the Query has some required and some optional variables, only required variables are necessary in the variables argument object, and optional variables may be provided as well.
- If all of the Query's variables are optional, the Query hook function does not require any arguments.
- Query hook functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.
- Query hooks functions can be called with or without passing in an `options` argument of type `useDataConnectQueryOptions`. To learn more about the `options` argument, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/query-options).
  - ***Special case:***  If the Query has all optional variables and you would like to provide an `options` argument to the Query hook function without providing any variables, you must pass `undefined` where you would normally pass the Query's variables, and then may provide the `options` argument.

Below are examples of how to use the `kismo-connector` connector's generated Query hook functions to execute each Query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#operations-react-angular).

## GetUser
You can execute the `GetUser` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetUser(dc: DataConnect, vars: GetUserVariables, options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, GetUserVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetUser(vars: GetUserVariables, options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, GetUserVariables>;
```

### Variables
The `GetUser` Query requires an argument of type `GetUserVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetUserVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `GetUser` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetUser` Query is of type `GetUserData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetUser`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetUserVariables } from '@kismoportal-dataconnect/generated';
import { useGetUser } from '@kismoportal-dataconnect/generated/react'

export default function GetUserComponent() {
  // The `useGetUser` Query hook requires an argument of type `GetUserVariables`:
  const getUserVars: GetUserVariables = {
    id: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetUser(getUserVars);
  // Variables can be defined inline as well.
  const query = useGetUser({ id: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetUser(dataConnect, getUserVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetUser(getUserVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetUser(dataConnect, getUserVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.user);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListPublicChatrooms
You can execute the `ListPublicChatrooms` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListPublicChatrooms(dc: DataConnect, vars?: ListPublicChatroomsVariables, options?: useDataConnectQueryOptions<ListPublicChatroomsData>): UseDataConnectQueryResult<ListPublicChatroomsData, ListPublicChatroomsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListPublicChatrooms(vars?: ListPublicChatroomsVariables, options?: useDataConnectQueryOptions<ListPublicChatroomsData>): UseDataConnectQueryResult<ListPublicChatroomsData, ListPublicChatroomsVariables>;
```

### Variables
The `ListPublicChatrooms` Query has an optional argument of type `ListPublicChatroomsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListPublicChatroomsVariables {
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that calling the `ListPublicChatrooms` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListPublicChatrooms` Query is of type `ListPublicChatroomsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListPublicChatrooms`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListPublicChatroomsVariables } from '@kismoportal-dataconnect/generated';
import { useListPublicChatrooms } from '@kismoportal-dataconnect/generated/react'

export default function ListPublicChatroomsComponent() {
  // The `useListPublicChatrooms` Query hook has an optional argument of type `ListPublicChatroomsVariables`:
  const listPublicChatroomsVars: ListPublicChatroomsVariables = {
    limit: ..., // optional
    offset: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListPublicChatrooms(listPublicChatroomsVars);
  // Variables can be defined inline as well.
  const query = useListPublicChatrooms({ limit: ..., offset: ..., });
  // Since all variables are optional for this Query, you can omit the `ListPublicChatroomsVariables` argument.
  // (as long as you don't want to provide any `options`!)
  const query = useListPublicChatrooms();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListPublicChatrooms(dataConnect, listPublicChatroomsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListPublicChatrooms(listPublicChatroomsVars, options);
  // If you'd like to provide options without providing any variables, you must
  // pass `undefined` where you would normally pass the variables.
  const query = useListPublicChatrooms(undefined, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListPublicChatrooms(dataConnect, listPublicChatroomsVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.chatrooms);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetChatroomMessages
You can execute the `GetChatroomMessages` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetChatroomMessages(dc: DataConnect, vars: GetChatroomMessagesVariables, options?: useDataConnectQueryOptions<GetChatroomMessagesData>): UseDataConnectQueryResult<GetChatroomMessagesData, GetChatroomMessagesVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetChatroomMessages(vars: GetChatroomMessagesVariables, options?: useDataConnectQueryOptions<GetChatroomMessagesData>): UseDataConnectQueryResult<GetChatroomMessagesData, GetChatroomMessagesVariables>;
```

### Variables
The `GetChatroomMessages` Query requires an argument of type `GetChatroomMessagesVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetChatroomMessagesVariables {
  chatroomId: UUIDString;
  limit?: number | null;
  beforeTimestamp?: TimestampString | null;
  beforeId?: UUIDString | null;
}
```
### Return Type
Recall that calling the `GetChatroomMessages` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetChatroomMessages` Query is of type `GetChatroomMessagesData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetChatroomMessages`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetChatroomMessagesVariables } from '@kismoportal-dataconnect/generated';
import { useGetChatroomMessages } from '@kismoportal-dataconnect/generated/react'

export default function GetChatroomMessagesComponent() {
  // The `useGetChatroomMessages` Query hook requires an argument of type `GetChatroomMessagesVariables`:
  const getChatroomMessagesVars: GetChatroomMessagesVariables = {
    chatroomId: ..., 
    limit: ..., // optional
    beforeTimestamp: ..., // optional
    beforeId: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetChatroomMessages(getChatroomMessagesVars);
  // Variables can be defined inline as well.
  const query = useGetChatroomMessages({ chatroomId: ..., limit: ..., beforeTimestamp: ..., beforeId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetChatroomMessages(dataConnect, getChatroomMessagesVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetChatroomMessages(getChatroomMessagesVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetChatroomMessages(dataConnect, getChatroomMessagesVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.messages);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListChatroomsByOwner
You can execute the `ListChatroomsByOwner` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListChatroomsByOwner(dc: DataConnect, vars: ListChatroomsByOwnerVariables, options?: useDataConnectQueryOptions<ListChatroomsByOwnerData>): UseDataConnectQueryResult<ListChatroomsByOwnerData, ListChatroomsByOwnerVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListChatroomsByOwner(vars: ListChatroomsByOwnerVariables, options?: useDataConnectQueryOptions<ListChatroomsByOwnerData>): UseDataConnectQueryResult<ListChatroomsByOwnerData, ListChatroomsByOwnerVariables>;
```

### Variables
The `ListChatroomsByOwner` Query requires an argument of type `ListChatroomsByOwnerVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListChatroomsByOwnerVariables {
  ownerId: UUIDString;
}
```
### Return Type
Recall that calling the `ListChatroomsByOwner` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListChatroomsByOwner` Query is of type `ListChatroomsByOwnerData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListChatroomsByOwner`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListChatroomsByOwnerVariables } from '@kismoportal-dataconnect/generated';
import { useListChatroomsByOwner } from '@kismoportal-dataconnect/generated/react'

export default function ListChatroomsByOwnerComponent() {
  // The `useListChatroomsByOwner` Query hook requires an argument of type `ListChatroomsByOwnerVariables`:
  const listChatroomsByOwnerVars: ListChatroomsByOwnerVariables = {
    ownerId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListChatroomsByOwner(listChatroomsByOwnerVars);
  // Variables can be defined inline as well.
  const query = useListChatroomsByOwner({ ownerId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListChatroomsByOwner(dataConnect, listChatroomsByOwnerVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListChatroomsByOwner(listChatroomsByOwnerVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListChatroomsByOwner(dataConnect, listChatroomsByOwnerVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.chatrooms);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListChatroomsByCity
You can execute the `ListChatroomsByCity` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListChatroomsByCity(dc: DataConnect, vars: ListChatroomsByCityVariables, options?: useDataConnectQueryOptions<ListChatroomsByCityData>): UseDataConnectQueryResult<ListChatroomsByCityData, ListChatroomsByCityVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListChatroomsByCity(vars: ListChatroomsByCityVariables, options?: useDataConnectQueryOptions<ListChatroomsByCityData>): UseDataConnectQueryResult<ListChatroomsByCityData, ListChatroomsByCityVariables>;
```

### Variables
The `ListChatroomsByCity` Query requires an argument of type `ListChatroomsByCityVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListChatroomsByCityVariables {
  geonameid: Int64String;
}
```
### Return Type
Recall that calling the `ListChatroomsByCity` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListChatroomsByCity` Query is of type `ListChatroomsByCityData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListChatroomsByCity`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListChatroomsByCityVariables } from '@kismoportal-dataconnect/generated';
import { useListChatroomsByCity } from '@kismoportal-dataconnect/generated/react'

export default function ListChatroomsByCityComponent() {
  // The `useListChatroomsByCity` Query hook requires an argument of type `ListChatroomsByCityVariables`:
  const listChatroomsByCityVars: ListChatroomsByCityVariables = {
    geonameid: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListChatroomsByCity(listChatroomsByCityVars);
  // Variables can be defined inline as well.
  const query = useListChatroomsByCity({ geonameid: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListChatroomsByCity(dataConnect, listChatroomsByCityVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListChatroomsByCity(listChatroomsByCityVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListChatroomsByCity(dataConnect, listChatroomsByCityVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.chatrooms);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## SearchCities
You can execute the `SearchCities` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useSearchCities(dc: DataConnect, vars: SearchCitiesVariables, options?: useDataConnectQueryOptions<SearchCitiesData>): UseDataConnectQueryResult<SearchCitiesData, SearchCitiesVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useSearchCities(vars: SearchCitiesVariables, options?: useDataConnectQueryOptions<SearchCitiesData>): UseDataConnectQueryResult<SearchCitiesData, SearchCitiesVariables>;
```

### Variables
The `SearchCities` Query requires an argument of type `SearchCitiesVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface SearchCitiesVariables {
  pattern: string;
}
```
### Return Type
Recall that calling the `SearchCities` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `SearchCities` Query is of type `SearchCitiesData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface SearchCitiesData {
  cities: ({
    geonameid: Int64String;
    name: string;
    country: string;
    subcountry?: string | null;
  } & City_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `SearchCities`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, SearchCitiesVariables } from '@kismoportal-dataconnect/generated';
import { useSearchCities } from '@kismoportal-dataconnect/generated/react'

export default function SearchCitiesComponent() {
  // The `useSearchCities` Query hook requires an argument of type `SearchCitiesVariables`:
  const searchCitiesVars: SearchCitiesVariables = {
    pattern: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useSearchCities(searchCitiesVars);
  // Variables can be defined inline as well.
  const query = useSearchCities({ pattern: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useSearchCities(dataConnect, searchCitiesVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useSearchCities(searchCitiesVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useSearchCities(dataConnect, searchCitiesVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.cities);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## IsMember
You can execute the `IsMember` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useIsMember(dc: DataConnect, vars: IsMemberVariables, options?: useDataConnectQueryOptions<IsMemberData>): UseDataConnectQueryResult<IsMemberData, IsMemberVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useIsMember(vars: IsMemberVariables, options?: useDataConnectQueryOptions<IsMemberData>): UseDataConnectQueryResult<IsMemberData, IsMemberVariables>;
```

### Variables
The `IsMember` Query requires an argument of type `IsMemberVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface IsMemberVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
}
```
### Return Type
Recall that calling the `IsMember` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `IsMember` Query is of type `IsMemberData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface IsMemberData {
  chatroomMember?: {
    joinedAt?: TimestampString | null;
  };
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `IsMember`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, IsMemberVariables } from '@kismoportal-dataconnect/generated';
import { useIsMember } from '@kismoportal-dataconnect/generated/react'

export default function IsMemberComponent() {
  // The `useIsMember` Query hook requires an argument of type `IsMemberVariables`:
  const isMemberVars: IsMemberVariables = {
    userId: ..., 
    chatroomId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useIsMember(isMemberVars);
  // Variables can be defined inline as well.
  const query = useIsMember({ userId: ..., chatroomId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useIsMember(dataConnect, isMemberVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useIsMember(isMemberVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useIsMember(dataConnect, isMemberVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.chatroomMember);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetFriendWith
You can execute the `GetFriendWith` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetFriendWith(dc: DataConnect, vars: GetFriendWithVariables, options?: useDataConnectQueryOptions<GetFriendWithData>): UseDataConnectQueryResult<GetFriendWithData, GetFriendWithVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetFriendWith(vars: GetFriendWithVariables, options?: useDataConnectQueryOptions<GetFriendWithData>): UseDataConnectQueryResult<GetFriendWithData, GetFriendWithVariables>;
```

### Variables
The `GetFriendWith` Query requires an argument of type `GetFriendWithVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetFriendWithVariables {
  userId: UUIDString;
  friendWithUserId: UUIDString;
}
```
### Return Type
Recall that calling the `GetFriendWith` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetFriendWith` Query is of type `GetFriendWithData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetFriendWith`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetFriendWithVariables } from '@kismoportal-dataconnect/generated';
import { useGetFriendWith } from '@kismoportal-dataconnect/generated/react'

export default function GetFriendWithComponent() {
  // The `useGetFriendWith` Query hook requires an argument of type `GetFriendWithVariables`:
  const getFriendWithVars: GetFriendWithVariables = {
    userId: ..., 
    friendWithUserId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetFriendWith(getFriendWithVars);
  // Variables can be defined inline as well.
  const query = useGetFriendWith({ userId: ..., friendWithUserId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetFriendWith(dataConnect, getFriendWithVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetFriendWith(getFriendWithVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetFriendWith(dataConnect, getFriendWithVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.friendWith);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListFriendWithByUser
You can execute the `ListFriendWithByUser` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListFriendWithByUser(dc: DataConnect, vars: ListFriendWithByUserVariables, options?: useDataConnectQueryOptions<ListFriendWithByUserData>): UseDataConnectQueryResult<ListFriendWithByUserData, ListFriendWithByUserVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListFriendWithByUser(vars: ListFriendWithByUserVariables, options?: useDataConnectQueryOptions<ListFriendWithByUserData>): UseDataConnectQueryResult<ListFriendWithByUserData, ListFriendWithByUserVariables>;
```

### Variables
The `ListFriendWithByUser` Query requires an argument of type `ListFriendWithByUserVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListFriendWithByUserVariables {
  userId: UUIDString;
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that calling the `ListFriendWithByUser` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListFriendWithByUser` Query is of type `ListFriendWithByUserData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListFriendWithByUser`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListFriendWithByUserVariables } from '@kismoportal-dataconnect/generated';
import { useListFriendWithByUser } from '@kismoportal-dataconnect/generated/react'

export default function ListFriendWithByUserComponent() {
  // The `useListFriendWithByUser` Query hook requires an argument of type `ListFriendWithByUserVariables`:
  const listFriendWithByUserVars: ListFriendWithByUserVariables = {
    userId: ..., 
    limit: ..., // optional
    offset: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListFriendWithByUser(listFriendWithByUserVars);
  // Variables can be defined inline as well.
  const query = useListFriendWithByUser({ userId: ..., limit: ..., offset: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListFriendWithByUser(dataConnect, listFriendWithByUserVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListFriendWithByUser(listFriendWithByUserVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListFriendWithByUser(dataConnect, listFriendWithByUserVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.friendWiths);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListPendingFriendRequestsReceived
You can execute the `ListPendingFriendRequestsReceived` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListPendingFriendRequestsReceived(dc: DataConnect, vars: ListPendingFriendRequestsReceivedVariables, options?: useDataConnectQueryOptions<ListPendingFriendRequestsReceivedData>): UseDataConnectQueryResult<ListPendingFriendRequestsReceivedData, ListPendingFriendRequestsReceivedVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListPendingFriendRequestsReceived(vars: ListPendingFriendRequestsReceivedVariables, options?: useDataConnectQueryOptions<ListPendingFriendRequestsReceivedData>): UseDataConnectQueryResult<ListPendingFriendRequestsReceivedData, ListPendingFriendRequestsReceivedVariables>;
```

### Variables
The `ListPendingFriendRequestsReceived` Query requires an argument of type `ListPendingFriendRequestsReceivedVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListPendingFriendRequestsReceivedVariables {
  friendWithUserId: UUIDString;
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that calling the `ListPendingFriendRequestsReceived` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListPendingFriendRequestsReceived` Query is of type `ListPendingFriendRequestsReceivedData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListPendingFriendRequestsReceived`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListPendingFriendRequestsReceivedVariables } from '@kismoportal-dataconnect/generated';
import { useListPendingFriendRequestsReceived } from '@kismoportal-dataconnect/generated/react'

export default function ListPendingFriendRequestsReceivedComponent() {
  // The `useListPendingFriendRequestsReceived` Query hook requires an argument of type `ListPendingFriendRequestsReceivedVariables`:
  const listPendingFriendRequestsReceivedVars: ListPendingFriendRequestsReceivedVariables = {
    friendWithUserId: ..., 
    limit: ..., // optional
    offset: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListPendingFriendRequestsReceived(listPendingFriendRequestsReceivedVars);
  // Variables can be defined inline as well.
  const query = useListPendingFriendRequestsReceived({ friendWithUserId: ..., limit: ..., offset: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListPendingFriendRequestsReceived(dataConnect, listPendingFriendRequestsReceivedVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListPendingFriendRequestsReceived(listPendingFriendRequestsReceivedVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListPendingFriendRequestsReceived(dataConnect, listPendingFriendRequestsReceivedVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.friendWiths);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListAcceptedFriendConnections
You can execute the `ListAcceptedFriendConnections` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListAcceptedFriendConnections(dc: DataConnect, vars: ListAcceptedFriendConnectionsVariables, options?: useDataConnectQueryOptions<ListAcceptedFriendConnectionsData>): UseDataConnectQueryResult<ListAcceptedFriendConnectionsData, ListAcceptedFriendConnectionsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListAcceptedFriendConnections(vars: ListAcceptedFriendConnectionsVariables, options?: useDataConnectQueryOptions<ListAcceptedFriendConnectionsData>): UseDataConnectQueryResult<ListAcceptedFriendConnectionsData, ListAcceptedFriendConnectionsVariables>;
```

### Variables
The `ListAcceptedFriendConnections` Query requires an argument of type `ListAcceptedFriendConnectionsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListAcceptedFriendConnectionsVariables {
  userId: UUIDString;
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that calling the `ListAcceptedFriendConnections` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListAcceptedFriendConnections` Query is of type `ListAcceptedFriendConnectionsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListAcceptedFriendConnections`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListAcceptedFriendConnectionsVariables } from '@kismoportal-dataconnect/generated';
import { useListAcceptedFriendConnections } from '@kismoportal-dataconnect/generated/react'

export default function ListAcceptedFriendConnectionsComponent() {
  // The `useListAcceptedFriendConnections` Query hook requires an argument of type `ListAcceptedFriendConnectionsVariables`:
  const listAcceptedFriendConnectionsVars: ListAcceptedFriendConnectionsVariables = {
    userId: ..., 
    limit: ..., // optional
    offset: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListAcceptedFriendConnections(listAcceptedFriendConnectionsVars);
  // Variables can be defined inline as well.
  const query = useListAcceptedFriendConnections({ userId: ..., limit: ..., offset: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListAcceptedFriendConnections(dataConnect, listAcceptedFriendConnectionsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListAcceptedFriendConnections(listAcceptedFriendConnectionsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListAcceptedFriendConnections(dataConnect, listAcceptedFriendConnectionsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.friendWiths);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListMyChatrooms
You can execute the `ListMyChatrooms` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListMyChatrooms(dc: DataConnect, vars: ListMyChatroomsVariables, options?: useDataConnectQueryOptions<ListMyChatroomsData>): UseDataConnectQueryResult<ListMyChatroomsData, ListMyChatroomsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListMyChatrooms(vars: ListMyChatroomsVariables, options?: useDataConnectQueryOptions<ListMyChatroomsData>): UseDataConnectQueryResult<ListMyChatroomsData, ListMyChatroomsVariables>;
```

### Variables
The `ListMyChatrooms` Query requires an argument of type `ListMyChatroomsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListMyChatroomsVariables {
  userId: UUIDString;
}
```
### Return Type
Recall that calling the `ListMyChatrooms` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListMyChatrooms` Query is of type `ListMyChatroomsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListMyChatrooms`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListMyChatroomsVariables } from '@kismoportal-dataconnect/generated';
import { useListMyChatrooms } from '@kismoportal-dataconnect/generated/react'

export default function ListMyChatroomsComponent() {
  // The `useListMyChatrooms` Query hook requires an argument of type `ListMyChatroomsVariables`:
  const listMyChatroomsVars: ListMyChatroomsVariables = {
    userId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListMyChatrooms(listMyChatroomsVars);
  // Variables can be defined inline as well.
  const query = useListMyChatrooms({ userId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListMyChatrooms(dataConnect, listMyChatroomsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListMyChatrooms(listMyChatroomsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListMyChatrooms(dataConnect, listMyChatroomsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.chatroomMembers);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetGlobalStats
You can execute the `GetGlobalStats` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetGlobalStats(dc: DataConnect, options?: useDataConnectQueryOptions<GetGlobalStatsData>): UseDataConnectQueryResult<GetGlobalStatsData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetGlobalStats(options?: useDataConnectQueryOptions<GetGlobalStatsData>): UseDataConnectQueryResult<GetGlobalStatsData, undefined>;
```

### Variables
The `GetGlobalStats` Query has no variables.
### Return Type
Recall that calling the `GetGlobalStats` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetGlobalStats` Query is of type `GetGlobalStatsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetGlobalStatsData {
  globalStats: ({
    label: string;
    value: Int64String;
    subtext?: string | null;
    updatedAt?: TimestampString | null;
  } & GlobalStat_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetGlobalStats`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@kismoportal-dataconnect/generated';
import { useGetGlobalStats } from '@kismoportal-dataconnect/generated/react'

export default function GetGlobalStatsComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetGlobalStats();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetGlobalStats(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetGlobalStats(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetGlobalStats(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.globalStats);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetGlobalStat
You can execute the `GetGlobalStat` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetGlobalStat(dc: DataConnect, vars: GetGlobalStatVariables, options?: useDataConnectQueryOptions<GetGlobalStatData>): UseDataConnectQueryResult<GetGlobalStatData, GetGlobalStatVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetGlobalStat(vars: GetGlobalStatVariables, options?: useDataConnectQueryOptions<GetGlobalStatData>): UseDataConnectQueryResult<GetGlobalStatData, GetGlobalStatVariables>;
```

### Variables
The `GetGlobalStat` Query requires an argument of type `GetGlobalStatVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetGlobalStatVariables {
  label: string;
}
```
### Return Type
Recall that calling the `GetGlobalStat` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetGlobalStat` Query is of type `GetGlobalStatData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetGlobalStatData {
  globalStat?: {
    label: string;
    value: Int64String;
    subtext?: string | null;
  } & GlobalStat_Key;
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetGlobalStat`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetGlobalStatVariables } from '@kismoportal-dataconnect/generated';
import { useGetGlobalStat } from '@kismoportal-dataconnect/generated/react'

export default function GetGlobalStatComponent() {
  // The `useGetGlobalStat` Query hook requires an argument of type `GetGlobalStatVariables`:
  const getGlobalStatVars: GetGlobalStatVariables = {
    label: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetGlobalStat(getGlobalStatVars);
  // Variables can be defined inline as well.
  const query = useGetGlobalStat({ label: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetGlobalStat(dataConnect, getGlobalStatVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetGlobalStat(getGlobalStatVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetGlobalStat(dataConnect, getGlobalStatVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.globalStat);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListActiveSessionsByUser
You can execute the `ListActiveSessionsByUser` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListActiveSessionsByUser(dc: DataConnect, vars: ListActiveSessionsByUserVariables, options?: useDataConnectQueryOptions<ListActiveSessionsByUserData>): UseDataConnectQueryResult<ListActiveSessionsByUserData, ListActiveSessionsByUserVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListActiveSessionsByUser(vars: ListActiveSessionsByUserVariables, options?: useDataConnectQueryOptions<ListActiveSessionsByUserData>): UseDataConnectQueryResult<ListActiveSessionsByUserData, ListActiveSessionsByUserVariables>;
```

### Variables
The `ListActiveSessionsByUser` Query requires an argument of type `ListActiveSessionsByUserVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListActiveSessionsByUserVariables {
  userId: UUIDString;
}
```
### Return Type
Recall that calling the `ListActiveSessionsByUser` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListActiveSessionsByUser` Query is of type `ListActiveSessionsByUserData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListActiveSessionsByUser`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListActiveSessionsByUserVariables } from '@kismoportal-dataconnect/generated';
import { useListActiveSessionsByUser } from '@kismoportal-dataconnect/generated/react'

export default function ListActiveSessionsByUserComponent() {
  // The `useListActiveSessionsByUser` Query hook requires an argument of type `ListActiveSessionsByUserVariables`:
  const listActiveSessionsByUserVars: ListActiveSessionsByUserVariables = {
    userId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListActiveSessionsByUser(listActiveSessionsByUserVars);
  // Variables can be defined inline as well.
  const query = useListActiveSessionsByUser({ userId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListActiveSessionsByUser(dataConnect, listActiveSessionsByUserVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListActiveSessionsByUser(listActiveSessionsByUserVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListActiveSessionsByUser(dataConnect, listActiveSessionsByUserVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.userChatroomSessions);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListActiveSessionsGlobal
You can execute the `ListActiveSessionsGlobal` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListActiveSessionsGlobal(dc: DataConnect, vars?: ListActiveSessionsGlobalVariables, options?: useDataConnectQueryOptions<ListActiveSessionsGlobalData>): UseDataConnectQueryResult<ListActiveSessionsGlobalData, ListActiveSessionsGlobalVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListActiveSessionsGlobal(vars?: ListActiveSessionsGlobalVariables, options?: useDataConnectQueryOptions<ListActiveSessionsGlobalData>): UseDataConnectQueryResult<ListActiveSessionsGlobalData, ListActiveSessionsGlobalVariables>;
```

### Variables
The `ListActiveSessionsGlobal` Query has an optional argument of type `ListActiveSessionsGlobalVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListActiveSessionsGlobalVariables {
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that calling the `ListActiveSessionsGlobal` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListActiveSessionsGlobal` Query is of type `ListActiveSessionsGlobalData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListActiveSessionsGlobal`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListActiveSessionsGlobalVariables } from '@kismoportal-dataconnect/generated';
import { useListActiveSessionsGlobal } from '@kismoportal-dataconnect/generated/react'

export default function ListActiveSessionsGlobalComponent() {
  // The `useListActiveSessionsGlobal` Query hook has an optional argument of type `ListActiveSessionsGlobalVariables`:
  const listActiveSessionsGlobalVars: ListActiveSessionsGlobalVariables = {
    limit: ..., // optional
    offset: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListActiveSessionsGlobal(listActiveSessionsGlobalVars);
  // Variables can be defined inline as well.
  const query = useListActiveSessionsGlobal({ limit: ..., offset: ..., });
  // Since all variables are optional for this Query, you can omit the `ListActiveSessionsGlobalVariables` argument.
  // (as long as you don't want to provide any `options`!)
  const query = useListActiveSessionsGlobal();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListActiveSessionsGlobal(dataConnect, listActiveSessionsGlobalVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListActiveSessionsGlobal(listActiveSessionsGlobalVars, options);
  // If you'd like to provide options without providing any variables, you must
  // pass `undefined` where you would normally pass the variables.
  const query = useListActiveSessionsGlobal(undefined, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListActiveSessionsGlobal(dataConnect, listActiveSessionsGlobalVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.userChatroomSessions);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListRecentVisitedChatrooms
You can execute the `ListRecentVisitedChatrooms` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListRecentVisitedChatrooms(dc: DataConnect, vars: ListRecentVisitedChatroomsVariables, options?: useDataConnectQueryOptions<ListRecentVisitedChatroomsData>): UseDataConnectQueryResult<ListRecentVisitedChatroomsData, ListRecentVisitedChatroomsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListRecentVisitedChatrooms(vars: ListRecentVisitedChatroomsVariables, options?: useDataConnectQueryOptions<ListRecentVisitedChatroomsData>): UseDataConnectQueryResult<ListRecentVisitedChatroomsData, ListRecentVisitedChatroomsVariables>;
```

### Variables
The `ListRecentVisitedChatrooms` Query requires an argument of type `ListRecentVisitedChatroomsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListRecentVisitedChatroomsVariables {
  userId: UUIDString;
  limit?: number | null;
}
```
### Return Type
Recall that calling the `ListRecentVisitedChatrooms` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListRecentVisitedChatrooms` Query is of type `ListRecentVisitedChatroomsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListRecentVisitedChatrooms`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListRecentVisitedChatroomsVariables } from '@kismoportal-dataconnect/generated';
import { useListRecentVisitedChatrooms } from '@kismoportal-dataconnect/generated/react'

export default function ListRecentVisitedChatroomsComponent() {
  // The `useListRecentVisitedChatrooms` Query hook requires an argument of type `ListRecentVisitedChatroomsVariables`:
  const listRecentVisitedChatroomsVars: ListRecentVisitedChatroomsVariables = {
    userId: ..., 
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListRecentVisitedChatrooms(listRecentVisitedChatroomsVars);
  // Variables can be defined inline as well.
  const query = useListRecentVisitedChatrooms({ userId: ..., limit: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListRecentVisitedChatrooms(dataConnect, listRecentVisitedChatroomsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListRecentVisitedChatrooms(listRecentVisitedChatroomsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListRecentVisitedChatrooms(dataConnect, listRecentVisitedChatroomsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.userChatroomVisits);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListNotificationsByRecipient
You can execute the `ListNotificationsByRecipient` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListNotificationsByRecipient(dc: DataConnect, vars: ListNotificationsByRecipientVariables, options?: useDataConnectQueryOptions<ListNotificationsByRecipientData>): UseDataConnectQueryResult<ListNotificationsByRecipientData, ListNotificationsByRecipientVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListNotificationsByRecipient(vars: ListNotificationsByRecipientVariables, options?: useDataConnectQueryOptions<ListNotificationsByRecipientData>): UseDataConnectQueryResult<ListNotificationsByRecipientData, ListNotificationsByRecipientVariables>;
```

### Variables
The `ListNotificationsByRecipient` Query requires an argument of type `ListNotificationsByRecipientVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListNotificationsByRecipientVariables {
  recipientUserId: UUIDString;
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that calling the `ListNotificationsByRecipient` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListNotificationsByRecipient` Query is of type `ListNotificationsByRecipientData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListNotificationsByRecipient`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListNotificationsByRecipientVariables } from '@kismoportal-dataconnect/generated';
import { useListNotificationsByRecipient } from '@kismoportal-dataconnect/generated/react'

export default function ListNotificationsByRecipientComponent() {
  // The `useListNotificationsByRecipient` Query hook requires an argument of type `ListNotificationsByRecipientVariables`:
  const listNotificationsByRecipientVars: ListNotificationsByRecipientVariables = {
    recipientUserId: ..., 
    limit: ..., // optional
    offset: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListNotificationsByRecipient(listNotificationsByRecipientVars);
  // Variables can be defined inline as well.
  const query = useListNotificationsByRecipient({ recipientUserId: ..., limit: ..., offset: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListNotificationsByRecipient(dataConnect, listNotificationsByRecipientVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListNotificationsByRecipient(listNotificationsByRecipientVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListNotificationsByRecipient(dataConnect, listNotificationsByRecipientVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.userNotifications);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CountUnreadNotifications
You can execute the `CountUnreadNotifications` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useCountUnreadNotifications(dc: DataConnect, vars: CountUnreadNotificationsVariables, options?: useDataConnectQueryOptions<CountUnreadNotificationsData>): UseDataConnectQueryResult<CountUnreadNotificationsData, CountUnreadNotificationsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useCountUnreadNotifications(vars: CountUnreadNotificationsVariables, options?: useDataConnectQueryOptions<CountUnreadNotificationsData>): UseDataConnectQueryResult<CountUnreadNotificationsData, CountUnreadNotificationsVariables>;
```

### Variables
The `CountUnreadNotifications` Query requires an argument of type `CountUnreadNotificationsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CountUnreadNotificationsVariables {
  recipientUserId: UUIDString;
}
```
### Return Type
Recall that calling the `CountUnreadNotifications` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `CountUnreadNotifications` Query is of type `CountUnreadNotificationsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CountUnreadNotificationsData {
  unreadNotifications?: unknown | null;
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `CountUnreadNotifications`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CountUnreadNotificationsVariables } from '@kismoportal-dataconnect/generated';
import { useCountUnreadNotifications } from '@kismoportal-dataconnect/generated/react'

export default function CountUnreadNotificationsComponent() {
  // The `useCountUnreadNotifications` Query hook requires an argument of type `CountUnreadNotificationsVariables`:
  const countUnreadNotificationsVars: CountUnreadNotificationsVariables = {
    recipientUserId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useCountUnreadNotifications(countUnreadNotificationsVars);
  // Variables can be defined inline as well.
  const query = useCountUnreadNotifications({ recipientUserId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useCountUnreadNotifications(dataConnect, countUnreadNotificationsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useCountUnreadNotifications(countUnreadNotificationsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useCountUnreadNotifications(dataConnect, countUnreadNotificationsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.unreadNotifications);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListChatroomStatsByChatroomIds
You can execute the `ListChatroomStatsByChatroomIds` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListChatroomStatsByChatroomIds(dc: DataConnect, vars: ListChatroomStatsByChatroomIdsVariables, options?: useDataConnectQueryOptions<ListChatroomStatsByChatroomIdsData>): UseDataConnectQueryResult<ListChatroomStatsByChatroomIdsData, ListChatroomStatsByChatroomIdsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListChatroomStatsByChatroomIds(vars: ListChatroomStatsByChatroomIdsVariables, options?: useDataConnectQueryOptions<ListChatroomStatsByChatroomIdsData>): UseDataConnectQueryResult<ListChatroomStatsByChatroomIdsData, ListChatroomStatsByChatroomIdsVariables>;
```

### Variables
The `ListChatroomStatsByChatroomIds` Query requires an argument of type `ListChatroomStatsByChatroomIdsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListChatroomStatsByChatroomIdsVariables {
  chatroomIds: UUIDString[];
  labels?: string[] | null;
}
```
### Return Type
Recall that calling the `ListChatroomStatsByChatroomIds` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListChatroomStatsByChatroomIds` Query is of type `ListChatroomStatsByChatroomIdsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListChatroomStatsByChatroomIds`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListChatroomStatsByChatroomIdsVariables } from '@kismoportal-dataconnect/generated';
import { useListChatroomStatsByChatroomIds } from '@kismoportal-dataconnect/generated/react'

export default function ListChatroomStatsByChatroomIdsComponent() {
  // The `useListChatroomStatsByChatroomIds` Query hook requires an argument of type `ListChatroomStatsByChatroomIdsVariables`:
  const listChatroomStatsByChatroomIdsVars: ListChatroomStatsByChatroomIdsVariables = {
    chatroomIds: ..., 
    labels: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListChatroomStatsByChatroomIds(listChatroomStatsByChatroomIdsVars);
  // Variables can be defined inline as well.
  const query = useListChatroomStatsByChatroomIds({ chatroomIds: ..., labels: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListChatroomStatsByChatroomIds(dataConnect, listChatroomStatsByChatroomIdsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListChatroomStatsByChatroomIds(listChatroomStatsByChatroomIdsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListChatroomStatsByChatroomIds(dataConnect, listChatroomStatsByChatroomIdsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.chatroomStatsByIds);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## FetchPlayroomCreatorToken
You can execute the `FetchPlayroomCreatorToken` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useFetchPlayroomCreatorToken(dc: DataConnect, vars: FetchPlayroomCreatorTokenVariables, options?: useDataConnectQueryOptions<FetchPlayroomCreatorTokenData>): UseDataConnectQueryResult<FetchPlayroomCreatorTokenData, FetchPlayroomCreatorTokenVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useFetchPlayroomCreatorToken(vars: FetchPlayroomCreatorTokenVariables, options?: useDataConnectQueryOptions<FetchPlayroomCreatorTokenData>): UseDataConnectQueryResult<FetchPlayroomCreatorTokenData, FetchPlayroomCreatorTokenVariables>;
```

### Variables
The `FetchPlayroomCreatorToken` Query requires an argument of type `FetchPlayroomCreatorTokenVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface FetchPlayroomCreatorTokenVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `FetchPlayroomCreatorToken` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `FetchPlayroomCreatorToken` Query is of type `FetchPlayroomCreatorTokenData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface FetchPlayroomCreatorTokenData {
  playroomSession?: {
    jwtTokenCreator: string;
  };
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `FetchPlayroomCreatorToken`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, FetchPlayroomCreatorTokenVariables } from '@kismoportal-dataconnect/generated';
import { useFetchPlayroomCreatorToken } from '@kismoportal-dataconnect/generated/react'

export default function FetchPlayroomCreatorTokenComponent() {
  // The `useFetchPlayroomCreatorToken` Query hook requires an argument of type `FetchPlayroomCreatorTokenVariables`:
  const fetchPlayroomCreatorTokenVars: FetchPlayroomCreatorTokenVariables = {
    id: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useFetchPlayroomCreatorToken(fetchPlayroomCreatorTokenVars);
  // Variables can be defined inline as well.
  const query = useFetchPlayroomCreatorToken({ id: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useFetchPlayroomCreatorToken(dataConnect, fetchPlayroomCreatorTokenVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useFetchPlayroomCreatorToken(fetchPlayroomCreatorTokenVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useFetchPlayroomCreatorToken(dataConnect, fetchPlayroomCreatorTokenVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.playroomSession);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## FetchPlayroomInvitedUserToken
You can execute the `FetchPlayroomInvitedUserToken` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useFetchPlayroomInvitedUserToken(dc: DataConnect, vars: FetchPlayroomInvitedUserTokenVariables, options?: useDataConnectQueryOptions<FetchPlayroomInvitedUserTokenData>): UseDataConnectQueryResult<FetchPlayroomInvitedUserTokenData, FetchPlayroomInvitedUserTokenVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useFetchPlayroomInvitedUserToken(vars: FetchPlayroomInvitedUserTokenVariables, options?: useDataConnectQueryOptions<FetchPlayroomInvitedUserTokenData>): UseDataConnectQueryResult<FetchPlayroomInvitedUserTokenData, FetchPlayroomInvitedUserTokenVariables>;
```

### Variables
The `FetchPlayroomInvitedUserToken` Query requires an argument of type `FetchPlayroomInvitedUserTokenVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface FetchPlayroomInvitedUserTokenVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `FetchPlayroomInvitedUserToken` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `FetchPlayroomInvitedUserToken` Query is of type `FetchPlayroomInvitedUserTokenData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface FetchPlayroomInvitedUserTokenData {
  playroomSession?: {
    jwtTokenInvitedUser?: string | null;
  };
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `FetchPlayroomInvitedUserToken`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, FetchPlayroomInvitedUserTokenVariables } from '@kismoportal-dataconnect/generated';
import { useFetchPlayroomInvitedUserToken } from '@kismoportal-dataconnect/generated/react'

export default function FetchPlayroomInvitedUserTokenComponent() {
  // The `useFetchPlayroomInvitedUserToken` Query hook requires an argument of type `FetchPlayroomInvitedUserTokenVariables`:
  const fetchPlayroomInvitedUserTokenVars: FetchPlayroomInvitedUserTokenVariables = {
    id: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useFetchPlayroomInvitedUserToken(fetchPlayroomInvitedUserTokenVars);
  // Variables can be defined inline as well.
  const query = useFetchPlayroomInvitedUserToken({ id: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useFetchPlayroomInvitedUserToken(dataConnect, fetchPlayroomInvitedUserTokenVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useFetchPlayroomInvitedUserToken(fetchPlayroomInvitedUserTokenVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useFetchPlayroomInvitedUserToken(dataConnect, fetchPlayroomInvitedUserTokenVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.playroomSession);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## FetchPlayroomParticipantToken
You can execute the `FetchPlayroomParticipantToken` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useFetchPlayroomParticipantToken(dc: DataConnect, vars: FetchPlayroomParticipantTokenVariables, options?: useDataConnectQueryOptions<FetchPlayroomParticipantTokenData>): UseDataConnectQueryResult<FetchPlayroomParticipantTokenData, FetchPlayroomParticipantTokenVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useFetchPlayroomParticipantToken(vars: FetchPlayroomParticipantTokenVariables, options?: useDataConnectQueryOptions<FetchPlayroomParticipantTokenData>): UseDataConnectQueryResult<FetchPlayroomParticipantTokenData, FetchPlayroomParticipantTokenVariables>;
```

### Variables
The `FetchPlayroomParticipantToken` Query requires an argument of type `FetchPlayroomParticipantTokenVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface FetchPlayroomParticipantTokenVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `FetchPlayroomParticipantToken` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `FetchPlayroomParticipantToken` Query is of type `FetchPlayroomParticipantTokenData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface FetchPlayroomParticipantTokenData {
  playroomSession?: {
    jwtTokenSpectator?: string | null;
  };
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `FetchPlayroomParticipantToken`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, FetchPlayroomParticipantTokenVariables } from '@kismoportal-dataconnect/generated';
import { useFetchPlayroomParticipantToken } from '@kismoportal-dataconnect/generated/react'

export default function FetchPlayroomParticipantTokenComponent() {
  // The `useFetchPlayroomParticipantToken` Query hook requires an argument of type `FetchPlayroomParticipantTokenVariables`:
  const fetchPlayroomParticipantTokenVars: FetchPlayroomParticipantTokenVariables = {
    id: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useFetchPlayroomParticipantToken(fetchPlayroomParticipantTokenVars);
  // Variables can be defined inline as well.
  const query = useFetchPlayroomParticipantToken({ id: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useFetchPlayroomParticipantToken(dataConnect, fetchPlayroomParticipantTokenVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useFetchPlayroomParticipantToken(fetchPlayroomParticipantTokenVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useFetchPlayroomParticipantToken(dataConnect, fetchPlayroomParticipantTokenVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.playroomSession);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## FetchPlayroomParticipantUserIds
You can execute the `FetchPlayroomParticipantUserIds` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useFetchPlayroomParticipantUserIds(dc: DataConnect, vars: FetchPlayroomParticipantUserIdsVariables, options?: useDataConnectQueryOptions<FetchPlayroomParticipantUserIdsData>): UseDataConnectQueryResult<FetchPlayroomParticipantUserIdsData, FetchPlayroomParticipantUserIdsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useFetchPlayroomParticipantUserIds(vars: FetchPlayroomParticipantUserIdsVariables, options?: useDataConnectQueryOptions<FetchPlayroomParticipantUserIdsData>): UseDataConnectQueryResult<FetchPlayroomParticipantUserIdsData, FetchPlayroomParticipantUserIdsVariables>;
```

### Variables
The `FetchPlayroomParticipantUserIds` Query requires an argument of type `FetchPlayroomParticipantUserIdsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface FetchPlayroomParticipantUserIdsVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `FetchPlayroomParticipantUserIds` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `FetchPlayroomParticipantUserIds` Query is of type `FetchPlayroomParticipantUserIdsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface FetchPlayroomParticipantUserIdsData {
  playroomSession?: {
    openedByUserId: UUIDString;
    invitedUserId?: UUIDString | null;
  };
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `FetchPlayroomParticipantUserIds`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, FetchPlayroomParticipantUserIdsVariables } from '@kismoportal-dataconnect/generated';
import { useFetchPlayroomParticipantUserIds } from '@kismoportal-dataconnect/generated/react'

export default function FetchPlayroomParticipantUserIdsComponent() {
  // The `useFetchPlayroomParticipantUserIds` Query hook requires an argument of type `FetchPlayroomParticipantUserIdsVariables`:
  const fetchPlayroomParticipantUserIdsVars: FetchPlayroomParticipantUserIdsVariables = {
    id: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useFetchPlayroomParticipantUserIds(fetchPlayroomParticipantUserIdsVars);
  // Variables can be defined inline as well.
  const query = useFetchPlayroomParticipantUserIds({ id: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useFetchPlayroomParticipantUserIds(dataConnect, fetchPlayroomParticipantUserIdsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useFetchPlayroomParticipantUserIds(fetchPlayroomParticipantUserIdsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useFetchPlayroomParticipantUserIds(dataConnect, fetchPlayroomParticipantUserIdsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.playroomSession);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## FetchPlayroomInvitedUserJoinedAt
You can execute the `FetchPlayroomInvitedUserJoinedAt` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useFetchPlayroomInvitedUserJoinedAt(dc: DataConnect, vars: FetchPlayroomInvitedUserJoinedAtVariables, options?: useDataConnectQueryOptions<FetchPlayroomInvitedUserJoinedAtData>): UseDataConnectQueryResult<FetchPlayroomInvitedUserJoinedAtData, FetchPlayroomInvitedUserJoinedAtVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useFetchPlayroomInvitedUserJoinedAt(vars: FetchPlayroomInvitedUserJoinedAtVariables, options?: useDataConnectQueryOptions<FetchPlayroomInvitedUserJoinedAtData>): UseDataConnectQueryResult<FetchPlayroomInvitedUserJoinedAtData, FetchPlayroomInvitedUserJoinedAtVariables>;
```

### Variables
The `FetchPlayroomInvitedUserJoinedAt` Query requires an argument of type `FetchPlayroomInvitedUserJoinedAtVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface FetchPlayroomInvitedUserJoinedAtVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `FetchPlayroomInvitedUserJoinedAt` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `FetchPlayroomInvitedUserJoinedAt` Query is of type `FetchPlayroomInvitedUserJoinedAtData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface FetchPlayroomInvitedUserJoinedAtData {
  playroomSession?: {
    invitedUserJoinedAt?: TimestampString | null;
  };
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `FetchPlayroomInvitedUserJoinedAt`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, FetchPlayroomInvitedUserJoinedAtVariables } from '@kismoportal-dataconnect/generated';
import { useFetchPlayroomInvitedUserJoinedAt } from '@kismoportal-dataconnect/generated/react'

export default function FetchPlayroomInvitedUserJoinedAtComponent() {
  // The `useFetchPlayroomInvitedUserJoinedAt` Query hook requires an argument of type `FetchPlayroomInvitedUserJoinedAtVariables`:
  const fetchPlayroomInvitedUserJoinedAtVars: FetchPlayroomInvitedUserJoinedAtVariables = {
    id: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useFetchPlayroomInvitedUserJoinedAt(fetchPlayroomInvitedUserJoinedAtVars);
  // Variables can be defined inline as well.
  const query = useFetchPlayroomInvitedUserJoinedAt({ id: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useFetchPlayroomInvitedUserJoinedAt(dataConnect, fetchPlayroomInvitedUserJoinedAtVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useFetchPlayroomInvitedUserJoinedAt(fetchPlayroomInvitedUserJoinedAtVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useFetchPlayroomInvitedUserJoinedAt(dataConnect, fetchPlayroomInvitedUserJoinedAtVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.playroomSession);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## FetchPlayroomCreatorUserHeartbeat
You can execute the `FetchPlayroomCreatorUserHeartbeat` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useFetchPlayroomCreatorUserHeartbeat(dc: DataConnect, vars: FetchPlayroomCreatorUserHeartbeatVariables, options?: useDataConnectQueryOptions<FetchPlayroomCreatorUserHeartbeatData>): UseDataConnectQueryResult<FetchPlayroomCreatorUserHeartbeatData, FetchPlayroomCreatorUserHeartbeatVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useFetchPlayroomCreatorUserHeartbeat(vars: FetchPlayroomCreatorUserHeartbeatVariables, options?: useDataConnectQueryOptions<FetchPlayroomCreatorUserHeartbeatData>): UseDataConnectQueryResult<FetchPlayroomCreatorUserHeartbeatData, FetchPlayroomCreatorUserHeartbeatVariables>;
```

### Variables
The `FetchPlayroomCreatorUserHeartbeat` Query requires an argument of type `FetchPlayroomCreatorUserHeartbeatVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface FetchPlayroomCreatorUserHeartbeatVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `FetchPlayroomCreatorUserHeartbeat` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `FetchPlayroomCreatorUserHeartbeat` Query is of type `FetchPlayroomCreatorUserHeartbeatData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface FetchPlayroomCreatorUserHeartbeatData {
  playroomSession?: {
    creatorUserHeartbeat?: TimestampString | null;
  };
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `FetchPlayroomCreatorUserHeartbeat`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, FetchPlayroomCreatorUserHeartbeatVariables } from '@kismoportal-dataconnect/generated';
import { useFetchPlayroomCreatorUserHeartbeat } from '@kismoportal-dataconnect/generated/react'

export default function FetchPlayroomCreatorUserHeartbeatComponent() {
  // The `useFetchPlayroomCreatorUserHeartbeat` Query hook requires an argument of type `FetchPlayroomCreatorUserHeartbeatVariables`:
  const fetchPlayroomCreatorUserHeartbeatVars: FetchPlayroomCreatorUserHeartbeatVariables = {
    id: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useFetchPlayroomCreatorUserHeartbeat(fetchPlayroomCreatorUserHeartbeatVars);
  // Variables can be defined inline as well.
  const query = useFetchPlayroomCreatorUserHeartbeat({ id: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useFetchPlayroomCreatorUserHeartbeat(dataConnect, fetchPlayroomCreatorUserHeartbeatVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useFetchPlayroomCreatorUserHeartbeat(fetchPlayroomCreatorUserHeartbeatVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useFetchPlayroomCreatorUserHeartbeat(dataConnect, fetchPlayroomCreatorUserHeartbeatVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.playroomSession);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## FetchPlayroomInvitedUserHeartbeat
You can execute the `FetchPlayroomInvitedUserHeartbeat` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useFetchPlayroomInvitedUserHeartbeat(dc: DataConnect, vars: FetchPlayroomInvitedUserHeartbeatVariables, options?: useDataConnectQueryOptions<FetchPlayroomInvitedUserHeartbeatData>): UseDataConnectQueryResult<FetchPlayroomInvitedUserHeartbeatData, FetchPlayroomInvitedUserHeartbeatVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useFetchPlayroomInvitedUserHeartbeat(vars: FetchPlayroomInvitedUserHeartbeatVariables, options?: useDataConnectQueryOptions<FetchPlayroomInvitedUserHeartbeatData>): UseDataConnectQueryResult<FetchPlayroomInvitedUserHeartbeatData, FetchPlayroomInvitedUserHeartbeatVariables>;
```

### Variables
The `FetchPlayroomInvitedUserHeartbeat` Query requires an argument of type `FetchPlayroomInvitedUserHeartbeatVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface FetchPlayroomInvitedUserHeartbeatVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `FetchPlayroomInvitedUserHeartbeat` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `FetchPlayroomInvitedUserHeartbeat` Query is of type `FetchPlayroomInvitedUserHeartbeatData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface FetchPlayroomInvitedUserHeartbeatData {
  playroomSession?: {
    invitedUserHeartbeat?: TimestampString | null;
  };
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `FetchPlayroomInvitedUserHeartbeat`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, FetchPlayroomInvitedUserHeartbeatVariables } from '@kismoportal-dataconnect/generated';
import { useFetchPlayroomInvitedUserHeartbeat } from '@kismoportal-dataconnect/generated/react'

export default function FetchPlayroomInvitedUserHeartbeatComponent() {
  // The `useFetchPlayroomInvitedUserHeartbeat` Query hook requires an argument of type `FetchPlayroomInvitedUserHeartbeatVariables`:
  const fetchPlayroomInvitedUserHeartbeatVars: FetchPlayroomInvitedUserHeartbeatVariables = {
    id: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useFetchPlayroomInvitedUserHeartbeat(fetchPlayroomInvitedUserHeartbeatVars);
  // Variables can be defined inline as well.
  const query = useFetchPlayroomInvitedUserHeartbeat({ id: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useFetchPlayroomInvitedUserHeartbeat(dataConnect, fetchPlayroomInvitedUserHeartbeatVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useFetchPlayroomInvitedUserHeartbeat(fetchPlayroomInvitedUserHeartbeatVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useFetchPlayroomInvitedUserHeartbeat(dataConnect, fetchPlayroomInvitedUserHeartbeatVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.playroomSession);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListActivePlayroomSessionsByUserAndGame
You can execute the `ListActivePlayroomSessionsByUserAndGame` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListActivePlayroomSessionsByUserAndGame(dc: DataConnect, vars: ListActivePlayroomSessionsByUserAndGameVariables, options?: useDataConnectQueryOptions<ListActivePlayroomSessionsByUserAndGameData>): UseDataConnectQueryResult<ListActivePlayroomSessionsByUserAndGameData, ListActivePlayroomSessionsByUserAndGameVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListActivePlayroomSessionsByUserAndGame(vars: ListActivePlayroomSessionsByUserAndGameVariables, options?: useDataConnectQueryOptions<ListActivePlayroomSessionsByUserAndGameData>): UseDataConnectQueryResult<ListActivePlayroomSessionsByUserAndGameData, ListActivePlayroomSessionsByUserAndGameVariables>;
```

### Variables
The `ListActivePlayroomSessionsByUserAndGame` Query requires an argument of type `ListActivePlayroomSessionsByUserAndGameVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListActivePlayroomSessionsByUserAndGameVariables {
  userId: UUIDString;
  gameName: string;
}
```
### Return Type
Recall that calling the `ListActivePlayroomSessionsByUserAndGame` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListActivePlayroomSessionsByUserAndGame` Query is of type `ListActivePlayroomSessionsByUserAndGameData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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
    closedAt?: TimestampString | null;
  } & PlayroomSession_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListActivePlayroomSessionsByUserAndGame`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListActivePlayroomSessionsByUserAndGameVariables } from '@kismoportal-dataconnect/generated';
import { useListActivePlayroomSessionsByUserAndGame } from '@kismoportal-dataconnect/generated/react'

export default function ListActivePlayroomSessionsByUserAndGameComponent() {
  // The `useListActivePlayroomSessionsByUserAndGame` Query hook requires an argument of type `ListActivePlayroomSessionsByUserAndGameVariables`:
  const listActivePlayroomSessionsByUserAndGameVars: ListActivePlayroomSessionsByUserAndGameVariables = {
    userId: ..., 
    gameName: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListActivePlayroomSessionsByUserAndGame(listActivePlayroomSessionsByUserAndGameVars);
  // Variables can be defined inline as well.
  const query = useListActivePlayroomSessionsByUserAndGame({ userId: ..., gameName: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListActivePlayroomSessionsByUserAndGame(dataConnect, listActivePlayroomSessionsByUserAndGameVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListActivePlayroomSessionsByUserAndGame(listActivePlayroomSessionsByUserAndGameVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListActivePlayroomSessionsByUserAndGame(dataConnect, listActivePlayroomSessionsByUserAndGameVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.playroomSessions);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetPlayroomSessionByPlayroomSessionId
You can execute the `GetPlayroomSessionByPlayroomSessionId` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetPlayroomSessionByPlayroomSessionId(dc: DataConnect, vars: GetPlayroomSessionByPlayroomSessionIdVariables, options?: useDataConnectQueryOptions<GetPlayroomSessionByPlayroomSessionIdData>): UseDataConnectQueryResult<GetPlayroomSessionByPlayroomSessionIdData, GetPlayroomSessionByPlayroomSessionIdVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetPlayroomSessionByPlayroomSessionId(vars: GetPlayroomSessionByPlayroomSessionIdVariables, options?: useDataConnectQueryOptions<GetPlayroomSessionByPlayroomSessionIdData>): UseDataConnectQueryResult<GetPlayroomSessionByPlayroomSessionIdData, GetPlayroomSessionByPlayroomSessionIdVariables>;
```

### Variables
The `GetPlayroomSessionByPlayroomSessionId` Query requires an argument of type `GetPlayroomSessionByPlayroomSessionIdVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetPlayroomSessionByPlayroomSessionIdVariables {
  playroomSessionId: string;
}
```
### Return Type
Recall that calling the `GetPlayroomSessionByPlayroomSessionId` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetPlayroomSessionByPlayroomSessionId` Query is of type `GetPlayroomSessionByPlayroomSessionIdData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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
    closedAt?: TimestampString | null;
    jwtTokenCreator: string;
    jwtTokenInvitedUser?: string | null;
    jwtTokenSpectator?: string | null;
  } & PlayroomSession_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetPlayroomSessionByPlayroomSessionId`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetPlayroomSessionByPlayroomSessionIdVariables } from '@kismoportal-dataconnect/generated';
import { useGetPlayroomSessionByPlayroomSessionId } from '@kismoportal-dataconnect/generated/react'

export default function GetPlayroomSessionByPlayroomSessionIdComponent() {
  // The `useGetPlayroomSessionByPlayroomSessionId` Query hook requires an argument of type `GetPlayroomSessionByPlayroomSessionIdVariables`:
  const getPlayroomSessionByPlayroomSessionIdVars: GetPlayroomSessionByPlayroomSessionIdVariables = {
    playroomSessionId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetPlayroomSessionByPlayroomSessionId(getPlayroomSessionByPlayroomSessionIdVars);
  // Variables can be defined inline as well.
  const query = useGetPlayroomSessionByPlayroomSessionId({ playroomSessionId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetPlayroomSessionByPlayroomSessionId(dataConnect, getPlayroomSessionByPlayroomSessionIdVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetPlayroomSessionByPlayroomSessionId(getPlayroomSessionByPlayroomSessionIdVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetPlayroomSessionByPlayroomSessionId(dataConnect, getPlayroomSessionByPlayroomSessionIdVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.playroomSessions);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetActivePlayroomSessionByPlayroomSessionId
You can execute the `GetActivePlayroomSessionByPlayroomSessionId` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetActivePlayroomSessionByPlayroomSessionId(dc: DataConnect, vars: GetActivePlayroomSessionByPlayroomSessionIdVariables, options?: useDataConnectQueryOptions<GetActivePlayroomSessionByPlayroomSessionIdData>): UseDataConnectQueryResult<GetActivePlayroomSessionByPlayroomSessionIdData, GetActivePlayroomSessionByPlayroomSessionIdVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetActivePlayroomSessionByPlayroomSessionId(vars: GetActivePlayroomSessionByPlayroomSessionIdVariables, options?: useDataConnectQueryOptions<GetActivePlayroomSessionByPlayroomSessionIdData>): UseDataConnectQueryResult<GetActivePlayroomSessionByPlayroomSessionIdData, GetActivePlayroomSessionByPlayroomSessionIdVariables>;
```

### Variables
The `GetActivePlayroomSessionByPlayroomSessionId` Query requires an argument of type `GetActivePlayroomSessionByPlayroomSessionIdVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetActivePlayroomSessionByPlayroomSessionIdVariables {
  playroomSessionId: string;
}
```
### Return Type
Recall that calling the `GetActivePlayroomSessionByPlayroomSessionId` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetActivePlayroomSessionByPlayroomSessionId` Query is of type `GetActivePlayroomSessionByPlayroomSessionIdData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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
    closedAt?: TimestampString | null;
    jwtTokenCreator: string;
    jwtTokenInvitedUser?: string | null;
    jwtTokenSpectator?: string | null;
  } & PlayroomSession_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetActivePlayroomSessionByPlayroomSessionId`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetActivePlayroomSessionByPlayroomSessionIdVariables } from '@kismoportal-dataconnect/generated';
import { useGetActivePlayroomSessionByPlayroomSessionId } from '@kismoportal-dataconnect/generated/react'

export default function GetActivePlayroomSessionByPlayroomSessionIdComponent() {
  // The `useGetActivePlayroomSessionByPlayroomSessionId` Query hook requires an argument of type `GetActivePlayroomSessionByPlayroomSessionIdVariables`:
  const getActivePlayroomSessionByPlayroomSessionIdVars: GetActivePlayroomSessionByPlayroomSessionIdVariables = {
    playroomSessionId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetActivePlayroomSessionByPlayroomSessionId(getActivePlayroomSessionByPlayroomSessionIdVars);
  // Variables can be defined inline as well.
  const query = useGetActivePlayroomSessionByPlayroomSessionId({ playroomSessionId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetActivePlayroomSessionByPlayroomSessionId(dataConnect, getActivePlayroomSessionByPlayroomSessionIdVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetActivePlayroomSessionByPlayroomSessionId(getActivePlayroomSessionByPlayroomSessionIdVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetActivePlayroomSessionByPlayroomSessionId(dataConnect, getActivePlayroomSessionByPlayroomSessionIdVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.playroomSessions);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

# Mutations

The React generated SDK provides Mutations hook functions that call and return [`useDataConnectMutation`](https://react-query-firebase.invertase.dev/react/data-connect/mutations) hooks from TanStack Query Firebase.

Calling these hook functions will return a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, and the most recent data returned by the Mutation, among other things. To learn more about these hooks and how to use them, see the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react/data-connect/mutations).

Mutation hooks do not execute their Mutations automatically when called. Rather, after calling the Mutation hook function and getting a `UseMutationResult` object, you must call the `UseMutationResult.mutate()` function to execute the Mutation.

To learn more about TanStack React Query's Mutations, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/mutations).

## Using Mutation Hooks
Here's a general overview of how to use the generated Mutation hooks in your code:

- Mutation hook functions are not called with the arguments to the Mutation. Instead, arguments are passed to `UseMutationResult.mutate()`.
- If the Mutation has no variables, the `mutate()` function does not require arguments.
- If the Mutation has any required variables, the `mutate()` function will require at least one argument: an object that contains all the required variables for the Mutation.
- If the Mutation has some required and some optional variables, only required variables are necessary in the variables argument object, and optional variables may be provided as well.
- If all of the Mutation's variables are optional, the Mutation hook function does not require any arguments.
- Mutation hook functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.
- Mutation hooks also accept an `options` argument of type `useDataConnectMutationOptions`. To learn more about the `options` argument, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/mutations#mutation-side-effects).
  - `UseMutationResult.mutate()` also accepts an `options` argument of type `useDataConnectMutationOptions`.
  - ***Special case:*** If the Mutation has no arguments (or all optional arguments and you wish to provide none), and you want to pass `options` to `UseMutationResult.mutate()`, you must pass `undefined` where you would normally pass the Mutation's arguments, and then may provide the options argument.

Below are examples of how to use the `kismo-connector` connector's generated Mutation hook functions to execute each Mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#operations-react-angular).

## CreateUser
You can execute the `CreateUser` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
```

### Variables
The `CreateUser` Mutation requires an argument of type `CreateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateUserVariables {
  id: UUIDString;
  name: string;
  imageUrl: string;
}
```
### Return Type
Recall that calling the `CreateUser` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateUser` Mutation is of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateUserData {
  user_insert: User_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateUser`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateUserVariables } from '@kismoportal-dataconnect/generated';
import { useCreateUser } from '@kismoportal-dataconnect/generated/react'

export default function CreateUserComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateUser();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateUser(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateUser(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateUser(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateUser` Mutation requires an argument of type `CreateUserVariables`:
  const createUserVars: CreateUserVariables = {
    id: ..., 
    name: ..., 
    imageUrl: ..., 
  };
  mutation.mutate(createUserVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., name: ..., imageUrl: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createUserVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.user_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateChatroom
You can execute the `CreateChatroom` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateChatroom(options?: useDataConnectMutationOptions<CreateChatroomData, FirebaseError, CreateChatroomVariables>): UseDataConnectMutationResult<CreateChatroomData, CreateChatroomVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateChatroom(dc: DataConnect, options?: useDataConnectMutationOptions<CreateChatroomData, FirebaseError, CreateChatroomVariables>): UseDataConnectMutationResult<CreateChatroomData, CreateChatroomVariables>;
```

### Variables
The `CreateChatroom` Mutation requires an argument of type `CreateChatroomVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `CreateChatroom` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateChatroom` Mutation is of type `CreateChatroomData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateChatroomData {
  chatroom_insert: Chatroom_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateChatroom`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateChatroomVariables } from '@kismoportal-dataconnect/generated';
import { useCreateChatroom } from '@kismoportal-dataconnect/generated/react'

export default function CreateChatroomComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateChatroom();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateChatroom(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateChatroom(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateChatroom(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateChatroom` Mutation requires an argument of type `CreateChatroomVariables`:
  const createChatroomVars: CreateChatroomVariables = {
    name: ..., 
    isPublic: ..., 
    ownerId: ..., 
    cityId: ..., // optional
    imageUrl: ..., // optional
    description: ..., // optional
    imageAtribution: ..., // optional
  };
  mutation.mutate(createChatroomVars);
  // Variables can be defined inline as well.
  mutation.mutate({ name: ..., isPublic: ..., ownerId: ..., cityId: ..., imageUrl: ..., description: ..., imageAtribution: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createChatroomVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.chatroom_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## JoinChatroom
You can execute the `JoinChatroom` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useJoinChatroom(options?: useDataConnectMutationOptions<JoinChatroomData, FirebaseError, JoinChatroomVariables>): UseDataConnectMutationResult<JoinChatroomData, JoinChatroomVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useJoinChatroom(dc: DataConnect, options?: useDataConnectMutationOptions<JoinChatroomData, FirebaseError, JoinChatroomVariables>): UseDataConnectMutationResult<JoinChatroomData, JoinChatroomVariables>;
```

### Variables
The `JoinChatroom` Mutation requires an argument of type `JoinChatroomVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface JoinChatroomVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
}
```
### Return Type
Recall that calling the `JoinChatroom` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `JoinChatroom` Mutation is of type `JoinChatroomData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface JoinChatroomData {
  chatroomMember_insert: ChatroomMember_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `JoinChatroom`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, JoinChatroomVariables } from '@kismoportal-dataconnect/generated';
import { useJoinChatroom } from '@kismoportal-dataconnect/generated/react'

export default function JoinChatroomComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useJoinChatroom();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useJoinChatroom(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useJoinChatroom(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useJoinChatroom(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useJoinChatroom` Mutation requires an argument of type `JoinChatroomVariables`:
  const joinChatroomVars: JoinChatroomVariables = {
    userId: ..., 
    chatroomId: ..., 
  };
  mutation.mutate(joinChatroomVars);
  // Variables can be defined inline as well.
  mutation.mutate({ userId: ..., chatroomId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(joinChatroomVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.chatroomMember_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## LeaveChatroom
You can execute the `LeaveChatroom` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useLeaveChatroom(options?: useDataConnectMutationOptions<LeaveChatroomData, FirebaseError, LeaveChatroomVariables>): UseDataConnectMutationResult<LeaveChatroomData, LeaveChatroomVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useLeaveChatroom(dc: DataConnect, options?: useDataConnectMutationOptions<LeaveChatroomData, FirebaseError, LeaveChatroomVariables>): UseDataConnectMutationResult<LeaveChatroomData, LeaveChatroomVariables>;
```

### Variables
The `LeaveChatroom` Mutation requires an argument of type `LeaveChatroomVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface LeaveChatroomVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
}
```
### Return Type
Recall that calling the `LeaveChatroom` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `LeaveChatroom` Mutation is of type `LeaveChatroomData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface LeaveChatroomData {
  chatroomMember_delete?: ChatroomMember_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `LeaveChatroom`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, LeaveChatroomVariables } from '@kismoportal-dataconnect/generated';
import { useLeaveChatroom } from '@kismoportal-dataconnect/generated/react'

export default function LeaveChatroomComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useLeaveChatroom();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useLeaveChatroom(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useLeaveChatroom(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useLeaveChatroom(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useLeaveChatroom` Mutation requires an argument of type `LeaveChatroomVariables`:
  const leaveChatroomVars: LeaveChatroomVariables = {
    userId: ..., 
    chatroomId: ..., 
  };
  mutation.mutate(leaveChatroomVars);
  // Variables can be defined inline as well.
  mutation.mutate({ userId: ..., chatroomId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(leaveChatroomVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.chatroomMember_delete);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## SendMessage
You can execute the `SendMessage` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useSendMessage(options?: useDataConnectMutationOptions<SendMessageData, FirebaseError, SendMessageVariables>): UseDataConnectMutationResult<SendMessageData, SendMessageVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useSendMessage(dc: DataConnect, options?: useDataConnectMutationOptions<SendMessageData, FirebaseError, SendMessageVariables>): UseDataConnectMutationResult<SendMessageData, SendMessageVariables>;
```

### Variables
The `SendMessage` Mutation requires an argument of type `SendMessageVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface SendMessageVariables {
  chatroomId: UUIDString;
  senderId: UUIDString;
  text?: string | null;
  imageUrl?: string | null;
}
```
### Return Type
Recall that calling the `SendMessage` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `SendMessage` Mutation is of type `SendMessageData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface SendMessageData {
  message_insert: Message_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `SendMessage`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, SendMessageVariables } from '@kismoportal-dataconnect/generated';
import { useSendMessage } from '@kismoportal-dataconnect/generated/react'

export default function SendMessageComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useSendMessage();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useSendMessage(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useSendMessage(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useSendMessage(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useSendMessage` Mutation requires an argument of type `SendMessageVariables`:
  const sendMessageVars: SendMessageVariables = {
    chatroomId: ..., 
    senderId: ..., 
    text: ..., // optional
    imageUrl: ..., // optional
  };
  mutation.mutate(sendMessageVars);
  // Variables can be defined inline as well.
  mutation.mutate({ chatroomId: ..., senderId: ..., text: ..., imageUrl: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(sendMessageVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.message_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateStatus
You can execute the `UpdateStatus` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateStatus(options?: useDataConnectMutationOptions<UpdateStatusData, FirebaseError, UpdateStatusVariables>): UseDataConnectMutationResult<UpdateStatusData, UpdateStatusVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateStatus(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateStatusData, FirebaseError, UpdateStatusVariables>): UseDataConnectMutationResult<UpdateStatusData, UpdateStatusVariables>;
```

### Variables
The `UpdateStatus` Mutation requires an argument of type `UpdateStatusVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateStatusVariables {
  id: UUIDString;
  online: boolean;
  lastSeenAt: TimestampString;
}
```
### Return Type
Recall that calling the `UpdateStatus` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateStatus` Mutation is of type `UpdateStatusData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateStatusData {
  user_update?: User_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateStatus`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateStatusVariables } from '@kismoportal-dataconnect/generated';
import { useUpdateStatus } from '@kismoportal-dataconnect/generated/react'

export default function UpdateStatusComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateStatus();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateStatus(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateStatus(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateStatus(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateStatus` Mutation requires an argument of type `UpdateStatusVariables`:
  const updateStatusVars: UpdateStatusVariables = {
    id: ..., 
    online: ..., 
    lastSeenAt: ..., 
  };
  mutation.mutate(updateStatusVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., online: ..., lastSeenAt: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateStatusVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.user_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateUserImage
You can execute the `UpdateUserImage` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateUserImage(options?: useDataConnectMutationOptions<UpdateUserImageData, FirebaseError, UpdateUserImageVariables>): UseDataConnectMutationResult<UpdateUserImageData, UpdateUserImageVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateUserImage(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserImageData, FirebaseError, UpdateUserImageVariables>): UseDataConnectMutationResult<UpdateUserImageData, UpdateUserImageVariables>;
```

### Variables
The `UpdateUserImage` Mutation requires an argument of type `UpdateUserImageVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateUserImageVariables {
  id: UUIDString;
  imageUrl: string;
}
```
### Return Type
Recall that calling the `UpdateUserImage` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateUserImage` Mutation is of type `UpdateUserImageData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateUserImageData {
  user_update?: User_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateUserImage`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateUserImageVariables } from '@kismoportal-dataconnect/generated';
import { useUpdateUserImage } from '@kismoportal-dataconnect/generated/react'

export default function UpdateUserImageComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateUserImage();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateUserImage(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateUserImage(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateUserImage(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateUserImage` Mutation requires an argument of type `UpdateUserImageVariables`:
  const updateUserImageVars: UpdateUserImageVariables = {
    id: ..., 
    imageUrl: ..., 
  };
  mutation.mutate(updateUserImageVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., imageUrl: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateUserImageVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.user_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpsertFriendWith
You can execute the `UpsertFriendWith` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpsertFriendWith(options?: useDataConnectMutationOptions<UpsertFriendWithData, FirebaseError, UpsertFriendWithVariables>): UseDataConnectMutationResult<UpsertFriendWithData, UpsertFriendWithVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpsertFriendWith(dc: DataConnect, options?: useDataConnectMutationOptions<UpsertFriendWithData, FirebaseError, UpsertFriendWithVariables>): UseDataConnectMutationResult<UpsertFriendWithData, UpsertFriendWithVariables>;
```

### Variables
The `UpsertFriendWith` Mutation requires an argument of type `UpsertFriendWithVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `UpsertFriendWith` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpsertFriendWith` Mutation is of type `UpsertFriendWithData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpsertFriendWithData {
  friendWith_upsert: FriendWith_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpsertFriendWith`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpsertFriendWithVariables } from '@kismoportal-dataconnect/generated';
import { useUpsertFriendWith } from '@kismoportal-dataconnect/generated/react'

export default function UpsertFriendWithComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpsertFriendWith();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpsertFriendWith(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpsertFriendWith(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpsertFriendWith(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpsertFriendWith` Mutation requires an argument of type `UpsertFriendWithVariables`:
  const upsertFriendWithVars: UpsertFriendWithVariables = {
    userId: ..., 
    friendWithUserId: ..., 
    requestSent: ..., 
    requestSentAt: ..., // optional
    requestAccepted: ..., 
    requestAcceptedAt: ..., // optional
  };
  mutation.mutate(upsertFriendWithVars);
  // Variables can be defined inline as well.
  mutation.mutate({ userId: ..., friendWithUserId: ..., requestSent: ..., requestSentAt: ..., requestAccepted: ..., requestAcceptedAt: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(upsertFriendWithVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.friendWith_upsert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## SendFriendWithRequest
You can execute the `SendFriendWithRequest` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useSendFriendWithRequest(options?: useDataConnectMutationOptions<SendFriendWithRequestData, FirebaseError, SendFriendWithRequestVariables>): UseDataConnectMutationResult<SendFriendWithRequestData, SendFriendWithRequestVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useSendFriendWithRequest(dc: DataConnect, options?: useDataConnectMutationOptions<SendFriendWithRequestData, FirebaseError, SendFriendWithRequestVariables>): UseDataConnectMutationResult<SendFriendWithRequestData, SendFriendWithRequestVariables>;
```

### Variables
The `SendFriendWithRequest` Mutation requires an argument of type `SendFriendWithRequestVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface SendFriendWithRequestVariables {
  userId: UUIDString;
  friendWithUserId: UUIDString;
  sentAt: TimestampString;
}
```
### Return Type
Recall that calling the `SendFriendWithRequest` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `SendFriendWithRequest` Mutation is of type `SendFriendWithRequestData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface SendFriendWithRequestData {
  friendWith_upsert: FriendWith_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `SendFriendWithRequest`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, SendFriendWithRequestVariables } from '@kismoportal-dataconnect/generated';
import { useSendFriendWithRequest } from '@kismoportal-dataconnect/generated/react'

export default function SendFriendWithRequestComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useSendFriendWithRequest();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useSendFriendWithRequest(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useSendFriendWithRequest(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useSendFriendWithRequest(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useSendFriendWithRequest` Mutation requires an argument of type `SendFriendWithRequestVariables`:
  const sendFriendWithRequestVars: SendFriendWithRequestVariables = {
    userId: ..., 
    friendWithUserId: ..., 
    sentAt: ..., 
  };
  mutation.mutate(sendFriendWithRequestVars);
  // Variables can be defined inline as well.
  mutation.mutate({ userId: ..., friendWithUserId: ..., sentAt: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(sendFriendWithRequestVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.friendWith_upsert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## AcceptFriendWithRequest
You can execute the `AcceptFriendWithRequest` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useAcceptFriendWithRequest(options?: useDataConnectMutationOptions<AcceptFriendWithRequestData, FirebaseError, AcceptFriendWithRequestVariables>): UseDataConnectMutationResult<AcceptFriendWithRequestData, AcceptFriendWithRequestVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useAcceptFriendWithRequest(dc: DataConnect, options?: useDataConnectMutationOptions<AcceptFriendWithRequestData, FirebaseError, AcceptFriendWithRequestVariables>): UseDataConnectMutationResult<AcceptFriendWithRequestData, AcceptFriendWithRequestVariables>;
```

### Variables
The `AcceptFriendWithRequest` Mutation requires an argument of type `AcceptFriendWithRequestVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface AcceptFriendWithRequestVariables {
  userId: UUIDString;
  friendWithUserId: UUIDString;
  acceptedAt: TimestampString;
}
```
### Return Type
Recall that calling the `AcceptFriendWithRequest` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `AcceptFriendWithRequest` Mutation is of type `AcceptFriendWithRequestData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface AcceptFriendWithRequestData {
  friendWith_update?: FriendWith_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `AcceptFriendWithRequest`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, AcceptFriendWithRequestVariables } from '@kismoportal-dataconnect/generated';
import { useAcceptFriendWithRequest } from '@kismoportal-dataconnect/generated/react'

export default function AcceptFriendWithRequestComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useAcceptFriendWithRequest();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useAcceptFriendWithRequest(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useAcceptFriendWithRequest(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useAcceptFriendWithRequest(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useAcceptFriendWithRequest` Mutation requires an argument of type `AcceptFriendWithRequestVariables`:
  const acceptFriendWithRequestVars: AcceptFriendWithRequestVariables = {
    userId: ..., 
    friendWithUserId: ..., 
    acceptedAt: ..., 
  };
  mutation.mutate(acceptFriendWithRequestVars);
  // Variables can be defined inline as well.
  mutation.mutate({ userId: ..., friendWithUserId: ..., acceptedAt: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(acceptFriendWithRequestVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.friendWith_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## AcceptFriendWithRequestBidirectional
You can execute the `AcceptFriendWithRequestBidirectional` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useAcceptFriendWithRequestBidirectional(options?: useDataConnectMutationOptions<AcceptFriendWithRequestBidirectionalData, FirebaseError, AcceptFriendWithRequestBidirectionalVariables>): UseDataConnectMutationResult<AcceptFriendWithRequestBidirectionalData, AcceptFriendWithRequestBidirectionalVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useAcceptFriendWithRequestBidirectional(dc: DataConnect, options?: useDataConnectMutationOptions<AcceptFriendWithRequestBidirectionalData, FirebaseError, AcceptFriendWithRequestBidirectionalVariables>): UseDataConnectMutationResult<AcceptFriendWithRequestBidirectionalData, AcceptFriendWithRequestBidirectionalVariables>;
```

### Variables
The `AcceptFriendWithRequestBidirectional` Mutation requires an argument of type `AcceptFriendWithRequestBidirectionalVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface AcceptFriendWithRequestBidirectionalVariables {
  requesterUserId: UUIDString;
  accepterUserId: UUIDString;
  acceptedAt: TimestampString;
}
```
### Return Type
Recall that calling the `AcceptFriendWithRequestBidirectional` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `AcceptFriendWithRequestBidirectional` Mutation is of type `AcceptFriendWithRequestBidirectionalData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface AcceptFriendWithRequestBidirectionalData {
  _execute?: number | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `AcceptFriendWithRequestBidirectional`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, AcceptFriendWithRequestBidirectionalVariables } from '@kismoportal-dataconnect/generated';
import { useAcceptFriendWithRequestBidirectional } from '@kismoportal-dataconnect/generated/react'

export default function AcceptFriendWithRequestBidirectionalComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useAcceptFriendWithRequestBidirectional();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useAcceptFriendWithRequestBidirectional(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useAcceptFriendWithRequestBidirectional(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useAcceptFriendWithRequestBidirectional(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useAcceptFriendWithRequestBidirectional` Mutation requires an argument of type `AcceptFriendWithRequestBidirectionalVariables`:
  const acceptFriendWithRequestBidirectionalVars: AcceptFriendWithRequestBidirectionalVariables = {
    requesterUserId: ..., 
    accepterUserId: ..., 
    acceptedAt: ..., 
  };
  mutation.mutate(acceptFriendWithRequestBidirectionalVars);
  // Variables can be defined inline as well.
  mutation.mutate({ requesterUserId: ..., accepterUserId: ..., acceptedAt: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(acceptFriendWithRequestBidirectionalVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data._execute);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## RejectFriendWithRequestBidirectional
You can execute the `RejectFriendWithRequestBidirectional` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useRejectFriendWithRequestBidirectional(options?: useDataConnectMutationOptions<RejectFriendWithRequestBidirectionalData, FirebaseError, RejectFriendWithRequestBidirectionalVariables>): UseDataConnectMutationResult<RejectFriendWithRequestBidirectionalData, RejectFriendWithRequestBidirectionalVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useRejectFriendWithRequestBidirectional(dc: DataConnect, options?: useDataConnectMutationOptions<RejectFriendWithRequestBidirectionalData, FirebaseError, RejectFriendWithRequestBidirectionalVariables>): UseDataConnectMutationResult<RejectFriendWithRequestBidirectionalData, RejectFriendWithRequestBidirectionalVariables>;
```

### Variables
The `RejectFriendWithRequestBidirectional` Mutation requires an argument of type `RejectFriendWithRequestBidirectionalVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface RejectFriendWithRequestBidirectionalVariables {
  userAId: UUIDString;
  userBId: UUIDString;
}
```
### Return Type
Recall that calling the `RejectFriendWithRequestBidirectional` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `RejectFriendWithRequestBidirectional` Mutation is of type `RejectFriendWithRequestBidirectionalData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface RejectFriendWithRequestBidirectionalData {
  _execute?: number | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `RejectFriendWithRequestBidirectional`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, RejectFriendWithRequestBidirectionalVariables } from '@kismoportal-dataconnect/generated';
import { useRejectFriendWithRequestBidirectional } from '@kismoportal-dataconnect/generated/react'

export default function RejectFriendWithRequestBidirectionalComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useRejectFriendWithRequestBidirectional();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useRejectFriendWithRequestBidirectional(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useRejectFriendWithRequestBidirectional(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useRejectFriendWithRequestBidirectional(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useRejectFriendWithRequestBidirectional` Mutation requires an argument of type `RejectFriendWithRequestBidirectionalVariables`:
  const rejectFriendWithRequestBidirectionalVars: RejectFriendWithRequestBidirectionalVariables = {
    userAId: ..., 
    userBId: ..., 
  };
  mutation.mutate(rejectFriendWithRequestBidirectionalVars);
  // Variables can be defined inline as well.
  mutation.mutate({ userAId: ..., userBId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(rejectFriendWithRequestBidirectionalVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data._execute);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeleteFriendWith
You can execute the `DeleteFriendWith` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeleteFriendWith(options?: useDataConnectMutationOptions<DeleteFriendWithData, FirebaseError, DeleteFriendWithVariables>): UseDataConnectMutationResult<DeleteFriendWithData, DeleteFriendWithVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeleteFriendWith(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteFriendWithData, FirebaseError, DeleteFriendWithVariables>): UseDataConnectMutationResult<DeleteFriendWithData, DeleteFriendWithVariables>;
```

### Variables
The `DeleteFriendWith` Mutation requires an argument of type `DeleteFriendWithVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeleteFriendWithVariables {
  userId: UUIDString;
  friendWithUserId: UUIDString;
}
```
### Return Type
Recall that calling the `DeleteFriendWith` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeleteFriendWith` Mutation is of type `DeleteFriendWithData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeleteFriendWithData {
  friendWith_delete?: FriendWith_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeleteFriendWith`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeleteFriendWithVariables } from '@kismoportal-dataconnect/generated';
import { useDeleteFriendWith } from '@kismoportal-dataconnect/generated/react'

export default function DeleteFriendWithComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeleteFriendWith();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeleteFriendWith(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteFriendWith(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteFriendWith(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeleteFriendWith` Mutation requires an argument of type `DeleteFriendWithVariables`:
  const deleteFriendWithVars: DeleteFriendWithVariables = {
    userId: ..., 
    friendWithUserId: ..., 
  };
  mutation.mutate(deleteFriendWithVars);
  // Variables can be defined inline as well.
  mutation.mutate({ userId: ..., friendWithUserId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deleteFriendWithVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.friendWith_delete);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateChatroomDetails
You can execute the `UpdateChatroomDetails` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateChatroomDetails(options?: useDataConnectMutationOptions<UpdateChatroomDetailsData, FirebaseError, UpdateChatroomDetailsVariables>): UseDataConnectMutationResult<UpdateChatroomDetailsData, UpdateChatroomDetailsVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateChatroomDetails(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateChatroomDetailsData, FirebaseError, UpdateChatroomDetailsVariables>): UseDataConnectMutationResult<UpdateChatroomDetailsData, UpdateChatroomDetailsVariables>;
```

### Variables
The `UpdateChatroomDetails` Mutation requires an argument of type `UpdateChatroomDetailsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateChatroomDetailsVariables {
  id: UUIDString;
  imageUrl?: string | null;
  description?: string | null;
  imageAtribution?: string | null;
}
```
### Return Type
Recall that calling the `UpdateChatroomDetails` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateChatroomDetails` Mutation is of type `UpdateChatroomDetailsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateChatroomDetailsData {
  chatroom_update?: Chatroom_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateChatroomDetails`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateChatroomDetailsVariables } from '@kismoportal-dataconnect/generated';
import { useUpdateChatroomDetails } from '@kismoportal-dataconnect/generated/react'

export default function UpdateChatroomDetailsComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateChatroomDetails();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateChatroomDetails(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateChatroomDetails(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateChatroomDetails(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateChatroomDetails` Mutation requires an argument of type `UpdateChatroomDetailsVariables`:
  const updateChatroomDetailsVars: UpdateChatroomDetailsVariables = {
    id: ..., 
    imageUrl: ..., // optional
    description: ..., // optional
    imageAtribution: ..., // optional
  };
  mutation.mutate(updateChatroomDetailsVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., imageUrl: ..., description: ..., imageAtribution: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateChatroomDetailsVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.chatroom_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpsertChatroomStat
You can execute the `UpsertChatroomStat` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpsertChatroomStat(options?: useDataConnectMutationOptions<UpsertChatroomStatData, FirebaseError, UpsertChatroomStatVariables>): UseDataConnectMutationResult<UpsertChatroomStatData, UpsertChatroomStatVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpsertChatroomStat(dc: DataConnect, options?: useDataConnectMutationOptions<UpsertChatroomStatData, FirebaseError, UpsertChatroomStatVariables>): UseDataConnectMutationResult<UpsertChatroomStatData, UpsertChatroomStatVariables>;
```

### Variables
The `UpsertChatroomStat` Mutation requires an argument of type `UpsertChatroomStatVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpsertChatroomStatVariables {
  chatroomId: UUIDString;
  label: string;
  value: Int64String;
  subtext?: string | null;
}
```
### Return Type
Recall that calling the `UpsertChatroomStat` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpsertChatroomStat` Mutation is of type `UpsertChatroomStatData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpsertChatroomStatData {
  chatroomStat_upsert: ChatroomStat_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpsertChatroomStat`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpsertChatroomStatVariables } from '@kismoportal-dataconnect/generated';
import { useUpsertChatroomStat } from '@kismoportal-dataconnect/generated/react'

export default function UpsertChatroomStatComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpsertChatroomStat();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpsertChatroomStat(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpsertChatroomStat(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpsertChatroomStat(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpsertChatroomStat` Mutation requires an argument of type `UpsertChatroomStatVariables`:
  const upsertChatroomStatVars: UpsertChatroomStatVariables = {
    chatroomId: ..., 
    label: ..., 
    value: ..., 
    subtext: ..., // optional
  };
  mutation.mutate(upsertChatroomStatVars);
  // Variables can be defined inline as well.
  mutation.mutate({ chatroomId: ..., label: ..., value: ..., subtext: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(upsertChatroomStatVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.chatroomStat_upsert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateCityName
You can execute the `UpdateCityName` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateCityName(options?: useDataConnectMutationOptions<UpdateCityNameData, FirebaseError, UpdateCityNameVariables>): UseDataConnectMutationResult<UpdateCityNameData, UpdateCityNameVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateCityName(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateCityNameData, FirebaseError, UpdateCityNameVariables>): UseDataConnectMutationResult<UpdateCityNameData, UpdateCityNameVariables>;
```

### Variables
The `UpdateCityName` Mutation requires an argument of type `UpdateCityNameVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateCityNameVariables {
  geonameid: Int64String;
  name: string;
}
```
### Return Type
Recall that calling the `UpdateCityName` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateCityName` Mutation is of type `UpdateCityNameData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateCityNameData {
  city_update?: City_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateCityName`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateCityNameVariables } from '@kismoportal-dataconnect/generated';
import { useUpdateCityName } from '@kismoportal-dataconnect/generated/react'

export default function UpdateCityNameComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateCityName();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateCityName(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateCityName(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateCityName(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateCityName` Mutation requires an argument of type `UpdateCityNameVariables`:
  const updateCityNameVars: UpdateCityNameVariables = {
    geonameid: ..., 
    name: ..., 
  };
  mutation.mutate(updateCityNameVars);
  // Variables can be defined inline as well.
  mutation.mutate({ geonameid: ..., name: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateCityNameVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.city_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeleteChatroomStat
You can execute the `DeleteChatroomStat` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeleteChatroomStat(options?: useDataConnectMutationOptions<DeleteChatroomStatData, FirebaseError, DeleteChatroomStatVariables>): UseDataConnectMutationResult<DeleteChatroomStatData, DeleteChatroomStatVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeleteChatroomStat(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteChatroomStatData, FirebaseError, DeleteChatroomStatVariables>): UseDataConnectMutationResult<DeleteChatroomStatData, DeleteChatroomStatVariables>;
```

### Variables
The `DeleteChatroomStat` Mutation requires an argument of type `DeleteChatroomStatVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeleteChatroomStatVariables {
  chatroomId: UUIDString;
  label: string;
}
```
### Return Type
Recall that calling the `DeleteChatroomStat` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeleteChatroomStat` Mutation is of type `DeleteChatroomStatData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeleteChatroomStatData {
  chatroomStat_delete?: ChatroomStat_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeleteChatroomStat`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeleteChatroomStatVariables } from '@kismoportal-dataconnect/generated';
import { useDeleteChatroomStat } from '@kismoportal-dataconnect/generated/react'

export default function DeleteChatroomStatComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeleteChatroomStat();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeleteChatroomStat(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteChatroomStat(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteChatroomStat(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeleteChatroomStat` Mutation requires an argument of type `DeleteChatroomStatVariables`:
  const deleteChatroomStatVars: DeleteChatroomStatVariables = {
    chatroomId: ..., 
    label: ..., 
  };
  mutation.mutate(deleteChatroomStatVars);
  // Variables can be defined inline as well.
  mutation.mutate({ chatroomId: ..., label: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deleteChatroomStatVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.chatroomStat_delete);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateStatValue
You can execute the `UpdateStatValue` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateStatValue(options?: useDataConnectMutationOptions<UpdateStatValueData, FirebaseError, UpdateStatValueVariables>): UseDataConnectMutationResult<UpdateStatValueData, UpdateStatValueVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateStatValue(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateStatValueData, FirebaseError, UpdateStatValueVariables>): UseDataConnectMutationResult<UpdateStatValueData, UpdateStatValueVariables>;
```

### Variables
The `UpdateStatValue` Mutation requires an argument of type `UpdateStatValueVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateStatValueVariables {
  chatroomId: UUIDString;
  label: string;
  value: Int64String;
}
```
### Return Type
Recall that calling the `UpdateStatValue` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateStatValue` Mutation is of type `UpdateStatValueData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateStatValueData {
  chatroomStat_update?: ChatroomStat_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateStatValue`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateStatValueVariables } from '@kismoportal-dataconnect/generated';
import { useUpdateStatValue } from '@kismoportal-dataconnect/generated/react'

export default function UpdateStatValueComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateStatValue();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateStatValue(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateStatValue(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateStatValue(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateStatValue` Mutation requires an argument of type `UpdateStatValueVariables`:
  const updateStatValueVars: UpdateStatValueVariables = {
    chatroomId: ..., 
    label: ..., 
    value: ..., 
  };
  mutation.mutate(updateStatValueVars);
  // Variables can be defined inline as well.
  mutation.mutate({ chatroomId: ..., label: ..., value: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateStatValueVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.chatroomStat_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpsertGlobalStat
You can execute the `UpsertGlobalStat` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpsertGlobalStat(options?: useDataConnectMutationOptions<UpsertGlobalStatData, FirebaseError, UpsertGlobalStatVariables>): UseDataConnectMutationResult<UpsertGlobalStatData, UpsertGlobalStatVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpsertGlobalStat(dc: DataConnect, options?: useDataConnectMutationOptions<UpsertGlobalStatData, FirebaseError, UpsertGlobalStatVariables>): UseDataConnectMutationResult<UpsertGlobalStatData, UpsertGlobalStatVariables>;
```

### Variables
The `UpsertGlobalStat` Mutation requires an argument of type `UpsertGlobalStatVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpsertGlobalStatVariables {
  label: string;
  value: Int64String;
  subtext?: string | null;
}
```
### Return Type
Recall that calling the `UpsertGlobalStat` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpsertGlobalStat` Mutation is of type `UpsertGlobalStatData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpsertGlobalStatData {
  globalStat_upsert: GlobalStat_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpsertGlobalStat`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpsertGlobalStatVariables } from '@kismoportal-dataconnect/generated';
import { useUpsertGlobalStat } from '@kismoportal-dataconnect/generated/react'

export default function UpsertGlobalStatComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpsertGlobalStat();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpsertGlobalStat(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpsertGlobalStat(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpsertGlobalStat(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpsertGlobalStat` Mutation requires an argument of type `UpsertGlobalStatVariables`:
  const upsertGlobalStatVars: UpsertGlobalStatVariables = {
    label: ..., 
    value: ..., 
    subtext: ..., // optional
  };
  mutation.mutate(upsertGlobalStatVars);
  // Variables can be defined inline as well.
  mutation.mutate({ label: ..., value: ..., subtext: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(upsertGlobalStatVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.globalStat_upsert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## OpenChatroomSession
You can execute the `OpenChatroomSession` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useOpenChatroomSession(options?: useDataConnectMutationOptions<OpenChatroomSessionData, FirebaseError, OpenChatroomSessionVariables>): UseDataConnectMutationResult<OpenChatroomSessionData, OpenChatroomSessionVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useOpenChatroomSession(dc: DataConnect, options?: useDataConnectMutationOptions<OpenChatroomSessionData, FirebaseError, OpenChatroomSessionVariables>): UseDataConnectMutationResult<OpenChatroomSessionData, OpenChatroomSessionVariables>;
```

### Variables
The `OpenChatroomSession` Mutation requires an argument of type `OpenChatroomSessionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface OpenChatroomSessionVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
  openedAt: TimestampString;
}
```
### Return Type
Recall that calling the `OpenChatroomSession` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `OpenChatroomSession` Mutation is of type `OpenChatroomSessionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface OpenChatroomSessionData {
  userChatroomSession_upsert: UserChatroomSession_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `OpenChatroomSession`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, OpenChatroomSessionVariables } from '@kismoportal-dataconnect/generated';
import { useOpenChatroomSession } from '@kismoportal-dataconnect/generated/react'

export default function OpenChatroomSessionComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useOpenChatroomSession();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useOpenChatroomSession(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useOpenChatroomSession(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useOpenChatroomSession(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useOpenChatroomSession` Mutation requires an argument of type `OpenChatroomSessionVariables`:
  const openChatroomSessionVars: OpenChatroomSessionVariables = {
    userId: ..., 
    chatroomId: ..., 
    openedAt: ..., 
  };
  mutation.mutate(openChatroomSessionVars);
  // Variables can be defined inline as well.
  mutation.mutate({ userId: ..., chatroomId: ..., openedAt: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(openChatroomSessionVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.userChatroomSession_upsert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CloseChatroomSession
You can execute the `CloseChatroomSession` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCloseChatroomSession(options?: useDataConnectMutationOptions<CloseChatroomSessionData, FirebaseError, CloseChatroomSessionVariables>): UseDataConnectMutationResult<CloseChatroomSessionData, CloseChatroomSessionVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCloseChatroomSession(dc: DataConnect, options?: useDataConnectMutationOptions<CloseChatroomSessionData, FirebaseError, CloseChatroomSessionVariables>): UseDataConnectMutationResult<CloseChatroomSessionData, CloseChatroomSessionVariables>;
```

### Variables
The `CloseChatroomSession` Mutation requires an argument of type `CloseChatroomSessionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CloseChatroomSessionVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
  closedAt: TimestampString;
}
```
### Return Type
Recall that calling the `CloseChatroomSession` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CloseChatroomSession` Mutation is of type `CloseChatroomSessionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CloseChatroomSessionData {
  userChatroomSession_updateMany: number;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CloseChatroomSession`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CloseChatroomSessionVariables } from '@kismoportal-dataconnect/generated';
import { useCloseChatroomSession } from '@kismoportal-dataconnect/generated/react'

export default function CloseChatroomSessionComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCloseChatroomSession();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCloseChatroomSession(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCloseChatroomSession(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCloseChatroomSession(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCloseChatroomSession` Mutation requires an argument of type `CloseChatroomSessionVariables`:
  const closeChatroomSessionVars: CloseChatroomSessionVariables = {
    userId: ..., 
    chatroomId: ..., 
    closedAt: ..., 
  };
  mutation.mutate(closeChatroomSessionVars);
  // Variables can be defined inline as well.
  mutation.mutate({ userId: ..., chatroomId: ..., closedAt: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(closeChatroomSessionVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.userChatroomSession_updateMany);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## HeartbeatChatroomSession
You can execute the `HeartbeatChatroomSession` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useHeartbeatChatroomSession(options?: useDataConnectMutationOptions<HeartbeatChatroomSessionData, FirebaseError, HeartbeatChatroomSessionVariables>): UseDataConnectMutationResult<HeartbeatChatroomSessionData, HeartbeatChatroomSessionVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useHeartbeatChatroomSession(dc: DataConnect, options?: useDataConnectMutationOptions<HeartbeatChatroomSessionData, FirebaseError, HeartbeatChatroomSessionVariables>): UseDataConnectMutationResult<HeartbeatChatroomSessionData, HeartbeatChatroomSessionVariables>;
```

### Variables
The `HeartbeatChatroomSession` Mutation requires an argument of type `HeartbeatChatroomSessionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface HeartbeatChatroomSessionVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
  heartbeatAt: TimestampString;
}
```
### Return Type
Recall that calling the `HeartbeatChatroomSession` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `HeartbeatChatroomSession` Mutation is of type `HeartbeatChatroomSessionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface HeartbeatChatroomSessionData {
  userChatroomSession_updateMany: number;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `HeartbeatChatroomSession`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, HeartbeatChatroomSessionVariables } from '@kismoportal-dataconnect/generated';
import { useHeartbeatChatroomSession } from '@kismoportal-dataconnect/generated/react'

export default function HeartbeatChatroomSessionComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useHeartbeatChatroomSession();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useHeartbeatChatroomSession(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useHeartbeatChatroomSession(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useHeartbeatChatroomSession(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useHeartbeatChatroomSession` Mutation requires an argument of type `HeartbeatChatroomSessionVariables`:
  const heartbeatChatroomSessionVars: HeartbeatChatroomSessionVariables = {
    userId: ..., 
    chatroomId: ..., 
    heartbeatAt: ..., 
  };
  mutation.mutate(heartbeatChatroomSessionVars);
  // Variables can be defined inline as well.
  mutation.mutate({ userId: ..., chatroomId: ..., heartbeatAt: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(heartbeatChatroomSessionVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.userChatroomSession_updateMany);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## RecordChatroomVisit
You can execute the `RecordChatroomVisit` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useRecordChatroomVisit(options?: useDataConnectMutationOptions<RecordChatroomVisitData, FirebaseError, RecordChatroomVisitVariables>): UseDataConnectMutationResult<RecordChatroomVisitData, RecordChatroomVisitVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useRecordChatroomVisit(dc: DataConnect, options?: useDataConnectMutationOptions<RecordChatroomVisitData, FirebaseError, RecordChatroomVisitVariables>): UseDataConnectMutationResult<RecordChatroomVisitData, RecordChatroomVisitVariables>;
```

### Variables
The `RecordChatroomVisit` Mutation requires an argument of type `RecordChatroomVisitVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface RecordChatroomVisitVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
  visitedAt: TimestampString;
}
```
### Return Type
Recall that calling the `RecordChatroomVisit` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `RecordChatroomVisit` Mutation is of type `RecordChatroomVisitData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface RecordChatroomVisitData {
  userChatroomVisit_upsert: UserChatroomVisit_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `RecordChatroomVisit`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, RecordChatroomVisitVariables } from '@kismoportal-dataconnect/generated';
import { useRecordChatroomVisit } from '@kismoportal-dataconnect/generated/react'

export default function RecordChatroomVisitComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useRecordChatroomVisit();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useRecordChatroomVisit(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useRecordChatroomVisit(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useRecordChatroomVisit(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useRecordChatroomVisit` Mutation requires an argument of type `RecordChatroomVisitVariables`:
  const recordChatroomVisitVars: RecordChatroomVisitVariables = {
    userId: ..., 
    chatroomId: ..., 
    visitedAt: ..., 
  };
  mutation.mutate(recordChatroomVisitVars);
  // Variables can be defined inline as well.
  mutation.mutate({ userId: ..., chatroomId: ..., visitedAt: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(recordChatroomVisitVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.userChatroomVisit_upsert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## TrimOldVisits
You can execute the `TrimOldVisits` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useTrimOldVisits(options?: useDataConnectMutationOptions<TrimOldVisitsData, FirebaseError, TrimOldVisitsVariables>): UseDataConnectMutationResult<TrimOldVisitsData, TrimOldVisitsVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useTrimOldVisits(dc: DataConnect, options?: useDataConnectMutationOptions<TrimOldVisitsData, FirebaseError, TrimOldVisitsVariables>): UseDataConnectMutationResult<TrimOldVisitsData, TrimOldVisitsVariables>;
```

### Variables
The `TrimOldVisits` Mutation requires an argument of type `TrimOldVisitsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface TrimOldVisitsVariables {
  userId: UUIDString;
  keepLatest?: number | null;
}
```
### Return Type
Recall that calling the `TrimOldVisits` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `TrimOldVisits` Mutation is of type `TrimOldVisitsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface TrimOldVisitsData {
  _execute?: number | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `TrimOldVisits`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, TrimOldVisitsVariables } from '@kismoportal-dataconnect/generated';
import { useTrimOldVisits } from '@kismoportal-dataconnect/generated/react'

export default function TrimOldVisitsComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useTrimOldVisits();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useTrimOldVisits(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useTrimOldVisits(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useTrimOldVisits(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useTrimOldVisits` Mutation requires an argument of type `TrimOldVisitsVariables`:
  const trimOldVisitsVars: TrimOldVisitsVariables = {
    userId: ..., 
    keepLatest: ..., // optional
  };
  mutation.mutate(trimOldVisitsVars);
  // Variables can be defined inline as well.
  mutation.mutate({ userId: ..., keepLatest: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(trimOldVisitsVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data._execute);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateNotification
You can execute the `CreateNotification` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateNotification(options?: useDataConnectMutationOptions<CreateNotificationData, FirebaseError, CreateNotificationVariables>): UseDataConnectMutationResult<CreateNotificationData, CreateNotificationVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateNotification(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNotificationData, FirebaseError, CreateNotificationVariables>): UseDataConnectMutationResult<CreateNotificationData, CreateNotificationVariables>;
```

### Variables
The `CreateNotification` Mutation requires an argument of type `CreateNotificationVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `CreateNotification` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateNotification` Mutation is of type `CreateNotificationData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateNotificationData {
  userNotification_insert: UserNotification_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateNotification`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateNotificationVariables } from '@kismoportal-dataconnect/generated';
import { useCreateNotification } from '@kismoportal-dataconnect/generated/react'

export default function CreateNotificationComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateNotification();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateNotification(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateNotification(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateNotification(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateNotification` Mutation requires an argument of type `CreateNotificationVariables`:
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
  mutation.mutate(createNotificationVars);
  // Variables can be defined inline as well.
  mutation.mutate({ recipientUserId: ..., actorUserId: ..., type: ..., title: ..., body: ..., payloadJson: ..., chatroomId: ..., messageId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createNotificationVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.userNotification_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## MarkNotificationRead
You can execute the `MarkNotificationRead` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useMarkNotificationRead(options?: useDataConnectMutationOptions<MarkNotificationReadData, FirebaseError, MarkNotificationReadVariables>): UseDataConnectMutationResult<MarkNotificationReadData, MarkNotificationReadVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useMarkNotificationRead(dc: DataConnect, options?: useDataConnectMutationOptions<MarkNotificationReadData, FirebaseError, MarkNotificationReadVariables>): UseDataConnectMutationResult<MarkNotificationReadData, MarkNotificationReadVariables>;
```

### Variables
The `MarkNotificationRead` Mutation requires an argument of type `MarkNotificationReadVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface MarkNotificationReadVariables {
  notificationId: UUIDString;
  readAt: TimestampString;
}
```
### Return Type
Recall that calling the `MarkNotificationRead` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `MarkNotificationRead` Mutation is of type `MarkNotificationReadData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface MarkNotificationReadData {
  userNotification_update?: UserNotification_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `MarkNotificationRead`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, MarkNotificationReadVariables } from '@kismoportal-dataconnect/generated';
import { useMarkNotificationRead } from '@kismoportal-dataconnect/generated/react'

export default function MarkNotificationReadComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useMarkNotificationRead();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useMarkNotificationRead(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useMarkNotificationRead(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useMarkNotificationRead(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useMarkNotificationRead` Mutation requires an argument of type `MarkNotificationReadVariables`:
  const markNotificationReadVars: MarkNotificationReadVariables = {
    notificationId: ..., 
    readAt: ..., 
  };
  mutation.mutate(markNotificationReadVars);
  // Variables can be defined inline as well.
  mutation.mutate({ notificationId: ..., readAt: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(markNotificationReadVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.userNotification_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## MarkAllNotificationsRead
You can execute the `MarkAllNotificationsRead` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useMarkAllNotificationsRead(options?: useDataConnectMutationOptions<MarkAllNotificationsReadData, FirebaseError, MarkAllNotificationsReadVariables>): UseDataConnectMutationResult<MarkAllNotificationsReadData, MarkAllNotificationsReadVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useMarkAllNotificationsRead(dc: DataConnect, options?: useDataConnectMutationOptions<MarkAllNotificationsReadData, FirebaseError, MarkAllNotificationsReadVariables>): UseDataConnectMutationResult<MarkAllNotificationsReadData, MarkAllNotificationsReadVariables>;
```

### Variables
The `MarkAllNotificationsRead` Mutation requires an argument of type `MarkAllNotificationsReadVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface MarkAllNotificationsReadVariables {
  recipientUserId: UUIDString;
  readAt: TimestampString;
}
```
### Return Type
Recall that calling the `MarkAllNotificationsRead` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `MarkAllNotificationsRead` Mutation is of type `MarkAllNotificationsReadData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface MarkAllNotificationsReadData {
  userNotification_updateMany: number;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `MarkAllNotificationsRead`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, MarkAllNotificationsReadVariables } from '@kismoportal-dataconnect/generated';
import { useMarkAllNotificationsRead } from '@kismoportal-dataconnect/generated/react'

export default function MarkAllNotificationsReadComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useMarkAllNotificationsRead();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useMarkAllNotificationsRead(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useMarkAllNotificationsRead(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useMarkAllNotificationsRead(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useMarkAllNotificationsRead` Mutation requires an argument of type `MarkAllNotificationsReadVariables`:
  const markAllNotificationsReadVars: MarkAllNotificationsReadVariables = {
    recipientUserId: ..., 
    readAt: ..., 
  };
  mutation.mutate(markAllNotificationsReadVars);
  // Variables can be defined inline as well.
  mutation.mutate({ recipientUserId: ..., readAt: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(markAllNotificationsReadVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.userNotification_updateMany);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## InitializeChatroomStatsDefaults
You can execute the `InitializeChatroomStatsDefaults` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useInitializeChatroomStatsDefaults(options?: useDataConnectMutationOptions<InitializeChatroomStatsDefaultsData, FirebaseError, InitializeChatroomStatsDefaultsVariables>): UseDataConnectMutationResult<InitializeChatroomStatsDefaultsData, InitializeChatroomStatsDefaultsVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useInitializeChatroomStatsDefaults(dc: DataConnect, options?: useDataConnectMutationOptions<InitializeChatroomStatsDefaultsData, FirebaseError, InitializeChatroomStatsDefaultsVariables>): UseDataConnectMutationResult<InitializeChatroomStatsDefaultsData, InitializeChatroomStatsDefaultsVariables>;
```

### Variables
The `InitializeChatroomStatsDefaults` Mutation requires an argument of type `InitializeChatroomStatsDefaultsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface InitializeChatroomStatsDefaultsVariables {
  chatroomId: UUIDString;
}
```
### Return Type
Recall that calling the `InitializeChatroomStatsDefaults` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `InitializeChatroomStatsDefaults` Mutation is of type `InitializeChatroomStatsDefaultsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface InitializeChatroomStatsDefaultsData {
  _execute?: number | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `InitializeChatroomStatsDefaults`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, InitializeChatroomStatsDefaultsVariables } from '@kismoportal-dataconnect/generated';
import { useInitializeChatroomStatsDefaults } from '@kismoportal-dataconnect/generated/react'

export default function InitializeChatroomStatsDefaultsComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useInitializeChatroomStatsDefaults();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useInitializeChatroomStatsDefaults(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useInitializeChatroomStatsDefaults(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useInitializeChatroomStatsDefaults(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useInitializeChatroomStatsDefaults` Mutation requires an argument of type `InitializeChatroomStatsDefaultsVariables`:
  const initializeChatroomStatsDefaultsVars: InitializeChatroomStatsDefaultsVariables = {
    chatroomId: ..., 
  };
  mutation.mutate(initializeChatroomStatsDefaultsVars);
  // Variables can be defined inline as well.
  mutation.mutate({ chatroomId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(initializeChatroomStatsDefaultsVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data._execute);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## IncrementChatroomStat
You can execute the `IncrementChatroomStat` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useIncrementChatroomStat(options?: useDataConnectMutationOptions<IncrementChatroomStatData, FirebaseError, IncrementChatroomStatVariables>): UseDataConnectMutationResult<IncrementChatroomStatData, IncrementChatroomStatVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useIncrementChatroomStat(dc: DataConnect, options?: useDataConnectMutationOptions<IncrementChatroomStatData, FirebaseError, IncrementChatroomStatVariables>): UseDataConnectMutationResult<IncrementChatroomStatData, IncrementChatroomStatVariables>;
```

### Variables
The `IncrementChatroomStat` Mutation requires an argument of type `IncrementChatroomStatVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface IncrementChatroomStatVariables {
  chatroomId: UUIDString;
  label: string;
  delta: Int64String;
  subtextOnCreate?: string | null;
}
```
### Return Type
Recall that calling the `IncrementChatroomStat` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `IncrementChatroomStat` Mutation is of type `IncrementChatroomStatData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface IncrementChatroomStatData {
  _execute?: number | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `IncrementChatroomStat`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, IncrementChatroomStatVariables } from '@kismoportal-dataconnect/generated';
import { useIncrementChatroomStat } from '@kismoportal-dataconnect/generated/react'

export default function IncrementChatroomStatComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useIncrementChatroomStat();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useIncrementChatroomStat(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useIncrementChatroomStat(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useIncrementChatroomStat(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useIncrementChatroomStat` Mutation requires an argument of type `IncrementChatroomStatVariables`:
  const incrementChatroomStatVars: IncrementChatroomStatVariables = {
    chatroomId: ..., 
    label: ..., 
    delta: ..., 
    subtextOnCreate: ..., // optional
  };
  mutation.mutate(incrementChatroomStatVars);
  // Variables can be defined inline as well.
  mutation.mutate({ chatroomId: ..., label: ..., delta: ..., subtextOnCreate: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(incrementChatroomStatVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data._execute);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreatePlayroomSession
You can execute the `CreatePlayroomSession` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreatePlayroomSession(options?: useDataConnectMutationOptions<CreatePlayroomSessionData, FirebaseError, CreatePlayroomSessionVariables>): UseDataConnectMutationResult<CreatePlayroomSessionData, CreatePlayroomSessionVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreatePlayroomSession(dc: DataConnect, options?: useDataConnectMutationOptions<CreatePlayroomSessionData, FirebaseError, CreatePlayroomSessionVariables>): UseDataConnectMutationResult<CreatePlayroomSessionData, CreatePlayroomSessionVariables>;
```

### Variables
The `CreatePlayroomSession` Mutation requires an argument of type `CreatePlayroomSessionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreatePlayroomSessionVariables {
  playroomSessionId: string;
  gameName: string;
  openedByUserId: UUIDString;
  jwtTokenCreator: string;
}
```
### Return Type
Recall that calling the `CreatePlayroomSession` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreatePlayroomSession` Mutation is of type `CreatePlayroomSessionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreatePlayroomSessionData {
  playroomSession_insert: PlayroomSession_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreatePlayroomSession`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreatePlayroomSessionVariables } from '@kismoportal-dataconnect/generated';
import { useCreatePlayroomSession } from '@kismoportal-dataconnect/generated/react'

export default function CreatePlayroomSessionComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreatePlayroomSession();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreatePlayroomSession(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreatePlayroomSession(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreatePlayroomSession(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreatePlayroomSession` Mutation requires an argument of type `CreatePlayroomSessionVariables`:
  const createPlayroomSessionVars: CreatePlayroomSessionVariables = {
    playroomSessionId: ..., 
    gameName: ..., 
    openedByUserId: ..., 
    jwtTokenCreator: ..., 
  };
  mutation.mutate(createPlayroomSessionVars);
  // Variables can be defined inline as well.
  mutation.mutate({ playroomSessionId: ..., gameName: ..., openedByUserId: ..., jwtTokenCreator: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createPlayroomSessionVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.playroomSession_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdatePlayroomSessionDetails
You can execute the `UpdatePlayroomSessionDetails` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdatePlayroomSessionDetails(options?: useDataConnectMutationOptions<UpdatePlayroomSessionDetailsData, FirebaseError, UpdatePlayroomSessionDetailsVariables>): UseDataConnectMutationResult<UpdatePlayroomSessionDetailsData, UpdatePlayroomSessionDetailsVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdatePlayroomSessionDetails(dc: DataConnect, options?: useDataConnectMutationOptions<UpdatePlayroomSessionDetailsData, FirebaseError, UpdatePlayroomSessionDetailsVariables>): UseDataConnectMutationResult<UpdatePlayroomSessionDetailsData, UpdatePlayroomSessionDetailsVariables>;
```

### Variables
The `UpdatePlayroomSessionDetails` Mutation requires an argument of type `UpdatePlayroomSessionDetailsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdatePlayroomSessionDetailsVariables {
  id: UUIDString;
  invitedUserId?: UUIDString | null;
  invitedUserJoinedAt?: TimestampString | null;
  jwtTokenInvitedUser?: string | null;
  jwtTokenSpectator?: string | null;
}
```
### Return Type
Recall that calling the `UpdatePlayroomSessionDetails` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdatePlayroomSessionDetails` Mutation is of type `UpdatePlayroomSessionDetailsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdatePlayroomSessionDetailsData {
  playroomSession_update?: PlayroomSession_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdatePlayroomSessionDetails`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdatePlayroomSessionDetailsVariables } from '@kismoportal-dataconnect/generated';
import { useUpdatePlayroomSessionDetails } from '@kismoportal-dataconnect/generated/react'

export default function UpdatePlayroomSessionDetailsComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdatePlayroomSessionDetails();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdatePlayroomSessionDetails(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdatePlayroomSessionDetails(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdatePlayroomSessionDetails(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdatePlayroomSessionDetails` Mutation requires an argument of type `UpdatePlayroomSessionDetailsVariables`:
  const updatePlayroomSessionDetailsVars: UpdatePlayroomSessionDetailsVariables = {
    id: ..., 
    invitedUserId: ..., // optional
    invitedUserJoinedAt: ..., // optional
    jwtTokenInvitedUser: ..., // optional
    jwtTokenSpectator: ..., // optional
  };
  mutation.mutate(updatePlayroomSessionDetailsVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., invitedUserId: ..., invitedUserJoinedAt: ..., jwtTokenInvitedUser: ..., jwtTokenSpectator: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updatePlayroomSessionDetailsVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.playroomSession_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdatePlayroomInvitedUserJoinedAt
You can execute the `UpdatePlayroomInvitedUserJoinedAt` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdatePlayroomInvitedUserJoinedAt(options?: useDataConnectMutationOptions<UpdatePlayroomInvitedUserJoinedAtData, FirebaseError, UpdatePlayroomInvitedUserJoinedAtVariables>): UseDataConnectMutationResult<UpdatePlayroomInvitedUserJoinedAtData, UpdatePlayroomInvitedUserJoinedAtVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdatePlayroomInvitedUserJoinedAt(dc: DataConnect, options?: useDataConnectMutationOptions<UpdatePlayroomInvitedUserJoinedAtData, FirebaseError, UpdatePlayroomInvitedUserJoinedAtVariables>): UseDataConnectMutationResult<UpdatePlayroomInvitedUserJoinedAtData, UpdatePlayroomInvitedUserJoinedAtVariables>;
```

### Variables
The `UpdatePlayroomInvitedUserJoinedAt` Mutation requires an argument of type `UpdatePlayroomInvitedUserJoinedAtVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdatePlayroomInvitedUserJoinedAtVariables {
  id: UUIDString;
  invitedUserJoinedAt: TimestampString;
}
```
### Return Type
Recall that calling the `UpdatePlayroomInvitedUserJoinedAt` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdatePlayroomInvitedUserJoinedAt` Mutation is of type `UpdatePlayroomInvitedUserJoinedAtData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdatePlayroomInvitedUserJoinedAtData {
  playroomSession_update?: PlayroomSession_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdatePlayroomInvitedUserJoinedAt`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdatePlayroomInvitedUserJoinedAtVariables } from '@kismoportal-dataconnect/generated';
import { useUpdatePlayroomInvitedUserJoinedAt } from '@kismoportal-dataconnect/generated/react'

export default function UpdatePlayroomInvitedUserJoinedAtComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdatePlayroomInvitedUserJoinedAt();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdatePlayroomInvitedUserJoinedAt(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdatePlayroomInvitedUserJoinedAt(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdatePlayroomInvitedUserJoinedAt(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdatePlayroomInvitedUserJoinedAt` Mutation requires an argument of type `UpdatePlayroomInvitedUserJoinedAtVariables`:
  const updatePlayroomInvitedUserJoinedAtVars: UpdatePlayroomInvitedUserJoinedAtVariables = {
    id: ..., 
    invitedUserJoinedAt: ..., 
  };
  mutation.mutate(updatePlayroomInvitedUserJoinedAtVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., invitedUserJoinedAt: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updatePlayroomInvitedUserJoinedAtVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.playroomSession_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeletePlayroomInvitedUserJoinedAt
You can execute the `DeletePlayroomInvitedUserJoinedAt` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeletePlayroomInvitedUserJoinedAt(options?: useDataConnectMutationOptions<DeletePlayroomInvitedUserJoinedAtData, FirebaseError, DeletePlayroomInvitedUserJoinedAtVariables>): UseDataConnectMutationResult<DeletePlayroomInvitedUserJoinedAtData, DeletePlayroomInvitedUserJoinedAtVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeletePlayroomInvitedUserJoinedAt(dc: DataConnect, options?: useDataConnectMutationOptions<DeletePlayroomInvitedUserJoinedAtData, FirebaseError, DeletePlayroomInvitedUserJoinedAtVariables>): UseDataConnectMutationResult<DeletePlayroomInvitedUserJoinedAtData, DeletePlayroomInvitedUserJoinedAtVariables>;
```

### Variables
The `DeletePlayroomInvitedUserJoinedAt` Mutation requires an argument of type `DeletePlayroomInvitedUserJoinedAtVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeletePlayroomInvitedUserJoinedAtVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `DeletePlayroomInvitedUserJoinedAt` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeletePlayroomInvitedUserJoinedAt` Mutation is of type `DeletePlayroomInvitedUserJoinedAtData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeletePlayroomInvitedUserJoinedAtData {
  playroomSession_update?: PlayroomSession_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeletePlayroomInvitedUserJoinedAt`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeletePlayroomInvitedUserJoinedAtVariables } from '@kismoportal-dataconnect/generated';
import { useDeletePlayroomInvitedUserJoinedAt } from '@kismoportal-dataconnect/generated/react'

export default function DeletePlayroomInvitedUserJoinedAtComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeletePlayroomInvitedUserJoinedAt();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeletePlayroomInvitedUserJoinedAt(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeletePlayroomInvitedUserJoinedAt(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeletePlayroomInvitedUserJoinedAt(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeletePlayroomInvitedUserJoinedAt` Mutation requires an argument of type `DeletePlayroomInvitedUserJoinedAtVariables`:
  const deletePlayroomInvitedUserJoinedAtVars: DeletePlayroomInvitedUserJoinedAtVariables = {
    id: ..., 
  };
  mutation.mutate(deletePlayroomInvitedUserJoinedAtVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deletePlayroomInvitedUserJoinedAtVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.playroomSession_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdatePlayroomCreatorUserHeartbeat
You can execute the `UpdatePlayroomCreatorUserHeartbeat` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdatePlayroomCreatorUserHeartbeat(options?: useDataConnectMutationOptions<UpdatePlayroomCreatorUserHeartbeatData, FirebaseError, UpdatePlayroomCreatorUserHeartbeatVariables>): UseDataConnectMutationResult<UpdatePlayroomCreatorUserHeartbeatData, UpdatePlayroomCreatorUserHeartbeatVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdatePlayroomCreatorUserHeartbeat(dc: DataConnect, options?: useDataConnectMutationOptions<UpdatePlayroomCreatorUserHeartbeatData, FirebaseError, UpdatePlayroomCreatorUserHeartbeatVariables>): UseDataConnectMutationResult<UpdatePlayroomCreatorUserHeartbeatData, UpdatePlayroomCreatorUserHeartbeatVariables>;
```

### Variables
The `UpdatePlayroomCreatorUserHeartbeat` Mutation requires an argument of type `UpdatePlayroomCreatorUserHeartbeatVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdatePlayroomCreatorUserHeartbeatVariables {
  id: UUIDString;
  creatorUserHeartbeat: TimestampString;
}
```
### Return Type
Recall that calling the `UpdatePlayroomCreatorUserHeartbeat` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdatePlayroomCreatorUserHeartbeat` Mutation is of type `UpdatePlayroomCreatorUserHeartbeatData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdatePlayroomCreatorUserHeartbeatData {
  playroomSession_update?: PlayroomSession_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdatePlayroomCreatorUserHeartbeat`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdatePlayroomCreatorUserHeartbeatVariables } from '@kismoportal-dataconnect/generated';
import { useUpdatePlayroomCreatorUserHeartbeat } from '@kismoportal-dataconnect/generated/react'

export default function UpdatePlayroomCreatorUserHeartbeatComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdatePlayroomCreatorUserHeartbeat();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdatePlayroomCreatorUserHeartbeat(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdatePlayroomCreatorUserHeartbeat(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdatePlayroomCreatorUserHeartbeat(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdatePlayroomCreatorUserHeartbeat` Mutation requires an argument of type `UpdatePlayroomCreatorUserHeartbeatVariables`:
  const updatePlayroomCreatorUserHeartbeatVars: UpdatePlayroomCreatorUserHeartbeatVariables = {
    id: ..., 
    creatorUserHeartbeat: ..., 
  };
  mutation.mutate(updatePlayroomCreatorUserHeartbeatVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., creatorUserHeartbeat: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updatePlayroomCreatorUserHeartbeatVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.playroomSession_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeletePlayroomCreatorUserHeartbeat
You can execute the `DeletePlayroomCreatorUserHeartbeat` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeletePlayroomCreatorUserHeartbeat(options?: useDataConnectMutationOptions<DeletePlayroomCreatorUserHeartbeatData, FirebaseError, DeletePlayroomCreatorUserHeartbeatVariables>): UseDataConnectMutationResult<DeletePlayroomCreatorUserHeartbeatData, DeletePlayroomCreatorUserHeartbeatVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeletePlayroomCreatorUserHeartbeat(dc: DataConnect, options?: useDataConnectMutationOptions<DeletePlayroomCreatorUserHeartbeatData, FirebaseError, DeletePlayroomCreatorUserHeartbeatVariables>): UseDataConnectMutationResult<DeletePlayroomCreatorUserHeartbeatData, DeletePlayroomCreatorUserHeartbeatVariables>;
```

### Variables
The `DeletePlayroomCreatorUserHeartbeat` Mutation requires an argument of type `DeletePlayroomCreatorUserHeartbeatVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeletePlayroomCreatorUserHeartbeatVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `DeletePlayroomCreatorUserHeartbeat` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeletePlayroomCreatorUserHeartbeat` Mutation is of type `DeletePlayroomCreatorUserHeartbeatData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeletePlayroomCreatorUserHeartbeatData {
  playroomSession_update?: PlayroomSession_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeletePlayroomCreatorUserHeartbeat`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeletePlayroomCreatorUserHeartbeatVariables } from '@kismoportal-dataconnect/generated';
import { useDeletePlayroomCreatorUserHeartbeat } from '@kismoportal-dataconnect/generated/react'

export default function DeletePlayroomCreatorUserHeartbeatComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeletePlayroomCreatorUserHeartbeat();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeletePlayroomCreatorUserHeartbeat(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeletePlayroomCreatorUserHeartbeat(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeletePlayroomCreatorUserHeartbeat(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeletePlayroomCreatorUserHeartbeat` Mutation requires an argument of type `DeletePlayroomCreatorUserHeartbeatVariables`:
  const deletePlayroomCreatorUserHeartbeatVars: DeletePlayroomCreatorUserHeartbeatVariables = {
    id: ..., 
  };
  mutation.mutate(deletePlayroomCreatorUserHeartbeatVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deletePlayroomCreatorUserHeartbeatVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.playroomSession_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdatePlayroomInvitedUserHeartbeat
You can execute the `UpdatePlayroomInvitedUserHeartbeat` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdatePlayroomInvitedUserHeartbeat(options?: useDataConnectMutationOptions<UpdatePlayroomInvitedUserHeartbeatData, FirebaseError, UpdatePlayroomInvitedUserHeartbeatVariables>): UseDataConnectMutationResult<UpdatePlayroomInvitedUserHeartbeatData, UpdatePlayroomInvitedUserHeartbeatVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdatePlayroomInvitedUserHeartbeat(dc: DataConnect, options?: useDataConnectMutationOptions<UpdatePlayroomInvitedUserHeartbeatData, FirebaseError, UpdatePlayroomInvitedUserHeartbeatVariables>): UseDataConnectMutationResult<UpdatePlayroomInvitedUserHeartbeatData, UpdatePlayroomInvitedUserHeartbeatVariables>;
```

### Variables
The `UpdatePlayroomInvitedUserHeartbeat` Mutation requires an argument of type `UpdatePlayroomInvitedUserHeartbeatVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdatePlayroomInvitedUserHeartbeatVariables {
  id: UUIDString;
  invitedUserHeartbeat: TimestampString;
}
```
### Return Type
Recall that calling the `UpdatePlayroomInvitedUserHeartbeat` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdatePlayroomInvitedUserHeartbeat` Mutation is of type `UpdatePlayroomInvitedUserHeartbeatData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdatePlayroomInvitedUserHeartbeatData {
  playroomSession_update?: PlayroomSession_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdatePlayroomInvitedUserHeartbeat`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdatePlayroomInvitedUserHeartbeatVariables } from '@kismoportal-dataconnect/generated';
import { useUpdatePlayroomInvitedUserHeartbeat } from '@kismoportal-dataconnect/generated/react'

export default function UpdatePlayroomInvitedUserHeartbeatComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdatePlayroomInvitedUserHeartbeat();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdatePlayroomInvitedUserHeartbeat(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdatePlayroomInvitedUserHeartbeat(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdatePlayroomInvitedUserHeartbeat(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdatePlayroomInvitedUserHeartbeat` Mutation requires an argument of type `UpdatePlayroomInvitedUserHeartbeatVariables`:
  const updatePlayroomInvitedUserHeartbeatVars: UpdatePlayroomInvitedUserHeartbeatVariables = {
    id: ..., 
    invitedUserHeartbeat: ..., 
  };
  mutation.mutate(updatePlayroomInvitedUserHeartbeatVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., invitedUserHeartbeat: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updatePlayroomInvitedUserHeartbeatVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.playroomSession_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeletePlayroomInvitedUserHeartbeat
You can execute the `DeletePlayroomInvitedUserHeartbeat` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeletePlayroomInvitedUserHeartbeat(options?: useDataConnectMutationOptions<DeletePlayroomInvitedUserHeartbeatData, FirebaseError, DeletePlayroomInvitedUserHeartbeatVariables>): UseDataConnectMutationResult<DeletePlayroomInvitedUserHeartbeatData, DeletePlayroomInvitedUserHeartbeatVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeletePlayroomInvitedUserHeartbeat(dc: DataConnect, options?: useDataConnectMutationOptions<DeletePlayroomInvitedUserHeartbeatData, FirebaseError, DeletePlayroomInvitedUserHeartbeatVariables>): UseDataConnectMutationResult<DeletePlayroomInvitedUserHeartbeatData, DeletePlayroomInvitedUserHeartbeatVariables>;
```

### Variables
The `DeletePlayroomInvitedUserHeartbeat` Mutation requires an argument of type `DeletePlayroomInvitedUserHeartbeatVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeletePlayroomInvitedUserHeartbeatVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `DeletePlayroomInvitedUserHeartbeat` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeletePlayroomInvitedUserHeartbeat` Mutation is of type `DeletePlayroomInvitedUserHeartbeatData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeletePlayroomInvitedUserHeartbeatData {
  playroomSession_update?: PlayroomSession_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeletePlayroomInvitedUserHeartbeat`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeletePlayroomInvitedUserHeartbeatVariables } from '@kismoportal-dataconnect/generated';
import { useDeletePlayroomInvitedUserHeartbeat } from '@kismoportal-dataconnect/generated/react'

export default function DeletePlayroomInvitedUserHeartbeatComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeletePlayroomInvitedUserHeartbeat();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeletePlayroomInvitedUserHeartbeat(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeletePlayroomInvitedUserHeartbeat(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeletePlayroomInvitedUserHeartbeat(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeletePlayroomInvitedUserHeartbeat` Mutation requires an argument of type `DeletePlayroomInvitedUserHeartbeatVariables`:
  const deletePlayroomInvitedUserHeartbeatVars: DeletePlayroomInvitedUserHeartbeatVariables = {
    id: ..., 
  };
  mutation.mutate(deletePlayroomInvitedUserHeartbeatVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deletePlayroomInvitedUserHeartbeatVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.playroomSession_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ClosePlayroomSession
You can execute the `ClosePlayroomSession` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useClosePlayroomSession(options?: useDataConnectMutationOptions<ClosePlayroomSessionData, FirebaseError, ClosePlayroomSessionVariables>): UseDataConnectMutationResult<ClosePlayroomSessionData, ClosePlayroomSessionVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useClosePlayroomSession(dc: DataConnect, options?: useDataConnectMutationOptions<ClosePlayroomSessionData, FirebaseError, ClosePlayroomSessionVariables>): UseDataConnectMutationResult<ClosePlayroomSessionData, ClosePlayroomSessionVariables>;
```

### Variables
The `ClosePlayroomSession` Mutation requires an argument of type `ClosePlayroomSessionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ClosePlayroomSessionVariables {
  id: UUIDString;
  closedAt: TimestampString;
}
```
### Return Type
Recall that calling the `ClosePlayroomSession` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `ClosePlayroomSession` Mutation is of type `ClosePlayroomSessionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ClosePlayroomSessionData {
  playroomSession_updateMany: number;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `ClosePlayroomSession`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ClosePlayroomSessionVariables } from '@kismoportal-dataconnect/generated';
import { useClosePlayroomSession } from '@kismoportal-dataconnect/generated/react'

export default function ClosePlayroomSessionComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useClosePlayroomSession();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useClosePlayroomSession(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useClosePlayroomSession(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useClosePlayroomSession(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useClosePlayroomSession` Mutation requires an argument of type `ClosePlayroomSessionVariables`:
  const closePlayroomSessionVars: ClosePlayroomSessionVariables = {
    id: ..., 
    closedAt: ..., 
  };
  mutation.mutate(closePlayroomSessionVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., closedAt: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(closePlayroomSessionVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.playroomSession_updateMany);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeletePlayroomSession
You can execute the `DeletePlayroomSession` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeletePlayroomSession(options?: useDataConnectMutationOptions<DeletePlayroomSessionData, FirebaseError, DeletePlayroomSessionVariables>): UseDataConnectMutationResult<DeletePlayroomSessionData, DeletePlayroomSessionVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeletePlayroomSession(dc: DataConnect, options?: useDataConnectMutationOptions<DeletePlayroomSessionData, FirebaseError, DeletePlayroomSessionVariables>): UseDataConnectMutationResult<DeletePlayroomSessionData, DeletePlayroomSessionVariables>;
```

### Variables
The `DeletePlayroomSession` Mutation requires an argument of type `DeletePlayroomSessionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeletePlayroomSessionVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `DeletePlayroomSession` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeletePlayroomSession` Mutation is of type `DeletePlayroomSessionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeletePlayroomSessionData {
  playroomSession_delete?: PlayroomSession_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeletePlayroomSession`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeletePlayroomSessionVariables } from '@kismoportal-dataconnect/generated';
import { useDeletePlayroomSession } from '@kismoportal-dataconnect/generated/react'

export default function DeletePlayroomSessionComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeletePlayroomSession();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeletePlayroomSession(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeletePlayroomSession(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeletePlayroomSession(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeletePlayroomSession` Mutation requires an argument of type `DeletePlayroomSessionVariables`:
  const deletePlayroomSessionVars: DeletePlayroomSessionVariables = {
    id: ..., 
  };
  mutation.mutate(deletePlayroomSessionVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deletePlayroomSessionVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.playroomSession_delete);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

