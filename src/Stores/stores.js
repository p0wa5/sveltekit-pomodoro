import { writable } from "svelte-local-storage-store";


// Pomodoro Session time store
export const pomoTimeStore = writable('preferences', 25 * 60);

// Pomodoro Break time store
export const shortBreakTimeStore = writable('preferences', 5 * 60);

// Pomodoro Long Break time store

export const longBreakTimeStore = writable('preferences', 10 * 60);