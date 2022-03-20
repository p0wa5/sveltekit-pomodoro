<script>
    import { get } from 'svelte/store';
    import { longBreakTimeStore, pomoTimeStore, shortBreakTimeStore } from "../Stores/stores";

    let userTime;
    let shortBreakTime;
    let longBreakTime;

    // Update the time stores  
    function submitUserTime(){
        pomoTimeStore.set(userTime * 60);
    }

    function submitShortBreak(){
        shortBreakTimeStore.set(shortBreakTime * 60);
    }

    function submitLongBreak(){
        longBreakTimeStore.set(longBreakTime * 60);
    }
</script>

<div class="w-full flex justify-center items-center rounded">
    <div class="">
        <form class="mt-4" on:submit|preventDefault={submitUserTime}>

            <input class="border"  bind:value={userTime} placeholder="session time">
            <button class="bg-opacity-50 rounded px-1" type="submit">submit</button>
        </form>

        <form class="mt-4" on:submit|preventDefault={submitShortBreak}>
            <input class="border" bind:value={shortBreakTime} placeholder="short break time">
            <button class="bg-opacity-50 rounded px-1" type="submit">submit</button>
        </form>

        <form class="mt-4 mb-4" on:submit|preventDefault={submitLongBreak}>
            <input class="border" bind:value={longBreakTime} placeholder="long break time">
            <button class="bg-opacity-50 rounded px-1" type="submit">submit</button>
        </form>
    </div>
</div>