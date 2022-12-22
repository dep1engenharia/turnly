#!/bin/bash

function setup() {
  info "Setting up Turnly in development mode with docker... 🚀 "

  line

  info "Please wait, the next command will take a few minutes... 🕐 "

  line

  info "Installing local dependencies for typing... 📦 "
  execute "yarn install"

  line

  info "Adding the domains to the trusted hosts... 🔐 "
  set_hosts "${TURNLY_DOMAINS[@]}"

  line
}
