import { queryRef, executeQuery, validateArgsWithOptions, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const NotificationType = {
  SYSTEM_CHATROOM_CREATED: "SYSTEM_CHATROOM_CREATED",
  SYSTEM_CHATROOM_JOINED: "SYSTEM_CHATROOM_JOINED",
  USER_MESSAGE_RECEIVED: "USER_MESSAGE_RECEIVED",
  USER_FRIEND_REQUEST_SENT: "USER_FRIEND_REQUEST_SENT",
  USER_FRIEND_REQUEST_ACCEPTED: "USER_FRIEND_REQUEST_ACCEPTED",
  USER_JOIN_GAME_INVITE: "USER_JOIN_GAME_INVITE",
  USER_JOIN_GAME_ACCEPTED: "USER_JOIN_GAME_ACCEPTED",
  USER_SPECTATE_GAME_INVITE: "USER_SPECTATE_GAME_INVITE",
  USER_SPECTATE_GAME_ACCEPTED: "USER_SPECTATE_GAME_ACCEPTED",
}

export const connectorConfig = {
  connector: 'kismo-connector',
  service: 'kismo-app-sql-service',
  location: 'europe-west3'
};
export const createUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
createUserRef.operationName = 'CreateUser';

export function createUser(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createUserRef(dcInstance, inputVars));
}

export const createChatroomRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateChatroom', inputVars);
}
createChatroomRef.operationName = 'CreateChatroom';

export function createChatroom(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createChatroomRef(dcInstance, inputVars));
}

export const joinChatroomRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'JoinChatroom', inputVars);
}
joinChatroomRef.operationName = 'JoinChatroom';

export function joinChatroom(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(joinChatroomRef(dcInstance, inputVars));
}

export const leaveChatroomRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'LeaveChatroom', inputVars);
}
leaveChatroomRef.operationName = 'LeaveChatroom';

export function leaveChatroom(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(leaveChatroomRef(dcInstance, inputVars));
}

export const sendMessageRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'SendMessage', inputVars);
}
sendMessageRef.operationName = 'SendMessage';

export function sendMessage(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(sendMessageRef(dcInstance, inputVars));
}

export const updateStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateStatus', inputVars);
}
updateStatusRef.operationName = 'UpdateStatus';

export function updateStatus(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateStatusRef(dcInstance, inputVars));
}

export const updateUserImageRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUserImage', inputVars);
}
updateUserImageRef.operationName = 'UpdateUserImage';

export function updateUserImage(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateUserImageRef(dcInstance, inputVars));
}

export const upsertFriendWithRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertFriendWith', inputVars);
}
upsertFriendWithRef.operationName = 'UpsertFriendWith';

export function upsertFriendWith(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(upsertFriendWithRef(dcInstance, inputVars));
}

export const sendFriendWithRequestRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'SendFriendWithRequest', inputVars);
}
sendFriendWithRequestRef.operationName = 'SendFriendWithRequest';

export function sendFriendWithRequest(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(sendFriendWithRequestRef(dcInstance, inputVars));
}

export const acceptFriendWithRequestRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AcceptFriendWithRequest', inputVars);
}
acceptFriendWithRequestRef.operationName = 'AcceptFriendWithRequest';

export function acceptFriendWithRequest(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(acceptFriendWithRequestRef(dcInstance, inputVars));
}

export const acceptFriendWithRequestBidirectionalRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AcceptFriendWithRequestBidirectional', inputVars);
}
acceptFriendWithRequestBidirectionalRef.operationName = 'AcceptFriendWithRequestBidirectional';

export function acceptFriendWithRequestBidirectional(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(acceptFriendWithRequestBidirectionalRef(dcInstance, inputVars));
}

export const rejectFriendWithRequestBidirectionalRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'RejectFriendWithRequestBidirectional', inputVars);
}
rejectFriendWithRequestBidirectionalRef.operationName = 'RejectFriendWithRequestBidirectional';

export function rejectFriendWithRequestBidirectional(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(rejectFriendWithRequestBidirectionalRef(dcInstance, inputVars));
}

export const deleteFriendWithRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteFriendWith', inputVars);
}
deleteFriendWithRef.operationName = 'DeleteFriendWith';

export function deleteFriendWith(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteFriendWithRef(dcInstance, inputVars));
}

