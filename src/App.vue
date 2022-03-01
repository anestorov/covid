<template>
    <div id="app">
     
        <b-img :src="require('./assets/bg.png')" style="width:100%"></b-img>

        <b-container fluid class="mt-3">
            <b-card>
                <b-form @submit="Calculate">
                    <b-row class="my-1" id="field0">
                        <b-col sm="4">
                            <label :style="{color:states[0]===false?'red':null}">Възраст:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-group>
                                <b-form-radio-group
                                    :style="{color:states[0]===false?'red':null}"
                                    :state="states[0]"
                                    v-model="selected[0]"
                                    :options="[{value:0, text:'5 - 11г.'}, {value:1, text: '12 - 17г.'}, {value:2, text:'Над 18г.'}]"
                                ></b-form-radio-group>
                                <b-form-invalid-feedback :state="states[0]">Изберете опция</b-form-invalid-feedback>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row class="my-1" id="field1">
                        <b-col sm="4">
                            <label :style="{color:states[1]===false?'red':null}">Пол:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-group>
                                <b-form-radio-group
                                    :style="{color:states[1]===false?'red':null}"
                                    v-model="selected[1]"
                                    :options="[{value:0, text:'Мъж'}, {value:1, text:'Жена'}]"
                                ></b-form-radio-group>
                                <b-form-invalid-feedback :state="states[1]">Изберете опция</b-form-invalid-feedback>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="my-1" id="field2">
                        <b-col sm="4">
                            <label>Обществен риск:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-select
                                :select-size="6"
                                v-model="selected[2]"
                                :options="[{value: 0, text:'Не съобщава'}, {value:1, text:'Нисък (20 случаи/ден)'}, {value:2, text:'Умерен (200 случаи/ден)'}, {value:3, text:'Висок (2500 случаи/ден)'}, {value:4, text:'Много висок (6800 случаи/ден)'}, {value:5, text:'Екстремно висок (13600 случаи/ден)'}]"
                            ></b-form-select>
                        </b-col>
                    </b-row>

                    <b-row class="my-1" id="field3">
                        <b-col sm="4">
                            <label :style="{color:states[3]===false?'red':null}">Индекс на телесната маса (BMI):</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-group>
                                <b-form-radio-group
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
                            <label>Захарен диабет:</label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-select
                                :select-size="5"
                                v-model="selected[4]"
                                :options="[{value:0, text:'Не съобщава'}, {value:1, text:'Компенсиран тип 1 диабет (HBA1C <6.5%)'}, {value:2, text:'Декомпенсиран тип 1 диабет (HBA1C >7.5%)'}, {value:3, text:'Компенсиран тип 2 диабет (HBA1C <6.5%)'}, {value:4, text:'Декомпенсиран тип 2 диабет (HBA1C >7.5%)'}]"
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
                                :options="[{value:0, text:'Не съобщава'}, {value:1, text:'Стадий I (GFR > 90 mL/min)'}, {value:2, text:'Стадий II (GFR 60-89 mL/min)'}, {value:3, text:'Стадий III (GFR 30-59 mL/min)'}, {value:4, text:'Стадий IV (GFR 15-29 mL/min)'}, {value:5, text: 'Стадий V (GFR < 15 mL/min) и/или на бъбречно-заместителна терапия'}]"
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
                                :options="[{value:0, text:'Не съобщава'}, {value:1, text:'Солидно заболяване'}, {value:2, text:'Хематологично заболяване'}, {value:3, text:'Метастазирало заболяване'}]"
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
                                    :options="[{value:0, text:'Не съобщава'}, {value:1, text:'Ремисия'}, {value:2, text:'Активно'}]"
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
                                <b-form-select
                                    v-model="selected[8]"
                                    :options="[{value:0, text:'Не съобщава'}, {value:1, text:'Бронхиална астма (независимо от стадия)'}, {value:2, text:'ХОББ (с доминиращ хроничен бронхит) '}, {value:3, text:'ХОББ (с доминиращ емфизем)'}, {value:4, text: 'ХОББ (смесен тип)'}]"
                                    :select-size="5"
                                ></b-form-select>
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
                                :options="[{value:0, text:'Не съобщава'}, {value:1, text:'Вродени сърдечни заболявания'}, {value:2, text:'Коронарна болест'}, {value:3, text:'Преживял инсулт или транзирторна исхемична атака'}, {value: 4, text:'Предсърдно мъждене'}, {value:5, text:'Сърдечна недостатъчност (независимо от стадия)'}, {value:6, text:'Периферна съдова болест (независимо от стадия)'}, {value:7, text:'Преживял тромбоза или БТЕ'}]"
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
                                :options="[{value:0, text:'Не съобщава'}, {value:1, text:'Болест на Паркинсон'}, {value:2, text:'Епилепсия'}, {value:3, text:'Болест на моторните неврони, множественна склероза, миастания или болест на Хънтингтън'}, {value: 4, text:'Детска церебрална пареза (ДЦП)'}]"
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
                                    :options="[{value:0, text:'Не съобщава'}, {value:1, text:'Биполярно афективно разстройство'}, {value:2, text:'Шизофрения'}, {value:3, text:'Деменция'}]"
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
                                    :options="[{value:0, text:'Не съобщава'}, {value:1, text:'Клетъчен'}, {value:2, text:'Хуморален'}, {value:3, text:'Смесен'}]"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label>Активна химиотерапия: <b-icon icon="info-square-fill" variant="info" @click="modalChem=true" style="cursor:pointer;"></b-icon></label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="selected[13]"
                                    :options="[{value:0, text:'Не съобщава'}, {value:1, text:'Медикаменти група А'}, {value:2, text:'Медикаменти група B'}, {value:3, text:'Медикаменти група C'}]"
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
                                    :options="[{value:0, text:'Не съобщава'}, {value:1, text:'НСПВС'}, {value:2, text:'Стероиди'}, {value:3, text:'Антиревматични лекарства (DMARDs)'}, {value:4, text:'Биологични агенти'}]"
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
                                    :options="[{value:0, text:'Не съобщава'}, {value:1, text:'Хепатит B'}, {value:2, text:'Хепатит C'}, {value:3, text:'HIV (без състояние на СПИН)'}, {value:4, text:'HIV (със състояние на СПИН)'}, {value:5, text:'Туберкулоза'}]"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label>Хронична чернодробна недостатъчност: <b-icon icon="info-square-fill" variant="info" @click="modalLiver=true" style="cursor:pointer;"></b-icon></label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-select
                                :select-size="5"
                                v-model="selected[16]"
                                :options="[{value:0, text:'Не съобщава'}, {value:1, text:'Child-Pugh клас A (5-6 точки, най-малко тежко чернодробно заболяване)'}, {value:2, text:'Child-Pugh клас B (7-9 точки, умерено тежко чернодробно заболяване)'}, {value:3, text:'Child-Pugh клас C (10-15 точки, най-тежко чернодробно заболяване)'}, {value: 4, text:'След чернодробна трансплантация'}]"
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
                                    :options="[{value:0, text:'Не съобщава'}, {value:1, text:'Има данни за такава'}]"
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
                                    :options="[{value:0, text:'Не съобщава'}, {value:1, text:'Има данни за такава'}]"
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
                                    :options="[{value:0, text:'Не съобщава'}, {value:1, text:'Планирана бременост'}, {value:2, text:'<20-та гестационна седмица'},{value:3, text:'>20-та гестационна седмица'}]"
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
                                    :options="[{value:0, text:'Не съобщава'}, {value:1, text: 'Жената кърми'}]"
                                ></b-form-radio-group>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row class="my-1">
                        <b-col sm="4">
                            <label>Алергии: <b-icon icon="info-square-fill" variant="info" @click="modalAllergies=true" style="cursor:pointer;"></b-icon></label>
                        </b-col>
                        <b-col sm="8">
                            <b-form-select
                                :select-size="6"
                                v-model="selected[21]"
                                :options="[{value:0, text:'Не съобщава'}, {value:1, text:'Към типичните алергени'}, {value:2, text:'Към други ваксини; леки-умерени'}, {value:3, text:'Към други ваксини; тежки'}, {value: 4, text:'Към съставките на К-19 ваксина; леки-умерени след първа доза. ВИЖ ИНФО СЪДЪРЖАНИЕ ВАКСИНИ'}, {value:5, text:'Към съставките на К-19 ваксина; тежки/анафилаксия  след първа доза. ВИЖ ИНФО СЪДЪРЖАНИЕ ВАКСИНИ'}]"
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

            <b-card class="mt-2 mb-2" bg-variant="info">
                <b-card-text class="text-center text-white">
                    Създадено от:  д-р Георги Димитров; д-р Трифон Вълков; д-р Димитър Димитров; д-р Тома Томов; проф. Радка Аргирова.
                </b-card-text>
            </b-card>

            <b-modal title="Резултат" v-model="modalOutcome" centered :ok-only="true" ok-title="Добре" :headerBgVariant="variant">
                <p class="my-4">{{outcome}}</p>
            </b-modal>

            <b-modal title="ГРУПИ НА ХИМИОТЕРАПЕВТИЧНИ ПРЕПАРАТИ" centered v-model="modalChem" hide-footer size="lg">
                <b-table-simple hover small responsive>
                    <b-tbody>
                         <b-tr variant="info">
                            <b-td>
                                <strong>Група A</strong> (с &lt;10% риск от неутропения): 5-FU single agent; Abiraterone; Anagrelide; Aromatase inhibitors; Atezolizumab single agent; Bevacizumab single agent; Bisphosphonate; Busulfan; Capecitabine single agent; CDK4/6 inhibitors; Cetuximab; Cisplatin based regimens; Denosumab; Durvalumab; Enzalutamide; Fulvestrant; Hydroxycarbamide Interferon (all formulations); Ipilimumab single agent; Lenvatinib; Methotrexate; Mitomycin C; mTOR inhibitors; Nivolumab single agent; Panitumumab; PARP inhibitors; Pembrolizumab single agent; Pemetrexed; Raltitrexed; Regorafinib; Sorafenib; Tamoxifen; Taxane – weekly Trastuzumab +/- pertuzumab Tyrosine kinase inhibitors (including ALK &/or ROS).
                            </b-td>
                        </b-tr>
                         <b-tr variant="warning">
                            <b-td>
                                <strong>Група B</strong> (с 10% - 50% риск от неутропения): ABVD; Anthracycline based regimens; Asparaginase based regimens; BEACOPP; Bendamustine; Brentuximab vedotin; BTK inhibitors; Cabazitaxel; Carboplatin based regimens; CHOP; Chorambucil; Cladrabine; CMF; CVAD; Cyclophosphamide/Fludarabine combinations; Dacarbazine based regimens; Daratumumab; DHAP; ESHAP; Etoposide based regimens; FEC; GDP; Gemcitabine; ICE; Ifophosphamide based regimens; IMIDs; Irinotecan and Oxaliplatin based regimens; JAK inhibitors; Liposomal doxorubicin; Lomustine; Mogalizumab; MVAC; Nab-paclitaxel; Obinutuzumab; Pentostatin; PI3Kinase inhibitors; Proteosome inhibitors; Rituximab; Taxane – 3 weekly; Temozolomide; Topotecan; Trastuzumab-emtansine; Ventoclax.
                            </b-td>
                        </b-tr>
                         <b-tr variant="danger">
                            <b-td>
                                <strong>Група C</strong> (с &gt;50% риск от неутропения): All ALL/AML regimens; BEP; Highly immunosuppressive chemotherapy (e.g. FluDAP, high dose Methotrexate & Cytarabine); Trifuradine/ Tipracil.
                            </b-td>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
            </b-modal>

            <b-modal title="ХРОНИЧНА ЧЕРНОДРОБНА НЕДОСТАТЪЧНОСТ" centered v-model="modalLiver" hide-footer size="lg">
                <b-table-simple hover small responsive>
                    <b-thead head-variant="dark">
                        <b-tr>
                            <b-th colspan="4">Child-Pugh класове, получени на база общ брой точки:</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                         <b-tr variant="info">
                            <b-th colspan="4">Клас А = 5-6 точки (най-малко тежко чернодробно заболяване)</b-th>
                        </b-tr>
                         <b-tr variant="warning">
                            <b-th colspan="4">Клас В = 7-9 точки (умерено тежко чернодробно заболяване)</b-th>
                        </b-tr>
                         <b-tr variant="danger">
                            <b-th colspan="4">Клас С = 10-15 точки (най-тежко чернодробно заболяване)</b-th>
                        </b-tr>
                        <b-tr><b-th>Клинични и лабор. критерии</b-th><b-th>1 точка</b-th><b-th>2 точки</b-th><b-th>3 точки</b-th></b-tr>
                        <b-tr><b-th>Енцефалопатия</b-th><b-td>Няма</b-td><b-td>Лека до умерена</b-td><b-td>Тежка</b-td></b-tr>
                        <b-tr><b-th>Асцит</b-th><b-td>Няма</b-td><b-td>Лек до умерен</b-td><b-td>Тежък</b-td></b-tr>
                        <b-tr><b-th>Билирубин (µmol/l)</b-th><b-td>&lt;34.2 µmol/l</b-td><b-td>34.2 - 51.3 µmol/l</b-td><b-td>&gt;51.3 µmol/l</b-td></b-tr>
                        <b-tr><b-th>Албумин (g/l)</b-th><b-td>&gt;35 g/l</b-td><b-td>28 - 35 g/l</b-td><b-td>&lt;28 g/l</b-td></b-tr>
                        <b-tr><b-th>РТ (сек) удълж.</b-th><b-td>&lt;4</b-td><b-td>4 - 6</b-td><b-td>&gt;6</b-td></b-tr>
                        <b-tr><b-th>РТ (INR)</b-th><b-td>&lt;1.7</b-td><b-td>1.7 - 2.2</b-td><b-td>&gt;2.3</b-td></b-tr>
                    </b-tbody>
                </b-table-simple>
            </b-modal>

            <b-modal title="СЪСТАВКИ НА ОДОБРЕНИТЕ ВАКСИНИ" centered v-model="modalAllergies" hide-footer size="lg">
                <b-table-simple hover small responsive>
                    <b-tbody>
                         <b-tr style="background:rgb(255 236 202); color: rgb(131 93 24);">
                            <b-td>
                                <strong>Pfizer/BioNTech (Comirnaty):</strong>
                                <p>Eдна стандартна доза (0,3 ml) съдържа 30 микрограма информационна РНК (иРНК); Eдна детска доза (0,2 ml) съдържа 10 микрограма иРНК (включени в липидни наночастици). Едноверижна, 5’-кепирана информационна РНК (иРНК), произведена с използване на безклетъчна in vitro транскрипция от съответните ДНК-матрици, кодиращи вирусния шипов (spike) протеин на SARS-CoV-2.</p>
                                <p>Списък на помощните вещества:<br />(4-хидроксибутил) азанедиил бис (хексан-6,1-диил) бис (2-хексилдеканоат) (ALC-0315); 2 [(полиетиленгликол)-2000]-N,N-дитетрадецилацетамид (ALC-0159); 1,2-дистеароил-sn-глицеро-3-фосфохолин (DSPC); холестерол; калиев хлорид; калиев дихидрогенфосфат; натриев хлорид; динатриев фосфатдихидрат; захароза; вода за инжекции.</p>
                                <p><strong>NB!</strong> Ваксината на Pfizer/BioNTech не съдържа яйца, консерванти или латекс.</p>
                            </b-td>
                        </b-tr>
                         <b-tr style="background:rgb(228 239 245); color: rgb(16 84 99);">
                            <b-td>
                                <strong>Moderna (Spikevax):</strong>
                                <p>Една стандартна доза (0,5 ml) съдържа 100 микрограма иРНК; Една бустер доза (0,25 ml), съдържаща 50 микрограма иРНК (включени в SM-102 липидни наночастици). Едноверижна, 5’-кепирана информационна РНК (иРНК), произведена с използването на безклетъчна in vitro транскрипция от съответните ДНК-матрици, кодираща вирусния шипов (spike) протеин на SARS-CoV-2</p>
                                <p>Списък на помощните вещества:<br />липид SM-102 (хептадекан-9-ил 8-{(2-хидроксиетил)[6-оксо-6-(ундецилокси)хексил]амино}октаноат); холестерол; 1,2-дистеароил-sn-глицеро-3-фосфохолин (DSPC); 1,2-димиристоил-rac-глицеро-3 метоксиполиетиленгликол-2000 (PEG2000 DMG); трометамол; трометамол хидрохлорид; оцетна киселина; натриев ацетат трихидрат; захароза; вода за инжекции.</p>
                                <p><strong>NB!</strong> Ваксината на Moderna не съдържа яйца, консерванти или латекс.</p>
                            </b-td>
                        </b-tr>
                         <b-tr style="background:rgb(238 255 230); color: rgb(2 79 8);">
                            <b-td>
                                <strong>AstraZeneca (Vaxzevria):</strong>
                                <p>Една доза (0,5 ml) съдържа Аденовирус от шимпанзе, кодиращ вирусния шипов (spike) гликопротеин на SARS-CoV-2 (ChAdOx1-S)*, не по-малко от 2,5 × 108 инфекциозни единици (infectious units, Inf.U)<br />*Произведен чрез рекомбинатна технология в човешки бъбречни клетки, култивирани в хранителни среди.</p>
                                <p>Списък на помощните вещества:<br />L-хистидин; L-хистидин хидрохлорид монохидрат; магнезиев хлорид хексахидрат; полисорбат 80 (E 433); етанол; захароза; натриев хлорид; динатриев едетат дихидрат; вода за инжекции.</p>
                                <p><strong>NB!</strong> Аденовирусът, който се съдържа ваксината Vaxzevria на AstraZeneca, представлява генетично модифициран организъм. В същото време тази ваксина не съдържа яйца, консерванти или латекс.</p>
                            </b-td>
                        </b-tr>
                        <b-tr style="background: rgb(236 214 247); color: rgb(52 7 67);">
                            <b-td>
                                <strong>Johnson & Johnson (Janssen COVID-19 vaccine):</strong>
                                <p>Една доза (0,5 ml) съдържа Аденовирус тип 26, кодиращ SARS-CoV-2 шипов (spike) гликопротеин (Ad26.COV2-S)*, не по-малко от 8,92 log10 инфекциозни единици (infectious units, Inf.U).<br />* Произведен в клетъчна линия PER.C6 TetR и чрез рекомбинантна ДНК технология.</p>
                                <p>Списък на помощните вещества:<br />2-хидроксипропил-β-циклодекстрин (HBCD); лимонена киселина монохидрат; етанол; хлороводородна киселина (за корекция на pH); полисорбат 80; натриев хлорид; натриев хидроксид (за корекция на pH); тринатриев цитрат дихидрат; вода за инжекции.</p>
                                <p><strong>NB!</strong> Аденовирусът, който се съдържа във ваксината на Johnson & Johnson, представлява генетично модифициран организъм. Тази ваксина не съдържа яйца, консерванти или латекс.</p>
                            </b-td>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
            </b-modal>
        </b-container>
    </div>
