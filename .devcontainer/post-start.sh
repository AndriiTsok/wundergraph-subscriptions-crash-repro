#!/bin/bash

# this runs at Codespace creation - not part of pre-build

echo "post-create start"
echo "$(date)    post-create start" >> "$HOME/status"

# Start postgres
pg_ctl start


# NATS
export NATS_VERSION="2.10.9" && \
cd tmp && \
wget https://github.com/nats-io/nats-server/releases/download/v$NATS_VERSION/nats-server-v$NATS_VERSION-linux-amd64.tar.gz && \
tar -xzf nats-server-v$NATS_VERSION-linux-amd64.tar.gz && \
sudo mv nats-server-v$NATS_VERSION-linux-amd64/nats-server /usr/local/bin/ 


curl -sf https://binaries.nats.dev/nats-io/natscli/nats@latest | sh && sudo mv nats /usr/local/bin/

# YARN
yarn

# Download Wundergraph Router
npx wgc router download-binary -o ./tmp/wondergraph

echo "post-start complete"
echo "$(date +'%Y-%m-%d %H:%M:%S')    post-start complete" >> "$HOME/status"
