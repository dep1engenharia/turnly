#!/bin/bash

function print_system_statuses() {
  line

  info "You can access the apps at the following URLs: 👀 "

  line

  info "Backend Services: 📌 "

  line

  info " 🔴 -> Unavailable"
  info " 🟢 -> Available"

  line

  info " 🟢 Widgets API                             : http://{organization}.$APP_DOMAIN/api/v1/widgets"
  info " 🟢 Real Time Messaging API                 : http://{organization}.$APP_DOMAIN/api/v1/rtm"
  info " 🟢 Help Desk API                           : http://{organization}.$APP_DOMAIN/api/v1/help_desk"
  info " 🔴 Bank Office API                         : http://{organization}.$APP_DOMAIN/api/v1/bank_office"
  info " 🟢 Identity & Access Management API        : http://accounts.$APP_DOMAIN"

  line

  info "Local Infrastructure UIs: 📌 "

  line

  info " 🟢 Traefik Dashboard                       : http://infra.$APP_DOMAIN:$TRAEFIK_UI_PORT"
  info " 🟢 Elastic Search Dashboard                : http://infra.$APP_DOMAIN:$ELASTICSEARCH_UI_PORT"
  info " 🟢 Mongo Dashboard                         : http://infra.$APP_DOMAIN:$MONGO_UI_PORT"
  info " 🟢 Redis Dashboard                         : http://infra.$APP_DOMAIN:$REDIS_UI_PORT"
  info " 🟢 Storage Dashboard                       : http://infra.$APP_DOMAIN:$MINIO_UI_PORT"
  info " 🟢 RabbitMQ Dashboard                      : http://infra.$APP_DOMAIN:$RABBITMQ_UI_PORT"

  line
}
