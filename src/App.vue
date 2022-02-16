<template>
    <div id="app">
        <b-jumbotron
            header="Covid 19"
            lead="Портал за превенция"
            fluid
            class="mb-0"
            bg-variant="success"
            text-variant="white"
            header-tag="H3"
            header-level="5"
            style="height:150px"
        ></b-jumbotron>
        <b-navbar toggleable="lg" type="dark" variant="success">
            <b-navbar-brand href="#"></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <b-container class="mt-3">
            <b-card>
                <b-row class="my-1">
                    <b-col sm="3">
                        <label :for="iiii">Възръст:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-group>
                            <b-form-radio-group>
                                <b-form-radio
                                    v-model="selected"
                                    name="some-radios"
                                    value="K"
                                >Под 18г.</b-form-radio>
                                <b-form-radio
                                    v-model="selected"
                                    name="some-radios"
                                    value="A"
                                >Над 18г.</b-form-radio>
                            </b-form-radio-group>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col sm="3">
                        <label :for="iiii">Пол:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-group>
                            <b-form-radio-group>
                                <b-form-radio v-model="selected" name="some-radios" value="M">Мъж</b-form-radio>
                                <b-form-radio v-model="selected" name="some-radios" value="F">Жена</b-form-radio>
                            </b-form-radio-group>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="3">
                        <label :for="iiii">Обществен риск:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-group>
                            <b-form-radio-group>
                                <b-form-radio v-model="selected" name="some-radios" value="0">0</b-form-radio>
                                <b-form-radio v-model="selected" name="some-radios" value="1">1</b-form-radio>
                                <b-form-radio v-model="selected" name="some-radios" value="2">2</b-form-radio>
                                <b-form-radio v-model="selected" name="some-radios" value="3">3</b-form-radio>
                                <b-form-radio v-model="selected" name="some-radios" value="4">4</b-form-radio>
                            </b-form-radio-group>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="3">
                        <label :for="iiii">BMI</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-group>
                            <b-form-radio-group>
                                <b-form-radio
                                    v-model="selected"
                                    name="some-radios"
                                    value="0"
                                >&lt; 18.5</b-form-radio>
                                <b-form-radio
                                    v-model="selected"
                                    name="some-radios"
                                    value="1"
                                >18 - 30</b-form-radio>
                                <b-form-radio
                                    v-model="selected"
                                    name="some-radios"
                                    value="2"
                                >&gt; 30</b-form-radio>
                            </b-form-radio-group>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="3">
                        <label :for="iiii">Диабет:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-group>
                            <b-form-radio-group>
                                <b-form-radio v-model="selected" name="some-radios" value="0">НЕ</b-form-radio>
                                <b-form-radio v-model="selected" name="some-radios" value="1">T1c</b-form-radio>
                                <b-form-radio v-model="selected" name="some-radios" value="2">T1d</b-form-radio>
                                <b-form-radio v-model="selected" name="some-radios" value="3">T2c</b-form-radio>
                                <b-form-radio v-model="selected" name="some-radios" value="4">T1d</b-form-radio>
                            </b-form-radio-group>
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-card>
        </b-container>
    </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "App",
    components: {
        //HelloWorld,
    },
};
</script>

<style scoped>
label {
    font-weight: bold;
}
</style>

