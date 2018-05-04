import http from '@/utils/http'

const serialize = (item) => {
  return {
    id: item.id,
    title: item.title,
    planTime: item.plan_time,
    createTime: item.create_time,
    done: item.done
  }
}

export const getTodos = () => {
  return http.get('/todos').then(result => {
    return result ? result.map(item => serialize(item)) : []
  })
}

export const saveTodo = (params) => {
  const {id, title, planTime} = params
  params = {
    id,
    title,
    plan_time: planTime,
    done: params.done
  }

  if (params.id) {
    return http.put(`/todos/${params.id}`, params).then(serialize)
  } else {
    return http.post('/todos', params).then(serialize)
  }
}

export const removeTodo = (id) => {
  return http.del(`/todos/${id}`)
}
