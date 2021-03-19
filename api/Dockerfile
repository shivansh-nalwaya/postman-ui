FROM ruby:latest

RUN (groupadd -g 1000 app && adduser --system --uid=1000 --gid=1000 --home /home/api --shell /bin/bash app)

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client yarn

RUN mkdir /api
WORKDIR /api

COPY Gemfile /api/Gemfile
COPY Gemfile.lock /api/Gemfile.lock

RUN bundle install

COPY . /api
RUN yarn install --check-files

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["rails", "server", "-p", "3000", "-b", "0.0.0.0"]