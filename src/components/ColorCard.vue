<template>
    <div style="width: 300px; border: 1px solid #e0e0e0; padding: 10px; margin-right: 10px">
    <h3>Orange</h3>
    <div style="width: 100%; background-color: #FC6340; padding: 5px; color: #fff">Main #FC6340 </div>
    <div style="width: 100%; background-color: #F7F3EF; padding: 5px; color: #000">Faded #F7F3EF</div>
    <div style="width: 100%; background-color: #FFDBC2; padding: 5px; color: #000">Light #FFDBC2 </div>
    <div style="width: 100%; background-color: #FF7E61; padding: 5px; color: #fff">Bright #FF7E61  </div>
    <div style="width: 100%; background-color: #E74F2D; padding: 5px; color: #fff">Dark #E74F2D </div>

    <p style="text-align: right; margin-top: 8px;">
        <res-icon
            name="edit"
            size="small"
            style="vertical-align: middle;"
        ></res-icon>
        <router-link
            to="/"
            style="text-decoration: none;"
            >Edit </router-link
        >
        <res-icon
            name="trash"
            size="small"
            style="vertical-align: middle;"
        ></res-icon>
        <router-link
            to="/"
            style="text-decoration: none;"
            >Delete</router-link
        >
    </p>
    </div>
</template>

<script>
export default {
    name: 'ColorCard',
    
};
</script>