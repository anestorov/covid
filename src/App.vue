<template>
    <div id="app">
        <b-jumbotron
            header=""
            lead
            fluid
            class="mb-0"
            bg-variant="info"
            text-variant="white"
            header-tag="H3"
            header-level="5"
        >
        </b-jumbotron>

        <b-container fluid class="mt-3">
            <b-card>
                <b-form @submit="Calculate">
                    <b-row class="my-1">
                        <b-col sm="4">
                            <label for="field0" :style="{color:states[0]===false?'red':null}">Възръст:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-group>
                                <b-form-radio-group
                                    :style="{color:states[0]===false?'red':null}"
                                    id="field0"
                                    :state="states[0]"
                                    v-model="selected[0]"
                                    :options="[{value:0, text:'5 - 11г.'}, {value:1, text: '12 - 17г.'}, {value:2, text:'Над 18г.'}]"
                                ></b-form-radio-group>
                                <b-form-invalid-feedback :state="states[0]">Изберете опция</b-form-invalid-feedback>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="4">
                            <label for="field1" :style="{color:states[1]===false?'red':null}">Пол:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-group>
                                <b-form-radio-group
                                    id="field1"
                                    :style="{color:states[1]===false?'red':null}"
                                    v-model="selected[1]"
                                    :options="[{value:0, text:'Мъж'}, {value:1, text:'Жена'}]"
                                ></b-form-radio-group>
                                <b-form-invalid-feedback :state="states[1]">Изберете опция</b-form-invalid-feedback>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label>Обществен риск:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-select
                                id="field2"
                                :select-size="6"
                                v-model="selected[2]"
                                :options="[{value: 0, text:'Липсват данни'}, {value:1, text:'Нисък (20 случаи/ден)'}, {value:2, text:'Умерен (200 случаи/ден)'}, {value:3, text:'Висок (2500 случаи/ден)'}, {value:4, text:'Много висок (6800 случаи/ден)'}, {value:5, text:'Екстремно висок (13600 случаи/ден)'}]"
                            ></b-form-select>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label for="field3" :style="{color:states[3]===false?'red':null}">BMI:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-group>
                                <b-form-radio-group
                                    id="field3"
                                    :style="{color:states[3]===false?'red':null}"
                                    v-model="selected[3]"
                                    :options="[{value:0, text:'<18.5'}, {value:1, text:'18.5 - 30'}, {value:2, text:'>30'}]"
                                ></b-form-radio-group>
                                <b-form-invalid-feedback :state="states[3]">Изберете опция</b-form-invalid-feedback>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label>Диабет:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-select
                                :select-size="5"
                                v-model="selected[4]"
                                :options="[{value:0, text:'Липсват данни'}, {value:1, text:'Компенсиран тип 1 диабет (HBA1C <6.5%)'}, {value:2, text:'Декомпенсиран тип 1 диабет (HBA1C >7.5%)'}, {value:3, text:'Компенсиран тип 2 диабет (HBA1C <6.5%)'}, {value:4, text:'Декомпенсиран тип 2 диабет (HBA1C >7.5%)'}]"
                            ></b-form-select>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label>Хронична бъбречна недостатъчност (ХБН):</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-select
                                :select-size="6"
                                v-model="selected[5]"
                                :options="[{value:0, text:'Липсват данни'}, {value:1, text:'Стадий I (GFR > 90 mL/min)'}, {value:2, text:'Стадий II (GFR 60-89 mL/min)'}, {value:3, text:'Стадий III (GFR 30-59 mL/min)'}, {value:4, text:'Стадий IV (GFR 15-29 mL/min)'}, {value:5, text: 'Стадий V (GFR < 15 mL/min)'}]"
                            ></b-form-select>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label>Онкологичен пациент:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-select
                                :select-size="4"
                                v-model="selected[6]"
                                :options="[{value:0, text:'Липсват данни'}, {value:1, text:'Солидно заболяване'}, {value:2, text:'Хематологично заболяване'}, {value:3, text:'Матестазирало заболяване'}]"
                            ></b-form-select>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label>Автоимунни и възпалителни ревматични заболявания (АВРЗ):</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="selected[7]"
                                    :options="[{value:0, text:'Липсват данни'}, {value:1, text:'Ремисия'}, {value:2, text:'Активно'}]"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label>Хронични пулмопатии:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="selected[8]"
                                    :options="[{value:0, text:'Липсват данни'}, {value:1, text:'Бронхиална астма (независимо от стадий)'}, {value:2, text:'Хроничен бронхит'}, {value:3, text:'Емфизем'}]"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label>Сърдечно-съдови заболявания (ССЗ):</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-select
                                :select-size="8"
                                v-model="selected[9]"
                                :options="[{value:0, text:'Липсват данни'}, {value:1, text:'Вродени сърдечни заболявания'}, {value:2, text:'Коронарна болест'}, {value:3, text:'Преживял инсулт или транзирторна исхемична атака'}, {value: 4, text:'Предсърдно мъждене'}, {value:5, text:'Сърдечна недостатъчност (независимо от стадий)'}, {value:6, text:'Периферна съдова болест (независимо от стадий)'}, {value:7, text:'Преживял тромбоза или БТЕ'}]"
                            ></b-form-select>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label>Неврологични заболявания:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-select
                                :select-size="5"
                                v-model="selected[10]"
                                :options="[{value:0, text:'Липсват данни'}, {value:1, text:'Болест на Паркинсон'}, {value:2, text:'Епилепсия'}, {value:3, text:'Болест на моторните неврони, множественна склероза, миастания или болест на Хънтингтън'}, {value: 4, text:'Детска церебрална пареза (ДЦП)'}]"
                            ></b-form-select>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label>Психиатрични отклонения:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="selected[11]"
                                    :options="[{value:0, text:'Липсват данни'}, {value:1, text:'Биполярно афективно разстройство'}, {value:2, text:'Шизофрения'}, {value:3, text:'Деменция'}]"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label>Имунен дефицит:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="selected[12]"
                                    :options="[{value:0, text:'Липсват данни'}, {value:1, text:'Клетъчен'}, {value:2, text:'Хомурален'}, {value:3, text:'Смесен'}]"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label>Активна химиотерапия:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="selected[13]"
                                    :options="[{value:0, text:'Липсват данни'}, {value:1, text:'Медикаменти група А'}, {value:2, text:'Медикаменти група B'}, {value:3, text:'Медикаменти група C'}]"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label>Имуномодулиращи лекарства:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="selected[14]"
                                    :options="[{value:0, text:'Липсват данни'}, {value:1, text:'НСПВС'}, {value:2, text:'Стероиди'}, {value:3, text:'Антиревматични лекарства (DMARDs)'}, {value:4, text:'Биологични агенти'}]"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label>Хронични инфекции:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="selected[15]"
                                    :options="[{value:0, text:'Липсват данни'}, {value:1, text:'Хепатит B'}, {value:2, text:'Хепатит C'}, {value:3, text:'HIV'}, {value:4, text:'Туберкулоза'}]"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label>Хронична чернодробна недостатъчност:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-select
                                :select-size="5"
                                v-model="selected[16]"
                                :options="[{value:0, text:'Липсват данни'}, {value:1, text:'Child-Pugh клас A'}, {value:2, text:'Child-Pugh клас B'}, {value:3, text:'Child-Pugh клас C'}, {value: 4, text:'След чернодробна трансплантация'}]"
                            ></b-form-select>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label>Наследствена тромбофилия:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="selected[17]"
                                    :options="[{value:0, text:'Липсват данни'}, {value:1, text:'Има данни за такава'}]"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label>Анамнеза за Guillain-Barré:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="selected[18]"
                                    :options="[{value:0, text:'Липсват данни'}, {value:1, text:'Има данни за такава'}]"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="my-1" v-if="selected[1]==1">
                        <b-col sm="4">
                            <label>Бременни:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="selected[19]"
                                    :options="[{value:0, text:'Липсват данни'}, {value:1, text:'Планирана бременост'}, {value:2, text:'<20-та гестационна седмица'},{value:3, text:'>20-та гестационна седмица'}]"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="my-1" v-if="selected[1]==1">
                        <b-col sm="4">
                            <label>Кърмачки:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="selected[20]"
                                    :options="[{value:0, text:'Липсват данни'}, {value:1, text: 'Жената кърми'}]"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label>Алергии:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-select
                                :select-size="6"
                                v-model="selected[21]"
                                :options="[{value:0, text:'Липсват данни'}, {value:1, text:'Към типичните алергени'}, {value:2, text:'Към други ваксини; леки-умерени'}, {value:3, text:'Към други ваксини; тежки'}, {value: 4, text:'Към съставките на К-19 ваксина; леки-умерени след първа доза'}, {value:5, text:'Към съставките на К-19 ваксина; тежки/анафилаксия  след първа доза'}]"
                            ></b-form-select>
                        </b-col>
                    </b-row>

                    <b-row class="pt-5">
                        <b-col cols="12" class="text-center">
                            <b-button size="lg" variant="info" type="submit">Изчисли</b-button>
                            <b-button size="lg" class="ml-4" @click="Reset()">Изчисти</b-button>
                        </b-col>
                    </b-row>
                </b-form>
            </b-card>

            <b-card class="mt-5">
                <b-card-title>Библиография</b-card-title>
                <b-card-text>
                    <ol>
                        <li><a href="https://coronavirus.bg/bg/vaccinations/" target="_blank">https://coronavirus.bg/bg/vaccinations/</a></li>
                        <li><a href="https://www.cdc.gov/vaccines/covid-19/" target="_blank">https://www.cdc.gov/vaccines/covid-19/</a></li>
                        <li><a href="https://esmo.org/covid-19-and-cancer/covid-19-vaccination" target="_blank">https://esmo.org/covid-19-and-cancer/covid-19-vaccination</a></li>
                        <li><a href="https://eular.org/eular_sars_cov_2_vaccination_rmd_patients.cfm" target="_blank">https://eular.org/eular_sars_cov_2_vaccination_rmd_patients.cfm</a></li>
                        <li><a href="https://www.escardio.org/Education/COVID-19-and-Cardiology" target="_blank">https://escardio.org/Education/COVID-19-and-Cardiology</a></li>
                        <li><a href="https://n.neurology.org/content/97/15/720" target="_blank">https://n.neurology.org/content/97/15/720</a></li>
                        <li><a href="https://ejog.org/article/S0301-2115(21)00244-X/fulltext" target="_blank">https://ejog.org/article/S0301-2115(21)00244-X/fulltext</a></li>
                    </ol>
                </b-card-text>
            </b-card>

            <b-modal
                id="modal-1"
                title="Резултат"
                v-model="modal"
                centered
                :ok-only="true"
                ok-title="Добре"
                :headerBgVariant="variants[score]"
            >
                <p class="my-4">{{outcome}}</p>
            </b-modal>
        </b-container>
    </div>