export const updateChatroomDetailsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateChatroomDetails', inputVars);
}
updateChatroomDetailsRef.operationName = 'UpdateChatroomDetails';

export function updateChatroomDetails(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateChatroomDetailsRef(dcInstance, inputVars));
}

export const upsertChatroomStatRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertChatroomStat', inputVars);
}
upsertChatroomStatRef.operationName = 'UpsertChatroomStat';

export function upsertChatroomStat(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(upsertChatroomStatRef(dcInstance, inputVars));
}

export const updateCityNameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateCityName', inputVars);
}
updateCityNameRef.operationName = 'UpdateCityName';

export function updateCityName(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateCityNameRef(dcInstance, inputVars));
}

export const deleteChatroomStatRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteChatroomStat', inputVars);
}
deleteChatroomStatRef.operationName = 'DeleteChatroomStat';

export function deleteChatroomStat(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteChatroomStatRef(dcInstance, inputVars));
}

export const updateStatValueRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateStatValue', inputVars);
}
updateStatValueRef.operationName = 'UpdateStatValue';

export function updateStatValue(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateStatValueRef(dcInstance, inputVars));
}

export const upsertGlobalStatRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertGlobalStat', inputVars);
}
upsertGlobalStatRef.operationName = 'UpsertGlobalStat';

export function upsertGlobalStat(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(upsertGlobalStatRef(dcInstance, inputVars));
}

export const openChatroomSessionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'OpenChatroomSession', inputVars);
}
openChatroomSessionRef.operationName = 'OpenChatroomSession';

export function openChatroomSession(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(openChatroomSessionRef(dcInstance, inputVars));
}

export const closeChatroomSessionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CloseChatroomSession', inputVars);
}
closeChatroomSessionRef.operationName = 'CloseChatroomSession';

export function closeChatroomSession(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(closeChatroomSessionRef(dcInstance, inputVars));
}

export const heartbeatChatroomSessionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'HeartbeatChatroomSession', inputVars);
}
heartbeatChatroomSessionRef.operationName = 'HeartbeatChatroomSession';

export function heartbeatChatroomSession(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(heartbeatChatroomSessionRef(dcInstance, inputVars));
}

export const recordChatroomVisitRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'RecordChatroomVisit', inputVars);
}
recordChatroomVisitRef.operationName = 'RecordChatroomVisit';

export function recordChatroomVisit(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(recordChatroomVisitRef(dcInstance, inputVars));
}

export const trimOldVisitsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'TrimOldVisits', inputVars);
}
trimOldVisitsRef.operationName = 'TrimOldVisits';

export function trimOldVisits(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(trimOldVisitsRef(dcInstance, inputVars));
}

export const createNotificationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNotification', inputVars);
}
createNotificationRef.operationName = 'CreateNotification';

export function createNotification(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createNotificationRef(dcInstance, inputVars));
}

export const markNotificationReadRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'MarkNotificationRead', inputVars);
}
markNotificationReadRef.operationName = 'MarkNotificationRead';

export function markNotificationRead(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(markNotificationReadRef(dcInstance, inputVars));
}

export const markAllNotificationsReadRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'MarkAllNotificationsRead', inputVars);
}
markAllNotificationsReadRef.operationName = 'MarkAllNotificationsRead';

export function markAllNotificationsRead(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(markAllNotificationsReadRef(dcInstance, inputVars));
}

export const initializeChatroomStatsDefaultsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'InitializeChatroomStatsDefaults', inputVars);
}
initializeChatroomStatsDefaultsRef.operationName = 'InitializeChatroomStatsDefaults';

export function initializeChatroomStatsDefaults(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(initializeChatroomStatsDefaultsRef(dcInstance, inputVars));
}

export const incrementChatroomStatRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'IncrementChatroomStat', inputVars);
}
incrementChatroomStatRef.operationName = 'IncrementChatroomStat';

export function incrementChatroomStat(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(incrementChatroomStatRef(dcInstance, inputVars));
}

export const createPlayroomSessionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePlayroomSession', inputVars);
}
createPlayroomSessionRef.operationName = 'CreatePlayroomSession';

export function createPlayroomSession(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createPlayroomSessionRef(dcInstance, inputVars));
}

export const updatePlayroomSessionDetailsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdatePlayroomSessionDetails', inputVars);
}
updatePlayroomSessionDetailsRef.operationName = 'UpdatePlayroomSessionDetails';

