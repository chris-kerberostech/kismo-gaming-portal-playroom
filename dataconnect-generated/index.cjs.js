const { queryRef, executeQuery, validateArgsWithOptions, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const NotificationType = {
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
exports.NotificationType = NotificationType;

const connectorConfig = {
  connector: 'kismo-connector',
  service: 'kismo-app-sql-service',
  location: 'europe-west3'
};
exports.connectorConfig = connectorConfig;

const createUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
createUserRef.operationName = 'CreateUser';
exports.createUserRef = createUserRef;

exports.createUser = function createUser(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createUserRef(dcInstance, inputVars));
}
;

const createChatroomRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateChatroom', inputVars);
}
createChatroomRef.operationName = 'CreateChatroom';
exports.createChatroomRef = createChatroomRef;

exports.createChatroom = function createChatroom(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createChatroomRef(dcInstance, inputVars));
}
;

const joinChatroomRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'JoinChatroom', inputVars);
}
joinChatroomRef.operationName = 'JoinChatroom';
exports.joinChatroomRef = joinChatroomRef;

exports.joinChatroom = function joinChatroom(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(joinChatroomRef(dcInstance, inputVars));
}
;

const leaveChatroomRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'LeaveChatroom', inputVars);
}
leaveChatroomRef.operationName = 'LeaveChatroom';
exports.leaveChatroomRef = leaveChatroomRef;

exports.leaveChatroom = function leaveChatroom(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(leaveChatroomRef(dcInstance, inputVars));
}
;

const sendMessageRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'SendMessage', inputVars);
}
sendMessageRef.operationName = 'SendMessage';
exports.sendMessageRef = sendMessageRef;

exports.sendMessage = function sendMessage(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(sendMessageRef(dcInstance, inputVars));
}
;

const updateStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateStatus', inputVars);
}
updateStatusRef.operationName = 'UpdateStatus';
exports.updateStatusRef = updateStatusRef;

exports.updateStatus = function updateStatus(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateStatusRef(dcInstance, inputVars));
}
;

const updateUserImageRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUserImage', inputVars);
}
updateUserImageRef.operationName = 'UpdateUserImage';
exports.updateUserImageRef = updateUserImageRef;

exports.updateUserImage = function updateUserImage(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateUserImageRef(dcInstance, inputVars));
}
;

const upsertFriendWithRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertFriendWith', inputVars);
}
upsertFriendWithRef.operationName = 'UpsertFriendWith';
exports.upsertFriendWithRef = upsertFriendWithRef;

exports.upsertFriendWith = function upsertFriendWith(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(upsertFriendWithRef(dcInstance, inputVars));
}
;

const sendFriendWithRequestRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'SendFriendWithRequest', inputVars);
}
sendFriendWithRequestRef.operationName = 'SendFriendWithRequest';
exports.sendFriendWithRequestRef = sendFriendWithRequestRef;

exports.sendFriendWithRequest = function sendFriendWithRequest(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(sendFriendWithRequestRef(dcInstance, inputVars));
}
;

const acceptFriendWithRequestRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AcceptFriendWithRequest', inputVars);
}
acceptFriendWithRequestRef.operationName = 'AcceptFriendWithRequest';
exports.acceptFriendWithRequestRef = acceptFriendWithRequestRef;

exports.acceptFriendWithRequest = function acceptFriendWithRequest(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(acceptFriendWithRequestRef(dcInstance, inputVars));
}
;

const acceptFriendWithRequestBidirectionalRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AcceptFriendWithRequestBidirectional', inputVars);
}
acceptFriendWithRequestBidirectionalRef.operationName = 'AcceptFriendWithRequestBidirectional';
exports.acceptFriendWithRequestBidirectionalRef = acceptFriendWithRequestBidirectionalRef;

exports.acceptFriendWithRequestBidirectional = function acceptFriendWithRequestBidirectional(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(acceptFriendWithRequestBidirectionalRef(dcInstance, inputVars));
}
;

const rejectFriendWithRequestBidirectionalRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'RejectFriendWithRequestBidirectional', inputVars);
}
rejectFriendWithRequestBidirectionalRef.operationName = 'RejectFriendWithRequestBidirectional';
exports.rejectFriendWithRequestBidirectionalRef = rejectFriendWithRequestBidirectionalRef;

