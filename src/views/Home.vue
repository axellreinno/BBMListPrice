<template>
  <Fineoz>
    <FineozHeader>
      <FineozContainer>
        <FineozHeaderTitle>Test Fineoz</FineozHeaderTitle>
      </FineozContainer>
    </FineozHeader>
    <FineozBody>
      <FineozContainer>
        <a-form layout="vertical">
          <a-form-item label="Jumlah Liter" :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }">
            <a-input-number :min="1" v-model="form.inpJumlah" style="width: 200px;"
            :parser="value => `${value}`.replace(/[^0-9]+/g, '')"/>
          </a-form-item>
          <a-form-item label="Harga Premium" :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }">
            <a-input-number
              style="width: 200px;"
              :formatter="value => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
              :parser="value => value.replace(/Rp\s?|(,*)/g, '')"
              :min="0"
              v-model="form.inpHargaPremium"
            />
          </a-form-item>
          <a-form-item label="Harga Pertalite" :label-col="{ span: 4 }" :wrapper-col="{ span: 12 }">
            <a-input-number
              style="width: 200px;"
              :formatter="value => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
              :parser="value => value.replace(/Rp\s?|(,*)/g, '')"
              :min="0"
              v-model="form.inpHargaPertalite"
            />
          </a-form-item>
        </a-form>
        <FineozTableResponsive>
          <FineozTable>
            <FineozTableHead>
              <FineozTableTr>
                <FineozTableTd class="column1" width="200">Jumlah Liter</FineozTableTd>
                <FineozTableTd class="column2">Premium</FineozTableTd>
                <FineozTableTd class="column3">Pertalite</FineozTableTd>
              </FineozTableTr>
            </FineozTableHead>
            <FineozTableBody>
              <FineozTableTr v-for="index in form.inpJumlah" :key="index">
                <FineozTableTd
                  class="column1"
                  @mouseover="evtMouseOver"
                  @mouseout="evtMouseOut"
                >{{index}}</FineozTableTd>
                <FineozTableTd
                  class="column2"
                  @mouseover="evtMouseOver"
                  @mouseout="evtMouseOut"
                >{{form.inpHargaPremium * index | rupiah}}</FineozTableTd>
                <FineozTableTd
                  class="column3"
                  @mouseover="evtMouseOver"
                  @mouseout="evtMouseOut"
                >{{form.inpHargaPertalite * index | rupiah}}</FineozTableTd>
              </FineozTableTr>
            </FineozTableBody>
          </FineozTable>
        </FineozTableResponsive>
      </FineozContainer>
    </FineozBody>
  </Fineoz>
</template>

<script>
// @ is an alias to /src
import {
  Fineoz,
  FineozContainer,
  FineozHeader,
  FineozHeaderTitle,
  FineozBody,
  FineozTableResponsive,
  FineozTable,
  FineozTableHead,
  FineozTableBody,
  FineozTableTr,
  FineozTableTd
} from "@/styled";

export default {
  name: "home",
  components: {
    Fineoz,
    FineozContainer,
    FineozHeader,
    FineozHeaderTitle,
    FineozBody,
    FineozTableResponsive,
    FineozTable,
    FineozTableHead,
    FineozTableBody,
    FineozTableTr,
    FineozTableTd
  },
  data: () => ({
    form: {
      inpJumlah: 20,
      inpHargaPremium: 6450,
      inpHargaPertalite: 7650
    }
  }),
  methods: {
    evtMouseOver(e) {
      var elm = document.querySelectorAll(`.${e.target.classList[0]}`);
      elm.forEach(item => {
        item.classList.add("td-hover");
      });
      e.target.classList.add("td-hover");
      e.target.parentNode.classList.add("tr-active");
    },
    evtMouseOut(e) {
      var elm = document.querySelectorAll(`.${e.target.classList[0]}`);
      elm.forEach(item => {
        item.classList.remove("td-hover");
      });
      e.target.classList.remove("td-hover");
      e.target.parentNode.classList.remove("tr-active");
    },
  },
  filters: {
    rupiah(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  },
};
</script>