export function updatePlayroomSessionDetails(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updatePlayroomSessionDetailsRef(dcInstance, inputVars));
}

export const updatePlayroomInvitedUserJoinedAtRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdatePlayroomInvitedUserJoinedAt', inputVars);
}
updatePlayroomInvitedUserJoinedAtRef.operationName = 'UpdatePlayroomInvitedUserJoinedAt';

export function updatePlayroomInvitedUserJoinedAt(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updatePlayroomInvitedUserJoinedAtRef(dcInstance, inputVars));
}

export const deletePlayroomInvitedUserJoinedAtRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeletePlayroomInvitedUserJoinedAt', inputVars);
}
deletePlayroomInvitedUserJoinedAtRef.operationName = 'DeletePlayroomInvitedUserJoinedAt';

export function deletePlayroomInvitedUserJoinedAt(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deletePlayroomInvitedUserJoinedAtRef(dcInstance, inputVars));
}

export const updatePlayroomCreatorUserHeartbeatRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdatePlayroomCreatorUserHeartbeat', inputVars);
}
updatePlayroomCreatorUserHeartbeatRef.operationName = 'UpdatePlayroomCreatorUserHeartbeat';

export function updatePlayroomCreatorUserHeartbeat(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updatePlayroomCreatorUserHeartbeatRef(dcInstance, inputVars));
}

export const deletePlayroomCreatorUserHeartbeatRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeletePlayroomCreatorUserHeartbeat', inputVars);
}
deletePlayroomCreatorUserHeartbeatRef.operationName = 'DeletePlayroomCreatorUserHeartbeat';

export function deletePlayroomCreatorUserHeartbeat(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deletePlayroomCreatorUserHeartbeatRef(dcInstance, inputVars));
}

export const updatePlayroomInvitedUserHeartbeatRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdatePlayroomInvitedUserHeartbeat', inputVars);
}
updatePlayroomInvitedUserHeartbeatRef.operationName = 'UpdatePlayroomInvitedUserHeartbeat';

export function updatePlayroomInvitedUserHeartbeat(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updatePlayroomInvitedUserHeartbeatRef(dcInstance, inputVars));
}

export const deletePlayroomInvitedUserHeartbeatRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeletePlayroomInvitedUserHeartbeat', inputVars);
}
deletePlayroomInvitedUserHeartbeatRef.operationName = 'DeletePlayroomInvitedUserHeartbeat';

export function deletePlayroomInvitedUserHeartbeat(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deletePlayroomInvitedUserHeartbeatRef(dcInstance, inputVars));
}

export const updatePlayroomSpectatorsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdatePlayroomSpectators', inputVars);
}
updatePlayroomSpectatorsRef.operationName = 'UpdatePlayroomSpectators';

export function updatePlayroomSpectators(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updatePlayroomSpectatorsRef(dcInstance, inputVars));
}

export const deletePlayroomSpectatorsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeletePlayroomSpectators', inputVars);
}
deletePlayroomSpectatorsRef.operationName = 'DeletePlayroomSpectators';

export function deletePlayroomSpectators(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deletePlayroomSpectatorsRef(dcInstance, inputVars));
}

export const updatePlayroomSpectatorsJoinedRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdatePlayroomSpectatorsJoined', inputVars);
}
updatePlayroomSpectatorsJoinedRef.operationName = 'UpdatePlayroomSpectatorsJoined';

export function updatePlayroomSpectatorsJoined(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updatePlayroomSpectatorsJoinedRef(dcInstance, inputVars));
}

export const deletePlayroomSpectatorsJoinedRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeletePlayroomSpectatorsJoined', inputVars);
}
deletePlayroomSpectatorsJoinedRef.operationName = 'DeletePlayroomSpectatorsJoined';

export function deletePlayroomSpectatorsJoined(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deletePlayroomSpectatorsJoinedRef(dcInstance, inputVars));
}

export const closePlayroomSessionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ClosePlayroomSession', inputVars);
}
closePlayroomSessionRef.operationName = 'ClosePlayroomSession';

export function closePlayroomSession(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(closePlayroomSessionRef(dcInstance, inputVars));
}

export const deletePlayroomSessionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeletePlayroomSession', inputVars);
}
deletePlayroomSessionRef.operationName = 'DeletePlayroomSession';

export function deletePlayroomSession(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deletePlayroomSessionRef(dcInstance, inputVars));
}

