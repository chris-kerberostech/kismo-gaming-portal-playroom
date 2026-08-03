import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export enum NotificationType {
  SYSTEM_CHATROOM_CREATED = "SYSTEM_CHATROOM_CREATED",
  SYSTEM_CHATROOM_JOINED = "SYSTEM_CHATROOM_JOINED",
  USER_MESSAGE_RECEIVED = "USER_MESSAGE_RECEIVED",
  USER_FRIEND_REQUEST_SENT = "USER_FRIEND_REQUEST_SENT",
  USER_FRIEND_REQUEST_ACCEPTED = "USER_FRIEND_REQUEST_ACCEPTED",
  USER_JOIN_GAME_INVITE = "USER_JOIN_GAME_INVITE",
  USER_JOIN_GAME_ACCEPTED = "USER_JOIN_GAME_ACCEPTED",
  USER_SPECTATE_GAME_INVITE = "USER_SPECTATE_GAME_INVITE",
  USER_SPECTATE_GAME_ACCEPTED = "USER_SPECTATE_GAME_ACCEPTED",
};



export interface AcceptFriendWithRequestBidirectionalData {
  _execute?: number | null;
}

export interface AcceptFriendWithRequestBidirectionalVariables {
  requesterUserId: UUIDString;
  accepterUserId: UUIDString;
  acceptedAt: TimestampString;
}

export interface AcceptFriendWithRequestData {
  friendWith_update?: FriendWith_Key | null;
}

export interface AcceptFriendWithRequestVariables {
  userId: UUIDString;
  friendWithUserId: UUIDString;
  acceptedAt: TimestampString;
}

export interface ChatroomMember_Key {
  userId: UUIDString;
  chatroomId: UUIDString;
  __typename?: 'ChatroomMember_Key';
}

export interface ChatroomStat_Key {
  chatroomId: UUIDString;
  label: string;
  __typename?: 'ChatroomStat_Key';
}

export interface Chatroom_Key {
  id: UUIDString;
  __typename?: 'Chatroom_Key';
}

export interface City_Key {
  geonameid: Int64String;
  __typename?: 'City_Key';
}

export interface CloseChatroomSessionData {
  userChatroomSession_updateMany: number;
}

export interface CloseChatroomSessionVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
  closedAt: TimestampString;
}

export interface ClosePlayroomSessionData {
  playroomSession_updateMany: number;
}

export interface ClosePlayroomSessionVariables {
  id: UUIDString;
  closedAt: TimestampString;
}

export interface CountUnreadNotificationsData {
  unreadNotifications?: unknown | null;
}

export interface CountUnreadNotificationsVariables {
  recipientUserId: UUIDString;
}

export interface CreateChatroomData {
  chatroom_insert: Chatroom_Key;
}

export interface CreateChatroomVariables {
  name: string;
  isPublic: boolean;
  ownerId: UUIDString;
  cityId?: Int64String | null;
  imageUrl?: string | null;
  description?: string | null;
  imageAtribution?: string | null;
}

export interface CreateNotificationData {
  userNotification_insert: UserNotification_Key;
}

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

export interface CreatePlayroomSessionData {
  playroomSession_insert: PlayroomSession_Key;
}

export interface CreatePlayroomSessionVariables {
  playroomSessionId: string;
  gameName: string;
  openedByUserId: UUIDString;
  jwtTokenCreator: string;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  id: UUIDString;
  name: string;
  imageUrl: string;
}

export interface DeleteChatroomStatData {
  chatroomStat_delete?: ChatroomStat_Key | null;
}

export interface DeleteChatroomStatVariables {
  chatroomId: UUIDString;
  label: string;
}

export interface DeleteFriendWithData {
  friendWith_delete?: FriendWith_Key | null;
}

export interface DeleteFriendWithVariables {
  userId: UUIDString;
  friendWithUserId: UUIDString;
}

export interface DeletePlayroomCreatorUserHeartbeatData {
  playroomSession_update?: PlayroomSession_Key | null;
}

export interface DeletePlayroomCreatorUserHeartbeatVariables {
  id: UUIDString;
}

export interface DeletePlayroomInvitedUserHeartbeatData {
  playroomSession_update?: PlayroomSession_Key | null;
}

export interface DeletePlayroomInvitedUserHeartbeatVariables {
  id: UUIDString;
}

export interface DeletePlayroomInvitedUserJoinedAtData {
  playroomSession_update?: PlayroomSession_Key | null;
}

export interface DeletePlayroomInvitedUserJoinedAtVariables {
  id: UUIDString;
}

export interface DeletePlayroomSessionData {
  playroomSession_delete?: PlayroomSession_Key | null;
}

export interface DeletePlayroomSessionVariables {
  id: UUIDString;
}

export interface FetchPlayroomCreatorTokenData {
  playroomSession?: {
    jwtTokenCreator: string;
  };
}

export interface FetchPlayroomCreatorTokenVariables {
  id: UUIDString;
}

export interface FetchPlayroomCreatorUserHeartbeatData {
  playroomSession?: {
    creatorUserHeartbeat?: TimestampString | null;
  };
}

export interface FetchPlayroomCreatorUserHeartbeatVariables {
  id: UUIDString;
}

export interface FetchPlayroomInvitedUserHeartbeatData {
  playroomSession?: {
    invitedUserHeartbeat?: TimestampString | null;
  };
}

export interface FetchPlayroomInvitedUserHeartbeatVariables {
  id: UUIDString;
}

export interface FetchPlayroomInvitedUserJoinedAtData {
  playroomSession?: {
    invitedUserJoinedAt?: TimestampString | null;
  };
}

export interface FetchPlayroomInvitedUserJoinedAtVariables {
  id: UUIDString;
}

export interface FetchPlayroomInvitedUserTokenData {
  playroomSession?: {
    jwtTokenInvitedUser?: string | null;
  };
}

export interface FetchPlayroomInvitedUserTokenVariables {
  id: UUIDString;
}

export interface FetchPlayroomParticipantTokenData {
  playroomSession?: {
    jwtTokenSpectator?: string | null;
  };
}

export interface FetchPlayroomParticipantTokenVariables {
  id: UUIDString;
}

export interface FetchPlayroomParticipantUserIdsData {
  playroomSession?: {
    openedByUserId: UUIDString;
    invitedUserId?: UUIDString | null;
  };
}

export interface FetchPlayroomParticipantUserIdsVariables {
  id: UUIDString;
}

export interface FriendWith_Key {
  userId: UUIDString;
  friendWithUserId: UUIDString;
  __typename?: 'FriendWith_Key';
}

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

export interface GetActivePlayroomSessionByPlayroomSessionIdVariables {
  playroomSessionId: string;
}

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

export interface GetChatroomMessagesVariables {
  chatroomId: UUIDString;
  limit?: number | null;
  beforeTimestamp?: TimestampString | null;
  beforeId?: UUIDString | null;
}

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

export interface GetFriendWithVariables {
  userId: UUIDString;
  friendWithUserId: UUIDString;
}

export interface GetGlobalStatData {
  globalStat?: {
    label: string;
    value: Int64String;
    subtext?: string | null;
  } & GlobalStat_Key;
}

export interface GetGlobalStatVariables {
  label: string;
}

export interface GetGlobalStatsData {
  globalStats: ({
    label: string;
    value: Int64String;
    subtext?: string | null;
    updatedAt?: TimestampString | null;
  } & GlobalStat_Key)[];
}

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

export interface GetPlayroomSessionByPlayroomSessionIdVariables {
  playroomSessionId: string;
}

export interface GetUserData {
  user?: {
    id: UUIDString;
    name: string;
    imageUrl: string;
    onlineStatus?: boolean | null;
    lastSeenAt?: TimestampString | null;
  } & User_Key;
}

export interface GetUserVariables {
  id: UUIDString;
}

export interface GlobalStat_Key {
  label: string;
  __typename?: 'GlobalStat_Key';
}

export interface HeartbeatChatroomSessionData {
  userChatroomSession_updateMany: number;
}

export interface HeartbeatChatroomSessionVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
  heartbeatAt: TimestampString;
}

export interface IncrementChatroomStatData {
  _execute?: number | null;
}

export interface IncrementChatroomStatVariables {
  chatroomId: UUIDString;
  label: string;
  delta: Int64String;
  subtextOnCreate?: string | null;
}

export interface InitializeChatroomStatsDefaultsData {
  _execute?: number | null;
}

export interface InitializeChatroomStatsDefaultsVariables {
  chatroomId: UUIDString;
}

export interface IsMemberData {
  chatroomMember?: {
    joinedAt?: TimestampString | null;
  };
}

export interface IsMemberVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
}

export interface JoinChatroomData {
  chatroomMember_insert: ChatroomMember_Key;
}

export interface JoinChatroomVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
}

export interface LeaveChatroomData {
  chatroomMember_delete?: ChatroomMember_Key | null;
}

