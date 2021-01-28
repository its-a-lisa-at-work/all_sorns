bundle exec rake cf:on_first_instance db:migrate
bundle exec good_job start &
bundle exec rails s -p $PORT -e production