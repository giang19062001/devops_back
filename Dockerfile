# Chọn image Node.js
FROM node:18

# Set thư mục làm việc
WORKDIR /app-build

# Sao chép file package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install


# Cài PM2 toàn cục
RUN npm install -g pm2

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Chạy ứng dụng
CMD ["pm2-runtime", "service.config.js"]