export interface LeaveChatroomVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
}

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

export interface ListAcceptedFriendConnectionsVariables {
  userId: UUIDString;
  limit?: number | null;
  offset?: number | null;
}

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

export interface ListActivePlayroomSessionsByUserAndGameVariables {
  userId: UUIDString;
  gameName: string;
}

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

export interface ListActiveSessionsByUserVariables {
  userId: UUIDString;
}

export interface ListActiveSessionsGlobalData {
  userChatroomSessions: ({
    id: UUIDString;
    userId: UUIDString;
    chatroomId: UUIDString;
    openedAt: TimestampString;
    lastHeartbeatAt?: TimestampString | null;
  } & UserChatroomSession_Key)[];
}

export interface ListActiveSessionsGlobalVariables {
  limit?: number | null;
  offset?: number | null;
}

export interface ListChatroomStatsByChatroomIdsData {
  chatroomStatsByIds: ({
    chatroomId: UUIDString;
    label: string;
    value: Int64String;
    subtext?: string | null;
    updatedAt?: TimestampString | null;
  } & ChatroomStat_Key)[];
}

export interface ListChatroomStatsByChatroomIdsVariables {
  chatroomIds: UUIDString[];
  labels?: string[] | null;
}

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

export interface ListChatroomsByCityVariables {
  geonameid: Int64String;
}

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

export interface ListChatroomsByOwnerVariables {
  ownerId: UUIDString;
}

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

export interface ListFriendWithByUserVariables {
  userId: UUIDString;
  limit?: number | null;
  offset?: number | null;
}

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

export interface ListMyChatroomsVariables {
  userId: UUIDString;
}

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

export interface ListNotificationsByRecipientVariables {
  recipientUserId: UUIDString;
  limit?: number | null;
  offset?: number | null;
}

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

export interface ListPendingFriendRequestsReceivedVariables {
  friendWithUserId: UUIDString;
  limit?: number | null;
  offset?: number | null;
}

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

export interface ListPublicChatroomsVariables {
  limit?: number | null;
  offset?: number | null;
}

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

export interface ListRecentVisitedChatroomsVariables {
  userId: UUIDString;
  limit?: number | null;
}

export interface MarkAllNotificationsReadData {
  userNotification_updateMany: number;
}

export interface MarkAllNotificationsReadVariables {
  recipientUserId: UUIDString;
  readAt: TimestampString;
}

export interface MarkNotificationReadData {
  userNotification_update?: UserNotification_Key | null;
}

export interface MarkNotificationReadVariables {
  notificationId: UUIDString;
  readAt: TimestampString;
}

export interface Message_Key {
  id: UUIDString;
  __typename?: 'Message_Key';
}

export interface OpenChatroomSessionData {
  userChatroomSession_upsert: UserChatroomSession_Key;
}

export interface OpenChatroomSessionVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
  openedAt: TimestampString;
}

export interface PlayroomSession_Key {
  id: UUIDString;
  __typename?: 'PlayroomSession_Key';
}

export interface RecordChatroomVisitData {
  userChatroomVisit_upsert: UserChatroomVisit_Key;
}

export interface RecordChatroomVisitVariables {
  userId: UUIDString;
  chatroomId: UUIDString;
  visitedAt: TimestampString;
}

export interface RejectFriendWithRequestBidirectionalData {
  _execute?: number | null;
}

export interface RejectFriendWithRequestBidirectionalVariables {
  userAId: UUIDString;
  userBId: UUIDString;
}

export interface SearchCitiesData {
  cities: ({
    geonameid: Int64String;
    name: string;
    country: string;
    subcountry?: string | null;
  } & City_Key)[];
}

export interface SearchCitiesVariables {
  pattern: string;
}

export interface SendFriendWithRequestData {
  friendWith_upsert: FriendWith_Key;
}

export interface SendFriendWithRequestVariables {
  userId: UUIDString;
  friendWithUserId: UUIDString;
  sentAt: TimestampString;
}

export interface SendMessageData {
  message_insert: Message_Key;
}

export interface SendMessageVariables {
  chatroomId: UUIDString;
  senderId: UUIDString;
  text?: string | null;
  imageUrl?: string | null;
}

export interface TrimOldVisitsData {
  _execute?: number | null;
}

export interface TrimOldVisitsVariables {
  userId: UUIDString;
  keepLatest?: number | null;
}

export interface UpdateChatroomDetailsData {
  chatroom_update?: Chatroom_Key | null;
}

export interface UpdateChatroomDetailsVariables {
  id: UUIDString;
  imageUrl?: string | null;
  description?: string | null;
  imageAtribution?: string | null;
}

export interface UpdateCityNameData {
  city_update?: City_Key | null;
}

export interface UpdateCityNameVariables {
  geonameid: Int64String;
  name: string;
}

export interface UpdatePlayroomCreatorUserHeartbeatData {
  playroomSession_update?: PlayroomSession_Key | null;
}

export interface UpdatePlayroomCreatorUserHeartbeatVariables {
  id: UUIDString;
  creatorUserHeartbeat: TimestampString;
}

export interface UpdatePlayroomInvitedUserHeartbeatData {
  playroomSession_update?: PlayroomSession_Key | null;
}

export interface UpdatePlayroomInvitedUserHeartbeatVariables {
  id: UUIDString;
  invitedUserHeartbeat: TimestampString;
}

export interface UpdatePlayroomInvitedUserJoinedAtData {
  playroomSession_update?: PlayroomSession_Key | null;
}

export interface UpdatePlayroomInvitedUserJoinedAtVariables {
  id: UUIDString;
  invitedUserJoinedAt: TimestampString;
}

export interface UpdatePlayroomSessionDetailsData {
  playroomSession_update?: PlayroomSession_Key | null;
}

export interface UpdatePlayroomSessionDetailsVariables {
  id: UUIDString;
  invitedUserId?: UUIDString | null;
  invitedUserJoinedAt?: TimestampString | null;
  jwtTokenInvitedUser?: string | null;
  jwtTokenSpectator?: string | null;
}

export interface UpdateStatValueData {
  chatroomStat_update?: ChatroomStat_Key | null;
}

export interface UpdateStatValueVariables {
  chatroomId: UUIDString;
  label: string;
  value: Int64String;
}

export interface UpdateStatusData {
  user_update?: User_Key | null;
}

export interface UpdateStatusVariables {
  id: UUIDString;
  online: boolean;
  lastSeenAt: TimestampString;
}

export interface UpdateUserImageData {
  user_update?: User_Key | null;
}

export interface UpdateUserImageVariables {
  id: UUIDString;
  imageUrl: string;
}

export interface UpsertChatroomStatData {
  chatroomStat_upsert: ChatroomStat_Key;
}

export interface UpsertChatroomStatVariables {
  chatroomId: UUIDString;
  label: string;
  value: Int64String;
  subtext?: string | null;
}

export interface UpsertFriendWithData {
  friendWith_upsert: FriendWith_Key;
}

export interface UpsertFriendWithVariables {
  userId: UUIDString;
  friendWithUserId: UUIDString;
  requestSent: boolean;
  requestSentAt?: TimestampString | null;
  requestAccepted: boolean;
  requestAcceptedAt?: TimestampString | null;
}

export interface UpsertGlobalStatData {
  globalStat_upsert: GlobalStat_Key;
}

export interface UpsertGlobalStatVariables {
  label: string;
  value: Int64String;
  subtext?: string | null;
}

export interface UserChatroomSession_Key {
  userId: UUIDString;
  chatroomId: UUIDString;
  __typename?: 'UserChatroomSession_Key';
}

export interface UserChatroomVisit_Key {
  userId: UUIDString;
  chatroomId: UUIDString;
  __typename?: 'UserChatroomVisit_Key';
}

export interface UserNotification_Key {
  id: UUIDString;
  __typename?: 'UserNotification_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateChatroomRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateChatroomVariables): MutationRef<CreateChatroomData, CreateChatroomVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateChatroomVariables): MutationRef<CreateChatroomData, CreateChatroomVariables>;
  operationName: string;
}
export const createChatroomRef: CreateChatroomRef;

export function createChatroom(vars: CreateChatroomVariables): MutationPromise<CreateChatroomData, CreateChatroomVariables>;
export function createChatroom(dc: DataConnect, vars: CreateChatroomVariables): MutationPromise<CreateChatroomData, CreateChatroomVariables>;

interface JoinChatroomRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: JoinChatroomVariables): MutationRef<JoinChatroomData, JoinChatroomVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: JoinChatroomVariables): MutationRef<JoinChatroomData, JoinChatroomVariables>;
  operationName: string;
}
export const joinChatroomRef: JoinChatroomRef;

export function joinChatroom(vars: JoinChatroomVariables): MutationPromise<JoinChatroomData, JoinChatroomVariables>;
export function joinChatroom(dc: DataConnect, vars: JoinChatroomVariables): MutationPromise<JoinChatroomData, JoinChatroomVariables>;

