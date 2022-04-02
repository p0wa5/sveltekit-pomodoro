<script>
    import SettingPng from "../../static/settings.png";
    import Settings from "./Settings.svelte";

    let showSettings = false;

    function openSettings(){
        showSettings = !showSettings;
    }
</script>

<div class="w-9/12 mx-auto h-32  flex items-center justify-between">
    <h1 class="text-3xl ">Pomodoro.</h1>

    <div class="flex float-right items-center">
        <div class="" on:click={openSettings}>
            <img class="w-8 h-8" src={SettingPng} alt="settings">
        </div>
    </div>
</div>
<div class="w-5/12 flex float-right w-full">
    {#if showSettings}
        <Settings />
    {/if}
</div>