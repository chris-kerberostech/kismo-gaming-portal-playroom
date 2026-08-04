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

export const GamePlayedType = {
	SINGLE_PLAYER: "SINGLE_PLAYER",
	TWO_PLAYER: "TWO_PLAYER",
	SPECTATOR: "SPECTATOR",
} as const;

export type PlayroomUsersSessionInfo = {
	playroomSessionId: string;
	playerOneUserId: string | null;
	playerTwoUserId: string | null;
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
	  };

export const names = [
	"Alice",
	"Bob",
	"Charlie",
	"David",
	"Eve",
	"Frank",
	"Grace",
	"Heidi",
	"Ivan",
	"Judy",
	"Kevin",
	"Linda",
	"Mallory",
	"Nancy",
	"Oscar",
	"Peggy",
	"Quentin",
	"Randy",
	"Steve",
	"Trent",
	"Ursula",
	"Victor",
	"Walter",
	"Xavier",
	"Yvonne",
	"Zoe",
];