exports.rejectFriendWithRequestBidirectional = function rejectFriendWithRequestBidirectional(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(rejectFriendWithRequestBidirectionalRef(dcInstance, inputVars));
}
;

const deleteFriendWithRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteFriendWith', inputVars);
}
deleteFriendWithRef.operationName = 'DeleteFriendWith';
exports.deleteFriendWithRef = deleteFriendWithRef;

exports.deleteFriendWith = function deleteFriendWith(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteFriendWithRef(dcInstance, inputVars));
}
;

const updateChatroomDetailsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateChatroomDetails', inputVars);
}
updateChatroomDetailsRef.operationName = 'UpdateChatroomDetails';
exports.updateChatroomDetailsRef = updateChatroomDetailsRef;

exports.updateChatroomDetails = function updateChatroomDetails(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateChatroomDetailsRef(dcInstance, inputVars));
}
;

const upsertChatroomStatRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertChatroomStat', inputVars);
}
upsertChatroomStatRef.operationName = 'UpsertChatroomStat';
exports.upsertChatroomStatRef = upsertChatroomStatRef;

exports.upsertChatroomStat = function upsertChatroomStat(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(upsertChatroomStatRef(dcInstance, inputVars));
}
;

const updateCityNameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateCityName', inputVars);
}
updateCityNameRef.operationName = 'UpdateCityName';
exports.updateCityNameRef = updateCityNameRef;

exports.updateCityName = function updateCityName(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateCityNameRef(dcInstance, inputVars));
}
;

const deleteChatroomStatRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteChatroomStat', inputVars);
}
deleteChatroomStatRef.operationName = 'DeleteChatroomStat';
exports.deleteChatroomStatRef = deleteChatroomStatRef;

exports.deleteChatroomStat = function deleteChatroomStat(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteChatroomStatRef(dcInstance, inputVars));
}
;

const updateStatValueRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateStatValue', inputVars);
}
updateStatValueRef.operationName = 'UpdateStatValue';
exports.updateStatValueRef = updateStatValueRef;

exports.updateStatValue = function updateStatValue(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateStatValueRef(dcInstance, inputVars));
}
;

const upsertGlobalStatRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertGlobalStat', inputVars);
}
upsertGlobalStatRef.operationName = 'UpsertGlobalStat';
exports.upsertGlobalStatRef = upsertGlobalStatRef;

exports.upsertGlobalStat = function upsertGlobalStat(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(upsertGlobalStatRef(dcInstance, inputVars));
}
;

const openChatroomSessionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'OpenChatroomSession', inputVars);
}
openChatroomSessionRef.operationName = 'OpenChatroomSession';
exports.openChatroomSessionRef = openChatroomSessionRef;

exports.openChatroomSession = function openChatroomSession(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(openChatroomSessionRef(dcInstance, inputVars));
}
;

const closeChatroomSessionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CloseChatroomSession', inputVars);
}
closeChatroomSessionRef.operationName = 'CloseChatroomSession';
exports.closeChatroomSessionRef = closeChatroomSessionRef;

exports.closeChatroomSession = function closeChatroomSession(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(closeChatroomSessionRef(dcInstance, inputVars));
}
;

const heartbeatChatroomSessionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'HeartbeatChatroomSession', inputVars);
}
heartbeatChatroomSessionRef.operationName = 'HeartbeatChatroomSession';
exports.heartbeatChatroomSessionRef = heartbeatChatroomSessionRef;

exports.heartbeatChatroomSession = function heartbeatChatroomSession(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(heartbeatChatroomSessionRef(dcInstance, inputVars));
}
;

const recordChatroomVisitRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'RecordChatroomVisit', inputVars);
}
recordChatroomVisitRef.operationName = 'RecordChatroomVisit';
exports.recordChatroomVisitRef = recordChatroomVisitRef;

exports.recordChatroomVisit = function recordChatroomVisit(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(recordChatroomVisitRef(dcInstance, inputVars));
}
;

const trimOldVisitsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'TrimOldVisits', inputVars);
}
trimOldVisitsRef.operationName = 'TrimOldVisits';
exports.trimOldVisitsRef = trimOldVisitsRef;

exports.trimOldVisits = function trimOldVisits(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(trimOldVisitsRef(dcInstance, inputVars));
}
;

const createNotificationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNotification', inputVars);
}
createNotificationRef.operationName = 'CreateNotification';
exports.createNotificationRef = createNotificationRef;