interface LeaveChatroomRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: LeaveChatroomVariables): MutationRef<LeaveChatroomData, LeaveChatroomVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: LeaveChatroomVariables): MutationRef<LeaveChatroomData, LeaveChatroomVariables>;
  operationName: string;
}
export const leaveChatroomRef: LeaveChatroomRef;

export function leaveChatroom(vars: LeaveChatroomVariables): MutationPromise<LeaveChatroomData, LeaveChatroomVariables>;
export function leaveChatroom(dc: DataConnect, vars: LeaveChatroomVariables): MutationPromise<LeaveChatroomData, LeaveChatroomVariables>;

interface SendMessageRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: SendMessageVariables): MutationRef<SendMessageData, SendMessageVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: SendMessageVariables): MutationRef<SendMessageData, SendMessageVariables>;
  operationName: string;
}
export const sendMessageRef: SendMessageRef;

export function sendMessage(vars: SendMessageVariables): MutationPromise<SendMessageData, SendMessageVariables>;
export function sendMessage(dc: DataConnect, vars: SendMessageVariables): MutationPromise<SendMessageData, SendMessageVariables>;

interface UpdateStatusRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateStatusVariables): MutationRef<UpdateStatusData, UpdateStatusVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateStatusVariables): MutationRef<UpdateStatusData, UpdateStatusVariables>;
  operationName: string;
}
export const updateStatusRef: UpdateStatusRef;

export function updateStatus(vars: UpdateStatusVariables): MutationPromise<UpdateStatusData, UpdateStatusVariables>;
export function updateStatus(dc: DataConnect, vars: UpdateStatusVariables): MutationPromise<UpdateStatusData, UpdateStatusVariables>;

interface UpdateUserImageRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserImageVariables): MutationRef<UpdateUserImageData, UpdateUserImageVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateUserImageVariables): MutationRef<UpdateUserImageData, UpdateUserImageVariables>;
  operationName: string;
}
export const updateUserImageRef: UpdateUserImageRef;

export function updateUserImage(vars: UpdateUserImageVariables): MutationPromise<UpdateUserImageData, UpdateUserImageVariables>;
export function updateUserImage(dc: DataConnect, vars: UpdateUserImageVariables): MutationPromise<UpdateUserImageData, UpdateUserImageVariables>;

interface UpsertFriendWithRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertFriendWithVariables): MutationRef<UpsertFriendWithData, UpsertFriendWithVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertFriendWithVariables): MutationRef<UpsertFriendWithData, UpsertFriendWithVariables>;
  operationName: string;
}
export const upsertFriendWithRef: UpsertFriendWithRef;

export function upsertFriendWith(vars: UpsertFriendWithVariables): MutationPromise<UpsertFriendWithData, UpsertFriendWithVariables>;
export function upsertFriendWith(dc: DataConnect, vars: UpsertFriendWithVariables): MutationPromise<UpsertFriendWithData, UpsertFriendWithVariables>;

interface SendFriendWithRequestRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: SendFriendWithRequestVariables): MutationRef<SendFriendWithRequestData, SendFriendWithRequestVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: SendFriendWithRequestVariables): MutationRef<SendFriendWithRequestData, SendFriendWithRequestVariables>;
  operationName: string;
}
export const sendFriendWithRequestRef: SendFriendWithRequestRef;

export function sendFriendWithRequest(vars: SendFriendWithRequestVariables): MutationPromise<SendFriendWithRequestData, SendFriendWithRequestVariables>;
export function sendFriendWithRequest(dc: DataConnect, vars: SendFriendWithRequestVariables): MutationPromise<SendFriendWithRequestData, SendFriendWithRequestVariables>;

interface AcceptFriendWithRequestRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AcceptFriendWithRequestVariables): MutationRef<AcceptFriendWithRequestData, AcceptFriendWithRequestVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AcceptFriendWithRequestVariables): MutationRef<AcceptFriendWithRequestData, AcceptFriendWithRequestVariables>;
  operationName: string;
}
export const acceptFriendWithRequestRef: AcceptFriendWithRequestRef;

export function acceptFriendWithRequest(vars: AcceptFriendWithRequestVariables): MutationPromise<AcceptFriendWithRequestData, AcceptFriendWithRequestVariables>;
export function acceptFriendWithRequest(dc: DataConnect, vars: AcceptFriendWithRequestVariables): MutationPromise<AcceptFriendWithRequestData, AcceptFriendWithRequestVariables>;

interface AcceptFriendWithRequestBidirectionalRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AcceptFriendWithRequestBidirectionalVariables): MutationRef<AcceptFriendWithRequestBidirectionalData, AcceptFriendWithRequestBidirectionalVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AcceptFriendWithRequestBidirectionalVariables): MutationRef<AcceptFriendWithRequestBidirectionalData, AcceptFriendWithRequestBidirectionalVariables>;
  operationName: string;
}
export const acceptFriendWithRequestBidirectionalRef: AcceptFriendWithRequestBidirectionalRef;

export function acceptFriendWithRequestBidirectional(vars: AcceptFriendWithRequestBidirectionalVariables): MutationPromise<AcceptFriendWithRequestBidirectionalData, AcceptFriendWithRequestBidirectionalVariables>;
export function acceptFriendWithRequestBidirectional(dc: DataConnect, vars: AcceptFriendWithRequestBidirectionalVariables): MutationPromise<AcceptFriendWithRequestBidirectionalData, AcceptFriendWithRequestBidirectionalVariables>;

interface RejectFriendWithRequestBidirectionalRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: RejectFriendWithRequestBidirectionalVariables): MutationRef<RejectFriendWithRequestBidirectionalData, RejectFriendWithRequestBidirectionalVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: RejectFriendWithRequestBidirectionalVariables): MutationRef<RejectFriendWithRequestBidirectionalData, RejectFriendWithRequestBidirectionalVariables>;
  operationName: string;
}
export const rejectFriendWithRequestBidirectionalRef: RejectFriendWithRequestBidirectionalRef;

export function rejectFriendWithRequestBidirectional(vars: RejectFriendWithRequestBidirectionalVariables): MutationPromise<RejectFriendWithRequestBidirectionalData, RejectFriendWithRequestBidirectionalVariables>;
export function rejectFriendWithRequestBidirectional(dc: DataConnect, vars: RejectFriendWithRequestBidirectionalVariables): MutationPromise<RejectFriendWithRequestBidirectionalData, RejectFriendWithRequestBidirectionalVariables>;

interface DeleteFriendWithRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteFriendWithVariables): MutationRef<DeleteFriendWithData, DeleteFriendWithVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteFriendWithVariables): MutationRef<DeleteFriendWithData, DeleteFriendWithVariables>;
  operationName: string;
}
export const deleteFriendWithRef: DeleteFriendWithRef;

export function deleteFriendWith(vars: DeleteFriendWithVariables): MutationPromise<DeleteFriendWithData, DeleteFriendWithVariables>;
export function deleteFriendWith(dc: DataConnect, vars: DeleteFriendWithVariables): MutationPromise<DeleteFriendWithData, DeleteFriendWithVariables>;

interface UpdateChatroomDetailsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateChatroomDetailsVariables): MutationRef<UpdateChatroomDetailsData, UpdateChatroomDetailsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateChatroomDetailsVariables): MutationRef<UpdateChatroomDetailsData, UpdateChatroomDetailsVariables>;
  operationName: string;
}
export const updateChatroomDetailsRef: UpdateChatroomDetailsRef;

export function updateChatroomDetails(vars: UpdateChatroomDetailsVariables): MutationPromise<UpdateChatroomDetailsData, UpdateChatroomDetailsVariables>;
export function updateChatroomDetails(dc: DataConnect, vars: UpdateChatroomDetailsVariables): MutationPromise<UpdateChatroomDetailsData, UpdateChatroomDetailsVariables>;

interface UpsertChatroomStatRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertChatroomStatVariables): MutationRef<UpsertChatroomStatData, UpsertChatroomStatVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertChatroomStatVariables): MutationRef<UpsertChatroomStatData, UpsertChatroomStatVariables>;
  operationName: string;
}
export const upsertChatroomStatRef: UpsertChatroomStatRef;

export function upsertChatroomStat(vars: UpsertChatroomStatVariables): MutationPromise<UpsertChatroomStatData, UpsertChatroomStatVariables>;
export function upsertChatroomStat(dc: DataConnect, vars: UpsertChatroomStatVariables): MutationPromise<UpsertChatroomStatData, UpsertChatroomStatVariables>;

interface UpdateCityNameRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateCityNameVariables): MutationRef<UpdateCityNameData, UpdateCityNameVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateCityNameVariables): MutationRef<UpdateCityNameData, UpdateCityNameVariables>;
  operationName: string;
}
export const updateCityNameRef: UpdateCityNameRef;

