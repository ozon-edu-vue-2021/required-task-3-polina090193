<template>
    <div class="person">
        <div class="person__photo">
            <img
                :src="person.picture"
                alt="photo"
            />
        </div>
        <div class="person__info">
            <div class="person__info-name">
                <b>{{ person.name }} ({{ person.age }})</b>
            </div>

            <div class="person__info-email">Почта: {{ person.email }}</div>
            <div class="person__info-email">
                Дата регистрации: {{ formatedDate }}
            </div>
            <div class="person__info-about">О себе: {{ person.about }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        person: {
            type: Object,
            default: null,
        },
    },
    computed: {
        formatedDate() {
            return this.person.registered;
        },
    },
};
</script>

<style scoped>
.person {
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-gap: 8px;
}

.person__photo img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
}

.person__info {
    display: grid;
    grid-gap: 8px;
}

.person__info-name {
    margin-bottom: 10px;
}
</style>