exports.createNotification = function createNotification(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createNotificationRef(dcInstance, inputVars));
}
;

const markNotificationReadRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'MarkNotificationRead', inputVars);
}
markNotificationReadRef.operationName = 'MarkNotificationRead';
exports.markNotificationReadRef = markNotificationReadRef;

exports.markNotificationRead = function markNotificationRead(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(markNotificationReadRef(dcInstance, inputVars));
}
;

const markAllNotificationsReadRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'MarkAllNotificationsRead', inputVars);
}
markAllNotificationsReadRef.operationName = 'MarkAllNotificationsRead';
exports.markAllNotificationsReadRef = markAllNotificationsReadRef;

exports.markAllNotificationsRead = function markAllNotificationsRead(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(markAllNotificationsReadRef(dcInstance, inputVars));
}
;

const initializeChatroomStatsDefaultsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'InitializeChatroomStatsDefaults', inputVars);
}
initializeChatroomStatsDefaultsRef.operationName = 'InitializeChatroomStatsDefaults';
exports.initializeChatroomStatsDefaultsRef = initializeChatroomStatsDefaultsRef;

exports.initializeChatroomStatsDefaults = function initializeChatroomStatsDefaults(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(initializeChatroomStatsDefaultsRef(dcInstance, inputVars));
}
;

const incrementChatroomStatRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'IncrementChatroomStat', inputVars);
}
incrementChatroomStatRef.operationName = 'IncrementChatroomStat';
exports.incrementChatroomStatRef = incrementChatroomStatRef;

exports.incrementChatroomStat = function incrementChatroomStat(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(incrementChatroomStatRef(dcInstance, inputVars));
}
;

const createPlayroomSessionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePlayroomSession', inputVars);
}
createPlayroomSessionRef.operationName = 'CreatePlayroomSession';
exports.createPlayroomSessionRef = createPlayroomSessionRef;

exports.createPlayroomSession = function createPlayroomSession(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createPlayroomSessionRef(dcInstance, inputVars));
}
;

const updatePlayroomSessionDetailsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdatePlayroomSessionDetails', inputVars);
}
updatePlayroomSessionDetailsRef.operationName = 'UpdatePlayroomSessionDetails';
exports.updatePlayroomSessionDetailsRef = updatePlayroomSessionDetailsRef;

exports.updatePlayroomSessionDetails = function updatePlayroomSessionDetails(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updatePlayroomSessionDetailsRef(dcInstance, inputVars));
}
;

const closePlayroomSessionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ClosePlayroomSession', inputVars);
}
closePlayroomSessionRef.operationName = 'ClosePlayroomSession';
exports.closePlayroomSessionRef = closePlayroomSessionRef;

exports.closePlayroomSession = function closePlayroomSession(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(closePlayroomSessionRef(dcInstance, inputVars));
}
;

const deletePlayroomSessionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeletePlayroomSession', inputVars);
}
deletePlayroomSessionRef.operationName = 'DeletePlayroomSession';
exports.deletePlayroomSessionRef = deletePlayroomSessionRef;

exports.deletePlayroomSession = function deletePlayroomSession(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deletePlayroomSessionRef(dcInstance, inputVars));
}
;

const getUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUser', inputVars);
}
getUserRef.operationName = 'GetUser';
exports.getUserRef = getUserRef;

exports.getUser = function getUser(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getUserRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listPublicChatroomsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPublicChatrooms', inputVars);
}
listPublicChatroomsRef.operationName = 'ListPublicChatrooms';
exports.listPublicChatroomsRef = listPublicChatroomsRef;

exports.listPublicChatrooms = function listPublicChatrooms(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, false);
  return executeQuery(listPublicChatroomsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getChatroomMessagesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetChatroomMessages', inputVars);
}
getChatroomMessagesRef.operationName = 'GetChatroomMessages';
exports.getChatroomMessagesRef = getChatroomMessagesRef;

exports.getChatroomMessages = function getChatroomMessages(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getChatroomMessagesRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listChatroomsByOwnerRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListChatroomsByOwner', inputVars);
}
listChatroomsByOwnerRef.operationName = 'ListChatroomsByOwner';
exports.listChatroomsByOwnerRef = listChatroomsByOwnerRef;