export function updateCityName(vars: UpdateCityNameVariables): MutationPromise<UpdateCityNameData, UpdateCityNameVariables>;
export function updateCityName(dc: DataConnect, vars: UpdateCityNameVariables): MutationPromise<UpdateCityNameData, UpdateCityNameVariables>;

interface DeleteChatroomStatRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteChatroomStatVariables): MutationRef<DeleteChatroomStatData, DeleteChatroomStatVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteChatroomStatVariables): MutationRef<DeleteChatroomStatData, DeleteChatroomStatVariables>;
  operationName: string;
}
export const deleteChatroomStatRef: DeleteChatroomStatRef;

export function deleteChatroomStat(vars: DeleteChatroomStatVariables): MutationPromise<DeleteChatroomStatData, DeleteChatroomStatVariables>;
export function deleteChatroomStat(dc: DataConnect, vars: DeleteChatroomStatVariables): MutationPromise<DeleteChatroomStatData, DeleteChatroomStatVariables>;

interface UpdateStatValueRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateStatValueVariables): MutationRef<UpdateStatValueData, UpdateStatValueVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateStatValueVariables): MutationRef<UpdateStatValueData, UpdateStatValueVariables>;
  operationName: string;
}
export const updateStatValueRef: UpdateStatValueRef;

export function updateStatValue(vars: UpdateStatValueVariables): MutationPromise<UpdateStatValueData, UpdateStatValueVariables>;
export function updateStatValue(dc: DataConnect, vars: UpdateStatValueVariables): MutationPromise<UpdateStatValueData, UpdateStatValueVariables>;

interface UpsertGlobalStatRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertGlobalStatVariables): MutationRef<UpsertGlobalStatData, UpsertGlobalStatVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertGlobalStatVariables): MutationRef<UpsertGlobalStatData, UpsertGlobalStatVariables>;
  operationName: string;
}
export const upsertGlobalStatRef: UpsertGlobalStatRef;

export function upsertGlobalStat(vars: UpsertGlobalStatVariables): MutationPromise<UpsertGlobalStatData, UpsertGlobalStatVariables>;
export function upsertGlobalStat(dc: DataConnect, vars: UpsertGlobalStatVariables): MutationPromise<UpsertGlobalStatData, UpsertGlobalStatVariables>;

interface OpenChatroomSessionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: OpenChatroomSessionVariables): MutationRef<OpenChatroomSessionData, OpenChatroomSessionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: OpenChatroomSessionVariables): MutationRef<OpenChatroomSessionData, OpenChatroomSessionVariables>;
  operationName: string;
}
export const openChatroomSessionRef: OpenChatroomSessionRef;

export function openChatroomSession(vars: OpenChatroomSessionVariables): MutationPromise<OpenChatroomSessionData, OpenChatroomSessionVariables>;
export function openChatroomSession(dc: DataConnect, vars: OpenChatroomSessionVariables): MutationPromise<OpenChatroomSessionData, OpenChatroomSessionVariables>;

interface CloseChatroomSessionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CloseChatroomSessionVariables): MutationRef<CloseChatroomSessionData, CloseChatroomSessionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CloseChatroomSessionVariables): MutationRef<CloseChatroomSessionData, CloseChatroomSessionVariables>;
  operationName: string;
}
export const closeChatroomSessionRef: CloseChatroomSessionRef;

export function closeChatroomSession(vars: CloseChatroomSessionVariables): MutationPromise<CloseChatroomSessionData, CloseChatroomSessionVariables>;
export function closeChatroomSession(dc: DataConnect, vars: CloseChatroomSessionVariables): MutationPromise<CloseChatroomSessionData, CloseChatroomSessionVariables>;

interface HeartbeatChatroomSessionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: HeartbeatChatroomSessionVariables): MutationRef<HeartbeatChatroomSessionData, HeartbeatChatroomSessionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: HeartbeatChatroomSessionVariables): MutationRef<HeartbeatChatroomSessionData, HeartbeatChatroomSessionVariables>;
  operationName: string;
}
export const heartbeatChatroomSessionRef: HeartbeatChatroomSessionRef;

export function heartbeatChatroomSession(vars: HeartbeatChatroomSessionVariables): MutationPromise<HeartbeatChatroomSessionData, HeartbeatChatroomSessionVariables>;
export function heartbeatChatroomSession(dc: DataConnect, vars: HeartbeatChatroomSessionVariables): MutationPromise<HeartbeatChatroomSessionData, HeartbeatChatroomSessionVariables>;

interface RecordChatroomVisitRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: RecordChatroomVisitVariables): MutationRef<RecordChatroomVisitData, RecordChatroomVisitVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: RecordChatroomVisitVariables): MutationRef<RecordChatroomVisitData, RecordChatroomVisitVariables>;
  operationName: string;
}
export const recordChatroomVisitRef: RecordChatroomVisitRef;

export function recordChatroomVisit(vars: RecordChatroomVisitVariables): MutationPromise<RecordChatroomVisitData, RecordChatroomVisitVariables>;
export function recordChatroomVisit(dc: DataConnect, vars: RecordChatroomVisitVariables): MutationPromise<RecordChatroomVisitData, RecordChatroomVisitVariables>;

interface TrimOldVisitsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: TrimOldVisitsVariables): MutationRef<TrimOldVisitsData, TrimOldVisitsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: TrimOldVisitsVariables): MutationRef<TrimOldVisitsData, TrimOldVisitsVariables>;
  operationName: string;
}
export const trimOldVisitsRef: TrimOldVisitsRef;

export function trimOldVisits(vars: TrimOldVisitsVariables): MutationPromise<TrimOldVisitsData, TrimOldVisitsVariables>;
export function trimOldVisits(dc: DataConnect, vars: TrimOldVisitsVariables): MutationPromise<TrimOldVisitsData, TrimOldVisitsVariables>;

interface CreateNotificationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNotificationVariables): MutationRef<CreateNotificationData, CreateNotificationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNotificationVariables): MutationRef<CreateNotificationData, CreateNotificationVariables>;
  operationName: string;
}
export const createNotificationRef: CreateNotificationRef;

export function createNotification(vars: CreateNotificationVariables): MutationPromise<CreateNotificationData, CreateNotificationVariables>;
export function createNotification(dc: DataConnect, vars: CreateNotificationVariables): MutationPromise<CreateNotificationData, CreateNotificationVariables>;

interface MarkNotificationReadRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: MarkNotificationReadVariables): MutationRef<MarkNotificationReadData, MarkNotificationReadVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: MarkNotificationReadVariables): MutationRef<MarkNotificationReadData, MarkNotificationReadVariables>;
  operationName: string;
}
export const markNotificationReadRef: MarkNotificationReadRef;

export function markNotificationRead(vars: MarkNotificationReadVariables): MutationPromise<MarkNotificationReadData, MarkNotificationReadVariables>;
export function markNotificationRead(dc: DataConnect, vars: MarkNotificationReadVariables): MutationPromise<MarkNotificationReadData, MarkNotificationReadVariables>;

interface MarkAllNotificationsReadRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: MarkAllNotificationsReadVariables): MutationRef<MarkAllNotificationsReadData, MarkAllNotificationsReadVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: MarkAllNotificationsReadVariables): MutationRef<MarkAllNotificationsReadData, MarkAllNotificationsReadVariables>;
  operationName: string;
}
export const markAllNotificationsReadRef: MarkAllNotificationsReadRef;

export function markAllNotificationsRead(vars: MarkAllNotificationsReadVariables): MutationPromise<MarkAllNotificationsReadData, MarkAllNotificationsReadVariables>;
export function markAllNotificationsRead(dc: DataConnect, vars: MarkAllNotificationsReadVariables): MutationPromise<MarkAllNotificationsReadData, MarkAllNotificationsReadVariables>;

interface InitializeChatroomStatsDefaultsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: InitializeChatroomStatsDefaultsVariables): MutationRef<InitializeChatroomStatsDefaultsData, InitializeChatroomStatsDefaultsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: InitializeChatroomStatsDefaultsVariables): MutationRef<InitializeChatroomStatsDefaultsData, InitializeChatroomStatsDefaultsVariables>;
  operationName: string;
}
export const initializeChatroomStatsDefaultsRef: InitializeChatroomStatsDefaultsRef;

export function initializeChatroomStatsDefaults(vars: InitializeChatroomStatsDefaultsVariables): MutationPromise<InitializeChatroomStatsDefaultsData, InitializeChatroomStatsDefaultsVariables>;
export function initializeChatroomStatsDefaults(dc: DataConnect, vars: InitializeChatroomStatsDefaultsVariables): MutationPromise<InitializeChatroomStatsDefaultsData, InitializeChatroomStatsDefaultsVariables>;

interface IncrementChatroomStatRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: IncrementChatroomStatVariables): MutationRef<IncrementChatroomStatData, IncrementChatroomStatVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: IncrementChatroomStatVariables): MutationRef<IncrementChatroomStatData, IncrementChatroomStatVariables>;
  operationName: string;
}
export const incrementChatroomStatRef: IncrementChatroomStatRef;

