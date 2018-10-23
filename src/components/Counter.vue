<template>
    <b-container fluid>
        <b-row>
            <b-col>
                <h2>Counter is {{ count }}</h2>
            </b-col>
            <div class="w-100"></div>
            <b-col md="3" offset-md="3">
                <b-button id="increment" @click="increment" variant="primary">Increment</b-button>
            </b-col>
            <b-col md="3">
                <b-button id="decrement" @click="decrement" variant="warning">Decrement</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Counter",
  computed: {
    ...mapState(["count"])
  },
  methods: {
    ...mapActions(["increment", "decrement"])
  }
};
</script>
