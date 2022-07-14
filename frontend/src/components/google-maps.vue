<template>
    <GMapMap :center="center" :zoom="7" map-type-id="terrain" style="width: 700px; height: 500px">
        <GMapCluster>
            <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
                @click="center = m.position" />
        </GMapCluster>
    </GMapMap>
</template>

<script >
export default {
    name: 'App',
    data() {
        return {
            center: { lat: 51.093048, lng: 6.842120 },
            markers: [
                {
                    position: {
                        lat: 51.093048, lng: 6.842120
                    },

                },
                {
                    position: {
                        lat: 52.093048, lng: 6.842120
                    },

                }, {
                    position: {
                        lat: 51.093048, lng: 8.842120
                    },

                },

            ]
        }
    }
}
</script>

<style>
.vue-map {
    margin: auto;
}
</style>