</template>

<script>
let selection = [null,null,0,null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
export default {
    name: "App",
    components: {},
    data() {
        return {
            selected: JSON.parse(JSON.stringify(selection)),
            map: {
                //question no: {selection: outcome ...}
                0: { 0: 24, 1: 23, 2: 0 },
                1: { 0: 0, 1: 0 },
                2: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
                3: { 0: 0, 1: 0, 2: 0 },
                4: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
                5: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
                6: { 0: 0, 1: 20, 2: 20, 3: 20 },
                7: { 0: 0, 1: 21, 2: 22 },
                8: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
                9: { 0: 0, 1: 0, 2: 0, 3: 10, 4: 10, 5: 0, 6: 10, 7: 10 },
                10: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
                11: { 0: 0, 1: 0, 2: 0, 3: 0 },
                12: { 0: 0, 1: 20, 2: 20, 3: 20 },
                13: { 0: 0, 1: 20, 2: 20, 3: 20 },
                14: { 0: 0, 1: 0, 2: 10, 3: 20, 4: 20 },
                15: { 0: 0, 1: 10, 2: 10, 3: 10, 4: 20, 5: 10 },
                16: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 20 },
                17: { 0: 0, 1: 10 },
                18: { 0: 0, 1: 10 },
                19: { 0: 0, 1: 10, 2: 10, 3: 10 },
                20: { 0: 0, 1: 10 },
                21: { 0: 0, 1: 0, 2: 0, 3: 30, 4: 30, 5: 40 },
            },
            score: 0,
            states: {0:true,1:true,2:true,3:true,4:true,},
            outcomes: {
                0: "Лицето може да бъде ваксинирано, с която и да е oдобрена от ИАЛ ваксина, следвайки стандартните ваксинационни срокове.",
                10: "Препоръчително е лицето да бъде ваксинирано с mRNA ваксина, следвайки стандартните ваксинационни срокове.",
                20: "Препоръчително е лицето да бъде ваксинирано с mRNA ваксина, включваща и трета доза, поставена 28 дни след втората ± четвърта доза, поставена до 6 месеца след третата (при умерен и тежък имунен дефицит).",
                21: "Препоръчително е лицето да бъде ваксинирано с mRNA ваксина, включваща и трета доза, поставена 28 дни след втората ± четвърта доза, поставена до 6 месеца след третата (при умерен и тежък имунен дефицит). *Ваксинацията при пациенти с АВРЗ трябва да се извърши, независимо дали пациентът е прекарал COVID-19.",
                22: "Препоръчително е лицето да бъде ваксинирано с mRNA ваксина, включваща и трета доза, поставена 28 дни след втората ± четвърта доза, поставена до 6 месеца след третата (при умерен и тежък имунен дефицит). *Идеалният момнет за ваксинация е когато заболяването е в ремисия, но тя трябва да се извърши, независимо от активността на заболяването, особено при високо-рискови пациенти, без значение дали пациентът е прекарал COVID-19.",
                23: "Препоръчително е лицето да бъде ваксинирано с Comirnaty (30μg/доза), следвайки стандартните ваксинационни срокове.",
                24: "Препоръчително е лицето да бъде ваксинирано с Comirnaty (10μg/доза), следвайки стандартните ваксинационни срокове.",
                30: "Лицето може да бъде ваксинирано след консултация и съгласие от алерголог; активно наблюдение до 30 минути след ваксинацията.",
                40: "За момента НЕ СЕ препоръчва ваксинация с ваксината, на която съставки са показали алергична реакция при пациента след първото ѝ прилагане. Препоръчва се консултация с алерголог и преценка за риск/полза от ваксинация.",
            },
            outcome: null,
            modalOutcome: false,
            modalAllergies: false,
            modalChem: false,
            modalLiver: false,
        };
    },
    computed: {
        variant: function() {
            if(this.score >= 30) return "danger";
            else if(this.score >= 10) return "warning";
            else return "info";
        }
    },
    methods: {
        Calculate(event) {
            event.preventDefault();
            event.stopPropagation();

            if(!this.validate()) return;

            this.score = 0;

            for (let i = 0; i < this.selected.length; i++) {
                let arr = this.map[i];
                
                if (arr[this.selected[i]] > this.score) this.score = arr[this.selected[i]];
            }

            this.outcome = this.outcomes[this.score];
            this.modalOutcome = true;
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
    max-height: 300px;
    height: 300px;
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
.my-1 {
    padding-bottom: 15px;
}
</style>