export function incrementChatroomStat(vars: IncrementChatroomStatVariables): MutationPromise<IncrementChatroomStatData, IncrementChatroomStatVariables>;
export function incrementChatroomStat(dc: DataConnect, vars: IncrementChatroomStatVariables): MutationPromise<IncrementChatroomStatData, IncrementChatroomStatVariables>;

interface CreatePlayroomSessionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePlayroomSessionVariables): MutationRef<CreatePlayroomSessionData, CreatePlayroomSessionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreatePlayroomSessionVariables): MutationRef<CreatePlayroomSessionData, CreatePlayroomSessionVariables>;
  operationName: string;
}
export const createPlayroomSessionRef: CreatePlayroomSessionRef;

export function createPlayroomSession(vars: CreatePlayroomSessionVariables): MutationPromise<CreatePlayroomSessionData, CreatePlayroomSessionVariables>;
export function createPlayroomSession(dc: DataConnect, vars: CreatePlayroomSessionVariables): MutationPromise<CreatePlayroomSessionData, CreatePlayroomSessionVariables>;

interface UpdatePlayroomSessionDetailsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePlayroomSessionDetailsVariables): MutationRef<UpdatePlayroomSessionDetailsData, UpdatePlayroomSessionDetailsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdatePlayroomSessionDetailsVariables): MutationRef<UpdatePlayroomSessionDetailsData, UpdatePlayroomSessionDetailsVariables>;
  operationName: string;
}
export const updatePlayroomSessionDetailsRef: UpdatePlayroomSessionDetailsRef;

export function updatePlayroomSessionDetails(vars: UpdatePlayroomSessionDetailsVariables): MutationPromise<UpdatePlayroomSessionDetailsData, UpdatePlayroomSessionDetailsVariables>;
export function updatePlayroomSessionDetails(dc: DataConnect, vars: UpdatePlayroomSessionDetailsVariables): MutationPromise<UpdatePlayroomSessionDetailsData, UpdatePlayroomSessionDetailsVariables>;

interface UpdatePlayroomInvitedUserJoinedAtRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePlayroomInvitedUserJoinedAtVariables): MutationRef<UpdatePlayroomInvitedUserJoinedAtData, UpdatePlayroomInvitedUserJoinedAtVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdatePlayroomInvitedUserJoinedAtVariables): MutationRef<UpdatePlayroomInvitedUserJoinedAtData, UpdatePlayroomInvitedUserJoinedAtVariables>;
  operationName: string;
}
export const updatePlayroomInvitedUserJoinedAtRef: UpdatePlayroomInvitedUserJoinedAtRef;

export function updatePlayroomInvitedUserJoinedAt(vars: UpdatePlayroomInvitedUserJoinedAtVariables): MutationPromise<UpdatePlayroomInvitedUserJoinedAtData, UpdatePlayroomInvitedUserJoinedAtVariables>;
export function updatePlayroomInvitedUserJoinedAt(dc: DataConnect, vars: UpdatePlayroomInvitedUserJoinedAtVariables): MutationPromise<UpdatePlayroomInvitedUserJoinedAtData, UpdatePlayroomInvitedUserJoinedAtVariables>;

interface DeletePlayroomInvitedUserJoinedAtRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePlayroomInvitedUserJoinedAtVariables): MutationRef<DeletePlayroomInvitedUserJoinedAtData, DeletePlayroomInvitedUserJoinedAtVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeletePlayroomInvitedUserJoinedAtVariables): MutationRef<DeletePlayroomInvitedUserJoinedAtData, DeletePlayroomInvitedUserJoinedAtVariables>;
  operationName: string;
}
export const deletePlayroomInvitedUserJoinedAtRef: DeletePlayroomInvitedUserJoinedAtRef;

export function deletePlayroomInvitedUserJoinedAt(vars: DeletePlayroomInvitedUserJoinedAtVariables): MutationPromise<DeletePlayroomInvitedUserJoinedAtData, DeletePlayroomInvitedUserJoinedAtVariables>;
export function deletePlayroomInvitedUserJoinedAt(dc: DataConnect, vars: DeletePlayroomInvitedUserJoinedAtVariables): MutationPromise<DeletePlayroomInvitedUserJoinedAtData, DeletePlayroomInvitedUserJoinedAtVariables>;

interface UpdatePlayroomCreatorUserHeartbeatRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePlayroomCreatorUserHeartbeatVariables): MutationRef<UpdatePlayroomCreatorUserHeartbeatData, UpdatePlayroomCreatorUserHeartbeatVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdatePlayroomCreatorUserHeartbeatVariables): MutationRef<UpdatePlayroomCreatorUserHeartbeatData, UpdatePlayroomCreatorUserHeartbeatVariables>;
  operationName: string;
}
export const updatePlayroomCreatorUserHeartbeatRef: UpdatePlayroomCreatorUserHeartbeatRef;

export function updatePlayroomCreatorUserHeartbeat(vars: UpdatePlayroomCreatorUserHeartbeatVariables): MutationPromise<UpdatePlayroomCreatorUserHeartbeatData, UpdatePlayroomCreatorUserHeartbeatVariables>;
export function updatePlayroomCreatorUserHeartbeat(dc: DataConnect, vars: UpdatePlayroomCreatorUserHeartbeatVariables): MutationPromise<UpdatePlayroomCreatorUserHeartbeatData, UpdatePlayroomCreatorUserHeartbeatVariables>;

interface DeletePlayroomCreatorUserHeartbeatRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePlayroomCreatorUserHeartbeatVariables): MutationRef<DeletePlayroomCreatorUserHeartbeatData, DeletePlayroomCreatorUserHeartbeatVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeletePlayroomCreatorUserHeartbeatVariables): MutationRef<DeletePlayroomCreatorUserHeartbeatData, DeletePlayroomCreatorUserHeartbeatVariables>;
  operationName: string;
}
export const deletePlayroomCreatorUserHeartbeatRef: DeletePlayroomCreatorUserHeartbeatRef;

export function deletePlayroomCreatorUserHeartbeat(vars: DeletePlayroomCreatorUserHeartbeatVariables): MutationPromise<DeletePlayroomCreatorUserHeartbeatData, DeletePlayroomCreatorUserHeartbeatVariables>;
export function deletePlayroomCreatorUserHeartbeat(dc: DataConnect, vars: DeletePlayroomCreatorUserHeartbeatVariables): MutationPromise<DeletePlayroomCreatorUserHeartbeatData, DeletePlayroomCreatorUserHeartbeatVariables>;

interface UpdatePlayroomInvitedUserHeartbeatRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePlayroomInvitedUserHeartbeatVariables): MutationRef<UpdatePlayroomInvitedUserHeartbeatData, UpdatePlayroomInvitedUserHeartbeatVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdatePlayroomInvitedUserHeartbeatVariables): MutationRef<UpdatePlayroomInvitedUserHeartbeatData, UpdatePlayroomInvitedUserHeartbeatVariables>;
  operationName: string;
}
export const updatePlayroomInvitedUserHeartbeatRef: UpdatePlayroomInvitedUserHeartbeatRef;

export function updatePlayroomInvitedUserHeartbeat(vars: UpdatePlayroomInvitedUserHeartbeatVariables): MutationPromise<UpdatePlayroomInvitedUserHeartbeatData, UpdatePlayroomInvitedUserHeartbeatVariables>;
export function updatePlayroomInvitedUserHeartbeat(dc: DataConnect, vars: UpdatePlayroomInvitedUserHeartbeatVariables): MutationPromise<UpdatePlayroomInvitedUserHeartbeatData, UpdatePlayroomInvitedUserHeartbeatVariables>;

interface DeletePlayroomInvitedUserHeartbeatRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePlayroomInvitedUserHeartbeatVariables): MutationRef<DeletePlayroomInvitedUserHeartbeatData, DeletePlayroomInvitedUserHeartbeatVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeletePlayroomInvitedUserHeartbeatVariables): MutationRef<DeletePlayroomInvitedUserHeartbeatData, DeletePlayroomInvitedUserHeartbeatVariables>;
  operationName: string;
}
export const deletePlayroomInvitedUserHeartbeatRef: DeletePlayroomInvitedUserHeartbeatRef;

export function deletePlayroomInvitedUserHeartbeat(vars: DeletePlayroomInvitedUserHeartbeatVariables): MutationPromise<DeletePlayroomInvitedUserHeartbeatData, DeletePlayroomInvitedUserHeartbeatVariables>;
export function deletePlayroomInvitedUserHeartbeat(dc: DataConnect, vars: DeletePlayroomInvitedUserHeartbeatVariables): MutationPromise<DeletePlayroomInvitedUserHeartbeatData, DeletePlayroomInvitedUserHeartbeatVariables>;

