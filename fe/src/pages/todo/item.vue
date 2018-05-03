<template>
  <div class='item' :class='{"item--done": isComplete, "item--expired": isExpired}'>
    <div class='item__main'>
      <template v-if='editing'>
        <input class='item__input item__input--title' v-model='edit.title'>
        <input class='item__input' v-model='edit.planTime'>
      </template>
      <template v-else>
        <span class='item__title item__input--title'>{{info.title}}</span>
        <span class='item__time'>{{info.planTime}}</span>
      </template>
    </div>
    <div class='item__opts'>
      <template v-if='!editing'>
        <template v-if='!isComplete'>
          <a class='item__opts__item' href="#" @click='showEdit'>Edit</a>
          <a class='item__opts__item' href="#" @click='done'>Done</a>
        </template>
        <a class='item__opts__item' href="#" @click='remove'>Delete</a>
      </template>
      <a v-else href="#" @click='save'>{{isAdd ? 'Add' : 'Save'}}</a>
    </div>
  </div>
</template>

<script>
import {saveTodo} from '@/services/todo.service'
import dt from '@/utils/dt'

export default {
  data: () => ({
    editing: false,
    edit: {
      id: '',
      title: '',
      planTime: ''
    }
  }),
  props: {
    info: Object
  },
  computed: {
    isAdd () {
      return !this.info
    },
    isComplete () {
      return this.info && this.info.done
    },
    isExpired () {
      return this.info && (!this.isComplete) && (this.info.planTime < dt.format(new Date()))
    }
  },
  methods: {
    showEdit () {
      Object.assign(this.edit, this.info)
      this.editing = true
    },
    save () {
      saveTodo(this.edit).then(res => {
        if (!this.isAdd) {
          Object.assign(this.info, res)
        } else {
          this.$emit('added', res)
        }
      }).then(_ => {
        this.resetForm()
      }).then(_ => {
        if (!this.isAdd) {
          this.editing = false
        }
      })
    },
    done () {
      const params = Object.assign({}, this.info, {done: true})
      saveTodo(params).then(res => {
        Object.assign(this.info, {done: res.done})
      })
    },
    resetForm () {
      this.edit = {
        id: '',
        title: '',
        planTime: this.isAdd ? dt.format(new Date()) : ''
      }
    },
    remove () {
      this.$emit('remove', this.info.id)
    }
  },
  created () {
    if (this.isAdd) {
      this.editing = true
      this.edit.planTime = dt.format(new Date())
    }
  }
}
</script>

<style type="text/css">
  .item {
    padding: 1rem/* 20px */;
    font-size: .8rem;
    display: flex;
    align-items: flex-end;
  }

  .item--done {
    color: green;
  }

  .item--expired {
    color: red;
  }

  .item__main {
    flex: 1;
    margin-right: 1rem/* 20px */;
    display: flex;
    align-items: flex-end;
  }

  .item__time {
    margin-left: 1rem/* 20px */;
    font-size: .7rem/* 12px */;
    color: #666;
  }

  .item__opts__item {
    margin-right: .3rem;
    font-size: .7rem/* 12px */;
    text-decoration: none;
  }

  .item__input {
    padding: .2rem/* 4px */ .4rem/* 8px */;
    margin-right: .5rem/* 10px */;
    border: 1px soild #333;
  }

  .item__input--title {
    flex: 1;
  }
</style>
