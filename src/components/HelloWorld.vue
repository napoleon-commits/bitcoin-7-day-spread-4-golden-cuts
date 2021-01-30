<template>
  <div>
    <div class="row" v-for="(cut, i) in PositiveGoldenCuts" :key="`positive-cut-${i}`">
      <div class="col">&Phi;<sup>{{10 - i}}</sup></div>
      <div class="col">{{PositiveGoldenCuts[9-i]}}</div>
    </div>
    <hr />
    <div class="row" v-for="(cut, i) in PositiveGoldenCuts" :key="`negative-cut-${i}`">
      <div class="col">&Phi;<sup>-{{i + 1}}</sup></div>
      <div class="col">{{cut}}</div>
    </div>
  </div>
</template>

<script>
import PositiveGoldenCuts from '@/static/PositiveGoldenCuts';

export default {
  name: 'HelloWord',
  data() {
    return {
      PositiveGoldenCuts,
    };
  },
}
</script>

<style>

</style>