interface ClosePlayroomSessionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ClosePlayroomSessionVariables): MutationRef<ClosePlayroomSessionData, ClosePlayroomSessionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ClosePlayroomSessionVariables): MutationRef<ClosePlayroomSessionData, ClosePlayroomSessionVariables>;
  operationName: string;
}
export const closePlayroomSessionRef: ClosePlayroomSessionRef;

export function closePlayroomSession(vars: ClosePlayroomSessionVariables): MutationPromise<ClosePlayroomSessionData, ClosePlayroomSessionVariables>;
export function closePlayroomSession(dc: DataConnect, vars: ClosePlayroomSessionVariables): MutationPromise<ClosePlayroomSessionData, ClosePlayroomSessionVariables>;

interface DeletePlayroomSessionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePlayroomSessionVariables): MutationRef<DeletePlayroomSessionData, DeletePlayroomSessionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeletePlayroomSessionVariables): MutationRef<DeletePlayroomSessionData, DeletePlayroomSessionVariables>;
  operationName: string;
}
export const deletePlayroomSessionRef: DeletePlayroomSessionRef;

export function deletePlayroomSession(vars: DeletePlayroomSessionVariables): MutationPromise<DeletePlayroomSessionData, DeletePlayroomSessionVariables>;
export function deletePlayroomSession(dc: DataConnect, vars: DeletePlayroomSessionVariables): MutationPromise<DeletePlayroomSessionData, DeletePlayroomSessionVariables>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(vars: GetUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserData, GetUserVariables>;
export function getUser(dc: DataConnect, vars: GetUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserData, GetUserVariables>;

interface ListPublicChatroomsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListPublicChatroomsVariables): QueryRef<ListPublicChatroomsData, ListPublicChatroomsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: ListPublicChatroomsVariables): QueryRef<ListPublicChatroomsData, ListPublicChatroomsVariables>;
  operationName: string;
}
export const listPublicChatroomsRef: ListPublicChatroomsRef;

export function listPublicChatrooms(vars?: ListPublicChatroomsVariables, options?: ExecuteQueryOptions): QueryPromise<ListPublicChatroomsData, ListPublicChatroomsVariables>;
export function listPublicChatrooms(dc: DataConnect, vars?: ListPublicChatroomsVariables, options?: ExecuteQueryOptions): QueryPromise<ListPublicChatroomsData, ListPublicChatroomsVariables>;

interface GetChatroomMessagesRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetChatroomMessagesVariables): QueryRef<GetChatroomMessagesData, GetChatroomMessagesVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetChatroomMessagesVariables): QueryRef<GetChatroomMessagesData, GetChatroomMessagesVariables>;
  operationName: string;
}
export const getChatroomMessagesRef: GetChatroomMessagesRef;

export function getChatroomMessages(vars: GetChatroomMessagesVariables, options?: ExecuteQueryOptions): QueryPromise<GetChatroomMessagesData, GetChatroomMessagesVariables>;
export function getChatroomMessages(dc: DataConnect, vars: GetChatroomMessagesVariables, options?: ExecuteQueryOptions): QueryPromise<GetChatroomMessagesData, GetChatroomMessagesVariables>;

interface ListChatroomsByOwnerRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListChatroomsByOwnerVariables): QueryRef<ListChatroomsByOwnerData, ListChatroomsByOwnerVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListChatroomsByOwnerVariables): QueryRef<ListChatroomsByOwnerData, ListChatroomsByOwnerVariables>;
  operationName: string;
}
export const listChatroomsByOwnerRef: ListChatroomsByOwnerRef;

export function listChatroomsByOwner(vars: ListChatroomsByOwnerVariables, options?: ExecuteQueryOptions): QueryPromise<ListChatroomsByOwnerData, ListChatroomsByOwnerVariables>;
export function listChatroomsByOwner(dc: DataConnect, vars: ListChatroomsByOwnerVariables, options?: ExecuteQueryOptions): QueryPromise<ListChatroomsByOwnerData, ListChatroomsByOwnerVariables>;

interface ListChatroomsByCityRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListChatroomsByCityVariables): QueryRef<ListChatroomsByCityData, ListChatroomsByCityVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListChatroomsByCityVariables): QueryRef<ListChatroomsByCityData, ListChatroomsByCityVariables>;
  operationName: string;
}
export const listChatroomsByCityRef: ListChatroomsByCityRef;

export function listChatroomsByCity(vars: ListChatroomsByCityVariables, options?: ExecuteQueryOptions): QueryPromise<ListChatroomsByCityData, ListChatroomsByCityVariables>;
export function listChatroomsByCity(dc: DataConnect, vars: ListChatroomsByCityVariables, options?: ExecuteQueryOptions): QueryPromise<ListChatroomsByCityData, ListChatroomsByCityVariables>;

interface SearchCitiesRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: SearchCitiesVariables): QueryRef<SearchCitiesData, SearchCitiesVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: SearchCitiesVariables): QueryRef<SearchCitiesData, SearchCitiesVariables>;
  operationName: string;
}
export const searchCitiesRef: SearchCitiesRef;

export function searchCities(vars: SearchCitiesVariables, options?: ExecuteQueryOptions): QueryPromise<SearchCitiesData, SearchCitiesVariables>;
export function searchCities(dc: DataConnect, vars: SearchCitiesVariables, options?: ExecuteQueryOptions): QueryPromise<SearchCitiesData, SearchCitiesVariables>;

interface IsMemberRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: IsMemberVariables): QueryRef<IsMemberData, IsMemberVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: IsMemberVariables): QueryRef<IsMemberData, IsMemberVariables>;
  operationName: string;
}
export const isMemberRef: IsMemberRef;

export function isMember(vars: IsMemberVariables, options?: ExecuteQueryOptions): QueryPromise<IsMemberData, IsMemberVariables>;
export function isMember(dc: DataConnect, vars: IsMemberVariables, options?: ExecuteQueryOptions): QueryPromise<IsMemberData, IsMemberVariables>;

interface GetFriendWithRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetFriendWithVariables): QueryRef<GetFriendWithData, GetFriendWithVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetFriendWithVariables): QueryRef<GetFriendWithData, GetFriendWithVariables>;
  operationName: string;
}
export const getFriendWithRef: GetFriendWithRef;

export function getFriendWith(vars: GetFriendWithVariables, options?: ExecuteQueryOptions): QueryPromise<GetFriendWithData, GetFriendWithVariables>;
export function getFriendWith(dc: DataConnect, vars: GetFriendWithVariables, options?: ExecuteQueryOptions): QueryPromise<GetFriendWithData, GetFriendWithVariables>;

interface ListFriendWithByUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListFriendWithByUserVariables): QueryRef<ListFriendWithByUserData, ListFriendWithByUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListFriendWithByUserVariables): QueryRef<ListFriendWithByUserData, ListFriendWithByUserVariables>;
  operationName: string;
}
export const listFriendWithByUserRef: ListFriendWithByUserRef;

export function listFriendWithByUser(vars: ListFriendWithByUserVariables, options?: ExecuteQueryOptions): QueryPromise<ListFriendWithByUserData, ListFriendWithByUserVariables>;
export function listFriendWithByUser(dc: DataConnect, vars: ListFriendWithByUserVariables, options?: ExecuteQueryOptions): QueryPromise<ListFriendWithByUserData, ListFriendWithByUserVariables>;

interface ListPendingFriendRequestsReceivedRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListPendingFriendRequestsReceivedVariables): QueryRef<ListPendingFriendRequestsReceivedData, ListPendingFriendRequestsReceivedVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListPendingFriendRequestsReceivedVariables): QueryRef<ListPendingFriendRequestsReceivedData, ListPendingFriendRequestsReceivedVariables>;
  operationName: string;
}
export const listPendingFriendRequestsReceivedRef: ListPendingFriendRequestsReceivedRef;

export function listPendingFriendRequestsReceived(vars: ListPendingFriendRequestsReceivedVariables, options?: ExecuteQueryOptions): QueryPromise<ListPendingFriendRequestsReceivedData, ListPendingFriendRequestsReceivedVariables>;
export function listPendingFriendRequestsReceived(dc: DataConnect, vars: ListPendingFriendRequestsReceivedVariables, options?: ExecuteQueryOptions): QueryPromise<ListPendingFriendRequestsReceivedData, ListPendingFriendRequestsReceivedVariables>;

interface ListAcceptedFriendConnectionsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListAcceptedFriendConnectionsVariables): QueryRef<ListAcceptedFriendConnectionsData, ListAcceptedFriendConnectionsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListAcceptedFriendConnectionsVariables): QueryRef<ListAcceptedFriendConnectionsData, ListAcceptedFriendConnectionsVariables>;
  operationName: string;
}
export const listAcceptedFriendConnectionsRef: ListAcceptedFriendConnectionsRef;

