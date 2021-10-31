<template>
    <div class="map">
        <h3>Карта офиса</h3>

        <div
            v-if="!isLoading"
            class="map-root"
        >
            <!-- map -->
        </div>
        <div v-else>Loading...</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: false,
        };
    },
};
</script>

<style scoped>
.map {
    height: 100%;
    width: 100%;
    padding: 24px;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

.map-root {
    height: 100%;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
}

h3 {
    margin-top: 0px;
}

::v-deep svg {
    height: 100%;
    width: 100%;
}

::v-deep .table {
    cursor: pointer;
}
</style>
