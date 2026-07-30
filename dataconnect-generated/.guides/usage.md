# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useCreateUser, useCreateChatroom, useJoinChatroom, useLeaveChatroom, useSendMessage, useUpdateStatus, useUpdateUserImage, useUpsertFriendWith, useSendFriendWithRequest, useAcceptFriendWithRequest } from '@kismoportal-dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useCreateUser(createUserVars);

const { data, isPending, isSuccess, isError, error } = useCreateChatroom(createChatroomVars);

const { data, isPending, isSuccess, isError, error } = useJoinChatroom(joinChatroomVars);

const { data, isPending, isSuccess, isError, error } = useLeaveChatroom(leaveChatroomVars);

const { data, isPending, isSuccess, isError, error } = useSendMessage(sendMessageVars);

const { data, isPending, isSuccess, isError, error } = useUpdateStatus(updateStatusVars);

const { data, isPending, isSuccess, isError, error } = useUpdateUserImage(updateUserImageVars);

const { data, isPending, isSuccess, isError, error } = useUpsertFriendWith(upsertFriendWithVars);

const { data, isPending, isSuccess, isError, error } = useSendFriendWithRequest(sendFriendWithRequestVars);

const { data, isPending, isSuccess, isError, error } = useAcceptFriendWithRequest(acceptFriendWithRequestVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createUser, createChatroom, joinChatroom, leaveChatroom, sendMessage, updateStatus, updateUserImage, upsertFriendWith, sendFriendWithRequest, acceptFriendWithRequest } from '@kismoportal-dataconnect/generated';


// Operation CreateUser:  For variables, look at type CreateUserVars in ../index.d.ts
const { data } = await CreateUser(dataConnect, createUserVars);

// Operation CreateChatroom:  For variables, look at type CreateChatroomVars in ../index.d.ts
const { data } = await CreateChatroom(dataConnect, createChatroomVars);

// Operation JoinChatroom:  For variables, look at type JoinChatroomVars in ../index.d.ts
const { data } = await JoinChatroom(dataConnect, joinChatroomVars);

// Operation LeaveChatroom:  For variables, look at type LeaveChatroomVars in ../index.d.ts
const { data } = await LeaveChatroom(dataConnect, leaveChatroomVars);

// Operation SendMessage:  For variables, look at type SendMessageVars in ../index.d.ts
const { data } = await SendMessage(dataConnect, sendMessageVars);

// Operation UpdateStatus:  For variables, look at type UpdateStatusVars in ../index.d.ts
const { data } = await UpdateStatus(dataConnect, updateStatusVars);

// Operation UpdateUserImage:  For variables, look at type UpdateUserImageVars in ../index.d.ts
const { data } = await UpdateUserImage(dataConnect, updateUserImageVars);

// Operation UpsertFriendWith:  For variables, look at type UpsertFriendWithVars in ../index.d.ts
const { data } = await UpsertFriendWith(dataConnect, upsertFriendWithVars);

// Operation SendFriendWithRequest:  For variables, look at type SendFriendWithRequestVars in ../index.d.ts
const { data } = await SendFriendWithRequest(dataConnect, sendFriendWithRequestVars);

// Operation AcceptFriendWithRequest:  For variables, look at type AcceptFriendWithRequestVars in ../index.d.ts
const { data } = await AcceptFriendWithRequest(dataConnect, acceptFriendWithRequestVars);


```