exports.listChatroomsByOwner = function listChatroomsByOwner(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listChatroomsByOwnerRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listChatroomsByCityRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListChatroomsByCity', inputVars);
}
listChatroomsByCityRef.operationName = 'ListChatroomsByCity';
exports.listChatroomsByCityRef = listChatroomsByCityRef;

exports.listChatroomsByCity = function listChatroomsByCity(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listChatroomsByCityRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const searchCitiesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'SearchCities', inputVars);
}
searchCitiesRef.operationName = 'SearchCities';
exports.searchCitiesRef = searchCitiesRef;

exports.searchCities = function searchCities(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(searchCitiesRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const isMemberRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'IsMember', inputVars);
}
isMemberRef.operationName = 'IsMember';
exports.isMemberRef = isMemberRef;

exports.isMember = function isMember(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(isMemberRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getFriendWithRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetFriendWith', inputVars);
}
getFriendWithRef.operationName = 'GetFriendWith';
exports.getFriendWithRef = getFriendWithRef;

exports.getFriendWith = function getFriendWith(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getFriendWithRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listFriendWithByUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListFriendWithByUser', inputVars);
}
listFriendWithByUserRef.operationName = 'ListFriendWithByUser';
exports.listFriendWithByUserRef = listFriendWithByUserRef;

exports.listFriendWithByUser = function listFriendWithByUser(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listFriendWithByUserRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listPendingFriendRequestsReceivedRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPendingFriendRequestsReceived', inputVars);
}
listPendingFriendRequestsReceivedRef.operationName = 'ListPendingFriendRequestsReceived';
exports.listPendingFriendRequestsReceivedRef = listPendingFriendRequestsReceivedRef;

exports.listPendingFriendRequestsReceived = function listPendingFriendRequestsReceived(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listPendingFriendRequestsReceivedRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listAcceptedFriendConnectionsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAcceptedFriendConnections', inputVars);
}
listAcceptedFriendConnectionsRef.operationName = 'ListAcceptedFriendConnections';
exports.listAcceptedFriendConnectionsRef = listAcceptedFriendConnectionsRef;

exports.listAcceptedFriendConnections = function listAcceptedFriendConnections(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listAcceptedFriendConnectionsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listMyChatroomsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMyChatrooms', inputVars);
}
listMyChatroomsRef.operationName = 'ListMyChatrooms';
exports.listMyChatroomsRef = listMyChatroomsRef;

exports.listMyChatrooms = function listMyChatrooms(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listMyChatroomsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getGlobalStatsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetGlobalStats');
}
getGlobalStatsRef.operationName = 'GetGlobalStats';
exports.getGlobalStatsRef = getGlobalStatsRef;

exports.getGlobalStats = function getGlobalStats(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getGlobalStatsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getGlobalStatRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetGlobalStat', inputVars);
}
getGlobalStatRef.operationName = 'GetGlobalStat';
exports.getGlobalStatRef = getGlobalStatRef;

exports.getGlobalStat = function getGlobalStat(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getGlobalStatRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listActiveSessionsByUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListActiveSessionsByUser', inputVars);
}
listActiveSessionsByUserRef.operationName = 'ListActiveSessionsByUser';
exports.listActiveSessionsByUserRef = listActiveSessionsByUserRef;

exports.listActiveSessionsByUser = function listActiveSessionsByUser(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listActiveSessionsByUserRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listActiveSessionsGlobalRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListActiveSessionsGlobal', inputVars);
}
listActiveSessionsGlobalRef.operationName = 'ListActiveSessionsGlobal';
exports.listActiveSessionsGlobalRef = listActiveSessionsGlobalRef;

exports.listActiveSessionsGlobal = function listActiveSessionsGlobal(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, false);
  return executeQuery(listActiveSessionsGlobalRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listRecentVisitedChatroomsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListRecentVisitedChatrooms', inputVars);
}
listRecentVisitedChatroomsRef.operationName = 'ListRecentVisitedChatrooms';
exports.listRecentVisitedChatroomsRef = listRecentVisitedChatroomsRef;

exports.listRecentVisitedChatrooms = function listRecentVisitedChatrooms(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listRecentVisitedChatroomsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listNotificationsByRecipientRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListNotificationsByRecipient', inputVars);
}
listNotificationsByRecipientRef.operationName = 'ListNotificationsByRecipient';
exports.listNotificationsByRecipientRef = listNotificationsByRecipientRef;

exports.listNotificationsByRecipient = function listNotificationsByRecipient(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listNotificationsByRecipientRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const countUnreadNotificationsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'CountUnreadNotifications', inputVars);
}
countUnreadNotificationsRef.operationName = 'CountUnreadNotifications';
exports.countUnreadNotificationsRef = countUnreadNotificationsRef;

