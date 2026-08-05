export type ChatMessage = {
	id: string;
	content: string;
	user: string;
	role: "user" | "assistant";
};

export enum PlayroomTokenRole {
  CREATOR = "creator",
  INVITED = "invited",
  SPECTATOR = "spectator",
}

export type PlayroomUsersSessionInfo = {
	playroomSessionId: string;
	playerOneUserId: string | null;
	playerTwoUserId: string | null;
	playerOneSessionScore: number;
	playerTwoSessionScore: number;
	spectatorUserIds: string[];
	updatedAt: number;
};

export type PlayroomUserProfile = {
	userId: string;
	name: string;
	imageUrl: string | null;
	score: number | null;
	updatedAt: number;
};

export type Score4TwoPlayerSlot = "player_one" | "player_two";

export type Score4TwoPlayerCell = Score4TwoPlayerSlot | null;

export type Score4TwoPlayerStatus = "playing" | "won" | "draw";

export type Score4TwoPlayerState = {
	board: Score4TwoPlayerCell[][];
	turn: Score4TwoPlayerSlot;
	status: Score4TwoPlayerStatus;
	winner: Score4TwoPlayerSlot | null;
	updatedAt: number;
};

export type Message =
	| {
			type: "add";
			id: string;
			content: string;
			user: string;
			role: "user" | "assistant";
	  }
	| {
			type: "update";
			id: string;
			content: string;
			user: string;
			role: "user" | "assistant";
	  }
	| {
			type: "all";
			messages: ChatMessage[];
	  }
	| {
			type: "playroom-users-register";
			role: PlayroomTokenRole;
			userId: string;
			playroomSessionId: string;
	  }
	| {
			type: "user-score-update";
			score: number;
	  }
	| {
			type: "playroom-users-sync";
			session: PlayroomUsersSessionInfo;
			users: PlayroomUserProfile[];
	  }
	| {
			type: "score4-two-player-state";
			playroomSessionId: string;
			state: Score4TwoPlayerState;
	  }
	| {
			type: "score4-two-player-session-score-update";
			playroomSessionId: string;
			winner: Score4TwoPlayerSlot;
	  };