export function listAcceptedFriendConnections(vars: ListAcceptedFriendConnectionsVariables, options?: ExecuteQueryOptions): QueryPromise<ListAcceptedFriendConnectionsData, ListAcceptedFriendConnectionsVariables>;
export function listAcceptedFriendConnections(dc: DataConnect, vars: ListAcceptedFriendConnectionsVariables, options?: ExecuteQueryOptions): QueryPromise<ListAcceptedFriendConnectionsData, ListAcceptedFriendConnectionsVariables>;

interface ListMyChatroomsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListMyChatroomsVariables): QueryRef<ListMyChatroomsData, ListMyChatroomsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListMyChatroomsVariables): QueryRef<ListMyChatroomsData, ListMyChatroomsVariables>;
  operationName: string;
}
export const listMyChatroomsRef: ListMyChatroomsRef;

export function listMyChatrooms(vars: ListMyChatroomsVariables, options?: ExecuteQueryOptions): QueryPromise<ListMyChatroomsData, ListMyChatroomsVariables>;
export function listMyChatrooms(dc: DataConnect, vars: ListMyChatroomsVariables, options?: ExecuteQueryOptions): QueryPromise<ListMyChatroomsData, ListMyChatroomsVariables>;

interface GetGlobalStatsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetGlobalStatsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetGlobalStatsData, undefined>;
  operationName: string;
}
export const getGlobalStatsRef: GetGlobalStatsRef;

export function getGlobalStats(options?: ExecuteQueryOptions): QueryPromise<GetGlobalStatsData, undefined>;
export function getGlobalStats(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetGlobalStatsData, undefined>;

interface GetGlobalStatRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetGlobalStatVariables): QueryRef<GetGlobalStatData, GetGlobalStatVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetGlobalStatVariables): QueryRef<GetGlobalStatData, GetGlobalStatVariables>;
  operationName: string;
}
export const getGlobalStatRef: GetGlobalStatRef;

export function getGlobalStat(vars: GetGlobalStatVariables, options?: ExecuteQueryOptions): QueryPromise<GetGlobalStatData, GetGlobalStatVariables>;
export function getGlobalStat(dc: DataConnect, vars: GetGlobalStatVariables, options?: ExecuteQueryOptions): QueryPromise<GetGlobalStatData, GetGlobalStatVariables>;

interface ListActiveSessionsByUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListActiveSessionsByUserVariables): QueryRef<ListActiveSessionsByUserData, ListActiveSessionsByUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListActiveSessionsByUserVariables): QueryRef<ListActiveSessionsByUserData, ListActiveSessionsByUserVariables>;
  operationName: string;
}
export const listActiveSessionsByUserRef: ListActiveSessionsByUserRef;

export function listActiveSessionsByUser(vars: ListActiveSessionsByUserVariables, options?: ExecuteQueryOptions): QueryPromise<ListActiveSessionsByUserData, ListActiveSessionsByUserVariables>;
export function listActiveSessionsByUser(dc: DataConnect, vars: ListActiveSessionsByUserVariables, options?: ExecuteQueryOptions): QueryPromise<ListActiveSessionsByUserData, ListActiveSessionsByUserVariables>;

interface ListActiveSessionsGlobalRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListActiveSessionsGlobalVariables): QueryRef<ListActiveSessionsGlobalData, ListActiveSessionsGlobalVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: ListActiveSessionsGlobalVariables): QueryRef<ListActiveSessionsGlobalData, ListActiveSessionsGlobalVariables>;
  operationName: string;
}
export const listActiveSessionsGlobalRef: ListActiveSessionsGlobalRef;

export function listActiveSessionsGlobal(vars?: ListActiveSessionsGlobalVariables, options?: ExecuteQueryOptions): QueryPromise<ListActiveSessionsGlobalData, ListActiveSessionsGlobalVariables>;
export function listActiveSessionsGlobal(dc: DataConnect, vars?: ListActiveSessionsGlobalVariables, options?: ExecuteQueryOptions): QueryPromise<ListActiveSessionsGlobalData, ListActiveSessionsGlobalVariables>;

interface ListRecentVisitedChatroomsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListRecentVisitedChatroomsVariables): QueryRef<ListRecentVisitedChatroomsData, ListRecentVisitedChatroomsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListRecentVisitedChatroomsVariables): QueryRef<ListRecentVisitedChatroomsData, ListRecentVisitedChatroomsVariables>;
  operationName: string;
}
export const listRecentVisitedChatroomsRef: ListRecentVisitedChatroomsRef;

export function listRecentVisitedChatrooms(vars: ListRecentVisitedChatroomsVariables, options?: ExecuteQueryOptions): QueryPromise<ListRecentVisitedChatroomsData, ListRecentVisitedChatroomsVariables>;
export function listRecentVisitedChatrooms(dc: DataConnect, vars: ListRecentVisitedChatroomsVariables, options?: ExecuteQueryOptions): QueryPromise<ListRecentVisitedChatroomsData, ListRecentVisitedChatroomsVariables>;

interface ListNotificationsByRecipientRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListNotificationsByRecipientVariables): QueryRef<ListNotificationsByRecipientData, ListNotificationsByRecipientVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListNotificationsByRecipientVariables): QueryRef<ListNotificationsByRecipientData, ListNotificationsByRecipientVariables>;
  operationName: string;
}
export const listNotificationsByRecipientRef: ListNotificationsByRecipientRef;

export function listNotificationsByRecipient(vars: ListNotificationsByRecipientVariables, options?: ExecuteQueryOptions): QueryPromise<ListNotificationsByRecipientData, ListNotificationsByRecipientVariables>;
export function listNotificationsByRecipient(dc: DataConnect, vars: ListNotificationsByRecipientVariables, options?: ExecuteQueryOptions): QueryPromise<ListNotificationsByRecipientData, ListNotificationsByRecipientVariables>;

interface CountUnreadNotificationsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CountUnreadNotificationsVariables): QueryRef<CountUnreadNotificationsData, CountUnreadNotificationsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CountUnreadNotificationsVariables): QueryRef<CountUnreadNotificationsData, CountUnreadNotificationsVariables>;
  operationName: string;
}
export const countUnreadNotificationsRef: CountUnreadNotificationsRef;

export function countUnreadNotifications(vars: CountUnreadNotificationsVariables, options?: ExecuteQueryOptions): QueryPromise<CountUnreadNotificationsData, CountUnreadNotificationsVariables>;
export function countUnreadNotifications(dc: DataConnect, vars: CountUnreadNotificationsVariables, options?: ExecuteQueryOptions): QueryPromise<CountUnreadNotificationsData, CountUnreadNotificationsVariables>;

interface ListChatroomStatsByChatroomIdsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListChatroomStatsByChatroomIdsVariables): QueryRef<ListChatroomStatsByChatroomIdsData, ListChatroomStatsByChatroomIdsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListChatroomStatsByChatroomIdsVariables): QueryRef<ListChatroomStatsByChatroomIdsData, ListChatroomStatsByChatroomIdsVariables>;
  operationName: string;
}
export const listChatroomStatsByChatroomIdsRef: ListChatroomStatsByChatroomIdsRef;

export function listChatroomStatsByChatroomIds(vars: ListChatroomStatsByChatroomIdsVariables, options?: ExecuteQueryOptions): QueryPromise<ListChatroomStatsByChatroomIdsData, ListChatroomStatsByChatroomIdsVariables>;
export function listChatroomStatsByChatroomIds(dc: DataConnect, vars: ListChatroomStatsByChatroomIdsVariables, options?: ExecuteQueryOptions): QueryPromise<ListChatroomStatsByChatroomIdsData, ListChatroomStatsByChatroomIdsVariables>;

interface FetchPlayroomCreatorTokenRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: FetchPlayroomCreatorTokenVariables): QueryRef<FetchPlayroomCreatorTokenData, FetchPlayroomCreatorTokenVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: FetchPlayroomCreatorTokenVariables): QueryRef<FetchPlayroomCreatorTokenData, FetchPlayroomCreatorTokenVariables>;
  operationName: string;
}
export const fetchPlayroomCreatorTokenRef: FetchPlayroomCreatorTokenRef;

export function fetchPlayroomCreatorToken(vars: FetchPlayroomCreatorTokenVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomCreatorTokenData, FetchPlayroomCreatorTokenVariables>;
export function fetchPlayroomCreatorToken(dc: DataConnect, vars: FetchPlayroomCreatorTokenVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomCreatorTokenData, FetchPlayroomCreatorTokenVariables>;

interface FetchPlayroomInvitedUserTokenRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: FetchPlayroomInvitedUserTokenVariables): QueryRef<FetchPlayroomInvitedUserTokenData, FetchPlayroomInvitedUserTokenVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: FetchPlayroomInvitedUserTokenVariables): QueryRef<FetchPlayroomInvitedUserTokenData, FetchPlayroomInvitedUserTokenVariables>;
  operationName: string;
}
export const fetchPlayroomInvitedUserTokenRef: FetchPlayroomInvitedUserTokenRef;

