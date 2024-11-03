import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const Rozari = ({route}) => {
  const {tendo} = route.params;

  const matendo = {
    furaha: [
      'Tendo la kwanza; Malaika Gabrieli anampasha habari Maria kuwa atakuwa Mama wa Mungu. Tumwombe Mungu atujalie unyenyekevu.',
      'Tendo la pili; Maria Mtakatifu anakwenda kumtembelea Elizabeti. Tumwombe Mungu atujalie mapendo ya jirani.',
      'Tendo la tatu; Yesu anazaliwa Betlehemu. Tumwombe Mungu atujalie moyo wa ufukara.',
      'Tendo la nne; Yesu anatolewa hekaluni. Tumwombe Mungu atujalie usafi wa moyo.',
      'Tendo la tano; Maria anamkuta Yesu hekaluni. Tumwombe Mungu atujalie kuwatii wakubwa wetu.',
    ],

    uchungu: [
      'Tendo la kwanza; Yesu anatoka jasho la damu kwa ajili yetu. Tumwombe Mungu atujalie sikitiko la dhambi.',
      'Tendo la pili; Yesu anapigwa kwa mijeledi kwa ajili yetu. Tumwombe Mungu atujalie kuacha dhambi za uchafu.',
      'Tendo la tatu; Yesu anatiwa miiba kichwani kwa ajili yetu. Tumwombe Mungu atujalie kushinda kiburi.',
      'Tendo la nne; Yesu anachukua Msalaba kwa ajili yetu. Tumwombe Mungu atujalie kuvumilia taabu.',
      'Tendo la tano; Yesu anakufa Msalabani. Tumwombe Mungu atujalie kuwapenda Yesu na Maria.',
    ],

    utukufu: [
      'Tendo la kwanza; Yesu anafufuka. Tumwombe Mungu atujalie kugeuka watakatifu.',
      'Tendo la pili; Yesu anapaa mbinguni. Tumwombe Mungu atujalie kwenda mbinguni.',
      'Tendo la tatu; Roho Mtakatifu anawashukia Mitume. Tumwombe Mungu atujalie bidii katika dini yetu.',
      'Tendo la nne; Bikira Maria anapalizwa mbinguni. Tumwombe Mungu atujalie kufa vizuri.',
      'Tendo la tano; Bikira Maria anawekwa Malkia mbinguni. Tumwombe Mungu atujalie kudumu katika njia njema.',
    ],

    mwanga: [
      'Tendo la kwanza; Yesu anabatizwa Mto Jordani. Tumwombe Mungu atujalie uaminifu kwa ahadi zetu za ubatizo.',
      'Tendo la pili; Yesu anageuza maji kuwa divai huko Kana. Tumwombe Mungu atujalie kuukoleza ulimwengu kwa chachu ya injili.',
      'Tendo la tatu; Yesu anatangaza Ufalme wa Mungu. Tumwombe Mungu atujalie kupokea Ufalme wake kwa toba ya kweli.',
      'Tendo la nne; Yesu anageuka sura. Tumwombe Mungu atujalie neema ya kuung’arisha ulimwengu kwa uso wa Yesu.',
      'Tendo la tano; Yesu anaweka Sakramenti ya Ekaristia. Tumwombe Mungu atujalie neema ya kujitoa sadaka kwa ajili ya wengine.',
    ],
  };

  const selectedTendoArray = matendo[tendo] || [];

  return (
    <FlatList
      data={selectedTendoArray}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Kanuni ya Imani</Text>
          </View>
          <View style={styles.salaContainer}>
            <Text style={styles.salaText}>
              Nasadiki kwa Mungu, Baba Mwenyezi, mwumba mbingu na nchi, na kwa
              Yesu Kristo, Mwanae pekee Bwana wetu, aliyefunuliwa kwa uweza wa
              Roho Mtakatifu, akazaliwa na Bikira Maria, akateswa kwa mamlaka ya
              Ponsyo Pilato, akasulibiwa, akafa, akazikwa, akashuka kuzimu. Siku
              ya tatu akafufuka katika wafu, akapaa mbinguni, anakaa kuume kwa
              Mungu Baba Mwenyezi, toka huko atakuja kuwahukumu wazima na wafu.
              Nasadiki kwa Roho Mtakatifu, Kanisa takatifu katoliki, ushirika wa
              watakatifu, maondoleo ya dhambi, ufufuko wa miili na uzima wa
              milele. Amina.
            </Text>
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Baba Yetu</Text>
          </View>
          <View style={styles.salaContainer}>
            <Text style={styles.salaText}>
              Baba yetu uliye mbinguni, jina lako litukuzwe, ufalme wako ufike,
              mapenzi yako yatimizwe duniani kama mbinguni. Utupe leo riziki
              yetu ya kila siku. Utusamehe makosa yetu, kama tunavyowasamehe
              waliotukosea. Usitutie majaribuni, lakini utuokoe na yule mwovu.
              Amina.
            </Text>
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Salamu Maria</Text>
          </View>
          <View style={styles.salaContainer}>
            <Text style={styles.salaText}>
              Salamu Maria Umejaa neema Bwana yu nawe, Umembarikiwa wewe kuliko
              wanawake wote, na amebarikiwa tunda la tumbo lako Yesu. Mtakatifu
              Maria, Mama wa Mungu, utuombee sisi wakosefu, sasa na saa ya kufa
              kwetu. Amina.
            </Text>
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Atukuzwe Baba</Text>
          </View>
          <View style={styles.salaContainer}>
            <Text style={styles.salaText}>
              Atukuzwe Mungu Baba, Mwana na Roho Mtakatifu. Jinsi mwanzo, na
              sasa na siku zote, na milele. Amina.
            </Text>
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Tuwasifu Milele</Text>
          </View>
          <View style={styles.salaContainer}>
            <Text style={styles.salaText}>
              Tuwasifu milele, eeh Yesu, Maria na Yosefu
            </Text>
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Ee Yesu wangu</Text>
          </View>
          <View style={styles.salaContainer}>
            <Text style={styles.salaText}>
              Ee Yesu wangu, tusamehe dhambi zetu, tuepushe na moto wa milele,
              waongoze wote mbinguni, hasa wanaohitaji huruma yako. Amina.
            </Text>
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Matendo ya Rozari</Text>
          </View>
        </>
      }
      renderItem={({item, index}) => (
        <View style={styles.itemContainer}>
          <Text style={styles.itemNumber}>{index + 1}.</Text>
          <Text style={styles.tendoItem}>{item}</Text>
        </View>
      )}
      ListFooterComponent={
        <>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Salamu Malkia</Text>
          </View>
          <View style={styles.salaContainer}>
            <Text style={styles.salaText}>
              Salamu Malkia, Mama mwenye huruma, uzima, tulizo, na matumaini
              yetu, salamu. Tunakusii ugenini hapa sisi, wana wa Eva,
              tunakulilia, tukilalamika na kuhuzunika bondeni hukukwenye
              machozi. Haya basi mwombezi wetu, utuangalie kwa macho yako yenye
              huruma. Na mwisho wa ugeni huu utuonyeshe Yesu mzao na mbarikiwa
              wa tumbo lako, Ee mpole, ee mwema ee mpendelevu, Bikira Maria.
            </Text>
          </View>
        </>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  itemNumber: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  tendoItem: {
    flex: 1,
    fontSize: 18,
  },
  salaContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  salaText: {
    fontSize: 18,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
  headerContainer: {
    borderBottomWidth: 1,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default Rozari;
