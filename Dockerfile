# Chọn image Node.js
FROM node:18

# Set thư mục làm việc
WORKDIR /app-build

# Sao chép file package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Chạy ứng dụng
CMD ["pm2-runtime", "service.config.js"]