export const getUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUser', inputVars);
}
getUserRef.operationName = 'GetUser';

export function getUser(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getUserRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const listPublicChatroomsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPublicChatrooms', inputVars);
}
listPublicChatroomsRef.operationName = 'ListPublicChatrooms';

export function listPublicChatrooms(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, false);
  return executeQuery(listPublicChatroomsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const getChatroomMessagesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetChatroomMessages', inputVars);
}
getChatroomMessagesRef.operationName = 'GetChatroomMessages';

export function getChatroomMessages(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getChatroomMessagesRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const listChatroomsByOwnerRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListChatroomsByOwner', inputVars);
}
listChatroomsByOwnerRef.operationName = 'ListChatroomsByOwner';

export function listChatroomsByOwner(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listChatroomsByOwnerRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const listChatroomsByCityRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListChatroomsByCity', inputVars);
}
listChatroomsByCityRef.operationName = 'ListChatroomsByCity';

export function listChatroomsByCity(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listChatroomsByCityRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const searchCitiesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'SearchCities', inputVars);
}
searchCitiesRef.operationName = 'SearchCities';

export function searchCities(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(searchCitiesRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const isMemberRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'IsMember', inputVars);
}
isMemberRef.operationName = 'IsMember';

export function isMember(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(isMemberRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const getFriendWithRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetFriendWith', inputVars);
}
getFriendWithRef.operationName = 'GetFriendWith';

export function getFriendWith(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getFriendWithRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const listFriendWithByUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListFriendWithByUser', inputVars);
}
listFriendWithByUserRef.operationName = 'ListFriendWithByUser';

export function listFriendWithByUser(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listFriendWithByUserRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const listPendingFriendRequestsReceivedRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPendingFriendRequestsReceived', inputVars);
}
listPendingFriendRequestsReceivedRef.operationName = 'ListPendingFriendRequestsReceived';

export function listPendingFriendRequestsReceived(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listPendingFriendRequestsReceivedRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const listAcceptedFriendConnectionsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAcceptedFriendConnections', inputVars);
}
listAcceptedFriendConnectionsRef.operationName = 'ListAcceptedFriendConnections';

export function listAcceptedFriendConnections(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listAcceptedFriendConnectionsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const listMyChatroomsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMyChatrooms', inputVars);
}
listMyChatroomsRef.operationName = 'ListMyChatrooms';

export function listMyChatrooms(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listMyChatroomsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const getGlobalStatsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetGlobalStats');
}
getGlobalStatsRef.operationName = 'GetGlobalStats';

export function getGlobalStats(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getGlobalStatsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const getGlobalStatRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetGlobalStat', inputVars);
}
getGlobalStatRef.operationName = 'GetGlobalStat';

export function getGlobalStat(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getGlobalStatRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const listActiveSessionsByUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListActiveSessionsByUser', inputVars);
}
listActiveSessionsByUserRef.operationName = 'ListActiveSessionsByUser';

export function listActiveSessionsByUser(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listActiveSessionsByUserRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const listActiveSessionsGlobalRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListActiveSessionsGlobal', inputVars);
}
listActiveSessionsGlobalRef.operationName = 'ListActiveSessionsGlobal';

export function listActiveSessionsGlobal(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, false);
  return executeQuery(listActiveSessionsGlobalRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const listRecentVisitedChatroomsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListRecentVisitedChatrooms', inputVars);
}
listRecentVisitedChatroomsRef.operationName = 'ListRecentVisitedChatrooms';

export function listRecentVisitedChatrooms(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listRecentVisitedChatroomsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const listNotificationsByRecipientRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListNotificationsByRecipient', inputVars);
}
listNotificationsByRecipientRef.operationName = 'ListNotificationsByRecipient';

export function listNotificationsByRecipient(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listNotificationsByRecipientRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const countUnreadNotificationsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'CountUnreadNotifications', inputVars);
}
countUnreadNotificationsRef.operationName = 'CountUnreadNotifications';

export function countUnreadNotifications(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(countUnreadNotificationsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const listChatroomStatsByChatroomIdsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListChatroomStatsByChatroomIds', inputVars);
}
listChatroomStatsByChatroomIdsRef.operationName = 'ListChatroomStatsByChatroomIds';

export function listChatroomStatsByChatroomIds(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listChatroomStatsByChatroomIdsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const fetchPlayroomCreatorTokenRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'FetchPlayroomCreatorToken', inputVars);
}
fetchPlayroomCreatorTokenRef.operationName = 'FetchPlayroomCreatorToken';

