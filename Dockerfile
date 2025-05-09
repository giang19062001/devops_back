# Chọn image Node.js
FROM node:18

# Set thư mục làm việc trong container cua docker
WORKDIR /app

# Sao chép file package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Mở cổng cho ứng dụng Node.js
EXPOSE 5000

# Chạy ứng dụng Node.js
CMD ["npm", "start"]