exports.countUnreadNotifications = function countUnreadNotifications(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(countUnreadNotificationsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listChatroomStatsByChatroomIdsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListChatroomStatsByChatroomIds', inputVars);
}
listChatroomStatsByChatroomIdsRef.operationName = 'ListChatroomStatsByChatroomIds';
exports.listChatroomStatsByChatroomIdsRef = listChatroomStatsByChatroomIdsRef;

exports.listChatroomStatsByChatroomIds = function listChatroomStatsByChatroomIds(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listChatroomStatsByChatroomIdsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const fetchPlayroomCreatorTokenRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'FetchPlayroomCreatorToken', inputVars);
}
fetchPlayroomCreatorTokenRef.operationName = 'FetchPlayroomCreatorToken';
exports.fetchPlayroomCreatorTokenRef = fetchPlayroomCreatorTokenRef;

exports.fetchPlayroomCreatorToken = function fetchPlayroomCreatorToken(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(fetchPlayroomCreatorTokenRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const fetchPlayroomInvitedUserTokenRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'FetchPlayroomInvitedUserToken', inputVars);
}
fetchPlayroomInvitedUserTokenRef.operationName = 'FetchPlayroomInvitedUserToken';
exports.fetchPlayroomInvitedUserTokenRef = fetchPlayroomInvitedUserTokenRef;

exports.fetchPlayroomInvitedUserToken = function fetchPlayroomInvitedUserToken(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(fetchPlayroomInvitedUserTokenRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const fetchPlayroomParticipantTokenRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'FetchPlayroomParticipantToken', inputVars);
}
fetchPlayroomParticipantTokenRef.operationName = 'FetchPlayroomParticipantToken';
exports.fetchPlayroomParticipantTokenRef = fetchPlayroomParticipantTokenRef;

exports.fetchPlayroomParticipantToken = function fetchPlayroomParticipantToken(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(fetchPlayroomParticipantTokenRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const fetchPlayroomParticipantUserIdsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'FetchPlayroomParticipantUserIds', inputVars);
}
fetchPlayroomParticipantUserIdsRef.operationName = 'FetchPlayroomParticipantUserIds';
exports.fetchPlayroomParticipantUserIdsRef = fetchPlayroomParticipantUserIdsRef;

exports.fetchPlayroomParticipantUserIds = function fetchPlayroomParticipantUserIds(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(fetchPlayroomParticipantUserIdsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listActivePlayroomSessionsByUserAndGameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListActivePlayroomSessionsByUserAndGame', inputVars);
}
listActivePlayroomSessionsByUserAndGameRef.operationName = 'ListActivePlayroomSessionsByUserAndGame';
exports.listActivePlayroomSessionsByUserAndGameRef = listActivePlayroomSessionsByUserAndGameRef;

exports.listActivePlayroomSessionsByUserAndGame = function listActivePlayroomSessionsByUserAndGame(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listActivePlayroomSessionsByUserAndGameRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getPlayroomSessionByPlayroomSessionIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPlayroomSessionByPlayroomSessionId', inputVars);
}
getPlayroomSessionByPlayroomSessionIdRef.operationName = 'GetPlayroomSessionByPlayroomSessionId';
exports.getPlayroomSessionByPlayroomSessionIdRef = getPlayroomSessionByPlayroomSessionIdRef;

exports.getPlayroomSessionByPlayroomSessionId = function getPlayroomSessionByPlayroomSessionId(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getPlayroomSessionByPlayroomSessionIdRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getActivePlayroomSessionByPlayroomSessionIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetActivePlayroomSessionByPlayroomSessionId', inputVars);
}
getActivePlayroomSessionByPlayroomSessionIdRef.operationName = 'GetActivePlayroomSessionByPlayroomSessionId';
exports.getActivePlayroomSessionByPlayroomSessionIdRef = getActivePlayroomSessionByPlayroomSessionIdRef;

exports.getActivePlayroomSessionByPlayroomSessionId = function getActivePlayroomSessionByPlayroomSessionId(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getActivePlayroomSessionByPlayroomSessionIdRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;
