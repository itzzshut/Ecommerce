import Redis from "ioredis";

let redis;

if (process.env.REDIS_URL) {
    redis = new Redis(process.env.REDIS_URL, {
        maxRetriesPerRequest: null,     // 🔥 unlimited retries
        enableReadyCheck: false,        // 🔥 don't wait for "ready" state
        reconnectOnError: (err) => {
            console.error("🔄 Redis reconnect error:", err);
            return true; // keep trying
        }
    });

    redis.on('error', (err) => {
        console.error('❌ Redis connection error:', err.message);
    });
} else {
    console.warn('⚠️ Redis URL not found. Using fake Redis for local dev.');

    // Create a fake Redis for local dev
    redis = {
        get: async () => null,
        set: async () => "OK",
        del: async () => 1
    };
}

export { redis };
