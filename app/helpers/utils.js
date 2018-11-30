import {
    userExpirationTime,
    usersTweetsExpirationTime,
    repliesExpirationTime
  } from 'config/constants'
  
  export function formatUserInfo (name, avatar, uid) {
    return {
      name,
      avatar,
      uid
    }
  }
  
  export function formatTweet (text, {name, avatar, uid}) {
    return {
      text,
      name,
      avatar,
      uid,
      timestamp: Date.now()
    }
  }
  
  export function formatTimestamp (timestamp) {
    const date = new Date(timestamp)
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  }
  
  function getMilliseconds (timestamp) {
    return new Date().getTime() - new Date(timestamp).getTime()
  }
  
  export function staleUser (timestamp) {
    return getMilliseconds(timestamp) > userExpirationTime
  }
  
  export function staleTweets (timestamp) {
    return getMilliseconds(timestamp) > usersTweetsExpirationTime
  }
  
  export function staleReplies (timestamp) {
    return getMilliseconds(timestamp) > repliesExpirationTime
  }
  
  export function formatReply ({name, avatar, uid}, reply) {
    return {
      name,
      avatar,
      uid,
      reply,
      timestamp: Date.now()
    }
  }
  