</template>

<script>
let selection = [
    null,
    null,
    0,
    null,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
];
export default {
    name: "App",
    components: {},
    data() {
        return {
            selected: JSON.parse(JSON.stringify(selection)),
            map: {
                //question no: {selection: outcome ...}
                0: { 0: 1, 1: 1, 2: 0 },
                1: { 0: 0, 1: 0 },
                2: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
                3: { 0: 0, 1: 0, 2: 0 },
                4: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
                5: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
                6: { 0: 0, 1: 2, 2: 2, 3: 2 },
                7: { 0: 0, 1: 2, 2: 2 },
                8: { 0: 0, 1: 0, 2: 0, 3: 0 },
                9: { 0: 0, 1: 0, 2: 0, 3: 1, 4: 1, 5: 0, 6: 0, 7: 1 },
                10: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
                11: { 0: 0, 1: 0, 2: 0, 3: 0 },
                12: { 0: 0, 1: 2, 2: 2, 3: 2 },
                13: { 0: 0, 1: 2, 2: 2, 3: 2 },
                14: { 0: 0, 1: 0, 2: 1, 3: 2, 4: 2 },
                15: { 0: 0, 1: 1, 2: 1, 3: 1, 4: 1 },
                16: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 2 },
                17: { 0: 0, 1: 1 },
                18: { 0: 0, 1: 1 },
                19: { 0: 0, 1: 1, 2: 1, 3: 1 },
                20: { 0: 0, 1: 1 },
                21: { 0: 0, 1: 0, 2: 0, 3: 3, 4: 3, 5: 4 },
            },
            score: 0,
            states: {0:true,1:true,2:true,3:true,4:true,},
            outcomes: {
                0: "Лицето може да бъде ваксинирано, с която и да е oдобрена от ИАЛ ваксина, следвайки стандартните ваксинационни срокове.",
                1: "Препоръчително е лицето да бъде ваксинирано с mRNA ваксина, следвайки стандартните ваксинационни срокове. При индивиди на 5-11 годишна възраст 10μg/доза, а при индивиди на 11-17 годишна възраст 30μg/доза.",
                2: "Препоръчително е лицето да бъде ваксинирано с mRNA ваксина, включваща и трета доза, поставена 28 дни след втората ± четвърта доза, поставена до 6 месеца след третата (при умерен-тежък имунен дефицит).",
                3: "Лицето може да бъде ваксинирано след консултация и съгласие от алерголог; активно наблюдение до 30 минути след ваксинацията.",
                4: "За момента НЕ СЕ препоръчва ваксинация с ваксината, на която съставки са показали алергична реакция при пациента след първото ѝ прилагане. Препоръчва се консултация с алерголог и преценка за риск/полза от ваксинация.",
            },
            variants: ["info", "warning", "warning", "danger", "danger"],
            outcome: null,
            modal: false,
        };
    },
    methods: {
        Calculate(event) {
            event.preventDefault();
            event.stopPropagation();

            if(!this.validate()) return;

            this.score = 0;

            for (let i = 0; i < this.selected.length; i++) {
                let arr = this.map[i];
                if(i == 7) {
                    // additional notes
                    if(this.selected[i] == 1) this.outcomes[2] = "Препоръчително е лицето да бъде ваксинирано с mRNA ваксина, включваща и трета доза, поставена 28 дни след втората ± четвърта доза, поставена до 6 месеца след третата (при умерен-тежък имунен дефицит). *Ваксинацията при пациенти с АВРЗ трябва да се извърши независимо дали пациентът е прекарал COVID-19."
                    else if(this.selected[i] == 2) this.outcomes[2] = "Препоръчително е лицето да бъде ваксинирано с mRNA ваксина, включваща и трета доза, поставена 28 дни след втората ± четвърта доза, поставена до 6 месеца след третата (при умерен-тежък имунен дефицит). \n\n*Идеалният момнет за ваксинация е когато заболяването е в ремисия, но тя трябва да се извърши независимо от активността на заболяването, особено при високорискови пациенти, без значение дали пациентът е прекарал COVID-19.";
                    else this.outcomes[2] = "Препоръчително е лицето да бъде ваксинирано с mRNA ваксина, включваща и трета доза, поставена 28 дни след втората ± четвърта доза, поставена до 6 месеца след третата (при умерен-тежък имунен дефицит).";
                }
                if (arr[this.selected[i]] > this.score) this.score = arr[this.selected[i]];
            }

            this.outcome = this.outcomes[this.score];
            this.modal = true;
        },
        Reset() {
            this.selected = JSON.parse(JSON.stringify(selection));
            this.states = {0:true,1:true,2:true,3:true,4:true,};
        },
        validate() {
            for(let i=0; i < this.selected.length; i++) {
                if(this.selected[i]==null) {
                    this.$set(this.states,i,false);
                    document.getElementById('field'+i).scrollIntoView();
                    return false;
                }
                else {
                    this.$set(this.states,i,true);
                }
            }
            return true;
        }
    },
    watch: {
        selected: {
            handler(n) {
                for(let i=0; i < n.length; i++) {
                    if(n[i]!=null) {
                        this.$set(this.states,i,true);
                        
                    }
                }
            },
            deep:true
        }
    }
};
</script>

<style>
label {
    font-weight: bold;
}
.jumbotron {
    background: url("assets/bg.png") no-repeat center center;
    background-size: 100% 100%;
    max-height: 150px;
}
select option:checked {
    background: #c0ecfa;
}
@media (max-width: 576px) {
    .custom-radio {
        width: 100%;
    }
}
html { scroll-behavior: smooth; } 
</style>

