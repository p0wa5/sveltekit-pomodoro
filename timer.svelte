<script>
    import { pomoTimeStore} from "../Stores/stores";
    import { shortBreakTimeStore } from "../Stores/stores";
    import { longBreakTimeStore } from "../Stores/stores";

    let pomodoroTime
    let shortBreak
    let longBreak

    // let pomodoroTime = JSON.parse(localStorage.getItem(pomoTimeStore)) ?? 25 * 60;

    

    // subscribe to time stores
    pomoTimeStore.subscribe(time => {
        pomodoroTime = time;
    })

    shortBreakTimeStore.subscribe(s_breakTime => {
        shortBreak = s_breakTime;
    })

    longBreakTimeStore.subscribe(l_breakTime => {
        longBreak = l_breakTime;
    })

    // time calculations
    const minutesToSeconds = (minutes) => minutes * 60;
    const secondsToMinutes = (seconds) => Math.floor(seconds / 60);
    const padWithZeroes = (number) => number.toString().padStart(2, '0');
  
    let completedPomodoros = 0;
    let interval;

    //Timer state
    const State = {idle: "idle", inProgress: "in progress", resting: "resting"};
    let currentState = State.idle;

    //show the time in the MM:SS format
    function formatTime(timeInSeconds) { 
        const minutes = secondsToMinutes(timeInSeconds);
        const remainingSeconds = timeInSeconds % 60;
        return `${padWithZeroes(minutes)}:${padWithZeroes(remainingSeconds)}`;
    }
    
    // start the pomodoro
    function startPomodoro() {
        currentState = State.inProgress;
        interval = setInterval(() => {
            if (pomodoroTime === 0) {
                completePomodoro();
            }
            pomodoroTime -= 1;
        },1000);
    }
  
    // Break times for completed pomodoro
    function completePomodoro(){
        clearInterval(interval);
        completedPomodoros++;
        if (completedPomodoros === 4) {
            rest($longBreakTimeStore);
            completedPomodoros = 0;
        } else {
            rest($shortBreakTimeStore);
        }
    }
    
    // Rest function / break.
    function rest(time){
        currentState = State.resting;
        pomodoroTime = time;
        interval = setInterval(() => {
        if (pomodoroTime === 0) {
            idle();
        }
        pomodoroTime -= 1;
      },1000);
    }
  
    function idle(){
        currentState = State.idle;
        clearInterval(interval);
        pomodoroTime = $pomoTimeStore;
    }

    function cancelPomodoro(){
        idle();
    }
</script>


<div class="w-64 h-72 md:w-96 h-80 flex rounded-2xl bg-gray-700 items-center mx-auto text-white mt-60">
    <div class="mx-auto text-center">
        <p class="text-6xl">{formatTime(pomodoroTime)}</p>

        <p class="mt-6">{completedPomodoros} / 4</p>

        <div class="flex justify-between">
            <button class="text-xl mt-6 bg-zinc-600 p-3 px-6" on:click={startPomodoro} disabled={currentState !== State.idle}>
                >
            </button>
            <button class="ml-4 text-xl mt-6 bg-zinc-600 p-4 px-6" on:click={cancelPomodoro} disabled={currentState !== State.inProgress}>
                X
            </button>
        </div>
    </div>
</div>

