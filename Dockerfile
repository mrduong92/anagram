FROM shincoder/homestead:php7.0

# Create site-nginx
RUN cd / && ./serve.sh anagram.dev /apps/public

# Install php intl
RUN apt-get update
RUN printf "\n" | apt-get install -y php7.0-intl