export function fetchPlayroomInvitedUserToken(vars: FetchPlayroomInvitedUserTokenVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomInvitedUserTokenData, FetchPlayroomInvitedUserTokenVariables>;
export function fetchPlayroomInvitedUserToken(dc: DataConnect, vars: FetchPlayroomInvitedUserTokenVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomInvitedUserTokenData, FetchPlayroomInvitedUserTokenVariables>;

interface FetchPlayroomParticipantTokenRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: FetchPlayroomParticipantTokenVariables): QueryRef<FetchPlayroomParticipantTokenData, FetchPlayroomParticipantTokenVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: FetchPlayroomParticipantTokenVariables): QueryRef<FetchPlayroomParticipantTokenData, FetchPlayroomParticipantTokenVariables>;
  operationName: string;
}
export const fetchPlayroomParticipantTokenRef: FetchPlayroomParticipantTokenRef;

export function fetchPlayroomParticipantToken(vars: FetchPlayroomParticipantTokenVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomParticipantTokenData, FetchPlayroomParticipantTokenVariables>;
export function fetchPlayroomParticipantToken(dc: DataConnect, vars: FetchPlayroomParticipantTokenVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomParticipantTokenData, FetchPlayroomParticipantTokenVariables>;

interface FetchPlayroomParticipantUserIdsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: FetchPlayroomParticipantUserIdsVariables): QueryRef<FetchPlayroomParticipantUserIdsData, FetchPlayroomParticipantUserIdsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: FetchPlayroomParticipantUserIdsVariables): QueryRef<FetchPlayroomParticipantUserIdsData, FetchPlayroomParticipantUserIdsVariables>;
  operationName: string;
}
export const fetchPlayroomParticipantUserIdsRef: FetchPlayroomParticipantUserIdsRef;

export function fetchPlayroomParticipantUserIds(vars: FetchPlayroomParticipantUserIdsVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomParticipantUserIdsData, FetchPlayroomParticipantUserIdsVariables>;
export function fetchPlayroomParticipantUserIds(dc: DataConnect, vars: FetchPlayroomParticipantUserIdsVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomParticipantUserIdsData, FetchPlayroomParticipantUserIdsVariables>;

interface FetchPlayroomInvitedUserJoinedAtRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: FetchPlayroomInvitedUserJoinedAtVariables): QueryRef<FetchPlayroomInvitedUserJoinedAtData, FetchPlayroomInvitedUserJoinedAtVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: FetchPlayroomInvitedUserJoinedAtVariables): QueryRef<FetchPlayroomInvitedUserJoinedAtData, FetchPlayroomInvitedUserJoinedAtVariables>;
  operationName: string;
}
export const fetchPlayroomInvitedUserJoinedAtRef: FetchPlayroomInvitedUserJoinedAtRef;

export function fetchPlayroomInvitedUserJoinedAt(vars: FetchPlayroomInvitedUserJoinedAtVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomInvitedUserJoinedAtData, FetchPlayroomInvitedUserJoinedAtVariables>;
export function fetchPlayroomInvitedUserJoinedAt(dc: DataConnect, vars: FetchPlayroomInvitedUserJoinedAtVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomInvitedUserJoinedAtData, FetchPlayroomInvitedUserJoinedAtVariables>;

interface FetchPlayroomCreatorUserHeartbeatRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: FetchPlayroomCreatorUserHeartbeatVariables): QueryRef<FetchPlayroomCreatorUserHeartbeatData, FetchPlayroomCreatorUserHeartbeatVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: FetchPlayroomCreatorUserHeartbeatVariables): QueryRef<FetchPlayroomCreatorUserHeartbeatData, FetchPlayroomCreatorUserHeartbeatVariables>;
  operationName: string;
}
export const fetchPlayroomCreatorUserHeartbeatRef: FetchPlayroomCreatorUserHeartbeatRef;

export function fetchPlayroomCreatorUserHeartbeat(vars: FetchPlayroomCreatorUserHeartbeatVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomCreatorUserHeartbeatData, FetchPlayroomCreatorUserHeartbeatVariables>;
export function fetchPlayroomCreatorUserHeartbeat(dc: DataConnect, vars: FetchPlayroomCreatorUserHeartbeatVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomCreatorUserHeartbeatData, FetchPlayroomCreatorUserHeartbeatVariables>;

interface FetchPlayroomInvitedUserHeartbeatRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: FetchPlayroomInvitedUserHeartbeatVariables): QueryRef<FetchPlayroomInvitedUserHeartbeatData, FetchPlayroomInvitedUserHeartbeatVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: FetchPlayroomInvitedUserHeartbeatVariables): QueryRef<FetchPlayroomInvitedUserHeartbeatData, FetchPlayroomInvitedUserHeartbeatVariables>;
  operationName: string;
}
export const fetchPlayroomInvitedUserHeartbeatRef: FetchPlayroomInvitedUserHeartbeatRef;

export function fetchPlayroomInvitedUserHeartbeat(vars: FetchPlayroomInvitedUserHeartbeatVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomInvitedUserHeartbeatData, FetchPlayroomInvitedUserHeartbeatVariables>;
export function fetchPlayroomInvitedUserHeartbeat(dc: DataConnect, vars: FetchPlayroomInvitedUserHeartbeatVariables, options?: ExecuteQueryOptions): QueryPromise<FetchPlayroomInvitedUserHeartbeatData, FetchPlayroomInvitedUserHeartbeatVariables>;

interface ListActivePlayroomSessionsByUserAndGameRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListActivePlayroomSessionsByUserAndGameVariables): QueryRef<ListActivePlayroomSessionsByUserAndGameData, ListActivePlayroomSessionsByUserAndGameVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListActivePlayroomSessionsByUserAndGameVariables): QueryRef<ListActivePlayroomSessionsByUserAndGameData, ListActivePlayroomSessionsByUserAndGameVariables>;
  operationName: string;
}
export const listActivePlayroomSessionsByUserAndGameRef: ListActivePlayroomSessionsByUserAndGameRef;

export function listActivePlayroomSessionsByUserAndGame(vars: ListActivePlayroomSessionsByUserAndGameVariables, options?: ExecuteQueryOptions): QueryPromise<ListActivePlayroomSessionsByUserAndGameData, ListActivePlayroomSessionsByUserAndGameVariables>;
export function listActivePlayroomSessionsByUserAndGame(dc: DataConnect, vars: ListActivePlayroomSessionsByUserAndGameVariables, options?: ExecuteQueryOptions): QueryPromise<ListActivePlayroomSessionsByUserAndGameData, ListActivePlayroomSessionsByUserAndGameVariables>;

interface GetPlayroomSessionByPlayroomSessionIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetPlayroomSessionByPlayroomSessionIdVariables): QueryRef<GetPlayroomSessionByPlayroomSessionIdData, GetPlayroomSessionByPlayroomSessionIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetPlayroomSessionByPlayroomSessionIdVariables): QueryRef<GetPlayroomSessionByPlayroomSessionIdData, GetPlayroomSessionByPlayroomSessionIdVariables>;
  operationName: string;
}
export const getPlayroomSessionByPlayroomSessionIdRef: GetPlayroomSessionByPlayroomSessionIdRef;

export function getPlayroomSessionByPlayroomSessionId(vars: GetPlayroomSessionByPlayroomSessionIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetPlayroomSessionByPlayroomSessionIdData, GetPlayroomSessionByPlayroomSessionIdVariables>;
export function getPlayroomSessionByPlayroomSessionId(dc: DataConnect, vars: GetPlayroomSessionByPlayroomSessionIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetPlayroomSessionByPlayroomSessionIdData, GetPlayroomSessionByPlayroomSessionIdVariables>;

interface GetActivePlayroomSessionByPlayroomSessionIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetActivePlayroomSessionByPlayroomSessionIdVariables): QueryRef<GetActivePlayroomSessionByPlayroomSessionIdData, GetActivePlayroomSessionByPlayroomSessionIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetActivePlayroomSessionByPlayroomSessionIdVariables): QueryRef<GetActivePlayroomSessionByPlayroomSessionIdData, GetActivePlayroomSessionByPlayroomSessionIdVariables>;
  operationName: string;
}
export const getActivePlayroomSessionByPlayroomSessionIdRef: GetActivePlayroomSessionByPlayroomSessionIdRef;

export function getActivePlayroomSessionByPlayroomSessionId(vars: GetActivePlayroomSessionByPlayroomSessionIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetActivePlayroomSessionByPlayroomSessionIdData, GetActivePlayroomSessionByPlayroomSessionIdVariables>;
export function getActivePlayroomSessionByPlayroomSessionId(dc: DataConnect, vars: GetActivePlayroomSessionByPlayroomSessionIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetActivePlayroomSessionByPlayroomSessionIdData, GetActivePlayroomSessionByPlayroomSessionIdVariables>;

