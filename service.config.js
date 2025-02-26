module.exports = {
    apps: [
        {
            name: "devops_back",
            script: "bin/www",
            instances: 1,
            exec_mode: "cluster",
            listen_timeout: 50000,
            kill_timeout: 5000,
        },
    ],
};