export function fetchPlayroomCreatorToken(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(fetchPlayroomCreatorTokenRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const fetchPlayroomInvitedUserTokenRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'FetchPlayroomInvitedUserToken', inputVars);
}
fetchPlayroomInvitedUserTokenRef.operationName = 'FetchPlayroomInvitedUserToken';

export function fetchPlayroomInvitedUserToken(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(fetchPlayroomInvitedUserTokenRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const fetchPlayroomParticipantTokenRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'FetchPlayroomParticipantToken', inputVars);
}
fetchPlayroomParticipantTokenRef.operationName = 'FetchPlayroomParticipantToken';

export function fetchPlayroomParticipantToken(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(fetchPlayroomParticipantTokenRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const fetchPlayroomParticipantUserIdsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'FetchPlayroomParticipantUserIds', inputVars);
}
fetchPlayroomParticipantUserIdsRef.operationName = 'FetchPlayroomParticipantUserIds';

export function fetchPlayroomParticipantUserIds(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(fetchPlayroomParticipantUserIdsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const fetchPlayroomInvitedUserJoinedAtRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'FetchPlayroomInvitedUserJoinedAt', inputVars);
}
fetchPlayroomInvitedUserJoinedAtRef.operationName = 'FetchPlayroomInvitedUserJoinedAt';

export function fetchPlayroomInvitedUserJoinedAt(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(fetchPlayroomInvitedUserJoinedAtRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const fetchPlayroomCreatorUserHeartbeatRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'FetchPlayroomCreatorUserHeartbeat', inputVars);
}
fetchPlayroomCreatorUserHeartbeatRef.operationName = 'FetchPlayroomCreatorUserHeartbeat';

export function fetchPlayroomCreatorUserHeartbeat(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(fetchPlayroomCreatorUserHeartbeatRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const fetchPlayroomInvitedUserHeartbeatRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'FetchPlayroomInvitedUserHeartbeat', inputVars);
}
fetchPlayroomInvitedUserHeartbeatRef.operationName = 'FetchPlayroomInvitedUserHeartbeat';

export function fetchPlayroomInvitedUserHeartbeat(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(fetchPlayroomInvitedUserHeartbeatRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const fetchPlayroomSpectatorsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'FetchPlayroomSpectators', inputVars);
}
fetchPlayroomSpectatorsRef.operationName = 'FetchPlayroomSpectators';

export function fetchPlayroomSpectators(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(fetchPlayroomSpectatorsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const fetchPlayroomSpectatorsJoinedRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'FetchPlayroomSpectatorsJoined', inputVars);
}
fetchPlayroomSpectatorsJoinedRef.operationName = 'FetchPlayroomSpectatorsJoined';

export function fetchPlayroomSpectatorsJoined(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(fetchPlayroomSpectatorsJoinedRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const isUserInPlayroomSpectatorsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'IsUserInPlayroomSpectators', inputVars);
}
isUserInPlayroomSpectatorsRef.operationName = 'IsUserInPlayroomSpectators';

export function isUserInPlayroomSpectators(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(isUserInPlayroomSpectatorsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const listActivePlayroomSessionsByUserAndGameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListActivePlayroomSessionsByUserAndGame', inputVars);
}
listActivePlayroomSessionsByUserAndGameRef.operationName = 'ListActivePlayroomSessionsByUserAndGame';

export function listActivePlayroomSessionsByUserAndGame(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listActivePlayroomSessionsByUserAndGameRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const getPlayroomSessionByPlayroomSessionIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPlayroomSessionByPlayroomSessionId', inputVars);
}
getPlayroomSessionByPlayroomSessionIdRef.operationName = 'GetPlayroomSessionByPlayroomSessionId';

export function getPlayroomSessionByPlayroomSessionId(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getPlayroomSessionByPlayroomSessionIdRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

export const getActivePlayroomSessionByPlayroomSessionIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetActivePlayroomSessionByPlayroomSessionId', inputVars);
}
getActivePlayroomSessionByPlayroomSessionIdRef.operationName = 'GetActivePlayroomSessionByPlayroomSessionId';

export function getActivePlayroomSessionByPlayroomSessionId(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getActivePlayroomSessionByPlayroomSessionIdRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}

