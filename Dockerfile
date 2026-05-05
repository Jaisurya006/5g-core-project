FROM ubuntu:22.04
ENV DEBIAN_FRONTEND=noninteractive

# 1. Install prerequisites
RUN apt-get update && apt-get install -y \
    wget gnupg curl software-properties-common iproute2 iptables net-tools

# 2. Add MongoDB 6.0 Repository
RUN wget -qO- https://www.mongodb.org/static/pgp/server-6.0.asc | gpg --dearmor | tee /usr/share/keyrings/mongodb-keyring.gpg > /dev/null && \
    echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-keyring.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# 3. Add Open5GS Repository and Install both
RUN add-apt-repository -y ppa:open5gs/latest && \
    (apt-get update || (sleep 10 && apt-get update)) && \
    (apt-get install -y mongodb-org open5gs || (sleep 10 && apt-get install -y mongodb-org open5gs))

# 4. Final Setup
RUN mkdir -p /var/log/open5gs
CMD ["tail", "-f", "/dev/null"]
