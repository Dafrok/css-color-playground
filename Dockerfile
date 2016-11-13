FROM node
ADD . /code
WORKDIR /code
RUN npm i
CMD npm run dev