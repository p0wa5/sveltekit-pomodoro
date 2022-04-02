import { writable } from "svelte/store";
import { browser } from "$app/env";



// Pomodoro Session time store
//export const pomoTimeStore = writable(25 * 60);

export const pomoTimeStore = writable(browser && (localStorage.getItem("pomoTimeStore") || 25 * 60));
pomoTimeStore.subscribe((val) => browser && localStorage.setItem("pomoTimeStore", val.toString()));

// Pomodoro Break time store
//export const shortBreakTimeStore = writable( 5 * 60);

export const shortBreakTimeStore = writable(browser && (localStorage.getItem("shortBreakTimeStore") || 5 * 60));
shortBreakTimeStore.subscribe((val) => browser && localStorage.setItem("shortBreakTimeStore", val.toString()));

// Pomodoro Long Break time store
//export const longBreakTimeStore = writable(10 * 60);

export const longBreakTimeStore = writable(browser && (localStorage.getItem("longBreakTimeStore") || 10 * 60 ));
longBreakTimeStore.subscribe((val) => browser && localStorage.setItem("longBreakTimeStore", val.toString()));
