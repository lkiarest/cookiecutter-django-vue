<template>
  <div class='todo'>
    <div class='todo__header'>Todo List</div>
    <item v-for='item in list' :info='item' :key='item.id' @remove='removeItem'></item>
    <item @added='loadData'></item>
  </div>
</template>

<script>
import {getTodos, removeTodo} from '@/services/todo.service'
import Item from './item'

export default {
  data: () => ({
    list: []
  }),
  methods: {
    loadData () {
      return getTodos().then(result => {
        this.list = result
      })
    },
    removeItem (id) {
      return removeTodo(id).then(_ => {
        this.loadData()
      })
    }
  },
  created () {
    this.loadData()
  },
  components: {
    Item
  }
}
</script>

<style type="text/css">
  .todo {
    width: 80%;
    margin: 0 auto;
    border: 1px solid #ddd;
  }

  .todo__header {
    padding: 0.2rem 1rem/* 20px */;
    border-bottom: 1px solid #ddd;
    background-color: #eee;
  }
</style>
