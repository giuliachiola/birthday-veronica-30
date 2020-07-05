<template id="countdown-template">
  <div class="c-countdown">
    <div class="c-countdown__block">
      <div class="c-countdown__digit">{{ months | two_digits }}</div>
      <div class="c-countdown__text">mesi</div>
    </div>
    <div class="c-countdown__block">
      <div class="c-countdown__digit">{{ weeks | two_digits }}</div>
      <div class="c-countdown__text">settimane</div>
    </div>
    <div class="c-countdown__block">
      <div class="c-countdown__digit">{{ days | two_digits }}</div>
      <div class="c-countdown__text">giorni</div>
    </div>
    <div class="c-countdown__block">
      <div class="c-countdown__digit">{{ hours | two_digits }}</div>
      <div class="c-countdown__text">ore</div>
    </div>
    <div class="c-countdown__block">
      <div class="c-countdown__digit">{{ minutes | two_digits }}</div>
      <div class="c-countdown__text">minuti</div>
    </div>
    <div class="c-countdown__block">
      <div class="c-countdown__digit">{{ seconds | two_digits }}</div>
      <div class="c-countdown__text">secondi</div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  // props: {  },

  data() {
    return {
      now: moment(),
      timer: '',
    }
  },

  computed: {
    birthday() {
      return moment('2020-03-21')
    },

    diff() {
      return moment.duration(this.birthday.diff(this.now))
    },

    seconds() {
      return this.diff.seconds()
    },

    minutes() {
      return this.diff.minutes()
    },

    hours() {
      return this.diff.hours()
    },

    days() {
      return this.diff.days()
    },

    weeks() {
      return this.diff.weeks()
    },

    months() {
      return this.diff.months()
    },
  },

  created() {
    this.updateTime()
    this.timer = setInterval(this.updateTime, 1000)
  },

  beforeDestroy() {
    clearInterval(this.timer)
  },

  methods: {
    updateTime() {
      this.now = moment()
    },
  },
}
</script>

<style>
.c-countdown {
  color: white;
  display: flex;

  /* &:not:last-child {
    border-right: 1px solid white;
    padding-right: 20px;
    margin-right: 20px;
  } */
}

.c-countdown__digit {
  font-size: 7em;
}

.c-countdown__text {
  font-size: 3em;
}
</style>
