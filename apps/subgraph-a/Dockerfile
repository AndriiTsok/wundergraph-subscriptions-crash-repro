# This file is generated by Nx.
#
# Build the docker image with `npx nx docker-build subgraph-a`.
# Tip: Modify "docker-build" options in project.json to change docker build args.
#
# Run the container with `docker run -p 3000:3000 -t subgraph-a`.
FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

RUN addgroup --system subgraph-a && \
          adduser --system -G subgraph-a subgraph-a

COPY dist/apps/subgraph-a subgraph-a
RUN chown -R subgraph-a:subgraph-a .

# You can remove this install step if you build with `--bundle` option.
# The bundled output will include external dependencies.
RUN npm --prefix subgraph-a --omit=dev -f install

CMD [ "node", "subgraph-a" ]
